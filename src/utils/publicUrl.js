/** Prefix asset paths with CRA PUBLIC_URL (needed on GitHub Pages project sites). */
export function publicUrl(path = "") {
  const base = (process.env.PUBLIC_URL || "").replace(/\/$/, "")
  const cleaned = String(path).replace(/^\//, "")
  if (!cleaned) return `${base}/` || "/"
  return `${base}/${cleaned}`
}
