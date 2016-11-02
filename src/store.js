import { createStore } from 'redux';
import reducers from './reducers';

import { loadState, saveState } from './localStorage';

console.log('loadState:', loadState());
const store = createStore(reducers, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
