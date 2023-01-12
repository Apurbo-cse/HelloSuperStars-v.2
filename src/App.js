import { Routes, Route } from "react-router-dom";

import "./components/assets/css/style.css";
import "./components/assets/css/responsive.css";
import "./components/assets/css/dark.css";

import Navigation from "./components/layout/include/Navigation";
import Footer from "./components/layout/include/Footer";
import Home from "./components/pages/Home";
import Eshowcase from "./components/pages/e-showcase/Eshowcase";
import { useTheme } from "./components/context.js/ThemeContext";
import LeftSidebar from "./components/layout/include/LeftSidebar";
import RightSidebar from "./components/layout/include/RightSidebar";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`post-main-body ${isDarkMode ? "lightMode" : "darkMode"}`}>
      <Navigation />

      <div className="container-fluid">
        <div className="row pt-3 d-flex justify-content-between">
          <div className="col-lg-3 left-position">
            {" "}
            <LeftSidebar />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 post-main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/e-showcase" element={<Eshowcase />} />
            </Routes>
          </div>
          <div className="col-lg-3 right-position">
            <RightSidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
