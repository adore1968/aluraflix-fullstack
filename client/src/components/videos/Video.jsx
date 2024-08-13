import { Link } from "react-router-dom";
import { useApp } from "../../context/appContext";

/* eslint-disable react/prop-types */
function Video({ video }) {
  const { color, url, titulo, id } = video;
  const { deleteVideo } = useApp();

  return (
    <div style={{ boxShadow: `2px 2px 2px 1px rgb(${color})` }}>
      <div className="w-full">
        <iframe src={url} title={titulo} className="w-full"></iframe>
      </div>
      <div className="md:justify-start flex items-center justify-between gap-5 p-5 text-xl">
        <Link
          to={`/update-video/${id}`}
          className="hover:bg-green-700 px-4 py-2 transition-colors bg-green-500 rounded"
        >
          Update
        </Link>
        <button
          type="button"
          onClick={() => deleteVideo(id)}
          className="hover:bg-red-700 px-4 py-2 transition-colors bg-red-500 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Video;
