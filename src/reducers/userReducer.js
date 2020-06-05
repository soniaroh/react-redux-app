import * as actions from '../actions/constants';

const initialState = {
  users: [],
  loading: false,
  error: false
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FETCH_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      }
      case actions.FETCH_SUCCESS:
      return {
        users: action.payload.users,
        loading: false,
        error: false
      }
      case actions.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error:true
        
      }
    default: return state
  }
}

export default userReducer