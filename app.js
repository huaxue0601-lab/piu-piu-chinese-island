const lessons = [
  {
    id: 1,
    title: "四声与单韵母",
    thaiTitle: "วรรณยุกต์และสระเดี่ยว",
    focus: "四声、轻声 · a o e i u ü",
    thaiFocus: "วรรณยุกต์ 4 เสียง เสียงเบา และสระเดี่ยว",
    outcome: "能听辨四声，用手势表现声调方向，并读出六个单韵母。",
    thaiOutcome: "ฟังแยกวรรณยุกต์ ใช้ท่ามือบอกทิศทางเสียง และอ่านสระเดี่ยว 6 ตัว",
    words: "ā á ǎ à · a o e i u ü",
    audio: [{ label: "mā", speak: "妈" }, { label: "má", speak: "麻" }, { label: "mǎ", speak: "马" }, { label: "mà", speak: "骂" }],
    challenge: "听到四个不同声调后做出正确手势，再随机读出六个单韵母。",
  },
  {
    id: 2,
    title: "双唇音与舌尖音",
    thaiTitle: "เสียงริมฝีปากและปลายลิ้น",
    focus: "b p m f · d t n l",
    thaiFocus: "ฝึกเสียงริมฝีปากและปลายลิ้น",
    outcome: "能用纸条判断送气与否，并拼读 b/p/m/f、d/t/n/l 音节。",
    thaiOutcome: "ใช้กระดาษแยกเสียงพ่นลม และสะกดพยางค์ b/p/m/f, d/t/n/l",
    words: "bā pā mā fā · dā tā nā lā",
    audio: [{ label: "bā", speak: "八" }, { label: "pá", speak: "爬" }, { label: "mā", speak: "妈" }, { label: "fā", speak: "发" }],
    challenge: "用纸条完成 b/p、d/t 两组判断，再拼读四个随机音节。",
  },
  {
    id: 3,
    title: "舌根音与舌面音",
    thaiTitle: "เสียงโคนลิ้นและกลางลิ้น",
    focus: "g k h · j q x · ü 的规则",
    thaiFocus: "เสียงโคนลิ้น เสียงกลางลิ้น และกฎของ ü",
    outcome: "能区分 g/k、j/q，并掌握 j/q/x 与 ü 相拼时省略两点的规则。",
    thaiOutcome: "แยก g/k, j/q และเข้าใจกฎตัดจุดของ ü หลัง j/q/x",
    words: "gē kē hē · jī qī xī · jü → ju",
    audio: [{ label: "gē", speak: "哥" }, { label: "kē", speak: "科" }, { label: "hē", speak: "喝" }, { label: "qù", speak: "去" }],
    challenge: "听辨 g/k 与 j/q，并正确解释为什么 qù 的 ü 不写两点。",
  },
  {
    id: 4,
    title: "平舌音与翘舌音",
    thaiTitle: "เสียงลิ้นราบและม้วนลิ้น",
    focus: "z c s · zh ch sh r",
    thaiFocus: "เสียงลิ้นราบและเสียงม้วนลิ้น",
    outcome: "能借助舌位提示区分 z/c/s 与 zh/ch/sh/r。",
    thaiOutcome: "ใช้ตำแหน่งลิ้นแยก z/c/s กับ zh/ch/sh/r",
    words: "zā cā sā · zhā chā shā rā",
    audio: [{ label: "zǎo", speak: "早" }, { label: "cài", speak: "菜" }, { label: "chī", speak: "吃" }, { label: "shì", speak: "是" }],
    challenge: "把听到的八个音节分进平舌音和翘舌音两组。",
  },
  {
    id: 5,
    title: "复韵母",
    thaiTitle: "สระประสม",
    focus: "ai ei ui · ao ou iu · ie üe er · y w",
    thaiFocus: "สระประสมและการใช้ y / w",
    outcome: "能看出复韵母的口型移动，并正确拼读常用复韵母。",
    thaiOutcome: "เห็นการขยับรูปปากและสะกดสระประสมที่ใช้บ่อย",
    words: "ai ei ui · ao ou iu · ie üe er · y w",
    audio: [{ label: "ài", speak: "爱" }, { label: "hǎo", speak: "好" }, { label: "yǒu", speak: "有" }, { label: "yuè", speak: "月" }],
    challenge: "听四个音节，指出口型移动方向，再独立拼读四个新音节。",
  },
  {
    id: 6,
    title: "前鼻韵母",
    thaiTitle: "สระนาสิกหน้า",
    focus: "an en in un ün",
    thaiFocus: "สระนาสิกหน้า",
    outcome: "能感受舌尖收尾，并拼读 an/en/in/un/ün。",
    thaiOutcome: "สัมผัสการปิดท้ายด้วยปลายลิ้น และสะกด an/en/in/un/ün",
    words: "an en in un ün",
    audio: [{ label: "fàn", speak: "饭" }, { label: "rén", speak: "人" }, { label: "nín", speak: "您" }, { label: "wèn", speak: "问" }],
    challenge: "听八个音节，找出前鼻音，并说出舌尖最后停在哪里。",
  },
  {
    id: 7,
    title: "后鼻韵母",
    thaiTitle: "สระนาสิกหลัง",
    focus: "ang eng ing ong",
    thaiFocus: "สระนาสิกหลัง และการเทียบเสียงหน้า-หลัง",
    outcome: "能感受舌根收尾，并初步区分 in/ing、en/eng。",
    thaiOutcome: "สัมผัสการปิดท้ายด้วยโคนลิ้น และเริ่มแยก in/ing, en/eng",
    words: "ang eng ing ong",
    audio: [{ label: "máng", speak: "忙" }, { label: "lěng", speak: "冷" }, { label: "tīng", speak: "听" }, { label: "zhōng", speak: "中" }],
    challenge: "听辨 in/ing、en/eng，并让语音输入识别四个后鼻音词。",
  },
  {
    id: 8,
    title: "拼读与标调",
    thaiTitle: "การสะกดและใส่วรรณยุกต์",
    focus: "拼读、标调、输入与综合运用",
    thaiFocus: "ทบทวนการสะกด ใส่วรรณยุกต์ และพิมพ์",
    outcome: "能独立拼读常见音节、判断标调位置，并用拼音输入法查词。",
    thaiOutcome: "สะกดพยางค์ เลือกตำแหน่งวรรณยุกต์ และค้นคำด้วยพินอินได้",
    words: "声母 + 韵母 + 声调 · 标调口诀 · 输入法",
    audio: [{ label: "nǐ", speak: "你" }, { label: "hǎo", speak: "好" }, { label: "xǐ", speak: "喜" }, { label: "huan", speak: "欢" }],
    challenge: "完成听辨、拼读、标调、输入四站拼音毕业挑战。",
  },
];

const learningStages = [
  {
    id: 1, number: "01", title: "拼音与发音", thai: "พินอินและการออกเสียง", scope: "8课 · 当前阶段",
    desc: "先把声调、声母、韵母和拼读规则学完整。只考声音，不考写字。",
    result: "看到拼音能读，听到音节能辨，能用拼音输入和查词。",
  },
  {
    id: 2, number: "02", title: "笔画与认字", thai: "เส้นขีดและการจำตัวอักษร", scope: "8课",
    desc: "再学笔画、笔顺、结构和部件，建立第一批核心汉字。",
    result: "认识约 60 个高频字，能按规则写简单独体字。",
    units: ["基本笔画", "笔顺规则", "独体字", "左右结构", "上下结构", "包围结构", "常见偏旁", "60字闯关"],
  },
  {
    id: 3, number: "03", title: "词语与句子", thai: "คำศัพท์และประโยค", scope: "8课",
    desc: "认字之后再搭词和句子，集中理解中文语序和基础句型。",
    result: "能用常见词组成陈述句、否定句、疑问句和时间地点句。",
    units: ["人称与称呼", "是、叫、的", "有与没有", "动词和宾语", "很、太、不", "吗与呢", "什么、谁、哪儿", "时间地点语序"],
  },
  {
    id: 4, number: "04", title: "生活对话", thai: "บทสนทนาในชีวิตจริง", scope: "12课",
    desc: "把学过的声音、汉字和句型放进真实生活场景。",
    result: "能完成常见日常交流，并逐渐减少对拼音提示的依赖。",
    units: ["见面介绍", "家人与关系", "吃饭点餐", "购物付款", "时间日程", "出行问路", "天气穿衣", "工作沟通", "身体感受", "情绪表达", "邀请计划", "综合对话"],
  },
  {
    id: 5, number: "05", title: "听读与表达", thai: "การฟัง อ่าน และสื่อสาร", scope: "长期阶段",
    desc: "最后进入真实材料：语音、聊天记录、短视频、短文和个人写作。",
    result: "能从真实内容获取信息，也能用语音和短文表达自己。",
    units: ["听语音抓关键词", "读聊天记录", "看短视频", "读生活短文", "复述信息", "写消息", "写小日记", "个人主题项目"],
  },
];

const lessonOneTimeline = [
  {
    time: "0–5",
    title: "先听中文的高低",
    thai: "ฟังระดับสูงต่ำของเสียงจีน",
    learner: "闭眼听四组声音，只判断它们的方向是平、升、转弯还是降，不需要开口。",
    teacher: "目的不是测试词义，而是把注意力集中到声音方向。暂时不出示汉字。",
  },
  {
    time: "5–13",
    title: "声音电梯：认识四声",
    thai: "ลิฟต์เสียง: รู้จักวรรณยุกต์ 4 เสียง",
    learner: "手掌当电梯：一声平着走，二声往上，三声先下再上，四声快速落下。先只做手势和哼声。",
    teacher: "泰语也有声调，可先建立“声调会改变意思”的共同概念，不要直接把泰语声调逐一硬套中文。",
  },
  {
    time: "13–23",
    title: "听声选方向",
    thai: "ฟังแล้วเลือกทิศทาง",
    learner: "Hua 随机读 ā / á / ǎ / à。Piu 不必开口，只用手势回答；8 次中有 6 次正确就过关。",
    teacher: "先练听，再练说。答错时重复正确声音并做手势，不说“又错了”。",
  },
  {
    time: "23–35",
    title: "六位韵母朋友",
    thai: "เพื่อนสระเดี่ยวทั้งหก",
    learner: "观察口型学习 a、o、e、i、u、ü。每学一个，就找一个熟悉词，不要求今天记住全部例词。",
    teacher: "ü 是本课唯一需要特别观察的口型：先发 i，再保持舌位把嘴唇拢圆。不要用英语字母名称教学。",
  },
  {
    time: "35–45",
    title: "声调手势挑战",
    thai: "เกมท่ามือวรรณยุกต์",
    learner: "抽一个韵母和一个声调，先做手势，再发音。两个人轮流出题，不计总分。",
    teacher: "只纠正最影响辨认的一处。若声调和口型都不准，本轮只改声调。",
  },
  {
    time: "45–53",
    title: "看调号读声音",
    thai: "อ่านเสียงจากเครื่องหมายวรรณยุกต์",
    learner: "随机抽取 ā、á、ǎ、à 和六个单韵母，先画方向，再读声音。",
    teacher: "这里只检查声调方向和单韵母口型，不加入声母、汉字或句子。",
  },
  {
    time: "53–58",
    title: "听读音并录一遍",
    thai: "ฟังแล้วอัดเสียงหนึ่งรอบ",
    learner: "点击本课四个读音按钮，每个跟读一次，最后录下一组 mā / má / mǎ / mà。",
    teacher: "设备语音只作参考；这一轮最多纠正一个声调，不连续要求重录。",
  },
  {
    time: "58–60",
    title: "带着成功下课",
    thai: "จบบทเรียนด้วยความสำเร็จ",
    learner: "Piu 选一个今天最喜欢的声音；Hua 说出一个具体进步，并布置 10 分钟练习。",
    teacher: "可说：“你刚才第三声的手势和声音已经同步了。”避免笼统评价“很棒”。",
  },
];

const pinyinCards = window.fullPinyinCards;
const TH = window.thaiContent;

const games = [
  { name: "声音电梯", thai: "ลิฟต์เสียง", lesson: "第1课", time: "5–8分钟", desc: "一个人读或播放声音，另一个人用手势画出声调方向。连续答对三次即可交换角色。" },
  { name: "声调照镜子", thai: "กระจกวรรณยุกต์", lesson: "第1–8课", time: "3–5分钟", desc: "面对面同步模仿口型和声调手势。镜子只负责模仿，不在对方发音中途打断。" },
  { name: "纸条测风", thai: "กระดาษวัดลม", lesson: "第2–3课", time: "5分钟", desc: "把纸条放在嘴前，比较 b/p、d/t、g/k。能用纸条判断送气与否就过关。" },
  { name: "拼音钓鱼", thai: "ตกปลาพินอิน", lesson: "第2–8课", time: "8分钟", desc: "抽一张声母和一张韵母，能拼就收下；不能相拼则放回。最后比较收集到的生活词。" },
  { name: "口型侦探", thai: "นักสืบริมฝีปาก", lesson: "第1、5课", time: "5分钟", desc: "只做口型不出声，让对方猜韵母。猜对后一起补上声调和例词。" },
  { name: "平翘舌分家", thai: "แยกเสียงลิ้น", lesson: "第4课", time: "6分钟", desc: "听到平舌音把卡放左边，听到翘舌音放右边。每轮只使用 6–8 个词。" },
  { name: "韵母变身", thai: "สระแปลงร่าง", lesson: "第5课", time: "6分钟", desc: "用两张单韵母卡组合复韵母，并慢慢演示口型从第一个音滑向第二个音。" },
  { name: "鼻音停车场", thai: "ลานจอดเสียงนาสิก", lesson: "第6–7课", time: "8分钟", desc: "把听到的词停进前鼻音或后鼻音车位。争议词可以用手机录音重新听。" },
  { name: "生活寻音", thai: "ตามหาเสียงรอบตัว", lesson: "第3–8课", time: "10分钟", desc: "从聊天记录、菜单或房间物品中寻找指定拼音，找到后说词义或用它造短句。" },
  { name: "拼音 Bingo", thai: "บิงโกพินอิน", lesson: "第2–8课", time: "10分钟", desc: "听词后盖住对应拼音。先连成一线的人需要把线上词语全部读一遍才算胜利。" },
  { name: "手机输入赛", thai: "เกมพิมพ์มือถือ", lesson: "第5–8课", time: "6分钟", desc: "听一个生活词，用拼音输入法找到正确汉字。不比手速，比能否解释为什么选这个字。" },
  { name: "四站旅行", thai: "เดินทางสี่สถานี", lesson: "第8课", time: "15分钟", desc: "依次完成听、读、打、说四站。允许提示和重试，四站完成即获得拼音毕业章。" },
  { name: "量词配对", thai: "จับคู่คำลักษณนาม", lesson: "第3阶段", time: "5分钟", desc: "看到名词，选出正确的量词：一个苹果、一只猫、一条鱼。答错会进易错本。" },
  { name: "语序拼图", thai: "ต่อประโยค", lesson: "第3阶段", time: "6分钟", desc: "把打乱的词块按中文语序排成一句。中文语序和泰语不一样，拼一次就记住。" },
  { name: "词义连连看", thai: "จับคู่คำกับความหมาย", lesson: "第2–5阶段", time: "4分钟", desc: "把中文词语和泰语意思配成一对。全部配完后，再听一遍中文。" },
  { name: "生活怎么回应", thai: "ตอบอย่างไรในชีวิตจริง", lesson: "第4–5阶段", time: "5分钟", desc: "看到一个真实生活情境，选出自然、礼貌而且能完成沟通的回应。" },
];

games.forEach((game, index) => {
  game.thaiDesc = TH.gameDescriptions[index];
});

const pinyinLessonGames = [
  [
    { moment: "认识四声后", time: "4分钟", name: "声音电梯", thai: "ลิฟต์เสียง", setup: "不需要教具", play: "Hua 读一个带调韵母，Piu 用手掌画声调方向；连续三题后交换角色。", finish: "8题中听对6题即可，不要求同时发音。" },
    { moment: "学完六个单韵母后", time: "5分钟", name: "口型照相机", thai: "กล้องถ่ายรูปปาก", setup: "手机前置相机", play: "一人只做 a/o/e/i/u/ü 的口型不出声，另一人猜；猜完一起发音。", finish: "六个口型都猜过一次就结束。" },
  ],
  [
    { moment: "讲完 b/p、d/t 后", time: "5分钟", name: "纸条测风", thai: "กระดาษวัดลม", setup: "一张薄纸条", play: "纸条放在嘴前，轮流读 bā/pā、dā/tā，观察纸条是否明显移动。", finish: "能用气流而不是字母名称判断两组音。" },
    { moment: "开始拼音节时", time: "6分钟", name: "音节拼拼", thai: "ต่อพยางค์", setup: "声母卡和韵母卡", play: "各抽一张卡，能相拼就慢拼再直呼；不能相拼就换一张。", finish: "成功拼出6个音节，不比较速度。" },
  ],
  [
    { moment: "讲完 g/k、j/q 后", time: "5分钟", name: "送气擂台", thai: "เวทีพ่นลม", setup: "纸巾一小片", play: "Hua 随机读一组音，Piu 举“有风/没风”手势，再用纸巾验证。", finish: "两组最小对立各判断正确3次。" },
    { moment: "讲完 ü 的省点规则后", time: "5分钟", name: "ü 摘帽子", thai: "ü ถอดหมวก", setup: "j/q/x/ü 字卡", play: "把 j、q、x 分别和 ü 站在一起，Piu 动手摘掉两点并读 ju/qu/xu。", finish: "能解释“点没了，ü 的声音没有变”。" },
  ],
  [
    { moment: "对比平翘舌后", time: "5分钟", name: "舌尖红绿灯", thai: "ไฟจราจรปลายลิ้น", setup: "红、绿两张卡", play: "听到平舌音举绿卡，听到翘舌音举红卡；先只听，不跟读。", finish: "10题中辨对7题。" },
    { moment: "练习词语前", time: "6分钟", name: "两座停车场", thai: "ลานจอดสองฝั่ง", setup: "平舌/翘舌两个区域", play: "把 zǎo、cài、chī、shì 等音节卡停进正确区域，再逐张跟读。", finish: "分类完成后只重练放错的卡。" },
  ],
  [
    { moment: "认识复韵母后", time: "5分钟", name: "口型慢动作", thai: "รูปปากสโลว์โมชั่น", setup: "镜子或手机相机", play: "把 ai、ao、ou 的口型移动夸张放慢，搭档猜是哪一个。", finish: "能说出每个音从什么口型滑向什么口型。" },
    { moment: "开始拼读后", time: "6分钟", name: "韵母接龙", thai: "ต่อสระ", setup: "复韵母卡", play: "上一人读例词，下一人找到其中的复韵母，再换一个含同韵母的音节。", finish: "完成6轮；想不到可以使用提示卡。" },
  ],
  [
    { moment: "讲完前鼻音舌位后", time: "5分钟", name: "舌尖警报", thai: "สัญญาณปลายลิ้น", setup: "不需要教具", play: "读到音节结尾时，Piu 用手指轻点上齿龈位置，判断舌尖是否到位。", finish: "an/en/in 各稳定完成两次。" },
    { moment: "开始听辨后", time: "6分钟", name: "前鼻音篮子", thai: "ตะกร้าเสียงนาสิกหน้า", setup: "前鼻音/不是前鼻音两张纸", play: "Hua 读8个音节，Piu 把卡放入对应篮子并读回。", finish: "只复盘分错的音节。" },
  ],
  [
    { moment: "讲完后鼻音舌位后", time: "5分钟", name: "前后鼻音拔河", thai: "ชักเย่อเสียงนาสิก", setup: "桌面画一条中线", play: "听 in/ing、en/eng，卡片向前鼻或后鼻方向移动一步。", finish: "同一组连续辨对3次就锁定。" },
    { moment: "完成跟读后", time: "6分钟", name: "手机听懂了吗", thai: "มือถือฟังออกไหม", setup: "手机语音输入", play: "Piu 说忙、冷、听、中等词，看手机识别结果；失败时只改一个发音点。", finish: "4个词中有3个被正确识别。" },
  ],
  [
    { moment: "复习标调规则后", time: "6分钟", name: "标调侦探", thai: "นักสืบวรรณยุกต์", setup: "错误拼音卡", play: "找出声调帽子戴错位置的卡，并说出标调口诀。", finish: "改对6张卡，解释其中2张。" },
    { moment: "课程最后", time: "10分钟", name: "拼音四站", thai: "พินอินสี่สถานี", setup: "听、辨、读、打四站任务", play: "依次听辨声调、区分易混音、读新音节、用拼音输入查词。", finish: "四站都完成即可；每站允许一次提示和重试。" },
  ],
];

learningStages.forEach((stage, index) => {
  stage.thaiDesc = TH.stageDescriptions[index];
  stage.thaiResult = TH.stageResults[index];
});

pinyinLessonGames.flat().forEach((game, index) => {
  [game.thaiSetup, game.thaiPlay, game.thaiFinish] = TH.pinyinGameRules[index];
});

const unitSpecificNotes = {
  2: [
    "每一笔都要说清起点、方向和停笔，不把笔画教成静态图形。", "把笔顺说成动作口令，写之前先用手臂走一遍。", "独体字先看整体轮廓，再找关键笔画，不用反复描红。", "左右结构重点看宽窄和高低，不要求两边一样大。", "上下结构先确定中线，避免上大下小或重心偏移。", "包围结构先判断开口方向，再决定什么时候封口。", "偏旁是意义线索，不把它解释成百分之百可靠的答案。", "闯关目的是找到易错字，不以一次写对60字为目标。"
  ],
  3: [
    "先让 Piu 明确说话的人和被谈论的人，再选择人称。", "区分“是身份”“叫名字”“的所属”，三种功能不要互换。", "“没有”是完整否定形式，不说“不有”。", "中文动词不随人称变化，重点只放在词序。", "形容词句常用“很”连接，不把“很”每次都理解成程度特别高。", "“吗”放句尾；“呢”用于追问，语气和用途不同。", "疑问词留在答案本来出现的位置，不统一挪到句首。", "时间通常在动词前，地点常用“在 + 地点”放在动作前。"
  ],
  4: [
    "先保住问候、名字和回应三个功能，再追求自然语速。", "介绍关系时练“这是 + 我的 + 称呼”，名字作为可替换槽位。", "点餐先完成需求，再补数量、口味和礼貌表达。", "把询价、数量、付款分三步，避免一次塞进过长句子。", "约时间必须让日期、时段和钟点都得到确认。", "问路时先用“请问”启动，再听方向关键词。", "天气描述后接建议，让对话不止停在“冷/热”。", "工作沟通优先说清状态、时间和下一步，不追求复杂客套。", "身体感受用程度词降低表达压力，但紧急情况不依赖语言练习。", "情绪词后接“因为”，练习把感受和原因分开说。", "邀请要同时练接受和拒绝，避免只会回答“好”。", "综合对话只给关键词，不给完整台词，观察能否自主连接。"
  ],
  5: [
    "第一遍只抓四要素，不暂停、不逐字翻译。", "聊天语境里省略很常见，先找最后达成的决定。", "画面、字幕、声音分三遍使用，避免同时处理过多信息。", "用标题和连接词预测结构，再处理不认识的字。", "复述只保留核心事实，不要求复制原句。", "消息先写目的，再写时间或请求，最后礼貌收尾。", "日记先完成时间—事情—感受，再逐步增加细节。", "个人项目从真实兴趣出发，以让别人看懂或听懂为完成标准。"
  ]
};

function loadStoredJSON(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function localDateKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

const savedPracticeByStage = loadStoredJSON("piu-practice-by-stage", null);
const legacyPractice = loadStoredJSON("piu-practice", []);
const practiceIsCurrent = localStorage.getItem("piu-practice-date") === localDateKey();

const state = {
  route: "home",
  mode: localStorage.getItem("piu-mode") || "learner",
  stageId: Number(localStorage.getItem("piu-current-stage")) || 1,
  unitStage: 2,
  unitIndex: 0,
  lessonId: 1,
  filter: "all",
  completed: loadStoredJSON("piu-lessons", []),
  unitCompleted: loadStoredJSON("piu-unit-progress", []),
  practiceByStage: practiceIsCurrent ? (savedPracticeByStage || { 1: legacyPractice }) : {},
  gameSessions: {},
  vocabulary: [],
  recordings: [],
  learningDataReady: false,
  milestoneProgress: loadStoredJSON("piu-milestones", {}),
  supportLevel: localStorage.getItem("piu-support-level") || "full",
  levelOneIndex: 0,
  levelOneCompleted: loadStoredJSON("piu-level-one-progress", []),
};

const main = document.querySelector("main");
const dialog = document.querySelector("dialog");
const dialogContent = document.querySelector("#dialogContent");

function setRoute(route) {
  state.route = route;
  const activeRoute = ["lesson", "unit", "level-one", "level-one-lesson"].includes(route) ? "lessons" : route;
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.classList.toggle("active", button.dataset.route === activeRoute);
  });
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setMode(mode) {
  state.mode = mode;
  localStorage.setItem("piu-mode", state.mode);
  render();
}

function setSupportLevel(level) {
  if (!["full", "pinyin", "hanzi"].includes(level)) return;
  state.supportLevel = level;
  localStorage.setItem("piu-support-level", level);
  render();
}

function renderSupportControl() {
  const options = [
    ["full", "汉字＋拼音＋泰语", "จีน + พินอิน + ไทย"],
    ["pinyin", "汉字＋拼音", "จีน + พินอิน"],
    ["hanzi", "只看汉字", "ดูเฉพาะภาษาจีน"],
  ];
  return `<section class="support-control" aria-label="学习提示级别">
    <div><strong>提示级别</strong><small>ระดับตัวช่วย</small></div>
    <div class="support-options">${options.map(([value, zh, thai]) => `<button class="${state.supportLevel === value ? "active" : ""}" onclick="setSupportLevel('${value}')"><span>${zh}</span><small>${thai}</small></button>`).join("")}</div>
  </section>`;
}

function pageHead(eyebrow, title, lead, thai, aside = "") {
  return `
    <header class="page-head">
      <div>
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="lead">${lead}</p>
        ${thai ? `<p class="thai">${thai}</p>` : ""}
      </div>
      ${aside}
    </header>`;
}

function escapeAttribute(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function vocabularyId(stageId, unitIndex, zh) {
  return `${stageId}-${unitIndex}-${encodeURIComponent(zh)}`;
}

function vocabularyButton(item, stageId, unitIndex, source = "lesson") {
  const zh = item.hanzi || item.zh || item.speak || item.label;
  const pinyin = item.pinyin || item.label || "";
  const thai = item.thai || "";
  const id = vocabularyId(stageId, unitIndex, zh);
  const saved = state.vocabulary.some((entry) => entry.id === id);
  return `<button class="save-word-button ${saved ? "saved" : ""}" data-id="${escapeAttribute(id)}" data-zh="${escapeAttribute(zh)}" data-pinyin="${escapeAttribute(pinyin)}" data-thai="${escapeAttribute(thai)}" data-stage="${stageId}" data-unit="${unitIndex}" data-source="${source}" onclick="toggleVocabularyFromButton(this)" title="${saved ? "移出生词本" : "收藏到生词本"}">${saved ? "✓ 已收藏" : "+ 收藏"}<small>${saved ? "เก็บแล้ว" : "เก็บคำ"}</small></button>`;
}

function unitProgressKey(stageId, unitIndex) {
  return `${stageId}-${unitIndex}`;
}

function getStageUnitCount(stageId) {
  return stageId === 1 ? lessons.length : (window.stageCurriculum?.[stageId] || []).length;
}

function getStageCompletedCount(stageId) {
  if (stageId === 1) return state.completed.length;
  return state.unitCompleted.filter((key) => key.startsWith(`${stageId}-`)).length;
}

function getCurrentStage() {
  return learningStages.find((stage) => getStageCompletedCount(stage.id) < getStageUnitCount(stage.id)) || learningStages[4];
}

function isUnitComplete(stageId, unitIndex) {
  return state.unitCompleted.includes(unitProgressKey(stageId, unitIndex));
}

function getNextLearningTarget() {
  const pendingPinyin = lessons.find((item) => !state.completed.includes(item.id));
  if (pendingPinyin) return { stageId: 1, unitIndex: pendingPinyin.id - 1, title: pendingPinyin.title, thai: pendingPinyin.thaiTitle };
  for (let stageId = 2; stageId <= 5; stageId += 1) {
    const units = window.stageCurriculum?.[stageId] || [];
    const unitIndex = units.findIndex((_, index) => !isUnitComplete(stageId, index));
    if (unitIndex >= 0) return { stageId, unitIndex, title: units[unitIndex].title, thai: units[unitIndex].thai };
  }
  const finalUnits = window.stageCurriculum?.[5] || [];
  return { stageId: 5, unitIndex: Math.max(0, finalUnits.length - 1), title: "个人主题项目", thai: "โปรเจกต์ส่วนตัว" };
}

function openNextLearningTarget() {
  const target = getNextLearningTarget();
  if (target.stageId === 1) showLesson(target.unitIndex + 1);
  else openUnit(target.stageId, target.unitIndex);
}

function renderTodayPlan() {
  const target = getNextLearningTarget();
  const dueWords = state.vocabulary.filter((item) => !item.dueDate || item.dueDate <= localDateKey()).length;
  const donePractice = (state.practiceByStage[target.stageId] || []).length;
  return `<section class="section today-plan">
    <div class="section-heading"><div><p class="eyebrow">TODAY · วันนี้</p><h2>今天学什么</h2><p>不用自己翻目录，完成下面三件事就可以休息。</p><p class="thai">ไม่ต้องหาเองในสารบัญ ทำ 3 อย่างด้านล่างแล้วพักได้</p></div><span>约 20–30 分钟</span></div>
    <div class="today-plan-grid">
      <button class="today-task primary" onclick="openNextLearningTarget()"><b>1</b><span><strong>继续课程：${target.title}</strong><small>${target.thai}</small></span><em>开始 →</em></button>
      <button class="today-task" onclick="setRoute('practice')"><b>2</b><span><strong>复习 ${dueWords} 个到期生词</strong><small>ทบทวนคำศัพท์ที่ถึงกำหนด ${dueWords} คำ</small></span><em>${dueWords ? "去复习 →" : "今日已清空 ✓"}</em></button>
      <button class="today-task" onclick="state.stageId=${target.stageId}; setRoute('practice')"><b>3</b><span><strong>每日 10 分钟练习</strong><small>ฝึกประจำวัน 10 นาที</small></span><em>${donePractice} / 4</em></button>
    </div>
  </section>`;
}

function renderStandardBenchmark() {
  const benchmark = window.levelOneBenchmark;
  if (!benchmark) return "";
  return `<section class="section standard-benchmark">
    <div class="section-heading"><div><p class="eyebrow">GF 0025-2021</p><h2>${benchmark.title}</h2><p class="thai">${benchmark.thai}</p></div><span>一级前置基础 · พื้นฐานก่อนระดับ 1</span></div>
    <div class="benchmark-layout">
      <div class="benchmark-metrics">${benchmark.metrics.map(([name, value, thai]) => `<div><strong>${value}</strong><span>${name}</span><small>${thai}</small></div>`).join("")}</div>
      <div class="benchmark-copy"><strong>一级常用话题</strong><p>${benchmark.topics}</p><p class="thai">${benchmark.thaiTopics}</p><div class="benchmark-note"><p>${benchmark.note}</p><p class="thai">${benchmark.thaiNote}</p></div><button class="primary-button" onclick="setRoute('level-one')">查看正式一级课程 →<small class="thai">ดูหลักสูตรระดับ 1</small></button></div>
    </div>
  </section>`;
}

function isLevelOneComplete(index) {
  return state.levelOneCompleted.includes(window.levelOneCourse.lessons[index].id);
}

function renderLevelOneCoverage(compact = false) {
  const course = window.levelOneCourse;
  const inventory = window.getLevelOneInventory();
  const metrics = [
    ["课程", "บทเรียน", course.lessons.length, 32],
    ["汉字安排量", "จำนวนตัวอักษรที่จัดไว้", inventory.characters, course.targets.characters],
    ["明确教学词", "คำศัพท์ที่สอนชัดเจน", inventory.words, course.targets.words],
    ["语法支架", "โครงช่วยไวยากรณ์", inventory.grammar, course.targets.grammar],
  ];
  return `<section class="${compact ? "level-one-coverage compact" : "section level-one-coverage"}">
    <div class="section-heading"><div><p class="eyebrow">LEVEL 1 LEDGER · บัญชีระดับ 1</p><h2>已建内容台账</h2><p>只统计正式一级课程当前已加入的内容，不把 A0 接触过的内容重复算作达标。</p><p class="thai">นับเฉพาะเนื้อหาที่เพิ่มในหลักสูตรระดับ 1 และไม่ถือว่าเนื้อหา A0 ที่เคยเห็นคือผ่านแล้ว</p></div><span>首单元 · หน่วยแรก</span></div>
    <div class="coverage-grid">${metrics.map(([zh, thai, value, target]) => `<article><div><strong>${value}</strong><span>/ ${target}</span></div><b>${zh}</b><small>${thai}</small><progress value="${value}" max="${target}"></progress></article>`).join("")}</div>
    <p class="coverage-warning">当前数字是课程安排量，并非官方清单逐项对齐，也不是 Piu 已经掌握。官方 269 音节仍保留在上方参照区，待建立逐音节映射后再统计，不用整词拼音虚报覆盖。</p>
    <p class="thai coverage-warning">ตัวเลขคือปริมาณที่จัดไว้ในหลักสูตร ยังไม่ใช่การเทียบรายการทางการทีละข้อ และไม่ได้แปลว่า Piu เชี่ยวชาญแล้ว เกณฑ์ 269 พยางค์ยังอยู่ในส่วนอ้างอิงด้านบน และจะนับเมื่อมีการจับคู่ทีละพยางค์อย่างถูกต้อง</p>
  </section>`;
}

function renderLevelOneCatalog() {
  const course = window.levelOneCourse;
  return `${pageHead("FORMAL LEVEL 1", course.title, course.statusNote, course.thaiStatusNote)}
    ${renderLevelOneCoverage()}
    <section class="section level-one-roadmap">
      <div class="section-heading"><div><h2>8 个正式单元</h2><p class="thai">8 หน่วยอย่างเป็นระบบ</p></div><span>${state.levelOneCompleted.length} / ${course.lessons.length} 已完成 · เรียนแล้ว</span></div>
      <nav class="unit-jump-nav" aria-label="一级单元目录">${course.units.map((unit, unitIndex) => `<a href="#${unit.id}"><b>${String(unitIndex + 1).padStart(2, "0")}</b><span>${unit.title.replace(/^单元[一二三四五六七八]：/, "")}</span><small>${unit.thaiTitle}</small></a>`).join("")}</nav>
    </section>
    ${course.units.map((unit, unitIndex) => {
      const offset = course.units.slice(0, unitIndex).reduce((total, item) => total + item.lessons.length, 0);
      const completed = unit.lessons.filter((_, lessonIndex) => isLevelOneComplete(offset + lessonIndex)).length;
      return `<section class="section formal-unit-section" id="${unit.id}">
        <div class="section-heading"><div><p class="eyebrow">UNIT ${String(unitIndex + 1).padStart(2, "0")}</p><h2>${unit.title}</h2><p class="thai">${unit.thaiTitle}</p><p>${unit.description}</p><p class="thai">${unit.thaiDescription}</p></div><span>${completed} / ${unit.lessons.length} · เรียนแล้ว</span></div>
        <div class="formal-unit-grid">${unit.lessons.map((lesson, lessonIndex) => {
          const globalIndex = offset + lessonIndex;
          return `<button class="formal-unit-card ${isLevelOneComplete(globalIndex) ? "completed" : ""}" onclick="openLevelOneLesson(${globalIndex})"><span>第 ${lessonIndex + 1} 课 · บทที่ ${lessonIndex + 1}</span><h3>${lesson.title}</h3><p class="thai">${lesson.thaiTitle}</p><p>${lesson.goal}</p><p class="thai">${lesson.thaiGoal}</p><small>${isLevelOneComplete(globalIndex) ? "✓ 已完成 · เรียนแล้ว" : "进入完整课程 → เข้าสู่บทเรียน"}</small></button>`;
        }).join("")}</div>
      </section>`;
    }).join("")}
    <section class="section ledger-detail teacher-only"><div class="section-heading"><div><h2>Hua 的备课台账</h2><p class="thai">บัญชีเตรียมสอนสำหรับ Hua</p></div></div>
      <div class="ledger-table-wrap"><table><thead><tr><th>词语<br><small>คำศัพท์</small></th><th>拼音<br><small>พินอิน</small></th><th>泰语<br><small>ภาษาไทย</small></th><th>初次出现<br><small>ปรากฏครั้งแรก</small></th><th>后续复现<br><small>ทบทวนภายหลัง</small></th></tr></thead><tbody>${window.getLevelOneInventory().wordItems.map((item) => `<tr><td>${item.zh}</td><td>${item.pinyin}</td><td>${item.thai}</td><td>第 ${item.firstLesson} 课 · บท ${item.firstLesson}</td><td>${item.reviews} 次 · ${item.reviews} ครั้ง</td></tr>`).join("")}</tbody></table></div>
    </section>`;
}

function openLevelOneLesson(index) {
  state.levelOneIndex = Number(index);
  setRoute("level-one-lesson");
}

function levelOneAudioButton(text, label, rate) {
  return `<button class="secondary-button audio-speed-button" onclick="speakChinese('${text.replace(/'/g, "")}', ${rate})">▶ ${label}</button>`;
}

function renderLevelOneLesson(index) {
  const course = window.levelOneCourse;
  const lesson = course.lessons[index];
  const complete = isLevelOneComplete(index);
  return `<div class="lesson-layout formal-lesson-layout">
    <aside class="lesson-sidebar"><button class="text-button" onclick="setRoute('level-one')">← 返回一级目录 · กลับสารบัญระดับ 1</button><p class="eyebrow">${lesson.unitTitle} · 第 ${lesson.lessonIndex + 1} 课 · บทที่ ${lesson.lessonIndex + 1}</p><h1>${lesson.title}</h1><p class="thai">${lesson.thaiTitle}</p><div class="meta-list"><div class="meta-item"><small>本课容量 · เนื้อหาบทนี้</small><strong>${lesson.words.length} 词 · ${lesson.grammar.length} 语法 · ${lesson.examples.length} 例句</strong><span class="thai">${lesson.words.length} คำ · ${lesson.grammar.length} ไวยากรณ์ · ${lesson.examples.length} ตัวอย่าง</span></div><div class="meta-item"><small>完成标准 · เกณฑ์ผ่าน</small><strong>完成对话、听读和真实任务</strong><span class="thai">ทำบทสนทนา การฟังอ่าน และภารกิจจริงให้ครบ</span></div></div></aside>
    <article class="lesson-content">
      <div class="outcome-band"><p class="eyebrow">本课目标 · เป้าหมาย</p><h2>${lesson.goal}</h2><p class="thai">${lesson.thaiGoal}</p></div>
      ${renderSupportControl()}
      ${lesson.review.length ? `<section class="content-section spiral-review"><div class="section-heading"><div><p class="eyebrow">循环复习 · ทบทวนแบบวนซ้ำ</p><h2>先找回旧词，再学新内容</h2><p class="thai">เรียกคำเก่ากลับมาก่อน แล้วจึงเรียนเนื้อหาใหม่</p></div><span>${lesson.review.length} 个旧词 · คำเก่า ${lesson.review.length} คำ</span></div><div class="review-word-row">${lesson.review.map((word) => `<button onclick="speakChinese('${word}')"><strong>${word}</strong></button>`).join("")}</div></section>` : ""}
      <section class="content-section teacher-script teacher-only"><div class="section-heading"><div><p class="eyebrow">HUA TEACHING SCRIPT</p><h2>这一课怎么讲</h2><p class="thai">แนวทางสอนบทนี้</p></div><span>只纠 1–2 处 · แก้ 1–2 จุด</span></div><div class="depth-steps">${lesson.teacherScript.map((step, i) => `<div><b>0${i + 1}</b><span>${step[0]}</span><small class="thai">${step[1]}</small></div>`).join("")}</div></section>
      <section class="content-section"><div class="section-heading"><div><h2>本课新词</h2><p class="thai">คำศัพท์ใหม่</p></div><span>${lesson.words.length} 词 · ${lesson.words.length} คำ</span></div><div class="learning-item-grid">${lesson.words.map((word) => `<article class="learning-item"><button class="play-button" onclick="speakChinese('${word.zh}')">▶</button><strong class="content-text">${word.zh}</strong><span class="pinyin-line support-pinyin">${word.pinyin}</span><small class="support-thai">${word.thai}</small>${vocabularyButton(word, 6, index, "level-one")}</article>`).join("")}</div></section>
      <section class="content-section grammar-panel"><div class="section-heading"><div><h2>语法只学两点</h2><p class="thai">เรียนไวยากรณ์เพียง 2 จุด</p></div></div><div class="formal-grammar-grid">${lesson.grammar.map((item) => `<article><h3>${item.name}</h3><p class="thai">${item.thai}</p><strong>${item.formula}</strong><p>${item.note}</p><p class="thai">${item.thaiNote}</p></article>`).join("")}</div></section>
      <section class="content-section teaching-example-bank"><div class="section-heading"><div><h2>8 个分层例句</h2><p>从基础、疑问、否定到真实表达，每句都可听。</p><p class="thai">จากพื้นฐาน คำถาม ปฏิเสธ ไปสู่การใช้จริง ทุกประโยคกดฟังได้</p></div></div><div class="teaching-example-list">${lesson.examples.map((item, i) => `<article class="teaching-example"><span class="example-number">${String(i + 1).padStart(2, "0")}</span><button class="play-button" onclick="speakChinese('${item.zh.replace(/'/g, "")}')">▶</button><div><strong>${item.zh}</strong><span class="support-pinyin">${item.pinyin}</span><small class="support-thai">${item.thai}</small></div></article>`).join("")}</div></section>
      <section class="content-section"><div class="section-heading"><div><h2>两段完整对话</h2><p class="thai">บทสนทนาสมบูรณ์ 2 บท</p></div></div><div class="dialogue-pair">${lesson.dialogues.map((dialogue) => `<article><h3>${dialogue.title}</h3><p class="thai">${dialogue.thaiTitle}</p>${dialogue.lines.map((line, i) => `<div class="dialogue-line"><span>${i % 2 ? "B" : "A"}</span><button class="play-button" onclick="speakChinese('${line.zh.replace(/'/g, "")}')">▶</button><div><strong>${line.zh}</strong><small class="support-pinyin">${line.pinyin}</small><small class="support-thai">${line.thai}</small></div></div>`).join("")}</article>`).join("")}</div></section>
      <section class="content-section listening-lab"><div class="section-heading"><div><h2>同一段听两种速度</h2><p>慢速先抓词，自然速度再抓完整意思；当前为设备普通话语音。</p><p class="thai">ฟังช้าเพื่อจับคำ แล้วฟังความเร็วธรรมชาติเพื่อจับความหมาย ขณะนี้ใช้เสียงภาษาจีนจากอุปกรณ์</p></div></div><div class="audio-speed-row">${levelOneAudioButton(lesson.listening.zh, "慢速 · ช้า", 0.55)}${levelOneAudioButton(lesson.listening.zh, "自然速度 · ธรรมชาติ", 0.88)}</div><details><summary>听完再看原文 · ฟังเสร็จแล้วค่อยดูข้อความ</summary><p><strong>${lesson.listening.zh}</strong></p><p class="support-pinyin">${lesson.listening.pinyin}</p><p class="support-thai">${lesson.listening.thai}</p></details><div class="standard-task"><strong>听力问题 · คำถามการฟัง</strong><p>${lesson.listeningQuestion}</p><p class="thai">${lesson.thaiListeningQuestion}</p></div></section>
      <section class="content-section reading-lab"><div class="section-heading"><div><h2>生活短文</h2><p class="thai">บทอ่านชีวิตประจำวัน</p></div><span>读意群，不逐字翻译 · อ่านเป็นกลุ่มคำ</span></div><button class="secondary-button" onclick="speakChinese('${lesson.reading.zh.replace(/'/g, "")}', 0.72)">▶ 听全文 · ฟังทั้งหมด</button><p class="reading-zh">${lesson.reading.zh}</p><p class="support-pinyin">${lesson.reading.pinyin}</p><p class="support-thai">${lesson.reading.thai}</p></section>
      <section class="content-section in-lesson-game"><div class="section-heading"><div><p class="eyebrow">讲到这里就玩 · เล่นระหว่างเรียน</p><h2>选出能完成沟通的一句</h2><p class="thai">เลือกประโยคที่สื่อสารได้จริง</p></div></div><p><strong>${lesson.game.prompt}</strong></p><p class="thai">${lesson.game.thaiPrompt}</p><div class="mini-choice-grid">${lesson.game.options.map((option, optionIndex) => `<button onclick="answerLevelOneGame(${index}, ${optionIndex}, this)">${option}</button>`).join("")}</div><p class="reading-feedback" id="level-one-game-feedback-${index}"></p></section>
      <section class="practice-band"><div><p class="eyebrow">真实任务 · ภารกิจจริง</p><h3>${lesson.task}</h3><p class="thai">${lesson.thaiTask}</p></div></section>
      <div class="lesson-actions"><button class="${complete ? "secondary-button" : "primary-button"}" onclick="toggleLevelOneComplete(${index})">${complete ? "✓ 本课已完成 · เรียนแล้ว" : "完成本课 · เรียนบทนี้เสร็จ"}</button>${index > 0 ? `<button class="secondary-button" onclick="openLevelOneLesson(${index - 1})">上一课 · บทก่อนหน้า</button>` : ""}${index < course.lessons.length - 1 ? `<button class="primary-button" onclick="openLevelOneLesson(${index + 1})">下一课 · บทถัดไป</button>` : `<button class="primary-button" onclick="setRoute('level-one')">返回单元台账 · กลับบัญชีหน่วย</button>`}</div>
    </article></div>`;
}

function answerLevelOneGame(lessonIndex, optionIndex, button) {
  const lesson = window.levelOneCourse.lessons[lessonIndex];
  const feedback = document.querySelector(`#level-one-game-feedback-${lessonIndex}`);
  button.parentElement.querySelectorAll("button").forEach((item) => item.classList.remove("selected-answer"));
  button.classList.add("selected-answer");
  feedback.innerHTML = optionIndex === lesson.game.answer
    ? '<span class="feedback-ok">✓ 对，这句话能完成当前沟通。· ถูก ประโยคนี้สื่อสารได้</span>'
    : '<span class="try-again">再看情境和句子的功能。· ลองดูสถานการณ์และหน้าที่ของประโยคอีกครั้ง</span>';
}

function toggleLevelOneComplete(index) {
  const id = window.levelOneCourse.lessons[index].id;
  state.levelOneCompleted = state.levelOneCompleted.includes(id) ? state.levelOneCompleted.filter((item) => item !== id) : [...state.levelOneCompleted, id];
  localStorage.setItem("piu-level-one-progress", JSON.stringify(state.levelOneCompleted));
  render();
}

function renderHome() {
  const next = lessons.find((item) => !state.completed.includes(item.id)) || lessons[7];
  const currentStage = getCurrentStage();
  return `
    ${pageHead(
      "从会说，到说得明白",
      "把会说的中文，连成自己的中文世界。",
      "按学习顺序一步一步来：先拼音，再认字，再组句，最后进入真实对话和听读表达。",
      "เรียนตามลำดับทีละขั้น: พินอิน → ตัวอักษร → ประโยค → บทสนทนา → ฟังและอ่าน",
      `<div class="today-badge"><small>当前阶段 · ช่วงปัจจุบัน</small><strong>${currentStage.number} ${currentStage.title}</strong></div>`
    )}
    ${renderTodayPlan()}
    ${renderStandardBenchmark()}
    <section class="section">
      <div class="section-heading">
        <div><h2>完整中文学习路线</h2><p>เส้นทางการเรียนภาษาจีนทั้งหมด</p></div>
        <span>听 · 说 · 读 · 写 · 用</span>
      </div>
      <div class="stage-grid">
        ${learningStages.map((stage, index) => `
          <button class="stage-card ${stage.id === currentStage.id ? "active-stage" : ""}" onclick="openStage(${stage.id})">
            <span class="stage-number">${stage.number}</span>
            <span class="stage-scope">${getStageCompletedCount(stage.id)} / ${getStageUnitCount(stage.id)} 已完成</span>
            <h3>${stage.title}</h3>
            <p class="thai">${stage.thai}</p>
            <p>${stage.desc}</p><p class="thai">${stage.thaiDesc}</p>
          </button>`).join("")}
      </div>
    </section>
    <section class="section ${currentStage.id === 1 ? "" : "home-pinyin-review"}">
      <div class="section-heading">
        <div><h2>${currentStage.id === 1 ? "现在先学：8 课拼音基础" : "拼音基础：随时回来复习"}</h2><p>${currentStage.id === 1 ? "ตอนนี้เรียนพื้นฐานพินอิน 8 บท" : "กลับมาทบทวนพินอินได้ทุกเมื่อ"}</p></div>
        <span>${state.completed.length} / 8 已完成</span>
      </div>
      <div class="journey">
        ${lessons.map((lesson) => lessonCard(lesson, next.id)).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-heading"><div><h2>我们的学习约定</h2><p>ข้อตกลงในการเรียนของเรา</p></div></div>
      <div class="principles">
        <div class="principle"><b>01</b><h3>先听，再说</h3><p>先让耳朵找到区别，再让嘴巴模仿。ฟังก่อน แล้วค่อยพูด</p></div>
        <div class="principle"><b>02</b><h3>一次只改一两处</h3><p>保留说话的勇气，比每个音都完美更重要。แก้ครั้งละ 1–2 จุด</p></div>
        <div class="principle"><b>03</b><h3>学完一段，再走下一段</h3><p>拼音达标后再认字，不把新要求混在一起。เรียนจบทีละช่วง ไม่ผสมเป้าหมายใหม่</p></div>
      </div>
    </section>
    <section class="section life-entry">
      <div class="section-heading"><div><h2>我的生活</h2><p>ชีวิตของฉัน</p></div></div>
      <p class="lead">Piu 生活中真正会用到的中文：家、饮食喜好、旅行、工作和个人介绍。</p>
      <p class="thai">ภาษาจีนที่ Piu ใช้จริง: บ้าน ความชอบด้านอาหาร การเดินทาง งาน และการแนะนำตัว</p>
      <button class="primary-button" onclick="setRoute('life')">进入我的生活 →</button>
    </section>
    <section class="section research-note teacher-only">
      <div class="section-heading"><div><h2>教研依据</h2><p>แหล่งอ้างอิงการออกแบบบทเรียน</p></div><span>Hua 备课</span></div>
      <p>课程按“声音 → 汉字 → 词句 → 交际 → 真实表达”递进，并针对泰语母语者强化声调音域、送气、卷舌、ü 和前后鼻音。</p>
      <p class="thai">บทเรียนค่อย ๆ พัฒนาจากเสียง → ตัวอักษร → คำและประโยค → การสื่อสาร → การใช้จริง และเน้นจุดยากสำหรับผู้พูดภาษาไทย</p>
      <div class="source-links">
        <a href="http://www.moe.gov.cn/jyb_sjzl/ziliao/A19/202111/W020211118507389477190.pdf" target="_blank" rel="noreferrer">国际中文教育中文水平等级标准</a>
        <a href="https://www.isca-archive.org/tai_2023/li23_tai.pdf" target="_blank" rel="noreferrer">跨母语声调习得研究</a>
      </div>
    </section>`;
}

function renderEnrichment(block, stageId = state.stageId, unitIndex = 0) {
  if (!block) return "";
  return `
    <section class="content-section enrichment-section">
      <div class="section-heading"><div><p class="eyebrow">本课加餐 · เนื้อหาเสริม</p><h2>${block.title}</h2><p class="thai">${block.thaiTitle}</p></div></div>
      ${block.note ? `<div class="transfer-note"><strong>泰语母语提醒</strong><p>${block.note}</p><p class="thai">${block.thaiNote}</p></div>` : ""}
      <div class="enrichment-grid">
        ${block.items.map((item) => `<article class="enrichment-item"><button class="play-button" onclick="speakChinese('${item.zh.replace(/'/g, "")}')" aria-label="播放 ${item.zh}">▶</button><strong>${item.zh}</strong><span class="support-pinyin">${item.pinyin}</span><small class="support-thai">${item.thai}</small>${vocabularyButton(item, stageId, unitIndex, "enrichment")}</article>`).join("")}
      </div>
      <div class="mission-strip"><strong>马上用 · ใช้ทันที</strong><p>${block.mission}</p><p class="thai">${block.thaiMission}</p></div>
    </section>`;
}

function renderStandardLessonDepth(stageId, unitIndex) {
  const block = window.standardLessonDepth?.[stageId]?.[unitIndex];
  if (!block) return "";
  return `<section class="content-section standard-depth">
    <div class="section-heading"><div><p class="eyebrow">标准扩展 · เนื้อหาเสริมตามมาตรฐาน</p><h2>${block.focus}</h2><p class="thai">${block.thaiFocus}</p></div>${block.formula ? `<span class="grammar-formula">${block.formula}</span>` : ""}</div>
    <div class="standard-input-list">${block.input.map((item) => `<article>
      <button class="play-button" onclick="speakChinese('${item.zh.replace(/'/g, "")}')" aria-label="播放 ${item.zh}">▶</button>
      <div><strong>${item.zh}</strong><span class="support-pinyin">${item.pinyin}</span><small class="support-thai">${item.thai}</small>${vocabularyButton(item, stageId, unitIndex, "standard")}</div>
    </article>`).join("")}</div>
    <div class="standard-task"><strong>交际任务 · ภารกิจการสื่อสาร</strong><p>${block.task}</p><p class="thai">${block.thaiTask}</p></div>
  </section>`;
}

function renderLessonExampleBank(stageId, unitIndex) {
  const examples = window.lessonExampleBanks?.[stageId]?.[unitIndex] || [];
  if (!examples.length) return "";
  const renderExample = (item, index) => `<article class="teaching-example">
    <span class="example-number">${String(index + 1).padStart(2, "0")}</span>
    <button class="play-button" onclick="speakChinese('${item.zh.replace(/'/g, "")}')" aria-label="播放 ${item.zh}">▶</button>
    <div><span class="example-kind">${item.kind}<small>${item.thaiKind}</small></span><strong>${item.zh}</strong><span class="support-pinyin">${item.pinyin}</span><small class="support-thai">${item.thai}</small>${vocabularyButton(item, stageId, unitIndex, "example-bank")}</div>
  </article>`;
  return `<section class="content-section teaching-example-bank">
    <div class="section-heading"><div><p class="eyebrow">本课示范例库 · ตัวอย่างประจำบท</p><h2>不只讲重点，直接看例子怎么变</h2><p>从基础句开始，再看替换、否定、疑问或真实情境。每句都可以播放。</p><p class="thai">เริ่มจากประโยคพื้นฐาน แล้วดูการแทนคำ ปฏิเสธ คำถาม หรือสถานการณ์จริง ทุกประโยคกดฟังได้</p></div><span>${examples.length} 条示范 · ${examples.length} ตัวอย่าง</span></div>
    <div class="teaching-example-list">${examples.slice(0, 3).map(renderExample).join("")}</div>
    <details class="more-examples" ${state.mode === "teacher" ? "open" : ""}>
      <summary>展开更多例子（${examples.length - 3}）<span>ดูตัวอย่างเพิ่มอีก ${examples.length - 3} ประโยค</span></summary>
      <div class="teaching-example-list">${examples.slice(3).map((item, index) => renderExample(item, index + 3)).join("")}</div>
    </details>
  </section>`;
}

function renderSpiralReview(stageId, unitIndex) {
  if (unitIndex === 0) return "";
  const previousUnits = window.stageCurriculum?.[stageId]?.slice(Math.max(0, unitIndex - 2), unitIndex) || [];
  const reviewItems = previousUnits.flatMap((unit) => unit.items.slice(0, 2)).slice(-4);
  if (!reviewItems.length) return "";
  const currentExample = window.stageCurriculum[stageId][unitIndex].examples[0]?.zh || "本课句子";
  return `<section class="content-section spiral-review">
    <div class="section-heading"><div><p class="eyebrow">循环复习 · ทบทวนแบบวนซ้ำ</p><h2>先带回以前学过的词</h2><p>不重新讲一遍：听、认，再把一个旧词放进今天的表达。</p><p class="thai">ไม่ต้องเรียนใหม่ทั้งหมด: ฟัง จำ แล้วนำคำเก่าหนึ่งคำมาใช้กับบทวันนี้</p></div><span>3–5 分钟</span></div>
    <div class="review-word-row">${reviewItems.map((item) => `<button onclick="speakChinese('${item.hanzi}')"><strong>${item.hanzi}</strong><span class="support-pinyin">${item.pinyin}</span><small class="support-thai">${item.thai}</small></button>`).join("")}</div>
    <div class="review-transfer"><strong>马上迁移</strong><p>任选一个旧词，和“${currentExample}”里的词进行替换或扩展。</p><p class="thai">เลือกคำเก่าหนึ่งคำ แล้วแทนหรือขยายคำในประโยคตัวอย่างของบทนี้</p></div>
  </section>`;
}

function renderUnitSpecialPractice(stageId) {
  const gameIndex = stageId <= 3 ? 14 : 15;
  const game = games[gameIndex];
  return `<section class="content-section special-practice">
    <div><p class="eyebrow">专项互动 · เกมฝึกเฉพาะจุด</p><h2>${game.name}</h2><p class="thai">${game.thai}</p><p>${game.desc}</p><p class="thai">${game.thaiDesc}</p></div>
    <button class="primary-button" onclick="openMiniGame(${gameIndex})">现在玩 →<small class="thai">เริ่มเล่น</small></button>
  </section>`;
}

function renderMilestone(stageId, unitIndex) {
  const key = `${stageId}-${unitIndex}`;
  const milestone = window.stageMilestones?.[key];
  if (!milestone) return "";
  const done = state.milestoneProgress[key] || [];
  return `
    <section class="milestone-section">
      <div class="milestone-head"><div><p class="eyebrow">阶段出口任务 · ภารกิจปลายช่วง</p><h2>${milestone.title}</h2><p class="thai">${milestone.thai}</p></div><strong>${done.length} / ${milestone.tasks.length}</strong></div>
      <p>${milestone.intro}</p><p class="thai">${milestone.thaiIntro}</p>
      <div class="milestone-tasks">
        ${milestone.tasks.map((task, index) => `
          <button class="milestone-task ${done.includes(index) ? "done" : ""}" onclick="toggleMilestoneTask('${key}', ${index})">
            <span>${done.includes(index) ? "✓" : index + 1}</span>
            <div><strong>${task[0]}</strong><small class="thai">${task[1]}</small><p>${task[2]}</p><p class="thai">${task[3]}</p></div>
          </button>`).join("")}
      </div>
      ${done.length === milestone.tasks.length ? `<div class="milestone-complete"><strong>这一站完成了，可以继续。</strong><span class="thai">ผ่านจุดนี้แล้ว ไปต่อได้เลย</span></div>` : ""}
    </section>`;
}

function toggleMilestoneTask(key, index) {
  const done = state.milestoneProgress[key] || [];
  state.milestoneProgress[key] = done.includes(index) ? done.filter((item) => item !== index) : [...done, index];
  localStorage.setItem("piu-milestones", JSON.stringify(state.milestoneProgress));
  render();
}

function lessonCard(lesson, currentId) {
  const completed = state.completed.includes(lesson.id);
  return `
    <button class="lesson-card ${completed ? "completed" : ""} ${lesson.id === currentId ? "current" : ""}" data-lesson="${lesson.id}" onclick="showLesson(${lesson.id})">
      <span class="lesson-number">${lesson.id}</span>
      <span class="lesson-status">${completed ? "✓ 已完成" : lesson.id === currentId ? "下一课" : "待探索"}</span>
      <h3>${lesson.title}</h3>
      <p class="thai">${lesson.thaiTitle}</p>
      <p>${lesson.focus}</p>
      <p class="thai">${lesson.thaiFocus}</p>
      <p class="card-focus">练习：${lesson.words}</p>
    </button>`;
}

function showLesson(id) {
  state.lessonId = Number(id);
  state.stageId = 1;
  localStorage.setItem("piu-current-stage", "1");
  setRoute("lesson");
}

function renderLessons() {
  const stage = learningStages.find((item) => item.id === state.stageId);
  const detailedUnits = window.stageCurriculum?.[stage.id] || [];
  return `
    ${pageHead("LEARNING PATH", "一步一步学，不把内容混在一起。", "先完成拼音，再进入认字、词句、对话和真实听读。点击阶段可查看该阶段学什么。", "เรียนตามลำดับ: พินอิน → ตัวอักษร → ประโยค → บทสนทนา → ฟังและอ่าน")}
    <section class="section">
      <div class="stage-tabs">
        ${learningStages.map((item) => `<button class="stage-tab ${item.id === state.stageId ? "active" : ""}" onclick="selectStage(${item.id})"><b>${item.number}</b><span>${item.title}</span><small>${item.thai}</small></button>`).join("")}
      </div>
      <div class="stage-summary">
        <div><p class="eyebrow">阶段 ${stage.number}</p><h2>${stage.title}</h2><p class="thai">${stage.thai}</p></div>
        <div><small>完成进度 · ความคืบหน้า ${getStageCompletedCount(stage.id)} / ${getStageUnitCount(stage.id)}</small><p>${stage.result}</p><p class="thai">${stage.thaiResult}</p></div>
      </div>
      ${state.stageId === 1
        ? `<div class="journey">${lessons.map((lesson) => lessonCard(lesson, -1)).join("")}</div>`
        : `<div class="unit-grid">${detailedUnits.map((unit, index) => `
            <button class="unit-card ${isUnitComplete(stage.id, index) ? "completed" : ""}" onclick="openUnit(${stage.id}, ${index})">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <h3>${unit.title}</h3>
              <p class="thai">${unit.thai}</p>
              <p>${unit.goal}</p><p class="thai">${unit.thaiGoal}</p>
              <small>${isUnitComplete(stage.id, index) ? "✓ 已完成 · 再复习" : "进入课程 →"}</small>
            </button>`).join("")}</div>`}
    </section>
    <section class="section formal-course-entry">
      <div><p class="eyebrow">NEXT COURSE · หลักสูตรถัดไป</p><h2>${window.levelOneCourse.title}</h2><p>${window.levelOneCourse.statusNote}</p><p class="thai">${window.levelOneCourse.thaiStatusNote}</p></div>
      <button class="primary-button" onclick="setRoute('level-one')">进入一级首单元 →<small class="thai">เข้าสู่หน่วยแรกระดับ 1</small></button>
    </section>`;
}

function selectStage(id) {
  state.stageId = Number(id);
  localStorage.setItem("piu-current-stage", state.stageId);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openStage(id) {
  state.stageId = Number(id);
  localStorage.setItem("piu-current-stage", state.stageId);
  setRoute("lessons");
}

function openUnit(stageId, unitIndex) {
  state.unitStage = Number(stageId);
  state.unitIndex = Number(unitIndex);
  state.stageId = Number(stageId);
  localStorage.setItem("piu-current-stage", state.stageId);
  setRoute("unit");
}

function renderUnitDetail(stageId, unitIndex) {
  const stage = learningStages.find((item) => item.id === stageId);
  const units = window.stageCurriculum[stageId];
  const unit = units[unitIndex];
  const stageLabel = `${stage.number} ${stage.title}`;
  const depth = getTeachingDepth(stageId, unitIndex, unit);
  const embeddedGames = getUnitGames(stageId, unitIndex, unit);
  const isComplete = isUnitComplete(stageId, unitIndex);
  return `
    <div class="lesson-layout unit-layout">
      <aside class="lesson-sidebar">
        <button class="text-button" onclick="selectStage(${stageId}); setRoute('lessons')">← 返回阶段目录</button>
        <p class="eyebrow">${stageLabel} · 第 ${unitIndex + 1} 课</p>
        <h1>${unit.title}</h1>
        <p class="thai">${unit.thai}</p>
        <div class="meta-list">
          <div class="meta-item"><small>学习顺序 · ลำดับการเรียน</small><strong>${learningStages.slice(0, stageId).map((item) => item.title).join(" → ")}</strong><span class="thai">${learningStages.slice(0, stageId).map((item) => item.thai).join(" → ")}</span></div>
          <div class="meta-item"><small>本课材料 · เนื้อหาในบท</small><strong>中文读音 · 拼音 · 泰语 · 练习</strong><span class="thai">เสียงจีน · พินอิน · ภาษาไทย · แบบฝึก</span></div>
        </div>
      </aside>
      <article class="lesson-content">
        <div class="outcome-band">
          <p class="eyebrow">本课目标 · เป้าหมาย</p>
          <h2>${unit.goal}</h2>
          <p class="thai">${unit.thaiGoal}</p>
        </div>

        ${renderSupportControl()}

        <section class="teaching-depth">
          <div class="depth-title"><p class="eyebrow">怎么讲，不只怎么读 · อธิบายให้เข้าใจ ไม่ใช่แค่อ่านตาม</p><h2>本课讲解重点</h2><p class="thai">ประเด็นอธิบายสำคัญของบทนี้</p></div>
          <div class="depth-steps">
            ${depth.steps.map((step, index) => `<div><b>0${index + 1}</b><span>${step}</span><small class="thai">${depth.thaiSteps[index]}</small></div>`).join("")}
          </div>
          <div class="depth-notes">
            <p><strong>这一课要讲透：</strong>${depth.specific}<span class="thai block-thai"><b>ประเด็นสำคัญ:</b> ${depth.thaiSpecific}</span></p>
            <p><strong>容易踩坑：</strong>${depth.mistake}<span class="thai block-thai"><b>จุดที่มักพลาด:</b> ${depth.thaiMistake}</span></p>
          </div>
        </section>

        <section class="content-section">
          <div class="section-heading"><div><h2>${stageId === 2 ? "本课汉字" : "核心内容"}</h2><p>${stageId === 2 ? "先听读音，再观察字形" : "点击播放，听完再跟读"}</p></div></div>
          <div class="learning-item-grid">
            ${unit.items.map((item) => `
              <article class="learning-item">
                <button class="play-button" onclick="speakChinese('${item.hanzi}')" aria-label="播放 ${item.hanzi}">▶</button>
                <strong class="content-text">${item.hanzi}</strong>
                <span class="pinyin-line support-pinyin">${item.pinyin}</span>
                <small class="support-thai">${item.thai}</small>
                ${vocabularyButton(item, stageId, unitIndex, "core")}
              </article>`).join("")}
          </div>
        </section>
        ${renderStandardLessonDepth(stageId, unitIndex)}
        ${renderLessonExampleBank(stageId, unitIndex)}
        ${renderEnrichment(window.stageEnrichment?.[stageId]?.[unitIndex], stageId, unitIndex)}
        ${renderSpiralReview(stageId, unitIndex)}

        ${renderEmbeddedGame(embeddedGames[0], "讲到这里就玩", { stageId, unitIndex, slot: 0 })}

        ${renderStrokeBoard(stageId, unitIndex)}

        <section class="content-section examples-section">
          <div class="section-heading"><div><h2>${stageId === 2 ? "认读示例" : stageId === 5 ? "听读材料" : "句型示例"}</h2><p>每条都可以单独播放</p></div></div>
          <div class="example-list">
            ${unit.examples.map((example) => `
              <article class="example-row">
                <button class="play-button" onclick="speakChinese('${example.zh}')" aria-label="播放示例">▶</button>
                <div><strong>${example.zh}</strong><span class="support-pinyin">${example.pinyin}</span><small class="support-thai">${example.thai}</small>${vocabularyButton(example, stageId, unitIndex, "example")}</div>
              </article>`).join("")}
          </div>
        </section>

        ${renderEmbeddedGame(embeddedGames[1], "准备输出前玩", { stageId, unitIndex, slot: 1 })}
        ${renderUnitSpecialPractice(stageId)}

        ${renderRelaxCorner(stageId, unitIndex)}

        ${renderStageMaterials(stageId, unitIndex)}

        <section class="practice-band">
          <div><p class="eyebrow">本课练习 · แบบฝึกหัด</p><h3>${unit.practice}</h3><p class="thai">${TH.unitPractices[stageId][unitIndex]}</p></div>
          <button class="secondary-button" onclick="speakChinese('${unit.examples[0].zh}')">再听一遍</button>
        </section>

        <section class="unit-flow level-flow">
          <div><b>LEVEL 1</b><span>有提示完成</span><small>可以看中文、拼音和泰语</small><small class="thai">ทำโดยมีตัวช่วย ดูภาษาจีน พินอิน และภาษาไทยได้</small></div>
          <div><b>LEVEL 2</b><span>减少一个提示</span><small>${stageId === 2 ? "遮住拼音认字" : "只看中文关键词"}</small><small class="thai">${stageId === 2 ? "ปิดพินอินแล้วจำตัวอักษร" : "ดูเฉพาะคำสำคัญภาษาจีน"}</small></div>
          <div><b>LEVEL 3</b><span>放进真实任务</span><small>${unit.practice}</small><small class="thai">${TH.unitPractices[stageId][unitIndex]}</small></div>
        </section>

        ${renderMilestone(stageId, unitIndex)}
        <div class="lesson-actions">
          <button class="${isComplete ? "secondary-button" : "primary-button"}" onclick="toggleUnitComplete(${stageId}, ${unitIndex})">${isComplete ? "✓ 本课已完成" : "完成本课"}</button>
          ${unitIndex > 0 ? `<button class="secondary-button" onclick="openUnit(${stageId}, ${unitIndex - 1})">上一课</button>` : ""}
          ${unitIndex < units.length - 1 ? `<button class="primary-button" onclick="openUnit(${stageId}, ${unitIndex + 1}); window.scrollTo({top:0, behavior:'smooth'})">下一课</button>` : `<button class="primary-button" onclick="selectStage(${Math.min(stageId + 1, 5)}); setRoute('lessons')">完成本阶段</button>`}
        </div>
      </article>
    </div>`;
}

function renderLessonDetail(id) {
  const lesson = lessons.find((item) => item.id === id);
  const isComplete = state.completed.includes(id);
  const timeline = id === 1 ? lessonOneTimeline : buildGenericTimeline(lesson);
  return `
    <div class="lesson-layout">
      <aside class="lesson-sidebar">
        <button class="text-button" data-back="lessons" onclick="setRoute('lessons')">← 返回课程</button>
        <p class="eyebrow">第 ${lesson.id} 课 · บทที่ ${lesson.id}</p>
        <h1>${lesson.title}</h1>
        <p class="thai">${lesson.thaiTitle}</p>
        <div class="meta-list">
          <div class="meta-item"><small>拼音重点 · จุดสำคัญพินอิน</small><strong>${lesson.focus}</strong><span class="thai">${lesson.thaiFocus}</span></div>
          <div class="meta-item"><small>练习音节 · พยางค์ฝึก</small><strong>${lesson.words}</strong></div>
          <div class="meta-item"><small>阶段边界 · ขอบเขตช่วงนี้</small><strong>只练听音、辨音和拼读，暂不考认字。</strong><span class="thai">ฝึกฟัง แยกเสียง และสะกดเท่านั้น ยังไม่ทดสอบการจำตัวอักษรจีน</span></div>
        </div>
      </aside>
      <article class="lesson-content">
        <div class="outcome-band">
          <p class="eyebrow">本课学会什么</p>
          <h2>${lesson.outcome}</h2>
          <p class="thai">${lesson.thaiOutcome}</p>
        </div>
        ${renderEnrichment(window.pinyinEnrichment?.[id - 1], 1, id - 1)}
        <section class="audio-practice">
          <div><p class="eyebrow">本课读音 · เสียงในบทนี้</p><h3>点一下，听一遍，再跟读。</h3></div>
          <div class="audio-list">
            ${lesson.audio.map((item) => `<button class="audio-chip" onclick="speakChinese('${item.speak}')"><span>▶</span><b>${item.label}</b></button>`).join("")}
          </div>
        </section>
        <div class="timeline">
          ${timeline.map((item, index) => `
            <section class="timeline-item">
              <div class="time">${item.time}<small> 分</small></div>
              <div>
                <h3>${item.title}</h3>
                <p class="thai">${item.thai}</p>
                <p>${item.learner}</p>
                <p class="thai">${getTimelineThai(id, index, "learner")}</p>
                ${state.mode === "teacher" ? `<div class="teacher-note"><strong>给 Hua 的提醒：</strong>${item.teacher}<span class="thai block-thai"><b>คำแนะนำสำหรับ Hua:</b> ${getTimelineThai(id, index, "teacher")}</span></div>` : ""}
              </div>
            </section>
            ${index === 1 ? renderEmbeddedGame(pinyinLessonGames[id - 1][0], "边讲边玩 1", { stageId: 1, unitIndex: id - 1, slot: 0 }) : ""}
            ${index === 4 ? renderEmbeddedGame(pinyinLessonGames[id - 1][1], "边讲边玩 2", { stageId: 1, unitIndex: id - 1, slot: 1 }) : ""}
          `).join("")}
        </div>
        <div class="outcome-band">
          <p class="eyebrow">下课挑战 · ภารกิจท้ายบท</p>
          <h3>${lesson.challenge}</h3>
          <p class="thai">${TH.lessonChallenges[id - 1]}</p>
          <p>完成即可，不比较速度；允许听第二次，也允许提示。</p>
          <p class="thai">ทำให้ครบก็พอ ไม่แข่งความเร็ว ฟังซ้ำหรือขอคำใบ้ได้</p>
        </div>
        ${renderMilestone(1, id - 1)}
        <div class="lesson-actions">
          <button class="primary-button" data-complete="${id}" onclick="toggleLesson(${id})">${isComplete ? "✓ 本课已完成" : "完成本课"}</button>
          <button class="secondary-button" onclick="startLearningRecording('第 ${id} 课挑战', 1, ${id - 1}, this)">● 录下挑战 <small>อัดเสียง</small></button>
          <button class="secondary-button" data-print onclick="window.print()">打印本课</button>
          ${id < 8 ? `<button class="secondary-button" data-next-lesson="${id + 1}" onclick="showLesson(${id + 1}); window.scrollTo({top: 0, behavior: 'smooth'})">查看下一课</button>` : ""}
        </div>
      </article>
    </div>`;
}

function renderEmbeddedGame(game, label, context) {
  const panelId = `mini-game-${context.stageId}-${context.unitIndex}-${context.slot}`;
  const modeLabel = context.slot === 0 ? "听音选卡" : "随机开口挑战";
  const modeThai = context.slot === 0 ? "ฟังแล้วเลือกการ์ด" : "สุ่มโจทย์แล้วพูด";
  return `
    <section class="embedded-game">
      <div class="game-flag">${label}<span>${context.slot === 0 ? "เล่นตรงนี้หลังอธิบาย" : "เล่นก่อนฝึกใช้จริง"}</span></div>
      <div class="embedded-game-head">
        <div><p class="eyebrow">${game.moment} · ${game.time}</p><p class="thai compact-thai">${context.slot === 0 ? "เล่นหลังเรียนเนื้อหาช่วงแรก" : "เล่นก่อนเริ่มฝึกพูดหรือทำภารกิจ"} · ${game.time.replace("分钟", " นาที")}</p><h3>${game.name}</h3><p class="thai">${game.thai || "กิจกรรมระหว่างเรียน"}</p></div>
        <span class="game-play-mark">PLAY</span>
      </div>
      <div class="game-instructions">
        <p><strong>准备：</strong>${game.setup}<span class="thai block-thai"><b>เตรียม:</b> ${getEmbeddedGameThai(game, context, "setup")}</span></p>
        <p><strong>怎么玩：</strong>${game.play}<span class="thai block-thai"><b>วิธีเล่น:</b> ${getEmbeddedGameThai(game, context, "play")}</span></p>
        <p><strong>什么时候结束：</strong>${game.finish}<span class="thai block-thai"><b>จบเมื่อ:</b> ${getEmbeddedGameThai(game, context, "finish")}</span></p>
      </div>
      <div class="mini-game-launch">
        <div><strong>${modeLabel}</strong><small>${modeThai} · 在线完成 3 题</small></div>
        <button class="primary-button" onclick="startEmbeddedGame(${context.stageId}, ${context.unitIndex}, ${context.slot})">开始互动</button>
      </div>
      <div class="mini-game-panel" id="${panelId}" aria-live="polite"></div>
    </section>`;
}

function getTimelineThai(lessonId, index, role) {
  const source = lessonId === 1
    ? (role === "learner" ? TH.lessonOneLearner : TH.lessonOneTeacher)
    : (role === "learner" ? TH.genericTimelineLearner : TH.genericTimelineTeacher);
  return source[index];
}

function getEmbeddedGameThai(game, context, field) {
  if (context.stageId === 1) return game[`thai${field[0].toUpperCase()}${field.slice(1)}`];
  const practice = TH.unitPractices[context.stageId][context.unitIndex];
  const rules = {
    2: [
      ["เขียนตัวอักษรของบทนี้ลงบนการ์ดใบเล็ก", "คนหนึ่งกดฟังเสียงจากเว็บ อีกคนแตะตัวอักษรที่ตรงกัน แล้วอ่านซ้ำหนึ่งครั้ง", "ตัวอักษรทุกตัวปรากฏอย่างน้อยหนึ่งครั้ง เก็บตัวที่วางผิดไว้ฝึกต่อ"],
      ["ใช้การ์ดตัวอักษร กระดาษ หรือนิ้ว", practice, "ทำตัวอักษรในบทนี้ได้ถูกอย่างน้อย 4 ตัว แล้วทบทวนเฉพาะตัวที่ยังสับสน"],
    ],
    3: [
      ["ตัดประโยคตัวอย่างเป็นการ์ดคำ", "สลับการ์ดแล้วให้ Piu เรียงตามลำดับจีน Hua ใช้คำถามชี้นำแทนการบอกคำตอบ", "เรียงและอ่านได้ถูก แล้วเปลี่ยนคำหนึ่งคำในประโยค"],
      ["ใช้คำศัพท์ของบทนี้", `${practice} ผลัดกันตั้งคำถามและต้องถามกลับหลังตอบ`, "ทำบทสนทนาจริง 4 รอบ โดยอย่างน้อย 2 ประโยคไม่ดูตัวอย่าง"],
    ],
    4: [
      ["ดูเฉพาะคำสำคัญของบทนี้", "Hua บอกสถานการณ์แบบสุ่ม Piu เลือกประโยคตอบภายใน 3 วินาที พูดช้าได้แต่ไม่แปลทั้งประโยคก่อน", "ตอบ 6 ครั้งและเหมาะกับสถานการณ์อย่างน้อย 4 ครั้ง"],
      ["เตรียมการ์ดบทบาท 2 ใบและข้อมูลจริงหนึ่งอย่าง", `${practice} รอบแรกดูประโยคเต็ม รอบสองดูเฉพาะคำสำคัญ รอบสามสลับบทบาทและเปลี่ยนข้อมูล`, "ทำบทสนทนาโดยไม่อ่านตาม 2 รอบ และแก้เฉพาะจุดที่กระทบความเข้าใจที่สุด"],
    ],
    5: [
      ["แบ่งกระดาษเป็น 4 ช่อง: คน เวลา สถานที่ การกระทำ", "ฟังหนึ่งรอบแล้วชี้ช่องเมื่อได้ยินข้อมูลสำคัญ ไม่หยุดเสียงและไม่ต้องเขียนประโยคเต็ม", "จับข้อมูลสำคัญได้อย่างน้อย 2 อย่าง แล้วจึงฟังรอบสอง"],
      ["เก็บไว้เพียง 3 คำสำคัญ", `${practice} Hua ใช้คำถามช่วยได้ แต่ไม่แปลต้นฉบับทีละประโยค`, "Piu เล่าข้อมูลด้วยคำของตนเองได้ 2 ประโยค ไม่ต้องเหมือนต้นฉบับ"],
    ],
  };
  const fieldIndex = { setup: 0, play: 1, finish: 2 }[field];
  return rules[context.stageId][context.slot][fieldIndex];
}

function getInteractivePool(stageId, unitIndex) {
  if (stageId === 1) {
    return lessons[unitIndex].audio.map((item) => ({
      label: item.label,
      pinyin: item.label,
      thai: "ฟังแล้วเลือกเสียงที่ตรงกัน",
      speak: item.speak,
    }));
  }
  return window.stageCurriculum[stageId][unitIndex].items.map((item) => ({
    label: item.hanzi,
    pinyin: item.pinyin,
    thai: item.thai,
    speak: item.hanzi,
  }));
}

function shuffledIndexes(length) {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let i = indexes.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
  }
  return indexes;
}

function getMiniGamePanel(stageId, unitIndex, slot) {
  return document.querySelector(`#mini-game-${stageId}-${unitIndex}-${slot}`);
}

function startEmbeddedGame(stageId, unitIndex, slot) {
  const key = `${stageId}-${unitIndex}-${slot}`;
  state.gameSessions[key] = { completed: 0, targetIndex: -1 };
  nextEmbeddedRound(stageId, unitIndex, slot);
}

function nextEmbeddedRound(stageId, unitIndex, slot) {
  const key = `${stageId}-${unitIndex}-${slot}`;
  const session = state.gameSessions[key];
  const pool = getInteractivePool(stageId, unitIndex);
  const available = shuffledIndexes(pool.length).filter((index) => index !== session.targetIndex);
  session.targetIndex = available[0] ?? 0;
  const target = pool[session.targetIndex];
  const panel = getMiniGamePanel(stageId, unitIndex, slot);

  if (slot === 0) {
    const optionIndexes = shuffledIndexes(pool.length).filter((index) => index !== session.targetIndex).slice(0, 3);
    optionIndexes.push(session.targetIndex);
    const options = shuffledIndexes(optionIndexes.length).map((index) => optionIndexes[index]);
    panel.innerHTML = `
      <div class="mini-game-status"><b>第 ${session.completed + 1} / 3 题</b><span>ฟังแล้วเลือกคำตอบ</span></div>
      <button class="mini-audio-button" onclick="replayEmbeddedTarget(${stageId}, ${unitIndex}, ${slot})" aria-label="再听一次">▶</button>
      <p class="mini-game-prompt">先听，不看答案。เลือกการ์ดที่ได้ยิน</p>
      <div class="mini-choice-grid">
        ${options.map((index) => `<button onclick="answerEmbeddedGame(${stageId}, ${unitIndex}, ${slot}, ${index})">${pool[index].label}</button>`).join("")}
      </div>`;
    speakChinese(target.speak);
    return;
  }

  panel.innerHTML = `
    <div class="mini-game-status"><b>第 ${session.completed + 1} / 3 轮</b><span>อ่านหรือพูดออกเสียง</span></div>
    <div class="speak-challenge-card">
      <strong>${target.label}</strong><span>${target.pinyin}</span><small>${target.thai}</small>
    </div>
    <p class="mini-game-prompt">先自己说一遍，再听示范；只挑一个重点调整。</p>
    <div class="mini-game-actions">
      <button class="secondary-button" onclick="replayEmbeddedTarget(${stageId}, ${unitIndex}, ${slot})">▶ 听示范</button>
      <button class="primary-button" onclick="completeSpeakRound(${stageId}, ${unitIndex}, ${slot})">我说完了</button>
    </div>`;
}

function replayEmbeddedTarget(stageId, unitIndex, slot) {
  const session = state.gameSessions[`${stageId}-${unitIndex}-${slot}`];
  if (!session) return;
  speakChinese(getInteractivePool(stageId, unitIndex)[session.targetIndex].speak);
}

function answerEmbeddedGame(stageId, unitIndex, slot, answerIndex) {
  const key = `${stageId}-${unitIndex}-${slot}`;
  const session = state.gameSessions[key];
  const panel = getMiniGamePanel(stageId, unitIndex, slot);
  const target = getInteractivePool(stageId, unitIndex)[session.targetIndex];
  if (answerIndex !== session.targetIndex) {
    panel.querySelector(".mini-game-prompt").innerHTML = `<span class="try-again">还差一点，再听一次。ฟังอีกครั้งแล้วลองใหม่</span>`;
    replayEmbeddedTarget(stageId, unitIndex, slot);
    return;
  }
  session.completed += 1;
  if (session.completed >= 3) {
    showEmbeddedGameComplete(stageId, unitIndex, slot);
    return;
  }
  panel.innerHTML = `
    <div class="mini-feedback success"><b>听对了：${target.label}</b><span>${target.pinyin} · ${target.thai}</span></div>
    <button class="primary-button" onclick="nextEmbeddedRound(${stageId}, ${unitIndex}, ${slot})">下一题</button>`;
}

function completeSpeakRound(stageId, unitIndex, slot) {
  const session = state.gameSessions[`${stageId}-${unitIndex}-${slot}`];
  session.completed += 1;
  if (session.completed >= 3) {
    showEmbeddedGameComplete(stageId, unitIndex, slot);
    return;
  }
  nextEmbeddedRound(stageId, unitIndex, slot);
}

function showEmbeddedGameComplete(stageId, unitIndex, slot) {
  const panel = getMiniGamePanel(stageId, unitIndex, slot);
  panel.innerHTML = `
    <div class="mini-game-complete"><b>3 题完成</b><span>ทำครบ 3 ข้อแล้ว</span><p>停在成功这里，不追加纠错。</p></div>
    <button class="secondary-button" onclick="startEmbeddedGame(${stageId}, ${unitIndex}, ${slot})">再玩一次</button>`;
}

function getUnitGames(stageId, unitIndex, unit) {
  const itemNames = unit.items.slice(0, 4).map((item) => item.hanzi).join("、");
  if (stageId === 2) {
    const secondNames = ["空中遥控笔", "笔顺接力", "字形剪影", "左右找室友", "上下叠叠乐", "围墙开哪边", "偏旁停车场", "易错字拍卖"];
    const secondPlay = [
      "Hua 用手指在空中写一笔，Piu 说笔画名和方向，再交换。",
      "两人轮流只写一个笔画，写错顺序就退回上一笔并说规则。",
      "遮住字的一小部分，只看轮廓猜字，再指出关键笔画。",
      "把左右部件分开，计时配回正确汉字，并比较左右宽窄。",
      "把上下部件像积木一样叠好，说出上小下大或上大下小。",
      "看到包围字先指出开口方向，再决定最后一笔是什么。",
      "把字送进亻、口、女、氵四个停车场，并说意义线索。",
      "每人拿10枚筹码押注最容易读错的字，翻卡验证后解释原因。"
    ];
    return [
      { moment: "认识前三个字后", time: "4分钟", name: "听音拍字", setup: `把“${itemNames}”写在小卡上`, play: "一人点网页播放读音，另一人尽快拍到对应字；拍中后必须再读一次。", finish: "每张卡至少出现一次，放错的字留下来再练。" },
      { moment: "讲完字形规则后", time: "6分钟", name: secondNames[unitIndex], setup: "使用本课字卡、白纸或手指即可", play: secondPlay[unitIndex], finish: `能正确处理本课至少4个字；重点复盘“${unit.items[0].hanzi}”和“${unit.items[1].hanzi}”。` }
    ];
  }
  if (stageId === 3) {
    const names = ["人物换座", "三个盒子", "房间找茬", "动作哑剧", "程度温度计", "采访接力", "答案变问题", "四格句子跑道"];
    return [
      { moment: "讲完第一个句型后", time: "5分钟", name: "句子排队", setup: `把“${unit.examples[0].zh}”按词剪成卡片`, play: "打乱词卡，Piu 排回正确语序；Hua 只问“谁先来、动作在哪儿”，不直接给答案。", finish: "能排对并完整读出，再替换其中一个词。" },
      { moment: "开始自由造句前", time: "6分钟", name: names[unitIndex], setup: `使用本课词语：${itemNames}`, play: `${unit.practice} 两人轮流出题，回答后必须反问一次。`, finish: "完成4轮真实问答，其中至少两句不看示例。" }
    ];
  }
  if (stageId === 4) {
    return [
      { moment: "学完三个关键表达后", time: "4分钟", name: "三秒回应", setup: `只看关键词：${itemNames}`, play: "Hua 随机说一句情境提示，Piu 在三秒内选一个关键表达回应；可以慢说，但不能先翻译整句。", finish: "完成6次回应，其中4次表达合适即可。" },
      { moment: "示范对话之后", time: "8分钟", name: "角色换位", setup: "准备两张角色卡和一个真实信息", play: `${unit.practice} 第一轮可看完整句，第二轮只看关键词，第三轮交换角色并替换时间、地点或人物。`, finish: "完成两轮不照读的对话；只纠正最影响理解的一处。" }
    ];
  }
  return [
    { moment: "第一次接触材料时", time: "4分钟", name: "关键词狙击", setup: "纸上写“人、时间、地点、动作”四格", play: "播放内容一次，听到关键信息就指向对应格；不暂停，也不要求写完整句。", finish: "至少抓到两个关键信息，然后再听第二遍。" },
    { moment: "理解主要信息后", time: "7分钟", name: "信息接力", setup: "只保留三个关键词", play: `${unit.practice} Hua 只能用问题提示，不能逐句翻译原文。`, finish: "Piu 能用自己的话输出两句信息，不要求复刻原句。" }
  ];
}

function getTeachingDepth(stageId, unitIndex, unit) {
  const stageGuides = {
    2: ["先认后写", "看结构和部件", "最后才落笔"],
    3: ["先看句子功能", "再拆中文语序", "最后替换词语"],
    4: ["先听完整对话", "圈出可替换信息", "脱离台词再说"],
    5: ["第一遍抓大意", "第二遍找证据", "第三遍完成输出"],
  };
  const mistakes = {
    2: "不要一上来抄很多遍。认不出时先回到部件、方向和读音。",
    3: "不要按泰语或英语顺序逐词翻译，先保住中文句子骨架。",
    4: "不要背唯一标准答案。表达目的完成后，再处理一两个关键错误。",
    5: "不要因一个生词停住整段内容，先完成本轮听读任务。",
  };
  return {
    steps: stageGuides[stageId],
    thaiSteps: TH.stageGuideSteps[stageId],
    specific: unitSpecificNotes[stageId][unitIndex],
    thaiSpecific: TH.unitSpecific[stageId][unitIndex],
    mistake: mistakes[stageId],
    thaiMistake: TH.stageMistakes[stageId],
  };
}

function buildGenericTimeline(lesson) {
  return [
    { time: "0–5", title: "旧音热身", thai: "ทบทวนเสียงเดิม", learner: "从上一课抽三个音节：先听辨，再跟读。第一遍只判断，不纠正。", teacher: "热身只复习已经学过的声音，不提前混入汉字和新句型。" },
    { time: "5–15", title: "听辨新声音", thai: "ฟังและแยกเสียงใหม่", learner: `先听本课重点：${lesson.focus}。用手势、纸条或口型判断，不要求马上跟读。`, teacher: "采用最小对比，每轮不超过两个相近音。" },
    { time: "15–28", title: "看口型，找位置", thai: "ดูรูปปากและตำแหน่งลิ้น", learner: "观察嘴唇、舌尖或舌根的位置，再模仿完整声音。", teacher: "发音解释要短，演示后立刻让 Piu 感受气流和舌位。" },
    { time: "28–40", title: "拼读音节", thai: "ฝึกสะกดพยางค์", learner: `练习：${lesson.words}。先慢拼，再直接读出完整音节。`, teacher: "一次只处理一个难点，声母和声调同时出错时先改声母。" },
    { time: "40–50", title: "本课辨音游戏", thai: "เกมแยกเสียง", learner: "从游戏中心选择本课推荐游戏，轮流出题和回答。", teacher: "胜负标准是听辨或完成拼读，不加入认字要求。" },
    { time: "50–56", title: "听读音并录音", thai: "ฟังและอัดเสียง", learner: "点击本课读音，每个跟读一次；录下最满意的一组。", teacher: "设备读音只作参考。后续应替换为真人普通话录音。" },
    { time: "56–60", title: "出口小挑战", thai: "ภารกิจท้ายบท", learner: lesson.challenge, teacher: "给出一条具体反馈，再选出明天练习的三个音节。" },
  ];
}

function speakChinese(text, rate = 0.62) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = rate;
  speechSynthesis.speak(utterance);
}

function renderPinyin() {
  const visible = state.filter === "all" ? pinyinCards : pinyinCards.filter((card) => card.group === state.filter);
  return `
    ${pageHead("PRONUNCIATION LAB", "63项拼音，一张完整声音地图。", "23个声母、24个韵母和16个整体认读音节已经补齐。每张卡都包含固定示范音、发音提示、例词和泰语说明。", "พยัญชนะต้น 23 ตัว สระ 24 ตัว และพยางค์อ่านรวม 16 ตัว พร้อมเสียงตัวอย่าง")}
    <section class="section">
      <div class="tone-lab">
        <div><p class="eyebrow">四声与轻声 · วรรณยุกต์</p><h2>先听方向，再模仿声音</h2></div>
        <div class="tone-audio-grid">
          ${window.toneAudio.map((tone) => `<button class="tone-audio-button" onclick="playAudio('${tone.audio}')"><span>▶</span><b>${tone.label}</b><small>${tone.thai}</small></button>`).join("")}
        </div>
      </div>
      <div class="tone-recorder">
        <div><p class="eyebrow">录音对比 · อัดเสียงเทียบ</p><h3>录一组 mā / má / mǎ / mà，再回放对比</h3></div>
        <div class="tone-audio-grid">
          ${["mā", "má", "mǎ", "mà"].map((t) => `<button class="tone-audio-button" onclick="speakChinese('${t}')"><span>▶</span><b>${t}</b></button>`).join("")}
        </div>
        <button class="secondary-button" id="toneRecBtn" onclick="startToneRecording()">🔴 开始录音（读四个声调）</button>
        <p class="thai">กดเล่นเสียงตัวอย่าง แล้วอัดเสียงตัวเองอ่าน 4 เสียง เพื่อเทียบกับต้นแบบ</p>
      </div>
      <div class="filter-row" aria-label="筛选拼音卡">
        <button class="filter-chip ${state.filter === "all" ? "active" : ""}" data-filter="all" onclick="setFilter('all')">全部 63</button>
        <button class="filter-chip ${state.filter === "initial" ? "active" : ""}" data-filter="initial" onclick="setFilter('initial')">声母 23</button>
        <button class="filter-chip ${state.filter === "final" ? "active" : ""}" data-filter="final" onclick="setFilter('final')">韵母 24</button>
        <button class="filter-chip ${state.filter === "whole" ? "active" : ""}" data-filter="whole" onclick="setFilter('whole')">整体认读 16</button>
      </div>
      <div class="pinyin-grid">
        ${visible.map((card, index) => `
          <button class="pinyin-card" data-pinyin="${pinyinCards.indexOf(card)}" onclick="openPinyinCard(${pinyinCards.indexOf(card)})">
            <span class="pinyin-symbol">${card.symbol}</span>
            <b>${card.label}</b><small>${card.thai}</small>
          </button>`).join("")}
      </div>
    </section>`;
}

function renderGames() {
  return `
    ${pageHead("PLAY", "游戏不是奖励，是练习本身。", "每个游戏都短、可重复、有明确结束条件。输赢只增加趣味，不用来评价发音能力。", "เกมคือส่วนหนึ่งของการฝึก ไม่ใช่รางวัล")}
    <section class="section">
      <div class="game-grid">
        ${games.map((game, index) => `
          <article class="game-card">
            <span class="game-index">GAME ${String(index + 1).padStart(2, "0")}</span>
            <h3>${game.name}</h3>
            <p class="thai">${game.thai}</p>
            <p>${game.desc}</p>
            <p class="thai">${game.thaiDesc}</p>
            <p class="game-meta">${game.lesson} · ${game.time}<span class="thai block-thai">${gameLessonThai(game.lesson)} · ${game.time.replace("分钟", " นาที")}</span></p>
            ${window.playableGames[index] ? `<button class="primary-button play-online" onclick="openMiniGame(${index})">在线玩 →<small class="thai">เล่นออนไลน์</small></button>` : ""}
          </article>`).join("")}
      </div>
    </section>`;
}

function gameLessonThai(lesson) {
  if (lesson.includes("阶段")) return `ใช้ในช่วงที่ ${lesson.replace(/\D/g, "")}`;
  const range = lesson.replace("第", "").replace("课", "").replace("、", " และ ");
  return `ใช้ในบทที่ ${range}`;
}

const practiceSets = {
  1: [
    { id: "listen", icon: "耳", title: "听 3 分钟", thai: "ฟัง 3 นาที", text: "听今天的 5 个音节，只判断声调或声母。" },
    { id: "speak", icon: "声", title: "说 3 分钟", thai: "พูด 3 นาที", text: "跟读 4 个音节，一次只调整一个发音点。" },
    { id: "type", icon: "键", title: "打 2 分钟", thai: "พิมพ์ 2 นาที", text: "用拼音输入法打出今天的 3 个生活词。" },
    { id: "find", icon: "查", title: "查 2 分钟", thai: "ค้น 2 นาที", text: "找一个真正想说的词，听音并标出声调。" },
  ],
  2: [
    { id: "listen", icon: "耳", title: "听字 2 分钟", thai: "ฟังตัวอักษร 2 นาที", text: "播放 5 个已学汉字，只听音找字。" },
    { id: "shape", icon: "形", title: "认字 3 分钟", thai: "จำตัวอักษร 3 นาที", text: "遮住拼音，看结构或偏旁认出 5 个字。" },
    { id: "write", icon: "写", title: "写字 3 分钟", thai: "เขียน 3 นาที", text: "选 3 个字，先空写再按笔顺写一遍。" },
    { id: "review", icon: "查", title: "复盘 2 分钟", thai: "ทบทวน 2 นาที", text: "只留下今天最容易混淆的 2 个字。" },
  ],
  3: [
    { id: "build", icon: "词", title: "搭词 2 分钟", thai: "ต่อคำ 2 นาที", text: "用本课词语组成 3 个有意义的搭配。" },
    { id: "order", icon: "序", title: "排句 3 分钟", thai: "เรียงประโยค 3 นาที", text: "打乱两句话，再按中文语序排回来。" },
    { id: "ask", icon: "问", title: "问答 3 分钟", thai: "ถามตอบ 3 นาที", text: "说一个问题并回答，再反问 Hua 一次。" },
    { id: "type", icon: "键", title: "打字 2 分钟", thai: "พิมพ์ 2 นาที", text: "把今天最好用的一句话发到练习框里。" },
  ],
  4: [
    { id: "listen", icon: "耳", title: "听场景 2 分钟", thai: "ฟังสถานการณ์ 2 นาที", text: "听一句情境提示，只抓人物和目的。" },
    { id: "reply", icon: "答", title: "三秒回应 3 分钟", thai: "ตอบใน 3 วินาที", text: "不先翻译，用已学表达快速回应 5 次。" },
    { id: "role", icon: "演", title: "换角色 3 分钟", thai: "สลับบทบาท 3 นาที", text: "同一场景说两轮，第二轮交换角色。" },
    { id: "message", icon: "聊", title: "真实消息 2 分钟", thai: "ข้อความจริง 2 นาที", text: "写一句今天真实能用的中文消息。" },
  ],
  5: [
    { id: "listen", icon: "耳", title: "抓重点 3 分钟", thai: "จับใจความ 3 นาที", text: "听一小段内容，只记人、时间、地点或动作。" },
    { id: "read", icon: "读", title: "读材料 2 分钟", thai: "อ่าน 2 นาที", text: "读一条真实消息，不因生词停下来。" },
    { id: "retell", icon: "说", title: "复述 3 分钟", thai: "เล่าซ้ำ 3 นาที", text: "只看 3 个关键词，用自己的话说两句。" },
    { id: "write", icon: "写", title: "写两句 2 分钟", thai: "เขียน 2 ประโยค", text: "写清今天发生的事和自己的感受。" },
  ],
};

async function refreshLearningData(shouldRender = true) {
  if (!window.LearningStore) return;
  try {
    const [vocabulary, recordings] = await Promise.all([
      LearningStore.listVocabulary(),
      LearningStore.listRecordings(),
    ]);
    state.vocabulary = vocabulary.sort((a, b) => String(a.dueDate).localeCompare(String(b.dueDate)));
    state.recordings = recordings.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    state.learningDataReady = true;
    if (shouldRender) render();
  } catch (error) {
    state.learningDataReady = true;
    console.warn("学习档案读取失败", error);
    if (shouldRender) render();
  }
}

async function toggleVocabularyFromButton(button) {
  const id = button.dataset.id;
  const existing = state.vocabulary.find((item) => item.id === id);
  if (existing) {
    await LearningStore.deleteVocabulary(id);
  } else {
    const now = new Date().toISOString();
    await LearningStore.saveVocabulary({
      id,
      zh: button.dataset.zh,
      pinyin: button.dataset.pinyin,
      thai: button.dataset.thai,
      stageId: Number(button.dataset.stage),
      unitIndex: Number(button.dataset.unit),
      source: button.dataset.source,
      intervalIndex: 0,
      dueDate: localDateKey(),
      createdAt: now,
      lastReviewedAt: null,
    });
  }
  await refreshLearningData();
}

function dateAfterDays(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

async function reviewVocabulary(id, rating) {
  const item = state.vocabulary.find((entry) => entry.id === id);
  if (!item) return;
  const intervals = [1, 3, 7, 14];
  let intervalIndex = Number(item.intervalIndex) || 0;
  if (rating === "again") intervalIndex = 0;
  if (rating === "some") intervalIndex = Math.min(intervalIndex + 1, intervals.length - 1);
  if (rating === "know") intervalIndex = Math.min(intervalIndex + 2, intervals.length - 1);
  await LearningStore.saveVocabulary({
    ...item,
    intervalIndex,
    dueDate: dateAfterDays(intervals[intervalIndex]),
    lastReviewedAt: new Date().toISOString(),
  });
  await refreshLearningData();
}

function renderVocabularyReview() {
  if (!state.learningDataReady) return `<section class="section personal-learning"><p>正在打开学习档案…</p><p class="thai">กำลังเปิดสมุดการเรียน…</p></section>`;
  const due = state.vocabulary.filter((item) => !item.dueDate || item.dueDate <= localDateKey());
  const upcoming = state.vocabulary.length - due.length;
  return `
    <section class="section personal-learning">
      <div class="section-heading"><div><h2>我的生词复习</h2><p>คำศัพท์ของฉัน</p></div><span>${due.length} 个今天复习 · วันนี้ ${due.length} คำ</span></div>
      ${state.vocabulary.length === 0 ? `<div class="empty-learning"><strong>还没有收藏词语</strong><p>在课程里点“+ 收藏”，它会按 1 / 3 / 7 / 14 天回来。</p><p class="thai">กด “เก็บคำ” ในบทเรียน คำนั้นจะกลับมาให้ทบทวนใน 1 / 3 / 7 / 14 วัน</p></div>` : ""}
      ${due.length ? `<div class="review-grid">${due.map((item) => `
        <article class="review-card">
          <button class="play-button" onclick="speakChinese('${item.zh.replace(/'/g, "")}')">▶</button>
          <strong>${item.zh}</strong><span>${item.pinyin}</span><small>${item.thai}</small>
          <div class="review-actions">
            <button onclick="reviewVocabulary('${escapeAttribute(item.id)}', 'again')">还不熟<small>ยังไม่คล่อง</small></button>
            <button onclick="reviewVocabulary('${escapeAttribute(item.id)}', 'some')">有点熟<small>เริ่มคล่อง</small></button>
            <button onclick="reviewVocabulary('${escapeAttribute(item.id)}', 'know')">会了<small>จำได้แล้ว</small></button>
          </div>
        </article>`).join("")}</div>` : state.vocabulary.length ? `<div class="empty-learning"><strong>今天的生词复习完成了</strong><p>还有 ${upcoming} 个词会在以后回来。</p><p class="thai">ทบทวนวันนี้ครบแล้ว อีก ${upcoming} คำจะกลับมาในวันถัดไป</p></div>` : ""}
    </section>`;
}

function renderRecordingPortfolio() {
  const tags = [["tone", "声调", "วรรณยุกต์"], ["initial", "声母", "พยัญชนะต้น"], ["final", "韵母", "สระ"], ["fluency", "流利度", "ความคล่อง"]];
  return `
    <section class="section personal-learning">
      <div class="section-heading"><div><h2>我的录音作品</h2><p>ผลงานเสียงของฉัน</p></div><span>${state.recordings.length} 条 · ${state.recordings.length} รายการ</span></div>
      <p>保留每次开口的变化。Hua 最多选两个重点，不做机器评分。</p><p class="thai">เก็บพัฒนาการทุกครั้ง Hua เลือกจุดฝึกไม่เกิน 2 จุด และไม่มีการให้คะแนนด้วยเครื่อง</p>
      ${state.recordings.length === 0 ? `<div class="empty-learning"><strong>第一条录音会出现在这里</strong><p>可在发音页录四声，或在课程末尾录挑战。</p><p class="thai">อัดวรรณยุกต์ในหน้าออกเสียง หรืออัดภารกิจท้ายบท</p></div>` : `<div class="recording-list">${state.recordings.map((recording) => `
        <article class="recording-row">
          <button class="recording-play" onclick="playSavedRecording('${recording.id}')" aria-label="播放录音">▶</button>
          <div><strong>${recording.prompt}</strong><small>${new Date(recording.createdAt).toLocaleString("zh-CN")}</small><div class="focus-tags">${tags.map((tag) => `<button class="${(recording.focusTags || []).includes(tag[0]) ? "active" : ""}" onclick="toggleRecordingTag('${recording.id}', '${tag[0]}')">${tag[1]}<small>${tag[2]}</small></button>`).join("")}</div></div>
          <button class="delete-recording" onclick="deleteSavedRecording('${recording.id}')">删除<small>ลบ</small></button>
        </article>`).join("")}</div>`}
      <p class="local-note">录音只保存在这台设备，不随进度文件导出。<span class="thai">ไฟล์เสียงเก็บไว้ในอุปกรณ์นี้เท่านั้น และไม่รวมในการส่งออกความคืบหน้า</span></p>
    </section>`;
}

async function playSavedRecording(id) {
  const recording = await LearningStore.getRecording(id);
  if (!recording?.blob) return;
  const url = URL.createObjectURL(recording.blob);
  const audio = new Audio(url);
  const cleanup = () => URL.revokeObjectURL(url);
  audio.addEventListener("ended", cleanup, { once: true });
  audio.addEventListener("error", cleanup, { once: true });
  audio.play().catch(cleanup);
}

async function toggleRecordingTag(id, tag) {
  const recording = await LearningStore.getRecording(id);
  if (!recording) return;
  const current = recording.focusTags || [];
  const focusTags = current.includes(tag) ? current.filter((item) => item !== tag) : current.length < 2 ? [...current, tag] : current;
  await LearningStore.saveRecording({ ...recording, focusTags });
  await refreshLearningData();
}

async function deleteSavedRecording(id) {
  await LearningStore.deleteRecording(id);
  await refreshLearningData();
}

function renderPractice() {
  const tasks = practiceSets[state.stageId];
  const completedTasks = state.practiceByStage[state.stageId] || [];
  const stage = learningStages.find((item) => item.id === state.stageId);
  return `
    ${pageHead("10 MINUTES", `${stage.title}：今天只练十分钟。`, "任务会跟着当前学习阶段变化。四件小事做完就停，明天自动重新开始。", "แบบฝึกจะเปลี่ยนตามช่วงที่เรียน ทำครบแล้วพัก พรุ่งนี้เริ่มใหม่")}
    ${renderVocabularyReview()}
    ${renderRecordingPortfolio()}
    <section class="section">
      <div class="stage-tabs practice-stage-tabs">
        ${learningStages.map((item) => `<button class="stage-tab ${item.id === state.stageId ? "active" : ""}" onclick="selectPracticeStage(${item.id})"><b>${item.number}</b><span>${item.title}</span><small>${item.thai}</small></button>`).join("")}
      </div>
      <div class="practice-board">
        ${tasks.map((task, index) => `
          <article class="practice-task ${completedTasks.includes(task.id) ? "done" : ""}">
            <span class="task-icon">${completedTasks.includes(task.id) ? "✓" : task.icon}</span>
            <h3>${task.title}</h3>
            <p class="thai">${task.thai}</p>
            <p>${task.text}</p>
            <p class="thai">${TH.practiceTexts[state.stageId][index]}</p>
            <button class="${completedTasks.includes(task.id) ? "secondary-button" : "primary-button"}" data-task="${task.id}" onclick="togglePractice('${task.id}')">${completedTasks.includes(task.id) ? "✓ 已完成" : "完成"}</button>
          </article>`).join("")}
      </div>
      <div class="streak">
        ${["一", "二", "三", "四", "五", "六", "日"].map((day, i) => `<div class="day"><div class="day-dot">${i === (new Date().getDay() + 6) % 7 && completedTasks.length === 4 ? "✓" : i + 1}</div><small>周${day}</small></div>`).join("")}
      </div>
    </section>
    ${renderMistakeBoard()}
    ${renderBackupSection()}`;
}

function render() {
  document.body.dataset.mode = state.mode;
  document.body.dataset.support = state.supportLevel;
  document.querySelectorAll("[data-mode]").forEach((button) => button.classList.toggle("active", button.dataset.mode === state.mode));
  if (state.route === "home") main.innerHTML = renderHome();
  if (state.route === "lessons") main.innerHTML = renderLessons();
  if (state.route === "lesson") main.innerHTML = renderLessonDetail(state.lessonId);
  if (state.route === "unit") main.innerHTML = renderUnitDetail(state.unitStage, state.unitIndex);
  if (state.route === "level-one") main.innerHTML = renderLevelOneCatalog();
  if (state.route === "level-one-lesson") main.innerHTML = renderLevelOneLesson(state.levelOneIndex);
  if (state.route === "pinyin") main.innerHTML = renderPinyin();
  if (state.route === "games") main.innerHTML = renderGames();
  if (state.route === "practice") main.innerHTML = renderPractice();
  if (state.route === "life") main.innerHTML = renderLife();
}

function setFilter(filter) {
  state.filter = filter;
  render();
}

function toggleLesson(id) {
  state.completed = state.completed.includes(id) ? state.completed.filter((item) => item !== id) : [...state.completed, id];
  localStorage.setItem("piu-lessons", JSON.stringify(state.completed));
  render();
}

function toggleUnitComplete(stageId, unitIndex) {
  const key = unitProgressKey(stageId, unitIndex);
  state.unitCompleted = state.unitCompleted.includes(key)
    ? state.unitCompleted.filter((item) => item !== key)
    : [...state.unitCompleted, key];
  localStorage.setItem("piu-unit-progress", JSON.stringify(state.unitCompleted));
  render();
}

function selectPracticeStage(stageId) {
  state.stageId = Number(stageId);
  localStorage.setItem("piu-current-stage", state.stageId);
  render();
}

function togglePractice(id) {
  const completedTasks = state.practiceByStage[state.stageId] || [];
  state.practiceByStage[state.stageId] = completedTasks.includes(id)
    ? completedTasks.filter((item) => item !== id)
    : [...completedTasks, id];
  localStorage.setItem("piu-practice-date", localDateKey());
  localStorage.setItem("piu-practice-by-stage", JSON.stringify(state.practiceByStage));
  render();
}

function openPinyinCard(index) {
  const card = pinyinCards[index];
  dialogContent.innerHTML = `
    <p class="eyebrow">发音卡 · การ์ดออกเสียง</p>
    <div class="dialog-symbol">${card.symbol}</div>
    <h2>${card.label}</h2>
    <p class="thai">${card.thai}</p>
    <p class="mouth-tip"><strong>口型提示：</strong>${card.tip}<span class="thai block-thai"><b>คำแนะนำการออกเสียง:</b> ${getPinyinTipThai(card)}</span></p>
    <h3>生活例词</h3>
    <p>${card.example}</p>
    <button class="audio-demo-button" onclick="playAudio('${card.audio}', '${card.example.split(" ")[0]}')"><span>▶</span><strong>播放示范音</strong><small>ฟังเสียงตัวอย่าง</small></button>
    <p class="thai">เสียงตัวอย่างภาษาจีนกลางนี้บันทึกไว้ในเว็บและเล่นแบบออฟไลน์ได้ ภายหลังสามารถเปลี่ยนเป็นเสียงคนจริงได้</p>`;
  dialog.showModal();
}

function getPinyinTipThai(card) {
  const special = {
    "ü": "เริ่มจากเสียง i โดยไม่ขยับลิ้น แล้วห่อริมฝีปาก",
    "zh": "ยกปลายลิ้นขึ้นเล็กน้อย ไม่ม้วนลึกเกินไป",
    "ch": "ตำแหน่งเหมือน zh แต่พ่นลมชัดเจน",
    "sh": "ยกปลายลิ้นและปล่อยลมผ่านช่องแคบ",
    "r": "ตำแหน่งใกล้ sh แต่ให้เส้นเสียงสั่น",
    "j": "กลางลิ้นเข้าใกล้เพดานแข็ง ไม่พ่นลม",
    "q": "ตำแหน่งเหมือน j แต่พ่นลมแรง",
    "x": "กลางลิ้นเข้าใกล้เพดานแข็ง ให้ลมเสียดแทรก",
    "an": "จบเสียงด้วยปลายลิ้นแตะปุ่มเหงือกบน",
    "en": "จบเสียงด้วยปลายลิ้นแตะปุ่มเหงือกบน",
    "in": "เริ่มจาก i แล้วจบด้วยปลายลิ้น",
    "un": "ห่อปากตอนเริ่ม แล้วจบด้วย n",
    "ün": "คงรูปปาก ü แล้วจบด้วยปลายลิ้น",
    "ang": "จบเสียงด้วยโคนลิ้นยกขึ้นเป็น ng",
    "eng": "ผ่อนรูปปาก แล้วจบด้วยโคนลิ้น",
    "ing": "เริ่มจาก i แล้วจบด้วยโคนลิ้น",
    "ong": "ห่อริมฝีปาก แล้วจบด้วยโคนลิ้น"
  };
  if (special[card.symbol]) return special[card.symbol];
  if (card.group === "initial") return `${card.thai} ฟังเสียงตัวอย่างแล้วสังเกตตำแหน่งลิ้นและแรงลม`;
  if (card.group === "final") return `${card.thai} อ่านต่อเนื่องโดยไม่ใช้ชื่ออักษรอังกฤษ`;
  return "อ่านเป็นพยางค์เดียว ไม่แยกพยัญชนะต้นกับสระ";
}

let activeAudio = null;

function playAudio(path, fallbackText = "") {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }
  activeAudio = new Audio(path);
  activeAudio.play().catch(() => {
    if (fallbackText) speakChinese(fallbackText);
  });
}

document.addEventListener("click", (event) => {
  const route = event.target.closest("[data-route]");
  if (route) return;

  const mode = event.target.closest("[data-mode]");
  if (mode) return;

  const lesson = event.target.closest("[data-lesson]");
  if (lesson) return;

  const back = event.target.closest("[data-back]");
  if (back) return;

  const next = event.target.closest("[data-next-lesson]");
  if (next) return;

  const complete = event.target.closest("[data-complete]");
  if (complete) return;

  if (event.target.closest("[data-print]")) return;

  const filter = event.target.closest("[data-filter]");
  if (filter) return;

  const pinyin = event.target.closest("[data-pinyin]");
  if (pinyin) return;

  const task = event.target.closest("[data-task]");
  if (task) return;

  if (event.target.closest(".dialog-close")) dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

// ===== 在线可玩小游戏（v3/v6）=====
const playSession = { gameId: -1, index: 0, correct: 0, picked: [], pairChoice: null, matchedPairs: [], pairLeftOrder: [], pairRightOrder: [] };

function shuffled(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function openMiniGame(gameId) {
  const lib = window.miniGameLibs[window.playableGames[gameId]];
  if (!lib) return;
  playSession.gameId = gameId;
  playSession.index = 0;
  playSession.correct = 0;
  playSession.picked = [];
  playSession.pairChoice = null;
  playSession.matchedPairs = [];
  playSession.pairLeftOrder = lib.type === "pair" ? shuffled(lib.pairs.map((_, index) => index)) : [];
  playSession.pairRightOrder = lib.type === "pair" ? shuffled(lib.pairs.map((_, index) => index)) : [];
  dialogContent.innerHTML = `
    <p class="eyebrow">在线游戏 · เกมออนไลน์</p>
    <h2>${lib.title}</h2>
    <p class="thai">${lib.thai}</p>
    <p>${lib.desc}</p>
    <p class="thai">${lib.thaiDesc}</p>
    <div class="mini-game-panel" id="playable-panel" aria-live="polite"></div>`;
  dialog.showModal();
  renderPlayableQuestion();
}

function renderPlayableQuestion() {
  const lib = window.miniGameLibs[window.playableGames[playSession.gameId]];
  if (lib.type === "pair") {
    renderPairGame();
    return;
  }
  const q = lib.pool[playSession.index % lib.pool.length];
  const panel = document.querySelector("#playable-panel");
  if (!panel) return;
  if (q.type === "order") {
    const used = new Set();
    const parts = shuffled(q.parts.map((_, i) => i)).map((i) => ({ text: q.parts[i], idx: i }));
    playSession.picked = [];
    panel.innerHTML = `
      <div class="mini-game-status"><b>第 ${playSession.index + 1} / ${Math.min(6, lib.pool.length)} 题</b><span>เรียงประโยคตามลำดับภาษาจีน</span></div>
      <p class="mini-game-prompt">按自然的中文语序组句；有多种正确说法时都会通过。<span class="thai block-thai">เรียงเป็นประโยคจีนที่เป็นธรรมชาติ หากมีหลายแบบที่ถูกต้อง ระบบจะยอมรับทั้งหมด</span></p>
      <div class="order-wordbank">
        ${parts.map((p) => `<button class="order-word" data-word="${p.idx}" onclick="pickOrderWord(${p.idx})">${p.text}</button>`).join("")}
      </div>
      <div class="order-picked" id="orderPicked"></div>
      <div class="mini-game-actions">
        <button class="secondary-button" onclick="clearOrderPick()">清空 · ล้าง</button>
        <button class="primary-button" onclick="checkOrder()">检查 · ตรวจ</button>
      </div>`;
    return;
  }
  const options = shuffled(q.options.map((_, i) => i));
  panel.innerHTML = `
    <div class="mini-game-status"><b>第 ${playSession.index + 1} / ${Math.min(6, lib.pool.length)} 题</b><span>${q.hint}</span></div>
    <p class="mini-game-prompt">${q.prompt}</p>
    ${q.type === "listen" ? `<button class="mini-audio-button" onclick="playMiniAudio()">▶ 听 · ฟัง</button>` : ""}
    <div class="mini-choice-grid">
      ${options.map((oi) => `<button onclick="answerPlayable(${oi})">${q.options[oi]}</button>`).join("")}
    </div>`;
  if (q.type === "listen") playMiniAudio();
}

function renderPairGame(feedback = "先选中文，再选泰语 · เลือกภาษาจีนก่อน แล้วเลือกภาษาไทย") {
  const lib = window.miniGameLibs[window.playableGames[playSession.gameId]];
  const panel = document.querySelector("#playable-panel");
  if (!panel) return;
  const leftOrder = playSession.pairLeftOrder;
  const rightOrder = playSession.pairRightOrder;
  panel.innerHTML = `
    <div class="mini-game-status"><b>已配对 ${playSession.matchedPairs.length} / ${lib.pairs.length}</b><span>${feedback}</span></div>
    <div class="pair-board">
      <div>${leftOrder.map((index) => `<button class="pair-chip ${playSession.matchedPairs.includes(index) ? "matched" : ""}" data-pair-side="left" data-pair-index="${index}" onclick="selectPair('left', ${index})">${lib.pairs[index].left}</button>`).join("")}</div>
      <div>${rightOrder.map((index) => `<button class="pair-chip ${playSession.matchedPairs.includes(index) ? "matched" : ""}" data-pair-side="right" data-pair-index="${index}" onclick="selectPair('right', ${index})">${lib.pairs[index].right}</button>`).join("")}</div>
    </div>`;
  if (playSession.pairChoice) {
    const selected = panel.querySelector(`[data-pair-side="${playSession.pairChoice.side}"][data-pair-index="${playSession.pairChoice.index}"]`);
    selected?.classList.add("selected");
  }
}

function selectPair(side, index) {
  if (playSession.matchedPairs.includes(index)) return;
  const first = playSession.pairChoice;
  if (!first || first.side === side) {
    playSession.pairChoice = { side, index };
    renderPairGame();
    return;
  }
  if (first.index !== index) {
    playSession.pairChoice = null;
    renderPairGame("还不是一对，再看一次 · ยังไม่ใช่คู่ ลองดูอีกครั้ง");
    return;
  }
  const lib = window.miniGameLibs[window.playableGames[playSession.gameId]];
  playSession.matchedPairs.push(index);
  playSession.correct += 1;
  playSession.pairChoice = null;
  speakChinese(lib.pairs[index].speak);
  if (playSession.matchedPairs.length === lib.pairs.length) {
    const panel = document.querySelector("#playable-panel");
    panel.innerHTML = `<div class="mini-game-complete"><b>全部配对完成！</b><span>จับคู่ครบแล้ว</span><p>再听一遍最容易忘的两个词，然后停在成功这里。</p><p class="thai">ฟัง 2 คำที่จำยากที่สุดอีกครั้ง แล้วจบด้วยความสำเร็จ</p></div><div class="mini-game-actions"><button class="secondary-button" onclick="openMiniGame(${playSession.gameId})">再玩一次</button><button class="primary-button" onclick="document.querySelector('#dialog').close()">完成</button></div>`;
    return;
  }
  renderPairGame("配对成功，听一遍中文 · จับคู่ถูกแล้ว ฟังเสียงจีนหนึ่งครั้ง");
}

function playMiniAudio() {
  const lib = window.miniGameLibs[window.playableGames[playSession.gameId]];
  const q = lib.pool[playSession.index % lib.pool.length];
  if (q.speak) speakChinese(q.speak);
}

function pickOrderWord(partIndex) {
  const btn = document.querySelector(`[data-word="${partIndex}"]`);
  if (!btn || btn.classList.contains("used")) return;
  btn.classList.add("used");
  playSession.picked.push(partIndex);
  const container = document.querySelector("#orderPicked");
  if (container) {
    const span = document.createElement("span");
    span.className = "order-chip";
    span.textContent = btn.textContent;
    span.dataset.idx = partIndex;
    container.appendChild(span);
  }
}

function clearOrderPick() {
  playSession.picked = [];
  document.querySelectorAll(".order-word.used").forEach((el) => el.classList.remove("used"));
  const container = document.querySelector("#orderPicked");
  if (container) container.innerHTML = "";
}

function checkOrder() {
  const lib = window.miniGameLibs[window.playableGames[playSession.gameId]];
  const q = lib.pool[playSession.index % lib.pool.length];
  const accepted = q.answers || [q.answer || q.parts.map((_, index) => index)];
  const expected = accepted[0];
  const panel = document.querySelector("#playable-panel");
  if (!window.isCorrectOrder(q, playSession.picked)) {
    panel.querySelector(".mini-game-prompt").innerHTML = `<span class="try-again">这个顺序和本题练习的自然句式还不一样，再试一次。<span class="thai block-thai">ลำดับนี้ยังไม่ตรงกับรูปประโยคธรรมชาติที่กำลังฝึก ลองอีกครั้ง</span></span>`;
    clearOrderPick();
    return;
  }
  playSession.correct += 1;
  const spoken = playSession.picked.map((i) => q.parts[i]).join("");
  speakChinese(spoken);
  panel.innerHTML = `
    <div class="mini-feedback success"><b>排对了！ · เรียงถูกแล้ว</b><span>${spoken}</span><small>${q.explain}</small></div>
    <button class="primary-button" onclick="nextPlayableQuestion()">下一题 →</button>`;
}

function answerPlayable(optionIndex) {
  const lib = window.miniGameLibs[window.playableGames[playSession.gameId]];
  const q = lib.pool[playSession.index % lib.pool.length];
  const panel = document.querySelector("#playable-panel");
  if (optionIndex !== q.answer) {
    panel.querySelector(".mini-game-prompt").innerHTML = `<span class="try-again">还差一点，再试一次。ลองอีกครั้ง</span>`;
    recordMistake(q.prompt, q.options[q.answer], q.explain);
    return;
  }
  playSession.correct += 1;
  panel.innerHTML = `
    <div class="mini-feedback success"><b>答对了！</b><span>${q.explain}</span></div>
    <button class="primary-button" onclick="nextPlayableQuestion()">下一题 →</button>`;
}

function nextPlayableQuestion() {
  const lib = window.miniGameLibs[window.playableGames[playSession.gameId]];
  playSession.index += 1;
  if (playSession.index >= Math.min(6, lib.pool.length)) {
    renderPlayableDone();
    return;
  }
  renderPlayableQuestion();
}

function renderPlayableDone() {
  const lib = window.miniGameLibs[window.playableGames[playSession.gameId]];
  const panel = document.querySelector("#playable-panel");
  panel.innerHTML = `
    <div class="mini-game-complete"><b>完成！答对 ${playSession.correct} / ${Math.min(6, lib.pool.length)}</b><span>ทำครบ ${playSession.correct} / ${Math.min(6, lib.pool.length)} ข้อ</span><p>停在成功这里，不追加纠错。</p></div>
    <div class="mini-game-actions">
      <button class="secondary-button" onclick="openMiniGame(${playSession.gameId})">再玩一次</button>
      <button class="primary-button" onclick="document.querySelector('#dialog').close()">完成</button>
    </div>`;
}

// ===== 易错本与次日复习（v3）=====
const MISTAKES_KEY = "piu-mistakes";

function loadMistakes() {
  return loadStoredJSON(MISTAKES_KEY, []);
}

function recordMistake(promptText, correctAnswer, explain) {
  const mistakes = loadMistakes();
  const existing = mistakes.find((m) => m.prompt === promptText);
  const now = new Date();
  if (existing) {
    existing.count += 1;
    existing.lastSeen = now.toISOString();
  } else {
    mistakes.push({ prompt: promptText, correct: correctAnswer, explain, count: 1, createdAt: now.toISOString(), lastSeen: now.toISOString() });
  }
  localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes.slice(0, 30)));
}

function renderMistakeBoard() {
  const mistakes = loadMistakes();
  if (!mistakes.length) return "";
  const today = localDateKey();
  const due = mistakes.filter((m) => {
    const d = new Date(m.lastSeen);
    const seenKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return seenKey !== today;
  });
  return `
    <section class="section mistake-board">
      <div class="section-heading"><div><h2>易错本 · สมุดคำผิด</h2><p>答错的会自动记下来，第二天复习一次</p></div><span>${mistakes.length} 条 · รายการ</span></div>
      <div class="mistake-list">
        ${mistakes.map((m, i) => `
          <article class="mistake-item">
            <span class="mistake-count">×${m.count}</span>
            <div><strong>${m.prompt}</strong><small>正确：${m.correct}</small><small class="thai">${m.explain || ""}</small></div>
            ${due.includes(m) ? `<button class="secondary-button" onclick="reviewMistake(${i})">复习 · ทบทวน</button>` : `<small class="mistake-done">今天已复习 ✓</small>`}
          </article>`).join("")}
      </div>
    </section>`;
}

function reviewMistake(index) {
  const mistakes = loadMistakes();
  const m = mistakes[index];
  if (!m) return;
  mistakes[index].lastSeen = new Date().toISOString();
  localStorage.setItem(MISTAKES_KEY, JSON.stringify(mistakes));
  dialogContent.innerHTML = `
    <p class="eyebrow">复习 · ทบทวน</p>
    <h2>${m.prompt}</h2>
    <p class="thai">${m.correct}</p>
    <p>${m.explain || ""}</p>
    <div class="mini-game-actions">
      <button class="secondary-button" onclick="speakChinese('${m.correct.replace(/'/g, "")}')">▶ 听正确读法</button>
      <button class="primary-button" onclick="document.querySelector('#dialog').close()">记住了</button>
    </div>`;
  dialog.showModal();
}

// ===== 进度导入导出（v3）=====
const PROGRESS_KEYS = ["piu-lessons", "piu-unit-progress", "piu-practice-by-stage", "piu-practice-date", "piu-current-stage", "piu-mode", "piu-mistakes", "piu-milestones"];

async function exportProgress() {
  const data = {};
  PROGRESS_KEYS.forEach((key) => {
    const value = localStorage.getItem(key);
    if (value !== null) data[key] = value;
  });
  if (window.LearningStore) data["piu-vocabulary"] = JSON.stringify(await LearningStore.listVocabulary());
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `piu-progress-${localDateKey()}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

async function importProgressFromText(text) {
  try {
    const data = JSON.parse(text);
    if (!data || Array.isArray(data) || typeof data !== "object") return false;
    if (Object.values(data).some((value) => typeof value !== "string")) return false;
    const parsedStage = Number(data["piu-current-stage"]);
    const parsedMode = data["piu-mode"];
    if (data["piu-current-stage"] !== undefined && (!Number.isInteger(parsedStage) || parsedStage < 1 || parsedStage > 5)) return false;
    if (parsedMode !== undefined && !["learner", "teacher"].includes(parsedMode)) return false;
    const jsonValue = (key, fallback) => data[key] === undefined ? fallback : JSON.parse(data[key]);
    const completed = jsonValue("piu-lessons", []);
    const unitCompleted = jsonValue("piu-unit-progress", []);
    const practiceByStage = jsonValue("piu-practice-by-stage", {});
    const mistakes = jsonValue("piu-mistakes", []);
    const vocabulary = jsonValue("piu-vocabulary", []);
    if (!Array.isArray(completed) || !completed.every((id) => Number.isInteger(id) && id >= 1 && id <= 8)) return false;
    if (!Array.isArray(unitCompleted) || !unitCompleted.every((key) => /^[2-5]-\d+$/.test(key))) return false;
    if (!practiceByStage || Array.isArray(practiceByStage) || typeof practiceByStage !== "object") return false;
    if (!Array.isArray(mistakes)) return false;
    if (!Array.isArray(vocabulary) || !vocabulary.every((item) => item && typeof item.id === "string" && typeof item.zh === "string")) return false;
    PROGRESS_KEYS.forEach((key) => {
      if (data[key] !== undefined && typeof data[key] === "string") localStorage.setItem(key, data[key]);
    });
    Object.assign(state, {
      stageId: Number(localStorage.getItem("piu-current-stage")) || 1,
      mode: localStorage.getItem("piu-mode") || "learner",
      completed,
      unitCompleted,
      practiceByStage,
      milestoneProgress: loadStoredJSON("piu-milestones", {}),
    });
    if (window.LearningStore && data["piu-vocabulary"] !== undefined) await LearningStore.replaceVocabulary(vocabulary);
    await refreshLearningData(false);
    render();
    return true;
  } catch {
    return false;
  }
}

function renderBackupSection() {
  return `
    <section class="section backup-section">
      <div class="section-heading"><div><h2>备份与恢复 · สำรองและกู้คืน</h2><p>换手机或重装时，先导出，再导入</p></div></div>
      <div class="backup-actions">
        <button class="secondary-button" onclick="exportProgress()">导出进度 ↓</button>
        <label class="file-label">导入进度
          <input type="file" accept=".json,application/json" onchange="handleImportFile(this)" />
        </label>
      </div>
      <p class="thai">บันทึกก่อนเปลี่ยนเครื่อง แล้วนำเข้าบนเครื่องใหม่</p>
    </section>`;
}

function handleImportFile(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    const ok = await importProgressFromText(reader.result);
    dialogContent.innerHTML = ok
      ? `<p class="eyebrow">导入成功 · นำเข้าเรียบร้อย</p><h2>进度已恢复 ✓</h2><p>页面已更新。</p><button class="primary-button" onclick="document.querySelector('#dialog').close()">好的</button>`
      : `<p class="eyebrow">导入失败 · ไม่สำเร็จ</p><h2>文件格式不对</h2><p>请选择之前导出的 JSON 文件。</p><button class="primary-button" onclick="document.querySelector('#dialog').close()">好的</button>`;
    dialog.showModal();
  };
  reader.readAsText(file);
}

// ===== 录音作品夹（v10）=====
let mediaRecorder = null;
let recordedChunks = [];
let activeRecording = null;

function startToneRecording() {
  startLearningRecording("四声练习 mā · má · mǎ · mà", 1, 0, document.querySelector("#toneRecBtn"));
}

function startLearningRecording(prompt, stageId, unitIndex, button) {
  const btn = button || document.querySelector("#toneRecBtn");
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
    if (btn) btn.innerHTML = "正在保存… <small>กำลังบันทึก</small>";
    return;
  }
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    dialogContent.innerHTML = `<p class="eyebrow">录音</p><h2>这个浏览器不支持录音</h2><p>可以用手机浏览器（Chrome/Safari）试试。</p><button class="primary-button" onclick="document.querySelector('#dialog').close()">好的</button>`;
    dialog.showModal();
    return;
  }
  navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    recordedChunks = [];
    const preferredType = ["audio/webm;codecs=opus", "audio/mp4", "audio/webm"].find((type) => MediaRecorder.isTypeSupported?.(type));
    mediaRecorder = preferredType ? new MediaRecorder(stream, { mimeType: preferredType }) : new MediaRecorder(stream);
    activeRecording = { prompt, stageId, unitIndex, button: btn };
    mediaRecorder.ondataavailable = (e) => recordedChunks.push(e.data);
    mediaRecorder.onstop = async () => {
      stream.getTracks().forEach((t) => t.stop());
      const mimeType = mediaRecorder.mimeType || recordedChunks[0]?.type || "audio/webm";
      const blob = new Blob(recordedChunks, { type: mimeType });
      const recording = {
        id: `recording-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        prompt: activeRecording?.prompt || prompt,
        blob,
        mimeType,
        stageId: activeRecording?.stageId ?? stageId,
        unitIndex: activeRecording?.unitIndex ?? unitIndex,
        createdAt: new Date().toISOString(),
        focusTags: [],
      };
      await LearningStore.saveRecording(recording);
      await refreshLearningData(false);
      if (btn) btn.innerHTML = "● 再录一次 <small>อัดใหม่</small>";
      dialogContent.innerHTML = `<p class="eyebrow">已保存 · บันทึกแล้ว</p><h2>这次开口已放进作品夹</h2><p class="thai">ไฟล์เสียงนี้อยู่ในผลงานเสียงแล้ว</p><div class="mini-game-actions"><button class="secondary-button" onclick="playSavedRecording('${recording.id}')">▶ 播放</button><button class="primary-button" onclick="document.querySelector('#dialog').close(); setRoute('practice')">去作品夹</button></div>`;
      dialog.showModal();
      activeRecording = null;
    };
    mediaRecorder.start();
    if (btn) btn.innerHTML = "■ 停止并保存 <small>หยุดและบันทึก</small>";
  }).catch(() => {
    if (btn) btn.innerHTML = "录音失败，请允许麦克风 <small>กรุณาอนุญาตไมโครโฟน</small>";
  });
}

// ===== 阶段4/5 输出型材料渲染（v4/v6/v7）=====
function renderStageMaterials(stageId, unitIndex) {
  const block = window.stageMaterials?.[stageId]?.[unitIndex];
  if (!block) return "";
  const parts = [];
  if (block.dialogue) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>${block.dialogue.title}</h2><p class="thai">${block.dialogue.thai}</p></div></div>
        <p class="lead">${block.dialogue.intro}</p>
        <p class="thai">${block.dialogue.thaiIntro}</p>
        <div class="dialogue-list">
          ${block.dialogue.lines.map((line, i) => `
            <article class="dialogue-row">
              <span class="dialogue-num">${String(i + 1).padStart(2, "0")}</span>
              <button class="play-button" onclick="speakChinese('${line.zh.replace(/'/g, "")}')" aria-label="播放">▶</button>
              <div><strong>${line.zh}</strong><span>${line.pinyin}</span><small>${line.thai}</small></div>
            </article>`).join("")}
        </div>
      </section>`);
  }
  if (block.menu) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>${block.menu.title}</h2><p class="thai">${block.menu.thai}</p></div></div>
        <p class="lead">${block.menu.note}</p>
        <p class="thai">${block.menu.thaiNote}</p>
        <div class="menu-grid">
          ${block.menu.dishes.map((dish, i) => `
            <article class="menu-item">
              <span class="menu-no">${String(i + 1).padStart(2, "0")}</span>
              <button class="play-button" onclick="speakChinese('${dish.zh}')">▶</button>
              <div><strong>${dish.zh}</strong><span>${dish.pinyin}</span><small>${dish.thai}</small><b class="menu-price">${dish.price}</b></div>
            </article>`).join("")}
        </div>
        <h3 class="sub-heading">点餐对话 · บทสนทนาสั่งอาหาร</h3>
        <div class="chat-bubbles">
          ${block.menu.orderDialog.map((line, i) => `
            <article class="chat-bubble ${line.role === "你" ? "mine" : "theirs"}">
              <small>${line.role}</small>
              <button class="play-button" onclick="speakChinese('${line.zh.replace(/'/g, "")}')">▶</button>
              <div><strong>${line.zh}</strong><span>${line.pinyin}</span><small>${line.thai}</small></div>
            </article>`).join("")}
        </div>
      </section>`);
  }
  if (block.numbers) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>${block.numbers.title}</h2><p class="thai">${block.numbers.thai}</p></div></div>
        <div class="number-grid">
          ${block.numbers.numbers.map((n) => `
            <button class="number-chip" onclick="speakChinese('${n.zh}')"><b>${n.zh}</b><span>${n.pinyin}</span><small>${n.thai}</small></button>`).join("")}
        </div>
        <h3 class="sub-heading">时间表达 · การบอกเวลา</h3>
        <div class="example-list">
          ${block.numbers.times.map((t) => `
            <article class="example-row">
              <button class="play-button" onclick="speakChinese('${t.zh}')">▶</button>
              <div><strong>${t.zh}</strong><span>${t.pinyin}</span><small>${t.thai}</small></div>
            </article>`).join("")}
        </div>
      </section>`);
  }
  if (block.weather) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>${block.weather.title}</h2><p class="thai">${block.weather.thai}</p></div></div>
        <div class="weather-grid">
          ${block.weather.cities.map((c) => `
            <article class="weather-card">
              <h3>${c.city}<span class="thai">${c.pinyin}</span></h3>
              <b class="weather-temp">${c.temp}</b>
              <p>${c.zh}</p>
              <p class="thai">${c.thai}</p>
              <button class="secondary-button" onclick="speakChinese('${c.city}${c.zh.replace(/[，。]/g, "")}')">▶ 听</button>
            </article>`).join("")}
        </div>
        <p class="lead">${block.weather.question}</p>
        <p class="thai">${block.weather.thaiQuestion}</p>
      </section>`);
  }
  if (block.chat) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>${block.chat.title}</h2><p class="thai">${block.chat.thai}</p></div></div>
        <p class="lead">${block.chat.intro}</p>
        <p class="thai">${block.chat.thaiIntro}</p>
        <div class="chat-bubbles">
          ${block.chat.bubbles.map((line, i) => `
            <article class="chat-bubble ${line.who === "你" ? "mine" : "theirs"}">
              <small>${line.who}</small>
              <button class="play-button" onclick="speakChinese('${line.zh.replace(/'/g, "")}')">▶</button>
              <div><strong>${line.zh}</strong><span>${line.pinyin}</span><small>${line.thai}</small></div>
            </article>`).join("")}
        </div>
      </section>`);
  }
  if (block.reading) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>阅读：${block.reading.title}</h2><p class="thai">${block.reading.thai}</p></div></div>
        <div class="reading-box">
          <p>${block.reading.text}</p>
          <button class="secondary-button" onclick="speakChinese('${block.reading.text.replace(/'/g, "")}')">▶ 听全文</button>
        </div>
        <div class="reading-questions">
          ${block.reading.questions.map((q, i) => `
            <article class="reading-question">
              <p><b>${i + 1}. ${q.q}</b><span class="thai block-thai">${q.thaiQ || "เลือกคำตอบจากเนื้อหา"}</span></p>
              <div class="mini-choice-grid">
                ${q.options.map((opt, oi) => `<button onclick="answerReading(${stageId}, ${unitIndex}, ${i}, ${oi})">${opt}<small class="thai block-thai">${q.thaiOptions?.[oi] || ""}</small></button>`).join("")}
              </div>
              <p class="reading-feedback" id="reading-fb-${stageId}-${unitIndex}-${i}"></p>
            </article>`).join("")}
        </div>
      </section>`);
  }
  if (block.listening) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>听力：${block.listening.title}</h2><p class="thai">${block.listening.thai}</p></div></div>
        <p class="lead">${block.listening.intro}</p>
        <p class="thai">${block.listening.thaiIntro}</p>
        <div class="listening-actions">
          <button class="primary-button" onclick="speakChinese('${block.listening.transcript.replace(/'/g, "")}')">▶ 播放对话</button>
        </div>
        <details class="transcript-details">
          <summary>看原文 · ดูบท</summary>
          <p>${block.listening.transcript}</p>
        </details>
        <div class="reading-questions">
          ${block.listening.questions.map((q, i) => `
            <article class="reading-question">
              <p><b>${i + 1}. ${q.q}</b><span class="thai block-thai">${q.thaiQ || "ฟังแล้วเลือกคำตอบ"}</span></p>
              <div class="mini-choice-grid">
                ${q.options.map((opt, oi) => `<button onclick="answerListening(${stageId}, ${unitIndex}, ${i}, ${oi})">${opt}<small class="thai block-thai">${q.thaiOptions?.[oi] || ""}</small></button>`).join("")}
              </div>
              <p class="reading-feedback" id="listen-fb-${stageId}-${unitIndex}-${i}"></p>
            </article>`).join("")}
        </div>
      </section>`);
  }
  if (block.pictureTalk) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>${block.pictureTalk.title}</h2><p class="thai">${block.pictureTalk.thai}</p></div></div>
        <figure class="picture-talk-figure">
          <img src="${block.pictureTalk.image}" alt="${block.pictureTalk.title}" loading="lazy" />
        </figure>
        <p class="lead">${block.pictureTalk.starter}</p>
        <p class="thai">${block.pictureTalk.thaiStarter}</p>
        <div class="picture-prompts">
          ${block.pictureTalk.prompts.map((p, i) => `<p><b>${i + 1}. ${p}</b><span class="thai">${block.pictureTalk.thaiPrompts[i]}</span></p>`).join("")}
        </div>
      </section>`);
  }
  if (block.diary) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>${block.diary.title}</h2><p class="thai">${block.diary.thai}</p></div></div>
        <p class="lead">${block.diary.note}</p>
        <p class="thai">${block.diary.thaiNote}</p>
        <div class="diary-template">
          ${block.diary.template.map((t, i) => `
            <article class="diary-line">
              <span>${t.label}</span>
              <strong>${t.zh}</strong>
              <small class="thai">${t.thai}</small>
            </article>`).join("")}
        </div>
      </section>`);
  }
  if (block.video) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>${block.video.title}</h2><p class="thai">${block.video.thai}</p></div></div>
        <p class="lead">${block.video.note}</p>
        <p class="thai">${block.video.thaiNote}</p>
        <div class="video-steps">
          ${block.video.steps.map((s, i) => `
            <article class="video-step">
              <b>${s.n}</b>
              <p>${s.zh}</p>
              <p class="thai">${s.thai}</p>
            </article>`).join("")}
        </div>
      </section>`);
  }
  if (block.skit) {
    parts.push(`
      <section class="content-section real-material">
        <div class="section-heading"><div><h2>${block.skit.title}</h2><p class="thai">${block.skit.thai}</p></div></div>
        <p class="lead">${block.skit.intro}</p>
        <p class="thai">${block.skit.thaiIntro}</p>
        <div class="skit-scenes">
          ${block.skit.scenes.map((s, i) => `
            <article class="skit-scene">
              <span class="skit-who ${s.who === "Hua" ? "hua" : "piu"}">${s.who}</span>
              <button class="play-button" onclick="speakChinese('${s.zh.replace(/'/g, "")}')">▶</button>
              <div><strong>${s.zh}</strong><span>${s.pinyin}</span><small>${s.thai}</small></div>
            </article>`).join("")}
        </div>
      </section>`);
  }
  return parts.join("");
}

function answerReading(stageId, unitIndex, qIndex, optionIndex) {
  const block = window.stageMaterials[stageId][unitIndex];
  const q = block.reading.questions[qIndex];
  const fb = document.querySelector(`#reading-fb-${stageId}-${unitIndex}-${qIndex}`);
  if (!fb) return;
  if (optionIndex === q.answer) {
    fb.innerHTML = `<span class="feedback-ok">✓ 对！${q.explain}<small class="thai block-thai">${q.thaiExplain || "ถูกต้อง"}</small></span>`;
  } else {
    fb.innerHTML = `<span class="try-again">再想想。${q.explain}<small class="thai block-thai">ลองอีกครั้ง · ${q.thaiExplain || ""}</small></span>`;
    recordMistake(q.q, q.options[q.answer], q.explain);
  }
}

function answerListening(stageId, unitIndex, qIndex, optionIndex) {
  const block = window.stageMaterials[stageId][unitIndex];
  const q = block.listening.questions[qIndex];
  const fb = document.querySelector(`#listen-fb-${stageId}-${unitIndex}-${qIndex}`);
  if (!fb) return;
  if (optionIndex === q.answer) {
    fb.innerHTML = `<span class="feedback-ok">✓ 对！${q.explain}<small class="thai block-thai">${q.thaiExplain || "ถูกต้อง"}</small></span>`;
  } else {
    fb.innerHTML = `<span class="try-again">再听一遍。${q.explain}<small class="thai block-thai">ฟังอีกครั้ง · ${q.thaiExplain || ""}</small></span>`;
    recordMistake(q.q, q.options[q.answer], q.explain);
  }
}

// ===== 放松角（文化内容，v5/v7）=====
function renderRelaxCorner(stageId, unitIndex) {
  const content = getRelaxContent(stageId, unitIndex);
  if (!content) return "";
  const { type, item } = content;
  const typeLabel = { origin: "字源故事 · ที่มาของตัวอักษร", idiom: "成语 · สำนวนจีน", poem: "古诗 · บทกวีจีน", fable: "寓言 · นิทาน", fact: "文化角 · วัฒนธรรมจีน", slang: "网络热梗 · ศัพท์วัยรุ่น" }[type];
  if (type === "origin") {
    return `
      <section class="content-section relax-corner">
        <div class="section-heading"><div><h2>放松角：${item.char}</h2><p>${typeLabel}</p></div></div>
        <div class="origin-card">
          <div class="origin-svg">${item.svg}</div>
          <div>
            <p><b>${item.char}</b> <span>${item.pinyin}</span> <span class="thai">${item.thai}</span></p>
            <p>${item.story}</p>
            <p class="thai">${item.thaiStory}</p>
            <button class="secondary-button" onclick="speakChinese('${item.char}')">▶ 听读音</button>
          </div>
        </div>
      </section>`;
  }
  if (type === "idiom" || type === "fact" || type === "slang") {
    const extra = type === "idiom" ? `
      <p class="lead">${item.meaning}</p>
      <p class="thai">${item.thaiMeaning}</p>
      <p><b>例句：</b>${item.example}</p>
      <button class="secondary-button" onclick="speakChinese('${item.example.replace(/'/g, "")}')">▶ 听例句</button>
      <h3 class="sub-heading">小练习 · แบบฝึกเล็กน้อย</h3>
      <p>${item.question}</p>
      <div class="mini-choice-grid">
        ${item.options.map((opt, oi) => `<button onclick="answerRelaxQuestion(${stageId}, ${unitIndex}, ${oi})">${opt}</button>`).join("")}
      </div>
      <p class="reading-feedback" id="relax-fb-${stageId}-${unitIndex}"></p>` : "";
    const slangExtra = type === "slang" ? `
      <div class="slang-items">
        ${item.items.map((s) => `
          <article class="slang-item">
            <button class="play-button" onclick="speakChinese('${s.zh}')">▶</button>
            <div><strong>${s.zh}</strong><span>${s.pinyin}</span><small>${s.thai}</small><p class="slang-example">${s.example}</p></div>
          </article>`).join("")}
      </div>
      <h3 class="sub-heading">小练习 · แบบฝึกเล็กน้อย</h3>
      <p>${item.question}</p>
      <div class="mini-choice-grid">
        ${item.options.map((opt, oi) => `<button onclick="answerRelaxQuestion(${stageId}, ${unitIndex}, ${oi})">${opt}</button>`).join("")}
      </div>
      <p class="reading-feedback" id="relax-fb-${stageId}-${unitIndex}"></p>` : "";
    return `
      <section class="content-section relax-corner">
        <div class="section-heading"><div><h2>放松角：${type === "idiom" ? item.idiom : item.title}</h2><p>${typeLabel}</p></div></div>
        ${type === "idiom" ? `<div class="relax-icon">${item.svg}</div>` : `<p class="relax-big-icon">${item.icon}</p>`}
        ${type === "fact" ? `<p>${item.text}</p><p class="thai">${item.thaiText}</p><button class="secondary-button" onclick="speakChinese('${item.text.replace(/'/g, "")}')">▶ 听</button>` : ""}
        ${type === "slang" ? `<p class="lead">${item.intro}</p><p class="thai">${item.thaiIntro}</p>${slangExtra}` : extra}
        ${type === "fact" ? `
          <h3 class="sub-heading">小练习 · แบบฝึกเล็กน้อย</h3>
          <p>${item.question}</p>
          <div class="mini-choice-grid">
            ${item.options.map((opt, oi) => `<button onclick="answerRelaxQuestion(${stageId}, ${unitIndex}, ${oi})">${opt}</button>`).join("")}
          </div>
          <p class="reading-feedback" id="relax-fb-${stageId}-${unitIndex}"></p>` : ""}
      </section>`;
  }
  if (type === "poem") {
    return `
      <section class="content-section relax-corner poem-corner">
        <div class="section-heading"><div><h2>放松角：${item.title}</h2><p>${typeLabel} · ${item.author}</p></div></div>
        <div class="poem-box">
          <pre>${item.text}</pre>
          <p class="thai">${item.thaiText}</p>
          <button class="secondary-button" onclick="speakChinese('${item.text.replace(/\n/g, "，").replace(/'/g, "")}')">▶ 听朗读</button>
        </div>
        <p class="lead">${item.note}</p>
        <p class="thai">${item.thaiNote}</p>
        <h3 class="sub-heading">小练习 · แบบฝึกเล็กน้อย</h3>
        <p>${item.question}</p>
        <div class="mini-choice-grid">
          ${item.options.map((opt, oi) => `<button onclick="answerRelaxQuestion(${stageId}, ${unitIndex}, ${oi})">${opt}</button>`).join("")}
        </div>
        <p class="reading-feedback" id="relax-fb-${stageId}-${unitIndex}"></p>
      </section>`;
  }
  if (type === "fable") {
    return `
      <section class="content-section relax-corner">
        <div class="section-heading"><div><h2>放松角：${item.title}</h2><p>${typeLabel}</p></div></div>
        <div class="fable-box">
          <p>${item.story}</p>
          <p class="thai">${item.thaiStory}</p>
          <button class="secondary-button" onclick="speakChinese('${item.story.replace(/'/g, "")}')">▶ 听故事</button>
        </div>
        <p class="lead"><b>道理：</b>${item.lesson}</p>
        <p class="thai">${item.thaiLesson}</p>
        <h3 class="sub-heading">小练习 · แบบฝึกเล็กน้อย</h3>
        <p>${item.question}</p>
        <div class="mini-choice-grid">
          ${item.options.map((opt, oi) => `<button onclick="answerRelaxQuestion(${stageId}, ${unitIndex}, ${oi})">${opt}</button>`).join("")}
        </div>
        <p class="reading-feedback" id="relax-fb-${stageId}-${unitIndex}"></p>
      </section>`;
  }
  return "";
}

function answerRelaxQuestion(stageId, unitIndex, optionIndex) {
  const content = getRelaxContent(stageId, unitIndex);
  if (!content) return;
  const fb = document.querySelector(`#relax-fb-${stageId}-${unitIndex}`);
  if (!fb) return;
  const item = content.item;
  if (optionIndex === item.answer) {
    fb.innerHTML = `<span class="feedback-ok">✓ 对！</span>`;
  } else {
    fb.innerHTML = `<span class="try-again">再想想。</span>`;
    const prompt = item.idiom || item.title || item.char;
    recordMistake(prompt, item.options[item.answer], item.meaning || item.lesson || item.note || "");
  }
}

// ===== 我的生活页（v5）=====
function renderLife() {
  const topics = window.lifeContent.topics;
  return `
    ${pageHead("MY LIFE", "我的生活", window.lifeContent.intro, window.lifeContent.thaiIntro)}
    <section class="section">
      <div class="life-grid">
        ${topics.map((topic) => `
          <button class="life-card" onclick="openLifeTopic('${topic.id}')">
            <span class="life-icon">${topic.icon}</span>
            <h3>${topic.title}</h3>
            <p class="thai">${topic.thai}</p>
            <p>${topic.desc}</p>
            <p class="thai">${topic.thaiDesc}</p>
            <small>进入 →</small>
          </button>`).join("")}
      </div>
    </section>`;
}

function openLifeTopic(topicId) {
  const topic = window.lifeContent.topics.find((t) => t.id === topicId);
  if (!topic) return;
  dialogContent.innerHTML = `
    <p class="eyebrow">我的生活 · ชีวิตของฉัน</p>
    <h2>${topic.icon} ${topic.title}</h2>
    <p class="thai">${topic.thai}</p>
    <p>${topic.desc}</p>
    <p class="thai">${topic.thaiDesc}</p>
    <h3 class="sub-heading">核心词 · คำศัพท์</h3>
    <div class="learning-item-grid">
      ${topic.words.map((w) => `
        <article class="learning-item">
          <button class="play-button" onclick="speakChinese('${w.zh}')" aria-label="播放 ${w.zh}">▶</button>
          <strong class="content-text">${w.zh}</strong>
          <span class="pinyin-line">${w.pinyin}</span>
          <small>${w.thai}</small>
        </article>`).join("")}
    </div>
    <h3 class="sub-heading">对话 · บทสนทนา</h3>
    <div class="dialogue-list">
      ${topic.dialogue.map((line, i) => `
        <article class="dialogue-row">
          <span class="dialogue-num">${String(i + 1).padStart(2, "0")}</span>
          <button class="play-button" onclick="speakChinese('${line.zh.replace(/'/g, "")}')" aria-label="播放">▶</button>
          <div><strong>${line.zh}</strong><span>${line.pinyin}</span><small>${line.thai}</small></div>
        </article>`).join("")}
    </div>
    <div class="life-task">
      <p class="eyebrow">生活小任务 · งานเล็ก ๆ</p>
      <p>${topic.task}</p>
      <p class="thai">${topic.thaiTask}</p>
    </div>
    <div class="mini-game-actions">
      <button class="primary-button" onclick="document.querySelector('#dialog').close()">好的 · ตกลง</button>
    </div>`;
  dialog.showModal();
}

// ===== 笔顺动画（v7）=====
const strokeState = { charIndex: -1, strokeIndex: 0, timer: null };

function initStrokeCards() {
  window.strokeChars.forEach((c, i) => {
    const el = document.querySelector(`[data-stroke-card="${c.char}"]`);
    if (el) el.onclick = () => openStrokeBoard(i);
  });
}

function renderStrokeBoard(stageId, unitIndex) {
  if (stageId !== 2) return "";
  const unitChars = (window.stageCurriculum[2][unitIndex].items || []).slice(0, 3).map((item) => item.hanzi);
  const available = window.strokeChars.filter((c) => unitChars.includes(c.char));
  if (!available.length) return "";
  return `
    <section class="content-section stroke-section">
      <div class="section-heading"><div><h2>笔顺动画 · ลำดับขีด</h2><p>点一下，看这个字怎么写</p></div></div>
      <div class="stroke-grid">
        ${available.map((c) => `
          <button class="stroke-card" data-stroke-card="${c.char}" onclick="openStrokeBoard(${window.strokeChars.indexOf(c)})">
            <span class="stroke-char">${c.char}</span>
            <span class="pinyin-line">${c.pinyin}</span>
            <small>${c.thai}</small>
          </button>`).join("")}
      </div>
    </section>`;
}

function openStrokeBoard(charIndex) {
  const c = window.strokeChars[charIndex];
  strokeState.charIndex = charIndex;
  strokeState.strokeIndex = 0;
  dialogContent.innerHTML = `
    <p class="eyebrow">笔顺 · ลำดับขีด</p>
    <h2>${c.char} <span class="pinyin-line">${c.pinyin}</span> <span class="thai">${c.thai}</span></h2>
    <div class="stroke-board">
      <svg viewBox="${c.viewBox}" width="160" height="160" id="strokeSvg"></svg>
      <div class="stroke-tip" id="strokeTip">${c.tips[0]}</div>
    </div>
    <div class="mini-game-actions">
      <button class="secondary-button" onclick="strokePrev()">← 上一笔</button>
      <button class="primary-button" onclick="strokeNext()">下一笔 →</button>
      <button class="secondary-button" onclick="strokeAuto()">自动播放 ▶</button>
    </div>
    <button class="primary-button" onclick="document.querySelector('#dialog').close()">完成</button>`;
  dialog.showModal();
  renderStrokeStep();
}

function renderStrokeStep() {
  const c = window.strokeChars[strokeState.charIndex];
  const svg = document.querySelector("#strokeSvg");
  const tip = document.querySelector("#strokeTip");
  if (!svg || !tip) return;
  const visible = c.strokes.slice(0, strokeState.strokeIndex + 1);
  svg.innerHTML = `<g opacity="0.9">${visible.join("")}</g>`;
  tip.textContent = c.tips[strokeState.strokeIndex] || c.tips[c.tips.length - 1];
}

function strokeNext() {
  const c = window.strokeChars[strokeState.charIndex];
  if (strokeState.strokeIndex < c.strokes.length - 1) {
    strokeState.strokeIndex += 1;
    renderStrokeStep();
  }
}

function strokePrev() {
  if (strokeState.strokeIndex > 0) {
    strokeState.strokeIndex -= 1;
    renderStrokeStep();
  }
}

function strokeAuto() {
  const c = window.strokeChars[strokeState.charIndex];
  strokeState.strokeIndex = 0;
  renderStrokeStep();
  clearInterval(strokeState.timer);
  strokeState.timer = setInterval(() => {
    if (strokeState.strokeIndex < c.strokes.length - 1) {
      strokeState.strokeIndex += 1;
      renderStrokeStep();
    } else {
      clearInterval(strokeState.timer);
    }
  }, 900);
}

render();
refreshLearningData();
