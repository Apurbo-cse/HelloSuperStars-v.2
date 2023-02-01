import { Routes, Route } from "react-router-dom";

import "./components/assets/css/style.css";
import "./components/assets/css/responsive.css";
import "./components/assets/css/dark.css";
import "./components/assets/css/profile.css";

import Navigation from "./components/layout/include/Navigation";
import Footer from "./components/layout/include/Footer";
import { useTheme } from "./components/context.js/ThemeContext";

import Master from "./components/layout/Master";
import LiveChat from "./components/pages/post/LiveChat";
import StarLayout from "./components/layout/StarLayout";
import PhotosCard from "./components/common/PhotosCard";
import AllPost from "./components/pages/star/AllPost";
import E_ShowcasePage from "./views/E_ShowcasePage";
import IndexPage from "./views/IndexPage";
import SettingsPage from "./views/SettingsPage";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`post-main-body ${isDarkMode ? "lightMode" : "darkMode"}`}>
      <Navigation />

      <Routes>
        {/* Master Layout  */}
        <Route path="/" element={<Master />}>
          <Route index element={<IndexPage />} />
          <Route path="e-showcase" element={<E_ShowcasePage />} />
          <Route path="live-chat" element={<LiveChat />} />
          <Route path="settings" element={<SettingsPage />} />
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
