export default function Implementation() {
  const steps = [
    {
      phase: "Design System",
      tasks: [
        "Install 'Custom Fonts' and upload families (e.g., headings, body)",
        "In Elementor → Site Settings: set global colors, typography, buttons, container widths",
        "Define global spacing scale and default section/padding presets",
      ],
    },
    {
      phase: "Registration Form",
      tasks: [
        "Install Contact Form 7 and CF7 Database Addon (CFDB7)",
        "Create form: name, email, phone, event selection, and file upload (required)",
        "Configure file types (PDF/JPG/PNG), size limit, and reCAPTCHA (v3) if desired",
        "Add form to a public Registration page built with Elementor",
      ],
    },
    {
      phase: "Data Storage & Access",
      tasks: [
        "Verify entries appear in CF7 Database within WP Admin",
        "Install User Role Editor and create 'Committee' role",
        "Grant capabilities: view CF7 DB entries and access Users; deny other menus",
        "Create Committee accounts and share secure login instructions",
      ],
    },
    {
      phase: "QA & Launch",
      tasks: [
        "Cross-browser test: form validation, file upload, success messages",
        "Confirm emails deliver (WP Mail SMTP if needed, free)",
        "Backup and harden security (disable file editing, limit login attempts)",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
        Implementation Plan
      </h2>
      <ol className="mt-6 space-y-6">
        {steps.map((s) => (
          <li key={s.phase} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-lg font-semibold text-gray-900">{s.phase}</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
              {s.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
