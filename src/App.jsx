import Hero from "./components/Hero";
import Scope from "./components/Scope";
import Plugins from "./components/Plugins";
import Implementation from "./components/Implementation";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600">
        Built with a free-only WordPress stack: Elementor, Contact Form 7, CFDB7,
        Custom Fonts, and User Role Editor. This brief outlines the deliverables
        and guardrails for a secure, no-login registration flow.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Scope />
      <Plugins />
      <Implementation />
      <Footer />
    </div>
  );
}
