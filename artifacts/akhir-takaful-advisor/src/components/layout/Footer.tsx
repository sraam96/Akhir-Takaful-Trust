import * as React from "react"
import { Link } from "wouter"
import { Shield, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-foreground font-serif text-xl italic">
                A
              </div>
              <span className="font-serif font-medium text-xl tracking-tight text-white">
                Akhir Takaful
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed text-balance">
              Guiding Malaysians towards clear, pressure-free protection decisions. Understand what you need, on your own terms.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-medium text-lg mb-6 text-white">Solutions</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/solutions/medical-card" className="hover:text-white transition-colors">Medical Card</Link></li>
              <li><Link href="/solutions/hibah-family-protection" className="hover:text-white transition-colors">Hibah & Family Protection</Link></li>
              <li><Link href="/solutions/critical-illness" className="hover:text-white transition-colors">Critical Illness</Link></li>
              <li><Link href="/solutions/protection-planning" className="hover:text-white transition-colors">Protection Planning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-medium text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-white transition-colors">About Akhir</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources & FAQ</Link></li>
              <li><Link href="/join-akhir" className="hover:text-white transition-colors">Career (Join Akhir)</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-medium text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 shrink-0 text-white/40" />
                <span>[Placeholder: +60 1X-XXX XXXX]</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 shrink-0 text-white/40" />
                <span>[Placeholder: email@ingatakhir.my]</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-white/40" />
                <span>[Placeholder: Kuala Lumpur, Malaysia]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <Shield className="w-4 h-4" />
            <p>
              This is a personal advisory website by Muhammad Akhir. It is not the official corporate website of AIA Malaysia.
              Product details discussed are subject to formal quotation and underwriting.
            </p>
          </div>
          <div className="flex gap-4 text-xs text-white/40 whitespace-nowrap">
            <a href="#privacy-placeholder" className="hover:text-white">Privacy Policy</a>
            <a href="#terms-placeholder" className="hover:text-white">Terms of Use</a>
            <a href="#disclosure-placeholder" className="hover:text-white">Product Disclosures</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
