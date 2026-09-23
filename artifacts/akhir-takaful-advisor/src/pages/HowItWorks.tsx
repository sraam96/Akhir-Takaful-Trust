import { MessageCircle, FileText, Presentation, CheckCircle, Handshake, ShieldCheck } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "1. The Initial Conversation",
      desc: "A casual 15-20 minute chat, over coffee or video call. No presentations, no product pitches. Just understanding who you are and what you're looking for."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "2. Needs Assessment",
      desc: "We look at your current commitments, income, and any existing policies. We identify gaps where you are exposed to financial risk."
    },
    {
      icon: <Presentation className="w-6 h-6" />,
      title: "3. Options Presentation",
      desc: "I design a few customized solutions based on our discussion and your budget. I explain exactly what they cover, and importantly, what they don't."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "4. Your Decision",
      desc: "Take the proposals home. Think about it. Discuss it with your spouse. I will not push you for an answer. You proceed only when you are completely comfortable."
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "5. Application & Underwriting",
      desc: "If you decide to proceed, I handle the paperwork and guide you through the health declarations. (Note: All discussions are subject to official AIA underwriting approval)."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "6. Ongoing Support",
      desc: "Once approved, my real job begins. I am your first call if you need to be admitted to a hospital, update your beneficiaries, or make a claim."
    }
  ]

  return (
    <div className="animate-in fade-in duration-700">
      <div className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-balance">How We Work Together</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Clarity, transparency, and patience at every step.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-20 md:py-32">
        <div className="relative border-l border-border/50 md:ml-6 ml-4 space-y-12 pb-12">
          {steps.map((step, i) => (
            <div key={i} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[20px] top-1 w-10 h-10 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center">
                {step.icon}
              </div>
              <div className="bg-white border border-border p-6 md:p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-serif font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mt-12">
          <p className="text-sm text-amber-900">
            <strong>Important Note:</strong> Our discussions are the first step in the advisory process. Any proposed coverage, premium amounts, and acceptance are always subject to formal quotation generation and the official underwriting evaluation process by AIA Public Takaful Bhd.
          </p>
        </div>
      </div>
    </div>
  )
}
