// 可在线玩的小游戏题库（v3 起加入，v6 扩到 6 个）
// 结构：每个游戏 { title, thai, desc, thaiDesc, pool: [题] }
// 题统一 { prompt, hint, options:[字符串], answer:正确下标, explain, speak? }
// order 类型特殊：answers 可列出多种自然、正确的中文语序。

window.isCorrectOrder = function isCorrectOrder(question, picked) {
  const accepted = Array.isArray(question.answers) && question.answers.length
    ? question.answers
    : [question.answer || question.parts.map((_, index) => index)];
  return accepted.some((answer) => answer.length === picked.length && answer.every((value, index) => value === picked[index]));
};

window.miniGameLibs = {
  toneLift: {
    title: "声音电梯",
    thai: "ลิฟต์เสียง",
    desc: "听到一个带调音节，选出它的声调方向。",
    thaiDesc: "ฟังเสียงแล้วเลือกวรรณยุกต์ที่ได้ยิน",
    pool: [
      { type: "listen", prompt: "妈 mā", hint: "先听，再选声调", options: ["一声", "二声", "三声", "四声"], answer: 0, speak: "妈", explain: "mā 是一声，声音又高又平。" },
      { type: "listen", prompt: "麻 má", hint: "先听，再选声调", options: ["一声", "二声", "三声", "四声"], answer: 1, speak: "麻", explain: "má 是二声，声音往上走。" },
      { type: "listen", prompt: "马 mǎ", hint: "先听，再选声调", options: ["一声", "二声", "三声", "四声"], answer: 2, speak: "马", explain: "mǎ 是三声，先下再上。" },
      { type: "listen", prompt: "骂 mà", hint: "先听，再选声调", options: ["一声", "二声", "三声", "四声"], answer: 3, speak: "骂", explain: "mà 是四声，快速往下落。" },
      { type: "listen", prompt: "好 hǎo", hint: "先听，再选声调", options: ["一声", "二声", "三声", "四声"], answer: 2, speak: "好", explain: "hǎo 是三声。" },
      { type: "listen", prompt: "去 qù", hint: "先听，再选声调", options: ["一声", "二声", "三声", "四声"], answer: 3, speak: "去", explain: "qù 是四声。" },
      { type: "listen", prompt: "爱 ài", hint: "先听，再选声调", options: ["一声", "二声", "三声", "四声"], answer: 3, speak: "爱", explain: "ài 是四声。" },
      { type: "listen", prompt: "月 yuè", hint: "先听，再选声调", options: ["一声", "二声", "三声", "四声"], answer: 3, speak: "月", explain: "yuè 是四声。" },
    ],
  },
  breath: {
    title: "纸条测风",
    thai: "กระดาษวัดลม",
    desc: "判断音节开头的声母读的时候，纸条会不会被吹动。",
    thaiDesc: "ตัดสินว่าพยัญชนะต้นพ่นลมหรือไม่",
    pool: [
      { type: "read", prompt: "bā（八）", hint: "读 b 时纸条会动吗？", options: ["会动（送气）", "不会动（不送气）"], answer: 1, explain: "b 是不送气音，纸条不动。" },
      { type: "read", prompt: "pā（趴）", hint: "读 p 时纸条会动吗？", options: ["会动（送气）", "不会动（不送气）"], answer: 0, explain: "p 是送气音，纸条会动。" },
      { type: "read", prompt: "dā（搭）", hint: "读 d 时纸条会动吗？", options: ["会动（送气）", "不会动（不送气）"], answer: 1, explain: "d 是不送气音。" },
      { type: "read", prompt: "tā（他）", hint: "读 t 时纸条会动吗？", options: ["会动（送气）", "不会动（不送气）"], answer: 0, explain: "t 是送气音。" },
      { type: "read", prompt: "gē（哥）", hint: "读 g 时纸条会动吗？", options: ["会动（送气）", "不会动（不送气）"], answer: 1, explain: "g 是不送气音。" },
      { type: "read", prompt: "kē（科）", hint: "读 k 时纸条会动吗？", options: ["会动（送气）", "不会动（不送气）"], answer: 0, explain: "k 是送气音。" },
      { type: "read", prompt: "jī（机）", hint: "读 j 时纸条会动吗？", options: ["会动（送气）", "不会动（不送气）"], answer: 1, explain: "j 是不送气音。" },
      { type: "read", prompt: "qī（七）", hint: "读 q 时纸条会动吗？", options: ["会动（送气）", "不会动（不送气）"], answer: 0, explain: "q 是送气音。" },
    ],
  },
  flatCurly: {
    title: "平翘舌分家",
    thai: "แยกเสียงลิ้น",
    desc: "判断音节是平舌音还是翘舌音。",
    thaiDesc: "แยกว่าเป็นเสียงลิ้นราบหรือม้วนลิ้น",
    pool: [
      { type: "read", prompt: "zǎo（早）", hint: "z 开头的音", options: ["平舌", "翘舌"], answer: 0, explain: "z 是平舌音，舌尖放平。" },
      { type: "read", prompt: "zhōng（中）", hint: "zh 开头的音", options: ["平舌", "翘舌"], answer: 1, explain: "zh 是翘舌音，舌尖翘起。" },
      { type: "read", prompt: "cài（菜）", hint: "c 开头的音", options: ["平舌", "翘舌"], answer: 0, explain: "c 是平舌音。" },
      { type: "read", prompt: "chī（吃）", hint: "ch 开头的音", options: ["平舌", "翘舌"], answer: 1, explain: "ch 是翘舌音。" },
      { type: "read", prompt: "sān（三）", hint: "s 开头的音", options: ["平舌", "翘舌"], answer: 0, explain: "s 是平舌音。" },
      { type: "read", prompt: "shí（十）", hint: "sh 开头的音", options: ["平舌", "翘舌"], answer: 1, explain: "sh 是翘舌音。" },
      { type: "read", prompt: "zì（字）", hint: "z 开头的音", options: ["平舌", "翘舌"], answer: 0, explain: "z 是平舌音。" },
      { type: "read", prompt: "rì（日）", hint: "r 开头的音", options: ["平舌", "翘舌"], answer: 1, explain: "r 是翘舌音。" },
    ],
  },
  fish: {
    title: "拼音钓鱼",
    thai: "ตกปลาพินอิน",
    desc: "看到完整音节，找出它的声母。",
    thaiDesc: "เห็นพยางค์เต็ม แล้วหาพยัญชนะต้น",
    pool: [
      { type: "read", prompt: "bā", hint: "这个音节的声母是？", options: ["b", "p", "m", "f"], answer: 0, explain: "bā 的声母是 b。" },
      { type: "read", prompt: "pá", hint: "这个音节的声母是？", options: ["b", "p", "m", "f"], answer: 1, explain: "pá 的声母是 p。" },
      { type: "read", prompt: "mā", hint: "这个音节的声母是？", options: ["b", "p", "m", "f"], answer: 2, explain: "mā 的声母是 m。" },
      { type: "read", prompt: "fā", hint: "这个音节的声母是？", options: ["b", "p", "m", "f"], answer: 3, explain: "fā 的声母是 f。" },
      { type: "read", prompt: "dā", hint: "这个音节的声母是？", options: ["d", "t", "n", "l"], answer: 0, explain: "dā 的声母是 d。" },
      { type: "read", prompt: "tā", hint: "这个音节的声母是？", options: ["d", "t", "n", "l"], answer: 1, explain: "tā 的声母是 t。" },
      { type: "read", prompt: "gē", hint: "这个音节的声母是？", options: ["g", "k", "h", "j"], answer: 0, explain: "gē 的声母是 g。" },
      { type: "read", prompt: "kē", hint: "这个音节的声母是？", options: ["g", "k", "h", "j"], answer: 1, explain: "kē 的声母是 k。" },
      { type: "read", prompt: "hē", hint: "这个音节的声母是？", options: ["g", "k", "h", "j"], answer: 2, explain: "hē 的声母是 h。" },
      { type: "read", prompt: "jī", hint: "这个音节的声母是？", options: ["j", "q", "x", "zh"], answer: 0, explain: "jī 的声母是 j。" },
    ],
  },
  measure: {
    title: "量词配对",
    thai: "จับคู่คำลักษณนาม",
    desc: "给名词选正确的量词。",
    thaiDesc: "เลือกคำลักษณนามที่ถูกให้กับคำนาม",
    pool: [
      { type: "read", prompt: "一 ___ 苹果", hint: "苹果怎么说？", options: ["个", "只", "条", "杯"], answer: 0, explain: "一个苹果。苹果用「个」。" },
      { type: "read", prompt: "一 ___ 猫", hint: "猫怎么说？", options: ["个", "只", "条", "本"], answer: 1, explain: "一只猫。小动物用「只」。" },
      { type: "read", prompt: "一 ___ 鱼", hint: "鱼怎么说？", options: ["个", "只", "条", "张"], answer: 2, explain: "一条鱼。长条形的东西用「条」。" },
      { type: "read", prompt: "一 ___ 水", hint: "水怎么说？", options: ["个", "杯", "条", "件"], answer: 1, explain: "一杯水。饮料和水用「杯」。" },
      { type: "read", prompt: "一 ___ 书", hint: "书怎么说？", options: ["个", "只", "条", "本"], answer: 3, explain: "一本书。书用「本」。" },
      { type: "read", prompt: "一 ___ 桌子", hint: "桌子怎么说？", options: ["个", "只", "张", "本"], answer: 2, explain: "一张桌子。桌子和纸用「张」。" },
      { type: "read", prompt: "一 ___ 米饭", hint: "米饭怎么说？", options: ["个", "只", "条", "碗"], answer: 3, explain: "一碗米饭。饭用「碗」。" },
      { type: "read", prompt: "一 ___ 衣服", hint: "衣服怎么说？", options: ["个", "件", "条", "张"], answer: 1, explain: "一件衣服。衣服用「件」。" },
    ],
  },
  order: {
    title: "语序拼图",
    thai: "ต่อประโยค",
    desc: "把词块按中文语序排成一句话。",
    thaiDesc: "เรียงคำศัพท์เป็นประโยคตามลำดับภาษาจีน",
    pool: [
      { type: "order", parts: ["我", "今天", "在家", "工作"], answers: [[0, 1, 2, 3], [1, 0, 2, 3]], explain: "我今天在家工作。时间也可以放在主语前：今天我在家工作。" },
      { type: "order", parts: ["我们", "明天", "一起", "吃饭"], answers: [[0, 1, 2, 3], [1, 0, 2, 3]], explain: "我们明天一起吃饭。也可以说：明天我们一起吃饭。" },
      { type: "order", parts: ["他", "在", "超市", "买东西"], answer: [0, 1, 2, 3], explain: "他在超市买东西。" },
      { type: "order", parts: ["我", "喜欢", "吃", "泰国菜"], answer: [0, 1, 2, 3], explain: "我喜欢吃泰国菜。" },
      { type: "order", parts: ["你", "星期六", "下午", "有空吗"], answers: [[0, 1, 2, 3], [1, 2, 0, 3]], explain: "你星期六下午有空吗？也可以说：星期六下午你有空吗？" },
      { type: "order", parts: ["她", "今天", "很", "开心"], answers: [[0, 1, 2, 3], [1, 0, 2, 3]], explain: "她今天很开心。也可以说：今天她很开心。" },
      { type: "order", parts: ["我", "想", "学", "中文"], answer: [0, 1, 2, 3], explain: "我想学中文。" },
      { type: "order", parts: ["这个", "多少钱", "请问"], answer: [2, 0, 1], explain: "请问这个多少钱？" },
    ],
  },
  wordMatch: {
    title: "词义连连看",
    thai: "จับคู่คำกับความหมาย",
    desc: "先选一个中文词，再选对应的泰语意思。配对成功后听中文。",
    thaiDesc: "เลือกคำภาษาจีนก่อน แล้วเลือกความหมายภาษาไทยที่ตรงกัน เมื่อจับคู่ถูกแล้วฟังเสียงจีน",
    type: "pair",
    pairs: [
      { left: "今天", right: "วันนี้", speak: "今天" },
      { left: "明天", right: "พรุ่งนี้", speak: "明天" },
      { left: "一起", right: "ด้วยกัน", speak: "一起" },
      { left: "喜欢", right: "ชอบ", speak: "喜欢" },
      { left: "吃饭", right: "กินข้าว", speak: "吃饭" },
      { left: "工作", right: "ทำงาน", speak: "工作" },
      { left: "休息", right: "พักผ่อน", speak: "休息" },
      { left: "多少钱", right: "ราคาเท่าไร", speak: "多少钱" },
    ],
  },
  lifeReply: {
    title: "生活怎么回应",
    thai: "ตอบอย่างไรในชีวิตจริง",
    desc: "选择能在真实情境里继续沟通的自然回应。",
    thaiDesc: "เลือกคำตอบที่เป็นธรรมชาติและช่วยให้สื่อสารต่อได้ในสถานการณ์จริง",
    pool: [
      { type: "read", prompt: "朋友问：周末一起吃饭吗？", hint: "เพื่อนถามว่า: สุดสัปดาห์ไปกินข้าวด้วยกันไหม", options: ["好啊，几点？", "我是一杯水", "左边很忙"], answer: 0, explain: "先接受邀请，再确认时间。รับคำชวนก่อน แล้วถามเวลา" },
      { type: "read", prompt: "店员问：还要别的吗？", hint: "พนักงานถามว่า: รับอย่างอื่นเพิ่มไหม", options: ["不用了，谢谢。", "我叫明天。", "天气多少钱？"], answer: 0, explain: "“不用了，谢谢”能礼貌结束点餐。เป็นการจบการสั่งอาหารอย่างสุภาพ" },
      { type: "read", prompt: "同事问：今天可以发给我吗？", hint: "เพื่อนร่วมงานถามว่า: วันนี้ส่งให้ฉันได้ไหม", options: ["还没做完，晚一点发你。", "不要辣。", "我三十九码。"], answer: 0, explain: "说明状态，再给出下一步。บอกสถานะ แล้วบอกขั้นตอนถัดไป" },
      { type: "read", prompt: "你没听清对方说的话。", hint: "คุณฟังอีกฝ่ายไม่ชัด", options: ["可以再说一遍吗？", "我扫码。", "今天很苹果。"], answer: 0, explain: "没听清时可以礼貌请求重复。เมื่อฟังไม่ชัด ขอให้อีกฝ่ายพูดซ้ำอย่างสุภาพ" },
      { type: "read", prompt: "朋友说：我今天有点难过。", hint: "เพื่อนบอกว่า: วันนี้ฉันเศร้านิดหน่อย", options: ["怎么了？我在听。", "一共三十元。", "地铁站左边。"], answer: 0, explain: "先回应感受，再邀请对方继续说。ตอบรับความรู้สึกก่อน แล้วชวนให้อีกฝ่ายเล่าต่อ" },
      { type: "read", prompt: "你想把约会改到下午。", hint: "คุณอยากเปลี่ยนนัดเป็นช่วงบ่าย", options: ["上午我有事，下午可以吗？", "我要两个苹果。", "我来自天气。"], answer: 0, explain: "先说原因，再提出新的时间。บอกเหตุก่อน แล้วเสนอเวลาใหม่" },
    ],
  },
};

// 游戏卡索引 → 可玩游戏 id（0/2/3/5 是 v3 的 4 个，12/13 是 v6 新增的量词与语序）
window.playableGames = { 0: "toneLift", 2: "breath", 3: "fish", 5: "flatCurly", 12: "measure", 13: "order", 14: "wordMatch", 15: "lifeReply" };
