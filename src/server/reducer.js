import {
  addRoom,
  removeRoom
} from './core.js'

export default function reducer (state, actions) {
  // console.log('state', state, actions)
  switch (actions.type) {
    case 'ADD_ROOM':
      return addRoom(state, actions.room)
    case 'REMOVE_ROOM':
      return removeRoom(state, actions.payload)
  }
  return state
}