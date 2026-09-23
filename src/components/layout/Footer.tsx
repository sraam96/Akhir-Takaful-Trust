import { Link } from "wouter"
import { Shield, Mail, Phone } from "lucide-react"

import { contactLinks } from "@/lib/contactLinks"

const solutionLinks = [
  { href: "/solutions/medical-card", label: "Medical Card" },
  {
    href: "/solutions/hibah-family-protection",
    label: "Hibah & Family Protection",
  },
  {
    href: "/solutions/critical-illness",
    label: "Critical Illness",
  },
  {
    href: "/solutions/protection-planning",
    label: "Protection Planning",
  },
]

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/join-akhir", label: "Join Akhir" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground py-16 text-background md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="mb-6 flex items-center">
              <span className="font-sans text-[23px] font-black leading-none tracking-[-0.075em] text-brand-ivory [text-shadow:2px_2px_0_#5C0B03]">
                ingatakhir
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-white/60">
              Clear, pressure-free Takaful guidance for Malaysians.
              Understand your protection, on your own terms.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-medium text-white">
              Solutions
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-medium text-white">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-medium text-white">
              Contact Akhir
            </h4>

            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-white/40" />

                <a
                  href={contactLinks.phone}
                  className="transition-colors hover:text-white"
                >
                  +60 12-911 7691
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-white/40" />

                <a
                  href={contactLinks.email}
                  className="transition-colors hover:text-white"
                >
                  admin@ingatakhir.com
                </a>
              </li>

              <li className="flex gap-3">
                <Shield className="h-5 w-5 shrink-0 text-white/40" />

                <a
                  href={contactLinks.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp Akhir
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclosure */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-start gap-2 text-xs text-white/40">
            <Shield className="mt-0.5 h-4 w-4 shrink-0" />

            <p className="max-w-3xl leading-relaxed">
              This is a personal advisory website by Muhammad Akhir. It is not
              the official corporate website of AIA Malaysia. Product details
              discussed are subject to formal quotation, eligibility,
              underwriting and applicable terms and conditions.
            </p>
          </div>

          <div className="flex shrink-0 gap-4 text-xs text-white/40">
            <span>ingatakhir.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}