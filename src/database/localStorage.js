const _supportLocalStorage = () => {
  return !!self.localStorage === true
}

const _localStorageInstance = () => {
  return self.localStorage
}

const _ItemsIntoArray = (items) => {
  return items.split(',')
}

const _setItemIntoLocalStorage = (key, value) => {
  _localStorageInstance.setItem(key, value)
}

const getItemFromLocalStorage = (key) => {
  return _localStorageInstance.getItem(key)
}

const setItemIntoLocalStorage = (key, value) => {
  if (_supportLocalStorage) {
    const cacheItems = getItemFromLocalStorage(key)
    if (cacheItems.length && !value.indexOf(cacheItems)) {
      const cacheItemsIntoArray = _ItemsIntoArray(cacheItems)
      cacheItemsIntoArray.push(value)
      _setItemIntoLocalStorage(key, cacheItemsIntoArray)
    }
    return { key, value }
  }
  alert('localStorage not support...')
}

export {
  setItemIntoLocalStorage
}
