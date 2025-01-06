import { useEffect } from "react";
import "./App.css";
import Routes from "./routes/routes";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { HelmetProvider } from "react-helmet-async";
import { analytics } from "./firebase/firebase";
import { logEvent } from "firebase/analytics";
import { startSession } from "./firebase/firebaseUtilities";
import { endSession } from "./firebase/firebaseUtilities";

// Move ScrollToTop inside Router context
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
    <HelmetProvider>
      <div className="App">
        <ParallaxProvider>
          <Router>
            {/* Wrap ScrollToTop inside Router */}
            <ScrollToTop />
            <RouteChangeLogger />
            <Routes />
          </Router>
        </ParallaxProvider>
      </div>
    </HelmetProvider>
  );
}

// Create a separate component for logging route changes
function RouteChangeLogger() {
  const { pathname } = useLocation();

  useEffect(() => {
    const userId = `user_${Math.random().toString(36).substr(2, 9)}`; // Unique session ID

    // Start session when the component mounts
    startSession(userId, pathname);

    // End session when the tab is closed or refreshed
    const handleBeforeUnload = () => {
      endSession(userId);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup event listener and end session on component unmount
    return () => {
      endSession(userId);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  return null;
}

export default App;
