import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppProvider from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen text-white bg-black">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
