import * as types from "../actions/actionTypes";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case types.LOGOUT:
      return{
        ...state,
        user: null
      }
    default:
      return state;
  }
};


export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};