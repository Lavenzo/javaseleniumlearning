import React, { useState } from "react";

export default function DocsTable({ isMobile }) {
  const wrapperStyle = {
    marginTop: "16px",
    overflowX: "auto",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    fontSize: isMobile ? "12px" : "13px",
  };

  const thStyle = {
    border: "1px solid #ccc",
    padding: isMobile ? "6px 8px" : "8px 10px",
    textAlign: "left",
    backgroundColor: "#f0f0f0",
    fontWeight: 600,
  };

  const tdStyle = {
    border: "1px solid #ccc",
    padding: isMobile ? "5px 8px" : "6px 10px",
  };

  const badgeRowStyle = {
    marginTop: "8px",
    fontSize: "12px",
    color: "#777",
  };

  const badgeStyle = {
    display: "inline-block",
    backgroundColor: "#e8f2ff",
    color: "#2155cd",
    padding: "3px 8px",
    borderRadius: "999px",
    marginRight: "6px",
  };

  const previewContainerStyle = {
    marginTop: "20px",
    borderRadius: "8px",
    overflow: "hidden",
    border: "1px solid #ddd",
    height: isMobile ? "60vh" : "70vh",
  };

  const previewTitleStyle = {
    fontSize: isMobile ? "14px" : "15px",
    fontWeight: 600,
    marginBottom: "8px",
  };

  const files = [
    "JAVA_W3SCHOOL01.docx",
    "JAVA_W3SCHOOL02.docx",
    "JAVA_W3SCHOOL03.docx",
    "JAVA_W3SCHOOL04.docx",
    "JAVA_W3SCHOOL05.docx",
    "JAVA01.docx",
    "JAVA02.docx",
  ];

  const [selectedFile, setSelectedFile] = useState(null);

  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  // Only used in production (Netlify etc.)
  const getViewerUrl = (fileName) => {
    const origin = window.location.origin;
    const fileUrl = `${origin}/${fileName}`;
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
      fileUrl
    )}`;
  };

  return (
    <section>
      <div style={wrapperStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Java Documentation Files</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file}>
                <td style={tdStyle}>
                  {/* Clickable link always works (dev + prod) */}
                  <a
                    href={`/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#004e89",
                      textDecoration: "underline",
                      fontWeight: 500,
                    }}
                    onClick={(e) => {
                      // also set preview when not on localhost
                      if (!isLocalhost) {
                        e.preventDefault();
                        setSelectedFile(file);
                      }
                    }}
                  >
                    {file}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={badgeRowStyle}>
        <span style={badgeStyle}>Core Java</span>
        <span style={badgeStyle}>Pre-Selenium</span>
        <span style={badgeStyle}>Self-Study Notes</span>
      </div>

      {/* Preview area – only show Office viewer when NOT on localhost */}
      {selectedFile && !isLocalhost && (
        <>
          <div style={previewTitleStyle}>
            Preview: <span style={{ fontWeight: 400 }}>{selectedFile}</span>
          </div>
          <div style={previewContainerStyle}>
            <iframe
              title="Java Doc Preview"
              src={getViewerUrl(selectedFile)}
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </>
      )}

      {selectedFile && isLocalhost && (
        <p style={{ fontSize: "12px", marginTop: "10px", color: "#555" }}>
          Preview is available after deployment. On localhost, click the file
          name to open it in Word.
        </p>
      )}
    </section>
  );
}
