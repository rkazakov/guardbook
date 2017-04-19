function items(state = 1, action) {
  switch(action.type) {
    case 'INCREMENT_ITEMS':
      const i = action.index;
      return i + 1;
    default:
      return state;
  }
}

export default items;
