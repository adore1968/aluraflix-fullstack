/* eslint-disable react/prop-types */
import { useApp } from "../../context/appContext";
import Video from "./Video";

function Videos({ titulo }) {
  const { data } = useApp();
  const filterVideos = data.videos.filter((v) => v.categoria === titulo);

  return (
    <div className="md:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-5">
      {filterVideos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  );
}

export default Videos;
