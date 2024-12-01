import { useEffect } from "react";
import "./App.css";
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <div className="App">
        <ParallaxProvider>
          <Router>
            <ScrollToTop />
            <Routes />
          </Router>
        </ParallaxProvider>
      </div>
    </>
  );
}

export default App;
