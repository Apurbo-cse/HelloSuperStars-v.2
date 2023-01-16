import { Routes, Route } from "react-router-dom";

import "./components/assets/css/style.css";
import "./components/assets/css/responsive.css";
import "./components/assets/css/dark.css";
import "./components/assets/css/profile.css";

import Navigation from "./components/layout/include/Navigation";
import Footer from "./components/layout/include/Footer";
import { useTheme } from "./components/context.js/ThemeContext";

import Master from "./components/layout/Master";
import Home from "./components/pages/Home";
import LiveChat from "./components/pages/post/LiveChat";
import Eshowcase from "./components/pages/e-showcase/Eshowcase";
import StarLayout from "./components/layout/StarLayout";
import PhotosCard from "./components/common/PhotosCard";
import StarProfile from "./components/pages/star/StarProfile";
import AllPost from "./components/pages/star/AllPost";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`post-main-body ${isDarkMode ? "lightMode" : "darkMode"}`}>
      <Navigation />

      <Routes>
        {/* Master Layout  */}
        <Route path="/" element={<Master />}>
          <Route index element={<Home />} />
          <Route path="e-showcase" element={<Eshowcase />} />
          <Route path="live-chat" element={<LiveChat />} />
        </Route>

        {/* Star Layout  */}
        <Route path="/star/:id" element={<StarLayout />}>
          <Route index element={<AllPost />} />
          <Route path="photos" element={<PhotosCard />} />
          <Route path="videos" element={<PhotosCard />} />
          <Route path="fan-group" element={<PhotosCard />} />
          <Route path="photos" element={<PhotosCard />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
