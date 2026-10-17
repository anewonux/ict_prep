#!/usr/bin/env node
/**
 * 把 分册/ 下每个分册里的 ```mermaid 代码块渲染成 PNG，并在代码块后插入图片引用，
 * 这样无论用什么 Markdown 阅读器（含不支持 Mermaid 的）都能看到示意图。
 *
 * 用法: node scripts/render-diagrams.mjs
 * 幂等: 已渲染过的图片会跳过；已插入过图片引用的位置不会重复插入。
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(import.meta.dirname, '..');
const BOOKS = path.join(ROOT, '分册');
const ASSETS = path.join(ROOT, 'assets');
const TMP = path.join(ROOT, '.mmdtmp');
const MMDC = path.join(ROOT, 'node_modules', '.bin', 'mmdc');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

if (!fs.existsSync(BOOKS)) {
  console.error('❌ 找不到 分册/ 目录，请先运行 node scripts/assemble.mjs');
  process.exit(1);
}
fs.mkdirSync(ASSETS, { recursive: true });
fs.mkdirSync(TMP, { recursive: true });

const puppetCfg = path.join(TMP, 'puppeteer.json');
fs.writeFileSync(puppetCfg, JSON.stringify({ executablePath: CHROME, args: ['--no-sandbox'] }));

/** 从标题生成可读的文件名片段 */
function slugify(s) {
  return (
    s
      .replace(/[^\p{Script=Han}A-Za-z0-9]+/gu, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 60) || 'diagram'
  );
}

const files = fs.readdirSync(BOOKS).filter((f) => f.endsWith('.md')).sort();
let total = 0;
let rendered = 0;
let skipped = 0;
let failed = 0;
const failures = [];

for (const file of files) {
  const docPath = path.join(BOOKS, file);
  const text = fs.readFileSync(docPath, 'utf8');
  const lines = text.split('\n');
  const out = [];

  let chapter = 'root';
  let section = '';
  let idxInSection = 0;
  let inFence = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // ① mermaid 块必须最先判断，否则会被下面的通用围栏分支吞掉
    if (!inFence && trimmed === '```mermaid') {
      const block = [];
      let j = i + 1;
      while (j < lines.length && lines[j].trim() !== '```') {
        block.push(lines[j]);
        j++;
      }
      const body = block.join('\n');
      idxInSection++;

      const base = `${chapter}__${section || 'sec'}__${String(idxInSection).padStart(2, '0')}`;
      const pngRel = `../assets/${base}.png`;
      const pngAbs = path.join(ASSETS, `${base}.png`);
      total++;

      if (fs.existsSync(pngAbs)) {
        skipped++;
      } else {
        const mmdFile = path.join(TMP, `${base}.mmd`);
        fs.writeFileSync(mmdFile, body, 'utf8');
        try {
          execFileSync(
            MMDC,
            ['-i', mmdFile, '-o', pngAbs, '-p', puppetCfg, '-b', 'white', '-s', '3', '-q'],
            { stdio: 'pipe', env: { ...process.env, PUPPETEER_EXECUTABLE_PATH: CHROME } }
          );
          rendered++;
          process.stdout.write(`✅ ${base}.png\n`);
        } catch (e) {
          failed++;
          const msg = (e.stderr?.toString() || e.message || '')
            .split('\n')
            .slice(0, 3)
            .join(' ')
            .slice(0, 220);
          failures.push({ base, file, msg });
          process.stdout.write(`❌ ${base}  渲染失败: ${msg}\n`);
        }
      }

      out.push(line, ...block, '```');
      const next = lines[j + 1] ?? '';
      if (fs.existsSync(pngAbs) && !next.includes(base)) {
        out.push('', `![示意图](${pngRel})`, '');
      }
      i = j;
      continue;
    }

    // ② 其他围栏（bash / text / json…）内部一律不识别标题
    if (trimmed.startsWith('```') || trimmed.startsWith('~~~')) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }

    // ③ 只有代码块外的 # / ## 才是真标题
    if (line.startsWith('# ')) {
      chapter = slugify(line.slice(2));
      section = '';
      idxInSection = 0;
    } else if (line.startsWith('## ')) {
      section = slugify(line.slice(3));
      idxInSection = 0;
    }

    out.push(line);
  }

  fs.writeFileSync(docPath, out.join('\n'), 'utf8');
}

fs.rmSync(TMP, { recursive: true, force: true });

console.log(
  `\n共 ${total} 张示意图：新渲染 ${rendered} 张，命中缓存 ${skipped} 张，失败 ${failed} 张。`
);
if (failures.length) {
  console.log('\n失败清单（需手工修 Mermaid 语法）：');
  for (const f of failures) console.log(`  ${f.base}  ← ${f.file}\n      ${f.msg}`);
  process.exitCode = 1;
}
