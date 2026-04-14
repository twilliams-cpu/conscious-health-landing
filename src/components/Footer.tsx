import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#" },
    { label: "Our Physicians", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Treatments: [
    { label: "Recovery & Performance", href: "#benefits" },
    { label: "Metabolic Optimization", href: "#benefits" },
    { label: "Skin & Anti-Aging", href: "#benefits" },
    { label: "Vitality & Energy", href: "#benefits" },
  ],
  Resources: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#" },
    { label: "Research", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "HIPAA Notice", href: "#" },
    { label: "Telehealth Consent", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-sm font-bold">CH</span>
              </div>
              <span className="font-serif text-xl text-white">
                Conscious Health
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Physician-guided peptide wellness, personalized for your biology
              and delivered to your door.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:hello@conscious.health"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} />
                hello@conscious.health
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} />
                (800) 555-1234
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                Austin, TX
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Conscious Health. All rights
            reserved. Salute Vera LLC.
          </p>
          <p className="text-xs text-white/40 max-w-lg text-center md:text-right">
            Conscious Health provides telehealth services for wellness
            optimization. Our services are not intended to diagnose, treat, cure,
            or prevent any disease. Always consult with a healthcare provider
            before starting any new health program.
          </p>
        </div>
      </div>
    </footer>
  );
}
