export const socialMediaLinks = {
  facebook: "https://www.facebook.com/share/1EfsfAKVAy",
  instagram: "https://www.instagram.com/hasanhabka9",
  email: "hasanhabka9@gmail.com",
  linkedin: "https://www.linkedin.com/in/hasan-habka-374b81220",
  whatsappNumber: "971527416292",
}

const whatsappMessage = "Hi Hasan, I found your portfolio and would like to get in touch."

export const contactLinks = {
  mailto: `mailto:${socialMediaLinks.email}?subject=${encodeURIComponent(
    "Get in touch"
  )}`,
  whatsapp: `https://wa.me/${socialMediaLinks.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`,
}

export function formatWhatsAppNumber(number = socialMediaLinks.whatsappNumber) {
  const digits = String(number).replace(/\D/g, "")
  if (digits.startsWith("971") && digits.length === 12) {
    return `+971 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`
  }
  return digits ? `+${digits}` : ""
}
