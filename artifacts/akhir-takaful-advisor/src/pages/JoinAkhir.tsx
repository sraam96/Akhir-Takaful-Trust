import { GraduationCap, Users, TrendingUp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JoinAkhir() {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-foreground text-background py-20 md:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
            Career Pathway
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance">
            Build a career based on trust, not just transactions.
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-pretty leading-relaxed">
            I am looking to mentor a select group of individuals who want to build a sustainable, professional advisory practice.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-20">
        <div className="prose prose-lg prose-headings:font-serif prose-headings:font-medium max-w-3xl mx-auto mb-20 text-muted-foreground">
          <p className="text-foreground text-xl leading-relaxed">
            The Takaful industry is often portrayed through flashy lifestyles and aggressive recruiting. I take a different approach. I view this as a professional service, akin to accounting or legal counsel.
          </p>
          <p>
            If you are tired of corporate stagnation and want to build your own business, but you want to do it ethically and methodically, we might be a good fit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-border p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Structured Mentorship</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">You won't be thrown into the deep end. We provide step-by-step training on product knowledge, ethical selling, and client servicing.</p>
          </div>
          <div className="bg-white border border-border p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Professional Culture</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">No manipulative sales tactics. We focus on education, needs analysis, and building long-term trust with our clients.</p>
          </div>
          <div className="bg-white border border-border p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium mb-3">Sustainable Growth</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Success here is a marathon, not a sprint. We help you build a solid foundation for a business that generates recurring value.</p>
          </div>
        </div>

        <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-border">
          <h2 className="text-2xl font-serif mb-6 text-center">Who I'm looking for</h2>
          <ul className="space-y-4">
            <li className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-foreground text-sm leading-relaxed"><strong>Professionals seeking change:</strong> Perhaps you have experience in banking, HR, or corporate sales and want to work for yourself.</p>
            </li>
            <li className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-foreground text-sm leading-relaxed"><strong>Coachability:</strong> Willingness to learn regulations, financial concepts, and communication skills.</p>
            </li>
            <li className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <p className="text-foreground text-sm leading-relaxed"><strong>High Integrity:</strong> A genuine desire to protect families, not just hit quotas.</p>
            </li>
          </ul>
          
          <div className="mt-8 text-sm text-muted-foreground border-l-4 border-muted pl-4 italic">
            Please note: This is a commission-based entrepreneurial path. We do not make guaranteed income promises. Success requires dedication, networking, and consistent effort.
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-serif mb-6">Let's have a confidential chat</h2>
          <p className="text-muted-foreground mb-8">Send me a message to arrange an exploratory conversation.</p>
          <Button asChild size="lg" className="rounded-full">
            <a href="mailto:email@ingatakhir.my">
              <Mail className="w-4 h-4 mr-2" /> Email Akhir
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
