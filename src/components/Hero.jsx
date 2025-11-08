import { FileText, Shield, Database } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              WordPress • Elementor (Free) • Zero-cost plugins
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Event Registration Website — Project Brief
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-600">
              A streamlined, public-facing registration experience built with
              Elementor (Free) and Contact Form 7. Submissions are stored safely
              in the WordPress dashboard. A limited-access “Committee” role can
              review entries without exposing other admin settings.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <FileText className="h-4 w-4 text-indigo-600" />
                CF7 with file uploads
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Database className="h-4 w-4 text-indigo-600" />
                Submissions saved in WP
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Shield className="h-4 w-4 text-indigo-600" />
                Committee-only access
              </li>
            </ul>
          </div>
          <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-indigo-50 p-4">
                <p className="text-xs font-medium text-indigo-700">Design</p>
                <p className="mt-1 text-sm text-indigo-900">Elementor Site Settings</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-xs font-medium text-emerald-700">Forms</p>
                <p className="mt-1 text-sm text-emerald-900">Contact Form 7</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-4">
                <p className="text-xs font-medium text-amber-700">Storage</p>
                <p className="mt-1 text-sm text-amber-900">CF7 DB Addon</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-gray-50 p-4 text-xs text-gray-600">
              Fonts loaded via the free “Custom Fonts” plugin. No Google Sheets
              integration; all data remains inside WordPress.
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-64 bg-gradient-to-b from-indigo-50/80 to-white" />
    </section>
  );
}
