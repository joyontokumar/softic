import axios from "axios";
import {
  FETCH_COMMENTS_FAILURE_REQUEST,
  FETCH_COMMENTS_SUCCESS_REQUEST,
  FETCH_COMMENTS__REQUEST,
} from "../types";

export const fetchCommentLoad = () => {
  return {
    type: FETCH_COMMENTS__REQUEST,
  };
};
export const fetchCommentSuccess = (commentInfo: any) => {
  return {
    type: FETCH_COMMENTS_SUCCESS_REQUEST,
    payload: commentInfo,
  };
};

export const fetchCommentFailed = (error: any) => {
  return {
    type: FETCH_COMMENTS_FAILURE_REQUEST,
    payload: error,
  };
};

export const fetchComments = () => {
  return (dispatch: any) => {
    dispatch(fetchCommentLoad());
    axios
      .get(`${process.env.NEXT_PUBLIC_APP_READER_BASE_URL}/comments`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(fetchCommentSuccess(res?.data));
      })
      .catch((err) => {
        dispatch(fetchCommentFailed(err?.message));
      });
  };
};
