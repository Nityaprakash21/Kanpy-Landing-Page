import csimg1 from '../src/assets/CS1/1.png';
import csimg2 from '../src/assets/CS1/2.jpg';
import csimg3 from '../src/assets/CS1/3.png';
import csimg4 from '../src/assets/CS1/4.png';
import csimg5 from '../src/assets/CS1/5.png';
import csimg6 from '../src/assets/CS1/6.png';
import csimg7 from '../src/assets/CS1/7.png';
import csimg8 from '../src/assets/CS1/8.png';
import cs2img1 from '../src/assets/CS2/1.png';
import cs2img2 from '../src/assets/CS2/2.jpeg';
import cs2img3 from '../src/assets/CS2/3.png';
import cs2img4 from '../src/assets/CS2/4.png';
import cs2img5 from '../src/assets/CS2/5.png';
import cs2img6 from '../src/assets/CS2/6.jpeg';
import cs2img7 from '../src/assets/CS2/7.jpeg';
import cs2img8 from '../src/assets/CS2/8.jpeg';
import cs3img1 from '../src/assets/CS3/1.png';
import cs3img2 from '../src/assets/CS3/2.jpeg';
import cs3img3 from '../src/assets/CS3/3.jpeg';
import cs3img4 from '../src/assets/CS3/4.png';
import cs3img5 from '../src/assets/CS3/5.png';
import cs3img6 from '../src/assets/CS3/6.jpeg';
import cs3img7 from '../src/assets/CS3/7.png';
import cs3img8 from '../src/assets/CS3/8.jpeg';

export interface CaseStudy {
  slug: string;
  title: string;
  oneLineSummary: string;
  services: string[];
  metricHighlight: string;
  thumbnail: string;
  company: string;
  website?: string;
  clientInfo?: string;
  problem: string;
  problemPoints: string[];
  problemImage?: string;
  whatWeDid: {
    title: string;
    description: string;
    result: string;
    image?: string;
  }[];
  impact: {
    label: string;
    stats: string;
  }[];
  outcome: string[];
  brandGallery?: string[];
  finalBrandAsset?: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: 'connecta',
    title: 'ConnectA , Brand + Growth Launch\n(0 → Audience + Leads)',
    oneLineSummary: 'Establishing a high-signal brand identity and founder distribution engine from scratch.',
    services: ['Company Branding', 'Personal Branding', 'Growth Marketing', 'Content + Distribution', 'Profile Optimization'],
    metricHighlight: '0 → Audience + Leads',
    thumbnail: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786828/1_ydzfcm.png',
    company: 'ConnectA',
    website: 'https://www.instagram.com/connecta___',
    problem: 'ConnectA was starting fresh and needed to build trust, authority, and momentum fast in a crowded networking space.',
    problemPoints: [
      'A clear brand identity + positioning',
      'Strong founder-led personal branding',
      'Social channels that don’t look “new”',
      'Content + distribution that drives attention fast',
      'Early traction to prove momentum'
    ],
    problemImage: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786949/2_kjlo9x.png',
    whatWeDid: [
      {
        title: 'Brand Identity & Positioning',
        description: 'Built logo identity system, typography (Futura + DM Sans), color system + brand psychology, and visual concept guidelines.',
        result: 'A consistent brand that looks premium from Day 1.',
        image: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786821/6_p6vlo1.png'
      },
      {
        title: 'Founder Personal Branding System',
        description: 'Set up personal brand positioning, profile optimization, content pillars, and narrative style.',
        result: 'Founder becomes the distribution engine.',
        image: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786831/7_ylmhzz.png'
      },
      {
        title: 'Content + Growth Execution',
        description: 'Executed LinkedIn content strategy, high-retention content formats, and content design direction.',
        result: 'Social pages started scaling immediately.',
        image: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786825/8_w8yxxi.png'
      }
    ],
    impact: [
      { label: 'LinkedIn (First 28 Days)', stats: '136K impressions 88.6K reached' },
      { label: 'Twitter/X (First 2 Months)', stats: '60.8K impressions 5.4% engagement' },
      { label: 'Growth Momentum', stats: '16.3K reached 25.6K views' }
    ],
    outcome: ['established', 'trustworthy', 'high-signal', 'built for inbound growth'],
    brandGallery: [
      'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786826/3_y239xo.png',
      'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786821/4_zeqcv5.png',
      'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786829/5_lphzo2.png'
    ]
  },
  {
    slug: 'eb-bari',
    title: 'Ekhlaque Bari, Personal Brand + Authority Growth (LinkedIn + X)',
    oneLineSummary: 'Sharpening a public narrative to transform expertise into global thought leadership.',
    services: ['Personal Branding', 'Social Brand Identity', 'Positioning', 'Audience Strategy', 'Content + Creatives', 'Growth Marketing'],
    metricHighlight: '2.4M Impressions',
    thumbnail: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786178/1_aasr5h.png',
    company: 'Ekhlaque Bari',
    clientInfo: 'Ekhlaque Bari (AI Coach / Advisor / Founder)',
    problem: 'EB had strong expertise but needed a sharper public narrative to attract high-quality inbound opportunities and industry recognition.',
    problemPoints: [
      'A clear AI thought-leader identity',
      'The right audience (not random reach)',
      'Content that feels consistent + premium',
      'Social presence that converts into real opportunities'
    ],
    problemImage: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786174/2_c56tgm.jpg',
    whatWeDid: [
      {
        title: 'Built Social Brand Identity',
        description: 'Created visual direction, brand tone + messaging alignment, and content design consistency.',
        result: 'EB’s content started looking like a serious media asset.',
        image: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786180/6_amdrpj.jpg'
      },
      {
        title: 'Defined Positioning & Audience',
        description: 'Clarified AI adoption use-cases and established high-credibility content pillars.',
        result: 'Higher-quality inbound attention.',
        image: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786181/7_uhyeii.jpg'
      },
      {
        title: 'Managed Multi-Channel Execution',
        description: 'Handled LinkedIn + X strategy, creative direction, and posting rhythm.',
        result: 'A reliable distribution engine that compounds.',
        image: 'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786178/8_ytgsuq.jpg'
      }
    ],
    impact: [
      { label: 'LinkedIn Reach', stats: '2.4M impressions, 1M+ members reached' },
      { label: 'Twitter/X Engagement', stats: '422.6K impressions, 8.6K engagements' },
      { label: 'Conversion', stats: 'Speaking slots at IIM, ISB, and RedBus' }
    ],
    outcome: ['Credible AI voice offline', 'Speaking at top institutes', 'High-tier industry recognition'],
    brandGallery: [
      'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786174/3_canqt8.png',
      'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786177/4_gaanfz.png',
      'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786175/5_rs8dmw.png'
    ]
  },
  {
    slug: 'goldenflitch',
    title: 'Goldenflitch, Founder-led Marketing + Company Growth (LinkedIn + X)',
    oneLineSummary: 'Driving consistent visibility and inbound trust through a founder-led distribution engine.',
    services: ['Founder-led Marketing', 'Personal Branding', 'Company Branding', 'LinkedIn Strategy', 'X Growth', 'Content + Distribution'],
    metricHighlight: '112.1% Growth Achieved',
    thumbnail: "https://res.cloudinary.com/dwrev9agk/image/upload/v1771786189/1_saggg5.png",
    company: 'Goldenflitch (Design + Creative Studio)',
    problem: 'Goldenflitch needed to grow through trust + visibility without relying on traditional paid advertising in the competitive design market.',
    problemPoints: [
      'Strong company presence',
      'Founder-led marketing that feels authentic',
      'Content engine that compounds attention',
      'Higher discovery beyond existing network'
    ],
    problemImage: "https://res.cloudinary.com/dwrev9agk/image/upload/v1771786193/2_z3k4p9.jpg",
    whatWeDid: [
      {
        title: 'Company Page Growth',
        description: 'Managed LinkedIn company page and X company account to establish discovery.',
        result: 'Consistent brand presence + steady discovery.',
        image: "https://res.cloudinary.com/dwrev9agk/image/upload/v1771786192/6_bow4x4.jpg"
      },
      {
        title: 'Founder-led Marketing System',
        description: 'Founder positioned as design voice using storytelling with clear opinions for trust building.',
        result: 'Better inbound conversations + stronger recall.',
        image: "https://res.cloudinary.com/dwrev9agk/image/upload/v1771786195/7_jdnijt.png"
      },
      {
        title: 'Content Strategy & Creative',
        description: 'Handled content planning, post creation, and clean/premium visual direction.',
        result: 'Repeatable engine, not one-off posts.',
        image: "https://res.cloudinary.com/dwrev9agk/image/upload/v1771786191/8_eiccjm.jpg"
      }
    ],
    impact: [
      { label: 'Growth Rate', stats: '112.1% growth in 12 months' },
      { label: 'Total Reach', stats: '377,127 impressions, 132K reach' },
      { label: 'Follower Growth', stats: '2,787 new high-intent followers' }
    ],
    outcome: ['consistent visibility', 'founder-led authority', 'inbound trust', 'growth beyond followers'],
    brandGallery: [
      'https://res.cloudinary.com/dwrev9agk/image/upload/v1771786195/3_wkvfo9.jpg',
      "https://res.cloudinary.com/dwrev9agk/image/upload/v1771786190/4_ja5hl8.png",
      "https://res.cloudinary.com/dwrev9agk/image/upload/v1771786189/5_j3qg5o.png"
    ]
  }
];
