// Single source of truth for copy that appears in more than one place.
// Sourced directly from Densey's CV — nothing here is placeholder content.

export const profile = {
  name: "Densey Zenel Maben",
  shortName: "Densey Zenel",
  role: "Data Analyst",
  email: "denseyzenel@gmail.com",
  phone: "+44 7818 924129",
  linkedin: "https://www.linkedin.com/in/denseyzenelmaben/",
  location: "Stirling, UK",
  timezone: "GMT",
  year: "2026",
  summary:
    "Data Analyst with 3+ years at Capgemini Technology Services validating, transforming and reporting on large, complex datasets with 10000+ daily records across financial services and retail. The MSc in Data Science for Business with a Distinction came after, so I'd understand the maths behind why those numbers moved the way they did. Capgemini gave me their Passionate Young Professional Certification along the way. I work in Python, SQL and Power BI and I'd rather trace a number back to its root cause than accept it at face value. If a figure looks even slightly off to me, I will not let it go until I know why"};

export const heroCopy = {
  eyebrow: "Portfolio 2026 · Data Analytics · Open to work",
  lead: "If a number looks suspicious, I will interrogate it until it confesses.",
  sub: "Data Analyst working across SQL, Python and Power BI. I validate messy data, trace anomalies to root cause, and turn it into reporting people trust. ",
};

export const navLinks = [
  { number: "01", label: "About", href: "/about" },
  { number: "02", label: "Project", href: "/#work" },
  { number: "03", label: "Contact", href: "/#contact" },
];

export const howIWork = [
  {
    number: "01",
    title: "Question first",
    body: "I ask what the stakeholder actually needs to decide before I work on any tool. Nobody needs a dashboard I just enjoyed building.",
  },
  {
    number: "02",
    title: "Trace it down",
    body: "An anomaly is never just a flag. It's SQL, Python and reconciliation until I know exactly where it came from.",
  },
  {
    number: "03",
    title: "Explain it clean",
    body: "No jargon, no forty-tab spreadsheet that only I can navigate. If I can't explain a number in one sentence, I don't understand it well enough yet. I've presented the said numbers to stakeholders in Hong Kong, Taiwan and Japan and gotten the same nod from both. That only happens when the underlying work holds up, not just the slide",
  },
];

export const skillsTicker = [
  "SQL",
  "Python",
  "R",
  "Power BI",
  "Machine Learning",
  "Java",
  "Angular",
  "React",
  "SAS",
  "Statistical Forecasting",
  "PostgreSQL",
  "Azure",
  "Data Governance",
  "Risk & Controls",
  "Advanced Excel",
  "MongoDB",
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Oud Studio",
    role: "Senior Sales Advisor",
    period: "November 2025 – Present",
    location: "United Kingdom",
    points: [
      "Improved sales conversion by 10–15% by analysing customer purchasing patterns across 40+ daily interactions and identifying the trends that drove results.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Senior Data Analyst — Retail Market Client, Hong Kong & Japan",
    period: "February 2023 – September 2024",
    points: [
      "Produced clear and accurate reports and visualisations supporting decisions for senior stakeholders across two markets, by writing and maintaining SQL and Python scripts that validated, transformed and enriched 10,000+ daily transaction records.",
      "Reduced manual reporting effort by 40% by collaborating with stakeholders to understand data requirements and translating them into transformation logic and structured, repeatable data processes in SQL and advanced Excel.",
      "Strengthened data quality and governance over business reporting, reducing inconsistencies reaching stakeholders, by performing cross-systems reconciliation and quality checks within Agile sprint cycles and tracing anomalies to root cause before publication.",
      "Maintained data integrity across 4 brands and 16 stores, by configuring the Cegid platform, resolving data issues in cross-market data flows and documenting the fixes applied.",
      "Communicated findings in a concise, structured and accessible way, presenting analysis in PowerPoint to non-technical stakeholders in two regions while managing own workload across competing market deadlines.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Financial Data Analyst — Financial Services Client",
    period: "September 2022 – November 2022",
    points: [
      "Ensured data integrity across customer transaction datasets in a regulated, audited financial services environment by applying SQL based validation, quality checks and reconciliation against internal operating controls and supporting regulatory reporting and audit queries.",
      "Improved reporting reliability and contributed to continuous improvement of data processes, with control improvements adopted by the client team, by resolving data issues through structured root cause analysis and translating findings into clear proposals for stakeholders.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Analyst",
    period: "August 2021 – August 2022",
    points: [
      "Delivered a 3-stage approval workflow application using Java, Angular and PostgreSQL by analysing requirements, defining business rules, and validating system behaviour and data outputs against specification across sprint cycles.",
      "Accelerated onboarding by guiding 9 team members through structured training on workflow logic, data validation and delivery practices.",
    ],
  },
];

export type VolunteeringItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
};

export const volunteering: VolunteeringItem[] = [
  {
    company: "NLC UPC",
    role: "Media Team",
    period: "April 2026 – Present",
    location: "United Kingdom",
    points: [
      "Produced and edited video content for social media, including event highlights and promotional material, using Adobe Premiere Pro and After Effects.",
      "Collaborated with the media team to develop creative concepts and storyboards for video projects, ensuring alignment with the organization's brand and messaging.",
      "Photography and videography for events, capturing high-quality images and footage to be used in marketing materials and social media campaigns.",
      "Sound mixer and audio engineer for live events, ensuring clear and balanced sound for presentations, performances, and recordings.",
      "Managed and maintained media equipment, including cameras, microphones, and lighting, ensuring all equipment was in good working condition and ready for use.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Analyst Intern",
    period: "Feb 2021 – May 2021",
    location: "India",
    points: [
      "Worked with a team of 4 to develop a frame and lens for Lenskart application, using Java and React, and presented the final product to senior stakeholders.",
      "Worked with a team of 3 to develop an Arogya Niketan website which helps user find nearest hospital and doctors, using HTML, CSS, JavaScript and Angular, and presented the final product to senior stakeholders.",
      "Conducted research on the latest trends in the eyewear industry and healthcare industry to present findings to the team, contributing to the development of new product ideas.",
      "Assisted in the testing and debugging of the website, identifying and resolving issues to ensure a smooth user experience.",
    ],
  },
  {
    company: "Inmovidu Technology",
    role: "Data Science Intern",
    period: "May 2020 – June 2020",
    location: "Remote",
    points: [
    "Conducted EDA and trained ML models on Titanic dataset to predict survival rates achieving 79% prediction accuracy.",
    "Used Python (Pandas, NumPy, Seaborn, Scikit-learn) for data analysis and visualisation. ",
    "Documented the end-to-end process, ensuring 100% reproducibility and clarity for technical and non-technical stakeholders."  
    ],
  },
  {
    company: "NMAM Institute of Technology, Nitte",
    role: "Electronics Engineering Intern",
    period: "July 2019",
    location: "Remote",
    points: [
    "Worked on several projects based on Arduino and IOT(Internet of Things), including creating an alarm system prototype for a smart home  increasing detection accuracy by 30%.",
    "Designed and implemented an IoT-enabled smart irrigation system prototype for automated water management reducing manual effort by 40%.",
    "Operated CNC machines for automated manufacturing, enhancing precision by 20%."  
    ],
  }
];

export type EducationItem = {
  school: string;
  qualification: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    school: "University of Stirling, United Kingdom",
    qualification: "MSc Data Science for Business (Distinction)",
    period: "September 2024 – November 2025",
    detail:
      "Relevant coursework: Machine Learning, Representing and Manipulating Data, Statistics with R, Business Analytics.",
  },
  {
    school: "NMAM Institute of Technology, Nitte",
    qualification: "BEng Electronics and Communication Engineering (2:1)",
    period: "August 2018 – August 2021",
    detail:
      "Relevant coursework: Artificial Intelligence, Embedded Systems, Machine Learning, Computer Communication Networks.",
  },
];

export const skillGroups = [
  {
    title: "Analysis & Modelling",
    items: [
      "Machine Learning",
      "Statistical Analysis & Forecasting",
      "Trend and Pattern Analysis",
      "Risk Classification",
      "Geospatial Analysis",
    ],
  },
  {
    title: "Languages & Tools",
    items: ["SQL", "Python", "R", "Java", "Angular", "React", "SAS", "PostgreSQL", "MongoDB", "Azure", "Git"],
  },
  {
    title: "Reporting & Platforms",
    items: [
      "Power BI",
      "Advanced Excel (Macros, XLOOKUP, VLOOKUP, validation checks)",
      "KPI Reporting",
    ],
  },
  {
    title: "Quality, Governance & Delivery",
    items: [
      "Data Validation, Quality Checks and Reconciliation",
      "Root Cause Analysis",
      "Data Integrity",
      "Risk and Controls",
      "Data Governance",
      "Stakeholder Engagement",
      "Agile Delivery",
    ],
  },
];

export const certifications = [
  "Microsoft Power BI",
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Data Science and ML for Python",
  "Microsoft Azure AI Essentials",
  "Agile Software Development",
];

export const awards = [
  {
    title: "Passionate Young Professional Certification",
    issuer: "Capgemini Technology Services",
  },
];
