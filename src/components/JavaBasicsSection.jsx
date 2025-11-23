import React from "react";

export default function JavaBasicsSection({ isMobile }) {
  const sectionTitleStyle = {
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: 600,
    marginTop: "24px",
    marginBottom: "8px",
  };

  const paragraphStyle = {
    fontSize: isMobile ? "13px" : "14px",
    lineHeight: 1.6,
    color: "#333",
    marginBottom: "8px",
  };

  const listStyle = {
    paddingLeft: "18px",
    marginTop: "4px",
    marginBottom: "12px",
    fontSize: isMobile ? "13px" : "14px",
    color: "#333",
  };

  return (
    <section>
      <h2 style={sectionTitleStyle}>1. Java Basics</h2>
      <p style={paragraphStyle}>
        This Java documentation provides complete coverage of:
      </p>
      <ul style={listStyle}>
        <li>Basic Java syntax</li>
        <li>Control structures</li>
        <li>Object-oriented programming (OOP)</li>
        <li>Exception handling</li>
        <li>File I/O &amp; Streams</li>
        <li>Collections &amp; Data Structures</li>
        <li>Advanced Java concepts (Generics, Threads, Lambdas)</li>
      </ul>
    </section>
  );
}
