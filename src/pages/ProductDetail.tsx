import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, CheckCircle, ArrowRight, Package, Wrench, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { getProductById, products } from '@/data/products';

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || '');

  if (!product) {
    return (
      <Layout>
        <div className="container-wide section-padding text-center">
          <h1 className="text-h2 font-heading text-primary mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button variant="cta">
              <ArrowLeft size={18} />
              Back to Products
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-secondary border-b border-border">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="bg-secondary rounded-2xl p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className="max-h-[500px] w-auto object-contain"
              />
            </div>

            {/* Product Info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map(tag => (
                  <span 
                    key={tag}
                    className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <span className="text-sm font-medium text-accent">{product.category}</span>
              <h1 className="text-h1 font-heading text-primary mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-body-lg text-muted-foreground mb-8">
                {product.description}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="bg-secondary rounded-lg p-4">
                    <span className="text-sm text-muted-foreground capitalize">{key}</span>
                    <p className="font-semibold text-primary text-lg">{value}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="flex-1">
                  <Button variant="cta" size="lg" className="w-full">
                    Get Project Quote
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="flex-1">
                  <Download size={18} />
                  Download Spec Sheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Use Cases */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-accent" size={24} />
                </div>
                <h2 className="text-h2 font-heading text-primary">Key Benefits</h2>
              </div>
              <ul className="space-y-4">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Package className="text-primary" size={24} />
                </div>
                <h2 className="text-h2 font-heading text-primary">Where to Use</h2>
              </div>
              <ul className="space-y-4">
                {product.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Guidelines */}
      <section className="bg-background">
        <div className="container-wide section-padding">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <Wrench className="text-accent" size={24} />
            </div>
            <h2 className="text-h2 font-heading text-primary">Application Guidelines</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.applicationSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-secondary rounded-xl p-6 relative"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">{index + 1}</span>
                </div>
                <p className="text-muted-foreground pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Data */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileText className="text-primary" size={24} />
            </div>
            <h2 className="text-h2 font-heading text-primary">Technical Specifications</h2>
          </div>
          
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <tbody>
                {Object.entries(product.technicalData).map(([key, value], index) => (
                  <tr 
                    key={key}
                    className={index % 2 === 0 ? 'bg-background' : 'bg-card'}
                  >
                    <td className="px-6 py-4 font-medium text-primary border-r border-border w-1/2">
                      {key}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-center">
            <a href="/documents/technical-data-sheet.pdf" download target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Download size={18} />
                Download Full Technical Data Sheet (PDF)
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-background">
          <div className="container-wide section-padding">
            <h2 className="text-h2 font-heading text-primary mb-8">Related Products</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link 
                  key={relProduct.id}
                  to={`/products/${relProduct.id}`}
                  className="bg-card rounded-xl border border-border overflow-hidden card-hover group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <img 
                      src={relProduct.image} 
                      alt={relProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-accent">{relProduct.category}</span>
                    <h3 className="font-heading font-semibold text-primary mt-1 mb-2">
                      {relProduct.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {relProduct.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-secondary">
        <div className="container-wide section-padding">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-h2 font-heading text-primary-foreground mb-4">
              Ready to use {product.name}?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Get a customized quote for your project. Our technical team will help you 
              calculate the right quantity and provide application support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="cta" size="lg">
                  Get Project Quote
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button variant="heroSecondary" size="lg">
                  Chat with Expert
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
