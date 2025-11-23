import React from "react";

export default function Header({ isMobile }) {
  const headerTitleStyle = {
    fontSize: isMobile ? "18px" : "24px",
    fontWeight: 700,
    marginBottom: "4px",
  };

  const headerSubtitleStyle = {
    fontSize: isMobile ? "12px" : "14px",
    color: "#555",
    marginBottom: "24px",
  };

  return (
    <header>
      <div style={headerTitleStyle}>
        Kevin’s Core Java Documentation — Foundation for Selenium Automation
      </div>
      <div style={headerSubtitleStyle}>
        A structured Java learning path created as a prerequisite before
        starting Java Selenium automation.
      </div>
    </header>
  );
}
