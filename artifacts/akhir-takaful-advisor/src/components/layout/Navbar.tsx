import * as React from "react"
import { Link, useLocation } from "wouter"
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif text-xl italic transition-transform group-hover:scale-105">
            A
          </div>
          <span className="font-serif font-medium text-lg tracking-tight hidden sm:block">
            Akhir Takaful Advisor
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Button asChild className="rounded-full gap-2">
              <a href="#whatsapp-placeholder" data-testid="link-whatsapp-nav">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Akhir</span>
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg animate-in fade-in slide-in-from-top-2">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <ul className="flex flex-col gap-4 text-base font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 transition-colors ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="block py-2 text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <Button asChild className="w-full justify-center rounded-full gap-2">
                <a href="#whatsapp-placeholder">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Akhir</span>
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full justify-center rounded-full gap-2">
                <a href="#calendly-placeholder">
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
