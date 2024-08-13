/* eslint-disable react/prop-types */
function Destacado({ destacado }) {
  const { id_yt, color, categoria, titulo, descripcion, url } = destacado;

  return (
    <div
      style={{
        backgroundImage: `url(http://img.youtube.com/vi/${id_yt}/2.jpg)`,
      }}
      className="md:grid-cols-2 md:items-center grid justify-between min-h-screen grid-cols-1 gap-5 p-5"
    >
      <div className="md:text-left text-center">
        <h2
          className="md:text-4xl px-4 py-2 text-3xl font-bold text-center"
          style={{ backgroundColor: `rgb(${color})` }}
        >
          {categoria}
        </h2>
        <h3 className="md:text-2xl my-1 text-xl font-semibold">{titulo}</h3>
        <p className="mt-1 text-lg">{descripcion}</p>
      </div>
      <div>
        <iframe
          src={url}
          title={titulo}
          style={{ boxShadow: `2px 2px 2px 1px rgb(${color})` }}
          className="md:h-80 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Destacado;
