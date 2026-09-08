export function scrollToId(id, { offset = -88 } = {}) {
  const section = document.getElementById(id)
  if (!section) return false

  if (window.__lenis) {
    window.__lenis.scrollTo(section, { offset, duration: 1.15 })
    return true
  }

  section.scrollIntoView({ behavior: "smooth", block: "start" })
  return true
}
