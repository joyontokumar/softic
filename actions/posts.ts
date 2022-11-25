import axios from "axios";
import {
  FETCH_POSTS_FAILURE_REQUEST,
  FETCH_POSTS_SUCCESS_REQUEST,
  FETCH_POSTS__REQUEST,
} from "../types";

export const fetchPostsLoad = () => {
  return {
    type: FETCH_POSTS__REQUEST,
  };
};
export const fetchPostSuccess = (postInfo: any) => {
  return {
    type: FETCH_POSTS_SUCCESS_REQUEST,
    payload: postInfo,
  };
};

export const fetchPostFailed = (error: any) => {
  return {
    type: FETCH_POSTS_FAILURE_REQUEST,
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch: any) => {
    dispatch(fetchPostsLoad());
    axios
      .get(`${process.env.NEXT_PUBLIC_APP_READER_BASE_URL}/posts`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(fetchPostSuccess(res?.data?.splice(0, 20)));
      })
      .catch((err) => {
        dispatch(fetchPostFailed(err?.message));
      });
  };
};
