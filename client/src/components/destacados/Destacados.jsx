/* eslint-disable react/prop-types */
import Destacado from "./Destacado";

function Destacados({ destacados }) {
  return (
    <section>
      {destacados.map((destacado) => (
        <Destacado key={destacado.id} destacado={destacado} />
      ))}
    </section>
  );
}

export default Destacados;
