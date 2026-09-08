import CustomButton from "../CustomButton"
import { contactLinks, socialMediaLinks } from "../../content/socialMedia"

export default function CtaBand() {
  return (
    <section id="launch" className="py-8 md:py-10">
      <div className="section-shell">
        <div className="cta-band dwg-frame px-6 py-12 md:px-14 md:py-16">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.32em] uppercase text-ink/70">
            Next sheet
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-ink leading-[0.95] max-w-3xl">
            A hull, a dry dock, a fast boat — or a jewellery brief.
          </h2>
          <p className="mt-5 max-w-xl text-ink/75 text-base md:text-lg leading-relaxed">
            Email or WhatsApp. No form, no invented inbox — the same addresses
            already on the dock.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={contactLinks.mailto}
              className="inline-flex items-center justify-center text-[13px] md:text-sm font-semibold tracking-[0.14em] uppercase px-5 py-3 rounded-full border border-ink bg-ink text-ivory hover:bg-ink/90 transition-colors"
            >
              Email {socialMediaLinks.email}
            </a>
            <CustomButton
              title="WhatsApp"
              reversed
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="!border-ink/30 !text-ink hover:!border-ink hover:!text-ink"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
