import { ImagePlaceholder } from "@/components/ImagePlaceholder"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Header */}
      <section className="bg-secondary/30 py-16 md:py-24 border-b border-border/50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-balance mb-6">Hello, I'm Akhir.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I believe financial protection should be a thoughtful conversation, not a high-pressure pitch.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            <div className="w-full md:w-2/5 sticky top-28">
              <ImagePlaceholder className="aspect-[3/4] w-full rounded-3xl shadow-lg bg-white" label="Muhammad Akhir Portrait" />
              
              <div className="mt-8 bg-white border border-border p-6 rounded-2xl">
                <h3 className="font-serif font-medium text-lg mb-4">Verified Credentials</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Registered Takaful Advisor</p>
                      <p className="text-xs text-muted-foreground">[Placeholder License Number]</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm font-medium">AIA Public Takaful Bhd</p>
                      <p className="text-xs text-muted-foreground">Authorized Representative</p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start border-t border-border/50 pt-3 mt-3">
                    <div className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                      [Admin Note: Pending official license & qualification details]
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-3/5 prose prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:text-muted-foreground">
              <h2>My Background</h2>
              <p>
                [Placeholder Biography: Briefly describe your background in banking/finance or your prior career before joining the Takaful industry. Share what motivated you to become an advisor—perhaps a personal experience with a claim, or a desire to change how financial products are sold in Malaysia.]
              </p>
              
              <h2>My Advisory Philosophy</h2>
              <p>
                The Takaful industry has a reputation for aggressive sales tactics. I want to change that. My role is not to sell you a product you don't understand; it is to educate you on your risks and present logical, affordable solutions.
              </p>
              <p>
                If we meet and determine that your current coverage is adequate, I will gladly tell you to keep it. Trust is built on honesty, not quotas.
              </p>

              <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-foreground text-xl font-serif">
                "An informed client makes the best decisions. I provide the facts, the numbers, and the context—you make the choice."
              </blockquote>

              <h2>Why Independence Matters</h2>
              <p>
                While I proudly represent AIA Public Takaful, this practice is my own. When you work with me, you are getting an advisor who acts in your best interest, guiding you through the underwriting process and fighting for you during claims. I am your direct point of contact—no call centers, no generic support tickets.
              </p>

              <h2>Outside of Work</h2>
              <p>
                [Placeholder: Add a brief, humanizing paragraph about your life in Malaysia, your hobbies, family, or interests to build rapport before the first meeting.]
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
