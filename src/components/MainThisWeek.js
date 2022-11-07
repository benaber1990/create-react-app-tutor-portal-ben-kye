import React from "react";
import "./Components.css";

const MainThisWeek = ({ title, description }) => {
  return (
    <div style={{ padding: 20 }}>
      <div className="MainThisWeekCard">
        <h2 className="HeaderFont">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};



export default MainThisWeek;
