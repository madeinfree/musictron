class IndexedDB {
  constructor() {
    this.db = null
    this.DBOpenRequest = window.indexedDB.open('searchCache', 1)
    this.initCallback = null
  }

  initializeDB(cb) {
    this.initCallback = cb
    this.DBOpenRequest.onsuccess = this.onSuccess.bind(this)
    this.DBOpenRequest.onupgradeneeded = this.onUpgradeneeded.bind(this)
  }

  onSuccess(ev) {
    console.log('database initialised')
    this.db = this.DBOpenRequest.result
    this.initCallback()
  }

  onUpgradeneeded(ev) {
    let db = ev.target.result;

    db.onerror = this.onDBError
    let objectStore = db.createObjectStore('searchCache', { keyPath: 'title' })

    console.log(`database ${objectStore} store created.`)
  }

  onSetTitleIntoDB(title, cb) {
    const db = this._getDB()
    const transaction = db.transaction('searchCache', 'readwrite').objectStore('searchCache')
    transaction.put({
      title: title
    })
    cb({
      title: title
    })
  }

  getDBItems(cb) {
    const db = this._getDB()
    const transaction = db.transaction('searchCache', 'readonly').objectStore('searchCache')
    const items = transaction.getAll()
    items.onsuccess = (ev) => {
      cb({
        items: ev.target.result
      })
    }
  }

  clearDBItems(cb) {
    const db = this._getDB()
    const transaction = db.transaction('searchCache', 'readwrite').objectStore('searchCache')
    transaction.clear()
    cb()
  }

  onDBError(ev) {
    throw new Error(ev)
  }

  _getDB() {
    return this.db
  }
}

export default IndexedDB
