function guards(state = [], action) {
  switch(action.type) {
    case 'INCREASE_LEVEL':
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], level: state[i].level + 1},
        ...state.slice(i + 1),
      ]
    case 'DELETE_GUARD':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]
    default:
      return state;
  }
}

export default guards;
