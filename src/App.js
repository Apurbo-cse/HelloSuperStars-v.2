import { Routes, Route } from "react-router-dom";

import "./components/assets/css/style.css";
import "./components/assets/css/responsive.css";
import "./components/assets/css/dark.css";
import "./components/assets/css/profile.css";

import Navigation from "./components/layout/include/Navigation";
import Footer from "./components/layout/include/Footer";
import { useTheme } from "./components/context.js/ThemeContext";

import RootRoute from "./components/routes/RootRoute";
import LiveChatDetails from "./components/pages/post/LiveChatDetails";
import Profile from "./components/pages/star/Profile";

function App() {
  const { isDarkMode } = useTheme();
  return (
    <div className={`post-main-body ${isDarkMode ? "lightMode" : "darkMode"}`}>
      <Navigation />

      <Routes>
        <Route index path="/*" element={<RootRoute />} />
        <Route index path="/star-profile/:id" element={<Profile />} />
        <Route path="/live-chat/slug" element={<LiveChatDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
