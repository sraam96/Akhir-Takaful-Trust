import * as React from "react"

import { Link, useLocation } from "wouter"
import { Menu, X, MessageCircle } from "lucide-react"

import { contactLinks } from "@/lib/contactLinks"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About Us" },
  { href: "/resources", label: "Resources" },
  { href: "/join-akhir", label: "Join Akhir" },
]

export function Navbar() {
  const [location] = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2">
      <div className="relative flex h-[68px] items-center justify-between rounded-full border border-brand-ivory/15 bg-brand-dark/75 px-5 shadow-[inset_0_1px_0_rgba(245,241,232,0.12),0_12px_40px_rgba(46,51,39,0.22)] backdrop-blur-md md:px-7">
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center"
        >
          <span className="font-sans text-[23px] font-black leading-none tracking-[-0.075em] text-brand-ivory [text-shadow:2px_2px_0_#5C0B03]">
            ingatakhir
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-7 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  location === link.href
                    ? "text-brand-ivory"
                    : "text-brand-ivory/65 hover:text-brand-ivory"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-ivory px-5 py-2.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-secondary"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Akhir
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="p-2 text-brand-ivory lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-[76px] rounded-3xl border border-brand-ivory/10 bg-brand-dark p-5 shadow-2xl lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-brand-ivory/80 hover:bg-brand-ivory/5 hover:text-brand-ivory"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href={contactLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-ivory px-5 py-3 font-semibold text-brand-dark transition-colors hover:bg-brand-secondary"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Akhir
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}