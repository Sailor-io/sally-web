import { errandLrImages, meclabImages } from "../assets/project-images";

export interface CaseStudySection {
  title: string;
  description: string;
  image: string;
}

export interface ProjectDetail {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  client: string;
  sector: string;
  year: string;
  services: string[];
  image: string;
  heroImage: string;
  problem: CaseStudySection;
  solution: CaseStudySection;
  impact: CaseStudySection;
}

export const ALL_PROJECTS: ProjectDetail[] = [
  {
    id: 'errandlr',
    number: '01',
    title: 'Errandlr',
    description:
      'A B2C and B2B logistics platform connecting individuals and businesses with delivery management services.',
    tag: 'Logistics Web App',
    client: 'Errandlr',
    sector: 'E-commerce & Logistics',
    year: '2020',
    services: [
      'Lead Frontend Engineering',
      'React & JavaScript Development',
      'Dashboard Development',
      'API Integration',
      'PWA Implementation',
      'Google Maps & Geocoding',
      'Developer Documentation',
    ],    image: errandLrImages.errand_lr_1,
    heroImage: errandLrImages.errand_lr_1,
    problem: {
      title: 'The problem',
      description:
        'Customers needed simpler delivery management, while developers needed shared documentation and clear requirements.',
      image: errandLrImages.errand_lr_2,
    },
    solution: {
      title: 'The solution',
      description:
        'I developed delivery dashboards, integrated APIs and maps, and created a shared developer documentation workspace.',
     image: errandLrImages.errand_lr_3,
    },
    impact: {
      title: 'The impact',
      description:
        'Delivered customer-facing delivery features and supported ongoing application maintenance. Improved knowledge sharing through a central developer workspace and clear client documentation.',
     image: errandLrImages.errand_lr_2,
    },
  },
  {
    id: 'meclabs',
    number: '02',
    title: 'MECLABS AI',
    description:
      'An AI platform offering expert assistants and tools to support marketing, business tasks and customer engagement.',
    tag: 'AI Platform',
    client: 'MECLABS AI',
    sector: 'Artificial Intelligence & Marketing Technology',
    year: '2024',
    services: [
      'Software Engineering',
      'Admin Interface Architecture',
      'React, Jotai & Material-UI Development',
      'User, Team & Organisation Management',
      'AI Assistant Management',
      'AI Chat Widget Integration',
      'Code Reviews',
    ],  image: meclabImages.meclab_1,
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'Teams needed centralised management of users and AI assistants, alongside chat support on external websites.',
     image: meclabImages.meclab_2,
    },
    solution: {
      title: 'The solution',
      description:
        'I built a React admin interface using Jotai and Material-UI and helped integrate an AI chat widget.',
    image: meclabImages.meclab_1,
    },
    impact: {
      title: 'The impact',
      description:
        'Delivered administration tools for users, teams, organisations and AI assistants. Contributed to real-time website assistance and supported code quality through collaboration and reviews.',
     image: meclabImages.meclab_worldwide,
    },
  },
  {
    id: 'convrrt',
    number: '03',
    title: 'CONVRRT',
    description:
      'An embedded landing page builder enabling SaaS companies to offer page creation within their own products.',
    tag: 'SaaS Page Builder',
    client: 'CONVRRT',
    sector: 'SaaS & Marketing Technology',
    year: '2024',
    services: [
      'Software Engineering',
      'Tenant User Experience Development',
      'Landing Page Builder Development',
      'Grid Builder Collaboration',
      'Feature Enhancements',
      'Code Reviews',
      'Quality Assurance',
    ], image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'SaaS teams needed flexible landing page creation within their products, with experiences suited to different tenants.',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'I developed tenant experiences and landing page builder features, collaborating on grid layouts and code improvements.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Contributed to page creation and layout capabilities for SaaS tenants. Improved existing functionality and supported implementation quality through code reviews and quality assurance.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'decagon',
    number: '04',
    title: 'Decagon Institute',
    description:
      'A technology education institute providing software engineering training, mentorship and career development.',
    tag: 'Web Platform',
    client: 'Decagon Institute',
    sector: 'Technology Education & Software Engineering',
    year: '2021',
    services: [
      'Software Engineering',
      'UI/UX Development',
      'Complex Component Development',
      'Feature Implementation',
      'Post-deployment Frontend QA',
      'Cross-functional Collaboration',
    ],image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'The platform needed consistent interfaces, reliable feature releases and components supporting complex interactions.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'I developed interfaces and complex components, gathered feature requirements and checked releases after deployment.',
     image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Contributed to smoother platform interactions and improved functionality. Verified deployed features and worked across departments to translate requirements into implementations.',
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'sailor-io',
    number: '05',
    title: 'Sailor.IO',
    description:
      'A digital transaction platform helping buyers and sellers manage escrow-style transactions through payment partners.',
    tag: 'Mobile Application',
    client: 'Sailor.IO',
    sector: 'Digital Transaction Technology',
    year: '2025',
    services: [
      'Mobile App Development',
      'React Native Development',
      'Expo Managed Workflow',
      'Cross-platform Feature Implementation',
      'iOS & Android Development',
    ],image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'Sailor.io needed a consistent mobile experience across iOS and Android with a streamlined development workflow.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'I developed the mobile app using React Native and Expo, implementing core features across both platforms.',
   image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Delivered a cross-platform mobile application with shared functionality for iOS and Android, using the Expo managed workflow to streamline development and deployment.',
   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'Crestbase Limited',
    number: '06',
    title: 'Crestbase Limited',
    description:
      'A business software provider offering digital workflows, including paperless admissions and application processing.',
    tag: 'Business Software',
    client: 'Crestbase Limited',
    sector: 'Business Technology & Education Software',
    year: '2025',
    services: ['Enterprise UX', 'Real-time Tracking Map', 'Design System', 'API Integration'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'Legacy green-screen software and paper-heavy bills of lading caused shipment blind spots, port customs delays, and container demurrage penalties across 40+ international ports.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'We designed a unified logistics orchestration web console with interactive satellite route tracking, predictive arrival estimates, and instant digital customs clearance documentation.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Customs processing times dropped from 48 hours to under 30 minutes, transit delay penalties fell by 82%, and cargo tracking accuracy reached 99.8%.',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'home-podiatry',
    number: '07',
    title: 'Home Podiatry',
    description:
      'A podiatry business focused on foot care. Specific services require confirmation.',
    tag: 'Website',
    client: 'Home Podiatry',
    sector: 'Podiatry & Healthcare',
    year: '2025',
    services: ['Mobile Health UX', 'Biometric Visualizations', 'HIPAA Compliant Design', 'iOS App'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'To confirm: the patient or business needs that prompted the website project.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'To confirm: the pages, features and integrations you implemented.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'To confirm: the capabilities delivered and any verified improvements to the patient experience.',
   image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'turbo-fleet',
    number: '08',
    title: 'Turbo Fleet',
    description:
      'To confirm: the company services and purpose of the digital product you developed.',
    tag: 'Web Project',
    client: 'Turbo Fleet',
    sector: 'To confirm',
    year: '2025',
    services: ['Hardware Touch UI', 'Mobile & Tablet App', 'Energy Analytics', 'Design System'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'To confirm: the customer or operational challenge addressed by the project.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'To confirm: the frontend features, technologies and integrations you delivered.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'To confirm: the delivered capabilities and verified results of your frontend work.',
   image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'crestbase',
    number: '09',
    title: 'Crestbase Limited',
    description:
      'A real estate platform enabling agents and companies to publish, manage and search property listings.',
    tag: 'Real Estate Platform',
    client: 'Crestbase Limited',
    sector: 'Real Estate & PropTech',
    year: '2025',
    services: [
      'Lead Backend Engineering',
      'Node.js & Express Development',
      'RESTful API Development',
      'JWT Authentication & Authorisation',
      'Property Listing Management',
      'Search & Filtering',
      'MongoDB Data Modelling',
      'Backend Architecture',
    ],image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'Agents and companies needed secure account access, property management and flexible listing search.',
   image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'I built Express APIs with JWT access controls, MongoDB models, property uploads and search filters.',
  image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Enabled account registration, authenticated property management and searches by location, type and price. Developed data models linking users, properties and transaction records, with rental and purchase status updates.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'homly',
    number: '10',
    title: 'Homly',
    description:
      'A property management platform helping landlords and accommodation operators manage rentals and tenant workflows.',
    tag: 'Property Management Platform',
    client: 'Homly',
    sector: 'Real Estate & PropTech',
    year: '2025',
    services: [
      'Full-stack Development',
      'Next.js Frontend Development',
      'Node.js & Express API Development',
      'Backend Endpoint Implementation',
      'End-to-end API Testing',
      'Technical Design Collaboration',
    ],image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'The product needed frontend features connected to reliable APIs and tested against project requirements.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'I built Next.js features and Express endpoints, collaborated on design and performed end-to-end API testing.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Delivered frontend features and backend endpoints aligned with project requirements. Supported system quality through end-to-end API testing and maintainable implementation practices.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    },
  },
];

export const ROW_1_PROJECTS = ALL_PROJECTS.slice(0, 4);
export const ROW_2_PROJECTS = ALL_PROJECTS.slice(4, 8);

export function getProjectById(id: string): ProjectDetail | undefined {
  return ALL_PROJECTS.find((p) => p.id === id);
}

export function getNextProject(currentId: string): ProjectDetail {
  const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === currentId);
  const nextIndex = (currentIndex + 1) % ALL_PROJECTS.length;
  return ALL_PROJECTS[nextIndex];
}

