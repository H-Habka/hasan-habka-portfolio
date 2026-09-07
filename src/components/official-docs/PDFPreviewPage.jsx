import React from "react"
import { useSearchParams } from "react-router-dom"

const PDFPrepreviewPage = () => {
  const searchPArams = useSearchParams()
  const fileId = searchPArams[0].get("fileId")
  return (
    <iframe
      src={`https://drive.google.com/file/d/${fileId}/preview`}
      width="100%"
      allow="autoplay"
      className="h-screen "
      title="pdf preview"
    />
  )
}

export default PDFPrepreviewPage
