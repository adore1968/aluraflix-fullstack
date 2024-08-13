import axios from "./axios";

// API
export const getApiRequest = () => {
  return axios("/");
};

// VIDEOS
export const getVideoRequest = (id) => {
  return axios(`/videos/${id}`);
};

export const createVideoRequest = (video) => {
  return axios.post("/videos", video);
};

export const updateVideoRequest = (id, video) => {
  return axios.put(`/videos/${id}`, video);
};

export const deleteVideoRequest = (id) => {
  return axios.delete(`/videos/${id}`);
};
