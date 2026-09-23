import { useEffect, useState } from "react"
import {
  LayoutDashboard,
  Home,
  Layers,
  User,
  Workflow,
  BookOpen,
  BriefcaseBusiness,
  Mail,
  Settings,
  ChevronRight,
  Save,
  RotateCcw,
  Eye,
  ExternalLink,
  Plus,
  Trash2,
  Check,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  loadSiteConfig,
  saveSiteConfig,
  resetSiteConfig,
  type SiteConfig,
  type PageSection,
  type FAQItem,
  type Testimonial,
  type SolutionCard,
  type ProcessStep,
} from "@/lib/siteConfig"

type AdminPage =
  | "dashboard"
  | "home"
  | "solutions"
  | "about"
  | "howItWorks"
  | "resources"
  | "joinAkhir"
  | "contact"
  | "settings"

type SectionEditorProps = {
  section: PageSection
  onChange: (section: PageSection) => void
}

const pages: {
  id: AdminPage
  label: string
  icon: React.ElementType
}[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "home", label: "Home", icon: Home },
  { id: "solutions", label: "Solutions", icon: Layers },
  { id: "about", label: "About", icon: User },
  { id: "howItWorks", label: "How It Works", icon: Workflow },
  { id: "resources", label: "Resources", icon: BookOpen },
  { id: "joinAkhir", label: "Join Akhir", icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", icon: Mail },
]

const pageTitles: Record<
  Exclude<AdminPage, "dashboard" | "settings">,
  string
> = {
  home: "Home",
  solutions: "Solutions",
  about: "About",
  howItWorks: "How It Works",
  resources: "Resources",
  joinAkhir: "Join Akhir",
  contact: "Contact",
}

const pageRoutes: Record<
  Exclude<AdminPage, "dashboard" | "settings">,
  string
> = {
  home: "/",
  solutions: "/solutions",
  about: "/about",
  howItWorks: "/how-it-works",
  resources: "/resources",
  joinAkhir: "/join-akhir",
  contact: "/contact",
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 rounded-lg border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-primary/20"
      />
    </label>
  )
}

function Textarea({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="w-full rounded-lg border border-border bg-white px-3 py-3 text-sm outline-none resize-y focus:ring-2 focus:ring-primary/20"
      />
    </label>
  )
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        checked ? "bg-primary" : "bg-border"
      }`}
    >
      <span
        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}

function Sidebar({
  activePage,
  setActivePage,
}: {
  activePage: AdminPage
  setActivePage: (page: AdminPage) => void
}) {
  return (
    <aside className="w-64 shrink-0 border-r border-border bg-white min-h-screen">
      <div className="h-20 border-b border-border flex items-center px-6">
        <div>
          <p className="font-serif text-xl font-medium">Akhir</p>
          <p className="text-xs text-muted-foreground tracking-wide">
            ADMIN PANEL
          </p>
        </div>
      </div>

      <div className="p-4 space-y-1">
        {pages.map((page) => {
          const Icon = page.icon
          const active = activePage === page.id

          return (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{page.label}</span>
            </button>
          )
        })}

        <div className="pt-4 mt-4 border-t border-border">
          <button
            onClick={() => setActivePage("settings")}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activePage === "settings"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

function PageHeader({
  title,
  description,
  route,
}: {
  title: string
  description: string
  route?: string
}) {
  return (
    <div className="mb-8 flex items-start justify-between gap-6">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-2">
          Website Management
        </p>
        <h1 className="text-3xl md:text-4xl font-serif">{title}</h1>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>

      {route && (
        <Button
          variant="outline"
          className="gap-2 shrink-0"
          onClick={() => window.open(route, "_blank")}
        >
          <Eye className="w-4 h-4" />
          View Page
          <ExternalLink className="w-3.5 h-3.5" />
        </Button>
      )}
    </div>
  )
}

function SectionEditor({
  section,
  onChange,
}: SectionEditorProps) {
  const update = (field: keyof PageSection, value: string | boolean) => {
    onChange({
      ...section,
      [field]: value,
    })
  }

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden">
      <div className="px-6 py-5 border-b border-border flex items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-xl">{section.title}</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Section ID: {section.id}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">
            {section.visible ? "Visible" : "Hidden"}
          </span>
          <Toggle
            checked={section.visible}
            onChange={(value) => update("visible", value)}
          />
        </div>
      </div>

      <div className="p-6 grid md:grid-cols-2 gap-5">
        <Input
          label="Eyebrow"
          value={section.eyebrow}
          onChange={(value) => update("eyebrow", value)}
        />

        <Input
          label="Heading"
          value={section.heading}
          onChange={(value) => update("heading", value)}
        />

        <div className="md:col-span-2">
          <Textarea
            label="Body / Supporting Copy"
            value={section.body}
            onChange={(value) => update("body", value)}
          />
        </div>
      </div>
    </div>
  )
}

function GenericPageEditor({
  page,
  config,
  setConfig,
}: {
  page: Exclude<AdminPage, "dashboard" | "settings">
  config: SiteConfig
  setConfig: (config: SiteConfig) => void
}) {
  const sections = config.content[page].sections

  const updateSection = (updated: PageSection) => {
    setConfig({
      ...config,
      content: {
        ...config.content,
        [page]: {
          ...config.content[page],
          sections: sections.map((section) =>
            section.id === updated.id ? updated : section,
          ),
        },
      },
    })
  }

  return (
    <div>
      <PageHeader
        title={pageTitles[page]}
        description={`Edit every content section displayed on the ${pageTitles[page]} page.`}
        route={pageRoutes[page]}
      />

      <div className="space-y-5">
        {sections.map((section) => (
          <SectionEditor
            key={section.id}
            section={section}
            onChange={updateSection}
          />
        ))}
      </div>
    </div>
  )
}

function HomeSpecialEditor({
  config,
  setConfig,
}: {
  config: SiteConfig
  setConfig: (config: SiteConfig) => void
}) {
  const updateConfig = <K extends keyof SiteConfig>(
    key: K,
    value: SiteConfig[K],
  ) => {
    setConfig({
      ...config,
      [key]: value,
    })
  }

  return (
    <div className="space-y-8">
      <GenericPageEditor
        page="home"
        config={config}
        setConfig={setConfig}
      />

      <div className="bg-white border border-border rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl">Protection Pathways</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage the four solution cards shown on the homepage.
          </p>
        </div>

        <div className="p-6 space-y-5">
          {config.homeSolutions.map((item, index) => (
            <SolutionEditor
              key={item.id}
              item={item}
              onChange={(updated) => {
                const items = [...config.homeSolutions]
                items[index] = updated
                updateConfig("homeSolutions", items)
              }}
              onDelete={() => {
                updateConfig(
                  "homeSolutions",
                  config.homeSolutions.filter((x) => x.id !== item.id),
                )
              }}
            />
          ))}

          <Button
            variant="outline"
            className="gap-2"
            onClick={() =>
              updateConfig("homeSolutions", [
                ...config.homeSolutions,
                {
                  id: `solution-${Date.now()}`,
                  title: "New Solution",
                  description: "",
                  link: "/solutions",
                  visible: true,
                },
              ])
            }
          >
            <Plus className="w-4 h-4" />
            Add Solution
          </Button>
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl">Process Steps</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage the six-step process.
          </p>
        </div>

        <div className="p-6 space-y-5">
          {config.processSteps.map((item, index) => (
            <ProcessEditor
              key={item.id}
              item={item}
              onChange={(updated) => {
                const items = [...config.processSteps]
                items[index] = updated
                updateConfig("processSteps", items)
              }}
              onDelete={() =>
                updateConfig(
                  "processSteps",
                  config.processSteps.filter((x) => x.id !== item.id),
                )
              }
            />
          ))}
        </div>
      </div>

      <div className="bg-white border border-border rounded-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl">Client Experiences</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Add only genuine, verified testimonials.
          </p>
        </div>

        <div className="p-6 space-y-5">
          {config.testimonials.map((item, index) => (
            <TestimonialEditor
              key={item.id}
              item={item}
              onChange={(updated) => {
                const items = [...config.testimonials]
                items[index] = updated
                updateConfig("testimonials", items)
              }}
              onDelete={() =>
                updateConfig(
                  "testimonials",
                  config.testimonials.filter((x) => x.id !== item.id),
                )
              }
            />
          ))}

          <Button
            variant="outline"
            className="gap-2"
            onClick={() =>
              updateConfig("testimonials", [
                ...config.testimonials,
                {
                  id: `testimonial-${Date.now()}`,
                  quote: "",
                  name: "",
                  location: "",
                  visible: false,
                },
              ])
            }
          >
            <Plus className="w-4 h-4" />
            Add Testimonial
          </Button>
        </div>
      </div>
    </div>
  )
}

function SolutionEditor({
  item,
  onChange,
  onDelete,
}: {
  item: SolutionCard
  onChange: (item: SolutionCard) => void
  onDelete: () => void
}) {
  return (
    <div className="border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="font-medium">{item.title || "Untitled Solution"}</div>
        <div className="flex items-center gap-3">
          <Toggle
            checked={item.visible}
            onChange={(visible) => onChange({ ...item, visible })}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Title"
          value={item.title}
          onChange={(title) => onChange({ ...item, title })}
        />

        <Input
          label="Link"
          value={item.link}
          onChange={(link) => onChange({ ...item, link })}
        />

        <div className="md:col-span-2">
          <Textarea
            label="Description"
            value={item.description}
            onChange={(description) =>
              onChange({ ...item, description })
            }
          />
        </div>
      </div>
    </div>
  )
}

function ProcessEditor({
  item,
  onChange,
  onDelete,
}: {
  item: ProcessStep
  onChange: (item: ProcessStep) => void
  onDelete: () => void
}) {
  return (
    <div className="border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="font-medium">
          Step {item.number}: {item.title}
        </div>

        <div className="flex items-center gap-3">
          <Toggle
            checked={item.visible}
            onChange={(visible) => onChange({ ...item, visible })}
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <Input
          label="Number"
          value={item.number}
          onChange={(number) => onChange({ ...item, number })}
        />

        <Input
          label="Title"
          value={item.title}
          onChange={(title) => onChange({ ...item, title })}
        />

        <Input
          label="Description"
          value={item.description}
          onChange={(description) =>
            onChange({ ...item, description })
          }
        />
      </div>
    </div>
  )
}

function TestimonialEditor({
  item,
  onChange,
  onDelete,
}: {
  item: Testimonial
  onChange: (item: Testimonial) => void
  onDelete: () => void
}) {
  return (
    <div className="border border-border rounded-xl p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="font-medium">
          {item.name || "New Testimonial"}
        </div>

        <div className="flex items-center gap-3">
          <Toggle
            checked={item.visible}
            onChange={(visible) => onChange({ ...item, visible })}
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-destructive"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-5">
        <Textarea
          label="Quote"
          value={item.quote}
          onChange={(quote) => onChange({ ...item, quote })}
        />

        <div className="grid md:grid-cols-2 gap-5">
          <Input
            label="Client Name"
            value={item.name}
            onChange={(name) => onChange({ ...item, name })}
          />

          <Input
            label="Location"
            value={item.location}
            onChange={(location) =>
              onChange({ ...item, location })
            }
          />
        </div>
      </div>
    </div>
  )
}

function SettingsPage({
  config,
  setConfig,
}: {
  config: SiteConfig
  setConfig: (config: SiteConfig) => void
}) {
  const updateGroup = <K extends keyof SiteConfig>(
    group: K,
    field: string,
    value: string,
  ) => {
    setConfig({
      ...config,
      [group]: {
        ...(config[group] as object),
        [field]: value,
      } as SiteConfig[K],
    })
  }

  return (
    <div>
      <PageHeader
        title="Settings"
        description="Control the global configuration of the Akhir website."
      />

      <div className="space-y-8">
        <SettingsCard
          title="Brand & Appearance"
          description="Control the visual identity used throughout the website."
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Primary Colour"
              value={config.brand.primaryColor}
              onChange={(value) =>
                updateGroup("brand", "primaryColor", value)
              }
            />

            <Input
              label="Accent Colour"
              value={config.brand.accentColor}
              onChange={(value) =>
                updateGroup("brand", "accentColor", value)
              }
            />

            <Input
              label="Background Colour"
              value={config.brand.backgroundColor}
              onChange={(value) =>
                updateGroup("brand", "backgroundColor", value)
              }
            />

            <Input
              label="Heading Font"
              value={config.brand.headingFont}
              onChange={(value) =>
                updateGroup("brand", "headingFont", value)
              }
            />

            <Input
              label="Body Font"
              value={config.brand.bodyFont}
              onChange={(value) =>
                updateGroup("brand", "bodyFont", value)
              }
            />

            <Input
              label="Button Radius"
              value={config.brand.buttonRadius}
              onChange={(value) =>
                updateGroup("brand", "buttonRadius", value)
              }
            />
          </div>
        </SettingsCard>

        <SettingsCard
          title="Business Information"
          description="Contact details used across the website."
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Business Name"
              value={config.business.name}
              onChange={(value) =>
                updateGroup("business", "name", value)
              }
            />

            <Input
              label="Advisor Name"
              value={config.business.advisorName}
              onChange={(value) =>
                updateGroup("business", "advisorName", value)
              }
            />

            <Input
              label="Tagline"
              value={config.business.tagline}
              onChange={(value) =>
                updateGroup("business", "tagline", value)
              }
            />

            <Input
              label="Phone"
              value={config.business.phone}
              onChange={(value) =>
                updateGroup("business", "phone", value)
              }
            />

            <Input
              label="WhatsApp URL"
              value={config.business.whatsapp}
              onChange={(value) =>
                updateGroup("business", "whatsapp", value)
              }
            />

            <Input
              label="Email"
              value={config.business.email}
              onChange={(value) =>
                updateGroup("business", "email", value)
              }
            />

            <Input
              label="Calendly URL"
              value={config.business.calendly}
              onChange={(value) =>
                updateGroup("business", "calendly", value)
              }
            />
          </div>
        </SettingsCard>

        <SettingsCard
          title="Social Media"
          description="Manage social profile links."
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Input
              label="Instagram"
              value={config.social.instagram}
              onChange={(value) =>
                updateGroup("social", "instagram", value)
              }
            />

            <Input
              label="Facebook"
              value={config.social.facebook}
              onChange={(value) =>
                updateGroup("social", "facebook", value)
              }
            />

            <Input
              label="TikTok"
              value={config.social.tiktok}
              onChange={(value) =>
                updateGroup("social", "tiktok", value)
              }
            />

            <Input
              label="LinkedIn"
              value={config.social.linkedin}
              onChange={(value) =>
                updateGroup("social", "linkedin", value)
              }
            />
          </div>
        </SettingsCard>

        <SettingsCard
          title="Navigation"
          description="Change the labels displayed in the main navigation."
        >
          <div className="grid md:grid-cols-2 gap-5">
            {Object.entries(config.navigation).map(([key, value]) => (
              <Input
                key={key}
                label={key}
                value={value}
                onChange={(next) =>
                  updateGroup("navigation", key, next)
                }
              />
            ))}
          </div>
        </SettingsCard>

        <SettingsCard
          title="Footer"
          description="Manage the footer copy and legal disclaimer."
        >
          <div className="space-y-5">
            <Textarea
              label="Footer Description"
              value={config.footer.description}
              onChange={(value) =>
                updateGroup("footer", "description", value)
              }
            />

            <Input
              label="Copyright"
              value={config.footer.copyright}
              onChange={(value) =>
                updateGroup("footer", "copyright", value)
              }
            />

            <Textarea
              label="Disclaimer"
              value={config.footer.disclaimer}
              onChange={(value) =>
                updateGroup("footer", "disclaimer", value)
              }
            />
          </div>
        </SettingsCard>

        <SettingsCard
          title="Global SEO"
          description="Default search engine and social sharing information."
        >
          <div className="space-y-5">
            <Input
              label="Default Title"
              value={config.seo.defaultTitle}
              onChange={(value) =>
                updateGroup("seo", "defaultTitle", value)
              }
            />

            <Textarea
              label="Default Description"
              value={config.seo.defaultDescription}
              onChange={(value) =>
                updateGroup("seo", "defaultDescription", value)
              }
            />

            <Textarea
              label="Default Keywords"
              value={config.seo.defaultKeywords}
              onChange={(value) =>
                updateGroup("seo", "defaultKeywords", value)
              }
            />

            <Input
              label="OG Image URL"
              value={config.seo.ogImage}
              onChange={(value) =>
                updateGroup("seo", "ogImage", value)
              }
            />
          </div>
        </SettingsCard>

        <PageSEOEditor config={config} setConfig={setConfig} />

        <FAQEditor config={config} setConfig={setConfig} />
      </div>
    </div>
  )
}

function SettingsCard({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="bg-white border border-border rounded-2xl overflow-hidden">
      <div className="px-6 py-5 border-b border-border">
        <h2 className="font-serif text-xl">{title}</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {description}
        </p>
      </div>

      <div className="p-6">{children}</div>
    </section>
  )
}

function PageSEOEditor({
  config,
  setConfig,
}: {
  config: SiteConfig
  setConfig: (config: SiteConfig) => void
}) {
  const pageKeys = Object.keys(config.pages) as Array<
    keyof SiteConfig["pages"]
  >

  return (
    <SettingsCard
      title="Page SEO"
      description="Manage SEO metadata for every public page."
    >
      <div className="space-y-6">
        {pageKeys.map((key) => {
          const page = config.pages[key]

          return (
            <div
              key={key}
              className="border border-border rounded-xl p-5 space-y-5"
            >
              <h3 className="font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </h3>

              <Input
                label="Title"
                value={page.title}
                onChange={(title) =>
                  setConfig({
                    ...config,
                    pages: {
                      ...config.pages,
                      [key]: {
                        ...page,
                        title,
                      },
                    },
                  })
                }
              />

              <Textarea
                label="Description"
                value={page.description}
                onChange={(description) =>
                  setConfig({
                    ...config,
                    pages: {
                      ...config.pages,
                      [key]: {
                        ...page,
                        description,
                      },
                    },
                  })
                }
              />

              <Textarea
                label="Keywords"
                value={page.keywords}
                onChange={(keywords) =>
                  setConfig({
                    ...config,
                    pages: {
                      ...config.pages,
                      [key]: {
                        ...page,
                        keywords,
                      },
                    },
                  })
                }
              />
            </div>
          )
        })}
      </div>
    </SettingsCard>
  )
}

function FAQEditor({
  config,
  setConfig,
}: {
  config: SiteConfig
  setConfig: (config: SiteConfig) => void
}) {
  const updateFAQ = (index: number, item: FAQItem) => {
    const faq = [...config.faq]
    faq[index] = item

    setConfig({
      ...config,
      faq,
    })
  }

  return (
    <SettingsCard
      title="FAQ"
      description="Manage frequently asked questions across the website."
    >
      <div className="space-y-5">
        {config.faq.map((item, index) => (
          <div
            key={`${item.question}-${index}`}
            className="border border-border rounded-xl p-5"
          >
            <div className="flex justify-between items-center mb-5">
              <span className="font-medium">
                Question {index + 1}
              </span>

              <div className="flex items-center gap-3">
                <Toggle
                  checked={item.visible}
                  onChange={(visible) =>
                    updateFAQ(index, {
                      ...item,
                      visible,
                    })
                  }
                />

                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive"
                  onClick={() =>
                    setConfig({
                      ...config,
                      faq: config.faq.filter(
                        (_, faqIndex) => faqIndex !== index,
                      ),
                    })
                  }
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-5">
              <Input
                label="Question"
                value={item.question}
                onChange={(question) =>
                  updateFAQ(index, {
                    ...item,
                    question,
                  })
                }
              />

              <Textarea
                label="Answer"
                value={item.answer}
                onChange={(answer) =>
                  updateFAQ(index, {
                    ...item,
                    answer,
                  })
                }
              />
            </div>
          </div>
        ))}

        <Button
          variant="outline"
          className="gap-2"
          onClick={() =>
            setConfig({
              ...config,
              faq: [
                ...config.faq,
                {
                  question: "New question",
                  answer: "",
                  visible: true,
                },
              ],
            })
          }
        >
          <Plus className="w-4 h-4" />
          Add FAQ
        </Button>
      </div>
    </SettingsCard>
  )
}

function Dashboard({
  config,
  setActivePage,
}: {
  config: SiteConfig
  setActivePage: (page: AdminPage) => void
}) {
  const visiblePages = pages.filter((page) => page.id !== "dashboard")

  return (
    <div>
      <PageHeader
        title="Welcome to Akhir Admin"
        description="Manage the complete website from one central control panel."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visiblePages.map((page) => {
          const Icon = page.icon

          return (
            <button
              key={page.id}
              onClick={() => setActivePage(page.id)}
              className="text-left bg-white border border-border rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-primary" />
              </div>

              <h2 className="font-serif text-xl">{page.label}</h2>

              <div className="mt-4 flex items-center text-sm text-primary font-medium">
                Edit page
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          )
        })}

        <button
          onClick={() => setActivePage("settings")}
          className="text-left bg-primary text-primary-foreground rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group"
        >
          <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-5">
            <Settings className="w-5 h-5" />
          </div>

          <h2 className="font-serif text-xl">Global Settings</h2>

          <p className="text-sm text-primary-foreground/70 mt-2">
            Brand, business, navigation, footer, SEO and FAQ.
          </p>

          <div className="mt-4 flex items-center text-sm font-medium">
            Open settings
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>

      <div className="mt-8 bg-white border border-border rounded-2xl p-6">
        <h2 className="font-serif text-xl mb-2">
          Configuration status
        </h2>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Check className="w-4 h-4 text-primary" />
          Configuration loaded from local storage
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <Check className="w-4 h-4 text-primary" />
          {Object.keys(config.content).length} public pages configured
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <Check className="w-4 h-4 text-primary" />
          {config.faq.length} FAQ entries
        </div>
      </div>
    </div>
  )
}

export default function Admin() {
  const [activePage, setActivePage] =
    useState<AdminPage>("dashboard")

  const [config, setConfig] = useState<SiteConfig>(
    loadSiteConfig(),
  )

  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setSaved(false)
  }, [config])

  const save = () => {
    saveSiteConfig(config)
    setSaved(true)

    window.setTimeout(() => {
      setSaved(false)
    }, 2500)
  }

  const reset = () => {
    const confirmed = window.confirm(
      "Reset the entire website configuration to the default values?",
    )

    if (!confirmed) return

    resetSiteConfig()
    setConfig(loadSiteConfig())
  }

  const renderContent = () => {
    if (activePage === "dashboard") {
      return (
        <Dashboard
          config={config}
          setActivePage={setActivePage}
        />
      )
    }

    if (activePage === "settings") {
      return (
        <SettingsPage
          config={config}
          setConfig={setConfig}
        />
      )
    }

    if (activePage === "home") {
      return (
        <HomeSpecialEditor
          config={config}
          setConfig={setConfig}
        />
      )
    }

    return (
      <GenericPageEditor
        page={activePage}
        config={config}
        setConfig={setConfig}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1 min-w-0">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10">
          {renderContent()}
        </div>
      </main>

      <div className="fixed bottom-6 right-6 flex items-center gap-3">
        {saved && (
          <div className="bg-white border border-border shadow-lg rounded-lg px-4 py-3 text-sm flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            Changes saved
          </div>
        )}

        <Button
          variant="outline"
          onClick={reset}
          className="bg-white gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>

        <Button
          onClick={save}
          className="gap-2 shadow-lg"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}
