import * as React from "react"
import { Link, useLocation } from "wouter"
import { Menu, X, MessageCircle } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
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
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
      <div className="relative rounded-full bg-[#182722]/95 backdrop-blur-md border border-white/10 shadow-[0_12px_40px_rgba(24,39,34,0.22)] px-5 md:px-7 h-[68px] flex items-center justify-between">

        {/* Logo */}
<Link
  href="/"
  className="flex items-center shrink-0 group"
>
<span className="font-sans font-black text-[23px] leading-none tracking-[-0.075em] text-[#F7F5EF]">
  ingat<span className="text-[#C9E0D3]">akhir</span>
</span>
</Link>
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-7 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  location === link.href
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#f7f5ef] text-[#182722] px-5 py-2.5 text-sm font-semibold hover:bg-[#dcebe4] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Akhir
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-[76px] left-0 right-0 rounded-3xl bg-[#182722] border border-white/10 shadow-2xl p-5 lg:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#f7f5ef] text-[#182722] px-5 py-3 font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Akhir
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
