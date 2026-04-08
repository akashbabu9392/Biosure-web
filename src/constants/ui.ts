export const biosureLanding = {
  multi: {
    switcherLabel: "Choose workspace",
    options: [
      { id: "labs" as const, label: "Labs" },
    ],
  },
  nav: {
    items: [
      { id: "features", label: "Features" },
      { id: "workflow", label: "How It Works" },
      { id: "compare", label: "Compare" },
      { id: "pricing", label: "Pricing" },
      { id: "testimonials", label: "Customers" },
    ],
    signInLabel: "Sign in",
    primaryCtaLabel: "Start for free →",
  },
  hero: {
    badge: "Purpose-built for Environmental Monitoring Labs",
    titleBeforeEm: "From sample intake to",
    titleEm: "signed report",
    titleAfter: "in minutes",
    sub:
      "BioSure is the cloud LIMS built for USP 797 compliance. Ditch the Excel spreadsheets, Word templates, and email chains. Automate your lab's entire sample-to-report workflow — with a free client portal included.",
    primaryCta: "Start free trial",
    secondaryCta: "Watch 3-min demo",
    dashboardPreview: {
      src: "/dashboard.jpeg",
      alt: "BioSure dashboard preview",
    },
    trustItems: [
      "No credit card required",
      "14-day free trial",
      "Client portal always free",
      "Setup in under a day",
    ],
  },
  logos: {
    label: "Trusted by independent labs and compounding pharmacies",
    items: [
      "RxPlus Pharmacy",
      "ClearMed Compounding",
      "Summit Health Labs",
      "PureLife Analytics",
      "NovaBio Testing",
      "CrestPath Labs",
    ],
  },
  features: {
    badge: "⚡ Features",
    title: "Everything your lab needs. Nothing you don't.",
    sub:
      "BioSure replaces a messy stack of spreadsheets, Word docs, and email threads with a single, purpose-built platform that your whole team — and your clients — can use.",
    miniBars: [40, 65, 45, 80, 55, 90, 70, 60, 85, 75, 95, 88],
    cards: [
      {
        layout: "span2Tall" as const,
        iconId: "chainOfCustody",
        title: "Chain of Custody, Fully Digital",
        desc:
          "Create, submit, and track CoC forms electronically. No more handwritten forms, lost paperwork, or re-keying data. Every sample is tracked from submission through result entry with a complete audit trail.",
        tag: "✓ Full CRUD · PDF Generation · Audit Trail",
      },
      {
        layout: "normal" as const,
        iconId: "pdfReports",
        title: "One-Click PDF Reports",
        desc:
          "Generate professional lab reports instantly — complete with organism IDs, plate images, floor plans, and historical trending. No third-party tool required.",
        tag: "✓ USP 797 Aligned",
      },
      {
        layout: "normal" as const,
        iconId: "clientPortal",
        title: "Free Client Portal",
        desc:
          "Your pharmacy and facility clients get their own self-service portal to submit CoC forms, access reports, and track sample status — at no extra cost. Ever.",
        tag: "✓ Always Free for Clients",
      },
      {
        layout: "normal" as const,
        iconId: "analytics",
        title: "Historical Trending & Analytics",
        desc:
          "Statistical analysis with z-scores surfaces contamination patterns across sampling events before they become action-level excursions.",
        tag: "✓ Z-score Analysis",
      },
      {
        layout: "normal" as const,
        iconId: "notifications",
        title: "Real-Time Notifications",
        desc:
          "Socket.IO-powered live alerts and email queues keep lab staff and client companies in sync — the moment a report is uploaded or approved, everyone knows.",
        tag: "✓ Socket.IO + Email Queue",
      },
      {
        layout: "normal" as const,
        iconId: "rbac",
        title: "Granular RBAC Permissions",
        desc:
          "Role-based access control with per-user overrides spans five roles across three org tiers: Super Admin, Lab Admin, Lab Employee, Company Admin, and Company Employee.",
        tag: "✓ Electronic Signatures",
      },
    ],
  },
  workflow: {
    badge: "🔄 Workflow",
    title: "From sample intake to delivered report — automated.",
    sub:
      "BioSure maps your real-world environmental monitoring workflow into a clean, sequential process your whole team can follow.",
    steps: [
      {
        num: "01",
        title: "Client Submits CoC",
        desc:
          "Pharmacy submits a digital chain-of-custody form through their self-service portal. All location, personnel, and media lot data captured automatically.",
      },
      {
        num: "02",
        title: "Lab Receives Samples",
        desc:
          "Lab technicians review incoming CoC forms, enter incubation data, CFU counts, and organism identifications. Plate images uploaded directly from the bench.",
      },
      {
        num: "03",
        title: "Report Generated",
        desc:
          "Lab admin reviews results and clicks Generate. A professional PDF report — including floor plans, trending data, and electronic signatures — is created in seconds.",
      },
      {
        num: "04",
        title: "Client Notified Instantly",
        desc:
          "Client receives a real-time notification and email. They log into their portal, view the report, leave comments, and download — no phone calls needed.",
      },
    ],
  },
  compare: {
    badge: "📐 Comparison",
    title: "Why labs choose BioSure over the alternatives",
    sub:
      "Enterprise LIMS cost 5–10× more and take months to implement. Spreadsheets don't scale. BioSure is purpose-built, affordable, and live in days.",
    columns: {
      feature: "Feature",
      biosure: "🟢 BioSure",
      qbench: "QBench ($275/user)",
      legacy: "LabWare / LabVantage",
    },
    rows: [
      {
        feature: "USP 797 Purpose-Built Workflows",
        biosure: { type: "yes" as const, label: "✓" },
        qbench: { type: "partial" as const, label: "Generic" },
        legacy: { type: "no" as const, label: "—" },
      },
      {
        feature: "Integrated Client Portal",
        biosure: { type: "yes" as const, label: "✓ Free" },
        qbench: { type: "no" as const, label: "—" },
        legacy: { type: "no" as const, label: "—" },
      },
      {
        feature: "One-Click PDF Report Engine",
        biosure: { type: "yes" as const, label: "✓" },
        qbench: { type: "yes" as const, label: "✓" },
        legacy: { type: "partial" as const, label: "Add-on" },
      },
      {
        feature: "Real-Time Notifications",
        biosure: { type: "yes" as const, label: "✓" },
        qbench: { type: "partial" as const, label: "Email only" },
        legacy: { type: "no" as const, label: "—" },
      },
      {
        feature: "Historical Trending (z-scores)",
        biosure: { type: "yes" as const, label: "✓" },
        qbench: { type: "partial" as const, label: "Basic" },
        legacy: { type: "yes" as const, label: "✓" },
      },
      {
        feature: "Starting Price",
        biosure: { type: "highlight" as const, label: "$99/user/mo" },
        qbench: { type: "highlightRed" as const, label: "$275/user/mo" },
        legacy: { type: "highlightRed" as const, label: "$7,900+ perpetual" },
      },
      {
        feature: "Time to Go Live",
        biosure: { type: "highlight" as const, label: "1–3 days" },
        qbench: { type: "no" as const, label: "2–4 weeks" },
        legacy: { type: "highlightRed" as const, label: "6–18 months" },
      },
      {
        feature: "Cloud Native (No Installation)",
        biosure: { type: "yes" as const, label: "✓" },
        qbench: { type: "yes" as const, label: "✓" },
        legacy: { type: "partial" as const, label: "Optional" },
      },
    ],
  },
  roi: {
    badge: { iconId: "roi", label: "ROI" },
    title: "BioSure pays for itself in the first month.",
    sub:
      "For a typical 5-person environmental monitoring lab, the hours saved on manual report generation and client communication alone exceed the cost of BioSure by 3–5×.",
    table: {
      header: ["Cost Category", "Manual", "BioSure"],
      rows: [
        {
          label: "Report generation labor",
          manual: "$13,000/yr",
          biosure: "$0",
          meta:
            "5 hrs/week × $50/hr",
          manualType: "manual" as const,
          biosureType: "coreqc" as const,
        },
        {
          label: "Client communication",
          manual: "$7,800/yr",
          biosure: "$0",
          meta:
            "3 hrs/week × $50/hr",
          manualType: "manual" as const,
          biosureType: "coreqc" as const,
        },
        {
          label: "Data entry & tracking",
          manual: "$10,400/yr",
          biosure: "$2,600/yr",
          meta: "Reduced 75%",
          manualType: "manual" as const,
          biosureType: "coreqc" as const,
        },
        {
          label: "Compliance risk",
          manual: "$5–25k/yr",
          biosure: "$0",
          meta: "Per audit finding",
          manualType: "manual" as const,
          biosureType: "coreqc" as const,
        },
        {
          label: "Total Annual Cost",
          manual: "~$56,200",
          biosure: "~$11,500*",
          meta: "",
          manualType: "boldManual" as const,
          biosureType: "boldCoreqc" as const,
        },
      ],
      footnote:
        "* Includes $8,940/yr Professional plan (5 users) + reduced data entry",
    },
    callout: {
      number: "5×",
      titleStrong: "Average ROI for a 5-person lab",
      description:
        "BioSure customers recover $27,000–$47,000/year compared to manual processes — in the first year alone.",
    },
    bullets: [
      {
        iconId: "timeSaved",
        title: "2–3 hours saved per report",
        desc:
          "Report generation drops from hours to seconds. At 48 reports/month, that's 96–144 hours of freed-up lab time every month.",
      },
      {
        iconId: "noCalls",
        title: "Zero status-update calls",
        desc:
          'Client portal self-service eliminates the constant "Is my report ready?" phone calls and emails that consume lab staff time.',
      },
      {
        iconId: "compliance",
        title: "Inspection-ready, always",
        desc:
          "Full audit trails and electronic signatures built-in. Walk into any USP 797 inspection with complete confidence in your data integrity.",
      },
    ],
  },
  pricing: {
    badge: { iconId: "pricing", label: "Pricing" },
    titleBefore: "Simple, transparent pricing.",
    titleAfter: "No surprises.",
    sub:
      "Client portal access is always free. You only pay for lab users. 60–70% below enterprise LIMS pricing.",
    earlyAdopterOffer: {
      iconId: "earlyAdopter",
      label: "Early Adopter Offer",
      message:
        "First 50 paying customers get 25% off for 12 months. | Annual commitment saves ~10% | Non-profits: 30% discount",
    },
    cards: [
      {
        name: "Free",
        amount: "$0",
        period: "forever",
        desc:
          "For solo practitioners and labs that want to explore BioSure before committing.",
        features: [
          "1 lab user",
          "1 client company, 1 location",
          "10 reports/month",
          "5 CoC forms/month",
          "1 GB storage",
          "Unlimited client portal users",
        ],
        cta: "Get started free",
        emphasis: "none" as const,
      },
      {
        name: "Starter",
        amount: "$99",
        period: "per user / month — or $89 billed annually",
        desc:
          "Small labs getting started with digital workflows. Up to 5 lab users.",
        features: [
          "Up to 5 lab users",
          "Up to 15 client companies",
          "Unlimited reports & CoC forms",
          "25 GB storage",
          "Scheduling & calendar",
          "Historical trending",
          "Real-time & email notifications",
          "Unlimited client portal users",
        ],
        cta: "Start 14-day trial",
        emphasis: "outline" as const,
      },
      {
        name: "Professional",
        amount: "$149",
        period: "per user / month — or $129 billed annually",
        desc:
          "Growing labs that need full features and more scale. Up to 25 users.",
        features: [
          "Up to 25 lab users",
          "Unlimited client companies",
          "Unlimited storage (100 GB)",
          "Template builder (unlimited)",
          "Advanced analytics",
          "API access & webhooks",
          "Priority email + live chat support",
          'Remove "Powered by BioSure"',
          "Billing & invoicing (coming soon)",
        ],
        cta: "Start 14-day trial",
        emphasis: "featured" as const,
      },
      {
        name: "Enterprise",
        amount: "Custom",
        period: "$200–275/user/month estimated",
        desc:
          "Large labs, lab networks, hospitals, and organizations with compliance mandates.",
        features: [
          "Unlimited users",
          "SSO / SAML included",
          "White-label branding",
          "Custom integrations",
          "Multi-lab hierarchy",
          "Dedicated account manager",
          "ISO 17025 / 21 CFR Part 11",
          "Phone + dedicated Slack support",
        ],
        cta: "Contact sales",
        emphasis: "none" as const,
      },
    ],
  },
  testimonials: {
    badge: { iconId: "customers", label: "Customers" },
    title: "Trusted by startups and the world's leading labs",
    sub: "Real feedback from lab directors and technicians who left spreadsheets behind.",
    titleAccent: "leading labs",
    layout: {
      cards: [
        { type: "featured" as const, testimonialIndex: 2 },
        { type: "default" as const, testimonialIndex: 0 },
        { type: "default" as const, testimonialIndex: 1 },
        { type: "default" as const, testimonialIndex: 4 },
        { type: "default" as const, testimonialIndex: 3 },
        { type: "default" as const, testimonialIndex: 5 },
        { type: "default" as const, testimonialIndex: 6 },
        { type: "default" as const, testimonialIndex: 7 },
      ],
    },
    items: [
      {
        quote:
          '"We used to spend an entire Friday afternoon generating monthly EM reports for our 18 pharmacy clients. Now it takes under an hour — and the reports look more professional than anything we produced before."',
        initials: "SC",
        name: "Dr. Sarah Chen",
        role: "Lab Director · Pacific EM Solutions",
      },
      {
        quote:
          '"The client portal is a game-changer. Our pharmacy clients used to call and email constantly asking for reports. Now they just log in and see everything themselves. It\'s actually changed how our relationships work."',
        initials: "MR",
        name: "Marcus Rodriguez",
        role: "Operations Manager · TrueTest Microbiology",
      },
      {
        quote:
          '"After the 2023 USP 797 revision, we needed to formalize our EM program fast. BioSure was live in two days and we walked into our next inspection completely confident in our audit trail. Worth every penny."',
        initials: "JP",
        name: "Jennifer Park, PharmD",
        role: "Quality Manager · ClearPath Compounding",
      },
      {
        quote:
          '"Audit trails used to be our biggest headache. Now every step is time-stamped and searchable — it\'s inspection-ready by default."',
        initials: "DK",
        name: "Daniel Kim",
        role: "Compliance Lead · Summit Health Labs",
      },
      {
        quote:
          '"We cut report turnaround time from days to hours. Clients stopped emailing for updates because the portal shows status in real time."',
        initials: "AP",
        name: "Ayesha Patel",
        role: "Lab Manager · NovaBio Testing",
      },
      {
        quote:
          '"BioSure replaced three tools and a shared spreadsheet. Our team finally has one system that actually matches our workflow."',
        initials: "JT",
        name: "Jordan Taylor",
        role: "Operations · CrestPath Labs",
      },
      {
        quote:
          '"We turned around reports faster and reduced client follow-ups in the first week. The portal alone replaced hours of status updates."',
        initials: "TB",
        name: "Theo Browne",
        role: "CEO · Rx Network Partners",
      },
      {
        quote:
          '"BioSure feels like the first tool built for modern EM labs — fast, clear, and designed around the exact workflows we run every day."',
        initials: "JB",
        name: "Julian Benegas",
        role: "CEO · Apex Compounding",
      },
    ],
  },
  cta: {
    titleBefore: "Ready to leave the",
    titleEm: "spreadsheets behind?",
    sub:
      "Join forward-thinking environmental monitoring labs that have already made the switch. Start free — no credit card required, client portal always included.",
    primaryCta: "Start your free trial",
    secondaryCta: "Schedule a demo",
    footnote: "14-day free trial · No credit card · Setup in under a day · Cancel anytime",
  },
  footer: {
    brandTagline: "",
    badges: [],
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "How It Works", href: "#workflow" },
          { label: "Compare", href: "#compare" },
          { label: "Pricing", href: "#pricing" },
          { label: "Customers", href: "#testimonials" },
        ],
      },
      {
        heading: "Account",
        links: [
          { label: "Sign in", href: "#" },
          { label: "Start for free", href: "#" },
        ],
      },
    ],
    social: {
      items: [
        { id: "x", label: "X", href: "#" },
        { id: "linkedin", label: "LinkedIn", href: "#" },
        { id: "github", label: "GitHub", href: "#" },
      ],
    },
    copyright: "© 2026 BioSure · All rights reserved",
    bottomNote: "Built for the labs that keep compounding pharmacies safe",
  },
} as const;

export type BiosureLandingVariant = "labs" | "company";

