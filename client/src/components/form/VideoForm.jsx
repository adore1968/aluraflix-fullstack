import { useFormik } from "formik";
import * as Yup from "yup";
import { useApp } from "../../context/appContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorForm from "./ErrorForm";

function VideoForm() {
  const videoInitialValues = {
    categoria: "",
    titulo: "",
    descripcion: "",
    url: "",
  };

  const { createVideo, getVideo, updateVideo } = useApp();
  const { id } = useParams();
  const [video, setVideo] = useState(videoInitialValues);

  const loadVideo = async () => {
    if (id) {
      const data = await getVideo(id);
      setVideo(data);
    }
  };

  useEffect(() => {
    loadVideo();
  }, []);

  const validationSchema = Yup.object({
    categoria: Yup.string().max(100).required(),
    titulo: Yup.string().max(150).required(),
    descripcion: Yup.string().max(500).required(),
    url: Yup.string().url().max(200).required("video is a required field"),
  });

  const onSubmit = (values) => {
    const categoria = values.categoria;
    let color;
    if (categoria === "FrontEnd") {
      color = "107, 209, 255";
    } else if (categoria === "BackEnd") {
      color = "0, 200, 111";
    } else if (categoria === "Innovacion y Gestion") {
      color = "255, 168, 5";
    }
    if (id) {
      updateVideo(id, values);
    } else {
      createVideo({ ...values, color });
    }
  };

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: video,
      enableReinitialize: true,
      validationSchema,
      onSubmit,
    });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-sm gap-4 p-5 border"
    >
      <div>
        <label htmlFor="categoria" className="block text-xl">
          Categoria
        </label>
        <select
          name="categoria"
          id="categoria"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.categoria}
          className="w-full px-2 py-1 mt-1 text-lg text-black rounded"
        >
          <option>Ingrese la categoria</option>
          <option value="FrontEnd">FrontEnd</option>
          <option value="BackEnd">BackEnd</option>
          <option value="Innovacion y Gestion">Innovacion y Gestion</option>
        </select>
        {touched.categoria && errors.categoria && (
          <ErrorForm error={errors.categoria} />
        )}
      </div>

      <div>
        <label htmlFor="titulo" className="block text-xl">
          Titulo
        </label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.titulo}
          className="w-full px-2 py-1 mt-1 text-lg text-black rounded"
          placeholder="Ingrese el titulo"
        />
        {touched.titulo && errors.titulo && <ErrorForm error={errors.titulo} />}
      </div>

      <div>
        <label htmlFor="descripcion" className="block text-xl">
          Descripcion
        </label>
        <textarea
          name="descripcion"
          id="descripcion"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.descripcion}
          className="w-full px-2 py-1 mt-1 text-lg text-black rounded resize-none"
          placeholder="Ingrese la descripcion"
        ></textarea>
        {touched.descripcion && errors.descripcion && (
          <ErrorForm error={errors.descripcion} />
        )}
      </div>

      <div>
        <label htmlFor="url" className="block text-xl">
          Video
        </label>
        <input
          type="url"
          name="url"
          id="url"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.url}
          className="w-full px-2 py-1 mt-1 text-lg text-black rounded"
          placeholder="Ingrese la url del video"
        />
        {touched.url && errors.url && <ErrorForm error={errors.url} />}
      </div>
      <button
        type="submit"
        className={`px-4 py-2 text-xl transition-colors rounded ${
          id ? "bg-green-500 hover:bg-green-700" : "bg-red-500 hover:bg-red-700"
        }`}
      >
        Save
      </button>
    </form>
  );
}

export default VideoForm;
