export interface Service {
  id: number;
  slug: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  imageSrc?: string;
  imagePlaceholder?: string;
  maintenanceNote?: string;
  youtubeIds?: string[];
  layout: "left" | "right";
}

export const services: Service[] = [
  {
    id: 1,
    slug: "web-development",
    title: "Web Development",
    description:
      "We build full-stack, front-end, back-end, and conversion-focused landing pages tailored to your business needs.",
    features: [
      "Full-Stack Development",
      "E-Commerce Solutions",
      "Custom Landing Pages",
      "Shopify Websites",
    ],
    cta: "Discuss Your Website",
    ctaHref: "#contact",
    imageSrc: "/images/web-dev-space.gif",
    maintenanceNote:
      "Ongoing Website Maintenance: After we build your website, Reislab can continue maintaining and updating it for BDT 3,500/month.",
    layout: "left",
  },
  {
    id: 2,
    slug: "graphics-design",
    title: "Graphics Design",
    description:
      "Premium visual assets that make your brand stand out across all digital and print platforms.",
    features: [
      "Custom Logo Design",
      "Banners & Posters",
      "Product Images",
      "Social Media Creatives",
    ],
    cta: "Get a Design Quote",
    ctaHref: "#contact",
    imageSrc: "/images/graphics-visual.jpg",
    layout: "right",
  },
  {
    id: 3,
    slug: "video-editing",
    title: "Video Editing",
    description:
      "High-retention editing for YouTube, Shorts, and Reels. We cut, color-grade, and pace your videos for maximum engagement.",
    features: [
      "YouTube Long-form",
      "YouTube Shorts",
      "Instagram Reels",
      "Social Media Ads",
    ],
    cta: "Start a Video Project",
    ctaHref: "#contact",
    imageSrc: "/images/video-editing-film.jpg",
    layout: "left",
  },
  {
    id: 4,
    slug: "ai-video-generation",
    title: "AI Video Generation",
    description:
      "English-only animated stories and AI-generated shorts to keep your audience hooked with fresh content.",
    features: [
      "Animated Stories",
      "AI Shorts",
      "Visual Effects",
      "Script to Screen",
    ],
    cta: "Start an AI Project",
    ctaHref: "#contact",
    // Only the 3 YouTube videos — no big image
    youtubeIds: ["9TQx0O8HeKA", "Fv5VknCZKL8", "xdj5PL0t61k"],
    layout: "right",
  },
  {
    id: 5,
    slug: "vocal-audio-editing",
    title: "Vocal & Audio Editing",
    description:
      "We turn raw, noisy recordings into crisp, broadcast-ready audio for podcasts, videos, and voiceovers.",
    features: [
      "Noise Reduction",
      "Audio Balancing",
      "Podcast Editing",
      "Voice Enhancement",
    ],
    cta: "Clean Your Audio",
    ctaHref: "#contact",
    imageSrc: "/images/vocal-headphones.jpg",
    layout: "left",
  },
  {
    id: 6,
    slug: "legal-document-translation",
    title: "Legal & Document Translation",
    description:
      "Accurate translation services for immigration, travel, and study abroad documentation.",
    features: [
      "Legal Documents",
      "Travel & Visa Papers",
      "Academic Transcripts",
      "Employment Contracts",
    ],
    cta: "Translate a Document",
    ctaHref: "#contact",
    imageSrc: "/images/doc-laptop.png",
    layout: "right",
  },
  {
    id: 7,
    slug: "advertising-campaigns",
    title: "Advertising & Campaigns",
    description:
      "Data-driven ad campaigns across Meta, Google, and TikTok to bring you high-quality leads and sales.",
    features: ["Meta Ads", "Google Ads", "TikTok Ads", "Campaign Strategy"],
    cta: "Launch an Ad Campaign",
    ctaHref: "#contact",
    imageSrc: "/images/advertising-standout.jpg",
    layout: "left",
  },
  {
    id: 8,
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "Complete management for Facebook, Instagram, and TikTok. We handle the posting, you handle the business.",
    features: [
      "Content Planning",
      "Page Management",
      "Scheduling",
      "Engagement",
    ],
    cta: "Manage My Pages",
    ctaHref: "#contact",
    imageSrc: "/images/social-phone.jpg",
    layout: "right",
  },
];
