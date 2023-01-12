import React from "react";
import LeftCard from "../../common/sidebar/LeftCard";
import imagePath from "../../constants/imagePath";
import { useTheme } from "../../context.js/ThemeContext";

const LeftSidebar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <>
      <div className={`post mb-3 p-1 ${isDarkMode ? null : "dark-post"} `}>
        
        <LeftCard title={"Category"} icon={imagePath.category} count={10} />
        <LeftCard title={"Following"} icon={imagePath.following} count={10} />
        <LeftCard title={"Fan Group"} icon={imagePath.fangroup} count={10} />
        <LeftCard title={"Enroll Auditions"} icon={imagePath.enroll} count={10} />
        <LeftCard title={"Activities"} icon={imagePath.activities} count={10} />
        <LeftCard title={"Settings"} icon={imagePath.setting} />
        <LeftCard title={"Terms & Policy"} icon={imagePath.term}  />


      </div>
    </>
  );
};

export default LeftSidebar;
