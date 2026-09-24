export interface Book {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  imagePath: string;
  purchaseStatus: 'AVAILABLE' | 'INQUIRY_ONLY';
  selarUrl?: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
}

export interface Initiative {
  title: string;
  description: string;
  status: 'CURRENT' | 'IN_DEVELOPMENT' | 'LONG_TERM_VISION';
  highlights: string[];
}

export const SITE_CONFIG = {
  brandLabel: 'DITO RISE Movement',
  tagline: 'Fixing Minds. Building Legacies.',
  philosophy: 'A Generation Elevated',
  hero: {
    heading: 'Transforming Lives Through Mindset & Character Development',
    subheading: 'DITO RISE is a global educational movement committed to empowering individuals with timeless principles of wisdom, leadership, and personal mastery.',
    primaryCtaText: 'Explore Publications',
    primaryCtaLink: '#books',
    secondaryCtaText: 'Join the Movement',
    secondaryCtaLink: '#about',
  },
  founderStory: {
    title: 'Why DITO RISE Exists',
    subtitle: 'The Vision & Purpose',
    foundationalReason: 'DITO RISE was founded on the conviction that real societal change starts with internal transformation. When a person aligns their mind, character, and vision, they become an unstoppable force for good.',
    futureVision: 'Our vision is to build an ecosystem of books, academy programs, and community initiatives that equip leaders across generations to live purpose-driven, impactful lives.',
  },
  founderKeynote: {
    quote: 'When you fix a mind, you set a life on course. When you elevate character, you build a generation.',
    author: 'DITO RISE Founder',
    role: 'Visionary & Author',
  },
  pillars: [
    { id: '1', title: 'Mindset Mastery', description: 'Cultivating mental clarity, focus, and emotional resilience.' },
    { id: '2', title: 'Character Building', description: 'Instilling integrity, discipline, and personal responsibility.' },
    { id: '3', title: 'Purposeful Living', description: 'Helping individuals discover and align with their core calling.' },
    { id: '4', title: 'Leadership Excellence', description: 'Developing visionary leaders who serve and elevate others.' },
    { id: '5', title: 'Financial Wisdom', description: 'Understanding wealth, stewardship, and economic independence.' },
    { id: '6', title: 'Legacy & Impact', description: 'Creating lasting generational value through purposeful action.' },
    { id: '7', title: 'Community & Unity', description: 'Fostering collective growth under the truth that We Are One.' },
  ] as Pillar[],
  academy: {
    badge: 'DITO RISE Academy',
    title: 'Transformational Learning Programs',
    identityStatement: 'Providing structured mentorship, courses, and workshops to help individuals unlock their full human potential.',
    currentFocusTitle: 'Leadership & Mindset Curriculum',
    currentFocusDescription: 'An immersive program designed for emerging leaders, students, and professionals.',
    currentHighlights: [
      'Interactive Mentorship Sessions',
      'Personal Mastery Frameworks',
      'Peer Collaboration Networks',
      'Actionable Growth Blueprints',
    ],
    inDevelopmentNote: 'New academy tracks are currently being developed to expand global reach.',
  },
  books: [
    {
      id: '1',
      title: 'Fix Your Mind',
      subtitle: 'Mastering Internal Dialogue',
      category: 'Mindset',
      description: 'A practical guide to rewiring your thoughts for clarity, purpose, and peak performance.',
      imagePath: '/book-fix-your-mind.png',
      purchaseStatus: 'AVAILABLE',
      selarUrl: 'https://selar.co',
    },
    {
      id: '2',
      title: 'Built For Billions',
      subtitle: 'Unlocking Unlimited Potential',
      category: 'Personal Development',
      description: 'Discover the principles needed to build high-value character and enduring success.',
      imagePath: '/book-built-for-billions.png',
      purchaseStatus: 'AVAILABLE',
      selarUrl: 'https://selar.co',
    },
    {
      id: '3',
      title: 'The Intentional Mind',
      subtitle: 'Living With Absolute Purpose',
      category: 'Strategy',
      description: 'A deep dive into living intentionally in a world full of distractions.',
      imagePath: '/book-the-intentional-mind.png',
      purchaseStatus: 'AVAILABLE',
      selarUrl: 'https://selar.co',
    },
    {
      id: '4',
      title: 'We Are One',
      subtitle: 'The Collective Movement',
      category: 'Philosophy',
      description: 'Understanding the power of unity, shared responsibility, and communal elevation.',
      imagePath: '/book-we-are-one.png',
      purchaseStatus: 'AVAILABLE',
      selarUrl: 'https://selar.co',
    },
  ] as Book[],
  initiatives: [
    {
      title: 'Youth Mindset Outreach',
      description: 'Bringing transformational materials to schools, universities, and youth centers.',
      status: 'CURRENT',
      highlights: ['Student Book Donations', 'Mindset Workshops', 'Mentorship Programs'],
    },
    {
      title: 'Digital Academy Platform',
      description: 'An online hub offering video courses and downloadable growth resources.',
      status: 'IN_DEVELOPMENT',
      highlights: ['Self-Paced Courses', 'Community Forums', 'Live Q&A Sessions'],
    },
    {
      title: 'Global Leadership Summit',
      description: 'An annual gathering bringing together visionaries across various industries.',
      status: 'LONG_TERM_VISION',
      highlights: ['Keynote Addresses', 'Global Networking', 'Impact Awards'],
    },
  ] as Initiative[],
  contact: {
    phone: '233245681145',
    directPhone: '+233 53 017 1190',
    whatsappFormatted: '+233 24 568 1145',
    whatsappWelcomeMessage: 'Hello, I would like to make an inquiry regarding DITO RISE.',
  },
  support: {
    momoNetwork: 'MTN Mobile Money',
    momoNumber: '+233 53 609 9813',
    momoName: 'Stephen Appiah',
    reference: 'DITO RISE',
    note: 'Your financial support directly fuels our educational outreach and book distribution efforts.',
  },
};