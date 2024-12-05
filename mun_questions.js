questions = [
    // 一、个人倾向问题（决策风格）
    {
        "question": "议事规则应严格遵守，即使会延长决策时间。",
        "effect": {
            "decision": 10,    // 强烈规则优先
            "collab": 0,
            "issue": 5,       // 偏向长期
            "compromise": 0,
            "comm": 5,        // 偏向正式
            "solution": -5     // 偏向传统
        }
    },
    {
        "question": "面对突发危机，优先寻找灵活方法，而非坚持程序性规则。",
        "effect": {
            "decision": -10,   // 强烈灵活应变
            "collab": 0,
            "issue": -5,      // 偏向短期
            "compromise": 0,
            "comm": -5,       // 偏向非正式
            "solution": 5      // 偏向创新
        }
    },
    {
        "question": "在外交会议中，规则是实现公平性和严肃性的核心。",
        "effect": {
            "decision": 10,    // 强烈规则优先
            "collab": 5,      // 偏向多边
            "issue": 0,
            "compromise": 0,
            "comm": 10,       // 强烈正式
            "solution": -5     // 偏向传统
        }
    },
    {
        "question": "紧急情况下，我愿意牺牲程序的严谨性来追求效率。",
        "effect": {
            "decision": -10,   // 强烈灵活应变
            "collab": 0,
            "issue": -5,      // 偏向短期
            "compromise": 5,   // 偏向妥协
            "comm": -5,       // 偏向非正式
            "solution": 5      // 偏向创新
        }
    },
    {
        "question": "广泛的国际合作是解决全球性问题的最佳方式。",
        "effect": {
            "decision": 0,
            "collab": 10,     // 强烈多边合作
            "issue": 5,       // 偏向长期
            "compromise": 5,   // 偏向妥协
            "comm": 5,        // 偏向正式
            "solution": 0
        }
    },
    {
        "question": "面对复杂的外交议题，我更倾向与数量更少的直接相关方进行磋商。",
        "effect": {
            "decision": -5,    // 偏向灵活
            "collab": -10,    // 强烈双边交涉
            "issue": 0,
            "compromise": 0,
            "comm": -5,       // 偏向非正式
            "solution": 0
        }
    },
    {
        "question": "我更愿意推动多边会议，而不是通过单独谈判解决问题。",
        "effect": {
            "decision": 5,     // 偏向规则
            "collab": 10,     // 强烈多边合作
            "issue": 0,
            "compromise": 5,   // 偏向妥协
            "comm": 5,        // 偏向正式
            "solution": 0
        }
    },
    {
        "question": "在外交中，快速与个别国家达成私下协议更有效率。",
        "effect": {
            "decision": -5,    // 偏向灵活
            "collab": -10,    // 强烈双边交涉
            "issue": -5,      // 偏向短期
            "compromise": 0,
            "comm": -10,      // 强烈非正式
            "solution": 0
        }
    },
    {
        "question": "在外交问题中，我优先看重短期的直接行动效果。",
        "effect": {
            "decision": -5,    // 偏向灵活
            "collab": 0,
            "issue": -10,     // 强烈短期目标
            "compromise": 0,
            "comm": -5,       // 偏向非正式
            "solution": 5      // 偏向创新
        }
    },
    {
        "question": "我倾向于将资源和精力投入于长期的全球性规划，而非短期问题解决。",
        "effect": {
            "decision": 5,     // 偏向规则
            "collab": 5,      // 偏向多边
            "issue": 10,      // 强烈长期视角
            "compromise": 0,
            "comm": 5,        // 偏向正式
            "solution": 0
        }
    },
    {
        "question": "应对紧急危机时，我认为立即采取行动远比长远规划重要。",
        "effect": {
            "decision": -5,    // 偏向灵活
            "collab": 0,
            "issue": -10,     // 强烈短期目标
            "compromise": 0,
            "comm": -5,       // 偏向非正式
            "solution": 5      // 偏向创新
        }
    },
    {
        "question": "即使在危机情况下，解决全球结构性问题仍然至关重要。",
        "effect": {
            "decision": 5,     // 偏向规则
            "collab": 5,      // 偏向多边
            "issue": 10,      // 强烈长期视角
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "为了达成协议，我愿意在谈判中做出重大妥协。",
        "effect": {
            "decision": -5,    // 偏向灵活
            "collab": 5,      // 偏向多边
            "issue": 0,
            "compromise": 10,  // 强烈高妥协
            "comm": 0,
            "solution": 5      // 偏向创新
        }
    },
    {
        "question": "在某些议题上，我绝不会让步，即使可能导致谈判失败。",
        "effect": {
            "decision": 5,     // 偏向规则
            "collab": -5,     // 偏向双边
            "issue": 0,
            "compromise": -10, // 强烈立场坚守
            "comm": 0,
            "solution": -5     // 偏向传统
        }
    },
    {
        "question": "谈判中的妥协往往对结果有积极的影响。",
        "effect": {
            "decision": 0,
            "collab": 5,      // 偏向多边
            "issue": 0,
            "compromise": 10,  // 强烈高妥协
            "comm": 0,
            "solution": 5      // 偏向创新
        }
    },
    {
        "question": "优先保护我的核心利益，而非为了实现共识进行妥协。",
        "effect": {
            "decision": 5,     // 偏向规则
            "collab": -5,     // 偏向双边
            "issue": 0,
            "compromise": -10, // 强烈立场坚守
            "comm": 0,
            "solution": -5     // 偏向传统
        }
    },
    {
        "question": "外交中的正式礼仪和文件至关重要，它们能够加强国际间的信任。",
        "effect": {
            "decision": 5,     // 偏向规则
            "collab": 5,      // 偏向多边
            "issue": 0,
            "compromise": 0,
            "comm": 10,       // 强烈正式外交
            "solution": -5     // 偏向传统
        }
    },
    {
        "question": "在重要谈判中，灵活的非正式讨论比礼仪性的发言更有效。",
        "effect": {
            "decision": -5,    // 偏向灵活
            "collab": 0,
            "issue": 0,
            "compromise": 5,   // 偏向妥协
            "comm": -10,      // 强烈非正式交涉
            "solution": 5      // 偏向创新
        }
    },
    {
        "question": "我倾向通过正式的议程安排和演讲明确问题。",
        "effect": {
            "decision": 5,     // 偏向规则
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 10,       // 强烈正式外交
            "solution": -5     // 偏向传统
        }
    },
    {
        "question": "在外交中，私下磋商比公开会议更有助于解决争议。",
        "effect": {
            "decision": -5,    // 偏向灵活
            "collab": -5,     // 偏向双边
            "issue": 0,
            "compromise": 5,   // 偏向妥协
            "comm": -10,      // 强烈非正式交涉
            "solution": 5      // 偏向创新
        }
    },
    // 二、普通问题（单一维度）
    // 1. 决策逻辑（Decision Logic）
    {
        "question": "在应对全球性问题时，应始终坚持已有国际条约和框架，不可偏离规则。",
        "effect": {
            "decision": 10,    // 强烈规则优先
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "即使已经有现有条约框架，如果它失效或低效，优先考虑灵活调整规则。",
        "effect": {
            "decision": -10,   // 强烈灵活应变
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "国际会议中，明确的程序和规则是确保公平性的唯一保障。",
        "effect": {
            "decision": 10,    // 强烈规则优先
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "当规则阻碍危机应对时，可以暂时选择放弃规则，优先寻求实质性解决方案。",
        "effect": {
            "decision": -10,   // 强烈灵活应变
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    // 2. 协作方式（Collaboration Style）
    {
        "question": "统筹协调多个国家的努力，是解决全球问题最为重要的方式。",
        "effect": {
            "decision": 0,
            "collab": 10,     // 强烈多边合作
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "针对特定问题，与直接相关的国家或地区达成双边协议更为有效。",
        "effect": {
            "decision": 0,
            "collab": -10,    // 强烈双边交涉
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "小型国家在多边合作中经常被忽视，应给予更多话语权。",
        "effect": {
            "decision": 0,
            "collab": 10,     // 强烈多边合作
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "在国际事务中，与核心大国建立紧密的双边关系比多边体系更重要。",
        "effect": {
            "decision": 0,
            "collab": -10,    // 强烈双边交涉
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "缩小国际合作范围（如区域化合作）比推动全球多边行动更能带来成果。",
        "effect": {
            "decision": 0,
            "collab": -10,    // 强烈双边交涉
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    // 3. 问题关注（Issue Prioritization）
    {
        "question": "应对气候变化等长期全球问题比解决当前危机更为重要。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 10,      // 强烈长期视角
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "国际社会处理问题时，应始终优先解决紧急反应需求，比如战争或灾难。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": -10,     // 强烈短期目标
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "大规模援助计划的长期收益应是外交决策的优先要素，即使短期内成效不明显。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 10,      // 强烈长期视角
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "面对经济危机，快速恢复市场的稳定比实施大规模改革更为重要。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": -10,     // 强烈短期目标
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "短期内缓解社会动荡的临时措施可能会加剧长期问题，这种抉择需要慎重看待。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 10,      // 强烈长期视角
            "compromise": 0,
            "comm": 0,
            "solution": 0
        }
    },
    // 4. 妥协能力（Compromise Capacity）
    {
        "question": "为了推动国际协议，牺牲某些国家的特殊利益是可以接受的。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 10,  // 强烈高妥协
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "即使多数国家同意，我也不应妥协于违背我方基本立场的方案。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": -10, // 强烈立场坚守
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "当核心大国立场对立时，通过妥协找到折中方案是全球合作的必要条件。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 10,  // 强烈高妥协
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "妥协会导致国家立场被削弱，应尽量避免屈服于国际合作压力。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": -10, // 强烈立场坚守
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "即便妥协会带来短期不公平，它也可能推动长期的国际目标实现。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 10,  // 强烈高妥协
            "comm": 0,
            "solution": 0
        }
    },
    // 5. 沟通风格（Communication Style）
    {
        "question": "正式的外交语言有助于增强标准化和信任，是外交成功的关键。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 10,      // 强烈正式沟通
            "solution": 0
        }
    },
    {
        "question": "解决复杂问题时，非正式磋商往往比正式发言和程序更有效。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": -10,     // 强烈非正式沟通
            "solution": 0
        }
    },
    {
        "question": "多边外交中的正式程序是避免误解和冲突的必要保护措施。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 10,      // 强烈正式沟通
            "solution": 0
        }
    },
    {
        "question": "私人谈话和闭门讨论是解决相互矛盾最好的方式，而非正式场合通常更有作用。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": -10,     // 强烈非正式沟通
            "solution": 0
        }
    },
    {
        "question": "即使面对非正式的危机，也应保持正式外交惯例，避免显得不专业。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 10,      // 强烈正式沟通
            "solution": 0
        }
    },
    // 6. 解决创新（Solution Creativity）
    {
        "question": "外交中的创新方式通常是应对僵局的最佳工具。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 10   // 强烈创新倾向
        }
    },
    {
        "question": "在涉及重要议题时，与其冒风险使用创新方式，不如沿用以往的成功经验。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": -10  // 强烈传统倾向
        }
    },
    {
        "question": "面对无法解决的技术外交难题，创新手段往往能突破限制。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 10   // 强烈创新倾向
        }
    },
    {
        "question": "历史成功的协议和先例是制定当前外交策略的最佳基石。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": -10  // 强烈传统倾向
        }
    },
    {
        "question": "许多国际问题因缺乏足够的创造性解决方案而难有进展。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 0,
            "comm": 0,
            "solution": 10   // 强烈创新倾向
        }
    },
    // 领域特点问题（31-50）
    {
        "question": "联合国安理会应该拥有更大的决策权，而不是受制于大会程序。",
        "effect": {
            "decision": 8,     // 偏向集中决策
            "collab": -5,      // 轻微减少协作
            "issue": 0,
            "compromise": -5,   // 轻微减少妥协
            "comm": 5,         // 轻微正式沟通
            "solution": 0
        }
    },
    {
        "question": "解决环境问题需要更多依赖技术创新，而非传统框架。",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 5,        // 轻微长期视角
            "compromise": 0,
            "comm": -5,        // 轻微非正式
            "solution": 8      // 偏向创新
        }
    },
    {
        "question": "多边会议常无实质结果，我们应该更注重通过双边谈判解决问题。",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": -8,      // 偏向独立
            "issue": -5,       // 轻微短期
            "compromise": 0,
            "comm": -5,        // 轻微非正式
            "solution": 0
        }
    },
    {
        "question": "难民问题应优先通过联合援助机制，而非单个国家的行动来解决。",
        "effect": {
            "decision": -8,    // 偏向分散
            "collab": 8,       // 偏向协作
            "issue": 0,
            "compromise": 5,    // 轻微妥协
            "comm": 5,         // 轻微正式
            "solution": 0
        }
    },
    {
        "question": "遵守程序非常重要，即使面对快速变化的问题，也不应轻易破坏规则。",
        "effect": {
            "decision": 0,
            "collab": 5,       // 轻微协作
            "issue": 0,
            "compromise": 0,
            "comm": 8,         // 偏向正式
            "solution": -8     // 偏向传统
        }
    },
    {
        "question": "面对气候危机，会议与协议的效率远不及单边实质行动。",
        "effect": {
            "decision": 8,     // 偏向集中
            "collab": -8,      // 偏向独立
            "issue": -5,       // 轻微短期
            "compromise": -5,   // 轻微减少妥协
            "comm": 0,
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "实现可持续发展目标（SDGs）需要更长期的周密计划，而非快速措施。",
        "effect": {
            "decision": 0,
            "collab": 5,       // 轻微协作
            "issue": 8,        // 偏向长期
            "compromise": 0,
            "comm": 5,         // 轻微正式
            "solution": -5     // 轻微传统
        }
    },
    {
        "question": "共享全球责任是解决包括环境问题在内的全球性危机的前提。",
        "effect": {
            "decision": -5,    // 轻微分散
            "collab": 8,       // 偏向协作
            "issue": 5,        // 轻微长期
            "compromise": 8,    // 偏向妥协
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "为了人道主义目标，集体妥协比单一国家的利益诉求更重要。",
        "effect": {
            "decision": -5,    // 轻微分散
            "collab": 5,       // 轻微协作
            "issue": 0,
            "compromise": 8,    // 偏向妥协
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "全球治理需要更多地区组织的自主权，而非单一依赖联合国主导框架。",
        "effect": {
            "decision": -8,    // 偏向分散
            "collab": 5,       // 轻微协作
            "issue": 0,
            "compromise": 0,
            "comm": -5,        // 轻微非正式
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "在全球难民危机中，接收大量难民是国际社会每个国家的必要责任。",
        "effect": {
            "decision": -5,    // 轻微分散
            "collab": 8,       // 偏向协作
            "issue": 0,
            "compromise": 8,    // 偏向妥协
            "comm": 5,         // 轻微正式
            "solution": 0
        }
    },
    {
        "question": "发达国家应承担全球减贫进程中的主要财务成本，发展中国家不应负担更多责任。",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": 5,       // 轻微协作
            "issue": 5,        // 轻微长期
            "compromise": -5,   // 轻微减少妥协
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "战争冲突中，国际社会应优先避免人道主义灾难，而非盲目追求军事干预。",
        "effect": {
            "decision": -5,    // 轻微分散
            "collab": 8,       // 偏向协作
            "issue": 5,        // 轻微长期
            "compromise": 5,    // 轻微妥协
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "国际贸易协议应允许为保护弱势经济提供灵活的政策调整条款。",
        "effect": {
            "decision": -5,    // 轻微分散
            "collab": 5,       // 轻微协作
            "issue": 0,
            "compromise": 8,    // 偏向妥协
            "comm": 0,
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "在军事冲突热点问题上，区域合作框架比全面全球介入更有效。",
        "effect": {
            "decision": -8,    // 偏向分散
            "collab": 5,       // 轻微协作
            "issue": 0,
            "compromise": 5,    // 轻微妥协
            "comm": -5,        // 轻微非正式
            "solution": 0
        }
    },
    {
        "question": "应对气候变化不能仅依托技术创新，还需优先严格实施现有国际条约。",
        "effect": {
            "decision": 0,
            "collab": 8,       // 偏向协作
            "issue": 5,        // 轻微长期
            "compromise": 5,    // 轻微妥协
            "comm": 8,         // 偏向正式
            "solution": -8     // 偏向传统
        }
    },
    {
        "question": "为推动科技发展，知识产权保护不应成为最优先问题。",
        "effect": {
            "decision": 0,
            "collab": 5,       // 轻微协作
            "issue": 5,        // 轻微长期
            "compromise": 8,    // 偏向妥协
            "comm": -5,        // 轻微非正式
            "solution": 8      // 偏向创新
        }
    },
    {
        "question": "在严重社会动荡的国家，快速国际干预比本地政治问题长期解决更为重要。",
        "effect": {
            "decision": 8,     // 偏向集中
            "collab": -5,      // 轻微独立
            "issue": -8,       // 偏向短期
            "compromise": -5,   // 轻微减少妥协
            "comm": 0,
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "在涉及战争罪行等严重问题时，无需顾虑程序复杂性，应直接采取实质行动。",
        "effect": {
            "decision": 8,     // 偏向集中
            "collab": -5,      // 轻微独立
            "issue": -8,       // 偏向短期
            "compromise": -8,   // 偏向不妥协
            "comm": -5,        // 轻微非正式
            "solution": 0
        }
    },
    {
        "question": "若主议题未能取得实质性进展，是否会提议小范围闭门磋商？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": -5,      // 轻微独立
            "issue": -5,       // 轻微短期
            "compromise": 5,    // 轻微妥协
            "comm": -8,        // 偏向非正式
            "solution": 5      // 轻微创新
        }
    },
    // 情景问题
    // 1. 决策危机与规则程序
    {
        "question": "在紧急的国际危机中（如大规模疫病爆发），你是否会绕过联合国框架，直接建立区域性危机管理机制？",
        "effect": {
            "decision": 8,     // 偏向集中决策
            "collab": -5,      // 轻微独立
            "issue": -8,       // 偏向短期
            "compromise": -5,   // 轻微减少妥协
            "comm": -8,        // 偏向非正式
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "某区域发生严重自然灾害，但援助申请未被安理会通过，你是否会召集志愿国家开展救援？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": 8,       // 偏向协作
            "issue": -8,       // 偏向短期
            "compromise": -5,   // 轻微减少妥协
            "comm": -5,        // 轻微非正式
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "在一次国际会议中，由于程序性分歧导致议题无法推进，你是否会推动改变程序规则以缩短进程？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": 0,
            "issue": -5,       // 轻微短期
            "compromise": -5,   // 轻微减少妥协
            "comm": -8,        // 偏向非正式
            "solution": 8      // 偏向创新
        }
    },
    {
        "question": "某国未经联合国授权，对邻国采取单边军事行动，而其宣称的目的是确保区域安全。你是否会支持这样的单边干预？",
        "effect": {
            "decision": 8,     // 偏向集中
            "collab": -8,      // 偏向独立
            "issue": -8,       // 偏向短期
            "compromise": -8,   // 偏向不妥协
            "comm": -5,        // 轻微非正式
            "solution": 0
        }
    },
    {
        "question": "若主议题未能取得实质性进展，是否会提议小范围闭门磋商？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": -5,      // 轻微独立
            "issue": -5,       // 轻微短期
            "compromise": 5,    // 轻微妥协
            "comm": -8,        // 偏向非正式
            "solution": 5      // 轻微创新
        }
    },
    // 2. 多边合作与双边谈判
    {
        "question": "在国际贸易争端中，是否首先与主要贸易对手达成双边协议，而非通过多边平台解决？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": -8,      // 偏向独立
            "issue": -5,       // 轻微短期
            "compromise": 5,    // 轻微妥协
            "comm": -5,        // 轻微非正式
            "solution": 0
        }
    },
    {
        "question": "在多边谈判中，是否愿意单独与持续反对的小型国家磋商以寻求妥协？",
        "effect": {
            "decision": 0,
            "collab": 5,       // 轻微协作
            "issue": 0,
            "compromise": 8,    // 偏向妥协
            "comm": -5,        // 轻微非正式
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "若某国因能源依赖问题与你请求达成双边协议，是否优先推进？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": -5,      // 轻微独立
            "issue": -5,       // 轻微短期
            "compromise": 5,    // 轻微妥协
            "comm": -5,        // 轻微非正式
            "solution": 0
        }
    },
    {
        "question": "区域最大的威胁是跨国恐怖主义，你是否重视区域联盟而非全球平台？",
        "effect": {
            "decision": -5,    // 轻微分散
            "collab": 5,       // 轻微协作
            "issue": -5,       // 轻微短期
            "compromise": 0,
            "comm": -5,        // 轻微非正式
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "若主议题未能取得实质性进展，是否会提议小范围闭门磋商？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": -5,      // 轻微独立
            "issue": -5,       // 轻微短期
            "compromise": 5,    // 轻微妥协
            "comm": -8,        // 偏向非正式
            "solution": 5      // 轻微创新
        }
    },
    // 3. 长期与短期目标之间的冲突
    {
        "question": "支持一个可能严重影响短期经济增长的气候减排协定？",
        "effect": {
            "decision": 0,
            "collab": 5,       // 轻微协作
            "issue": 8,        // 偏向长期
            "compromise": 5,    // 轻微妥协
            "comm": 5,         // 轻微正式
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "在地区冲突中，优先短期援助平民，即使资源消耗影响长期解决方案？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": 5,       // 轻微协作
            "issue": -8,       // 偏向短期
            "compromise": 0,
            "comm": -5,        // 轻微非正式
            "solution": 0
        }
    },
    {
        "question": "是否支持向某发展中国家提供技术援助，尽管短期收益不明显？",
        "effect": {
            "decision": -5,    // 轻微分散
            "collab": 8,       // 偏向协作
            "issue": 8,        // 偏向长期
            "compromise": 5,    // 轻微妥协
            "comm": 0,
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "优先调整金融市场稳定而非推动长期经济改革？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": 0,
            "issue": -8,       // 偏向短期
            "compromise": -5,   // 轻微减少妥协
            "comm": 0,
            "solution": -5     // 轻微传统
        }
    },
    {
        "question": "为国际组织低效率问题，选择暂时性措施，而不是等待长期改革完成？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": -5,      // 轻微独立
            "issue": -8,       // 偏向短期
            "compromise": 5,    // 轻微妥协
            "comm": -5,        // 轻微非正式
            "solution": 5      // 轻微创新
        }
    },
    // 4. 妥协与坚持的抉择
    {
        "question": "为推动气候减排协议，采取折中目标以促成全体同意？",
        "effect": {
            "decision": -5,    // 轻微分散
            "collab": 8,       // 偏向协作
            "issue": 5,        // 轻微长期
            "compromise": 8,    // 偏向妥协
            "comm": 5,         // 轻微正式
            "solution": 0
        }
    },
    {
        "question": "在国际贸易谈判中，若核心利益被威胁，是否愿让谈判终止？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": -8,      // 偏向独立
            "issue": -5,       // 轻微短期
            "compromise": -8,   // 偏向不妥协
            "comm": 0,
            "solution": 0
        }
    },
    {
        "question": "面临国际社会一致反对，是否坚持保护本国立场？",
        "effect": {
            "decision": 8,     // 偏向集中
            "collab": -8,      // 偏向独立
            "issue": 0,
            "compromise": -8,   // 偏向不妥协
            "comm": 5,         // 轻微正式
            "solution": -5     // 轻微传统
        }
    },
    {
        "question": "实现紧急援助一致，愿放弃部分议程程序要求？",
        "effect": {
            "decision": 0,
            "collab": 8,       // 偏向协作
            "issue": -5,       // 轻微短期
            "compromise": 8,    // 偏向妥协
            "comm": -8,        // 偏向非正式
            "solution": 5      // 轻微创新
        }
    },
    {
        "question": "接受不平等分担预算的妥协方案？",
        "effect": {
            "decision": -5,    // 轻微分散
            "collab": 5,       // 轻微协作
            "issue": 0,
            "compromise": 8,    // 偏向妥协
            "comm": 5,         // 轻微正式
            "solution": 0
        }
    },
    // 5. 沟通策略与风格适应
    {
        "question": "倾向在闭门会谈中使用直接简单的非正式沟通？",
        "effect": {
            "decision": 0,
            "collab": 5,       // 轻微协作
            "issue": 0,
            "compromise": 5,    // 轻微妥协
            "comm": -8,        // 偏向非正式
            "solution": 0
        }
    },
    {
        "question": "在国际仲裁中倾向正式语言而非灵活应急表达？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": 0,
            "issue": 0,
            "compromise": -5,   // 轻微减少妥协
            "comm": 8,         // 偏向正式
            "solution": -5     // 轻微传统
        }
    },
    {
        "question": "倾向通过私下磋商影响他国立场？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": -5,      // 轻微独立
            "issue": 0,
            "compromise": 5,    // 轻微妥协
            "comm": -8,        // 偏向非正式
            "solution": 0
        }
    },
    {
        "question": "在高层会谈中更重视建设性对话，而非社交场合氛围？",
        "effect": {
            "decision": 0,
            "collab": 5,       // 轻微协作
            "issue": 5,        // 轻微长期
            "compromise": 0,
            "comm": 8,         // 偏向正式
            "solution": 0
        }
    },
    {
        "question": "在直播论坛更注重讲话严谨性而非灵活性？",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": -5,   // 轻微减少妥协
            "comm": 8,         // 偏向正式
            "solution": -5     // 轻微传统
        }
    },
    // 6. 创新与传统解决方案的选择
    {
        "question": "在气候谈判中，支持采用创新融资机制（如全球碳税）？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": 5,       // 轻微协作
            "issue": 8,        // 偏向长期
            "compromise": 0,
            "comm": 0,
            "solution": 8      // 偏向创新
        }
    },
    {
        "question": "更倾向依赖历史先例来设计解决方案？",
        "effect": {
            "decision": 0,
            "collab": 0,
            "issue": 0,
            "compromise": 5,    // 轻微妥协
            "comm": 5,         // 轻微正式
            "solution": -8     // 偏向传统
        }
    },
    {
        "question": "支持跨区合作组织以替代联合国处理跨境危机？",
        "effect": {
            "decision": -8,    // 偏向分散
            "collab": 5,       // 轻微协作
            "issue": 0,
            "compromise": 0,
            "comm": -5,        // 轻微非正式
            "solution": 8      // 偏向创新
        }
    },
    {
        "question": "面对技术分歧，更倾向发展创新策略代替传统协议？",
        "effect": {
            "decision": 0,
            "collab": -5,      // 轻微独立
            "issue": 5,        // 轻微长期
            "compromise": -5,   // 轻微减少妥协
            "comm": -5,        // 轻微非正式
            "solution": 8      // 偏向创新
        }
    },
    {
        "question": "支持使用无人机等创新方式减轻军事冲突中的人道危机？",
        "effect": {
            "decision": 5,     // 轻微集中
            "collab": 0,
            "issue": -5,       // 轻微短期
            "compromise": 0,
            "comm": 0,
            "solution": 8      // 偏向创新
        }
    }
];
