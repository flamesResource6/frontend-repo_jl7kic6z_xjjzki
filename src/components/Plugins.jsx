import { CheckCircle2 } from "lucide-react";

export default function Plugins() {
  const plugins = [
    {
      name: "Elementor (Free)",
      details:
        "Page builder for all layouts. Use Site Settings for global colors & typography.",
    },
    {
      name: "Contact Form 7",
      details: "Registration form with file upload field for participant documents.",
    },
    {
      name: "CF7 Database Addon (CFDB7)",
      details: "Stores all CF7 submissions within WordPress admin (no Google Sheets).",
    },
    {
      name: "Custom Fonts (Free)",
      details: "Upload and register custom font families used in Site Settings.",
    },
    {
      name: "User Role Editor",
      details:
        "Create a limited 'Committee' role that can view CF7 entries and access Users only.",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Free Plugins Stack
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {plugins.map((p) => (
            <div
              key={p.name}
              className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-600" />
              <div>
                <p className="font-medium text-gray-900">{p.name}</p>
                <p className="text-sm text-gray-700">{p.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
