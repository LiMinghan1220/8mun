const ideologies = [
    {
        "name": "传统联合国系统",
        "stats": {
            "decision": 0.7,     // 规则优先为主
            "collab": 0.8,       // 强调多边合作
            "issue": 0.6,        // 偏向长期视角
            "compromise": 0.7,    // 较高妥协能力
            "comm": 0.7,         // 偏向正式沟通
            "solution": 0.5      // 平衡创新与传统
        },
        "desc": "传统联合国体系强调多边主义与国际合作，注重程序性和规范性。下设多个专门机构，各具特色但共同遵循联合国宪章精神。",
        "children": [
            {
                "name": "安理会体系 (UNSC)",
                "parentSystem": "传统联合国系统",
                "stats": {
                    "decision": 0.8,     // 规则优先
                    "collab": 0.6,       // 多边合作
                    "issue": 0.3,        // 短期目标为主
                    "compromise": 0.4,    // 妥协能力
                    "comm": 0.9,         // 正式沟通
                    "solution": 0.7      // 传统解决方案
                },
                "desc": "作为处理全球和平与安全问题的主要机构，强调程序性和大国间妥协。您适合处理高强度谈判和危机应对，善于在冲突中寻找平衡点。"
            },
            {
                "name": "儿基会体系 (UNICEF)",
                "parentSystem": "传统联合国系统",
                "stats": {
                    "decision": 0.4,     // 规则优先
                    "collab": 0.8,       // 多边合作
                    "issue": 0.6,        // 平衡长短期目标
                    "compromise": 0.7,    // 高妥协
                    "comm": 0.5,         // 较为正式的沟通
                    "solution": 0.3      // 创新优先
                },
                "desc": "专注于儿童权益与人道主义议题，重视多边合作与创新解决方案。您善于处理社会发展问题，具有较强的人文关怀。"
            },
            {
                "name": "开发署体系 (UNDP)",
                "parentSystem": "传统联合国系统",
                "stats": {
                    "decision": 0.5,     // 平衡规则与灵活
                    "collab": 0.7,       // 多边合作
                    "issue": 0.8,        // 长期视角
                    "compromise": 0.5,    // 妥协能力
                    "comm": 0.6,         // 较为正式的沟通
                    "solution": 0.4      // 创新优先
                },
                "desc": "侧重长期发展与能力建设，平衡规则与灵活性。您适合处理发展议题，善于制定长期规划。"
            },
            {
                "name": "难民署体系 (UNHCR)",
                "parentSystem": "传统联合国系统",
                "stats": {
                    "decision": 0.3,     // 灵活应变
                    "collab": 0.7,       // 多边合作
                    "issue": 0.2,        // 短期目标
                    "compromise": 0.6,    // 高妥协
                    "comm": 0.4,         // 平衡正式与非正式
                    "solution": 0.6      // 创新优先
                },
                "desc": "专注于难民保护与人道主义援助，需要快速反应能力和灵活协调。您善于应对紧急情况，具有较强的实践导向。"
            },
            {
                "name": "国际法院体系 (ICJ)",
                "parentSystem": "传统联合国系统",
                "stats": {
                    "decision": 0.9,     // 规则优先
                    "collab": 0.5,       // 多边合作
                    "issue": 0.7,        // 偏向长期视角
                    "compromise": 0.3,    // 平衡妥协与坚持
                    "comm": 0.8,         // 正式外交
                    "solution": 0.2      // 传统方法
                },
                "desc": "作为司法机构，极度重视程序性和法理依据。您擅长严谨的法律分析和论证，注重先例研究。"
            },
            {
                "name": "环境署体系 (UNEP)",
                "parentSystem": "传统联合国系统",
                "stats": {
                    "decision": 0.6,     // 规则优先
                    "collab": 0.7,       // 多边合作
                    "issue": 0.8,        // 长期视角
                    "compromise": 0.5,    // 平衡妥协与坚持
                    "comm": 0.5,         // 平衡沟通风格
                    "solution": 0.6      // 创新优先
                },
                "desc": "专注于环境保护与可持续发展，重视创新方案和长期规划。您关注环境议题，善于提出创新性解决方案。"
            }
        ]
    },
    {
        "name": "中国系统",
        "stats": {
            "decision": 0.7,    // 规则优先
            "collab": 0.8,      // 多边合作
            "issue": 0.7,       // 长期视角
            "compromise": 0.6,   // 妥协能力
            "comm": 0.7,        // 正式外交
            "solution": 0.5     // 平衡创新与传统
        },
        "desc": "注重共识构建和多边合作，强调规则导向的决策过程，同时保持适度灵活性。倾向长期视角，通过温和妥协实现合作目标。",
        "children": [
            {
                "name": "共识构建型",
                "parentSystem": "中国系统",
                "stats": {
                    "decision": 0.8,    // 规则优先
                    "collab": 0.9,      // 多边合作
                    "issue": 0.7,       // 长期视角
                    "compromise": 0.7,   // 高妥协
                    "comm": 0.8,        // 正式外交
                    "solution": 0.4     // 平衡创新与传统
                },
                "desc": "高度重视规则和程序，通过多边合作推进共识，注重长期发展。"
            },
            {
                "name": "区域维护型",
                "parentSystem": "中国系统",
                "stats": {
                    "decision": 0.7,    // 规则优先
                    "collab": 0.6,      // 多边合作
                    "issue": 0.6,       // 长期视角
                    "compromise": 0.3,   // 较低妥协
                    "comm": 0.7,        // 正式外交
                    "solution": 0.4     // 平衡创新与传统
                },
                "desc": "在遵守规则的前提下，注重区域利益维护，适度坚守立场。"
            },
            {
                "name": "经济主导型",
                "parentSystem": "中国系统",
                "stats": {
                    "decision": 0.6,    // 规则优先
                    "collab": 0.8,      // 多边合作
                    "issue": 0.8,       // 长期视角
                    "compromise": 0.6,   // 较高妥协
                    "comm": 0.6,        // 平衡外交风格
                    "solution": 0.6     // 适度创新
                },
                "desc": "以规则为基础，重视经济发展和长期合作，适度采用创新方案。"
            }
        ]
    },
    {
        "name": "欧洲系统",
        "desc": "以高效程序和多边合作为核心，注重前瞻性规划和正式外交礼仪，同时保持适度灵活性。",
        "stats": {
            "decision": 0.6,    // 规则优先
            "collab": 0.8,      // 多边合作
            "issue": 0.6,       // 长期视角
            "compromise": 0.5,   // 中等妥协
            "comm": 0.7,        // 正式外交
            "solution": 0.6     // 适度创新
        },
        "subsystems": [
            {
                "name": "自由协商型",
                "parentSystem": "欧洲系统",
                "desc": "强调多边合作和长期规划，保持灵活性并鼓励创新解决方案。",
                "stats": {
                    "decision": 0.4,    // 较为灵活
                    "collab": 0.8,      // 多边合作
                    "issue": 0.7,       // 长期视角
                    "compromise": 0.7,   // 高妥协
                    "comm": 0.5,        // 平衡外交风格
                    "solution": 0.7     // 创新优先
                }
            },
            {
                "name": "高效务实型",
                "parentSystem": "欧洲系统",
                "desc": "注重规则和多边合作，优先处理短期目标，保持正式外交风格。",
                "stats": {
                    "decision": 0.7,    // 规则优先
                    "collab": 0.7,      // 多边合作
                    "issue": 0.3,       // 短期目标
                    "compromise": 0.6,   // 较高妥协
                    "comm": 0.8,        // 正式外交
                    "solution": 0.5     // 平衡创新与传统
                }
            },
            {
                "name": "人权法治型",
                "parentSystem": "欧洲系统",
                "desc": "高度重视规则和多边合作，关注长期发展，维持正式外交风格。",
                "stats": {
                    "decision": 0.9,    // 规则优先
                    "collab": 0.6,      // 多边合作
                    "issue": 0.8,       // 长期视角
                    "compromise": 0.4,   // 中等妥协
                    "comm": 0.9,        // 正式外交
                    "solution": 0.4     // 偏向传统
                }
            }
        ]
    },
    {
        "name": "公民社会系统",
        "stats": {
            "decision": 0.4,     // 较为灵活
            "collab": 0.7,      // 多边合作
            "issue": 0.6,       // 长期视角
            "compromise": 0.7,   // 高妥协
            "comm": 0.4,        // 灵活沟通
            "solution": 0.7     // 创新优先
        },
        "desc": "公民社会系统关注人道主义与社会正义，强调grassroots行动与倡导。",
        "children": [
            {
                "name": "人道主义优先型",
                "parentSystem": "公民社会系统",
                "stats": {
                    "decision": 0.3,     // 灵活
                    "collab": 0.8,       // 多边合作
                    "issue": 0.3,        // 短期目标
                    "compromise": 0.8,    // 高妥协
                    "comm": 0.3,         // 灵活沟通
                    "solution": 0.8      // 高度创新
                },
                "desc": "高度注重妥协，关注短期目标，通过多边合作推进人道主义议程。适合处理灾难救援、战争期间的平民保护等议题。"
            },
            {
                "name": "倡导型",
                "parentSystem": "公民社会系统",
                "stats": {
                    "decision": 0.4,     // 较为灵活
                    "collab": 0.7,       // 多边合作
                    "issue": 0.7,        // 长期视角
                    "compromise": 0.7,    // 高妥协
                    "comm": 0.5,         // 平衡沟通
                    "solution": 0.7      // 创新优先
                },
                "desc": "注重妥协与长期规划，通过多边合作和创新方案推动变革。适合处理性别平等、教育权利等议题。"
            },
            {
                "name": "非政府行动型",
                "parentSystem": "公民社会系统",
                "stats": {
                    "decision": 0.3,     // 灵活
                    "collab": 0.8,       // 多边合作
                    "issue": 0.6,        // 平衡长短期
                    "compromise": 0.6,    // 较高妥协
                    "comm": 0.4,         // 灵活沟通
                    "solution": 0.8      // 高度创新
                },
                "desc": "平衡多边合作与妥协，保持灵活性，关注长期发展。适合环境保护组织在相关议题中的代表角色。"
            }
        ]
    },
    {
        "name": "谈判系统",
        "desc": "偏好双边交涉，保持高度灵活性，注重维护自身立场和解决当前问题。",
        "stats": {
            "decision": 0.3,    // 灵活优先
            "collab": 0.3,      // 双边交涉为主
            "issue": 0.3,       // 短期目标
            "compromise": 0.4,   // 中等妥协
            "comm": 0.5,        // 平衡沟通风格
            "solution": 0.6     // 适度创新
        },
        "subsystems": [
            {
                "name": "双边技巧型",
                "parentSystem": "谈判系统",
                "desc": "专注双边谈判，保持高度灵活性，优先短期目标，适度坚守立场。",
                "stats": {
                    "decision": 0.2,    // 高度灵活
                    "collab": 0.2,      // 强调双边
                    "issue": 0.2,       // 短期目标
                    "compromise": 0.3,   // 低妥协
                    "comm": 0.6,        // 较正式沟通
                    "solution": 0.5     // 平衡创新与传统
                }
            },
            {
                "name": "大规模协调型",
                "parentSystem": "谈判系统",
                "desc": "平衡双边与多边合作，保持灵活性，注重妥协达成共识。",
                "stats": {
                    "decision": 0.3,    // 灵活优先
                    "collab": 0.5,      // 平衡双多边
                    "issue": 0.5,       // 平衡长短期
                    "compromise": 0.6,   // 较高妥协
                    "comm": 0.5,        // 平衡沟通风格
                    "solution": 0.6     // 适度创新
                }
            },
            {
                "name": "利益最大化型",
                "parentSystem": "谈判系统",
                "desc": "以双边谈判为主，强调立场坚守，灵活应对短期目标。",
                "stats": {
                    "decision": 0.2,    // 高度灵活
                    "collab": 0.2,      // 强调双边
                    "issue": 0.3,       // 短期目标
                    "compromise": 0.2,   // 低妥协
                    "comm": 0.7,        // 较正式沟通
                    "solution": 0.4     // 偏向传统
                }
            }
        ]
    },
    {
        "name": "法学系统",
        "desc": "高度依赖规则和正式程序，注重长期发展和多边合作。",
        "stats": {
            "decision": 0.9,    // 高度规则优先
            "collab": 0.6,      // 多边合作
            "issue": 0.7,       // 长期视角
            "compromise": 0.4,   // 中等妥协
            "comm": 0.8,        // 正式外交
            "solution": 0.3     // 偏向传统
        },
        "subsystems": [
            {
                "name": "程序规则型",
                "parentSystem": "法学系统",
                "desc": "严格遵守规则和正式程序，注重多边合作。",
                "stats": {
                    "decision": 0.9,    // 高度规则优先
                    "collab": 0.7,      // 多边合作
                    "issue": 0.6,       // 长期视角
                    "compromise": 0.3,   // 低妥协
                    "comm": 0.9,        // 高度正式
                    "solution": 0.2     // 传统方法
                }
            },
            {
                "name": "判例分析型",
                "parentSystem": "法学系统",
                "desc": "依据规则和正式程序，关注长期发展，鼓励创新思维。",
                "stats": {
                    "decision": 0.8,    // 规则优先
                    "collab": 0.5,      // 适度合作
                    "issue": 0.8,       // 长期视角
                    "compromise": 0.4,   // 中等妥协
                    "comm": 0.8,        // 正式外交
                    "solution": 0.4     // 平衡传统创新
                }
            },
            {
                "name": "主持听证型",
                "parentSystem": "法学系统",
                "desc": "遵守规则和正式程序，注重多边合作和适度妥协。",
                "stats": {
                    "decision": 0.8,    // 规则优先
                    "collab": 0.7,      // 多边合作
                    "issue": 0.6,       // 长期视角
                    "compromise": 0.5,   // 中等妥协
                    "comm": 0.9,        // 高度正式
                    "solution": 0.3     // 偏向传统
                }
            }
        ]
    },
    {
        "name": "主新闻中心系统",
        "stats": {
            "decision": 0.4,    // 平衡规则与灵活
            "collab": 0.5,      // 平衡合作方式
            "issue": 0.4,       // 平衡长短期
            "compromise": 0.5,   // 中等妥协
            "comm": 0.4,        // 灵活沟通
            "solution": 0.7     // 创新优先
        },
        "desc": "新闻中心系统注重创新性思维和灵活的信息传播策略，强调快速反应和多方位报道。",
        "children": [
            {
                "name": "快讯管理型",
                "parentSystem": "主新闻中心系统",
                "stats": {
                    "decision": 0.3,    // 灵活优先
                    "collab": 0.4,      // 较少合作
                    "issue": 0.2,       // 短期目标
                    "compromise": 0.4,   // 中等妥协
                    "comm": 0.3,        // 灵活沟通
                    "solution": 0.8     // 高度创新
                },
                "desc": "专注于快速信息传递和突发事件报道，重视时效性和创新传播方式。"
            },
            {
                "name": "深度分析型",
                "parentSystem": "主新闻中心系统",
                "stats": {
                    "decision": 0.5,    // 平衡规则与灵活
                    "collab": 0.6,      // 较多合作
                    "issue": 0.7,       // 长期视角
                    "compromise": 0.5,   // 中等妥协
                    "comm": 0.4,        // 灵活沟通
                    "solution": 0.6     // 适度创新
                },
                "desc": "侧重深入调查和分析报道，平衡短期新闻价值和长期影响评估。"
            },
            {
                "name": "舆论塑造型",
                "parentSystem": "主新闻中心系统",
                "stats": {
                    "decision": 0.4,    // 平衡规则与灵活
                    "collab": 0.5,      // 平衡合作
                    "issue": 0.6,       // 较长期视角
                    "compromise": 0.5,   // 中等妥协
                    "comm": 0.6,        // 较正式沟通
                    "solution": 0.7     // 创新优先
                },
                "desc": "专注于舆论导向和议程设置，注重创新传播策略和正式外交沟通。"
            },
            {
                "name": "冲突调停型",
                "parentSystem": "主新闻中心系统",
                "stats": {
                    "decision": 0.4,    // 平衡规则与灵活
                    "collab": 0.6,      // 较多合作
                    "issue": 0.3,       // 短期目标
                    "compromise": 0.6,   // 较高妥协
                    "comm": 0.7,        // 较正式沟通
                    "solution": 0.5     // 平衡创新与传统
                },
                "desc": "在冲突报道中寻求平衡，注重正式外交沟通和创新调解方式。"
            }
        ]
    },
    {
        "name": "危机系统",
        "desc": "以快速反应和灵活应变为核心，注重短期目标和创新解决方案。",
        "stats": {
            "decision": 0.2,    // 高度灵活
            "collab": 0.4,      // 平衡合作方式
            "issue": 0.3,       // 短期目标
            "compromise": 0.4,   // 中等妥协
            "comm": 0.4,        // 灵活沟通
            "solution": 0.8     // 高度创新
        },
        "children": [
            {
                "name": "战略危机型",
                "parentSystem": "危机系统",
                "desc": "高度灵活应变，注重短期目标，通过双边交涉和立场坚守处理战略危机。",
                "stats": {
                    "decision": 0.1,    // 极度灵活
                    "collab": 0.3,      // 较少合作
                    "issue": 0.2,       // 短期目标
                    "compromise": 0.3,   // 低妥协
                    "comm": 0.5,        // 平衡沟通
                    "solution": 0.7     // 创新优先
                }
            },
            {
                "name": "自然灾害型",
                "parentSystem": "危机系统",
                "desc": "快速灵活应对，高度关注短期目标，注重双边合作和妥协。",
                "stats": {
                    "decision": 0.2,    // 高度灵活
                    "collab": 0.6,      // 较多合作
                    "issue": 0.2,       // 短期目标
                    "compromise": 0.7,   // 高妥协
                    "comm": 0.4,        // 灵活沟通
                    "solution": 0.8     // 高度创新
                }
            },
            {
                "name": "经济危机型",
                "parentSystem": "危机系统",
                "desc": "保持灵活应变，注重短期目标，结合多边合作和创新方案。",
                "stats": {
                    "decision": 0.3,    // 较为灵活
                    "collab": 0.7,      // 多边合作
                    "issue": 0.4,       // 平衡长短期
                    "compromise": 0.5,   // 中等妥协
                    "comm": 0.6,        // 较正式沟通
                    "solution": 0.7     // 创新优先
                }
            },
            {
                "name": "社会动乱型",
                "parentSystem": "危机系统",
                "desc": "高度灵活应变，注重短期目标，通过双边交涉和创新方案化解危机。",
                "stats": {
                    "decision": 0.2,    // 高度灵活
                    "collab": 0.4,      // 平衡合作
                    "issue": 0.2,       // 短期目标
                    "compromise": 0.4,   // 中等妥协
                    "comm": 0.3,        // 灵活沟通
                    "solution": 0.9     // 极度创新
                }
            }
        ]
    },
    {
        "name": "中国历史委员会",
        "desc": "涵盖中国历史上的重要外交事件和决策风格，包括文治与武功两种传统路线。",
        "stats": {
            "decision": 0.6,    // 平衡规则与灵活
            "collab": 0.6,      // 平衡合作方式
            "issue": 0.6,       // 偏向长期视角
            "compromise": 0.6,   // 中等妥协能力
            "comm": 0.8,        // 偏向正式外交
            "solution": 0.5     // 平衡传统与创新
        },
        "children": [
            {
                "name": "文官方向 (Scholarly-Oriented)",
                "parentSystem": "中国历史委员会",
                "stats": {
                    "decision": 0.8,     // 规则优先
                    "collab": 0.8,       // 多边合作
                    "issue": 0.8,        // 长期视角
                    "compromise": 0.7,    // 中高妥协
                    "comm": 0.8,         // 正式外交
                    "solution": 0.4      // 中等偏传统
                },
                "desc": "强调治国理政的智慧与文化外交，通过文治实现长期稳定与国际声望。代表场景：汉武帝时期的丝绸之路开拓、唐朝文化输出与西域稳定。"
            },
            {
                "name": "武官方向 (Military-Oriented)",
                "parentSystem": "中国历史委员会",
                "stats": {
                    "decision": 0.3,     // 灵活应变
                    "collab": 0.3,       // 双边交涉
                    "issue": 0.3,        // 短期目标
                    "compromise": 0.4,    // 中低妥协
                    "comm": 0.8,         // 正式外交
                    "solution": 0.6      // 中等偏创新
                },
                "desc": "以军事力量为核心，通过战争、联盟或威慑手段解决危机和达成目标。代表场景：明朝抗倭援朝的军事外交、元朝远征与多国征服。"
            }
        ]
    },
    {
        "name": "欧洲历史委员会",
        "desc": "反映欧洲历史上的外交传统，包括制度建设与军事同盟两条路线。",
        "stats": {
            "decision": 0.6,    // 平衡规则与灵活
            "collab": 0.7,      // 偏向多边合作
            "issue": 0.6,       // 平衡长短期
            "compromise": 0.6,   // 中等妥协能力
            "comm": 0.8,        // 正式外交
            "solution": 0.6     // 偏向创新
        },
        "children": [
            {
                "name": "文官方向 (Scholarly-Oriented)",
                "parentSystem": "欧洲历史委员会",
                "stats": {
                    "decision": 0.8,     // 规则优先
                    "collab": 0.8,       // 多边合作
                    "issue": 0.8,        // 长期视角
                    "compromise": 0.8,    // 高妥协
                    "comm": 0.8,         // 正式外交
                    "solution": 0.4      // 中等偏传统
                },
                "desc": "强调国际法与制度建设，以和平方式调整各方利益，形成稳定的多边关系网络。代表场景：威斯特伐利亚和约、维也纳会议的外交协作。"
            },
            {
                "name": "武官方向 (Military-Oriented)",
                "parentSystem": "欧洲历史委员会",
                "stats": {
                    "decision": 0.3,     // 灵活应变
                    "collab": 0.7,       // 多边合作
                    "issue": 0.3,        // 短期目标
                    "compromise": 0.5,    // 中等妥协
                    "comm": 0.8,         // 正式外交
                    "solution": 0.8      // 高创新
                },
                "desc": "强调战争与军事策略，通过力量平衡维护秩序和实现战略目标。代表场景：拿破仑战争期间的反法联盟、二战期间的盟军联合指挥体系。"
            }
        ]
    },
];
