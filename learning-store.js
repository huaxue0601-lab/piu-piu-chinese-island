(function () {
  const DB_NAME = "piu-piu-learning";
  const DB_VERSION = 1;

  function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("vocabulary")) {
          const vocabulary = db.createObjectStore("vocabulary", { keyPath: "id" });
          vocabulary.createIndex("dueDate", "dueDate");
        }
        if (!db.objectStoreNames.contains("recordings")) {
          const recordings = db.createObjectStore("recordings", { keyPath: "id" });
          recordings.createIndex("createdAt", "createdAt");
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function run(storeName, mode, operation) {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
      const request = operation(store);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
      transaction.oncomplete = () => db.close();
      transaction.onerror = () => reject(transaction.error);
    });
  }

  const getAll = (storeName) => run(storeName, "readonly", (store) => store.getAll());
  const get = (storeName, id) => run(storeName, "readonly", (store) => store.get(id));
  const put = (storeName, value) => run(storeName, "readwrite", (store) => store.put(value));
  const remove = (storeName, id) => run(storeName, "readwrite", (store) => store.delete(id));

  async function replaceVocabulary(items) {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction("vocabulary", "readwrite");
      const store = transaction.objectStore("vocabulary");
      store.clear();
      items.forEach((item) => store.put(item));
      transaction.oncomplete = () => { db.close(); resolve(); };
      transaction.onerror = () => reject(transaction.error);
    });
  }

  window.LearningStore = {
    listVocabulary: () => getAll("vocabulary"),
    saveVocabulary: (item) => put("vocabulary", item),
    deleteVocabulary: (id) => remove("vocabulary", id),
    replaceVocabulary,
    listRecordings: () => getAll("recordings"),
    getRecording: (id) => get("recordings", id),
    saveRecording: (item) => put("recordings", item),
    deleteRecording: (id) => remove("recordings", id),
  };
})();
