// 阶段4/5 输出型与真实材料（v4 起，v6 扩真实材料，v7 加听力+情景剧）
// 挂点：阶段4课0/2/4/5/6/11、阶段5课0/1/4

window.stageMaterials = {
  4: {
    0: {
      dialogue: {
        title: "见面聊一聊",
        thai: "คุยกันเมื่อพบกัน",
        intro: "听一段 Hua 和 Piu 的对话，一句一句跟读。",
        thaiIntro: "ฟังบทสนทนาระหว่าง Hua กับ Piu แล้วอ่านตามทีละประโยค",
        lines: [
          { zh: "你好！", pinyin: "nǐ hǎo", thai: "สวัสดี" },
          { zh: "你好，今天怎么样？", pinyin: "nǐ hǎo, jīntiān zěnme yàng", thai: "สวัสดี วันนี้เป็นยังไงบ้าง" },
          { zh: "很好，你呢？", pinyin: "hěn hǎo, nǐ ne", thai: "สบายดี แล้วคุณล่ะ" },
          { zh: "我也很好。", pinyin: "wǒ yě hěn hǎo", thai: "ฉันก็สบายดี" },
          { zh: "我们一起去吃饭吧？", pinyin: "wǒmen yìqǐ qù chīfàn ba", thai: "เราไปกินข้าวด้วยกันไหม" },
          { zh: "好啊，吃什么？", pinyin: "hǎo a, chī shénme", thai: "ได้สิ กินอะไรดี" },
          { zh: "你想吃泰国菜还是中国菜？", pinyin: "nǐ xiǎng chī Tàiguó cài háishi Zhōngguó cài", thai: "อยากกินอาหารไทยหรืออาหารจีน" },
          { zh: "都可以，你喜欢就好。", pinyin: "dōu kěyǐ, nǐ xǐhuan jiù hǎo", thai: "ได้หมด เอาที่เธอชอบเลย" },
        ],
      },
      reading: {
        title: "新朋友",
        thai: "เพื่อนใหม่",
        text: "今天，我认识了一个新朋友。她叫 Piu，来自泰国。我们聊了很久，她说她喜欢中文。我们说好，下次一起学中文。",
        questions: [
          { q: "新朋友叫什么名字？", thaiQ: "เพื่อนใหม่ชื่ออะไร", options: ["Hua", "Piu", "小明"], thaiOptions: ["Hua", "Piu", "เสี่ยวหมิง"], answer: 1, explain: "她叫 Piu。", thaiExplain: "เธอชื่อ Piu" },
          { q: "Piu 来自哪里？", thaiQ: "Piu มาจากที่ไหน", options: ["中国", "泰国", "日本"], thaiOptions: ["จีน", "ไทย", "ญี่ปุ่น"], answer: 1, explain: "她来自泰国。", thaiExplain: "เธอมาจากประเทศไทย" },
          { q: "她们说好下次做什么？", thaiQ: "พวกเธอตกลงว่าจะทำอะไรครั้งหน้า", options: ["一起学中文", "一起去旅游", "一起看电影"], thaiOptions: ["เรียนภาษาจีนด้วยกัน", "ไปเที่ยวด้วยกัน", "ดูหนังด้วยกัน"], answer: 0, explain: "她们说好下次一起学中文。", thaiExplain: "ตกลงว่าครั้งหน้าจะเรียนภาษาจีนด้วยกัน" },
        ],
      },
      pictureTalk: {
        title: "看图写话",
        thai: "ดูภาพแล้วเล่าเรื่อง",
        image: "assets/picture-talk/s4-u1.jpg",
        prompts: [
          "图上有什么人？",
          "她们在哪里？在做什么？",
          "她们的表情怎么样？",
          "猜一猜她们在说什么。",
        ],
        thaiPrompts: [
          "ในภาพมีใครบ้าง",
          "พวกเธออยู่ที่ไหน กำลังทำอะไร",
          "สีหน้าของพวกเธอเป็นอย่างไร",
          "เดาว่าพวกเธอกำลังพูดอะไรอยู่",
        ],
        starter: "在一个阳光很好的下午，两个好朋友坐在咖啡店里聊天……",
        thaiStarter: "ในช่วงบ่ายที่แดดดี เพื่อนสองคนนั่งคุยกันในร้านกาแฟ...",
      },
    },
    2: {
      menu: {
        title: "真实菜单",
        thai: "เมนูจริง",
        note: "去中餐厅时，你会看到这样的菜单。",
        thaiNote: "เมื่อไปร้านอาหารจีน จะเห็นเมนูแบบนี้",
        dishes: [
          { zh: "番茄炒蛋", pinyin: "fānqié chǎo dàn", thai: "ไข่ผัดมะเขือเทศ", price: "28元" },
          { zh: "鱼香肉丝", pinyin: "yúxiāng ròusī", thai: "หมูเส้นผัดซอสหยูเซียง", price: "32元" },
          { zh: "宫保鸡丁", pinyin: "gōngbǎo jīdīng", thai: "ไก่ผัดเม็ดมะม่วงหิมพานต์", price: "35元" },
          { zh: "麻婆豆腐", pinyin: "mápó dòufu", thai: "เต้าหู้ผัดซอสเผ็ดหม่าโผ", price: "18元" },
          { zh: "米饭", pinyin: "mǐfàn", thai: "ข้าวสวย", price: "3元" },
          { zh: "饺子", pinyin: "jiǎozi", thai: "เกี๊ยวซ่า", price: "22元" },
          { zh: "酸辣汤", pinyin: "suānlà tāng", thai: "ซุปเปรี้ยวเผ็ด", price: "15元" },
        ],
        orderDialog: [
          { role: "你", zh: "你好，我要一份番茄炒蛋和一碗米饭。", pinyin: "nǐ hǎo, wǒ yào yí fèn fānqié chǎo dàn hé yì wǎn mǐfàn", thai: "สวัสดี ขอไข่ผัดมะเขือเทศหนึ่งที่กับข้าวหนึ่งถ้วย" },
          { role: "服务员", zh: "好的，还要别的吗？", pinyin: "hǎo de, hái yào bié de ma", thai: "ได้ค่ะ เอาอย่างอื่นเพิ่มไหม" },
          { role: "你", zh: "不要辣，谢谢。", pinyin: "bú yào là, xièxie", thai: "ไม่เผ็ดนะคะ ขอบคุณ" },
          { role: "服务员", zh: "好的，请稍等。", pinyin: "hǎo de, qǐng shāo děng", thai: "ได้ค่ะ กรุณารอสักครู่" },
        ],
      },
    },
    4: {
      numbers: {
        title: "数字与时间",
        thai: "ตัวเลขและเวลา",
        numbers: [
          { zh: "一", pinyin: "yī", thai: "1" },
          { zh: "二", pinyin: "èr", thai: "2" },
          { zh: "三", pinyin: "sān", thai: "3" },
          { zh: "四", pinyin: "sì", thai: "4" },
          { zh: "五", pinyin: "wǔ", thai: "5" },
          { zh: "六", pinyin: "liù", thai: "6" },
          { zh: "七", pinyin: "qī", thai: "7" },
          { zh: "八", pinyin: "bā", thai: "8" },
          { zh: "九", pinyin: "jiǔ", thai: "9" },
          { zh: "十", pinyin: "shí", thai: "10" },
        ],
        times: [
          { zh: "几点？", pinyin: "jǐ diǎn", thai: "กี่โมง" },
          { zh: "三点", pinyin: "sān diǎn", thai: "บ่าย 3 โมง" },
          { zh: "上午九点", pinyin: "shàngwǔ jiǔ diǎn", thai: "9 โมงเช้า" },
          { zh: "下午五点", pinyin: "xiàwǔ wǔ diǎn", thai: "บ่าย 5 โมง" },
          { zh: "晚上七点", pinyin: "wǎnshang qī diǎn", thai: "ทุ่ม 1" },
          { zh: "星期六", pinyin: "xīngqīliù", thai: "วันเสาร์" },
        ],
      },
    },
    5: {
      weather: {
        title: "天气预报",
        thai: "พยากรณ์อากาศ",
        cities: [
          { city: "曼谷", pinyin: "Màngǔ", temp: "33°C", zh: "晴，很热", thai: "แดดออก ร้อนมาก" },
          { city: "武汉", pinyin: "Wǔhàn", temp: "20°C", zh: "多云，可能下雨", thai: "มีเมฆมาก ฝนอาจตก" },
          { city: "北京", pinyin: "Běijīng", temp: "12°C", zh: "晴，有点冷", thai: "แดดออก หนาวนิดหน่อย" },
        ],
        question: "看这三座城市的天气，你穿什么衣服？",
        thaiQuestion: "ดูอากาศ 3 เมือง แล้วคุณจะใส่ชุดอะไร",
      },
    },
    6: {
      chat: {
        title: "工作聊天",
        thai: "แชตเรื่องงาน",
        intro: "这是 Hua 和同事的真实聊天。",
        thaiIntro: "นี่คือแชตจริงระหว่าง Hua กับเพื่อนร่วมงาน",
        bubbles: [
          { who: "同事", zh: "在吗？", pinyin: "zài ma", thai: "อยู่ไหม" },
          { who: "你", zh: "在，怎么了？", pinyin: "zài, zěnme le", thai: "อยู่จ๊ะ มีอะไรเหรอ" },
          { who: "同事", zh: "方案可以今天发我吗？", pinyin: "fāng'àn kěyǐ jīntiān fā wǒ ma", thai: "ส่งแผนให้วันนี้ได้ไหม" },
          { who: "你", zh: "我还在做，晚一点发你。", pinyin: "wǒ hái zài zuò, wǎn yìdiǎn fā nǐ", thai: "กำลังทำอยู่ เดี๋ยวส่งให้นะ" },
          { who: "同事", zh: "好的，谢谢！", pinyin: "hǎo de, xièxie", thai: "ได้ ขอบคุณมาก" },
        ],
      },
    },
    11: {
      skit: {
        title: "情景剧：周末计划",
        thai: "บทละครสั้น: แผนสุดสัปดาห์",
        intro: "两人分角色演出来，可以自由改内容。",
        thaiIntro: "แสดงเป็นบทบาท คนหนึ่งเป็น Hua อีกคนเป็น Piu เปลี่ยนเนื้อหาได้",
        scenes: [
          { who: "Hua", zh: "这个周末你想做什么？", pinyin: "zhège zhōumò nǐ xiǎng zuò shénme", thai: "สุดสัปดาห์นี้อยากทำอะไร" },
          { who: "Piu", zh: "我想去公园走走。", pinyin: "wǒ xiǎng qù gōngyuán zǒuzou", thai: "อยากไปเดินเล่นสวนสาธารณะ" },
          { who: "Hua", zh: "好啊，我们星期六上午去？", pinyin: "hǎo a, wǒmen xīngqīliù shàngwǔ qù", thai: "ได้สิ ไปเช้าวันเสาร์ไหม" },
          { who: "Piu", zh: "上午我有课，下午去可以吗？", pinyin: "shàngwǔ wǒ yǒu kè, xiàwǔ qù kěyǐ ma", thai: "เช้าฉันมีเรียน บ่ายไปได้ไหม" },
          { who: "Hua", zh: "可以，那下午三点见。", pinyin: "kěyǐ, nà xiàwǔ sān diǎn jiàn", thai: "ได้ แล้วเจอกันบ่าย 3 โมง" },
          { who: "Piu", zh: "好，我们带点水吧，今天很热。", pinyin: "hǎo, wǒmen dài diǎn shuǐ ba, jīntiān hěn rè", thai: "ได้ เอาน้ำไปหน่อยนะ วันนี้ร้อนมาก" },
          { who: "Hua", zh: "好主意！星期六见。", pinyin: "hǎo zhǔyi! xīngqīliù jiàn", thai: "ความคิดดี! เจอกันวันเสาร์" },
        ],
      },
    },
  },
  5: {
    0: {
      reading: {
        title: "周末的下午",
        thai: "บ่ายวันสุดสัปดาห์",
        text: "星期六下午，我不上班。我先睡了一个午觉，然后去超市买了菜。回到家，我做了饭，看了一会儿电视。晚上，我和朋友视频聊天。我很喜欢这样的下午。",
        questions: [
          { q: "星期六下午，我做什么了？", thaiQ: "บ่ายวันเสาร์ฉันทำอะไร", options: ["上班", "睡觉、买菜、做饭", "去旅游"], thaiOptions: ["ทำงาน", "นอน ซื้อของ ทำอาหาร", "ไปเที่ยว"], answer: 1, explain: "我先睡午觉，然后去超市买菜，回家做饭。", thaiExplain: "นอนกลางวัน ไปซูเปอร์มาร์เก็ตซื้อของ แล้วกลับมาทำอาหาร" },
          { q: "我从哪里买菜？", thaiQ: "ฉันซื้อของจากที่ไหน", options: ["超市", "菜市场", "网上"], thaiOptions: ["ซูเปอร์มาร์เก็ต", "ตลาดสด", "ออนไลน์"], answer: 0, explain: "我去了超市。", thaiExplain: "ฉันไปซูเปอร์มาร์เก็ต" },
          { q: "晚上我和谁聊天？", thaiQ: "ตอนเย็นฉันคุยกับใคร", options: ["家人", "朋友", "同事"], thaiOptions: ["ครอบครัว", "เพื่อน", "เพื่อนร่วมงาน"], answer: 1, explain: "晚上我和朋友视频聊天。", thaiExplain: "ตอนเย็นฉันวิดีโอคอลกับเพื่อน" },
          { q: "我喜欢这样的下午吗？", thaiQ: "ฉันชอบช่วงบ่ายแบบนี้ไหม", options: ["喜欢", "不喜欢", "不知道"], thaiOptions: ["ชอบ", "ไม่ชอบ", "ไม่ทราบ"], answer: 0, explain: "我很喜欢这样的下午。", thaiExplain: "ฉันชอบช่วงบ่ายแบบนี้มาก" },
        ],
      },
      diary: {
        title: "写日记模板",
        thai: "แม่แบบไดอารี่",
        note: "每天写四句：时间、事情、感受、明天计划。",
        thaiNote: "เขียน 4 ประโยคทุกวัน: เวลา, เหตุการณ์, ความรู้สึก, แผนพรุ่งนี้",
        template: [
          { label: "时间", zh: "今天是……", thai: "วันนี้..." },
          { label: "事情", zh: "我……（做了什么）", thai: "ฉัน...(ทำอะไร)" },
          { label: "感受", zh: "我觉得……", thai: "ฉันรู้สึกว่า..." },
          { label: "明天", zh: "明天我想……", thai: "พรุ่งนี้ฉันอยาก..." },
        ],
      },
      video: {
        title: "看视频任务卡",
        thai: "การ์ดภารกิจดูวิดีโอ",
        note: "找一个 1–2 分钟的中文视频，看三遍。",
        thaiNote: "หาวิดีโอจีน 1–2 นาที แล้วดู 3 รอบ",
        steps: [
          { n: "第一遍", zh: "只看画面，猜主题是什么。", thai: "รอบแรก: ดูแค่ภาพ แล้วเดาว่าเกี่ยวกับอะไร" },
          { n: "第二遍", zh: "看字幕，找出 3 个认识的词。", thai: "รอบสอง: ดูคำบรรยาย หา 3 คำที่รู้จัก" },
          { n: "第三遍", zh: "听声音，记下 1 句话，跟读。", thai: "รอบสาม: ฟังเสียง จด 1 ประโยค แล้วอ่านตาม" },
        ],
      },
    },
    1: {
      listening: {
        title: "电话约时间",
        thai: "โทรนัดเวลา",
        intro: "听 Hua 和 Piu 的电话，回答三个问题。",
        thaiIntro: "ฟังโทรศัพท์ระหว่าง Hua กับ Piu แล้วตอบ 3 ข้อ",
        transcript: "（电话铃声）Piu：喂？ Hua：喂，Piu，是我。明天你有时间吗？ Piu：有啊，怎么了？ Hua：我们明天去看电影吧。 Piu：好啊，几点？ Hua：下午四点怎么样？ Piu：可以，在哪儿见？ Hua：在电影院门口见。 Piu：好的，明天见！ Hua：明天见！",
        questions: [
          { q: "Hua 打电话约 Piu 做什么？", thaiQ: "Hua โทรชวน Piu ไปทำอะไร", options: ["看电影", "吃饭", "逛街"], thaiOptions: ["ดูหนัง", "กินข้าว", "เดินซื้อของ"], answer: 0, explain: "我们明天去看电影吧。", thaiExplain: "พรุ่งนี้ไปดูหนังกัน" },
          { q: "她们几点见？", thaiQ: "พวกเธอเจอกันกี่โมง", options: ["上午九点", "下午四点", "晚上七点"], thaiOptions: ["เก้าโมงเช้า", "สี่โมงเย็น", "หนึ่งทุ่ม"], answer: 1, explain: "下午四点。", thaiExplain: "สี่โมงเย็น" },
          { q: "她们在哪儿见？", thaiQ: "พวกเธอเจอกันที่ไหน", options: ["超市门口", "电影院门口", "公园门口"], thaiOptions: ["หน้าซูเปอร์มาร์เก็ต", "หน้าโรงภาพยนตร์", "หน้าสวนสาธารณะ"], answer: 1, explain: "在电影院门口见。", thaiExplain: "เจอกันหน้าโรงภาพยนตร์" },
        ],
      },
    },
    4: {
      skit: {
        title: "情景剧：机场接机",
        thai: "บทละครสั้น: รับที่สนามบิน",
        intro: "Hua 在机场接 Piu。里面有武汉热干面的彩蛋哦。",
        thaiIntro: "Hua มารับ Piu ที่สนามบิน มีเซอร์ไพรส์ก๋วยเตี๋ยวร้อนแห้งอู่ฮั่นด้วยนะ",
        scenes: [
          { who: "Piu", zh: "Hua！我在这里！", pinyin: "Hua! wǒ zài zhèlǐ", thai: "Hua! ฉันอยู่นี่" },
          { who: "Hua", zh: "Piu，好久不见！你累吗？", pinyin: "Piu, hǎo jiǔ bú jiàn! nǐ lèi ma", thai: "Piu ไม่ได้เจอกันนาน เหนื่อยไหม" },
          { who: "Piu", zh: "有一点，但是看到你就不累了。", pinyin: "yǒu yìdiǎn, dànshì kàndào nǐ jiù bú lèi le", thai: "เหนื่อยนิดหน่อย แต่เห็นเธอแล้วหายเหนื่อย" },
          { who: "Hua", zh: "我们回家吧，我带你去吃热干面！", pinyin: "wǒmen huí jiā ba, wǒ dài nǐ qù chī rè gān miàn", thai: "กลับบ้านกันเถอะ ฉันพาไปกินบะหมี่ร้อนแห้ง" },
          { who: "Piu", zh: "热干面是什么？", pinyin: "rè gān miàn shì shénme", thai: "บะหมี่ร้อนแห้งคืออะไร" },
          { who: "Hua", zh: "是武汉最有名的面，你一定会喜欢。", pinyin: "shì Wǔhàn zuì yǒumíng de miàn, nǐ yídìng huì xǐhuan", thai: "เป็นบะหมี่ดังที่สุดของอู่ฮั่น เธอต้องชอบแน่ ๆ" },
        ],
      },
    },
  },
};
