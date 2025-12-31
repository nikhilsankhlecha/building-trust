import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, HelpCircle, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useState } from 'react';

import heroProduct from '@/assets/hero-product.jpg';

const brochures = [
  { name: 'GypsumPro Product Catalog 2024', type: 'PDF', size: '8.5 MB', pages: 32 },
  { name: 'Technical Specifications Guide', type: 'PDF', size: '4.2 MB', pages: 18 },
  { name: 'Drywall Systems Brochure', type: 'PDF', size: '3.8 MB', pages: 12 },
  { name: 'Fire Safety Compliance Sheet', type: 'PDF', size: '1.5 MB', pages: 6 },
];

const dataSheets = [
  { name: 'Elite Plaster - Technical Data', product: 'Elite Plaster', size: '850 KB' },
  { name: 'Standard Board - Specifications', product: 'Standard Board', size: '720 KB' },
  { name: 'Finish Coat - Application Guide', product: 'Finish Coat', size: '680 KB' },
  { name: 'Fire-rated Board - Test Reports', product: 'Fire-rated Board', size: '1.2 MB' },
  { name: 'Moisture Board - Performance Data', product: 'Moisture Board', size: '890 KB' },
  { name: 'Acoustic Board - Sound Test Results', product: 'Acoustic Board', size: '1.1 MB' },
];

const faqs = [
  {
    question: 'What is the coverage of GypsumPro Elite Plaster?',
    answer: 'GypsumPro Elite Plaster provides coverage of 18-20 square meters per 25kg bag at 12mm thickness. Actual coverage may vary based on surface condition and application method.',
  },
  {
    question: 'How long should I wait before painting on gypsum plaster?',
    answer: 'Gypsum plaster can be painted within 3-5 days after application, compared to 21+ days for cement plaster. Ensure the surface is completely dry and free of moisture before painting.',
  },
  {
    question: 'Is gypsum plaster suitable for external walls?',
    answer: 'No, gypsum plaster is designed for internal wall applications only. For external walls, cement-based plasters are recommended as gypsum is not weather-resistant.',
  },
  {
    question: 'What is the fire rating of GypsumPro boards?',
    answer: 'Our fire-rated boards provide up to 2 hours of fire resistance when installed as per specifications. Standard boards offer 30-45 minutes of fire resistance.',
  },
  {
    question: 'Can gypsum boards be used in bathrooms?',
    answer: 'Yes, but only moisture-resistant gypsum boards (green boards) should be used in bathrooms, kitchens, and other humid areas. Regular boards should not be exposed to moisture.',
  },
  {
    question: 'What is the shelf life of gypsum products?',
    answer: 'Gypsum plaster has a shelf life of 3-4 months when stored in dry conditions. Gypsum boards can be stored for 6 months or more if kept dry and properly stacked.',
  },
  {
    question: 'Do you provide on-site technical support?',
    answer: 'Yes, our technical team provides on-site support for projects above 10,000 sq.ft, including application training, quality checks, and troubleshooting assistance.',
  },
  {
    question: 'What certifications do GypsumPro products have?',
    answer: 'All GypsumPro products are IS certified and comply with relevant Indian standards. Fire-rated products have independent test certifications from approved laboratories.',
  },
];

const guides = [
  { name: 'Gypsum Plaster Application Guide', description: 'Step-by-step guide for machine and manual application', pages: 24 },
  { name: 'Drywall Installation Manual', description: 'Complete guide for partition and ceiling installation', pages: 36 },
  { name: 'Quality Control Checklist', description: 'Site inspection checklist for contractors', pages: 8 },
  { name: 'Comparison: Gypsum vs Cement Plaster', description: 'Detailed comparison of properties and costs', pages: 12 },
];

export default function Resources() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBrochureForm, setShowBrochureForm] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding pb-8">
          <h1 className="text-h1 font-heading text-primary mb-4">
            Technical resources & downloads
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Access product brochures, technical data sheets, application guides, 
            and frequently asked questions to support your projects.
          </p>
        </div>
      </section>

      {/* Brochures Section */}
      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <BookOpen className="text-accent" size={20} />
            </div>
            <h2 className="text-h2 font-heading text-primary">Brochures & Catalogues</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brochures.map((brochure) => (
              <div 
                key={brochure.name}
                className="bg-card rounded-xl border border-border p-6 card-hover"
              >
                <div className="w-full aspect-[3/4] bg-secondary rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="text-muted-foreground" size={48} />
                </div>
                <h3 className="font-semibold text-primary mb-2 text-sm">{brochure.name}</h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {brochure.type} • {brochure.size} • {brochure.pages} pages
                </p>
                <Button 
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                  onClick={() => setShowBrochureForm(true)}
                >
                  <Download size={14} />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sheets Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <FileText className="text-accent" size={20} />
            </div>
            <h2 className="text-h2 font-heading text-primary">Technical Data Sheets</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataSheets.map((sheet) => (
              <div 
                key={sheet.name}
                className="bg-card rounded-lg border border-border p-4 flex items-center justify-between gap-4 card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center shrink-0">
                    <FileText className="text-accent" size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary text-sm">{sheet.name}</h3>
                    <p className="text-xs text-muted-foreground">{sheet.product} • {sheet.size}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Download size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Guides */}
      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <BookOpen className="text-accent" size={20} />
            </div>
            <h2 className="text-h2 font-heading text-primary">Application Guides</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <div 
                key={guide.name}
                className="bg-card rounded-lg border border-border p-6 flex items-start gap-4 card-hover"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <BookOpen className="text-accent" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1">{guide.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{guide.description}</p>
                  <p className="text-xs text-muted-foreground">{guide.pages} pages</p>
                </div>
                <Button variant="outline" size="sm">
                  <Download size={14} />
                  PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <HelpCircle className="text-accent" size={20} />
            </div>
            <h2 className="text-h2 font-heading text-primary">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-primary">{faq.question}</span>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent">
        <div className="container-wide section-padding py-16">
          <div className="text-center">
            <h2 className="text-h2 font-heading text-accent-foreground mb-4">
              Need custom system design?
            </h2>
            <p className="text-accent-foreground/80 max-w-xl mx-auto mb-8">
              Share your project drawings with our technical team for a customized 
              specification and detailed installation guidelines.
            </p>
            <Link to="/contact">
              <Button variant="default" size="xl" className="bg-primary hover:bg-primary/90">
                Share Project Details
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brochure Download Modal */}
      {showBrochureForm && (
        <div className="fixed inset-0 bg-primary/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-md w-full p-8 shadow-elevated">
            <h3 className="text-h3 font-heading text-primary mb-2">Download Brochure</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Enter your details to receive the download link instantly.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Name *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                  placeholder="Company name"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowBrochureForm(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="cta" className="flex-1">
                  Download Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
