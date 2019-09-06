import { ALL_IMAGES } from '../actions/index'

export default function (state = [], action = {}) {
  switch (action.type) {
    case ALL_IMAGES:
      return action.payload
    default:
      return state
  }
}