#!/usr/bin/env node
/**
 * 把 parts/ 下的分册合并成最终交付物：
 *   1) 分册/<可读名>.md        —— 真正装教学内容的文件（每份可单独阅读）
 *   2) ictprepare-校赛省赛.md   —— 卷索引：卷首语 + 分册导航 + 全书目录（链接到分册）
 *   3) ictprepare-国赛.md       —— 同上
 *
 * 拆分的理由：合订后单文件超过 2 MB，编辑器与手机端打开都很吃力；
 * 拆成分册后每个文件 100~800 KB，按方向/层级别单独打开、单独打印都方便。
 *
 * 用法: node scripts/assemble.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const PARTS = path.join(ROOT, 'parts');
const BOOKS = path.join(ROOT, '分册');

fs.mkdirSync(BOOKS, { recursive: true });

/** 文档定义：卷索引 + 分册清单（顺序即阅读顺序） */
const DOCS = [
  {
    out: 'ictprepare-校赛省赛.md',
    level: '校赛 / 省赛',
    title: '华为 ICT 大赛 · 网络赛道 —— 校赛 / 省赛备考教学资料',
    intro: `> **适用范围**：校赛（校内选拔）、省赛（区域赛 / 省赛）阶段。
> **能力定位**：以 **HCIA-Datacom / HCIA-DCN / HCIA-Security / HCIA-WLAN** 的知识框架为主线，补齐比赛中真正会考到的原理细节与实验能力，并在每章末尾预埋 HCIE 进阶钩子。
> **篇幅**：四个方向共 **8 个分册**，本文件是卷索引；教学内容在 [\`分册/\`](分册/) 目录下的各个分册文件里。
> **使用方式**：先通读"考点定位"与"原理精讲"建立框架，再逐条敲一遍"华为设备配置"，最后用"真题精练"自测；错题回到"原理精讲"和"易错点与排错"定位盲区。
>
> **真题说明**：本资料中的真题依据华为 ICT 大赛历年公开赛题方向、华为认证考试真题回忆与官方教材例题整理改写，用于自测训练；正式参赛请以大赛官方考试大纲与题库为准。`,
    parts: [
      ['A1-数通-HCIA-上.md', 'A1-数通HCIA上-网络基础与以太网交换.md', '数通', 'HCIA', '网络基础与 TCP/IP、VRP 设备管理、以太网与 VLAN、STP/RSTP/MSTP'],
      ['A2-数通-HCIA-下.md', 'A2-数通HCIA下-编址路由与网络服务.md', '数通', 'HCIA', 'IP 编址与子网划分、路由基础与静态路由、OSPF 基础、应用层服务、ACL 与 NAT、IPv6 基础'],
      ['A3-DCN-HCIA-上.md', 'A3-DCNHCIA上-数据中心架构与设备.md', 'DCN', 'HCIA', '数据中心网络与 Spine-Leaf 架构、CloudEngine 设备系列、数据中心二层技术'],
      ['A4-DCN-HCIA-下.md', 'A4-DCNHCIA下-VXLAN与EVPN入门.md', 'DCN', 'HCIA', 'VXLAN 基础、BGP-EVPN 入门、网络虚拟化与 Fabric 基础'],
      ['A5-安全-HCIA-上.md', 'A5-安全HCIA上-防火墙与NAT认证.md', '安全', 'HCIA', '网络安全概述与威胁分析、防火墙基础与安全策略、NAT 技术详解、用户认证与 AAA'],
      ['A6-安全-HCIA-下.md', 'A6-安全HCIA下-VPN内容安全与攻防.md', '安全', 'HCIA', 'VPN 技术基础、内容安全与入侵防御、常见攻击与防御、终端与边界安全'],
      ['A7-WLAN-HCIA-上.md', 'A7-WLANHCIA上-标准射频与组网架构.md', 'WLAN', 'HCIA', 'WLAN 概述与 802.11 标准、射频与天线基础、组网架构与 CAPWAP 协议'],
      ['A8-WLAN-HCIA-下.md', 'A8-WLANHCIA下-配置漫游安全与排障.md', 'WLAN', 'HCIA', 'WLAN 配置与 AP 上线实战、漫游技术、安全技术、规划部署与故障排查'],
    ],
  },
  {
    out: 'ictprepare-国赛.md',
    level: '国赛',
    title: '华为 ICT 大赛 · 网络赛道 —— 国赛备考教学资料',
    intro: `> **适用范围**：全国总决赛（国赛）阶段，以及省赛的高分冲刺。
> **能力定位**：对标 **HCIE-Datacom / HCIE-DCN / HCIE-Security / HCIE-WLAN** 的深度，覆盖国赛压轴题真正会考的协议细节、设计方案题、排错题与新技术（SRv6、EVPN 分布式网关、RoCE 无损网络、Wi-Fi 6/7、网络自动化）。
> **与校赛省赛资料的关系**：本册**不重复基础概念**，默认读者已掌握《[校赛省赛备考教学资料](ictprepare-校赛省赛.md)》的全部内容。若某处基础不牢，请先回该册对应分册复习。
> **篇幅**：四个方向共 **12 个分册**，本文件是卷索引；教学内容在 [\`分册/\`](分册/) 目录下。
>
> **真题说明**：本资料中的真题依据华为 ICT 大赛历年公开赛题方向、华为认证考试真题回忆与官方教材例题整理改写，用于自测训练；正式参赛请以大赛官方考试大纲与题库为准。`,
    parts: [
      ['B1-数通-HCIE-路由上.md', 'B1-数通HCIE上-OSPF高级与ISIS.md', '数通', 'HCIE', 'OSPF 高级特性与优化、IS-IS 协议与 IPv6 集成'],
      ['B2-数通-HCIE-BGP与MPLS.md', 'B2-数通HCIE中-BGP选路与MPLS-VPN.md', '数通', 'HCIE', 'BGP 高级特性与 13 条选路、MPLS 与 L3VPN / L2VPN / VPLS'],
      ['B3-数通-HCIE-组播IPv6QoS.md', 'B3-数通HCIE下-组播IPv6进阶与QoS.md', '数通', 'HCIE', 'IP 组播技术、IPv6 进阶与过渡技术、QoS 服务质量'],
      ['B4-数通-HCIE-SR与自动化.md', 'B4-数通HCIE补-SRv6自动化与割接排障.md', '数通', 'HCIE', 'Segment Routing 与 SRv6、网络自动化与可编程、网络割接与综合排错'],
      ['B5-DCN-HCIE-VXLAN-EVPN深入.md', 'B5-DCNHCIE上-VXLAN与EVPN深入.md', 'DCN', 'HCIE', 'VXLAN 与 BGP-EVPN 深入、EVPN 分布式网关与跨 Fabric 互联'],
      ['B6-DCN-HCIE-MLAG与Fabric设计.md', 'B6-DCNHCIE中-MLAG与Fabric设计DCI.md', 'DCN', 'HCIE', 'M-LAG 与虚拟化技术对比、数据中心网络规划设计与 DCI'],
      ['B7-DCN-HCIE-无损网络与智能运维.md', 'B7-DCNHCIE下-无损网络与智能运维.md', 'DCN', 'HCIE', '无损网络与 RoCE（PFC/ECN/DCQCN）、iMaster NCE-Fabric 与数据中心智能运维'],
      ['B8-安全-HCIE-防火墙高级与可靠性.md', 'B8-安全HCIE上-防火墙高可用与密码学PKI.md', '安全', 'HCIE', '防火墙高级特性与高可靠性（HRP / VSYS / 带宽管理）、密码学与 PKI 架构深入'],
      ['B9-安全-HCIE-VPN深入.md', 'B9-安全HCIE中-IPSec深入与SSL-VPN-DSVPN.md', '安全', 'HCIE', 'IPSec 深入与 IKEv2、SSL VPN 与 DSVPN 技术'],
      ['B10-安全-HCIE-入侵防御与安全架构.md', 'B10-安全HCIE下-入侵防御与安全架构.md', '安全', 'HCIE', '入侵防御与未知威胁防御、企业安全架构与等级保护、云安全与虚拟化安全'],
      ['B11-WLAN-HCIE-空口射频与大型组网.md', 'B11-WLANHCIE上-空口射频与大型组网.md', 'WLAN', 'HCIE', '空口技术与射频优化、大型园区 WLAN 组网与高可靠性'],
      ['B12-WLAN-HCIE-勘测规划与安全运维.md', 'B12-WLANHCIE下-勘测规划与安全运维.md', 'WLAN', 'HCIE', '无线网络勘测与规划方法、WLAN 安全进阶与无线攻防、智能化运维与新技术'],
    ],
  },
];

/** 把标题转成 GitHub 风格锚点 */
function anchor(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s]+/g, '-')
    .replace(/[（）()【】\[\]{}<>《》「」,，.。:：;；!！?？"'`~@#$%^&*+=|\\/]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * 抽取标题生成目录（链接到分册文件）。
 * 必须跳过围栏代码块——否则 bash 代码里的 `# 注释` 会被误判成一级标题。
 */
function buildToc(body, targetFile) {
  const lines = body.split('\n');
  const toc = [];
  let inFence = false;
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith('```') || t.startsWith('~~~')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (line.startsWith('## ')) {
      const h = line.slice(3).trim();
      toc.push(`    - [${h}](${targetFile}#${anchor(h)})`);
    } else if (line.startsWith('# ')) {
      const h = line.slice(2).trim();
      toc.push(`- [${h}](${targetFile}#${anchor(h)})`);
    }
  }
  return toc.join('\n');
}

/** 剥掉分册封面（册名 H1 / 真题提示块 / 分册说明），只保留正文 */
function stripCover(text) {
  const lines = text.split('\n');
  const start = lines.findIndex((l) => /^# (数通|DCN|安全|WLAN)-(HCIA|HCIE)-章节/.test(l));
  const body = start > 0 ? lines.slice(start).join('\n') : text;
  return body.replace(/\n{3,}/g, '\n\n').trim();
}

const warn = [];

for (const doc of DOCS) {
  const navRows = [];
  const tocBlocks = [];
  let totalLines = 0;
  let totalBytes = 0;
  const missing = [];

  for (const [src, dest, dir, lvl, desc] of doc.parts) {
    const fp = path.join(PARTS, src);
    if (!fs.existsSync(fp)) {
      missing.push(src);
      continue;
    }
    const body = stripCover(fs.readFileSync(fp, 'utf8'));

    // 写出可单独阅读的分册文件
    const destPath = path.join(BOOKS, dest);
    const header = `# ${dest.replace(/\.md$/, '')}\n\n> **所属**：华为 ICT 大赛网络赛道 · ${doc.level} · ${dir} 方向 · ${lvl} 层\n> **内容**：${desc}\n> **真题说明**：本册真题依据华为 ICT 大赛历年公开赛题方向、华为认证考试真题回忆与官方教材例题整理改写，用于自测训练；正式参赛请以大赛官方考试大纲与题库为准。\n\n---\n\n`;
    const full = header + body + '\n';
    fs.writeFileSync(destPath, full, 'utf8');

    const nb = Buffer.byteLength(full);
    totalLines += full.split('\n').length;
    totalBytes += nb;

    const chapters = (body.match(/^# (数通|DCN|安全|WLAN)-(HCIA|HCIE)-章节/gm) || []).length;
    const questions = (body.match(/\*\*Q\d+\.【真题·/g) || []).length;
    const diagrams = (body.match(/^```mermaid/gm) || []).length;

    navRows.push(
      `| [${dest.replace(/\.md$/, '')}](${encodeURI(`分册/${dest}`)}) | ${dir} | ${lvl} | ${chapters} | ${questions} | ${diagrams} | ${(nb / 1024).toFixed(0)} KB |`
    );
    tocBlocks.push(`### ${dest.replace(/\.md$/, '')}\n\n${buildToc(body, encodeURI(`分册/${dest}`))}`);
  }

  if (missing.length) warn.push(`${doc.out} 缺少分册: ${missing.join(', ')}`);

  const out = [
    `# ${doc.title}`,
    '',
    doc.intro,
    '',
    '## 一、分册导航',
    '',
    '| 分册 | 方向 | 层级 | 章节数 | 真题数 | 示意图 | 体积 |',
    '|---|---|---|---|---|---|---|',
    ...navRows,
    '',
    `> 合计 **${navRows.length} 个分册 / ${totalLines} 行 / ${(totalBytes / 1024 / 1024).toFixed(2)} MB**。上表体积是分册自身的体积——**按需打开单个分册即可，不必一次加载全部内容**。`,
    '',
    '## 二、全书目录',
    '',
    tocBlocks.join('\n\n'),
    '',
    '---',
    '',
    `> 🚀 **不知道从哪开始？** 先看 [how2use.md](how2use.md)（使用顺序说明：按什么顺序读、每步做什么、过关标准、进度打卡表）。`,
    '',
    `> 返回总纲：[ictprepare.md](ictprepare.md)`,
    '',
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, doc.out), out, 'utf8');
  console.log(
    `✅ ${doc.out} —— 索引 ${navRows.length} 个分册，索引文件 ${(Buffer.byteLength(out) / 1024).toFixed(0)} KB`
  );
}

console.log('\n📚 分册文件（可直接单独打开）:');
for (const f of fs.readdirSync(BOOKS).sort()) {
  const p = path.join(BOOKS, f);
  const st = fs.statSync(p);
  const n = fs.readFileSync(p, 'utf8').split('\n').length;
  console.log(`   ${f.padEnd(52)} ${String(n).padStart(6)} 行  ${(st.size / 1024).toFixed(0).padStart(5)} KB`);
}

if (warn.length) {
  console.log('\n⚠️  警告:');
  warn.forEach((w) => console.log('  - ' + w));
  process.exitCode = 1;
}
