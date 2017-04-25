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
      const guardId = action.guardId;
      const index = state.findIndex((guard) => guard.id === guardId)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ]
    case 'ADD_GUARD':
      return [
        ...state,
        action.guard
      ]
    case 'LOAD_GUARDS_SUCCESS':
      console.log(action.guards);
      return action.guards;
    default:
      return state;
  }
}

export default guards;
