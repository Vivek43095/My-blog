import { LOGIN, LOGOUT } from '../actions/index';

const initialState = {
  isUserLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
