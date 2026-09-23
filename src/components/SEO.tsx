import { useEffect } from "react"

import type { PageSEO } from "@/lib/siteConfig"

type SEOProps = {
  seo: PageSEO
}

function setMeta(
  attribute: "name" | "property",
  value: string,
  content: string,
) {
  let element = document.head.querySelector(
    `meta[${attribute}="${value}"]`,
  ) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement("meta")
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  element.setAttribute("content", content)
}

export function SEO({ seo }: SEOProps) {
  useEffect(() => {
    document.title = seo.title

    setMeta("name", "description", seo.description)
    setMeta("name", "keywords", seo.keywords)

    setMeta("property", "og:title", seo.title)
    setMeta("property", "og:description", seo.description)
    setMeta("property", "og:type", "website")

    setMeta("name", "twitter:card", "summary_large_image")
    setMeta("name", "twitter:title", seo.title)
    setMeta("name", "twitter:description", seo.description)
  }, [seo])

  return null
}
