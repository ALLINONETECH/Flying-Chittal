import { useEffect } from "react";
import "./App.css";
import Routes from "./routes/routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="App">
        <ParallaxProvider>
          <Routes />
        </ParallaxProvider>
      </div>
    </>
  );
}

export default App;
