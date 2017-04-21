// increase level
export function increaseLevel(index) {
  return {
    type: 'INCREASE_LEVEL',
    index
  }
}

// increase level
export function deleteGuard(index) {
  return {
    type: 'DELETE_GUARD',
    index
  }
}
