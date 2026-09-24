import { ArrowRight, MessageCircle } from "lucide-react"
import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { aboutContent } from "@/content/about"
import { contactLinks } from "@/lib/contactLinks"

const ImageFrame = ({
  src,
  alt,
  className = "",
  aspect = "aspect-[4/5]",
}: {
  src: string
  alt: string
  className?: string
  aspect?: string
}) => (
  <div className={`group overflow-hidden rounded-[1.5rem] ${className}`}>
    <img
      src={src}
      alt={alt}
      className={`${aspect} w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
    />
  </div>
)

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-olive">
    {children}
  </p>
)

export default function About() {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-[#F5F1E8] text-[#252A22] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-end gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="space-y-7 pb-2">
              <Eyebrow>Meet Akhir</Eyebrow>
              <h1 className="max-w-xl font-serif text-5xl font-medium leading-[0.94] tracking-tight text-balance md:text-7xl">
                A Life Planner with a life beyond the numbers.
              </h1>
              <p className="max-w-lg text-base leading-relaxed text-[#252A22]/65 md:text-lg">
                I'm Muhammad Akhir, a Takaful advisor helping Malaysians make
                sense of protection without the pressure, jargon or unnecessary
                complexity.
              </p>
            </div>

            <ImageFrame
              src="/images/about/AkhirSpeech1.jpeg"
              alt="Akhir"
              aspect="aspect-[16/10]"
              className="[&>img]:object-[center_35%]"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-center gap-12 border-t border-[#252A22]/10 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-16">
            <ImageFrame
              src="/images/about/professional.jpeg"
              alt="Akhir in a professional setting"
            />

            <div className="space-y-8 lg:pr-12">
              <div>
                <Eyebrow>01 — The story</Eyebrow>
                <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
                  Seven years in banking. A different direction.
                </h2>
              </div>

              <div className="max-w-2xl space-y-5 text-base leading-[1.85] text-[#252A22]/68 md:text-lg">
                <p>
                  I spent seven years in banking. It was a good education in
                  money, people and the decisions that shape everyday life.
                </p>
                <p>
                  Over time, though, I realised I wanted to work closer to the
                  people behind those decisions.
                </p>
                <p>
                  That eventually led me to Takaful. Today, I get to have
                  conversations that are much more personal — understanding
                  where someone is in life, what they are responsible for and
                  whether their protection actually makes sense for them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Takaful */}
      <section className="bg-[#252A22] text-[#F5F1E8] py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="order-2 space-y-8 lg:order-1 lg:pl-8">
              <div>
                <Eyebrow>02 — Why Takaful</Eyebrow>
                <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance !text-[#F5F1E8] md:text-5xl">
                  I wanted work that meant something.
                </h2>
              </div>

              <div className="max-w-2xl space-y-5 text-base leading-[1.85] text-[#F5F1E8]/68 md:text-lg">
                <p>
                  I didn't choose Takaful because I wanted another title.
                  I chose it because I wanted to work with people in a way
                  that felt more personal and more purposeful.
                </p>
                <p>
                  Protection is one of those things we tend to think about
                  only when life gives us a reason to. My job is to make those
                  conversations easier to have before that happens.
                </p>
                <p>
                  And if what you already have is enough, I'll say that too.
                  I would rather build a relationship that lasts than sell
                  something that doesn't belong in your life.
                </p>
              </div>

              <div className="border-l border-[#4B5841]/60 pl-6 pt-2">
                <p className="max-w-xl font-serif text-2xl leading-relaxed text-[#F5F1E8] md:text-3xl">
                  “It's not just about protecting what you have today. It's
                  about creating value that goes beyond today.”
                </p>
              </div>
            </div>

            <ImageFrame
              src="/images/about/takaful.jpeg"
              alt="Akhir"
              className="order-1 lg:order-2"
            />
          </div>
        </div>
      </section>

      {/* Beyond the desk */}
      <section className="bg-[#F5F1E8] text-[#252A22] py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <ImageFrame
                src="/images/about/fitness.jpeg"
                alt="Akhir playing football"
                aspect="aspect-[4/4.5]"
              />

              <div className="mt-5 grid grid-cols-2 gap-5">
                <ImageFrame
                  src="/images/about/lifestyle.jpeg"
                  alt="Akhir enjoying life outside work"
                  aspect="aspect-square"
                />
                <ImageFrame
                  src="/images/about/silat.jpeg"
                  alt="Akhir teaching Silat"
                  aspect="aspect-square"
                />
              </div>
            </div>

            <div className="space-y-8 lg:pr-12">
              <div>
                <Eyebrow>03 — Beyond the desk</Eyebrow>
                <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
                  Work is important. It isn't everything.
                </h2>
              </div>

              <div className="max-w-2xl space-y-5 text-base leading-[1.85] text-[#252A22]/68 md:text-lg">
                <p>I'm not someone who sits still very well.</p>
                <p>
                  Outside work, I spend a lot of time around sports and
                  fitness. I also teach Silat and take part in local community
                  initiatives through Rukun Tetangga.
                </p>
                <p>
                  These things keep me grounded. They give me different
                  perspectives, different people to learn from and, honestly,
                  a life outside the laptop.
                </p>
              </div>

              <div className="grid gap-6 border-t border-[#252A22]/12 pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B5841]">
                    Sport & fitness
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#252A22]/55">
                    Football, training, running around and generally finding reasons not to sit down.
                    It keeps me disciplined, competitive and always looking for the next challenge.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4B5841]">
                    Community
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#252A22]/55">
                    Teaching Silat, Rukun Tetangga, meeting good people and doing my bit where I can.
                    There's something rewarding about showing up, sharing what you know and being part of something bigger than yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid items-start gap-12 border-t border-[#252A22]/10 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-16">
            <div className="space-y-7">
              <Eyebrow>04 — Experience</Eyebrow>

              <h2 className="max-w-2xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
                What I bring to the table.
              </h2>

              <p className="max-w-xl text-base leading-[1.85] text-[#252A22]/68 md:text-lg">
                My background sits across banking, Islamic finance, insurance
                and Takaful. The qualifications matter, but so does knowing
                how to sit down with someone and have a straightforward
                conversation about money.
              </p>
            </div>

            <div className="border-t border-[#252A22]/12">
              {[
                "Takaful Licence",
                "RFP Module 2 — Shariah",
                "Insurance Licence",
                "Degree in Islamic Banking",
              ].map((credential, index) => (
                <div
                  key={credential}
                  className="flex items-center gap-5 border-b border-[#252A22]/12 py-5"
                >
                  <span className="font-mono text-xs tracking-[0.18em] text-[#4B5841]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium text-[#252A22] md:text-lg">
                    {credential}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure */}

      <section className="bg-[#F5F1E8] text-[#252A22] py-10 md:py-14">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="border-t border-[#5C0B03]/50 pt-6">
            <div className="[&>p]:!text-[#5C0B03]">
              <Eyebrow>{aboutContent.disclosure.eyebrow}</Eyebrow>
            </div>

            <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight md:text-3xl">
              {aboutContent.disclosure.heading}
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#252A22]/60">
              {aboutContent.disclosure.body}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70">
            {aboutContent.cta.eyebrow}
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
            {aboutContent.cta.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {aboutContent.cta.body}
          </p>

          <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full gap-2 px-8"
            >
              <a href={contactLinks.calendly}>
                {aboutContent.cta.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full gap-2 px-8 bg-brand-ivory"
            >
              <a href={contactLinks.whatsapp}>
                <MessageCircle className="h-5 w-5" />
                {aboutContent.cta.secondaryCta}
              </a>
            </Button>
          </div>

          <div className="pt-8">
            <Link
              href="/"
              className="text-sm text-[#252A22]/50 transition-colors hover:text-[#252A22]"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
