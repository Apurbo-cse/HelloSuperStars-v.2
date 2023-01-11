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

function App() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`main-position ${isDarkMode ? "lightMode" : "darkMode"}`}>
      <Navigation />

      <div className="left-position ">
        <LeftSidebar />
      </div>
      <div className="container">
        <div className="row pt-3">
          <div className="col-lg-3"></div>
          <div className="col-sm-12 col-md-12 col-lg-6 post-main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/e-showcase" element={<Eshowcase />} />
            </Routes>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      <div className="right-position bg-dark">dsfdsfsdf</div>
      <Footer />
    </div>
  );
}

export default App;
