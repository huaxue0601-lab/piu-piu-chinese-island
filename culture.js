// 文化角与放松角（v5 起：成语/古诗/寓言/文化卡/字源故事；v7 加网络热梗）
// slots：某阶段某课课中插入的放松内容类型
//   "2-2" "2-4" "2-6" → origin（字源故事）
//   "3-3" "3-6" → idiom
//   "4-2" → fact，"4-4" → fable，"4-7" → slang，"4-8" → fable，"4-11" → slang
//   "5-0" → poem，"5-2" → slang，"5-3" → poem，"5-6" → poem

window.cultureContent = {
  // 每个插槽明确指定内容。不要按课号取模，否则不同课可能反复抽到同一篇。
  slots: {
    "2-2": { type: "origin", index: 0 }, "2-4": { type: "origin", index: 1 }, "2-6": { type: "origin", index: 2 },
    "3-3": { type: "idiom", index: 0 }, "3-6": { type: "idiom", index: 1 },
    "4-2": { type: "fact", index: 0 }, "4-4": { type: "fable", index: 0 }, "4-7": { type: "slang", index: 0 }, "4-8": { type: "fable", index: 1 }, "4-11": { type: "slang", index: 2 },
    "5-0": { type: "poem", index: 0 }, "5-2": { type: "slang", index: 1 }, "5-3": { type: "poem", index: 1 }, "5-6": { type: "poem", index: 2 },
  },
  origins: [
    {
      char: "日", pinyin: "rì", thai: "ดวงอาทิตย์", svg: '<svg viewBox="0 0 120 120" width="120" height="120"><circle cx="60" cy="60" r="34" fill="#fbbf24" stroke="#b45309" stroke-width="4"/><rect x="60" y="10" width="6" height="16" rx="3" fill="#f59e0b"/><rect x="60" y="94" width="6" height="16" rx="3" fill="#f59e0b"/><rect x="10" y="60" width="16" height="6" rx="3" fill="#f59e0b"/><rect x="94" y="60" width="16" height="6" rx="3" fill="#f59e0b"/></svg>',
      story: "「日」本来画的就是太阳。圆圆的太阳，中间有一点。后来为了写字方便，圆形变成了方形，就成了现在的「日」。",
      thaiStory: "「日」เดิมวาดภาพดวงอาทิตย์ มีจุดตรงกลาง ต่อมาวงกลมกลายเป็นสี่เหลี่ยม จึงเป็น 「日」อย่างทุกวันนี้",
    },
    {
      char: "月", pinyin: "yuè", thai: "ดวงจันทร์", svg: '<svg viewBox="0 0 120 120" width="120" height="120"><path d="M80 20 A48 48 0 1 0 80 100 A38 38 0 1 1 80 20 Z" fill="#e5e7eb" stroke="#9ca3af" stroke-width="4"/></svg>',
      story: "「月」原来画的是弯弯的月亮。月亮不总是圆的，所以古人画了它弯弯的样子。月亮的「月」和月份的「月」是同一个字。",
      thaiStory: "「月」เดิมวาดพระจันทร์เสี้ยว คำว่าเดือนและดวงจันทร์ใช้ตัวเดียวกัน",
    },
    {
      char: "山", pinyin: "shān", thai: "ภูเขา", svg: '<svg viewBox="0 0 120 120" width="120" height="120"><path d="M15 95 L45 35 L60 60 L75 30 L105 95 Z" fill="#86efac" stroke="#15803d" stroke-width="4" stroke-linejoin="round"/></svg>',
      story: "「山」像三座山峰站在一起。中间的山最高，两边的山矮一点。看到这个字，就像看到了山的样子。",
      thaiStory: "「山」เหมือนยอดเขาสามลูก ยืนเรียงกัน ตรงกลางสูงที่สุด",
    },
    {
      char: "水", pinyin: "shuǐ", thai: "น้ำ", svg: '<svg viewBox="0 0 120 120" width="120" height="120"><path d="M20 40 Q40 60 60 40 T100 40" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/><path d="M20 70 Q40 90 60 70 T100 70" fill="none" stroke="#0ea5e9" stroke-width="6" stroke-linecap="round"/><path d="M20 100 Q40 118 60 100 T100 100" fill="none" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/></svg>',
      story: "「水」是流动的水。那几道弯弯的线，就是河水在流。后来的「水」保留了中间一条水流的样子。",
      thaiStory: "「水」คือสายน้ำที่ไหล เส้นโค้งคือกระแสน้ำ",
    },
    {
      char: "人", pinyin: "rén", thai: "คน", svg: '<svg viewBox="0 0 120 120" width="120" height="120"><path d="M55 20 L20 110" stroke="#f472b6" stroke-width="7" stroke-linecap="round"/><path d="M65 20 L100 110" stroke="#f472b6" stroke-width="7" stroke-linecap="round"/></svg>',
      story: "「人」是一个人侧着站的样子：两条腿分开站着。一个「人」站着，两个人在一起就是「从」，三个人就是「众」。",
      thaiStory: "「人」คือคนยืนข้าง ๆ สองคนรวมกันคือ 「从」 สามคนคือ 「众」",
    },
  ],
  idioms: [
    {
      idiom: "马马虎虎", pinyin: "mǎmǎhūhū", thai: "มั่ว ๆ, ลวก ๆ",
      svg: '<svg viewBox="0 0 120 120" width="120" height="120"><text x="60" y="80" font-size="44" text-anchor="middle" fill="#8b5cf6">🐴</text></svg>',
      meaning: "做事不认真，随便做做。",
      thaiMeaning: "ทำอะไรไม่ตั้งใจ ทำลวก ๆ",
      example: "他写作业很马马虎虎。",
      question: "「马马虎虎」的意思是？",
      options: ["做事很认真", "做事不认真，随便", "像马和老虎一样快"], answer: 1,
    },
    {
      idiom: "一石二鸟", pinyin: "yìshí èr niǎo", thai: "ยิงปืนนัดเดียวได้นกสองตัว",
      svg: '<svg viewBox="0 0 120 120" width="120" height="120"><text x="60" y="80" font-size="40" text-anchor="middle" fill="#10b981">🪨🐦🐦</text></svg>',
      meaning: "做一件事，得到两个好处。",
      thaiMeaning: "ทำสิ่งเดียว ได้ประโยชน์สองอย่าง",
      example: "一边听歌一边跑步，真是一石二鸟。",
      question: "「一石二鸟」的意思是？",
      options: ["做一件事得到两个好处", "用石头打鸟", "很危险的事"], answer: 0,
    },
    {
      idiom: "画蛇添足", pinyin: "huàshé tiānzú", thai: "วาดงูเติมขา (ทำเกินจำเป็น)",
      svg: '<svg viewBox="0 0 120 120" width="120" height="120"><text x="60" y="80" font-size="44" text-anchor="middle" fill="#ef4444">🐍</text></svg>',
      meaning: "做多余的事，反而把事情弄坏。",
      thaiMeaning: "ทำเรื่องเกินจำเป็น ทำให้เสียหาย",
      example: "本来写好了，你又加一句，真是画蛇添足。",
      question: "「画蛇添足」的意思是？",
      options: ["做事很仔细", "做多余的事反而弄坏", "画画很好"], answer: 1,
    },
    {
      idiom: "亡羊补牢", pinyin: "wángyáng bǔláo", thai: "แก้ไขเมื่อสายไป (แต่ก็ยังดีกว่าไม่ทำ)",
      svg: '<svg viewBox="0 0 120 120" width="120" height="120"><text x="60" y="80" font-size="44" text-anchor="middle" fill="#3b82f6">🐑</text></svg>',
      meaning: "出了问题以后及时补救，还不算晚。",
      thaiMeaning: "เกิดปัญหาก็ยังไม่สายที่จะแก้ไข",
      example: "这次没考好，亡羊补牢，下次努力。",
      question: "「亡羊补牢」告诉我们什么？",
      options: ["出了错要赶快补救", "丢了羊就别养了", "羊很重要"], answer: 0,
    },
    {
      idiom: "迫不及待", pinyin: "pòbùjídài", thai: "รอไม่ไหวแล้ว",
      svg: '<svg viewBox="0 0 120 120" width="120" height="120"><text x="60" y="80" font-size="44" text-anchor="middle" fill="#f97316">⏰</text></svg>',
      meaning: "急得等不了了，马上就想做。",
      thaiMeaning: "รีบร้อนรอไม่ไหว อยากทำทันที",
      example: "他迫不及待地想见到她。",
      question: "「迫不及待」的意思是？",
      options: ["等得了，慢慢来", "急得等不了了", "不想做"], answer: 1,
    },
    {
      idiom: "入乡随俗", pinyin: "rùxiāng suísú", thai: "เข้าตามตรอกออกตามประตู (ทำตามธรรมเนียมท้องถิ่น)",
      svg: '<svg viewBox="0 0 120 120" width="120" height="120"><text x="60" y="80" font-size="44" text-anchor="middle" fill="#14b8a6">🏠</text></svg>',
      meaning: "到了一个新地方，就按那里的习惯做事。",
      thaiMeaning: "ไปที่ไหน ทำตามธรรมเนียมของที่นั่น",
      example: "到了中国，就入乡随俗，学说中文。",
      question: "「入乡随俗」的意思是？",
      options: ["到了新地方按那里的习惯做", "一定要坚持自己的习惯", "别出门"], answer: 0,
    },
  ],
  poems: [
    {
      title: "咏鹅", author: "骆宾王", pinyin: "Yǒng É", thai: "บทกวีห่าน",
      text: "鹅，鹅，鹅，\n曲项向天歌。\n白毛浮绿水，\n红掌拨清波。",
      thaiText: "ห่าน ห่าน ห่าน\nโค้งคอ ร้องเพลงสู่ฟ้า\nขนขาวลอยบนน้ำเขียว\nตีนแดงตีคลื่นใส",
      note: "这首诗写的是鹅在水里游泳的样子。",
      thaiNote: "บทกวีนี้บรรยายห่านว่ายน้ำ",
      question: "鹅的羽毛是什么颜色？",
      options: ["红色", "白色", "黑色"], answer: 1,
    },
    {
      title: "静夜思", author: "李白", pinyin: "Jìng Yè Sī", thai: "ความคิดในยามค่ำคืน",
      text: "床前明月光，\n疑是地上霜。\n举头望明月，\n低头思故乡。",
      thaiText: "หน้าเตียงแสงจันทร์ส่อง\nเหมือนน้ำค้างแข็งบนพื้น\nเงยหน้ามองพระจันทร์\nก้มหน้าคิดถึงบ้านเกิด",
      note: "李白在晚上看到月亮，想起了远方的家乡。",
      thaiNote: "หลี่ไป๋เห็นพระจันทร์แล้วคิดถึงบ้านเกิด",
      question: "诗人看到什么想起了家乡？",
      options: ["星星", "月亮", "花"], answer: 1,
    },
    {
      title: "春晓", author: "孟浩然", pinyin: "Chūn Xiǎo", thai: "รุ่งอรุณฤดูใบไม้ผลิ",
      text: "春眠不觉晓，\n处处闻啼鸟。\n夜来风雨声，\n花落知多少。",
      thaiText: "หลับในฤดูใบไม้ผลิไม่รู้รุ่งสาง\nได้ยินนกร้องไปทั่ว\nเสียงลมฝนเมื่อคืน\nดอกไม้ร่วงไปเท่าไรไม่รู้",
      note: "春天早上醒来，听到鸟叫，想起昨夜的风雨。",
      thaiNote: "ตื่นเช้าฤดูใบไม้ผลิ ได้ยินนกร้อง คิดถึงลมฝนเมื่อคืน",
      question: "诗人早上听到了什么声音？",
      options: ["鸟叫", "汽车", "下雨"], answer: 0,
    },
  ],
  fables: [
    {
      title: "龟兔赛跑", thai: "กระต่ายกับเต่า",
      story: "兔子和乌龟比赛跑步。兔子跑得很快，觉得乌龟太慢了，就在路边睡觉。乌龟一步一步慢慢走，没有停。兔子醒来的时候，乌龟已经到了终点。",
      thaiStory: "กระต่ายกับเต่าแข่งวิ่ง กระต่ายวิ่งเร็ว คิดว่าเต่าช้าเกินไป ก็นอนหลับข้างทาง เต่าค่อย ๆ เดินไปเรื่อย ๆ ไม่หยุด เมื่อกระต่ายตื่น เต่าก็ถึงเส้นชัยแล้ว",
      lesson: "慢慢走，不放弃，也能赢。",
      thaiLesson: "เดินช้า ๆ แต่อย่ายอมแพ้ ก็ชนะได้",
      question: "兔子为什么输了？",
      options: ["跑得太慢", "在路上睡觉", "迷路了"], answer: 1,
    },
    {
      title: "乌鸦喝水", thai: "อีกากับเหยือกน้ำ",
      story: "一只乌鸦很渴，看见一个瓶子，瓶子里有一点水。可是瓶口太小，喝不到。乌鸦把石子一颗一颗放进瓶子，水慢慢升高，乌鸦就喝到水了。",
      thaiStory: "อีกากระหายน้ำ เห็นขวดน้ำมีน้ำนิดหน่อย แต่ปากขวดเล็กเกินไป กาจึงคาบก้อนหินใส่ลงไปทีละก้อน น้ำค่อย ๆ สูงขึ้น กาจึงได้ดื่มน้ำ",
      lesson: "动脑筋，就能找到办法。",
      thaiLesson: "ใช้สมอง ก็หาทางออกได้",
      question: "乌鸦怎么喝到水的？",
      options: ["把瓶子打破", "放石子让水升高", "等别人来帮它"], answer: 1,
    },
    {
      title: "狐狸和葡萄", thai: "สุนัขจิ้งจอกกับองุ่น",
      story: "狐狸想吃葡萄架上的葡萄，可是葡萄太高，跳了很多次都够不到。狐狸说：“这葡萄一定很酸，我才不想吃呢。”",
      thaiStory: "สุนัขจิ้งจอกอยากกินองุ่นบนโครง แต่สูงเกินไป กระโดดหลายครั้งก็เอื้อมไม่ถึง จึงพูดว่า \"องุ่นนี้คงเปรี้ยวแน่ ๆ ฉันไม่อยากกินหรอก\"",
      lesson: "得不到的东西，不要说是它不好。",
      thaiLesson: "สิ่งที่ได้ไม่มา อย่าหาว่ามันไม่ดี",
      question: "狐狸为什么说葡萄是酸的？",
      options: ["它真的吃过", "它够不到葡萄，给自己找理由", "它不喜欢葡萄"], answer: 1,
    },
  ],
  facts: [
    {
      title: "筷子", thai: "ตะเกียบ", text: "中国人吃饭用筷子。筷子有三千多年的历史。", thaiText: "คนจีนกินข้าวด้วยตะเกียบ มีประวัติกว่า 3,000 ปี", icon: "🥢",
      question: "中国人用什么吃饭？",
      options: ["刀和叉", "筷子", "手"], answer: 1,
    },
    {
      title: "熊猫", thai: "แพนด้า", text: "熊猫是中国特有的动物，住在四川等地，喜欢吃竹子。", thaiText: "แพนด้าเป็นสัตว์ที่มีเฉพาะในจีน อยู่ที่เสฉวน ชอบกินไผ่", icon: "🐼",
      question: "熊猫喜欢吃什么？",
      options: ["竹子", "肉", "米饭"], answer: 0,
    },
    {
      title: "长城", thai: "กำแพงเมืองจีน", text: "长城是世界上最长的墙，有超过两万公里。", thaiText: "กำแพงเมืองจีนยาวที่สุดในโลก เกิน 20,000 กิโลเมตร", icon: "🏯",
      question: "长城有多长？",
      options: ["两千公里", "超过两万公里", "两百公里"], answer: 1,
    },
    {
      title: "春节", thai: "เทศกาลตรุษจีน", text: "春节是中国最重要的节日，家人会一起吃饭，贴春联，放鞭炮。", thaiText: "ตรุษจีนเป็นเทศกาลสำคัญที่สุด ครอบครัวกินข้าวด้วยกัน ติดอักษรแดง จุดประทัด", icon: "🧧",
      question: "春节的时候家人做什么？",
      options: ["一起吃饭", "去上班", "睡觉"], answer: 0,
    },
    {
      title: "火锅", thai: "หม้อไฟ", text: "火锅是中国很受欢迎的美食，大家围着一个锅，一边煮一边吃。", thaiText: "หม้อไฟเป็นอาหารยอดนิยม ทุกคนนั่งล้อมหม้อ ต้มแล้วกินไปเรื่อย ๆ", icon: "🍲",
      question: "吃火锅的时候，大家做什么？",
      options: ["围着一个锅煮东西吃", "一个人吃一碗面", "只喝汤"], answer: 0,
    },
    {
      title: "功夫", thai: "กังฟู", text: "功夫是中国武术的名字，全世界都知道。", thaiText: "กังฟูเป็นชื่อศิลปะการต่อสู้จีน ที่โลกรู้จัก", icon: "🥋",
      question: "功夫是什么？",
      options: ["一种舞蹈", "中国武术", "一种食物"], answer: 1,
    },
  ],
  slangs: [
    {
      title: "上班摸鱼", thai: "แอบอู้เวลางาน", icon: "🐟", intro: "年轻人工作时的玩笑话。",
      thaiIntro: "คำพูดติดตลกของคนวัยทำงาน",
      items: [
        { zh: "摸鱼", pinyin: "mōyú", thai: "แอบอู้ ทำงานไม่เต็มที่", example: "别摸鱼了，快点干活！" },
        { zh: "打工", pinyin: "dǎgōng", thai: "ทำงานรับจ้าง", example: "今天又要去打工了。" },
        { zh: "卷", pinyin: "juǎn", thai: "แข่งขันกันอย่างหนัก", example: "大家都很卷，我也不得不努力。" },
      ],
      question: "「摸鱼」是什么意思？",
      options: ["真的去抓鱼", "上班时偷偷休息", "认真工作"], answer: 1,
    },
    {
      title: "夸夸三连", thai: "ชมสามจังหวะ", icon: "🌟", intro: "夸人的时候，年轻人喜欢一连串地说。",
      thaiIntro: "เวลาชมคน คนวัยใหม่ชอบชมต่อเนื่องหลายคำ",
      items: [
        { zh: "绝了", pinyin: "jué le", thai: "สุดยอดไปเลย", example: "你做的菜，绝了！" },
        { zh: "666", pinyin: "liù liù liù", thai: "เก่งมาก (เลิกใช้ 6 6 6)", example: "这个视频拍得 666！" },
        { zh: "牛", pinyin: "niú", thai: "สุดยอด", example: "你太牛了！" },
      ],
      question: "「666」是什么意思？",
      options: ["一个数字", "夸人厉害", "生气的意思"], answer: 1,
    },
    {
      title: "网上冲浪", thai: "ท่องอินเทอร์เน็ต", icon: "📱", intro: "聊微信、刷视频时常用的说法。",
      thaiIntro: "คำพูดที่ใช้ตอนแชตหรือเล่นโซเชียล",
      items: [
        { zh: "冲浪", pinyin: "chōnglàng", thai: "ท่องเน็ต", example: "我晚上喜欢在网上冲浪。" },
        { zh: "刷手机", pinyin: "shuā shǒujī", thai: "เล่นโทรศัพท์", example: "别一直刷手机了。" },
        { zh: "已读不回", pinyin: "yǐdú bù huí", thai: "อ่านแล้วไม่ตอบ", example: "你怎么已读不回？" },
      ],
      question: "「冲浪」在网上的意思是？",
      options: ["去海边", "浏览网上内容", "游泳"], answer: 1,
    },
  ],
};

// 按阶段+课返回放松角内容（没有则返回 null）
function getRelaxContent(stageId, unitIndex) {
  const key = `${stageId}-${unitIndex}`;
  const slot = window.cultureContent.slots[key];
  if (!slot) return null;
  const type = typeof slot === "string" ? slot : slot.type;
  const list = window.cultureContent[type + "s"] || window.cultureContent[type];
  if (!list || !list.length) return null;
  const index = typeof slot === "string" ? 0 : slot.index;
  return { type, item: list[index % list.length], all: list };
}
