import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import Home from "./pages/Home/Home";
import Routes from "./routes/routes";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="App">
        <Routes />
      </div>
    </>
  );
}

export default App;
