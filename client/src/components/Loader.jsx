import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <FaSpinner className="text-8xl animate-spin" />
    </div>
  );
}

export default Loader;
