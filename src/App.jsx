import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
