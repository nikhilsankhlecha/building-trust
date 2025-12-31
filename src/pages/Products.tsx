import { Link } from 'react-router-dom';
import { ArrowRight, Download, Filter, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useState } from 'react';

import heroProduct from '@/assets/hero-product.jpg';
import ceilingApplication from '@/assets/ceiling-application.jpg';
import constructionSite from '@/assets/construction-site.jpg';
import gypsumBoards from '@/assets/gypsum-boards.jpg';

const products = [
  {
    id: 'elite-plaster',
    name: 'GypsumPro Elite Plaster',
    category: 'Plaster',
    description: 'Premium machine-applied gypsum plaster for large-scale projects with superior coverage.',
    image: heroProduct,
    specs: { 
      coverage: '18-20 m²/25kg', 
      setting: '45-60 min', 
      thickness: '10-15mm',
      application: 'Machine/Manual'
    },
    tags: ['Best Seller', 'High Coverage'],
    applications: ['Walls', 'Ceilings'],
  },
  {
    id: 'standard-board',
    name: 'GypsumPro Standard Board',
    category: 'Boards',
    description: 'Fire-resistant gypsum board for ceilings and partitions in commercial and residential buildings.',
    image: gypsumBoards,
    specs: { 
      size: '1200x2400mm', 
      thickness: '12.5mm', 
      fire: '2 hr rating',
      weight: '8.5 kg/m²'
    },
    tags: ['Fire Rated', 'Standard'],
    applications: ['Ceilings', 'Partitions'],
  },
  {
    id: 'finish-coat',
    name: 'GypsumPro Finish Coat',
    category: 'Plaster',
    description: 'Smooth finishing compound for flawless wall surfaces that are ready for painting.',
    image: ceilingApplication,
    specs: { 
      coverage: '25-30 m²/25kg', 
      setting: '30-45 min', 
      application: 'Manual',
      finish: 'Ultra Smooth'
    },
    tags: ['Premium', 'Finishing'],
    applications: ['Walls'],
  },
  {
    id: 'partition-board',
    name: 'GypsumPro Partition Board',
    category: 'Boards',
    description: 'High-strength drywall system for commercial interiors with excellent acoustic properties.',
    image: constructionSite,
    specs: { 
      size: '1200x3000mm', 
      thickness: '15mm', 
      acoustic: '45 STC',
      fire: '1 hr rating'
    },
    tags: ['Acoustic', 'High Strength'],
    applications: ['Partitions'],
  },
  {
    id: 'moisture-board',
    name: 'GypsumPro Moisture Board',
    category: 'Boards',
    description: 'Water-resistant gypsum board ideal for bathrooms, kitchens, and humid environments.',
    image: gypsumBoards,
    specs: { 
      size: '1200x2400mm', 
      thickness: '12.5mm', 
      moisture: '< 5%',
      core: 'Green'
    },
    tags: ['Moisture Resistant', 'Special'],
    applications: ['Walls', 'Ceilings'],
  },
  {
    id: 'base-coat',
    name: 'GypsumPro Base Coat',
    category: 'Plaster',
    description: 'High-adhesion base coat for preparing surfaces before finish plaster application.',
    image: heroProduct,
    specs: { 
      coverage: '15-18 m²/25kg', 
      setting: '60-90 min', 
      thickness: '8-12mm',
      adhesion: 'High'
    },
    tags: ['Base Layer', 'High Adhesion'],
    applications: ['Walls'],
  },
];

const categories = ['All', 'Plaster', 'Boards'];
const applications = ['All', 'Walls', 'Ceilings', 'Partitions'];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedApplication, setSelectedApplication] = useState('All');

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const applicationMatch = selectedApplication === 'All' || product.applications.includes(selectedApplication);
    return categoryMatch && applicationMatch;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding pb-8">
          <h1 className="text-h1 font-heading text-primary mb-4">
            Explore our gypsum product range
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            From premium plasters to specialized boards, find the right gypsum solution 
            for your construction needs. All products meet IS standards.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background border-b border-border sticky top-20 z-40">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium text-primary">Filter:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-border hidden sm:block" />

            <div className="flex flex-wrap gap-2">
              {applications.map(app => (
                <button
                  key={app}
                  onClick={() => setSelectedApplication(app)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedApplication === app
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {app}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-card rounded-xl border border-border overflow-hidden card-hover group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    {product.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-2 text-lg">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  
                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="bg-secondary rounded p-2">
                        <span className="text-muted-foreground capitalize">{key}</span>
                        <p className="font-medium text-primary">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download size={14} />
                      Spec Sheet
                    </Button>
                    <Link to="/contact" className="flex-1">
                      <Button variant="cta" size="sm" className="w-full">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products match your filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedApplication('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-h2 font-heading text-primary-foreground mb-4">
              Need help choosing the right product?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Our technical team can recommend the ideal gypsum solution based on your 
              project requirements, timeline, and budget.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Talk to Expert
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="heroSecondary" size="lg">
                  Download Full Catalog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
