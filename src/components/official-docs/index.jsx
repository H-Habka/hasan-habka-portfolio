import React from "react"
import PDFViewer from "./PDFViewer"
import { pdfFiles } from "../../content/officalDocs"

const OfficialDocs = () => {
  return (
    <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-4">
      {pdfFiles.map((file) => (
        <PDFViewer
          key={file.to}
          to={`/preview?fileId=${file.fileId}`}
          title={file.title}
        />
      ))}
    </div>
  )
}

export default OfficialDocs
