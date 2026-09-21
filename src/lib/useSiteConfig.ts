import { useEffect, useState } from "react"
import { defaultSiteConfig, loadSiteConfig, type SiteConfig } from "./siteConfig"

export function useSiteConfig(): SiteConfig {
  const [config, setConfig] = useState<SiteConfig>(defaultSiteConfig)

  useEffect(() => {
    setConfig(loadSiteConfig())

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "akhir-site-config") {
        setConfig(loadSiteConfig())
      }
    }

    window.addEventListener("storage", handleStorage)

    return () => {
      window.removeEventListener("storage", handleStorage)
    }
  }, [])

  return config
}
