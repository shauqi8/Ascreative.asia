const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'content', 'services');
const portfolioDir = path.join(__dirname, 'src', 'content', 'portfolio');

if (!fs.existsSync(servicesDir)) fs.mkdirSync(servicesDir, { recursive: true });
if (!fs.existsSync(portfolioDir)) fs.mkdirSync(portfolioDir, { recursive: true });

const services = [
  {
    id: 'creative-technology',
    data: {
      title: 'Creative & Technology',
      category: 'Creative Tech',
      description: 'Strategic digital solutions including web design, digital marketing, digital content creation, and resource management to align with your brand objectives.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
      features: ['Web Design & Development', 'Digital Marketing', 'Digital Content Creation', 'Resource Management']
    }
  },
  {
    id: 'event-production',
    data: {
      title: 'Event Production & Management',
      category: 'Event Production',
      description: 'End-to-end event management including planning, technical support, talent management, and safety compliance for seamless experiences.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      features: ['Event Planning & Management', 'Audio Visual Support', 'Talent & Program Management', 'Safety & Logistics']
    }
  },
  {
    id: 'event-structures',
    data: {
      title: 'Event Structures & Spaces',
      category: 'Event Production',
      description: 'Dependable canopy, tent, stage, and exhibition booth solutions tailored for events, functions, and temporary site requirements.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
      features: ['Canopy & Tents (Marquee, Arabian)', 'Modular Staging', 'Exhibition Booths', 'Custom-built Spaces']
    }
  },
  {
    id: 'event-decoration',
    data: {
      title: 'Event Decoration',
      category: 'Event Production',
      description: 'Thoughtfully designed event decoration services, hoarding & carpentry, functional displays, and premium furniture rentals.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
      features: ['Stage & Backdrop Decor', 'Hoarding & Carpentry', 'Product Displays', 'Furniture Rentals']
    }
  },
  {
    id: 'audio-visual-lighting',
    data: {
      title: 'Audio, Visual & Lighting',
      category: 'Event Production',
      description: 'Ensure clear audio delivery and vibrant visual impact with our state-of-the-art sound systems, LED screens, and ambient lighting setups.',
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
      features: ['PA & Concert Sound Systems', 'LED Video Walls & Projectors', 'Stage & Moving Head Lighting', 'Laser & Special Effects']
    }
  },
  {
    id: 'environment',
    data: {
      title: 'Environment & Waste Solutions',
      category: 'Environment',
      description: 'Comprehensive waste management, public cleansing, and facilities management focusing on sustainability and regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800',
      features: ['Waste Management', 'Public Cleansing', 'Waste Facilities Management']
    }
  }
];

const portfolios = [
  {
    id: 'umw-industries',
    data: {
      title: 'Forklift Competition',
      client: 'UMW Industries',
      description: 'Executed a high-octane forklift competition, delivering a seamless end-to-end event combining creativity, precision, and flawless execution. Encompassed full live technical production and safety compliance.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDt4Xl_2gDHCYpsCmu8QtjusOlgDXufaKdjQ&s',
      details: 'On the technical side, we delivered top-tier audio-visual support, staging, and live production management. High energy live competition with flawless execution.'
    }
  },
  {
    id: 'rumpun-selangor',
    data: {
      title: 'Tour for Raja Muda Selangor',
      client: 'Rumpun Selangor',
      description: 'End-to-end event management bringing the Raja Muda Selangor closer to communities statewide. Meticulous local coordination, security, and protocol management.',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=800',
      details: 'Our team ensured the event ran smoothly reflecting the dignity and significance of the occasion. Managed schedules, local coordination, security, and protocol.'
    }
  },
  {
    id: 'cradle-fund',
    data: {
      title: 'Cradle Fund Collaborative Event',
      client: 'Cradle Fund & Voxed',
      description: 'A dynamic event managed in collaboration with Voxed, delivering flawless audio-visual setup, stage management, and comprehensive technical support.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
      details: 'Handled full program planning, talent coordination, and logistics. Ensured smooth real-time troubleshooting for polished presentation.'
    }
  }
];

services.forEach(s => fs.writeFileSync(path.join(servicesDir, `${s.id}.json`), JSON.stringify(s.data, null, 2)));
portfolios.forEach(p => fs.writeFileSync(path.join(portfolioDir, `${p.id}.json`), JSON.stringify(p.data, null, 2)));

console.log('Seed completed successfully!');
