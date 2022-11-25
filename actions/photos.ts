import axios from "axios";
import {
  FETCH_PHOTOS_FAILURE_REQUEST,
  FETCH_PHOTOS_SUCCESS_REQUEST,
  FETCH_PHOTOS__REQUEST,
} from "../types";

export const fetchPhotosLoad = () => {
  return {
    type: FETCH_PHOTOS__REQUEST,
  };
};
export const fetchPhotosSuccess = (commentInfo: any) => {
  return {
    type: FETCH_PHOTOS_SUCCESS_REQUEST,
    payload: commentInfo,
  };
};

export const fetchPhotosFailed = (error: any) => {
  return {
    type: FETCH_PHOTOS_FAILURE_REQUEST,
    payload: error,
  };
};

export const fetchPhotos = () => {
  return (dispatch: any) => {
    dispatch(fetchPhotosLoad());
    axios
      .get(`${process.env.NEXT_PUBLIC_APP_READER_BASE_URL}/photos`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(fetchPhotosSuccess(res?.data?.splice(0, 20)));
      })
      .catch((err) => {
        dispatch(fetchPhotosFailed(err?.message));
      });
  };
};
