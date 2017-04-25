import guardsApi from '../api/mockGuardsApi';

// increase level
export function increaseLevel(index) {
  return {
    type: 'INCREASE_LEVEL',
    index
  }
}

// delete guard
export function deleteGuard(guardId) {
  return {
    type: 'DELETE_GUARD',
    guardId
  }
}

// save guard
export function addGuard(guard) {
  return {
    type: 'ADD_GUARD',
    guard
  }
}

export function loadGuardsSuccess(guards) {
  return {
    type: 'LOAD_GUARDS_SUCCESS',
    guards
  }
}

export function loadGuards() {
  return function(dispatch) {
    return guardsApi.getAllGuards().then((guards) => {
      dispatch(loadGuardsSuccess(guards));
    }).catch((error) => {
      throw(error);
    });
  }
}
