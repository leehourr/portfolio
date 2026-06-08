import React, { useState } from "react";
import WindowWrapper from "../hoc/WindowWrapper";
import { WindowControls } from "../components";
import { Download } from "lucide-react";
import { Page, pdfjs, Document } from "react-pdf";
import resumeEN from "../files/Cloud Security Engineer Resume - Leang Lyhour.pdf";
import resumeJA from "../files/Cloud Security Engineer Resume - Leang Lyhour (JA).pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const resumes = {
  EN: { file: resumeEN, label: "EN" },
  JA: { file: resumeJA, label: "JA" },
};

const Resume = () => {
  const [lang, setLang] = useState("EN");
  const current = resumes[lang];

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h2>Resume.pdf</h2>
          <div style={{ display: "flex", gap: "4px" }}>
            {Object.keys(resumes).map((key) => (
              <button
                key={key}
                onClick={() => setLang(key)}
                style={{
                  padding: "2px 8px",
                  fontSize: "11px",
                  borderRadius: "4px",
                  border: lang === key ? "1px solid #007aff" : "1px solid #666",
                  background: lang === key ? "#007aff" : "transparent",
                  color: lang === key ? "#fff" : "#ccc",
                  cursor: "pointer",
                }}
              >
                {resumes[key].label}
              </button>
            ))}
          </div>
        </div>

        <a
          href={current.file}
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <Document file={current.file}>
        <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
