import { 
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_RESET,
  COUNTER_UPDATE_NAME
} from '../actions/types';


const initialState = {
  count: 0,
  name: 'Nome do contador'
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case COUNTER_RESET:
      return {
        ...state,
        ...initialState
      }
    case COUNTER_UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}

export default counterReducer;
