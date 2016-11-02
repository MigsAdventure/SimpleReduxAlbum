export function addPic(picPackage) {
  return {
    type: 'ADD_PIC',
    payload: { picPackage },
  };
}

export function delPic(id) {
  return {
    type: 'DELETE_PIC',
    payload: { id },
  };
}

export function getPics() {
  return {
    type: 'GET_PICS',
  };
}

export function editPic() {
  return {
    type: 'EDIT_PIC',
  };
}
