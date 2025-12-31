import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Lightbulb, Building, Home, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

import ceilingApplication from '@/assets/ceiling-application.jpg';
import constructionSite from '@/assets/construction-site.jpg';
import gypsumBoards from '@/assets/gypsum-boards.jpg';

const solutions = [
  {
    id: 'wall-plastering',
    icon: Building,
    title: 'Gypsum Plaster for Internal Walls',
    description: 'Transform your interior walls with premium gypsum plaster for a flawless, paint-ready finish.',
    image: constructionSite,
    challenges: [
      'Cement plaster takes 21+ days to cure before painting',
      'High material wastage and uneven surfaces',
      'Frequent cracking and maintenance issues',
      'Rough finish requiring multiple putty coats',
    ],
    benefits: [
      'Ready for painting in just 3-5 days',
      '30-40% less material wastage',
      'Crack-resistant, flexible formulation',
      'Smooth finish with minimal or no putty needed',
      '40% lighter, reducing structural load',
    ],
    products: ['Elite Plaster', 'Base Coat', 'Finish Coat'],
  },
  {
    id: 'ceiling-systems',
    icon: Layers,
    title: 'Gypsum Board Ceiling Systems',
    description: 'Create stunning false ceilings with our fire-rated, acoustic gypsum board systems.',
    image: ceilingApplication,
    challenges: [
      'Heavy POP ceilings with structural concerns',
      'Poor acoustic performance in commercial spaces',
      'Limited fire resistance options',
      'Complex installation and maintenance',
    ],
    benefits: [
      'Lightweight boards reduce structural load by 50%',
      'Up to 45 STC acoustic rating for sound control',
      '2-hour fire rating for enhanced safety',
      'Easy installation and access for maintenance',
      'Consistent quality and finish across large areas',
    ],
    products: ['Standard Board', 'Fire-rated Board', 'Acoustic Board'],
  },
  {
    id: 'drywall-partitions',
    icon: Home,
    title: 'Drywall Systems for Partitions',
    description: 'Build flexible, fire-safe partition walls for modern commercial and residential interiors.',
    image: gypsumBoards,
    challenges: [
      'Brick partitions are slow to build and heavy',
      'Modifications require significant demolition',
      'Poor sound insulation between spaces',
      'Limited design flexibility',
    ],
    benefits: [
      '5x faster installation than brick walls',
      'Easy to modify or relocate as needed',
      'Excellent acoustic isolation up to 50 STC',
      'Fire ratings up to 4 hours',
      'Concealed wiring and plumbing integration',
    ],
    products: ['Partition Board', 'Metal Framing', 'Joint Compound'],
  },
];

export default function Solutions() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding pb-8">
          <h1 className="text-h1 font-heading text-primary mb-4">
            System-based gypsum solutions
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Complete gypsum systems designed to solve specific construction challenges 
            with integrated products and technical support.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id}
                id={solution.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={solution.image}
                    alt={solution.title}
                    className="rounded-2xl shadow-card w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <solution.icon className="text-accent" size={24} />
                    </div>
                    <h2 className="text-h2 font-heading text-primary">
                      {solution.title}
                    </h2>
                  </div>
                  
                  <p className="text-muted-foreground text-lg mb-8">
                    {solution.description}
                  </p>

                  {/* Challenges */}
                  <div className="mb-6">
                    <h3 className="flex items-center gap-2 font-heading font-semibold text-primary mb-3">
                      <AlertTriangle className="text-destructive" size={18} />
                      Common Challenges
                    </h3>
                    <ul className="space-y-2">
                      {solution.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h3 className="flex items-center gap-2 font-heading font-semibold text-primary mb-3">
                      <Lightbulb className="text-accent" size={18} />
                      GypsumPro Solution Benefits
                    </h3>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Products */}
                  <div className="mb-8">
                    <p className="text-sm text-muted-foreground mb-2">Recommended Products:</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.products.map(product => (
                        <span 
                          key={product}
                          className="bg-secondary text-primary text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact">
                      <Button variant="cta" size="lg">
                        Get Recommendation
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                    <Link to="/products">
                      <Button variant="outline" size="lg">
                        View Products
                      </Button>
                    </Link>
                  </div>
                </div>
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
              Need a custom system design?
            </h2>
            <p className="text-accent-foreground/80 max-w-xl mx-auto mb-8">
              Share your project drawings with our technical team for a customized 
              gypsum system recommendation and detailed specification.
            </p>
            <Link to="/contact">
              <Button variant="default" size="xl" className="bg-primary hover:bg-primary/90">
                Talk to Technical Expert
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
