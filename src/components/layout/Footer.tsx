import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  products: [
    { name: 'Gypsum Plaster', href: '/products' },
    { name: 'Gypsum Boards', href: '/products' },
    { name: 'Finishing Products', href: '/products' },
    { name: 'Accessories', href: '/products' },
  ],
  solutions: [
    { name: 'Wall Plastering', href: '/solutions' },
    { name: 'Ceiling Systems', href: '/solutions' },
    { name: 'Drywall Partitions', href: '/solutions' },
    { name: 'Commercial Projects', href: '/solutions' },
  ],
  resources: [
    { name: 'Technical Brochures', href: '/resources' },
    { name: 'Data Sheets', href: '/resources' },
    { name: 'Application Guides', href: '/resources' },
    { name: 'FAQs', href: '/resources' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/about' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Strip */}
      <div className="bg-accent">
        <div className="container-wide section-padding py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-h3 text-accent-foreground font-heading">
                Ready to start your project?
              </h3>
              <p className="text-accent-foreground/80 mt-1">
                Get a tailored gypsum solution within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90">
                  Get a Project Quote
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="ctaOutline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Download Brochure
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide section-padding py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-accent-foreground text-xl">G</span>
              </div>
              <span className="font-heading font-semibold text-xl">GypsumPro</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Premium gypsum plaster and boards engineered for faster construction, 
              crack-free finishes, and long-term durability.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Phone size={16} className="mt-1 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Mail size={16} className="mt-1 shrink-0" />
                <span>info@gypsumpro.in</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>Industrial Area, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 GypsumPro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
