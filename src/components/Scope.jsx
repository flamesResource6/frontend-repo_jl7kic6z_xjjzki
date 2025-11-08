export default function Scope() {
  const items = [
    {
      title: "Core Requirements",
      points: [
        "Public registration page with no login or membership system.",
        "Form built using Contact Form 7 with a required file upload field.",
        "All submissions captured in WordPress via CF7 Database Addon (free).",
        "Elementor (Free) for layout; all typography and colors via Site Settings.",
        "Custom fonts loaded using the free Custom Fonts plugin.",
      ],
    },
    {
      title: "Non-Goals",
      points: [
        "No e-commerce or paid tickets at launch.",
        "No Google Sheets, CRMs, or third-party sync.",
        "No front-end user accounts or dashboards.",
      ],
    },
    {
      title: "Success Metrics",
      points: [
        "100% of form submissions stored and viewable in the WP admin.",
        "Committee role can review submissions but cannot alter site settings.",
        "Consistent typography/colors managed centrally in Elementor Site Settings.",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
        Scope & Outcomes
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
              {card.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
