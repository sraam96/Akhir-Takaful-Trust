import { AlertCircle } from "lucide-react"

export function MissingLaunchInputs() {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mx-4 md:mx-auto max-w-4xl my-8 rounded-r-md">
      <div className="flex gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <h3 className="text-sm font-medium text-amber-800">Pre-launch Checklist</h3>
          <p className="text-sm text-amber-700 mt-1 mb-2">The following inputs are pending before going live:</p>
          <ul className="list-disc pl-5 text-sm text-amber-700 space-y-1">
            <li>Approved headshot (About & Home sections)</li>
            <li>Biography & verified credentials</li>
            <li>Verified testimonials</li>
            <li>Formal product disclosures</li>
            <li>WhatsApp and Calendly links</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
