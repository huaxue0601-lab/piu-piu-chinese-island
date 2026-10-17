// 笔顺动画（v7）：9 个代表字的 SVG 逐笔动画
// 每字：strokes = 按书写顺序的路径数组；tips = 每笔的口诀提示

window.strokeChars = [
  {
    char: "一", pinyin: "yī", thai: "หนึ่ง", size: 100, viewBox: "0 0 120 120",
    strokes: ['<rect x="10" y="55" width="100" height="10" rx="5" fill="#ef4444"/>'],
    tips: ["横：从左到右，平着写。"],
  },
  {
    char: "十", pinyin: "shí", thai: "สิบ", size: 100, viewBox: "0 0 120 120",
    strokes: [
      '<rect x="10" y="55" width="100" height="10" rx="5" fill="#ef4444"/>',
      '<rect x="55" y="10" width="10" height="100" rx="5" fill="#3b82f6"/>',
    ],
    tips: ["第一笔：横，从左到右。", "第二笔：竖，从上到下，穿过横。先横后竖。"],
  },
  {
    char: "人", pinyin: "rén", thai: "คน", size: 100, viewBox: "0 0 120 120",
    strokes: [
      '<path d="M55 15 L22 105" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>',
      '<path d="M65 15 L98 105" stroke="#3b82f6" stroke-width="10" stroke-linecap="round"/>',
    ],
    tips: ["第一笔：撇，从右上向左下。", "第二笔：捺，从左上向右下。先撇后捺。"],
  },
  {
    char: "日", pinyin: "rì", thai: "ดวงอาทิตย์", size: 100, viewBox: "0 0 120 120",
    strokes: [
      '<rect x="30" y="15" width="60" height="90" rx="4" fill="none" stroke="#ef4444" stroke-width="9"/>',
      '<rect x="30" y="15" width="60" height="10" rx="4" fill="#ef4444"/>',
      '<rect x="30" y="95" width="60" height="10" rx="4" fill="#3b82f6"/>',
      '<rect x="55" y="25" width="10" height="70" rx="4" fill="#22c55e"/>',
    ],
    tips: ["先写外框，从左上开始。", "再写上边。", "然后写下边，最后封口。", "最后写中间一横。先外后内再封口。"],
  },
  {
    char: "山", pinyin: "shān", thai: "ภูเขา", size: 100, viewBox: "0 0 120 120",
    strokes: [
      '<path d="M60 20 L60 100" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>',
      '<path d="M22 95 L60 20 L98 95" fill="none" stroke="#3b82f6" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>',
    ],
    tips: ["先写中间一竖（山脊）。", "再写两边：左边一竖右边一竖，像三座山。先中间后两边。"],
  },
  {
    char: "水", pinyin: "shuǐ", thai: "น้ำ", size: 100, viewBox: "0 0 120 120",
    strokes: [
      '<path d="M30 15 Q10 60 30 105" fill="none" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>',
      '<path d="M55 60 L70 95" stroke="#3b82f6" stroke-width="9" stroke-linecap="round"/>',
      '<path d="M80 40 L90 60" stroke="#3b82f6" stroke-width="9" stroke-linecap="round"/>',
      '<path d="M80 70 L90 90" stroke="#22c55e" stroke-width="9" stroke-linecap="round"/>',
    ],
    tips: ["先写中间的一笔，像水流下来。", "再写左边的钩。", "最后写右边两笔，先短后长。先中间后两边。"],
  },
  {
    char: "火", pinyin: "huǒ", thai: "ไฟ", size: 100, viewBox: "0 0 120 120",
    strokes: [
      '<path d="M60 15 L60 95" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>',
      '<path d="M60 55 L35 25" stroke="#3b82f6" stroke-width="9" stroke-linecap="round"/>',
      '<path d="M60 55 L85 25" stroke="#3b82f6" stroke-width="9" stroke-linecap="round"/>',
      '<path d="M60 70 L45 100 L75 100 Z" fill="#f59e0b"/>',
    ],
    tips: ["第一笔：中间一竖，像火苗。", "第二笔：左边一点。", "第三笔：右边一点。", "最后写下面的撇和捺，像火焰张开。"],
  },
  {
    char: "口", pinyin: "kǒu", thai: "ปาก", size: 100, viewBox: "0 0 120 120",
    strokes: [
      '<path d="M30 20 L30 95" stroke="#ef4444" stroke-width="10" stroke-linecap="round"/>',
      '<path d="M30 20 L90 20" stroke="#3b82f6" stroke-width="10" stroke-linecap="round"/>',
      '<path d="M90 20 L90 95" stroke="#22c55e" stroke-width="10" stroke-linecap="round"/>',
      '<path d="M30 95 L90 95" stroke="#a855f7" stroke-width="10" stroke-linecap="round"/>',
    ],
    tips: ["先写左边一竖。", "再写上面一横。", "然后写右边一竖。", "最后写下面一横封口。"],
  },
  {
    char: "木", pinyin: "mù", thai: "ไม้", size: 100, viewBox: "0 0 120 120",
    strokes: [
      '<rect x="55" y="15" width="10" height="90" rx="4" fill="#ef4444"/>',
      '<rect x="15" y="55" width="90" height="10" rx="5" fill="#3b82f6"/>',
      '<path d="M60 65 L35 100" stroke="#22c55e" stroke-width="9" stroke-linecap="round"/>',
      '<path d="M60 65 L85 100" stroke="#a855f7" stroke-width="9" stroke-linecap="round"/>',
    ],
    tips: ["第一笔：中间一竖，像树干。", "第二笔：横，像树枝。", "第三笔：撇，向左下。", "第四笔：捺，向右下。先横后竖，先撇后捺。"],
  },
];
