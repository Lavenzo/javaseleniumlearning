import React from "react";

export default function PrereqSection({ isMobile }) {
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
    marginBottom: "12px",
  };

  return (
    <section>
      <h2 style={sectionTitleStyle}>
        Java Documentation Prerequisite Statement
      </h2>
      <p style={paragraphStyle}>
        The Java documentation I created serves as an essential{" "}
        <strong>pre-requisite foundation</strong> before starting Java Selenium
        automation. It covers the core Java concepts required for Selenium—
        including OOP principles, data structures, exceptions, collections,
        generics, multithreading, and advanced features such as lambdas and
        streams.
      </p>
      <p style={paragraphStyle}>
        Having this strong Java base ensures that Selenium scripts are easier to
        understand, maintain, and extend. This documentation acts as a
        structured learning path that prepares learners with the necessary Java
        fundamentals needed to progress confidently into Java Selenium
        automation.
      </p>
    </section>
  );
}
