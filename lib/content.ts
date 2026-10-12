
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
    "Data Analyst with 3+ years at Capgemini, delivering KPI reporting and data analysis for banking and retail clients across Hong Kong, Taiwan and Japan. I analysed 10,000+ daily transactions, cut manual reporting by 40% through SQL and Excel automation, and reconciled data warehouse records to support regulatory reporting. I then completed an MSc in Data Science for Business with Distinction at the University of Stirling, and now build across the full data workflow: Databricks pipelines, Power BI reporting, statistical models and LLM-powered tools. I work in Python, SQL and Power BI, and I trace every number back to its source before anyone relies on it.",
};

export const heroCopy = {
  eyebrow: "Portfolio 2026 · Data Analytics · Open to work",
  lead: "If a number looks suspicious, I will interrogate it until it confesses.",
  sub: "Data Analyst working across SQL, Python, Power BI and Databricks. I validate messy data, trace anomalies to their root cause, and turn the results into reporting people trust.",
};

export const navLinks = [
  { number: "01", label: "About", href: "/about" },
  { number: "02", label: "Projects", href: "/#work" },
  { number: "03", label: "Contact", href: "/#contact" },
];

export const howIWork = [
  {
    number: "01",
    title: "Start with the requirement",
    body: "I build from what the business needs to decide. At Capgemini, turning client requirements into automated SQL and Excel KPI reporting cut manual reporting effort by 40%.",
  },
  {
    number: "02",
    title: "Check before it's shared",
    body: "No number reaches a stakeholder until it has been checked. Every Agile sprint, I ran cross-system reconciliation, validation and root cause analysis, resolving each anomaly before publication.",
  },
  {
    number: "03",
    title: "Make it decision-ready",
    body: "Analysis only matters if people can act on it. I've presented findings to non-technical teams in Hong Kong, Taiwan and Japan, and trained 9 colleagues on data validation and delivery practices.",
  },
];

export const skillsTicker = [
  "SQL",
  "Python",
  "Power BI",
  "DAX",
  "Advanced Excel",
  "Databricks",
  "PySpark",
  "Azure SQL",
  "PostgreSQL",
  "R",
  'Java',
  "SAS",
  "Statistical Forecasting",
  "Machine Learning",
  "LLM Applications",
  "Data Governance",
  "Data Reconciliation",
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
    company: "New Life Church",
    role: "Website Administrator (Volunteer)",
    period: "April 2026 - Present",
    location: "Glasgow, UK",
    points: [
      "Shipped weekly website and app updates and maintained CMS content for a 420-member community, keeping 10+ recurring events live and accurate.",
      "Designed and rolled out a barcode check-in system for 26+ children, replacing paper logs and automating 10 hours a week of manual data entry."
    ],
  },
  {
    company: "Oud Studio",
    role: "Senior Sales Advisor",
    period: "November 2025 - August 2026",
    location: "United Kingdom",
    points: [
      "Improved sales conversion by 10 to 15% by analysing purchasing patterns across 40+ daily customer interactions and acting on the trends that drove results.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Senior Data Analyst | Retail Client, Hong Kong and Japan",
    period: "February 2023 - September 2024",
    points: [
      "Prepared analysis-ready data from 10,000+ daily transactions across multiple source systems using complex SQL, enabling KPI and trend analysis for senior stakeholders in 2 markets.",
      "Cut manual reporting effort by 40% by automating KPI and business metric reporting with SQL and Advanced Excel, built from client requirements.",
      "Stopped data errors reaching stakeholders by running cross-system reconciliation, validation checks and root cause analysis every Agile sprint, resolving each anomaly before publication.",
      "Maintained data integrity across 4 brands and 16 stores by configuring the Cegid retail platform and fixing cross-market, onshore and offshore data flow issues.",
      "Presented findings to non-technical, cross-functional stakeholders in Hong Kong, Taiwan and Japan, turning analysis into clear, decision-ready recommendations.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Financial Data Analyst | Banking Client",
    period: "September 2022 - November 2022",
    points: [
      "Validated and reconciled banking transaction data from the client's data warehouse using SQL and Java.",
      "Flagged inconsistencies and missing records to keep regulatory reporting accurate.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Analyst",
    period: "August 2021 - August 2022",
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
    role: "Media Team (Volunteer)",
    period: "April 2026 - Present",
    location: "United Kingdom",
    points: [
      "Produce and edit event and promotional video content using Adobe Premiere Pro and After Effects.",
      "Run live sound, photography and videography for events, and maintain the team's media equipment.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Analyst Intern",
    period: "February 2021 - May 2021",
    location: "India",
    points: [
      "Built an eyewear frame and lens application in a team of 4 using Java and React, and presented the final product to senior stakeholders.",
      "Built a website in a team of 3 that helps users find their nearest hospitals and doctors, using HTML, CSS, JavaScript and Angular.",
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
    period: "September 2024 - November 2025",
    detail:
      "Relevant coursework: Machine Learning, Representing and Manipulating Data, Statistics with R, Business Analytics.",
  },
  {
    school: "NMAM Institute of Technology, Nitte, India",
    qualification: "BE Electronics and Communication Engineering (Merit)",
    period: "August 2018 - August 2021",
    detail:
      "Relevant coursework: Artificial Intelligence, Embedded Systems, Machine Learning, Computer Communication Networks.",
  },
];

export const skillGroups = [
  {
    title: "SQL & Databases",
    items: ["SQL (CTEs, window functions)", "Azure SQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Languages, Modelling & Analysis",
    items: [
      "Python",
      "R",
      "SAS",
      "Regression",
      "Hypothesis Testing (Chi-Square, Mann-Whitney U)",
      "Time-Series Forecasting",
      "Machine Learning",
      "LLM / GenAI Applications",
    ],
  },
  {
    title: "BI & Reporting",
    items: ["Power BI (DAX)", "KPI Reporting", "Data Visualisation", "Advanced Excel"],
  },
  {
    title: "Data Engineering",
    items: [
      "ETL / ELT Pipelines",
      "Databricks",
      "PySpark",
      "Medallion Architecture",
      "Data Warehousing",
      "Data Modelling",
    ],
  },
  {
    title: "Data Quality & Governance",
    items: [
      "Data Validation",
      "Reconciliation",
      "Root Cause Analysis",
      "Data Cleansing",
      "Data Governance and PII Masking",
    ],
  },
  {
    title: "Delivery",
    items: [
      "Stakeholder Management",
      "Training and Mentoring",
      "Process Improvement",
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
