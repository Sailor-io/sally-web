import { convrrtImages, crestbaseImages, decagonImages, errandLrImages, homelyImages, meclabImages } from "../assets/project-images";

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
    ], image: convrrtImages.converrt_1,
    heroImage: convrrtImages.converrt_1,
    problem: {
      title: 'The problem',
      description:
        'SaaS teams needed flexible landing page creation within their products, with experiences suited to different tenants.',
    image: convrrtImages.converrt_2,
    },
    solution: {
      title: 'The solution',
      description:
        'I developed tenant experiences and landing page builder features, collaborating on grid layouts and code improvements.',
    image: convrrtImages.converrt_1,
    },
    impact: {
      title: 'The impact',
      description:
        'Contributed to page creation and layout capabilities for SaaS tenants. Improved existing functionality and supported implementation quality through code reviews and quality assurance.',
    image: convrrtImages.converrt_3,
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
    ],image: decagonImages.decagon_1,
    heroImage: decagonImages.decagon_1,
    problem: {
      title: 'The problem',
      description:
        'The platform needed consistent interfaces, reliable feature releases and components supporting complex interactions.',
    image: decagonImages.decagon_2,
    },
    solution: {
      title: 'The solution',
      description:
        'I developed interfaces and complex components, gathered feature requirements and checked releases after deployment.',
     image: decagonImages.decagon_3,
    },
    impact: {
      title: 'The impact',
      description:
        'Contributed to smoother platform interactions and improved functionality. Verified deployed features and worked across departments to translate requirements into implementations.',
    image: decagonImages.decagon_2,
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
    id: 'sally-collective',
    number: '06',
    title: 'Sally Collective Works',
    description:
      'A unified showcase of our cross-industry engineering and product design experience spanning AI, SaaS, fintech, logistics, education, and PropTech.',
    tag: 'Collective Experience',
    client: 'Multi-Sector Partners',
    sector: 'AI, SaaS, Fintech, Logistics & PropTech',
    year: '2020 – 2025',
    services: [
      'Full-stack Product Engineering',
      'Web & Mobile Architecture',
      'Design Systems & UI/UX',
      'RESTful APIs & Data Modelling',
      'AI & Third-party Integrations',
      'QA, Code Reviews & Documentation',
    ],
    image: meclabImages.meclab_3,
    heroImage: meclabImages.meclab_worldwide,
    problem: {
      title: 'The problem',
      description:
        'Growing businesses across logistics, marketing tech, education, payments, and real estate often face fragmented user journeys, inconsistent interfaces, and engineering bottlenecks that slow down reliable delivery across web and mobile.',
      image: errandLrImages.errand_lr_3,
    },
    solution: {
      title: 'The solution',
      description:
        'Drawing on our collective work across Errandlr, MECLABS AI, CONVRRT, Decagon, Sailor.IO, Crestbase, and Homly, we pair scalable React, Next.js, and React Native interfaces with secure Node.js/Express APIs, reusable design systems, and clear technical documentation.',
      image: convrrtImages.converrt_3,
    },
    impact: {
      title: 'The impact',
      description:
        'Consistently delivered production web platforms, cross-platform mobile apps, multi-tenant builders, and backend architectures—enabling partner teams to ship faster, maintain high code quality, and create cohesive experiences for their users.',
      image: decagonImages.decagon_3,
    },
  },
  {
    id: 'crestbase',
    number: '07',
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
    ],image: crestbaseImages.crestbase_1,
    heroImage: crestbaseImages.crestbase_2,
    problem: {
      title: 'The problem',
      description:
        'Agents and companies needed secure account access, property management and flexible listing search.',
   image: crestbaseImages.crestbase_3,
    },
    solution: {
      title: 'The solution',
      description:
        'I built Express APIs with JWT access controls, MongoDB models, property uploads and search filters.',
  image: crestbaseImages.crestbase_3,
    },
    impact: {
      title: 'The impact',
      description:
        'Enabled account registration, authenticated property management and searches by location, type and price. Developed data models linking users, properties and transaction records, with rental and purchase status updates.',
    image: crestbaseImages.crestbase_1,
    },
  },
  {
    id: 'homly',
    number: '08',
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
    ],image: homelyImages.homely_1,
    heroImage: homelyImages.homely_2,
    problem: {
      title: 'The problem',
      description:
        'The product needed frontend features connected to reliable APIs and tested against project requirements.',
    image: homelyImages.homely_1,
    },
    solution: {
      title: 'The solution',
      description:
        'I built Next.js features and Express endpoints, collaborated on design and performed end-to-end API testing.',
    image: homelyImages.homely_1,
    },
    impact: {
      title: 'The impact',
      description:
        'Delivered frontend features and backend endpoints aligned with project requirements. Supported system quality through end-to-end API testing and maintainable implementation practices.',
    image: homelyImages.homely_3,
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

