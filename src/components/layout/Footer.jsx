import { Link } from "react-router-dom";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import SanityImage from "../common/SanityImage";

const Footer = () => {
  const { data: settings } = useSiteSettings();
  const site = {
    name: settings?.gymName || settings?.shortName || "Cabinet de conseil",
    description:
      settings?.description ||
      "Conseil financier, juridique, fiscal et stratégique.",
    phone: settings?.phone || "",
    email: settings?.email || "",
    address: settings?.address || "",
    social: settings?.social || {},
  };
  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/services", label: "Services" },
    { path: "/expertises", label: "Expertises" },
    { path: "/a-propos", label: "Le cabinet" },
    { path: "/actualites", label: "Actualités" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];
  const socialLinks = [
    { icon: Facebook, url: site.social.facebook, label: "Facebook" },
    { icon: Instagram, url: site.social.instagram, label: "Instagram" },
    { icon: Youtube, url: site.social.youtube, label: "YouTube" },
    { icon: Linkedin, url: site.social.linkedin, label: "LinkedIn" },
  ];
  return (
    <footer className="bg-navy border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                {settings?.logo ? (
                  <SanityImage
                    source={settings.logo}
                    alt={site.name}
                    width={80}
                    className="h-full w-full rounded-lg object-contain p-1"
                  />
                ) : (
                  <Building2 className="w-5 h-5 text-navy" />
                )}
              </div>
              <span className="text-white text-xl font-bold tracking-wider uppercase">
                {site.name}
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              {site.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/40 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-gold" />
                <a
                  href={`tel:${site.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-gold" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-white transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <MapPin className="w-4 h-4 shrink-0 text-gold" />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>

          {/* Expertise & Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Notre expertise</h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li>Finances & comptabilité</li>
              <li>Audit & conformité</li>
              <li>Droit & stratégie juridique</li>
              <li>Fiscalité & croissance</li>
            </ul>

            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm">
            {`© ${new Date().getFullYear()} ${site.name}. Tous droits réservés.`}
          </p>
          <p className="text-white/10 text-xs tracking-wider">
            {settings?.tagline || "Confidentialité · Clarté · Performance"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
