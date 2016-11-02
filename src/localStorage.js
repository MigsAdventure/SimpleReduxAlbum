export function loadState() {
  try {
    let serializedState = localStorage.getItem('state'); //get whole state of app and put into localStorage
    if(!serializedState) throw new Error();
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

export function saveState(state) {
  let serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
}
