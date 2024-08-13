/* eslint-disable react/prop-types */
import { appContext } from "./appContext";
import {
  getApiRequest,
  getVideoRequest,
  createVideoRequest,
  updateVideoRequest,
  deleteVideoRequest,
} from "../api/requests";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { status, data } = await getApiRequest();
      if (status === 200) setData(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const getVideo = async (id) => {
    try {
      const { status, data } = await getVideoRequest(id);
      if (status === 200) return data;
    } catch (error) {
      console.log(error);
    }
  };

  const createVideo = async (video) => {
    try {
      const { status, data: dataCreateVideo } = await createVideoRequest(video);
      if (status === 201) {
        const newData = { ...data, videos: [...data.videos, dataCreateVideo] };
        setData(newData);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateVideo = async (id, video) => {
    try {
      const { status, data: dataUpdateVideo } = await updateVideoRequest(
        id,
        video
      );
      if (status === 200) {
        const videos = data.videos.map((v) =>
          v.id === id ? dataUpdateVideo : v
        );
        setData({ ...data, videos });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const { status } = await deleteVideoRequest(id);
      if (status === 204) {
        const videos = data.videos.filter((v) => v.id !== id);
        setData({ ...data, videos });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <appContext.Provider
      value={{
        isLoading,
        data,
        createVideo,
        getVideo,
        updateVideo,
        deleteVideo,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export default AppProvider;
