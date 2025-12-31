import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Factory, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

import constructionSite from '@/assets/construction-site.jpg';

const values = [
  { title: 'Quality First', description: 'Every product meets rigorous IS standards and internal quality benchmarks.' },
  { title: 'Technical Excellence', description: 'Deep expertise in gypsum technology with continuous R&D investment.' },
  { title: 'Customer Partnership', description: 'We succeed when our clients deliver exceptional projects.' },
  { title: 'Reliable Supply', description: 'Pan-India distribution ensuring timely delivery for every project.' },
];

export default function About() {
  return (
    <Layout>
      <section className="bg-secondary">
        <div className="container-wide section-padding pb-8">
          <h1 className="text-h1 font-heading text-primary mb-4">
            GypsumPro: Building with better gypsum
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            India's trusted partner for premium gypsum solutions, serving architects, 
            contractors, and developers for over 15 years.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-heading text-primary mb-6">What we stand for</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="bg-secondary p-6 rounded-xl">
                    <h3 className="font-heading font-semibold text-primary mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <img src={constructionSite} alt="Our team at work" className="rounded-2xl shadow-card" />
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container-wide section-padding py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-h1 font-heading text-accent">15+</p><p className="text-primary-foreground/70">Years Experience</p></div>
            <div><p className="text-h1 font-heading text-accent">500+</p><p className="text-primary-foreground/70">Projects Completed</p></div>
            <div><p className="text-h1 font-heading text-accent">50M+</p><p className="text-primary-foreground/70">Sq.ft Covered</p></div>
            <div><p className="text-h1 font-heading text-accent">25+</p><p className="text-primary-foreground/70">States Served</p></div>
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="container-wide section-padding py-16 text-center">
          <h2 className="text-h2 font-heading text-accent-foreground mb-4">Partner with GypsumPro</h2>
          <p className="text-accent-foreground/80 max-w-xl mx-auto mb-8">Let's discuss how we can support your next project.</p>
          <Link to="/contact"><Button variant="default" size="xl" className="bg-primary hover:bg-primary/90">Get in Touch<ArrowRight size={20} /></Button></Link>
        </div>
      </section>
    </Layout>
  );
}
