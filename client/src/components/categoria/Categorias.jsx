import Categoria from "./Categoria";

/* eslint-disable react/prop-types */
function Categorias({ categorias }) {
  return (
    <section className="flex flex-col gap-8 mb-5">
      {categorias.map((categoria) => (
        <Categoria key={categoria.id} categoria={categoria} />
      ))}
    </section>
  );
}

export default Categorias;
