
import {
  ScanSearch,
  Database,
  BarChart3,
  ShieldCheck,
  Cpu,
  Building2,
  FileCheck2,
  ScanLine,
  Layers3,
  ArrowRight,
  CheckCircle2,
  Printer,
  FileText,
  
  type LucideIcon,
} from "lucide-react";

type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const stats = [
  {
    value: "24+",
    label: "Years Experience",
  },
  {
    value: "10M+",
    label: "Sheets Processed",
  },
  {
    value: "500+",
    label: "Enterprise Clients",
  },
  {
    value: "99.9%",
    label: "Processing Accuracy",
  },
];

// export const stats = [
//                   {
//                     value: '24+',
//                     label: 'Years',
//                   },
//                   {
//                     value: '500+',
//                     label: 'Clients',
//                   },
//                   {
//                     value: '10M+',
//                     label: 'Sheets',
//                   },
//                   {
//                     value: '99.9%',
//                     label: 'Accuracy',
//                   },
//             ];

export const queueItems = [
  "Government Survey Batch",
  "University Exam Sheets",
  "Recruitment Assessment",
];

export const testimonials = [
  {
    name: "National Examination Authority",
    text: "Reduced manual evaluation time by over 80% using MarkReader.",
  },
  {
    name: "Leading University",
    text: "Streamlined large-scale examination processing with AI automation.",
  },
  {
    name: "Enterprise Assessment Partner",
    text: "Highly scalable platform with exceptional processing accuracy.",
  },
];

// export const services = [
//   {
//     title: "OMR Sheet Design",
//     slug: "omr-sheet-design",
//     description:
//       "Custom OMR/ICR sheet design optimized for accuracy and scalability.",
//   },
//   {
//     title: "OMR Printing",
//     slug: "omr-printing",
//     description:
//       "High-quality carbonless OMR printing solutions for institutions and enterprises.",
//   },
//   {
//     title: "OMR Scanning",
//     slug: "omr-scanning",
//     description:
//       "Fast and secure OMR scanning with intelligent processing workflows.",
//   },
//   {
//     title: "Document Digitization",
//     slug: "document-digitization",
//     description:
//       "Transform physical records into searchable digital workflows.",
//   },
//   {
//     title: "Data Processing",
//     slug: "data-processing",
//     description:
//       "Enterprise-grade processing and validation pipelines for large datasets.",
//   },
//   {
//     title: "Analytics & Reporting",
//     slug: "analytics-reporting",
//     description:
//       "Generate actionable insights using dashboards and automated reporting.",
//   },
// ];


export const services = [
  {
    title: "OMR Sheets Printing",
    slug: "omr-sheets-printing",
    description: "Enterprise-grade OMR printing solutions designed for institutions, universities and government organizations.",
    icon: Printer,
  },
  {
    title: "OMR Sheets Scanning",
    slug: "omr-sheets-scanning",
    description: "High-speed intelligent OMR scanning and processing infrastructure with enterprise-grade accuracy.",
    icon: ScanSearch,
  },

  {
    title: "OMR Sheets Designing",
    slug: "omr-sheets-designing",
    description: "Custom OMR sheet designing services optimized for enterprise assessment workflows.",
    icon: FileText,
  },

  {
    title: "Scanner Services",
    slug: "scanner-services",
    description:
      "Enterprise document scanning and workflow automation solutions for high-volume operations.",
    icon: ScanLine,
  },
];

export const features = [
  "99.9% Processing Accuracy",
  "Advanced OMR Infrastructure",
  "Enterprise Security Standards",
  "Bulk OMR Processing",
  "AI-Powered Validation",
  "Scalable Assessment Solutions",
];

export const bottomPoints = [
              "Enterprise Reliability",
              "High Accuracy Processing",
              "Government Ready Infrastructure",
          ]

// export const features = [
//   "99.9% Processing Accuracy",
//   "AI Validation Engine",
//   "Bulk OMR Processing",
//   "Real-time Analytics",
//   "Enterprise-grade Security",
//   "Cloud-native Infrastructure",
//   "OMR Sheet Printing & Scanning",
//   "Assessment Workflow Automation",
//   "Real-Time Result Analytics",
//   "Enterprise Security Standards",
//   "Scalable Evaluation Infrastructure",
//   "High-Speed Processing Systems",
// ];

export const strengths = [
  {
    title: "High Accuracy OMR Processing",
    description:
      "Advanced OMR technology delivering precise and reliable assessment processing for enterprise-scale operations.",
    icon: ScanSearch,
  },
  {
    title: "Enterprise Reliability",
    description:
      "Robust infrastructure designed for institutions, universities and government organizations with operational stability.",
    icon: ShieldCheck,
  },
  {
    title: "Automation & Intelligence",
    description:
      "AI-powered workflow automation for faster evaluation, validation and document processing operations.",
    icon: Cpu,
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Cloud-ready systems capable of handling large-scale examinations, surveys and enterprise assessment workflows.",
    icon: Layers3,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Comprehensive analytics dashboards and reporting systems for performance tracking and decision-making.",
    icon: BarChart3,
  },
  {
    title: "Government & Institutional Ready",
    description:
      "Trusted assessment infrastructure built for enterprises, educational institutions and public sector organizations.",
    icon: Building2,
  },
];


export const highlights = [
  {
    title: "OMR Sheet Designing",
    description:
      "Custom-designed OMR sheets optimized for examinations, surveys, recruitment and enterprise data collection workflows.",
    icon: ScanSearch,
  },
  {
    title: "Scanning & Processing",
    description:
      "High-speed and accurate OMR scanning infrastructure capable of processing large-scale assessment operations.",
    icon: Database,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Intelligent analytics dashboards and automated reporting systems for real-time decision making.",
    icon: BarChart3,
  },
  {
    title: "Enterprise Security",
    description:
      "Reliable and secure processing workflows designed for institutions, enterprises and government organizations.",
    icon: ShieldCheck,
  },
  {
    title: "Automation Infrastructure",
    description:
      "Scalable workflow automation reducing manual effort while improving operational efficiency and accuracy.",
    icon: Cpu,
  },
  {
    title: "Institutional Trust",
    description:
      "Trusted assessment and document processing solutions serving universities, enterprises and public sector clients.",
    icon: Building2,
  },
];


export const workflow = [
  {
    number: "01",
    title: "OMR Data Collection",
    description:
      "Collect examination sheets, surveys and assessment documents through secure enterprise workflows.",
    icon: Database,
  },
  {
    number: "02",
    title: "Intelligent Scanning",
    description:
      "High-speed OMR scanning with AI-powered validation and precision-based processing infrastructure.",
    icon: ScanLine,
  },
  {
    number: "03",
    title: "Verification & Evaluation",
    description:
      "Automated validation, quality assurance and result generation with enterprise-grade accuracy.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Analytics & Reporting",
    description:
      "Generate real-time analytics, dashboards and performance reports for decision-making workflows.",
    icon: BarChart3,
  },
];

// export const workflow = [
//   {
//     title: 'Requirement Analysis',
//     description:
//       'Understand institution requirements, response volumes and workflow expectations before execution.',
//   },

//   {
//     title: 'OMR Sheet Design',
//     description:
//       'Create optimized OMR and ICR sheet layouts for accurate scanning and large-scale assessments.',
//   },

//   {
//     title: 'High-Speed Printing',
//     description:
//       'Deliver precision printing solutions using high-quality carbonless and machine-readable formats.',
//   },

//   {
//     title: 'OMR Scanning',
//     description:
//       'Process thousands of sheets efficiently using enterprise-grade OMR scanning systems and automation.',
//   },

//   {
//     title: 'Data Validation',
//     description:
//       'Verify scanned data accuracy through intelligent validation and error-detection workflows.',
//   },

//   {
//     title: 'Analytics & Reports',
//     description:
//       'Generate structured reports, insights and export-ready datasets for institutions and organizations.',
//   },
// ]


// const workflow = [
//   {
//     title: "Upload Documents",
//     description:
//       "Upload OMR sheets, scanned forms, PDFs, and examination documents securely.",
//   },
//   {
//     title: "AI Processing",
//     description:
//       "MarkReader validates, extracts, analyzes, and processes data with intelligent automation.",
//   },
//   {
//     title: "Insights & Reports",
//     description:
//       "Generate analytics dashboards, reports, exports, and enterprise-ready insights instantly.",
//   },
// ];

export const products = [
  {
    slug: "axm960",
    name: "MarkReader AXM960",
    category: "Professional OMR Scanner",
    description:
      "High-speed OMR scanner designed for examination processing, surveys, recruitment workflows and enterprise data collection.",
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",
    highlights: [
      "Automatic Sheet Feeding",
      "High Accuracy Detection",
      "Bulk OMR Processing",
    ],
  },
  {
    slug: "axm950",
    name: "MarkReader AXM950",
    category: "Enterprise OMR Scanner",
    description:
      "Reliable and scalable OMR processing solution optimized for institutions and assessment centers.",
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",
    highlights: [
      "Fast Batch Processing",
      "Easy Maintenance",
      "Survey & Exam Ready",
    ],
  },
  {
    slug: "axm900",
    name: "MarkReader AXM900",
    category: "Compact OMR Solution",
    description:
      "Compact desktop OMR scanner suitable for schools, coaching institutes and small-scale evaluations.",
    image: "https://omr.in/images/Mark-Reader-AXM960.jpg",
    highlights: [
      "Compact Design",
      "Quick Setup",
      "Reliable Performance",
    ],
  },
];
