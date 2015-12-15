import * as types from '../actions/action-types'

const initialState = {
  session: {
    accessToken : null,
    client      : null,
    expiry      : null,
    tokenType   : null,
    uid         : null
  }
};

export default function session(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        session: payload
      };
    case types.LOGOUT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

