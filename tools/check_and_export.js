#!/usr/bin/env node
// Piu Piu 中文岛 · 自检 + 一键打包（v12）
// 用法：node tools/check_and_export.js [--export]  （--export 打包 zip 到上级目录）
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const ERRORS = [];
const NOTES = [];
let pass = 0;

function ok(cond, label) {
  if (cond) { pass += 1; }
  else { ERRORS.push(label); }
}

function read(p) {
  try { return fs.readFileSync(path.join(ROOT, p), "utf8"); }
  catch { return null; }
}

const files = [
  "index.html", "styles.css", "app.js", "content.js", "pinyin-data.js",
  "standards-content.js",
  "example-bank.js",
  "level-one.js",
  "thai-translations.js", "miniGameLibs.js", "materials.js", "culture.js",
  "life.js", "strokes.js", "enrichment.js", "milestones.js", "learning-store.js", "sw.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "assets/picture-talk/s4-u1.jpg",
  "audio/pinyin",
];
files.forEach((f) => ok(fs.existsSync(path.join(ROOT, f)), `缺少文件 ${f}`));

const html = read("index.html") || "";
const app = read("app.js") || "";
const standards = read("standards-content.js") || "";
const exampleBanks = read("example-bank.js") || "";
const thai = read("thai-translations.js") || "";
const games = read("miniGameLibs.js") || "";
const mats = read("materials.js") || "";
const cult = read("culture.js") || "";
const life = read("life.js") || "";
const strokes = read("strokes.js") || "";
const enrichment = read("enrichment.js") || "";
const milestones = read("milestones.js") || "";
const store = read("learning-store.js") || "";
const sw = read("sw.js") || "";
const levelOne = read("level-one.js") || "";

// —— 脚本版本参（v4 踩过的缓存坑）——
["styles.css", "pinyin-data.js", "content.js", "standards-content.js", "example-bank.js", "thai-translations.js", "materials.js", "culture.js", "strokes.js", "enrichment.js", "milestones.js", "learning-store.js"].forEach((s) => {
  ok(html.includes(`${s}?v=12`), `index.html 未带 v12 版本参 ${s}`);
});
ok(html.includes("miniGameLibs.js?v=12"), "miniGameLibs 未带 v12 版本参");
ok(html.includes("app.js?v=12"), "app.js 未带 v12 内容版本参");
ok(html.includes("life.js?v=12"), "life.js 未带 v12 内容版本参");
ok(html.includes("level-one.js?v=12"), "一级课程未带 v12 版本参");

// —— 游戏引擎（v3/v6）——
["toneLift", "breath", "flatCurly", "fish", "measure", "order", "wordMatch", "lifeReply"].forEach((g) => ok(games.includes(`${g}:`), `miniGameLibs 缺少 ${g}`));
[0, 2, 3, 5, 12, 13, 14, 15].forEach((i) => ok(games.includes(`${i}: "`), `playableGames 映射缺 ${i}`));
["openMiniGame", "renderPlayableQuestion", "answerPlayable", "nextPlayableQuestion", "renderPlayableDone", "pickOrderWord", "checkOrder", "shuffled"].forEach((fn) => ok(app.includes(`function ${fn}`), `app.js 缺函数 ${fn}`));
ok(games.split("pool:").length - 1 >= 6, "游戏题库不足");

// —— 易错本 / 次日复习（v3）——
["recordMistake", "loadMistakes", "renderMistakeBoard", "reviewMistake", "piu-mistakes"].forEach((k) => ok(app.includes(k), `易错本缺 ${k}`));

// —— 进度导入导出（v3）——
["exportProgress", "importProgressFromText", "renderBackupSection", "handleImportFile"].forEach((fn) => ok(app.includes(`function ${fn}`), `备份缺 ${fn}`));

// —— 声调录音（v3）——
ok(app.includes("startToneRecording"), "录音模块缺失");

// —— PWA（v3）——
ok(html.includes("serviceWorker"), "PWA 注册缺失");
ok(fs.existsSync(path.join(ROOT, "sw.js")), "sw.js 缺失");
ok(fs.existsSync(path.join(ROOT, "manifest.webmanifest")), "manifest 缺失");

// —— 输出型材料（v4/v6/v7）——
["dialogue", "reading", "pictureTalk", "menu", "numbers", "weather", "chat", "skit", "listening", "diary", "video"].forEach((k) => ok(mats.includes(k), `materials.js 缺 ${k}`));
["renderStageMaterials", "answerReading", "answerListening"].forEach((fn) => ok(app.includes(`function ${fn}`), `材料渲染缺 ${fn}`));
ok(html.includes("materials.js?v=12"), "materials 未加载");

// —— 文化角 / 放松角（v5/v7）——
["origins", "idioms", "poems", "fables", "facts", "slangs", "slots"].forEach((k) => ok(cult.includes(k), `culture.js 缺 ${k}`));
["2-2", "2-4", "2-6", "3-3", "3-6", "4-2", "4-4", "4-7", "4-8", "4-11", "5-0", "5-2", "5-3", "5-6"].forEach((s) => ok(cult.includes(`"${s}"`), `culture slots 缺 ${s}`));
ok(app.includes("getRelaxContent"), "放松角取数缺失");
ok(app.includes("function renderRelaxCorner"), "放松角渲染缺失");
ok(app.includes("function answerRelaxQuestion"), "放松角答题缺失");
try {
  const sandbox = { window: {} };
  vm.runInNewContext(cult, sandbox);
  const seen = new Set();
  Object.keys(sandbox.window.cultureContent.slots).forEach((key) => {
    const [stageId, unitIndex] = key.split("-").map(Number);
    const content = sandbox.getRelaxContent(stageId, unitIndex);
    const identity = `${content.type}:${content.item.title || content.item.idiom || content.item.char}`;
    ok(!seen.has(identity), `放松角重复内容 ${identity}`);
    seen.add(identity);
  });
} catch (error) {
  ERRORS.push(`放松角重复检查无法运行：${error.message}`);
}

// —— 我的生活（v5）——
["home", "food", "travel", "work", "piu"].forEach((t) => ok(life.includes(`"${t}"`), `life.js 缺主题 ${t}`));
ok(!life.includes('id: "us"') && !life.includes("甜言蜜语"), "甜蜜日常仍在生活页中");
["射手座", "三十九码", "ENTJ 人格", "捏捏", "水润口红", "番石榴汁", "榴莲", "开心果口味", "板栗", "泰式炭火烤肉锅"].forEach((item) => ok(life.includes(item), `Piu 个人资料缺 ${item}`));
ok(app.includes("function renderLife"), "生活页渲染缺失");
ok(app.includes("function openLifeTopic"), "生活主题弹窗缺失");
ok(app.includes("setRoute('life')"), "生活页路由缺失");

// —— 笔顺动画（v7）——
ok(strokes.includes("window.strokeChars"), "strokeChars 缺失");
["一", "十", "人", "日", "山", "水", "火", "口", "木"].forEach((c) => ok(strokes.includes(`"${c}"`), `笔顺缺字 ${c}`));
["initStrokeCards", "renderStrokeBoard", "openStrokeBoard", "renderStrokeStep", "strokeNext", "strokePrev", "strokeAuto"].forEach((fn) => ok(app.includes(`function ${fn}`), `笔顺缺 ${fn}`));

// —— 泰语对照（v3–v7）——
ok(thai.includes("เลือกคำลักษณนาม"), "泰语缺量词配对描述");
ok(thai.includes("เรียงเป็นประโยคตามลำดับภาษาจีน"), "泰语缺语序拼图描述");
const thaiCount = (thai.match(/"/g) || []).length / 2;
ok(thaiCount > 42, `泰语条目数 ${thaiCount} 未增长`);

// —— 页面结构（v2 基线回归）——
["stageCurriculum", "renderUnitDetail", "getTeachingDepth", "getUnitGames", "renderEmbeddedGame", "startEmbeddedGame", "speakChinese", "playAudio", "practiceSets"].forEach((k) => ok(app.includes(k), `基线功能缺 ${k}`));
const audioCount = fs.existsSync(path.join(ROOT, "audio/pinyin")) ? fs.readdirSync(path.join(ROOT, "audio/pinyin")).filter((f) => f.endsWith(".mp3")).length : 0;
ok(audioCount >= 63, `拼音音频仅 ${audioCount} 个`);
const audioFiles = fs.readdirSync(path.join(ROOT, "audio/pinyin")).filter((f) => f.endsWith(".mp3"));
audioFiles.forEach((file) => {
  const buffer = fs.readFileSync(path.join(ROOT, "audio/pinyin", file));
  const hasFrame = buffer.some((byte, index) => index < buffer.length - 1 && byte === 0xff && (buffer[index + 1] & 0xe0) === 0xe0);
  ok(buffer.length > 1500 && hasFrame, `音频不可解码或过短 ${file}`);
});
ok(sw.includes("pinyinAudio") && sw.includes("...pinyinAudio"), "离线缓存未包含拼音音频");
ok(games.includes("window.isCorrectOrder"), "语序拼图缺少可测试判定函数");
ok(app.includes("window.isCorrectOrder(q, playSession.picked)"), "语序拼图未使用统一判定函数");
ok(games.includes("answers: [[0, 1, 2, 3], [1, 0, 2, 3]]"), "语序拼图未接受自然的多种正确语序");
try {
  const sandbox = { window: {} };
  vm.runInNewContext(games, sandbox);
  const orderQuestions = sandbox.window.miniGameLibs.order.pool;
  orderQuestions.forEach((question, questionIndex) => {
    const accepted = question.answers || [question.answer];
    accepted.forEach((answer, answerIndex) => {
      ok(sandbox.window.isCorrectOrder(question, answer), `语序题 ${questionIndex + 1} 的正确答案 ${answerIndex + 1} 被误判`);
    });
  });
} catch (error) {
  ERRORS.push(`语序题回归测试无法运行：${error.message}`);
}
ok(enrichment.includes("window.pinyinEnrichment") && enrichment.includes("window.stageEnrichment"), "课程加餐内容缺失");

// —— 个性化学习档案（v10）——
["listVocabulary", "saveVocabulary", "replaceVocabulary", "listRecordings", "saveRecording", "getRecording"].forEach((fn) => ok(store.includes(fn), `学习档案缺 ${fn}`));
["renderVocabularyReview", "reviewVocabulary", "renderRecordingPortfolio", "playSavedRecording", "startLearningRecording"].forEach((fn) => ok(app.includes(`function ${fn}`), `个性化学习缺 ${fn}`));
ok(app.includes("[1, 3, 7, 14]"), "生词复习间隔缺失");
ok(app.includes("current.length < 2"), "录音重点未限制最多两项");
ok(milestones.includes("window.stageMilestones"), "阶段任务数据缺失");
ok(Object.keys(JSON.parse(JSON.stringify((milestones.match(/\"[1-5]-\d+\"/g) || [])))).length >= 9, "阶段任务数量不足");
ok(app.includes("function renderMilestone") && app.includes("function toggleMilestoneTask"), "阶段任务交互缺失");
ok(sw.includes("learning-store.js?v=12") && sw.includes("milestones.js?v=12"), "离线缓存未包含 v12 文件");

// —— 今日学习 / 三级提示 / 循环复习（v11）——
["getNextLearningTarget", "renderTodayPlan", "renderSupportControl", "setSupportLevel", "renderSpiralReview", "renderUnitSpecialPractice", "renderPairGame", "selectPair"].forEach((fn) => ok(app.includes(`function ${fn}`), `v11 学习流程缺 ${fn}`));
ok(app.includes('data-support = state.supportLevel') || app.includes('dataset.support = state.supportLevel'), "三级提示未绑定页面状态");
ok(app.includes("循环复习 · ทบทวนแบบวนซ้ำ"), "循环复习缺中泰对照");
ok(games.includes('type: "pair"') && games.includes("จับคู่คำกับความหมาย"), "词义配对交互或泰语缺失");
ok(games.includes("ตอบอย่างไรในชีวิตจริง"), "生活回应游戏缺泰语");

// —— 国际中文教育标准内容扩展（v11）——
ok(standards.includes("window.levelOneBenchmark"), "缺一级量化指标说明");
ok(standards.includes("window.standardLessonDepth"), "缺标准课程扩展数据");
["269", "300", "500", "48"].forEach((metric) => ok(standards.includes(`\"${metric}\"`), `一级指标缺 ${metric}`));
[2, 3, 4, 5].forEach((stageId) => ok(standards.includes(`  ${stageId}: [`), `标准扩展缺阶段 ${stageId}`));
ok((standards.match(/standardLine\(/g) || []).length >= 100, "标准扩展例句不足 100 条");
ok((standards.match(/thaiTask:/g) || []).length === 36, "36 课交际任务泰语未补齐");
["renderStandardBenchmark", "renderStandardLessonDepth"].forEach((fn) => ok(app.includes(`function ${fn}`), `标准内容渲染缺 ${fn}`));
ok(sw.includes("standards-content.js?v=12"), "离线缓存缺标准扩展内容");

// —— 逐课示范例库（v11）——
ok(app.includes("function renderLessonExampleBank"), "示范例库渲染缺失");
ok(app.includes("本课示范例库 · ตัวอย่างประจำบท"), "示范例库缺中泰标题");
ok(sw.includes("example-bank.js?v=12"), "离线缓存缺 v12 示范例库");
try {
  const sandbox = { window: {} };
  vm.runInNewContext(exampleBanks, sandbox);
  const banks = sandbox.window.lessonExampleBanks;
  const lessons = Object.values(banks).flat();
  const examples = lessons.flat();
  ok(lessons.length === 36, `示范例库课程数应为 36，实际 ${lessons.length}`);
  ok(examples.length >= 216, `示范例子应不少于 216，实际 ${examples.length}`);
  ok(lessons.every((items) => items.length >= 6), "存在少于 6 条示范的课程");
  ok(examples.every((item) => item.zh && item.pinyin && item.thai && item.kind && item.thaiKind), "示范例子缺中文、拼音、泰语或分类");
} catch (error) {
  ERRORS.push(`示范例库无法读取：${error.message}`);
}

// —— 正式一级首单元（v12）——
ok(levelOne.includes("window.levelOneCourse"), "缺正式一级课程数据");
ok(levelOne.includes("window.getLevelOneInventory"), "缺一级课程内容台账");
["renderLevelOneCatalog", "renderLevelOneCoverage", "renderLevelOneLesson", "answerLevelOneGame", "toggleLevelOneComplete"].forEach((fn) => ok(app.includes(`function ${fn}`), `一级课程缺函数 ${fn}`));
ok(sw.includes("level-one.js?v=12"), "离线缓存缺一级课程");
try {
  const sandbox = { window: {} };
  vm.runInNewContext(levelOne, sandbox);
  const course = sandbox.window.levelOneCourse;
  ok(course.lessons.length === 4, `一级首单元应为 4 课，实际 ${course.lessons.length}`);
  course.lessons.forEach((lesson, index) => {
    ok(lesson.words.length >= 8 && lesson.words.length <= 12, `一级第 ${index + 1} 课新词数量不在 8–12`);
    ok(lesson.grammar.length <= 2, `一级第 ${index + 1} 课语法超过 2 点`);
    ok(lesson.examples.length >= 8, `一级第 ${index + 1} 课例句不足 8 条`);
    ok(lesson.dialogues.length === 2, `一级第 ${index + 1} 课缺两段对话`);
    ok(lesson.words.every((item) => item.zh && item.pinyin && item.thai), `一级第 ${index + 1} 课词汇缺中拼泰`);
    ok(lesson.examples.every((item) => item.zh && item.pinyin && item.thai), `一级第 ${index + 1} 课例句缺中拼泰`);
    ok(lesson.dialogues.flatMap((item) => item.lines).every((item) => item.zh && item.pinyin && item.thai), `一级第 ${index + 1} 课对话缺中拼泰`);
    ok(lesson.listening.zh && lesson.listening.pinyin && lesson.listening.thai, `一级第 ${index + 1} 课听力缺中拼泰`);
    ok(lesson.reading.zh && lesson.reading.pinyin && lesson.reading.thai, `一级第 ${index + 1} 课短文缺中拼泰`);
    ok(lesson.game.options[lesson.game.answer], `一级第 ${index + 1} 课游戏答案无效`);
  });
  const inventory = sandbox.window.getLevelOneInventory();
  ok(inventory.words > 30 && inventory.grammar === 8, "一级台账统计异常");
} catch (error) {
  ERRORS.push(`正式一级课程无法读取：${error.message}`);
}

// —— 语法（node --check）——
["app.js", "content.js", "standards-content.js", "example-bank.js", "level-one.js", "pinyin-data.js", "thai-translations.js", "miniGameLibs.js", "materials.js", "culture.js", "life.js", "strokes.js", "enrichment.js", "milestones.js", "learning-store.js", "sw.js"].forEach((f) => {
  try { execSync(`node --check "${path.join(ROOT, f)}"`, { stdio: "pipe" }); pass += 1; }
  catch { ERRORS.push(`语法错误 ${f}`); }
});

// —— 报告 ——
console.log(`\n===== Piu Piu 中文岛自检报告 =====`);
console.log(`通过 ${pass} 项 · 失败 ${ERRORS.length} 项\n`);
if (ERRORS.length) { ERRORS.forEach((e) => console.log(`  ✗ ${e}`)); }
else { console.log("  ✓ 全部检查通过"); }
if (NOTES.length) { NOTES.forEach((n) => console.log(`  ! ${n}`)); }

// —— 导出（可选）——
if (process.argv.includes("--export")) {
  const outName = `Piu-Piu-Chinese-Island-v12-2026-10-17.zip`;
  const outPath = path.join(ROOT, "..", outName);
  try {
    execSync(`cd "${ROOT}" && zip -rq "${outPath}" . -x "*.DS_Store" -x ".git/*" -x "node_modules/*"`);
    console.log(`\n✓ 已打包：${outPath}`);
  } catch (e) {
    console.log(`\n✗ 打包失败：${e.message}（可手动 cd 到项目目录后 zip -r 打包）`);
  }
}

process.exit(ERRORS.length ? 1 : 0);
