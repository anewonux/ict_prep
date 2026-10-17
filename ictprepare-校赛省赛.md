# 华为 ICT 大赛 · 网络赛道 —— 校赛 / 省赛备考教学资料

> **适用范围**：校赛（校内选拔）、省赛（区域赛 / 省赛）阶段。
> **能力定位**：以 **HCIA-Datacom / HCIA-DCN / HCIA-Security / HCIA-WLAN** 的知识框架为主线，补齐比赛中真正会考到的原理细节与实验能力，并在每章末尾预埋 HCIE 进阶钩子。
> **篇幅**：四个方向共 **8 个分册**，本文件是卷索引；教学内容在 [`分册/`](分册/) 目录下的各个分册文件里。
> **使用方式**：先通读"考点定位"与"原理精讲"建立框架，再逐条敲一遍"华为设备配置"，最后用"真题精练"自测；错题回到"原理精讲"和"易错点与排错"定位盲区。
>
> **真题说明**：本资料中的真题依据华为 ICT 大赛历年公开赛题方向、华为认证考试真题回忆与官方教材例题整理改写，用于自测训练；正式参赛请以大赛官方考试大纲与题库为准。

## 一、分册导航

| 分册 | 方向 | 层级 | 章节数 | 真题数 | 示意图 | 体积 |
|---|---|---|---|---|---|---|
| [A1-数通HCIA上-网络基础与以太网交换](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md) | 数通 | HCIA | 4 | 103 | 38 | 290 KB |
| [A2-数通HCIA下-编址路由与网络服务](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md) | 数通 | HCIA | 6 | 124 | 27 | 302 KB |
| [A3-DCNHCIA上-数据中心架构与设备](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md) | DCN | HCIA | 3 | 77 | 25 | 197 KB |
| [A4-DCNHCIA下-VXLAN与EVPN入门](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md) | DCN | HCIA | 3 | 38 | 19 | 141 KB |
| [A5-安全HCIA上-防火墙与NAT认证](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md) | 安全 | HCIA | 4 | 59 | 40 | 212 KB |
| [A6-安全HCIA下-VPN内容安全与攻防](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md) | 安全 | HCIA | 4 | 54 | 34 | 235 KB |
| [A7-WLANHCIA上-标准射频与组网架构](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md) | WLAN | HCIA | 3 | 69 | 29 | 224 KB |
| [A8-WLANHCIA下-配置漫游安全与排障](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md) | WLAN | HCIA | 4 | 32 | 23 | 164 KB |

> 合计 **8 个分册 / 24273 行 / 1.72 MB**。上表体积是分册自身的体积——**按需打开单个分册即可，不必一次加载全部内容**。

## 二、全书目录

### A1-数通HCIA上-网络基础与以太网交换

- [数通-HCIA-章节1-网络基础与TCP/IP协议栈](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#数通-hcia-章节1-网络基础与tcpip协议栈)
    - [1.1 OSI 参考模型、TCP/IP 模型与封装解封装](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#11-osi-参考模型、tcpip-模型与封装解封装)
    - [1.2 以太网帧格式与 MAC 地址](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#12-以太网帧格式与-mac-地址)
    - [1.3 ARP 工作原理、ARP 表与免费 ARP](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#13-arp-工作原理、arp-表与免费-arp)
    - [1.4 IPv4 报文头部、分片与 ICMP](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#14-ipv4-报文头部、分片与-icmp)
    - [1.5 TCP 协议：三次握手、四次挥手与状态机](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#15-tcp-协议三次握手、四次挥手与状态机)
    - [1.6 UDP、端口号与协议号速查、CRC 与 CSMA/CD](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#16-udp、端口号与协议号速查、crc-与-csmacd)
- [数通-HCIA-章节2-VRP系统与设备管理](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#数通-hcia-章节2-vrp系统与设备管理)
    - [2.1 VRP 系统架构、命令行视图与用户分级](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#21-vrp-系统架构、命令行视图与用户分级)
    - [2.2 配置文件管理、文件系统与 VRP 升级回退](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#22-配置文件管理、文件系统与-vrp-升级回退)
    - [2.3 登录方式、用户管理与 AAA/SSH 配置](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#23-登录方式、用户管理与-aaassh-配置)
    - [2.4 设备时间与 NTP、信息中心与常用 display 命令](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#24-设备时间与-ntp、信息中心与常用-display-命令)
- [数通-HCIA-章节3-以太网与VLAN技术](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#数通-hcia-章节3-以太网与vlan技术)
    - [3.1 冲突域与广播域、双工速率自协商](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#31-冲突域与广播域、双工速率自协商)
    - [3.2 VLAN 原理、802.1Q 帧与 Access/Trunk/Hybrid 收发规则](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#32-vlan-原理、8021q-帧与-accesstrunkhybrid-收发规则)
    - [3.3 VLAN 间通信三种方式、MUX VLAN 与端口隔离](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#33-vlan-间通信三种方式、mux-vlan-与端口隔离)
    - [3.4 链路聚合 Eth-Trunk 与堆叠 iStack](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#34-链路聚合-eth-trunk-与堆叠-istack)
    - [3.5 端口安全、DHCP Snooping 与 IP Source Guard](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#35-端口安全、dhcp-snooping-与-ip-source-guard)
- [数通-HCIA-章节4-生成树协议STP-RSTP-MSTP](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#数通-hcia-章节4-生成树协议stp-rstp-mstp)
    - [4.1 二层环路危害、STP 三要素与 BPDU 选举](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#41-二层环路危害、stp-三要素与-bpdu-选举)
    - [4.2 STP 端口状态、定时器与拓扑变化机制](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#42-stp-端口状态、定时器与拓扑变化机制)
    - [4.3 RSTP 快速生成树：P/A 机制与边缘端口](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#43-rstp-快速生成树pa-机制与边缘端口)
    - [4.4 MSTP 多生成树：Region 四要素与多实例负载分担](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#44-mstp-多生成树region-四要素与多实例负载分担)
    - [4.5 STP 保护机制、根桥规划与 display stp 解读](%E5%88%86%E5%86%8C/A1-%E6%95%B0%E9%80%9AHCIA%E4%B8%8A-%E7%BD%91%E7%BB%9C%E5%9F%BA%E7%A1%80%E4%B8%8E%E4%BB%A5%E5%A4%AA%E7%BD%91%E4%BA%A4%E6%8D%A2.md#45-stp-保护机制、根桥规划与-display-stp-解读)

### A2-数通HCIA下-编址路由与网络服务

- [数通-HCIA-章节5-IP编址与子网划分](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#数通-hcia-章节5-ip编址与子网划分)
    - [5.1 IP 地址分类、私有地址与特殊地址](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#51-ip-地址分类、私有地址与特殊地址)
    - [5.2 子网掩码、VLSM 与"看掩码算块大小"速算法](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#52-子网掩码、vlsm-与看掩码算块大小速算法)
    - [5.3 CIDR、超网与路由聚合](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#53-cidr、超网与路由聚合)
    - [5.4 地址规划原则与三层园区规划实战（含 VLSM 综合大题 2 道）](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#54-地址规划原则与三层园区规划实战含-vlsm-综合大题-2-道)
- [数通-HCIA-章节6-IP路由基础与静态路由](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#数通-hcia-章节6-ip路由基础与静态路由)
    - [6.1 路由表组成与选路三原则](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#61-路由表组成与选路三原则)
    - [6.2 静态路由配置：默认路由、浮动、等价、递归、NULL0 与 BFD 联动](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#62-静态路由配置默认路由、浮动、等价、递归、null0-与-bfd-联动)
- [数通-HCIA-章节7-OSPF基础](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#数通-hcia-章节7-ospf基础)
    - [7.1 链路状态思想、OSPF 特点与 Router ID](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#71-链路状态思想、ospf-特点与-router-id)
    - [7.2 OSPF 五种报文、邻居建立过程与邻居状态机](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#72-ospf-五种报文、邻居建立过程与邻居状态机)
    - [7.3 DR/BDR 选举、网络类型与组播地址](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#73-drbdr-选举、网络类型与组播地址)
    - [7.4 LSA 类型、区域划分与骨干区域规则](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#74-lsa-类型、区域划分与骨干区域规则)
    - [7.5 Cost 计算、路由聚合、认证、静默接口与 display 输出解读](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#75-cost-计算、路由聚合、认证、静默接口与-display-输出解读)
- [数通-HCIA-章节8-应用层服务配置](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#数通-hcia-章节8-应用层服务配置)
    - [8.1 DHCP 工作过程、报文格式与 Option 字段](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#81-dhcp-工作过程、报文格式与-option-字段)
    - [8.2 DHCP Snooping 与 DHCP 安全防护](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#82-dhcp-snooping-与-dhcp-安全防护)
    - [8.3 FTP/TFTP 服务端与客户端配置](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#83-ftptftp-服务端与客户端配置)
    - [8.4 Telnet 与 SSH 远程登录（含 AAA 与 VTY 认证模式对比）](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#84-telnet-与-ssh-远程登录含-aaa-与-vty-认证模式对比)
    - [8.5 DNS 解析、DNS Client 与 DNS 代理](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#85-dns-解析、dns-client-与-dns-代理)
    - [8.6 HTTP/HTTPS 基础、访问控制与 Easy-IP + DHCP 综合场景](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#86-httphttps-基础、访问控制与-easy-ip-dhcp-综合场景)
- [数通-HCIA-章节9-ACL与NAT技术](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#数通-hcia-章节9-acl与nat技术)
    - [9.1 ACL 分类与匹配规则（含"默认放行还是拒绝"陷阱）](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#91-acl-分类与匹配规则含默认放行还是拒绝陷阱)
    - [9.2 NAT 分类、原理与地址池/PAT](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#92-nat-分类、原理与地址池pat)
    - [9.3 路由器与防火墙 NAT 配置方式差异（AR vs USG）](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#93-路由器与防火墙-nat-配置方式差异ar-vs-usg)
    - [9.4 ACL + NAT 综合实战：Easy-IP 与 NAT Server 完整配置实例](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#94-acl-nat-综合实战easy-ip-与-nat-server-完整配置实例)
- [数通-HCIA-章节10-IPv6基础](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#数通-hcia-章节10-ipv6基础)
    - [10.1 IPv6 产生背景、地址格式与零压缩规则](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#101-ipv6-产生背景、地址格式与零压缩规则)
    - [10.2 EUI-64 接口 ID 生成与地址配置方式](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#102-eui-64-接口-id-生成与地址配置方式)
    - [10.3 IPv6 头部字段与 IPv4 头部对比](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#103-ipv6-头部字段与-ipv4-头部对比)
    - [10.4 ICMPv6 与 NDP（NS/NA/RS/RA、DAD、SLAAC 全流程）](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#104-icmpv6-与-ndpnsnarsra、dad、slaac-全流程)
    - [10.5 IPv6 静态路由、RIPng、OSPFv3 与过渡技术](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#105-ipv6-静态路由、ripng、ospfv3-与过渡技术)
    - [附录 · 本分册速查卡（考前 30 分钟必看）](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#附录-·-本分册速查卡考前-30-分钟必看)
    - [A. 数值速查](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#a-数值速查)
    - [B. 高频陷阱 Top 10](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#b-高频陷阱-top-10)
    - [C. 排错命令总表](%E5%88%86%E5%86%8C/A2-%E6%95%B0%E9%80%9AHCIA%E4%B8%8B-%E7%BC%96%E5%9D%80%E8%B7%AF%E7%94%B1%E4%B8%8E%E7%BD%91%E7%BB%9C%E6%9C%8D%E5%8A%A1.md#c-排错命令总表)

### A3-DCNHCIA上-数据中心架构与设备

- [DCN-HCIA-章节1-数据中心网络概述与Spine-Leaf架构](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#dcn-hcia-章节1-数据中心网络概述与spine-leaf架构)
    - [1.1 什么是数据中心与数据中心网络](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#11-什么是数据中心与数据中心网络)
    - [1.2 传统三层架构在数据中心的问题](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#12-传统三层架构在数据中心的问题)
    - [1.3 Spine-Leaf（叶脊）架构与 CLOS 网络](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#13-spine-leaf叶脊架构与-clos-网络)
    - [1.4 东西向与南北向流量、收敛比与 Fat-Tree 计算](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#14-东西向与南北向流量、收敛比与-fat-tree-计算)
    - [1.5 Overlay 与 Underlay 分层、Fabric 概念与 ToR 部署](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#15-overlay-与-underlay-分层、fabric-概念与-tor-部署)
- [DCN-HCIA-章节2-数据中心设备与CloudEngine系列](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#dcn-hcia-章节2-数据中心设备与cloudengine系列)
    - [2.1 华为数据中心交换机产品族与命名规则](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#21-华为数据中心交换机产品族与命名规则)
    - [2.2 框式设备硬件架构、交换网板与冗余](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#22-框式设备硬件架构、交换网板与冗余)
    - [2.3 数据中心接口、光模块与布线](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#23-数据中心接口、光模块与布线)
    - [2.4 CloudEngine VRP V200 版本、巡检命令与 ZTP 自动开局](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#24-cloudengine-vrp-v200-版本、巡检命令与-ztp-自动开局)
- [DCN-HCIA-章节3-数据中心二层技术](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#dcn-hcia-章节3-数据中心二层技术)
    - [3.1 数据中心二层需求、VLAN 局限与 QinQ](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#31-数据中心二层需求、vlan-局限与-qinq)
    - [3.2 M-LAG 入门：原理、三要素与故障切换](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#32-m-lag-入门原理、三要素与故障切换)
    - [3.3 M-LAG 与 Eth-Trunk 对比、VRRP 配合、BPDU 处理与 VLAN 规划](%E5%88%86%E5%86%8C/A3-DCNHCIA%E4%B8%8A-%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%9E%B6%E6%9E%84%E4%B8%8E%E8%AE%BE%E5%A4%87.md#33-m-lag-与-eth-trunk-对比、vrrp-配合、bpdu-处理与-vlan-规划)

### A4-DCNHCIA下-VXLAN与EVPN入门

- [DCN-HCIA-章节4-VXLAN基础](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#dcn-hcia-章节4-vxlan基础)
    - [4.1 VXLAN 的产生背景与基本概念](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#41-vxlan-的产生背景与基本概念)
    - [4.2 VXLAN 报文格式逐字段讲解](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#42-vxlan-报文格式逐字段讲解)
    - [4.3 VTEP 与 NVE 接口](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#43-vtep-与-nve-接口)
    - [4.4 VXLAN 隧道建立方式：手工静态 VXLAN 与 BGP EVPN 动态建立](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#44-vxlan-隧道建立方式手工静态-vxlan-与-bgp-evpn-动态建立)
    - [4.5 VXLAN 网关的三种类型：二层网关、集中式三层网关、分布式三层网关](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#45-vxlan-网关的三种类型二层网关、集中式三层网关、分布式三层网关)
    - [4.6 BD、VBDIF 与 VXLAN 泛洪机制](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#46-bd、vbdif-与-vxlan-泛洪机制)
- [DCN-HCIA-章节5-BGP-EVPN入门](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#dcn-hcia-章节5-bgp-evpn入门)
    - [5.1 EVPN 的概念与 MP-BGP EVPN 地址族](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#51-evpn-的概念与-mp-bgp-evpn-地址族)
    - [5.2 EVPN 五种路由类型（国赛高频重点）](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#52-evpn-五种路由类型国赛高频重点)
    - [5.3 RD 与 RT 的作用与区别](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#53-rd-与-rt-的作用与区别)
    - [5.4 EVPN 建立 VXLAN 隧道与 MAC 学习流程](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#54-evpn-建立-vxlan-隧道与-mac-学习流程)
    - [5.5 BGP EVPN 配置框架与路由反射器](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#55-bgp-evpn-配置框架与路由反射器)
- [DCN-HCIA-章节6-网络虚拟化与Fabric基础](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#dcn-hcia-章节6-网络虚拟化与fabric基础)
    - [6.1 网络虚拟化的层次与 VPN 实例（VRF）原理](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#61-网络虚拟化的层次与-vpn-实例vrf原理)
    - [6.2 多租户网络隔离实现方式对比](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#62-多租户网络隔离实现方式对比)
    - [6.3 Fabric 概念模型与华为 CloudFabric 解决方案](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#63-fabric-概念模型与华为-cloudfabric-解决方案)
    - [6.4 Fabric 部署形态与 DC 内互联、DCI 概述](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#64-fabric-部署形态与-dc-内互联、dci-概述)
    - [6.5 网络自动化运维入门：NETCONF/YANG 与 Telemetry](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#65-网络自动化运维入门netconfyang-与-telemetry)
    - [6.6 章节综合真题精练（第 4~6 章交叉）](%E5%88%86%E5%86%8C/A4-DCNHCIA%E4%B8%8B-VXLAN%E4%B8%8EEVPN%E5%85%A5%E9%97%A8.md#66-章节综合真题精练第-46-章交叉)

### A5-安全HCIA上-防火墙与NAT认证

- [安全-HCIA-章节1-网络安全概述与威胁分析](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#安全-hcia-章节1-网络安全概述与威胁分析)
    - [1.1 信息安全三要素 CIA 与对应安全技术](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#11-信息安全三要素-cia-与对应安全技术)
    - [1.2 网络安全威胁分类与常见攻击原理](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#12-网络安全威胁分类与常见攻击原理)
    - [1.3 黑客攻击一般流程与杀伤链](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#13-黑客攻击一般流程与杀伤链)
    - [1.4 安全防御体系与纵深防御](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#14-安全防御体系与纵深防御)
    - [1.5 等保 2.0 与常见安全产品职责划分](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#15-等保-20-与常见安全产品职责划分)
- [安全-HCIA-章节2-防火墙基础与安全策略](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#安全-hcia-章节2-防火墙基础与安全策略)
    - [2.1 防火墙技术演进与三代技术](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#21-防火墙技术演进与三代技术)
    - [2.2 状态检测机制核心：会话表与会话老化](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#22-状态检测机制核心会话表与会话老化)
    - [2.3 安全区域 Zone 与默认行为（与 Cisco 的关键差异）](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#23-安全区域-zone-与默认行为与-cisco-的关键差异)
    - [2.4 安全策略的匹配要素与匹配顺序](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#24-安全策略的匹配要素与匹配顺序)
    - [2.5 ASPF 与 Server-map 表](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#25-aspf-与-server-map-表)
    - [2.6 接口模式、部署模式与双机热备入门（含与路由器的区别）](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#26-接口模式、部署模式与双机热备入门含与路由器的区别)
- [安全-HCIA-章节3-NAT技术详解](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#安全-hcia-章节3-nat技术详解)
    - [3.1 NAT 的作用与源 NAT 四种方式对比](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#31-nat-的作用与源-nat-四种方式对比)
    - [3.2 华为防火墙 nat-policy 配置体系](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#32-华为防火墙-nat-policy-配置体系)
    - [3.3 目的 NAT、NAT Server 与双向 NAT](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#33-目的-nat、nat-server-与双向-nat)
    - [3.4 NAT ALG 与 Server-map 表](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#34-nat-alg-与-server-map-表)
    - [3.5 NAT 与安全策略的处理流水线、综合配置与排错](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#35-nat-与安全策略的处理流水线、综合配置与排错)
- [安全-HCIA-章节4-用户认证与AAA](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#安全-hcia-章节4-用户认证与aaa)
    - [4.1 AAA 概念、认证方式与认证域](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#41-aaa-概念、认证方式与认证域)
    - [4.2 RADIUS 协议详解](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#42-radius-协议详解)
    - [4.3 HWTACACS 与 RADIUS 的对比](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#43-hwtacacs-与-radius-的对比)
    - [4.4 Portal 认证原理与流程](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#44-portal-认证原理与流程)
    - [4.5 802.1X 认证原理与 EAP 封装](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#45-8021x-认证原理与-eap-封装)
    - [4.6 MAC 认证、混合认证与单点登录（SSO）](%E5%88%86%E5%86%8C/A5-%E5%AE%89%E5%85%A8HCIA%E4%B8%8A-%E9%98%B2%E7%81%AB%E5%A2%99%E4%B8%8ENAT%E8%AE%A4%E8%AF%81.md#46-mac-认证、混合认证与单点登录sso)

### A6-安全HCIA下-VPN内容安全与攻防

- [安全-HCIA-章节5-VPN技术基础](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#安全-hcia-章节5-vpn技术基础)
    - [5.1 VPN 的定义与分类](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#51-vpn-的定义与分类)
    - [5.2 密码学基础：从对称加密到 PKI 体系](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#52-密码学基础从对称加密到-pki-体系)
    - [5.3 IPSec 协议族：AH、ESP 与两种封装模式](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#53-ipsec-协议族ah、esp-与两种封装模式)
    - [5.4 IKEv1 两阶段协商与 IKEv2 改进](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#54-ikev1-两阶段协商与-ikev2-改进)
    - [5.5 IPSec 关键参数：SA、PFS、生存周期与感兴趣流](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#55-ipsec-关键参数sa、pfs、生存周期与感兴趣流)
    - [5.6 NAT 穿越、GRE、L2TP、SSL VPN 与配置框架](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#56-nat-穿越、gre、l2tp、ssl-vpn-与配置框架)
    - [5.7 `display ike sa` 与 `display ipsec sa` 输出解读](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#57-display-ike-sa-与-display-ipsec-sa-输出解读)
- [安全-HCIA-章节6-内容安全与入侵防御](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#安全-hcia-章节6-内容安全与入侵防御)
    - [6.1 内容安全总览与 IPS 工作原理](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#61-内容安全总览与-ips-工作原理)
    - [6.2 IPS 的部署方式与 USG 内容安全配置框架](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#62-ips-的部署方式与-usg-内容安全配置框架)
    - [6.3 反病毒（AV）、文件信誉与沙箱联动](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#63-反病毒av、文件信誉与沙箱联动)
    - [6.4 URL 过滤](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#64-url-过滤)
    - [6.5 应用识别（SA 特征库）与内容安全升级、排错](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#65-应用识别sa-特征库与内容安全升级、排错)
- [安全-HCIA-章节7-常见网络攻击与防御技术](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#安全-hcia-章节7-常见网络攻击与防御技术)
    - [7.1 单包攻击原理与 `firewall defend` 防御](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#71-单包攻击原理与-firewall-defend-防御)
    - [7.2 扫描攻击与防御](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#72-扫描攻击与防御)
    - [7.3 DDoS 攻击分类与防御体系](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#73-ddos-攻击分类与防御体系)
    - [7.4 ARP 攻击与防御](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#74-arp-攻击与防御)
    - [7.5 DHCP 攻击与 DHCP Snooping 防御](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#75-dhcp-攻击与-dhcp-snooping-防御)
    - [7.6 MAC 泛洪、MAC 欺骗与 VLAN 跳转攻击](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#76-mac-泛洪、mac-欺骗与-vlan-跳转攻击)
    - [7.7 STP 攻击与 BPDU Guard / Root Guard 防御](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#77-stp-攻击与-bpdu-guard-root-guard-防御)
    - [7.8 IP 源地址欺骗防御与网络层安全加固 Checklist](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#78-ip-源地址欺骗防御与网络层安全加固-checklist)
- [安全-HCIA-章节8-终端与边界安全](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#安全-hcia-章节8-终端与边界安全)
    - [8.1 终端安全威胁与 EDR / HiSec Endpoint](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#81-终端安全威胁与-edr-hisec-endpoint)
    - [8.2 边界安全设备的角色分工](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#82-边界安全设备的角色分工)
    - [8.3 安全运营中心（SOC）与 HiSec Insight 态势感知](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#83-安全运营中心soc与-hisec-insight-态势感知)
    - [8.4 安全运维规范与合规要求](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#84-安全运维规范与合规要求)
    - [8.5 等级保护 2.0："一个中心、三重防护"体系](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#85-等级保护-20一个中心、三重防护体系)
    - [8.6 安全应急响应流程（PDCERF）](%E5%88%86%E5%86%8C/A6-%E5%AE%89%E5%85%A8HCIA%E4%B8%8B-VPN%E5%86%85%E5%AE%B9%E5%AE%89%E5%85%A8%E4%B8%8E%E6%94%BB%E9%98%B2.md#86-安全应急响应流程pdcerf)

### A7-WLANHCIA上-标准射频与组网架构

- [WLAN-HCIA-章节1-WLAN概述与802.11标准](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#wlan-hcia-章节1-wlan概述与80211标准)
    - [1.1 WLAN 的定义、优势与有线网络对比](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#11-wlan-的定义、优势与有线网络对比)
    - [1.2 WLAN 标准组织、标准体系与频率法规](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#12-wlan-标准组织、标准体系与频率法规)
    - [1.3 802.11 标准演进、代际命名与关键技术](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#13-80211-标准演进、代际命名与关键技术)
    - [1.4 802.11 帧结构与 To DS/From DS 地址映射](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#14-80211-帧结构与-to-dsfrom-ds-地址映射)
    - [1.5 三种帧类型：管理帧、控制帧、数据帧](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#15-三种帧类型管理帧、控制帧、数据帧)
    - [1.6 WLAN 接入过程五阶段与主/被动扫描](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#16-wlan-接入过程五阶段与主被动扫描)
    - [1.7 无线拓扑概念：BSS/IBSS/ESS/DS 与 SSID/BSSID/ESSID](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#17-无线拓扑概念bssibssessds-与-ssidbssidessid)
    - [1.8 CSMA/CA、RTS/CTS 与隐藏节点问题](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#18-csmaca、rtscts-与隐藏节点问题)
    - [1.9 工作信道与信道重叠（2.4G 1/6/11 与 5G UNII 划分）](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#19-工作信道与信道重叠24g-1611-与-5g-unii-划分)
- [WLAN-HCIA-章节2-射频与天线基础](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#wlan-hcia-章节2-射频与天线基础)
    - [2.1 电磁波基础与射频传播特性](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#21-电磁波基础与射频传播特性)
    - [2.2 射频单位与换算（dBm/mW/dBi/dBd）](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#22-射频单位与换算dbmmwdbidbd)
    - [2.3 2.4GHz 与 5GHz 频段特性对比](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#23-24ghz-与-5ghz-频段特性对比)
    - [2.4 自由空间路径损耗与链路预算](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#24-自由空间路径损耗与链路预算)
    - [2.5 天线原理、参数与选型](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#25-天线原理、参数与选型)
    - [2.6 EIRP、发射功率计算与各国功率限制](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#26-eirp、发射功率计算与各国功率限制)
    - [2.7 MIMO、波束赋形与信道绑定](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#27-mimo、波束赋形与信道绑定)
    - [2.8 射频干扰、频谱分析与射频规划原则](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#28-射频干扰、频谱分析与射频规划原则)
- [WLAN-HCIA-章节3-WLAN组网架构与CAPWAP协议](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#wlan-hcia-章节3-wlan组网架构与capwap协议)
    - [3.1 WLAN 组网架构演进：FAT AP 与 FIT AP + AC](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#31-wlan-组网架构演进fat-ap-与-fit-ap-ac)
    - [3.2 AC 的形态与选型](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#32-ac-的形态与选型)
    - [3.3 CAPWAP 协议详解：双隧道、报文格式与 DTLS](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#33-capwap-协议详解双隧道、报文格式与-dtls)
    - [3.4 AP 发现 AC 的五种方式](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#34-ap-发现-ac-的五种方式)
    - [3.5 AP 上线完整流程与零配置](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#35-ap-上线完整流程与零配置)
    - [3.6 CAPWAP 状态机与保活机制](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#36-capwap-状态机与保活机制)
    - [3.7 数据转发模式：隧道转发与本地转发](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#37-数据转发模式隧道转发与本地转发)
    - [3.8 二层/三层组网、AP 供电与功率预算](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#38-二层三层组网、ap-供电与功率预算)
    - [3.9 AC 可靠性：VRRP 双机热备与 HSB](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#39-ac-可靠性vrrp-双机热备与-hsb)
    - [附录 A：WLAN-HCIA 层数值速查表（考前 10 分钟必背）](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#附录-awlan-hcia-层数值速查表考前-10-分钟必背)
    - [附录 B：本册命令索引（按任务分类）](%E5%88%86%E5%86%8C/A7-WLANHCIA%E4%B8%8A-%E6%A0%87%E5%87%86%E5%B0%84%E9%A2%91%E4%B8%8E%E7%BB%84%E7%BD%91%E6%9E%B6%E6%9E%84.md#附录-b本册命令索引按任务分类)

### A8-WLANHCIA下-配置漫游安全与排障

- [WLAN-HCIA-章节4-WLAN配置与AP上线实战](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#wlan-hcia-章节4-wlan配置与ap上线实战)
    - [4.1 WLAN 配置的整体框架与模板引用关系](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#41-wlan-配置的整体框架与模板引用关系)
    - [4.2 AC 基础配置与 AP 认证准入](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#42-ac-基础配置与-ap-认证准入)
    - [4.3 AP 上线配置全流程与 VAP 模板完整实例](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#43-ap-上线配置全流程与-vap-模板完整实例)
    - [4.4 WLAN 常用 display 命令与"AP 不上线"排查决策树](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#44-wlan-常用-display-命令与ap-不上线排查决策树)
    - [4.5 AC 的 License 管理与 WLAN 网络地址规划](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#45-ac-的-license-管理与-wlan-网络地址规划)
    - [4.6 章节4真题精练](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#46-章节4真题精练)
- [WLAN-HCIA-章节5-WLAN漫游技术](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#wlan-hcia-章节5-wlan漫游技术)
    - [5.1 漫游的定义、触发条件与技术指标](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#51-漫游的定义、触发条件与技术指标)
    - [5.2 漫游类型分类与二层漫游过程](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#52-漫游类型分类与二层漫游过程)
    - [5.3 三层漫游过程与家乡代理数据流](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#53-三层漫游过程与家乡代理数据流)
    - [5.4 漫游组（Mobility Group）与 AC 间漫游配置](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#54-漫游组mobility-group与-ac-间漫游配置)
    - [5.5 漫游与安全：密钥协商、PMK 缓存、OKC 与 802.11r](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#55-漫游与安全密钥协商、pmk-缓存、okc-与-80211r)
    - [5.6 章节5真题精练](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#56-章节5真题精练)
- [WLAN-HCIA-章节6-WLAN安全技术](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#wlan-hcia-章节6-wlan安全技术)
    - [6.1 WLAN 安全威胁与攻击面分析](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#61-wlan-安全威胁与攻击面分析)
    - [6.2 WLAN 安全机制演进：从 WEP 到 WPA3](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#62-wlan-安全机制演进从-wep-到-wpa3)
    - [6.3 认证与加密的关系及 PSK 密钥派生](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#63-认证与加密的关系及-psk-密钥派生)
    - [6.4 802.1X 认证在 WLAN 中的应用](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#64-8021x-认证在-wlan-中的应用)
    - [6.5 Portal 认证与 MAC 认证及混合认证](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#65-portal-认证与-mac-认证及混合认证)
    - [6.6 WIDS/WIPS 无线入侵检测与防御](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#66-widswips-无线入侵检测与防御)
    - [6.7 章节6真题精练](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#67-章节6真题精练)
- [WLAN-HCIA-章节7-WLAN规划部署与故障排查](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#wlan-hcia-章节7-wlan规划部署与故障排查)
    - [7.1 WLAN 网络规划流程与覆盖设计](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#71-wlan-网络规划流程与覆盖设计)
    - [7.2 容量设计与完整算例](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#72-容量设计与完整算例)
    - [7.3 WLAN 勘测与 WLAN Planner 工具](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#73-wlan-勘测与-wlan-planner-工具)
    - [7.4 常见故障分类排查与决策树](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#74-常见故障分类排查与决策树)
    - [7.5 空口抓包、诊断工具与 WLAN 优化手段清单](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#75-空口抓包、诊断工具与-wlan-优化手段清单)
    - [7.6 章节7真题精练](%E5%88%86%E5%86%8C/A8-WLANHCIA%E4%B8%8B-%E9%85%8D%E7%BD%AE%E6%BC%AB%E6%B8%B8%E5%AE%89%E5%85%A8%E4%B8%8E%E6%8E%92%E9%9A%9C.md#76-章节7真题精练)

---

> 🚀 **不知道从哪开始？** 先看 [how2use.md](how2use.md)（使用顺序说明：按什么顺序读、每步做什么、过关标准、进度打卡表）。

> 返回总纲：[ictprepare.md](ictprepare.md)
