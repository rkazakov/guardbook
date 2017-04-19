function guards(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LEVEL':
      console.log('state----', state);
      console.log('action----', action);
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i], level: state[i].level + 1},
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }
}

export default guards;
