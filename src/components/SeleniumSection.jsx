import React from "react";

export default function SeleniumSection({ isMobile }) {
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

  const footerStyle = {
    marginTop: "20px",
    fontSize: "12px",
    color: "#777",
    borderTop: "1px solid #eee",
    paddingTop: "10px",
  };

  return (
    <section>
      <h2 style={sectionTitleStyle}>2. Java Selenium (Coming Next)</h2>
      <p style={paragraphStyle}>
        The next phase of this learning journey will document my hands-on
        practice with <strong>Java Selenium automation</strong>, including:
      </p>
      <ul style={listStyle}>
        <li>WebDriver basics and element locators</li>
        <li>Page Object Model (POM) with Java</li>
        <li>Test data handling using Java Collections</li>
        <li>Integration with TestNG / JUnit</li>
      </ul>
      <p style={paragraphStyle}>
        This React site will be extended to showcase Selenium examples, test
        project structures, and links to GitHub repositories.
      </p>

      <footer style={footerStyle}>
        © {new Date().getFullYear()} Kevin — Java &amp; Selenium Upskilling
        Journey
      </footer>
    </section>
  );
}
