export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_PIC':
      return [...state, action.payload.picPackage];
    case 'DELETE_PIC':
      return state.filter(pic => pic.id !== action.payload.id)
    case 'EDIT_PIC':
      return state;
    default:
      return state;
  }
}
