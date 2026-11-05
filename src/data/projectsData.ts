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
    id: 'kroma',
    number: '01',
    title: 'Kroma Digital Studio',
    description:
      'A high-performance digital portfolio and interactive experience built for a London-based creative agency, blending fluidWebGL interactions with minimal typography.',
    tag: 'Web Design / UI',
    client: 'Kroma Creative Ltd',
    sector: 'Design & Digital Media',
    year: '2026',
    services: ['Web Design', 'Full-stack Development', 'WebGL Interactions', 'Design System'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'Kroma needed to transition from an outdated showcase to a cutting-edge digital hub that communicated their design pedigree to international enterprise clients. Their previous site suffered from high bounce rates on mobile and sluggish animation performance that degraded their brand perception.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'We designed and engineered a custom web experience featuring modular blueprint grid layouts, instant page transitions, and smooth physics-driven interactive cards. The architecture combines lightweight component hierarchies with responsive typography and accessible dark/light modes.',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Within the first 90 days following launch, client inbound requests surged by 142%, average session duration doubled, and global page load times dropped to sub-400ms across all device viewports.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'apex',
    number: '02',
    title: 'Apex Cloud Platform',
    description:
      'Unified multi-cloud infrastructure dashboard delivering real-time telemetry, automated policy enforcement, and serverless cost optimization for DevOps teams.',
    tag: 'SaaS Dashboard',
    client: 'Apex Systems Corp',
    sector: 'Enterprise Cloud & DevOps',
    year: '2025',
    services: ['Dashboard UI/UX', 'Real-time Telemetry', 'Design System', 'Data Visualization'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'DevOps engineers were overwhelmed by disparate monitoring tools, fragmented alert streams, and opaque cloud billing across AWS, GCP, and Azure. Teams struggled to pinpoint cluster stockouts and anomalous compute spikes before impacting production systems.',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'We built an intuitive blueprint-inspired analytics console with real-time stream processing, contextual drill-downs, and customizable widget grids. The interface enables site reliability engineers to diagnose infrastructure bottlenecks in three clicks or fewer.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Mean time to resolution (MTTR) decreased by 64%, client cloud expenditures were reduced by an average of 28% through automated recommendations, and the platform scaled to over 10M daily telemetry events.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'verve',
    number: '03',
    title: 'Verve Mobile Pay',
    description:
      'Next-generation frictionless mobile banking and global cross-border payments app engineered for security, speed, and instant currency settlement.',
    tag: 'Mobile App / Fintech',
    client: 'Verve Financial',
    sector: 'Fintech & Digital Banking',
    year: '2026',
    services: ['Mobile App Design', 'iOS & Android App', 'Security UX', 'Payment Flow Architecture'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'Cross-border remittances in emerging markets typically incurred 7% fees and took up to 3 business days, alienating international freelancers and remote-first SMBs who needed immediate liquidity and clear conversion transparency.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'We crafted an ultra-fluid mobile banking interface featuring one-tap biometric verification, live FX conversion tickers, and virtual multi-currency debit card management with zero hidden fees.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Verve reached over 250,000 active users within its first six months with an App Store rating of 4.9/5, processing over $120M in total payment volume while maintaining 99.99% uptime.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'aura',
    number: '04',
    title: 'Aura Living Commerce',
    description:
      'Immersive headless e-commerce storefront for sustainable luxury lifestyle goods, combining editorial storytelling with rapid one-click checkout.',
    tag: 'E-Commerce / Brand',
    client: 'Aura Lifestyle Group',
    sector: 'Luxury Retail & E-Commerce',
    year: '2025',
    services: ['E-Commerce Strategy', 'Shopify Plus / Headless', 'Brand Identity', 'Conversion Optimization'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'Aura’s legacy monolithic store struggled with slow image rendering, high cart abandonment, and an uninspiring transactional experience that failed to convey the artistry and ethical sourcing behind their premium home collections.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'We built a headless editorial e-commerce platform that pairs magazine-grade photography with instant micro-interactions, responsive 3D product previews, and a streamlined checkout flow.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Checkout completion rose by 38%, average order value (AOV) increased by 22%, and mobile conversion rates surpassed industry benchmarks by 2.4x.',
      image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'nexus',
    number: '05',
    title: 'Nexus AI Engine',
    description:
      'Enterprise generative AI platform orchestrating autonomous customer support workflows, sentiment analytics, and intelligent data extraction.',
    tag: 'Artificial Intelligence',
    client: 'Nexus Technologies',
    sector: 'Artificial Intelligence & SaaS',
    year: '2026',
    services: ['AI Interface Design', 'Prompt Engineering UI', 'Design System', 'Frontend Architecture'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'High-growth tech enterprises faced escalating customer query volumes, resulting in 48-hour response lags and inconsistent support resolutions that strained customer satisfaction and internal support teams.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'We developed an interactive agent studio that allows non-technical team leads to orchestrate LLM agent workflows, review conversation confidence graphs, and seamlessly hand off edge cases to human agents.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Over 72% of Tier-1 support tickets were resolved autonomously with zero human intervention, cutting support costs by 55% while customer CSAT ratings climbed to 96%.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'strata',
    number: '06',
    title: 'Strata Supply Chain',
    description:
      'End-to-end supply chain visibility and automated inventory dispatch system serving global freight forwarders and multi-modal logistics carriers.',
    tag: 'Logistics Enterprise',
    client: 'Strata Global Logistics',
    sector: 'Freight & Supply Chain',
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
    id: 'beacon',
    number: '07',
    title: 'Beacon Health Tracker',
    description:
      'Biometric telemetry monitoring and proactive health intelligence mobile app connecting continuous glucose and heart-rate sensors with preventive care clinicians.',
    tag: 'HealthTech / Mobile',
    client: 'Beacon Biosystems',
    sector: 'HealthTech & Telemedicine',
    year: '2026',
    services: ['Mobile Health UX', 'Biometric Visualizations', 'HIPAA Compliant Design', 'iOS App'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'Patients with chronic metabolic conditions lacked real-time feedback loops between dietary choices and blood glucose dynamics, leading to frequent emergency clinic admissions and avoidable medication escalations.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'We created an accessible, friendly mobile application with clear trend visualizers, personalized nutrition micro-goals, and direct secure messaging to care coordinators.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Over 84% of enrolled patients achieved healthy glycemic targets within 60 days, while hospital readmissions among high-risk groups decreased by 41%.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    id: 'lumina',
    number: '08',
    title: 'Lumina Smart Living',
    description:
      'Connected IoT home management suite with intuitive voice & touch automation, ambient environmental monitoring, and intelligent energy conservation.',
    tag: 'IoT / Hardware UI',
    client: 'Lumina Technologies',
    sector: 'Smart Home & Cleantech',
    year: '2025',
    services: ['Hardware Touch UI', 'Mobile & Tablet App', 'Energy Analytics', 'Design System'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    problem: {
      title: 'The problem',
      description:
        'Smart home devices are notoriously fragmented across incompatible ecosystem hubs, causing configuration fatigue, conflicting automations, and unnecessary residential energy consumption.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    solution: {
      title: 'The solution',
      description:
        'We designed a unified spatial interface for touch-screen wall panels and mobile devices that automatically adapts room lighting, temperature, and solar battery storage based on occupancy and weather forecasts.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    },
    impact: {
      title: 'The impact',
      description:
        'Households reduced baseline electrical heating and cooling costs by 31%, with Lumina winning the 2025 Red Dot Award for Connected Product Design.',
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

