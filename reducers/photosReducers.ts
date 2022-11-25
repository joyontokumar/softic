import {
  FETCH_PHOTOS_FAILURE_REQUEST,
  FETCH_PHOTOS_SUCCESS_REQUEST,
  FETCH_PHOTOS__REQUEST,
} from "../types";
const initalState = {
  loading: false,
  photosData: [],
  error: "",
};
export const photosReducers = (state = initalState, action: any) => {
  switch (action.type) {
    case FETCH_PHOTOS__REQUEST:
      return { ...state, loading: true };
    case FETCH_PHOTOS_SUCCESS_REQUEST:
      return {
        loading: false,
        photosData: action.payload,
      };
    case FETCH_PHOTOS_FAILURE_REQUEST:
      return {
        loading: false,
        photosData: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default photosReducers;
