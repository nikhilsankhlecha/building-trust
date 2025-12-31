import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', company: '', role: '', city: '', projectType: '', products: '', area: '', timeline: '', contact: 'email' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Quote Request Received!", description: "Our team will respond within 24 hours." });
  };

  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-wide section-padding pb-8">
          <h1 className="text-h1 font-heading text-primary mb-4">Let's plan your gypsum solution</h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">Get expert recommendations for your project. We respond within one business day.</p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-h2 font-heading text-primary mb-6">Get in touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0"><Phone className="text-accent" size={20} /></div><div><p className="font-semibold text-primary">Phone</p><p className="text-muted-foreground">+91 98765 43210</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0"><MessageCircle className="text-accent" size={20} /></div><div><p className="font-semibold text-primary">WhatsApp</p><p className="text-muted-foreground">+91 98765 43210</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0"><Mail className="text-accent" size={20} /></div><div><p className="font-semibold text-primary">Email</p><p className="text-muted-foreground">sales@gypsumpro.in</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0"><MapPin className="text-accent" size={20} /></div><div><p className="font-semibold text-primary">Head Office</p><p className="text-muted-foreground">Industrial Area, Rajasthan 302012, India</p></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0"><Clock className="text-accent" size={20} /></div><div><p className="font-semibold text-primary">Business Hours</p><p className="text-muted-foreground">Mon-Sat: 9:00 AM - 6:00 PM</p></div></div>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973450298!2d75.65046970000001!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="GypsumPro Location"></iframe>
              </div>
            </div>

            {/* Quote Form */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-h3 font-heading text-primary mb-6">Request a Project Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-primary mb-1">Name *</label><input type="text" required className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none" placeholder="Your name" /></div>
                  <div><label className="block text-sm font-medium text-primary mb-1">Company *</label><input type="text" required className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none" placeholder="Company name" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-primary mb-1">Role</label><input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none" placeholder="Your role" /></div>
                  <div><label className="block text-sm font-medium text-primary mb-1">City *</label><input type="text" required className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none" placeholder="Project city" /></div>
                </div>
                <div><label className="block text-sm font-medium text-primary mb-1">Project Type</label><select className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"><option>Commercial</option><option>Residential</option><option>Healthcare</option><option>Hospitality</option><option>Educational</option><option>Industrial</option></select></div>
                <div><label className="block text-sm font-medium text-primary mb-1">Products of Interest</label><input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none" placeholder="e.g., Elite Plaster, Standard Board" /></div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-primary mb-1">Approx. Area (sq.ft)</label><input type="text" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none" placeholder="e.g., 50,000" /></div>
                  <div><label className="block text-sm font-medium text-primary mb-1">Supply Timeline</label><select className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none"><option>Immediate</option><option>Within 1 month</option><option>1-3 months</option><option>3+ months</option></select></div>
                </div>
                <div><label className="block text-sm font-medium text-primary mb-1">Message</label><textarea rows={3} className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent outline-none resize-none" placeholder="Tell us about your project requirements..."></textarea></div>
                <Button type="submit" variant="cta" size="lg" className="w-full">Submit Quote Request</Button>
                <p className="text-xs text-muted-foreground text-center">We'll respond within one business day.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
