import { Link } from 'react-router-dom';
import { ArrowRight, Download, MapPin, Building, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

import projectCommercial from '@/assets/project-commercial.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectHospital from '@/assets/project-hospital.jpg';
import constructionSite from '@/assets/construction-site.jpg';
import ceilingApplication from '@/assets/ceiling-application.jpg';
import gypsumBoards from '@/assets/gypsum-boards.jpg';

const projects = [
  {
    id: 'skyline-tower',
    name: 'Skyline Commercial Tower',
    city: 'Mumbai',
    state: 'Maharashtra',
    type: 'Commercial',
    area: '250,000 sq.ft',
    image: projectCommercial,
    challenge: 'Tight 8-month deadline for interior finishing of 25-floor commercial complex with high-quality finish requirements.',
    solution: 'Deployed machine-applied Elite Plaster for walls and fire-rated boards for ceiling systems, enabling parallel work on multiple floors.',
    products: ['Elite Plaster', 'Fire-rated Board', 'Partition Board'],
    outcomes: [
      '25% faster project completion',
      'Zero rework on finished surfaces',
      'Passed all fire safety inspections',
    ],
  },
  {
    id: 'green-valley',
    name: 'Green Valley Residences',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'Residential',
    area: '180,000 sq.ft',
    image: projectResidential,
    challenge: 'Premium residential project requiring consistent quality across 120 apartments with minimal post-handover defects.',
    solution: 'Used Finish Coat for ultra-smooth walls and Standard Board for false ceilings, with dedicated QC at each stage.',
    products: ['Standard Board', 'Finish Coat', 'Elite Plaster'],
    outcomes: [
      '40% cost savings vs. cement plaster',
      'Less than 0.5% defect callbacks',
      'Premium finish quality maintained',
    ],
  },
  {
    id: 'metro-hospital',
    name: 'Metro City Hospital',
    city: 'Delhi',
    state: 'NCR',
    type: 'Healthcare',
    area: '75,000 sq.ft',
    image: projectHospital,
    challenge: 'Hospital expansion requiring hygienic, fire-safe, and acoustic surfaces across patient areas and operation theaters.',
    solution: 'Specified moisture-resistant boards for wet areas, acoustic boards for OTs, and fire-rated systems throughout.',
    products: ['Moisture Board', 'Acoustic Board', 'Fire-rated Board'],
    outcomes: [
      'Zero defects at project handover',
      'Met all NABH compliance standards',
      'Completed within stringent timeline',
    ],
  },
  {
    id: 'tech-park',
    name: 'Infinity Tech Park',
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'IT/Commercial',
    area: '400,000 sq.ft',
    image: constructionSite,
    challenge: 'Large IT park with modular office requirements, needing fast installation and future flexibility for tenant modifications.',
    solution: 'Drywall partition systems with metal framing allowing easy reconfiguration, plus acoustic boards for meeting rooms.',
    products: ['Partition Board', 'Metal Framing', 'Acoustic Board'],
    outcomes: [
      '60% faster than brick partitions',
      'Easy tenant customization',
      '45 STC acoustic rating achieved',
    ],
  },
  {
    id: 'luxury-hotel',
    name: 'Grand Horizon Hotel',
    city: 'Goa',
    state: 'Goa',
    type: 'Hospitality',
    area: '120,000 sq.ft',
    image: ceilingApplication,
    challenge: '5-star hotel renovation with demanding aesthetic requirements and minimal disruption to operational areas.',
    solution: 'Premium finish coat for walls with decorative ceiling solutions using curved gypsum board systems.',
    products: ['Finish Coat', 'Flexible Board', 'Standard Board'],
    outcomes: [
      'Luxury finish quality',
      'Minimal operational disruption',
      'Completed ahead of schedule',
    ],
  },
  {
    id: 'education-campus',
    name: 'National Education Campus',
    city: 'Pune',
    state: 'Maharashtra',
    type: 'Educational',
    area: '200,000 sq.ft',
    image: gypsumBoards,
    challenge: 'Educational campus with acoustic requirements for classrooms and auditorium, plus durability for high-traffic areas.',
    solution: 'Acoustic board systems for classrooms and auditorium, impact-resistant boards for corridors and common areas.',
    products: ['Acoustic Board', 'Standard Board', 'Elite Plaster'],
    outcomes: [
      'Optimal acoustic environment',
      'High durability surfaces',
      'On-budget delivery',
    ],
  },
];

const industries = [
  { name: 'Commercial', count: 150 },
  { name: 'Residential', count: 200 },
  { name: 'Healthcare', count: 45 },
  { name: 'Hospitality', count: 35 },
  { name: 'Educational', count: 60 },
  { name: 'Industrial', count: 30 },
];

export default function Projects() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding pb-8">
          <h1 className="text-h1 font-heading text-primary mb-4">
            Gypsum that performs on site
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            Explore how GypsumPro products have delivered exceptional results across 
            500+ projects in residential, commercial, healthcare, and hospitality sectors.
          </p>
        </div>
      </section>

      {/* Industries Stats */}
      <section className="bg-primary">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-primary-foreground/70 text-sm mb-6">
            Projects completed across industries
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div key={industry.name} className="text-center">
                <p className="text-h2 font-heading text-accent">{industry.count}+</p>
                <p className="text-primary-foreground/70 text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-card rounded-xl border border-border overflow-hidden card-hover"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-1">
                      <Building size={14} />
                      <span>{project.type}</span>
                      <span className="mx-1">•</span>
                      <span>{project.area}</span>
                    </div>
                    <h3 className="text-primary-foreground font-heading font-semibold text-xl">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1 text-primary-foreground/70 text-sm">
                      <MapPin size={14} />
                      <span>{project.city}, {project.state}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary text-sm mb-1">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{project.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary text-sm mb-1">Solution</h4>
                    <p className="text-muted-foreground text-sm">{project.solution}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-primary text-sm mb-2">Outcomes</h4>
                    <ul className="space-y-1">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-accent shrink-0" size={14} />
                          <span className="text-accent font-medium">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground mb-2">Products Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.products.map(product => (
                        <span 
                          key={product}
                          className="bg-secondary text-primary text-xs font-medium px-2 py-1 rounded"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    <Download size={14} />
                    Download Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-h2 font-heading text-primary-foreground mb-4">
              Have a similar project in mind?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Let our technical team help you choose the right gypsum solution 
              based on your project type, size, and specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Discuss Your Project
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="heroSecondary" size="lg">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
