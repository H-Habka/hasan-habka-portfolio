import React from "react"
import SectionHeading from "../SectionHeading"
import OptimizedImage from "../OptimizedImage"

const companies = [
  {
    name: "Saray Jewellery",
    href: "https://sarayjewellery.com/",
    src: "https://i.imgur.com/E3HEC0X.jpeg",
  },
  {
    name: "Marine Design Hub",
    href: "https://marinedesignhub.co.uk/",
    src: "https://i.imgur.com/bDPzNxQ.jpeg",
  },
]

const CompaniesIworkedWith = () => {
  return (
    <section id="companies" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="07 / Collaborations" title="I have worked with" />
        <div className="mt-10 grid sm:grid-cols-2 gap-4 md:gap-6">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noreferrer"
              aria-label={company.name}
              className="dwg-frame flex items-center gap-5 bg-surface/70 p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <OptimizedImage
                alt={company.name}
                src={company.src}
                width={120}
                height={120}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <p className="font-display text-2xl text-ivory">{company.name}</p>
                <p className="mt-1 text-sm text-mute">Visit website</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompaniesIworkedWith
