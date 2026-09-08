import React from "react"
import PDFViewer from "./PDFViewer"
import { pdfFiles } from "../../content/officalDocs"
import SectionHeading from "../SectionHeading"

const OfficialDocs = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Documents" title="Official docs" />
        <p className="mt-4 max-w-2xl text-ivory/70">
          Certificates, CV, and supporting documents.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pdfFiles.map((file) => (
            <PDFViewer
              key={file.to || file.fileId}
              to={`/preview?fileId=${file.fileId}`}
              title={file.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfficialDocs
