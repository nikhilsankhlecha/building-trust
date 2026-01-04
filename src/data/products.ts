import htcGypsumPlaster from '@/assets/htc-gypsum-plaster.png';
import ceilingApplication from '@/assets/ceiling-application.jpg';
import constructionSite from '@/assets/construction-site.jpg';
import gypsumBoards from '@/assets/gypsum-boards.jpg';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: Record<string, string>;
  tags: string[];
  applications: string[];
  benefits: string[];
  useCases: string[];
  applicationSteps: string[];
  technicalData: Record<string, string>;
}

export const products: Product[] = [
  {
    id: 'elite-plaster',
    name: 'H.T.C. Gypsum Plaster - Iranian White',
    category: 'Plaster',
    description: 'Premium machine-applied gypsum plaster for large-scale projects with superior coverage. Made from high-purity Iranian white gypsum for smooth, crack-free finishes.',
    image: htcGypsumPlaster,
    specs: { 
      coverage: '18-20 m²/20kg', 
      setting: '45-60 min', 
      thickness: '10-15mm',
      application: 'Machine/Manual'
    },
    tags: ['Best Seller', 'High Coverage', 'Imported'],
    applications: ['Walls', 'Ceilings'],
    benefits: [
      'Superior white finish requiring minimal painting',
      '40% faster application compared to cement plaster',
      'Crack-resistant and long-lasting durability',
      'Lightweight - reduces structural load',
      'Excellent thermal and acoustic insulation',
      'Eco-friendly with low carbon footprint'
    ],
    useCases: [
      'Residential interior walls and ceilings',
      'Commercial office spaces',
      'Hotels and hospitality projects',
      'Healthcare facilities requiring smooth finishes',
      'Educational institutions',
      'High-end retail spaces'
    ],
    applicationSteps: [
      'Ensure surface is clean, dry, and free from dust',
      'Mix 20kg plaster with 12-14 liters of clean water',
      'Allow mixture to rest for 2-3 minutes before application',
      'Apply using machine spray or manual trowel',
      'Level the surface within 30 minutes of application',
      'Allow 24-48 hours for complete curing before painting'
    ],
    technicalData: {
      'Composition': 'High-purity Iranian white gypsum',
      'Bulk Density': '650-750 kg/m³',
      'Compressive Strength': '> 3.5 N/mm²',
      'Flexural Strength': '> 1.5 N/mm²',
      'Water Requirement': '60-70% by weight',
      'Initial Setting Time': '45 minutes (min)',
      'Final Setting Time': '60 minutes (max)',
      'Coverage': '18-20 m²/20kg at 12mm thickness',
      'Shelf Life': '6 months in dry conditions',
      'Packaging': '20 kg bags'
    }
  },
  {
    id: 'standard-board',
    name: 'GypsumPro Standard Board',
    category: 'Boards',
    description: 'Fire-resistant gypsum board for ceilings and partitions in commercial and residential buildings. Provides excellent fire protection with 2-hour rating.',
    image: gypsumBoards,
    specs: { 
      size: '1200x2400mm', 
      thickness: '12.5mm', 
      fire: '2 hr rating',
      weight: '8.5 kg/m²'
    },
    tags: ['Fire Rated', 'Standard'],
    applications: ['Ceilings', 'Partitions'],
    benefits: [
      '2-hour fire resistance rating',
      'Easy to cut and install',
      'Smooth surface ready for finishing',
      'Cost-effective solution for partitions',
      'Recyclable and environmentally friendly',
      'Consistent quality and dimensions'
    ],
    useCases: [
      'Office partition walls',
      'Suspended ceiling systems',
      'Residential room dividers',
      'Commercial building interiors',
      'Retail store fit-outs',
      'Industrial facility partitions'
    ],
    applicationSteps: [
      'Install metal or wooden framing at 600mm centers',
      'Cut boards to size using a utility knife',
      'Fix boards to frame using drywall screws at 200mm intervals',
      'Ensure 3mm gap between boards for movement',
      'Apply joint tape and compound to all joints',
      'Sand smooth and apply primer before painting'
    ],
    technicalData: {
      'Core': 'Gypsum with glass fiber reinforcement',
      'Face': 'Recycled paper liner',
      'Density': '680-720 kg/m³',
      'Thermal Conductivity': '0.16 W/mK',
      'Sound Reduction': '35 dB (single layer)',
      'Fire Rating': '2 hours (BS 476)',
      'Edge Type': 'Tapered',
      'Humidity Resistance': 'Standard (not for wet areas)',
      'Standards': 'IS 2095, BS EN 520',
      'Packaging': '50 boards per pallet'
    }
  },
  {
    id: 'finish-coat',
    name: 'GypsumPro Finish Coat',
    category: 'Plaster',
    description: 'Smooth finishing compound for flawless wall surfaces that are ready for painting. Provides ultra-smooth finish with minimal sanding required.',
    image: ceilingApplication,
    specs: { 
      coverage: '25-30 m²/25kg', 
      setting: '30-45 min', 
      application: 'Manual',
      finish: 'Ultra Smooth'
    },
    tags: ['Premium', 'Finishing'],
    applications: ['Walls'],
    benefits: [
      'Ultra-smooth finish for premium interiors',
      'Minimal sanding required',
      'Excellent paint adhesion',
      'Low shrinkage formula',
      'Easy to work with extended open time',
      'White finish reduces paint coats needed'
    ],
    useCases: [
      'Final finishing on plastered walls',
      'Skim coating over existing surfaces',
      'High-end residential interiors',
      'Showrooms and galleries',
      'Hotel lobbies and corridors',
      'Premium office spaces'
    ],
    applicationSteps: [
      'Ensure base coat is fully cured and dry',
      'Mix 25kg with 14-16 liters of water',
      'Apply thin coat (2-3mm) using steel trowel',
      'Work in sections of 2-3 m² at a time',
      'Polish surface when partially set',
      'Allow 24 hours before painting'
    ],
    technicalData: {
      'Composition': 'Fine gypsum with polymeric additives',
      'Fineness': '> 95% passing 150 micron',
      'Application Thickness': '1-3mm',
      'Compressive Strength': '> 2.5 N/mm²',
      'Water Requirement': '55-65% by weight',
      'Setting Time': '30-45 minutes',
      'Coverage': '25-30 m²/25kg at 2mm',
      'Surface Hardness': 'Excellent',
      'Shelf Life': '6 months',
      'Packaging': '25 kg bags'
    }
  },
  {
    id: 'partition-board',
    name: 'GypsumPro Partition Board',
    category: 'Boards',
    description: 'High-strength drywall system for commercial interiors with excellent acoustic properties. Ideal for creating quiet, private spaces.',
    image: constructionSite,
    specs: { 
      size: '1200x3000mm', 
      thickness: '15mm', 
      acoustic: '45 STC',
      fire: '1 hr rating'
    },
    tags: ['Acoustic', 'High Strength'],
    applications: ['Partitions'],
    benefits: [
      'Superior sound insulation (45 STC)',
      'High impact resistance',
      'Excellent for high-traffic areas',
      'Easy installation with standard tools',
      'Reduced number of joints with 3m length',
      'Compatible with all standard fixing systems'
    ],
    useCases: [
      'Conference rooms requiring privacy',
      'Medical consultation rooms',
      'Recording studios',
      'Educational classrooms',
      'Hotel room partitions',
      'Call centers and offices'
    ],
    applicationSteps: [
      'Install acoustic-rated metal studs at 600mm centers',
      'Add acoustic insulation between studs',
      'Fix first layer of boards horizontally',
      'Stagger joints for second layer',
      'Seal all edges with acoustic sealant',
      'Tape and finish joints as standard'
    ],
    technicalData: {
      'Core': 'High-density gypsum',
      'Thickness': '15mm',
      'Weight': '12.5 kg/m²',
      'Sound Transmission Class': '45 STC (double layer)',
      'Impact Resistance': 'High (Class 1)',
      'Fire Rating': '1 hour (single layer)',
      'Thermal Value': 'R 0.079 m²K/W',
      'Edge Type': 'Tapered',
      'Standards': 'IS 2095, ASTM C1396',
      'Packaging': '40 boards per pallet'
    }
  },
  {
    id: 'moisture-board',
    name: 'GypsumPro Moisture Board',
    category: 'Boards',
    description: 'Water-resistant gypsum board ideal for bathrooms, kitchens, and humid environments. Green core indicates moisture resistance.',
    image: gypsumBoards,
    specs: { 
      size: '1200x2400mm', 
      thickness: '12.5mm', 
      moisture: '< 5%',
      core: 'Green'
    },
    tags: ['Moisture Resistant', 'Special'],
    applications: ['Walls', 'Ceilings'],
    benefits: [
      'Moisture resistant core',
      'Mold and mildew resistant',
      'Suitable for high humidity areas',
      'Same installation as standard board',
      'Can be tiled directly',
      'Long-lasting in wet conditions'
    ],
    useCases: [
      'Bathroom walls and ceilings',
      'Kitchen backsplash areas',
      'Laundry rooms',
      'Basement finishing',
      'Swimming pool changing rooms',
      'Spa and wellness centers'
    ],
    applicationSteps: [
      'Install corrosion-resistant framing',
      'Ensure adequate ventilation in space',
      'Fix boards with rust-resistant screws',
      'Leave 6mm gap at floor level',
      'Apply waterproof membrane before tiling',
      'Use moisture-resistant joint compound'
    ],
    technicalData: {
      'Core': 'Moisture-resistant gypsum (green)',
      'Face': 'Moisture-resistant paper',
      'Water Absorption': '< 5%',
      'Mold Resistance': 'ASTM D3273 score 10',
      'Density': '700-750 kg/m³',
      'Fire Rating': '1 hour',
      'Humidity Tolerance': 'Up to 95% RH',
      'Edge Type': 'Tapered',
      'Standards': 'IS 2095-2, ASTM C1396',
      'Packaging': '50 boards per pallet'
    }
  },
  {
    id: 'base-coat',
    name: 'GypsumPro Base Coat',
    category: 'Plaster',
    description: 'High-adhesion base coat for preparing surfaces before finish plaster application. Creates strong bond with all substrates.',
    image: htcGypsumPlaster,
    specs: { 
      coverage: '15-18 m²/25kg', 
      setting: '60-90 min', 
      thickness: '8-12mm',
      adhesion: 'High'
    },
    tags: ['Base Layer', 'High Adhesion'],
    applications: ['Walls'],
    benefits: [
      'Excellent adhesion to all substrates',
      'Levels uneven surfaces effectively',
      'Long working time for large areas',
      'Crack-resistant formula',
      'Compatible with all finish coats',
      'Reduces overall plaster thickness needed'
    ],
    useCases: [
      'New construction plastering',
      'Renovation and repair work',
      'Concrete block wall finishing',
      'AAC block plastering',
      'Brick wall preparation',
      'Surface leveling applications'
    ],
    applicationSteps: [
      'Clean surface and remove loose material',
      'Apply bonding agent if required',
      'Mix 25kg with 12-14 liters of water',
      'Apply in layers not exceeding 12mm',
      'Score surface for finish coat adhesion',
      'Allow 24 hours curing before finish coat'
    ],
    technicalData: {
      'Composition': 'Gypsum with bonding polymers',
      'Compressive Strength': '> 4.0 N/mm²',
      'Bond Strength': '> 0.3 N/mm²',
      'Water Requirement': '48-56% by weight',
      'Initial Setting': '60 minutes',
      'Final Setting': '90 minutes',
      'Application Thickness': '8-12mm per coat',
      'Coverage': '15-18 m²/25kg at 10mm',
      'Shelf Life': '6 months',
      'Packaging': '25 kg bags'
    }
  }
];

export const categories = ['All', 'Plaster', 'Boards'];
export const applicationTypes = ['All', 'Walls', 'Ceilings', 'Partitions'];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
