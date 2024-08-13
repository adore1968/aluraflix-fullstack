import { useApp } from "../context/appContext";
import Loader from "../components/Loader";
import Categorias from "../components/categoria/Categorias";
import Destacados from "../components/destacados/Destacados";

function HomePage() {
  const { isLoading, data } = useApp();

  if (isLoading) return <Loader />;

  return (
    <div className="container flex flex-col gap-5 mx-auto">
      <Destacados destacados={data.destacados} />
      <Categorias categorias={data.categorias} />
    </div>
  );
}

export default HomePage;
