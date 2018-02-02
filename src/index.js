const Store = require('electron-store')
const isPlainObj = require('is-plain-obj')

function rejectWithMessage (error) {
  return Promise.reject(error.message)
}

const defaults = {
  store: {}
}

export default (options) => {
  options = Object.assign({}, defaults, options)

  let store
  if (isPlainObj(options.store)) {
    store = new Store(options.store)
  } else {
    store = options.store
  }

  const { key } = options

  return {
    load () {
      return new Promise(resolve => {
        if (key) {
          resolve(store.get(key) || {})
        } else {
          // we cannot simply return store.store from here because it has no
          // constructor so .hasOwnProperty() would not work on it
          resolve(Object.assign({}, store.store))
        }
      }).catch(rejectWithMessage)
    },

    save (state) {
      return new Promise(resolve => {
        if (key) {
          store.set(key, state)
        } else {
          store.store = state
        }
      }).catch(rejectWithMessage)
    }
  }
}
