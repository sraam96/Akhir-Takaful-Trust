export type FAQItem = {
  question: string
  answer: string
  visible: boolean
}

export type PageSEO = {
  title: string
  description: string
  keywords: string
}

export type PageSection = {
  id: string
  title: string
  eyebrow: string
  heading: string
  body: string
  visible: boolean
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  location: string
  visible: boolean
}

export type SolutionCard = {
  id: string
  title: string
  description: string
  link: string
  visible: boolean
}

export type ProcessStep = {
  id: string
  number: string
  title: string
  description: string
  visible: boolean
}

export type SitePage = {
  sections: PageSection[]
}

export type SiteConfig = {
  business: {
    name: string
    advisorName: string
    tagline: string
    phone: string
    whatsapp: string
    email: string
    calendly: string
  }

  brand: {
    primaryColor: string
    accentColor: string
    backgroundColor: string
    headingFont: string
    bodyFont: string
    buttonRadius: string
  }

  social: {
    instagram: string
    facebook: string
    tiktok: string
    linkedin: string
  }

  navigation: {
    home: string
    solutions: string
    about: string
    howItWorks: string
    resources: string
    joinAkhir: string
    contact: string
  }

  footer: {
    description: string
    copyright: string
    disclaimer: string
  }

  seo: {
    defaultTitle: string
    defaultDescription: string
    defaultKeywords: string
    ogImage: string
  }

  pages: {
    home: PageSEO
    solutions: PageSEO
    medicalCard: PageSEO
    hibahFamilyProtection: PageSEO
    criticalIllness: PageSEO
    protectionPlanning: PageSEO
    about: PageSEO
    howItWorks: PageSEO
    resources: PageSEO
    joinAkhir: PageSEO
    contact: PageSEO
  }

  content: {
    home: SitePage
    solutions: SitePage
    about: SitePage
    howItWorks: SitePage
    resources: SitePage
    joinAkhir: SitePage
    contact: SitePage
  }

  homeSolutions: SolutionCard[]
  testimonials: Testimonial[]
  processSteps: ProcessStep[]
  faq: FAQItem[]
}

const section = (
  id: string,
  title: string,
  eyebrow = "",
  heading = "",
  body = "",
): PageSection => ({
  id,
  title,
  eyebrow,
  heading,
  body,
  visible: true,
})

export const defaultSiteConfig: SiteConfig = {
  business: {
    name: "Akhir Takaful",
    advisorName: "Muhammad Akhir",
    tagline:
      "Guiding Malaysians towards clear, pressure-free protection decisions.",
    phone: "+60129117691",
    whatsapp: "https://wa.me/60129117691",
    email: "admin@ingatakhir.com",
    calendly: "https://calendly.com/akhirpauzi/30min",
  },

  brand: {
    primaryColor: "#4B5841",
    accentColor: "#8A5145",
    backgroundColor: "#F5F1E8",
    headingFont: "Playfair Display",
    bodyFont: "Plus Jakarta Sans",
    buttonRadius: "0.375rem",
  },

  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
    linkedin: "",
  },

  navigation: {
    home: "Home",
    solutions: "Solutions",
    about: "About",
    howItWorks: "How It Works",
    resources: "Resources",
    joinAkhir: "Join Akhir",
    contact: "Contact",
  },

  footer: {
    description:
      "Guiding Malaysians towards clear, pressure-free protection decisions. Understand what you need, on your own terms.",
    copyright: "© 2026 Akhir Takaful. All rights reserved.",
    disclaimer:
      "This website is for general information only and does not constitute financial advice.",
  },

  seo: {
    defaultTitle: "Akhir Takaful | Protection Planning in Malaysia",
    defaultDescription:
      "Clear, pressure-free Takaful guidance for Malaysians, covering medical cards, hibah, critical illness and protection planning.",
    defaultKeywords:
      "Takaful Malaysia, Takaful Advisor, Medical Card Malaysia, Hibah Malaysia, Critical Illness, Islamic Finance, Takaful Career",
    ogImage: "",
  },

  pages: {
    home: {
      title: "Akhir Takaful | Protection Planning in Malaysia",
      description:
        "Clear and practical Takaful guidance for individuals and families in Malaysia.",
      keywords:
        "Takaful Malaysia, Medical Card, Hibah, Protection Planning",
    },

    solutions: {
      title: "Takaful Solutions | Akhir Takaful",
      description:
        "Explore practical Takaful solutions for medical, family protection, critical illness and financial planning.",
      keywords:
        "Takaful solutions, Medical Card, Hibah, Critical Illness",
    },

    medicalCard: {
      title: "Medical Card Malaysia | Akhir Takaful",
      description:
        "Understand medical card coverage, limits, co-takaful, exclusions and waiting periods before you need them.",
      keywords:
        "Medical Card Malaysia, Medical Takaful, Hospitalisation, Medical Protection",
    },

    hibahFamilyProtection: {
      title: "Hibah & Family Protection Malaysia | Akhir Takaful",
      description:
        "Understand how hibah can form part of a wider protection plan for the people who depend on you.",
      keywords:
        "Hibah Malaysia, Family Protection, Takaful Hibah, Financial Protection",
    },

    criticalIllness: {
      title: "Critical Illness Protection Malaysia | Akhir Takaful",
      description:
        "Understand how critical illness protection can provide financial support when a covered illness is diagnosed.",
      keywords:
        "Critical Illness Malaysia, Critical Illness Protection, Takaful, Financial Protection",
    },

    protectionPlanning: {
      title: "Protection Planning Malaysia | Akhir Takaful",
      description:
        "Review your existing protection, identify potential gaps and make sure your plan still fits your life.",
      keywords:
        "Protection Planning Malaysia, Takaful Planning, Financial Protection, Takaful Review",
    },

    about: {
      title: "About Akhir | Takaful Advisor Malaysia",
      description:
        "Learn about Muhammad Akhir, his professional background and approach to Takaful advisory.",
      keywords:
        "Muhammad Akhir, Takaful Advisor, Islamic Finance, Malaysia",
    },

    howItWorks: {
      title: "How Takaful Works | Akhir Takaful",
      description:
        "Understand how Takaful planning works and what to expect when working with Akhir.",
      keywords:
        "How Takaful works, Takaful Malaysia, financial protection",
    },

    resources: {
      title: "Takaful Resources | Akhir Takaful",
      description:
        "Practical resources and guides to help Malaysians understand financial protection.",
      keywords:
        "Takaful resources, financial planning Malaysia",
    },

    joinAkhir: {
      title: "Takaful Career Opportunities in Malaysia | Join Akhir",
      description:
        "Explore full-time and part-time Takaful career opportunities with structured mentorship and professional development.",
      keywords:
        "Takaful career, Takaful jobs Malaysia, part time Takaful, full time Takaful, Takaful Advisor",
    },

    contact: {
      title: "Contact Akhir | Takaful Advisor Malaysia",
      description:
        "Speak with Akhir about your Takaful and protection planning needs.",
      keywords:
        "Contact Takaful Advisor, Takaful Malaysia, Akhir Takaful",
    },
  },

  content: {
    home: {
      sections: [
        section(
          "hero",
          "Hero Section",
          "Independent Takaful Advisory",
          "Understand your protection. Without the pressure.",
          "I help Malaysians navigate Takaful choices with clarity and honesty. No aggressive sales—just a calm conversation about what you actually need.",
        ),
        section(
          "concerns",
          "Protection Concerns",
          "Protection, without the jargon",
          "Most people don't know what they're actually covered for.",
          "Takaful shouldn't require a dictionary, a sales pitch, or blind trust. It should simply make sense.",
        ),
        section(
          "solutions",
          "Protection Pathways",
          "Protection planning",
          "The right protection depends on what you're protecting.",
          "Start with the part of your life you want to protect most.",
        ),
        section(
          "why-akhir",
          "Why Akhir",
          "Why Akhir",
          "Takaful should feel like a conversation.",
          "The traditional approach can feel like a transaction — a product, a price, a signature. Akhir takes a different approach.",
        ),
        section(
          "process",
          "How It Works",
          "How it works",
          "From your first question to ongoing support.",
          "No complicated process. No pressure to decide on the spot. Just a clear path from understanding your needs to putting the right protection in place.",
        ),
        section(
          "testimonials",
          "Client Experiences",
          "",
          "Client Experiences",
          "Genuine client experiences will be displayed here once verified.",
        ),
        section(
          "faq",
          "Frequently Asked Questions",
          "",
          "Common Questions",
          "Answers to common questions about Takaful and protection planning.",
        ),
        section(
          "cta",
          "Final CTA",
          "",
          "Ready for a clearer picture of your protection?",
          "Book a short, casual chat. No preparation needed, and absolutely no expectation to buy anything.",
        ),
      ],
    },

    solutions: {
      sections: [
        section("hero", "Page Header", "Protection Solutions", "Protection that fits your life.", "Explore practical protection solutions based on your needs, responsibilities and stage of life."),
        section("medical-card", "Medical Card", "", "When the hospital bill shouldn't become the financial crisis.", "Understand medical protection, hospitalisation coverage and the important exclusions before you decide."),
        section("hibah", "Hibah & Family Protection", "", "Leave your family a safety net, not a financial burden.", "Put a clear plan in place for the people who depend on you."),
        section("critical-illness", "Critical Illness", "", "Your recovery shouldn't come with a financial countdown.", "Protect your income and commitments when illness temporarily puts work on hold."),
        section("protection-review", "Protection Planning Review", "", "Your old plan may not fit your life anymore.", "Review what you already have against where your life is today."),
        section("cta", "Closing CTA", "", "Not sure where to start?", "Let's look at your situation first. No pressure to buy anything."),
      ],
    },

    about: {
      sections: [
        section("hero", "Page Hero", "About Akhir", "Protection advice should start with people, not products.", "Learn about Muhammad Akhir and the approach behind Akhir Takaful."),
        section("story", "Advisor Story", "", "A different approach to Takaful.", "Share Akhir's personal story, motivations and journey into financial protection."),
        section("qualifications", "Professional Qualifications", "Career Foundation", "Experience backed by professional training.", "A foundation in banking, Islamic finance, insurance and Takaful — bringing together technical knowledge with a people-first approach."),
        section("philosophy", "Advisory Philosophy", "", "Education before products.", "Understand the principles first. Products come later."),
        section("career", "Career Pathway", "Build with Akhir", "Build a career with purpose.", "Structured mentorship, professional development and a clear pathway for people who want to build a career in Takaful."),
        section("cta", "Closing CTA", "", "Have a question for Akhir?", "Start with a conversation."),
      ],
    },

    howItWorks: {
      sections: [
        section("hero", "Page Hero", "How It Works", "A clear process from first conversation to ongoing support.", "No complicated process. No pressure to decide on the spot."),
        section("conversation", "Step 1 — Conversation", "01", "Start a conversation.", "Tell me what's on your mind."),
        section("needs", "Step 2 — Needs", "02", "Understand your needs.", "Look at your situation, commitments and priorities."),
        section("options", "Step 3 — Options", "03", "Explore your options.", "Compare the relevant paths clearly."),
        section("decision", "Step 4 — Decision", "04", "You decide.", "Take your time. There is no pressure."),
        section("application", "Step 5 — Application", "05", "Application & approval.", "I'll guide you through the process."),
        section("support", "Step 6 — Support", "06", "Ongoing support.", "The relationship doesn't end after the application."),
        section("cta", "Closing CTA", "", "Ready to have a conversation?", "Start with a simple question."),
      ],
    },

    resources: {
      sections: [
        section("hero", "Page Hero", "Resources", "Understand protection before you decide.", "Practical resources designed to make Takaful easier to understand."),
        section("articles", "Articles & Guides", "", "Useful information, without the jargon.", "Educational guides covering medical cards, Hibah, critical illness and protection planning."),
        section("faq", "FAQ", "", "Frequently asked questions.", "Straightforward answers to common Takaful questions."),
        section("cta", "Closing CTA", "", "Still have questions?", "Let's talk through your situation."),
      ],
    },

    joinAkhir: {
      sections: [
        section("hero", "Page Hero", "Career Pathway", "Build a career in Takaful with structure, mentorship and purpose.", "Explore full-time and part-time opportunities with Akhir."),
        section("why-join", "Why Join Akhir", "", "Don't build your career alone.", "Learn, develop and grow with structured support."),
        section("career", "Career Pathway", "", "Know where you're going.", "A clear pathway from starting out to developing a sustainable advisory career."),
        section("development", "Professional Development", "", "Training that develops more than sales skills.", "Build knowledge, communication, advisory and leadership capabilities."),
        section("cta", "Application CTA", "", "Interested in joining?", "Start a conversation and find out whether the pathway is right for you."),
      ],
    },

    contact: {
      sections: [
        section("hero", "Page Hero", "Contact Akhir", "Let's start with a conversation.", "Have a question about Takaful, your existing protection or where to begin?"),
        section("information", "Contact Information", "", "Speak with Akhir.", "Phone, WhatsApp and email are available for enquiries and consultation."),
        section("booking", "Booking Section", "", "Prefer to book a time?", "Schedule a short consultation through Calendly."),
        section("form", "Contact Form", "", "Send an enquiry.", "Leave your details and message and we'll get back to you."),
        section("cta", "Closing CTA", "", "No pressure. Just clarity.", "Start with your question."),
      ],
    },
  },

  homeSolutions: [
    {
      id: "medical-card",
      title: "Medical Card",
      description: "Know what your medical protection actually covers — before you need it.",
      link: "/solutions/medical-card",
      visible: true,
    },
    {
      id: "hibah",
      title: "Hibah Protection",
      description: "Put a clear plan in place for the people who depend on you.",
      link: "/solutions/hibah-family-protection",
      visible: true,
    },
    {
      id: "critical-illness",
      title: "Critical Illness",
      description: "Protect your income and commitments when illness puts work on hold.",
      link: "/solutions/critical-illness",
      visible: true,
    },
    {
      id: "protection-review",
      title: "Protection Review",
      description: "Review what you already have against where your life is today.",
      link: "/solutions/protection-planning",
      visible: true,
    },
  ],

  testimonials: [
    {
      id: "testimonial-1",
      quote: "",
      name: "",
      location: "",
      visible: false,
    },
    {
      id: "testimonial-2",
      quote: "",
      name: "",
      location: "",
      visible: false,
    },
    {
      id: "testimonial-3",
      quote: "",
      name: "",
      location: "",
      visible: false,
    },
  ],

  processSteps: [
    {
      id: "step-1",
      number: "1",
      title: "Start a conversation",
      description: "Tell me what's on your mind.",
      visible: true,
    },
    {
      id: "step-2",
      number: "2",
      title: "Understand your needs",
      description: "Look at your situation, commitments and priorities.",
      visible: true,
    },
    {
      id: "step-3",
      number: "3",
      title: "Explore your options",
      description: "Compare the relevant paths clearly.",
      visible: true,
    },
    {
      id: "step-4",
      number: "4",
      title: "You decide",
      description: "Take your time. There is no pressure.",
      visible: true,
    },
    {
      id: "step-5",
      number: "5",
      title: "Application & approval",
      description: "I'll guide you through the process.",
      visible: true,
    },
    {
      id: "step-6",
      number: "6",
      title: "Ongoing support",
      description: "The relationship doesn't end after the application.",
      visible: true,
    },
  ],

  faq: [
    {
      question: "What is Takaful?",
      answer:
        "Takaful is a Shariah-compliant approach to financial protection based on mutual assistance and shared responsibility.",
      visible: true,
    },
    {
      question: "Do I need a Medical Card?",
      answer:
        "It depends on your existing coverage, financial position, healthcare needs and personal circumstances.",
      visible: true,
    },
    {
      question: "What is Hibah?",
      answer:
        "Hibah is a voluntary gift arrangement that can be used as part of a broader family protection and estate planning strategy.",
      visible: true,
    },
    {
      question: "Do I have to pay for a consultation?",
      answer:
        "No, initial consultations and reviews are complimentary.",
      visible: true,
    },
  ],
}

const STORAGE_KEY = "akhir-site-config"

function mergeConfig(parsed: Partial<SiteConfig>): SiteConfig {
  return {
    ...defaultSiteConfig,
    ...parsed,

    business: {
      ...defaultSiteConfig.business,
      ...parsed.business,
    },

    brand: {
      ...defaultSiteConfig.brand,
      ...parsed.brand,
    },

    social: {
      ...defaultSiteConfig.social,
      ...parsed.social,
    },

    navigation: {
      ...defaultSiteConfig.navigation,
      ...parsed.navigation,
    },

    footer: {
      ...defaultSiteConfig.footer,
      ...parsed.footer,
    },

    seo: {
      ...defaultSiteConfig.seo,
      ...parsed.seo,
    },

    pages: {
      ...defaultSiteConfig.pages,
      ...parsed.pages,
    },

    content: {
      ...defaultSiteConfig.content,
      ...parsed.content,
    },

    homeSolutions:
      parsed.homeSolutions ?? defaultSiteConfig.homeSolutions,

    testimonials:
      parsed.testimonials ?? defaultSiteConfig.testimonials,

    processSteps:
      parsed.processSteps ?? defaultSiteConfig.processSteps,

    faq: parsed.faq ?? defaultSiteConfig.faq,
  }
}

export function loadSiteConfig(): SiteConfig {
  if (typeof window === "undefined") {
    return defaultSiteConfig
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)

    if (!stored) {
      return defaultSiteConfig
    }

    const parsed = JSON.parse(stored) as Partial<SiteConfig>

    return mergeConfig(parsed)
  } catch {
    return defaultSiteConfig
  }
}

export function saveSiteConfig(config: SiteConfig) {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
}

export function resetSiteConfig() {
  if (typeof window === "undefined") {
    return
  }

  window.localStorage.removeItem(STORAGE_KEY)
}
