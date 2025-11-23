import React from "react";

export default function PageContainer({ isMobile, children }) {
  const pageStyle = {
    fontFamily:
      "'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    background:
      "linear-gradient(180deg, #0077b6 0%, #0096c7 40%, #48cae4 100%)",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    margin: 0,
    padding: isMobile ? "12px 8px" : "40px 16px",
    display: "flex",
    justifyContent: "center",
  };

  const containerStyle = {
    maxWidth: isMobile ? "100%" : "900px",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: isMobile ? "0" : "14px",
    boxShadow: isMobile ? "0 0 0" : "0 10px 28px rgba(0, 0, 0, 0.25)",
    padding: isMobile ? "20px 16px" : "36px 32px",
    backdropFilter: "blur(3px)",
  };

  return (
    <div style={pageStyle}>
      <main style={containerStyle}>{children}</main>
    </div>
  );
}
