import { MessageCircle, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-balance">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you have a quick question or want a full portfolio review, I'm here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          <div className="bg-white border border-border p-8 md:p-10 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-serif font-medium mb-4">Quick Chat via WhatsApp</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a quick question about coverage or want to say hello? WhatsApp is the fastest way to reach me directly.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full">
              <a href="#whatsapp-placeholder">
                <MessageCircle className="w-5 h-5 mr-2" /> Message on WhatsApp
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">Average response time: Few hours</p>
          </div>

          <div className="bg-white border border-border p-8 md:p-10 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-serif font-medium mb-4">Book a Consultation</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Prefer a dedicated time to talk? Schedule a 30-minute virtual or coffee meeting at a time that suits you.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full">
              <a href="#calendly-placeholder">
                <Calendar className="w-5 h-5 mr-2" /> Open Calendly
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">Free, zero-pressure session</p>
          </div>

        </div>

        <div className="mt-20 text-center border-t border-border/50 pt-16">
          <p className="text-muted-foreground mb-4">For formal inquiries or career matters:</p>
          <a href="mailto:email@ingatakhir.my" className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors">
            <Mail className="w-5 h-5" /> email@ingatakhir.my (Placeholder)
          </a>
        </div>
      </div>
    </div>
  )
}
