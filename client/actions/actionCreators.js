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
