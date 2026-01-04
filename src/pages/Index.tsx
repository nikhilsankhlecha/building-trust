import { Link } from 'react-router-dom';
import { ArrowRight, Download, CheckCircle, Zap, Shield, Clock, Award, Building, Home, Building2, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import heroProduct from '@/assets/hero-product.jpg';
import ceilingApplication from '@/assets/ceiling-application.jpg';
import constructionSite from '@/assets/construction-site.jpg';
import gypsumBoards from '@/assets/gypsum-boards.jpg';
import projectCommercial from '@/assets/project-commercial.jpg';
import projectResidential from '@/assets/project-residential.jpg';
import projectHospital from '@/assets/project-hospital.jpg';
const benefits = [{
  icon: Award,
  title: 'Consistent Premium Quality',
  description: 'High-purity gypsum delivering bright, smooth surfaces with every application.'
}, {
  icon: Zap,
  title: 'Faster, Cleaner Application',
  description: 'Save 30-40% application time compared to cement plaster with less wastage.'
}, {
  icon: Shield,
  title: 'Lightweight & Crack Resistant',
  description: '40% lighter than cement with superior crack resistance and flexibility.'
}, {
  icon: Clock,
  title: 'Reliable Supply & Support',
  description: 'Pan-India distribution network with dedicated technical assistance.'
}];
const products = [{
  name: 'GypsumPro Elite Plaster',
  description: 'Premium machine-applied gypsum plaster for large-scale projects',
  image: heroProduct,
  specs: {
    coverage: '18-20 m²/25kg',
    setting: '45-60 min',
    thickness: '10-15mm'
  },
  tag: 'Best Seller'
}, {
  name: 'GypsumPro Standard Board',
  description: 'Fire-resistant gypsum board for ceilings and partitions',
  image: gypsumBoards,
  specs: {
    size: '1200x2400mm',
    thickness: '12.5mm',
    fire: '2 hr rating'
  },
  tag: 'Fire Rated'
}, {
  name: 'GypsumPro Finish Coat',
  description: 'Smooth finishing compound for flawless wall surfaces',
  image: ceilingApplication,
  specs: {
    coverage: '25-30 m²/25kg',
    setting: '30-45 min',
    application: 'Manual'
  },
  tag: 'Premium'
}, {
  name: 'GypsumPro Partition Board',
  description: 'High-strength drywall system for commercial interiors',
  image: constructionSite,
  specs: {
    size: '1200x3000mm',
    thickness: '15mm',
    acoustic: '45 STC'
  },
  tag: 'Acoustic'
}];
const applications = [{
  name: 'Ceilings',
  icon: Building,
  description: 'False ceilings and decorative finishes'
}, {
  name: 'Partitions',
  icon: Home,
  description: 'Drywall systems for flexible spaces'
}, {
  name: 'Wall Plastering',
  icon: Building2,
  description: 'Interior walls for all building types'
}];
const projects = [{
  name: 'Skyline Commercial Tower',
  city: 'Mumbai',
  type: 'Commercial',
  image: projectCommercial,
  products: 'Elite Plaster, Partition Board',
  outcome: '25% faster completion'
}, {
  name: 'Green Valley Residences',
  city: 'Bangalore',
  type: 'Residential',
  image: projectResidential,
  products: 'Standard Board, Finish Coat',
  outcome: '40% cost savings'
}, {
  name: 'Metro City Hospital',
  city: 'Delhi',
  type: 'Healthcare',
  image: projectHospital,
  products: 'Fire-rated Board, Elite Plaster',
  outcome: 'Zero defects at handover'
}];
const testimonials = [{
  quote: "GypsumPro has become our go-to partner for all interior finishing. Their product quality and technical support are unmatched in the industry.",
  name: 'Rajesh Sharma',
  role: 'Senior Project Manager, Buildon Infrastructure',
  avatar: 'RS'
}, {
  quote: "We've reduced our plastering time by 35% since switching to GypsumPro. The consistency and ease of application make a real difference on-site.",
  name: 'Priya Patel',
  role: 'Chief Architect, Urban Design Studio',
  avatar: 'PP'
}];
const clientLogos = ['Buildon Group', 'Hi-Tech Constructions', 'Urban Developers', 'Metro Builders', 'Prime Infra', 'Delta Projects'];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-up">
              <h1 className="text-h1 lg:text-display font-heading text-primary mb-6">
                Gypsum solutions that build <span className="text-accent">stronger, smoother</span> spaces.
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8 max-w-xl">
                Premium gypsum plaster and boards engineered for faster construction, 
                crack-free finishes, and long-term durability for your residential, 
                commercial, and industrial projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Get a Project Quote
                    <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline" size="xl">
                    <Download size={20} />
                    Download Brochure
                  </Button>
                </Link>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <p className="text-h2 font-heading text-accent">500+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="text-h2 font-heading text-accent">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-h2 font-heading text-accent">98%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="relative z-10">
                <img src={ceilingApplication} alt="Premium gypsum plastered interior" className="rounded-2xl shadow-elevated w-full object-cover aspect-square" />
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card border border-border">
                  <img alt="GypsumPro product bag" className="w-32 h-40 object-cover rounded-lg" src="/lovable-uploads/2f086862-14bc-4da8-867f-26bdeb18378c.png" />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary py-8">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <p className="text-center text-primary-foreground/70 text-sm mb-6">
            Trusted by leading contractors and developers across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {clientLogos.map((logo, index) => <div key={logo} className="text-primary-foreground/40 font-heading font-semibold text-lg" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {logo}
              </div>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-heading text-primary mb-4">
              Why professionals choose GypsumPro
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-performance gypsum solutions that deliver consistent results, 
              reduce project timelines, and lower overall costs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => <div key={benefit.title} className="bg-card p-6 rounded-xl border border-border card-hover" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-h3 font-heading text-primary mb-2 text-lg">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <h2 className="text-h2 font-heading text-primary mb-4">
                Gypsum products for every application
              </h2>
              <p className="text-muted-foreground max-w-xl">
                From wall plastering to ceiling systems, our comprehensive product range 
                meets the demands of modern construction.
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline">
                View All Products
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => <div key={product.name} className="bg-card rounded-xl border border-border overflow-hidden card-hover group">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
                    {product.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-4">
                    {Object.entries(product.specs).map(([key, value]) => <div key={key} className="bg-secondary rounded px-2 py-1 text-center">
                        <span className="font-medium text-primary">{value}</span>
                      </div>)}
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/products`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Specs
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="cta" size="sm">
                        Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-heading text-primary mb-4">
              Solutions for every application
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our gypsum systems are designed to meet the specific requirements 
              of different applications in modern construction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app, index) => <div key={app.name} className="bg-card p-8 rounded-xl border border-border text-center card-hover">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <app.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-h3 font-heading text-primary mb-2">{app.name}</h3>
                <p className="text-muted-foreground mb-6">{app.description}</p>
                <Link to="/solutions">
                  <Button variant="ctaOutline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>)}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-heading text-primary mb-4">
              Proven on real projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how GypsumPro products have delivered exceptional results 
              on construction projects across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {projects.map((project, index) => <div key={project.name} className="bg-card rounded-xl border border-border overflow-hidden card-hover group">
                <div className="relative aspect-video overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-primary-foreground/80 text-sm">{project.type}</span>
                    <h3 className="text-primary-foreground font-heading font-semibold">
                      {project.name}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">{project.city}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <CheckCircle className="text-accent" size={16} />
                    <span>Products: {project.products}</span>
                  </div>
                  <p className="text-accent font-semibold">
                    {project.outcome}
                  </p>
                </div>
              </div>)}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => <div key={testimonial.name} className="bg-secondary p-8 rounded-xl">
                <p className="text-foreground italic mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Conversion Strip */}
      <section className="bg-primary">
        <div className="container-wide section-padding py-16">
          <div className="text-center">
            <h2 className="text-h2 font-heading text-primary-foreground mb-4">
              Planning a gypsum-based project?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Get a tailored product recommendation and project quote within 24 hours. 
              Our technical team is ready to help you choose the right solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="cta" size="xl">
                  Get a Project Quote
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Button variant="heroSecondary" size="xl">
                Talk to Technical Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;