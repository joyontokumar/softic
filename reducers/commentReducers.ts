import {
  FETCH_COMMENTS_FAILURE_REQUEST,
  FETCH_COMMENTS_SUCCESS_REQUEST,
  FETCH_COMMENTS__REQUEST,
} from "../types";
const initalState = {
  loading: false,
  commentData: [],
  error: "",
};
export const commentReducers = (state = initalState, action: any) => {
  switch (action.type) {
    case FETCH_COMMENTS__REQUEST:
      return { ...state, loading: true };
    case FETCH_COMMENTS_SUCCESS_REQUEST:
      return {
        loading: false,
        commentData: action.payload,
      };
    case FETCH_COMMENTS_FAILURE_REQUEST:
      return {
        loading: false,
        commentData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default commentReducers;
