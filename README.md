# redux-storage-engine-electron-store

[electron-store][] based engine for [redux-storage][].

## Installation

    npm install --save redux-storage-engine-electron-store

## Usage

Simply invoke the function exported from this module to persist the Redux state
store in the default store created by [redux-storage][].

```js
import createEngine from 'redux-storage-engine-electron-store';
const engine = createEngine();
```

The function accepts an optional `options` argument with the following keys:

* `store`: a custom [redux-storage][] store to use instead of the default one,
  or an object that is passed directly to the constructor of `Store` in
  [redux-storage][] in order to construct a new store.

* `key`: an optional key under which the state will be stored in the store
  object. When `undefined`, the entire store will be used to store the Redux
  state.

For instance, to persist the Redux store into a file named `state.json` under
the key named `reduxStore`:

```js
import createEngine from 'redux-storage-engine-electron-store';
const engine = createEngine({
  key: 'reduxStore',
  store: {
    name: 'reduxStore'
  }
});
```

  [redux-storage]: https://github.com/react-stack/redux-storage
  [electron-store]: https://github.com/sindresorhus/electron-store