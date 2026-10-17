// 正式一级课程第一单元。它与 44 课 A0 基础分层保存，避免把“接触过”误写成“已达标”。
const l1Line = (zh, pinyin, thai) => ({ zh, pinyin, thai });
const l1Word = (zh, pinyin, thai) => ({ zh, hanzi: zh, pinyin, thai });

window.levelOneCourse = {
  title: "正式一级课程",
  thai: "หลักสูตรระดับ 1 อย่างเป็นระบบ",
  unitTitle: "单元一：个人信息与日常生活",
  thaiUnitTitle: "หน่วยที่ 1: ข้อมูลส่วนตัวและชีวิตประจำวัน",
  statusNote: "目前开放首单元 4 课。这是一级课程的起点，不代表已经覆盖完整一级。",
  thaiStatusNote: "ขณะนี้เปิด 4 บทแรก เป็นจุดเริ่มต้นของระดับ 1 ยังไม่ใช่การครอบคลุมระดับ 1 ทั้งหมด",
  targets: { syllables: 269, characters: 300, words: 500, grammar: 48 },
  lessons: [
    {
      id: "l1-u1-1", title: "你好，我叫 Piu", thaiTitle: "สวัสดี ฉันชื่อ Piu",
      goal: "完成初次见面的问候、姓名和国籍介绍。", thaiGoal: "ทักทาย บอกชื่อ และบอกสัญชาติเมื่อพบกันครั้งแรก",
      review: [],
      words: [
        l1Word("你好", "nǐ hǎo", "สวัสดี"), l1Word("我", "wǒ", "ฉัน"), l1Word("你", "nǐ", "คุณ"),
        l1Word("叫", "jiào", "ชื่อว่า / เรียกว่า"), l1Word("名字", "míngzi", "ชื่อ"), l1Word("是", "shì", "เป็น / คือ"),
        l1Word("泰国人", "Tàiguó rén", "คนไทย"), l1Word("中国人", "Zhōngguó rén", "คนจีน"),
        l1Word("很高兴", "hěn gāoxìng", "ยินดีมาก"), l1Word("认识", "rènshi", "รู้จัก")
      ],
      grammar: [
        { name: "叫：说明姓名", thai: "叫: ใช้บอกชื่อ", formula: "人 + 叫 + 名字", note: "“我叫 Piu”比“我是 Piu”更直接地回答姓名。", thaiNote: "“我叫 Piu” ตอบชื่อโดยตรงกว่า “我是 Piu”" },
        { name: "是：说明身份", thai: "是: ใช้บอกอัตลักษณ์", formula: "人 + 是 + 身份", note: "说国籍时用“我是泰国人”。", thaiNote: "เวลาบอกสัญชาติใช้ “我是泰国人”" }
      ],
      examples: [
        l1Line("你好，我叫 Piu。", "nǐ hǎo, wǒ jiào Piu", "สวัสดี ฉันชื่อ Piu"),
        l1Line("你叫什么名字？", "nǐ jiào shénme míngzi", "คุณชื่ออะไร"),
        l1Line("我叫小雨。", "wǒ jiào Xiǎoyǔ", "ฉันชื่อเสี่ยวอวี่"),
        l1Line("我是泰国人。", "wǒ shì Tàiguó rén", "ฉันเป็นคนไทย"),
        l1Line("他是中国人。", "tā shì Zhōngguó rén", "เขาเป็นคนจีน"),
        l1Line("你是泰国人吗？", "nǐ shì Tàiguó rén ma", "คุณเป็นคนไทยไหม"),
        l1Line("不是，我是中国人。", "bú shì, wǒ shì Zhōngguó rén", "ไม่ใช่ ฉันเป็นคนจีน"),
        l1Line("很高兴认识你。", "hěn gāoxìng rènshi nǐ", "ยินดีที่ได้รู้จักคุณ")
      ],
      dialogues: [
        { title: "第一次见面", thaiTitle: "พบกันครั้งแรก", lines: [l1Line("你好，我叫 Piu。你叫什么名字？", "nǐ hǎo, wǒ jiào Piu. nǐ jiào shénme míngzi", "สวัสดี ฉันชื่อ Piu คุณชื่ออะไร"), l1Line("我叫小雨。很高兴认识你。", "wǒ jiào Xiǎoyǔ. hěn gāoxìng rènshi nǐ", "ฉันชื่อเสี่ยวอวี่ ยินดีที่ได้รู้จัก"), l1Line("我也很高兴认识你。", "wǒ yě hěn gāoxìng rènshi nǐ", "ฉันก็ยินดีที่ได้รู้จักคุณ") ] },
        { title: "来自哪里", thaiTitle: "มาจากที่ไหน", lines: [l1Line("你是中国人吗？", "nǐ shì Zhōngguó rén ma", "คุณเป็นคนจีนไหม"), l1Line("不是，我是泰国人。你呢？", "bú shì, wǒ shì Tàiguó rén. nǐ ne", "ไม่ใช่ ฉันเป็นคนไทย แล้วคุณล่ะ"), l1Line("我是中国人。", "wǒ shì Zhōngguó rén", "ฉันเป็นคนจีน") ] }
      ],
      listening: l1Line("你好，我叫 Piu。我是泰国人，很高兴认识你。", "nǐ hǎo, wǒ jiào Piu. wǒ shì Tàiguó rén, hěn gāoxìng rènshi nǐ", "สวัสดี ฉันชื่อ Piu ฉันเป็นคนไทย ยินดีที่ได้รู้จักคุณ"),
      listeningQuestion: "她叫什么名字？她是哪国人？", thaiListeningQuestion: "เธอชื่ออะไร และเป็นคนประเทศไหน",
      reading: l1Line("你好！我叫 Piu，是泰国人。我学习中文。我的朋友叫小雨，她是中国人。我们第一次见面，我说：“很高兴认识你。”", "nǐ hǎo! wǒ jiào Piu, shì Tàiguó rén. wǒ xuéxí Zhōngwén. wǒ de péngyou jiào Xiǎoyǔ, tā shì Zhōngguó rén. wǒmen dì yí cì jiànmiàn, wǒ shuō: hěn gāoxìng rènshi nǐ", "สวัสดี ฉันชื่อ Piu เป็นคนไทย ฉันเรียนภาษาจีน เพื่อนของฉันชื่อเสี่ยวอวี่ เธอเป็นคนจีน เมื่อเราพบกันครั้งแรก ฉันพูดว่า ยินดีที่ได้รู้จัก"),
      game: { prompt: "你第一次见到新朋友，先说什么？", thaiPrompt: "เมื่อพบเพื่อนใหม่ครั้งแรก ควรพูดอะไรก่อน", options: ["你好，我叫 Piu。", "我不要。", "今天很贵。"], answer: 0 },
      task: "不看完整台词，和 Hua 完成两轮 30 秒自我介绍。第二轮交换国籍。", thaiTask: "ไม่ดูบทเต็ม แนะนำตัวกับ Hua 2 รอบ รอบละ 30 วินาที รอบสองเปลี่ยนสัญชาติ",
      teacherScript: [
        ["先用真实姓名示范，不先解释语法名词。", "เริ่มสาธิตด้วยชื่อจริง โดยยังไม่ต้องอธิบายศัพท์ไวยากรณ์"],
        ["让 Piu 替换名字和国籍，各说两次。", "ให้ Piu เปลี่ยนชื่อและสัญชาติ แล้วพูดอย่างละ 2 ครั้ง"],
        ["最后遮住拼音，只保留“你好、叫、是”。", "สุดท้ายปิดพินอิน เหลือเพียง “你好、叫、是”"]
      ]
    },
    {
      id: "l1-u1-2", title: "这是我的家人", thaiTitle: "นี่คือครอบครัวของฉัน",
      goal: "介绍家人、人物关系和简单数量。", thaiGoal: "แนะนำสมาชิกครอบครัว ความสัมพันธ์ และจำนวนอย่างง่าย",
      review: ["我", "你", "叫", "是", "认识"],
      words: [
        l1Word("这", "zhè", "นี่"), l1Word("的", "de", "ของ"), l1Word("家", "jiā", "บ้าน / ครอบครัว"),
        l1Word("家人", "jiārén", "สมาชิกครอบครัว"), l1Word("爸爸", "bàba", "พ่อ"), l1Word("妈妈", "māma", "แม่"),
        l1Word("哥哥", "gēge", "พี่ชาย"), l1Word("妹妹", "mèimei", "น้องสาว"), l1Word("有", "yǒu", "มี"), l1Word("个", "ge", "ลักษณนามทั่วไป")
      ],
      grammar: [
        { name: "的：表示所属", thai: "的: แสดงความเป็นเจ้าของ", formula: "人 + 的 + 人/东西", note: "“我的妈妈”里的“的”连接拥有者和关系。", thaiNote: "“的” ใน “我的妈妈” เชื่อมเจ้าของกับความสัมพันธ์" },
        { name: "有：说明存在或拥有", thai: "有: บอกว่ามีหรือครอบครอง", formula: "人/地方 + 有 + 数量 + 名词", note: "有的否定是“没有”，不是“不有”。", thaiNote: "รูปปฏิเสธของ 有 คือ “没有” ไม่ใช่ “不有”" }
      ],
      examples: [
        l1Line("这是我的妈妈。", "zhè shì wǒ de māma", "นี่คือแม่ของฉัน"),
        l1Line("他是我的哥哥。", "tā shì wǒ de gēge", "เขาคือพี่ชายของฉัน"),
        l1Line("她是你的妹妹吗？", "tā shì nǐ de mèimei ma", "เธอคือน้องสาวของคุณไหม"),
        l1Line("我家有三个人。", "wǒ jiā yǒu sān ge rén", "ครอบครัวฉันมีสามคน"),
        l1Line("我有一个哥哥。", "wǒ yǒu yí ge gēge", "ฉันมีพี่ชายหนึ่งคน"),
        l1Line("我没有妹妹。", "wǒ méiyǒu mèimei", "ฉันไม่มีน้องสาว"),
        l1Line("你家有几个人？", "nǐ jiā yǒu jǐ ge rén", "ครอบครัวคุณมีกี่คน"),
        l1Line("这是我的家人，我们住在一起。", "zhè shì wǒ de jiārén, wǒmen zhù zài yìqǐ", "นี่คือครอบครัวของฉัน พวกเราอยู่ด้วยกัน")
      ],
      dialogues: [
        { title: "看照片", thaiTitle: "ดูรูปถ่าย", lines: [l1Line("这是谁？", "zhè shì shéi", "นี่คือใคร"), l1Line("这是我的妈妈。", "zhè shì wǒ de māma", "นี่คือแม่ของฉัน"), l1Line("她叫什么名字？", "tā jiào shénme míngzi", "เธอชื่ออะไร"), l1Line("她叫 Mali。", "tā jiào Mali", "เธอชื่อ Mali") ] },
        { title: "家里有几个人", thaiTitle: "ที่บ้านมีกี่คน", lines: [l1Line("你家有几个人？", "nǐ jiā yǒu jǐ ge rén", "ครอบครัวคุณมีกี่คน"), l1Line("我家有四个人。", "wǒ jiā yǒu sì ge rén", "ครอบครัวฉันมีสี่คน"), l1Line("你有哥哥吗？", "nǐ yǒu gēge ma", "คุณมีพี่ชายไหม"), l1Line("没有，我有一个妹妹。", "méiyǒu, wǒ yǒu yí ge mèimei", "ไม่มี ฉันมีน้องสาวหนึ่งคน") ] }
      ],
      listening: l1Line("我家有四个人：爸爸、妈妈、哥哥和我。我没有妹妹。", "wǒ jiā yǒu sì ge rén: bàba, māma, gēge hé wǒ. wǒ méiyǒu mèimei", "ครอบครัวฉันมีสี่คน พ่อ แม่ พี่ชาย และฉัน ฉันไม่มีน้องสาว"),
      listeningQuestion: "她家有几个人？她有妹妹吗？", thaiListeningQuestion: "ครอบครัวเธอมีกี่คน และเธอมีน้องสาวไหม",
      reading: l1Line("这是我的家。家里有爸爸、妈妈、妹妹和我。爸爸是老师，妈妈在家工作。妹妹今年十岁。晚上我们一起吃饭，也一起聊天。", "zhè shì wǒ de jiā. jiā lǐ yǒu bàba, māma, mèimei hé wǒ. bàba shì lǎoshī, māma zài jiā gōngzuò. mèimei jīnnián shí suì. wǎnshang wǒmen yìqǐ chīfàn, yě yìqǐ liáotiān", "นี่คือครอบครัวของฉัน มีพ่อ แม่ น้องสาว และฉัน พ่อเป็นครู แม่ทำงานที่บ้าน น้องสาวปีนี้อายุสิบขวบ ตอนเย็นเรากินข้าวและคุยกัน"),
      game: { prompt: "“我有妈妈”要变成否定句，哪一句对？", thaiPrompt: "ถ้าจะเปลี่ยน “我有妈妈” เป็นประโยคปฏิเสธ ข้อใดถูก", options: ["我不有妈妈。", "我没有妈妈。", "我不是妈妈。"], answer: 1 },
      task: "选三张真实照片，介绍人物、关系，并说家里有几个人。", thaiTask: "เลือกรูปจริง 3 รูป แนะนำคน ความสัมพันธ์ และบอกว่าที่บ้านมีกี่คน",
      teacherScript: [["先看照片问“这是谁”，让关系词有真实对象。", "เริ่มจากดูรูปแล้วถาม “这是谁” ให้คำเรียกความสัมพันธ์มีคนจริง"], ["用积木表示“人 + 的 + 关系”，移动一块只换一个词。", "ใช้บล็อกแทน “คน + 的 + ความสัมพันธ์” เปลี่ยนครั้งละหนึ่งคำ"], ["只纠正“没有”，不要同时纠正所有量词。", "แก้คำว่า “没有” เป็นหลัก ไม่ต้องแก้ลักษณนามทุกคำพร้อมกัน"]]
    },
    {
      id: "l1-u1-3", title: "我每天七点起床", thaiTitle: "ฉันตื่นเจ็ดโมงทุกวัน",
      goal: "用时间顺序描述一天的基本作息。", thaiGoal: "เล่ากิจวัตรหนึ่งวันตามลำดับเวลา",
      review: ["我", "家", "有", "个", "的"],
      words: [
        l1Word("每天", "měitiān", "ทุกวัน"), l1Word("早上", "zǎoshang", "ตอนเช้า"), l1Word("晚上", "wǎnshang", "ตอนเย็น / กลางคืน"),
        l1Word("点", "diǎn", "โมง"), l1Word("起床", "qǐchuáng", "ตื่นนอน"), l1Word("吃早饭", "chī zǎofàn", "กินอาหารเช้า"),
        l1Word("上班", "shàngbān", "ไปทำงาน"), l1Word("下班", "xiàbān", "เลิกงาน"), l1Word("回家", "huí jiā", "กลับบ้าน"), l1Word("睡觉", "shuìjiào", "นอน")
      ],
      grammar: [
        { name: "时间放在动作前", thai: "เวลาวางหน้าการกระทำ", formula: "人 + 时间 + 动作", note: "“我七点起床”，不要按英语把时间放到句尾。", thaiNote: "ใช้ “我七点起床” โดยวางเวลาไว้หน้าการกระทำ" },
        { name: "先……再……", thai: "ก่อน...แล้วจึง...", formula: "先 + 动作一，再 + 动作二", note: "用两个连接词把动作顺序说清楚。", thaiNote: "ใช้คำเชื่อมสองคำเพื่อบอกลำดับการกระทำให้ชัด" }
      ],
      examples: [
        l1Line("我每天七点起床。", "wǒ měitiān qī diǎn qǐchuáng", "ฉันตื่นเจ็ดโมงทุกวัน"),
        l1Line("我早上八点吃早饭。", "wǒ zǎoshang bā diǎn chī zǎofàn", "ฉันกินอาหารเช้าแปดโมง"),
        l1Line("她九点上班。", "tā jiǔ diǎn shàngbān", "เธอเข้างานเก้าโมง"),
        l1Line("你几点下班？", "nǐ jǐ diǎn xiàbān", "คุณเลิกงานกี่โมง"),
        l1Line("我六点下班。", "wǒ liù diǎn xiàbān", "ฉันเลิกงานหกโมง"),
        l1Line("下班以后，我回家。", "xiàbān yǐhòu, wǒ huí jiā", "หลังเลิกงาน ฉันกลับบ้าน"),
        l1Line("我先吃饭，再学习中文。", "wǒ xiān chīfàn, zài xuéxí Zhōngwén", "ฉันกินข้าวก่อน แล้วจึงเรียนภาษาจีน"),
        l1Line("晚上十一点，我睡觉。", "wǎnshang shíyī diǎn, wǒ shuìjiào", "ตอนห้าทุ่ม ฉันนอน")
      ],
      dialogues: [
        { title: "问作息", thaiTitle: "ถามกิจวัตร", lines: [l1Line("你每天几点起床？", "nǐ měitiān jǐ diǎn qǐchuáng", "คุณตื่นกี่โมงทุกวัน"), l1Line("我七点起床。你呢？", "wǒ qī diǎn qǐchuáng. nǐ ne", "ฉันตื่นเจ็ดโมง แล้วคุณล่ะ"), l1Line("我六点半起床。", "wǒ liù diǎn bàn qǐchuáng", "ฉันตื่นหกโมงครึ่ง") ] },
        { title: "下班以后", thaiTitle: "หลังเลิกงาน", lines: [l1Line("你几点下班？", "nǐ jǐ diǎn xiàbān", "คุณเลิกงานกี่โมง"), l1Line("我六点下班。", "wǒ liù diǎn xiàbān", "ฉันเลิกงานหกโมง"), l1Line("下班以后你做什么？", "xiàbān yǐhòu nǐ zuò shénme", "หลังเลิกงานคุณทำอะไร"), l1Line("我先回家，再吃饭。", "wǒ xiān huí jiā, zài chīfàn", "ฉันกลับบ้านก่อน แล้วจึงกินข้าว") ] }
      ],
      listening: l1Line("Piu 每天七点起床，九点上班。下午六点下班，晚上十一点睡觉。", "Piu měitiān qī diǎn qǐchuáng, jiǔ diǎn shàngbān. xiàwǔ liù diǎn xiàbān, wǎnshang shíyī diǎn shuìjiào", "Piu ตื่นเจ็ดโมงทุกวัน เข้างานเก้าโมง เลิกงานหกโมงเย็น และนอนห้าทุ่ม"),
      listeningQuestion: "Piu 几点上班？几点睡觉？", thaiListeningQuestion: "Piu เข้างานกี่โมง และนอนกี่โมง",
      reading: l1Line("我每天七点起床，七点半吃早饭。八点我出门，九点上班。下午六点下班以后，我先回家，再吃饭。晚上我学习三十分钟中文，十一点睡觉。", "wǒ měitiān qī diǎn qǐchuáng, qī diǎn bàn chī zǎofàn. bā diǎn wǒ chūmén, jiǔ diǎn shàngbān. xiàwǔ liù diǎn xiàbān yǐhòu, wǒ xiān huí jiā, zài chīfàn. wǎnshang wǒ xuéxí sānshí fēnzhōng Zhōngwén, shíyī diǎn shuìjiào", "ฉันตื่นเจ็ดโมง กินอาหารเช้าเจ็ดโมงครึ่ง ออกจากบ้านแปดโมง และเข้างานเก้าโมง หลังเลิกงานหกโมง ฉันกลับบ้านก่อนแล้วกินข้าว ตอนเย็นเรียนภาษาจีนสามสิบนาที และนอนห้าทุ่ม"),
      game: { prompt: "哪一句的中文时间顺序正确？", thaiPrompt: "ประโยคใดเรียงตำแหน่งเวลาแบบภาษาจีนถูกต้อง", options: ["我起床七点。", "我七点起床。", "七点起床吗我。"], answer: 1 },
      task: "画四格时间线，不看范文说出起床、上班、下班和睡觉时间。", thaiTask: "วาดเส้นเวลา 4 ช่อง แล้วบอกเวลาตื่น เข้างาน เลิกงาน และนอนโดยไม่ดูตัวอย่าง",
      teacherScript: [["先摆时间卡和动作卡，让 Piu 自己发现时间在前。", "วางการ์ดเวลาและการกระทำ ให้ Piu สังเกตเองว่าเวลามาก่อน"], ["每说一句就把卡放上时间线，不背整段。", "พูดทีละประโยคแล้ววางการ์ดบนเส้นเวลา ไม่ต้องท่องทั้งย่อหน้า"], ["第二轮加入“先、再”，只连接两个动作。", "รอบสองเพิ่ม “先、再” เชื่อมเพียงสองการกระทำ"]]
    },
    {
      id: "l1-u1-4", title: "今天你忙吗？", thaiTitle: "วันนี้คุณยุ่งไหม",
      goal: "询问状态，用程度词回答，并自然追问。", thaiGoal: "ถามสภาพ ตอบด้วยคำบอกระดับ และถามกลับอย่างเป็นธรรมชาติ",
      review: ["每天", "早上", "晚上", "上班", "回家", "我", "你"],
      words: [
        l1Word("今天", "jīntiān", "วันนี้"), l1Word("忙", "máng", "ยุ่ง"), l1Word("累", "lèi", "เหนื่อย"),
        l1Word("开心", "kāixīn", "มีความสุข"), l1Word("有点儿", "yǒudiǎnr", "นิดหน่อย"), l1Word("很", "hěn", "มาก / คำเชื่อมคุณศัพท์"),
        l1Word("太", "tài", "เกินไป / มาก"), l1Word("吗", "ma", "ไหม"), l1Word("呢", "ne", "แล้ว...ล่ะ"), l1Word("因为", "yīnwèi", "เพราะว่า")
      ],
      grammar: [
        { name: "吗：把陈述变成问句", thai: "吗: เปลี่ยนประโยคบอกเล่าเป็นคำถาม", formula: "陈述句 + 吗？", note: "语序不变，只在句尾加“吗”。", thaiNote: "ลำดับคำไม่เปลี่ยน เพียงเติม “吗” ท้ายประโยค" },
        { name: "很、太、有点儿：表示程度", thai: "很、太、有点儿: บอกระดับ", formula: "人/事物 + 程度词 + 形容词", note: "“有点儿”常用于不太理想的感受，如累、忙。", thaiNote: "“有点儿” มักใช้กับความรู้สึกที่ไม่ค่อยดี เช่น เหนื่อยหรือยุ่ง" }
      ],
      examples: [
        l1Line("你今天忙吗？", "nǐ jīntiān máng ma", "วันนี้คุณยุ่งไหม"),
        l1Line("我今天很忙。", "wǒ jīntiān hěn máng", "วันนี้ฉันยุ่งมาก"),
        l1Line("我有点儿累。", "wǒ yǒudiǎnr lèi", "ฉันเหนื่อยนิดหน่อย"),
        l1Line("今天太忙了。", "jīntiān tài máng le", "วันนี้ยุ่งเกินไปแล้ว"),
        l1Line("我很好，你呢？", "wǒ hěn hǎo, nǐ ne", "ฉันสบายดี แล้วคุณล่ะ"),
        l1Line("她今天不忙。", "tā jīntiān bù máng", "วันนี้เธอไม่ยุ่ง"),
        l1Line("你为什么开心？", "nǐ wèishénme kāixīn", "ทำไมคุณมีความสุข"),
        l1Line("因为我下班了。", "yīnwèi wǒ xiàbān le", "เพราะฉันเลิกงานแล้ว")
      ],
      dialogues: [
        { title: "问今天的状态", thaiTitle: "ถามสภาพวันนี้", lines: [l1Line("你今天忙吗？", "nǐ jīntiān máng ma", "วันนี้คุณยุ่งไหม"), l1Line("有点儿忙，也有点儿累。你呢？", "yǒudiǎnr máng, yě yǒudiǎnr lèi. nǐ ne", "ยุ่งนิดหน่อย และเหนื่อยนิดหน่อย แล้วคุณล่ะ"), l1Line("我今天不忙。", "wǒ jīntiān bù máng", "วันนี้ฉันไม่ยุ่ง") ] },
        { title: "说原因", thaiTitle: "บอกเหตุผล", lines: [l1Line("你今天开心吗？", "nǐ jīntiān kāixīn ma", "วันนี้คุณมีความสุขไหม"), l1Line("很开心。", "hěn kāixīn", "มีความสุขมาก"), l1Line("为什么？", "wèishénme", "ทำไม"), l1Line("因为我可以早点回家。", "yīnwèi wǒ kěyǐ zǎodiǎn huí jiā", "เพราะฉันกลับบ้านเร็วได้") ] }
      ],
      listening: l1Line("我今天有点儿忙，也有点儿累。但是我很开心，因为晚上可以和家人一起吃饭。", "wǒ jīntiān yǒudiǎnr máng, yě yǒudiǎnr lèi. dànshì wǒ hěn kāixīn, yīnwèi wǎnshang kěyǐ hé jiārén yìqǐ chīfàn", "วันนี้ฉันยุ่งนิดหน่อยและเหนื่อยนิดหน่อย แต่มีความสุขมาก เพราะตอนเย็นได้กินข้าวกับครอบครัว"),
      listeningQuestion: "她累吗？她为什么开心？", thaiListeningQuestion: "เธอเหนื่อยไหม และทำไมจึงมีความสุข",
      reading: l1Line("今天星期五，我早上有点儿忙，下午也很累。六点下班以后，我和家人一起吃饭。妈妈问：“你今天开心吗？”我说：“很开心，因为明天不用上班。”", "jīntiān xīngqīwǔ, wǒ zǎoshang yǒudiǎnr máng, xiàwǔ yě hěn lèi. liù diǎn xiàbān yǐhòu, wǒ hé jiārén yìqǐ chīfàn. māma wèn: nǐ jīntiān kāixīn ma? wǒ shuō: hěn kāixīn, yīnwèi míngtiān bú yòng shàngbān", "วันนี้วันศุกร์ ตอนเช้าฉันยุ่งนิดหน่อย ช่วงบ่ายก็เหนื่อย หลังเลิกงานหกโมง ฉันกินข้าวกับครอบครัว แม่ถามว่าวันนี้มีความสุขไหม ฉันตอบว่ามีความสุขมาก เพราะพรุ่งนี้ไม่ต้องทำงาน"),
      game: { prompt: "Hua 问：“你今天累吗？”哪一个回答最自然？", thaiPrompt: "Hua ถามว่า “วันนี้เหนื่อยไหม” คำตอบใดเป็นธรรมชาติที่สุด", options: ["我是泰国人。", "有点儿累，你呢？", "七点起床吗。"], answer: 1 },
      task: "和 Hua 做一分钟状态对话：问候、询问、程度、原因、追问五步都要出现。", thaiTask: "สนทนาเรื่องสภาพกับ Hua 1 นาที ให้มี 5 ขั้น: ทักทาย ถาม ระดับ เหตุผล และถามกลับ",
      teacherScript: [["用表情卡先选真实感受，再教中文，不要求假装开心。", "เลือกความรู้สึกจริงจากการ์ดอารมณ์ก่อน แล้วจึงเรียนภาษาจีน"], ["Hua 连续问三次，Piu 每次换一个程度词。", "Hua ถาม 3 ครั้ง และ Piu เปลี่ยนคำบอกระดับทุกครั้ง"], ["最后只保留“吗、呢、因为”三个提示词完成对话。", "สุดท้ายเหลือเพียงคำใบ้ “吗、呢、因为” แล้วสนทนาให้จบ"]]
    }
  ]
};

window.getLevelOneInventory = function getLevelOneInventory() {
  const lessons = window.levelOneCourse.lessons;
  const wordMap = new Map();
  const grammarMap = new Map();
  const characterSet = new Set();
  const syllableSet = new Set();
  lessons.forEach((lesson, lessonIndex) => {
    lesson.words.forEach((word) => {
      if (!wordMap.has(word.zh)) wordMap.set(word.zh, { ...word, firstLesson: lessonIndex + 1, reviews: 0 });
      for (const char of word.zh.match(/[\u3400-\u9fff]/g) || []) characterSet.add(char);
      word.pinyin.toLowerCase().split(/\s+/).filter(Boolean).forEach((part) => syllableSet.add(part.replace(/[^a-züǖǘǚǜāáǎàēéěèīíǐìōóǒòūúǔùńňǹ]+/g, "")));
    });
    lesson.review.forEach((word) => { if (wordMap.has(word)) wordMap.get(word).reviews += 1; });
    lesson.grammar.forEach((item) => grammarMap.set(item.name, { ...item, firstLesson: lessonIndex + 1 }));
  });
  return { syllables: syllableSet.size, characters: characterSet.size, words: wordMap.size, grammar: grammarMap.size, wordItems: [...wordMap.values()], grammarItems: [...grammarMap.values()] };
};
