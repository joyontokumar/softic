import {
  FETCH_POSTS_FAILURE_REQUEST,
  FETCH_POSTS_SUCCESS_REQUEST,
  FETCH_POSTS__REQUEST,
} from "../types";
const initalState = {
  loading: false,
  postsData: [],
  error: "",
};
export const postReducers = (state = initalState, action: any) => {
  switch (action.type) {
    case FETCH_POSTS__REQUEST:
      return { ...state, loading: true };
    case FETCH_POSTS_SUCCESS_REQUEST:
      return {
        loading: false,
        postsData: action.payload,
      };
    case FETCH_POSTS_FAILURE_REQUEST:
      return {
        loading: false,
        postsData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default postReducers;
