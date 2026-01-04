import { Link } from 'react-router-dom';
import { ArrowRight, Download, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { useState } from 'react';
import { products, categories, applicationTypes } from '@/data/products';

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
              {applicationTypes.map(app => (
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
                <Link to={`/products/${product.id}`}>
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
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                  </div>
                  <Link to={`/products/${product.id}`}>
                    <h3 className="font-heading font-semibold text-primary mb-2 text-lg hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                  </Link>
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
                    <Link to={`/products/${product.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
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
