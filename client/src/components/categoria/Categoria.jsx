import Videos from "../videos/Videos";

/* eslint-disable react/prop-types */
function Categoria({ categoria }) {
  const { color, categoria: titulo } = categoria;

  return (
    <div>
      <h2
        style={{ backgroundColor: `rgb(${color})` }}
        className="md:text-4xl px-4 py-2 mb-2 text-3xl font-semibold text-center"
      >
        {titulo}
      </h2>
      <Videos titulo={titulo} />
    </div>
  );
}

export default Categoria;
