import { FileText, Download } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Resources() {
  const faqs = [
    {
      q: "What is the difference between Insurance and Takaful?",
      a: "Takaful is a mutual assistance framework based on Shariah principles, avoiding Riba (interest), Gharar (uncertainty), and Maisir (gambling). Instead of transferring risk to a company, participants donate to a common pool to guarantee each other against loss."
    },
    {
      q: "Do I have to pay for a consultation?",
      a: "No, initial consultations and portfolio reviews are entirely complimentary. I earn a commission from the Takaful operator only if you decide to apply for a product and it is approved. There are no hidden advisory fees."
    },
    {
      q: "I already have company insurance, do I need this?",
      a: "Company insurance is excellent, but it is tied to your employment. If you change jobs, retire, or are terminated due to severe illness, you lose that coverage precisely when you might need it most. Personal Takaful ensures you are protected regardless of your employment status."
    },
    {
      q: "What happens if I miss a contribution payment?",
      a: "Most Takaful certificates have a grace period (usually 30 days). If missed beyond that, the certificate may lapse, meaning you lose protection. We always design a plan that fits comfortably within your monthly budget to prevent this."
    },
    {
      q: "Can non-Muslims participate in Takaful?",
      a: "Absolutely. Takaful is an ethical financial framework open to everyone, regardless of religion. Many non-Muslims choose Takaful for its transparent, mutual-assistance structure."
    }
  ]

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-balance">Resources & FAQ</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Knowledge to help you make informed decisions.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-20">
        <div className="grid md:grid-cols-12 gap-16">
          
          {/* Guides Section */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-6">Educational Guides</h2>
              <p className="text-muted-foreground text-sm mb-8">Short, clear documents to help you understand specific concepts before we meet.</p>
              
              <div className="space-y-4">
                <div className="border border-border rounded-xl p-4 flex items-center justify-between bg-white hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Medical Card Basics</h4>
                      <p className="text-xs text-muted-foreground">Understanding limits & deductibles</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>

                <div className="border border-border rounded-xl p-4 flex items-center justify-between bg-white hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">The Hibah Guide</h4>
                      <p className="text-xs text-muted-foreground">Protecting your family's cashflow</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground italic mt-4">
                  [Note: PDF downloads will be available soon]
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="md:col-span-7">
            <h2 className="text-2xl font-serif mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-base font-medium text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </div>
  )
}
