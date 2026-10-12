// Project case-study content, sourced from Densey's CV "Projects" section.

export type Project = {
  slug: string;
  index: string;
  year: string;
  title: string;
  summary: string;
  tags: string[];
  overview: string;
  approach: string[];
  outcome: string[];
};

export const projects: Project[] = [
  {
    slug: "neobank-data-platform",
    index: "01",
    year: "Oct 2026",
    title: "NeoBank Data Platform",
    summary:
      "Metadata-driven Databricks lakehouse loading 50,000+ banking records from Azure SQL and CSV into a bronze/silver/gold Medallion architecture, governed in Unity Catalog and surfaced through Gold reporting tables, an AI/BI dashboard and a Genie AI assistant.",
    tags: ["Databricks", "PySpark", "Delta Lake", "Unity Catalog", "Azure SQL", "Medallion Architecture"],
    overview:
      "Built an end-to-end banking data platform in Databricks: a metadata-driven ETL pipeline that ingests 50,000+ records from Azure SQL (via JDBC) and CSV files into a Medallion (bronze/silver/gold) lakehouse, with governance, reporting and an AI assistant layered on top.",
    approach: [
      "Designed a metadata-driven ETL pipeline in PySpark, using Auto Loader for file ingestion and JDBC for Azure SQL sources, so new tables are onboarded through configuration rather than new code.",
      "Structured the lakehouse as a Medallion architecture on Delta Lake, with raw bronze, cleaned silver and business-ready gold layers, using incremental MERGE loads instead of full reloads.",
      "Governed the platform in Unity Catalog, masking 4 PII fields and applying branch-level row security so users only see the data they are entitled to.",
      "Orchestrated the full pipeline with Databricks Workflows, with email alerts on job success and failure.",
    ],
    outcome: [
      "Loaded 50,000+ banking records into a governed, incrementally updated lakehouse.",
      "Delivered 5 Gold reporting tables powering an AI/BI dashboard.",
      "Added a Genie AI assistant so business users can query the Gold data in natural language.",
    ],
  },
  {
    slug: "ai-research-companion",
    index: "02",
    year: "August 2026",
    title: "AI Research Companion",
    summary:
      "Full-stack research app that uses semantic search over 20K+ arXiv papers to find relevant work by meaning rather than keywords, with LLM-powered paper summaries. Built with FastAPI, PostgreSQL and FAISS and deployed live with 184 automated tests.",
    tags: ["FastAPI", "PostgreSQL", "FAISS", "LLMs", "Semantic Search", "Python"],
    overview:
      "Built and deployed a full-stack research app that helps researchers discover relevant papers by meaning rather than keywords, using semantic search over a corpus of 20K+ arXiv papers.",
    approach: [
      "Indexed 20K+ arXiv papers as vector embeddings in FAISS, enabling semantic similarity search instead of keyword matching.",
      "Built the backend API in FastAPI with PostgreSQL storing paper metadata.",
      "Added an LLM-powered feature that summarises any paper and extracts its key tools and techniques.",
      "Backed the application with 184 automated tests before deploying it live.",
    ],
    outcome: [
      "Researchers can find relevant work by meaning across 20K+ arXiv papers.",
      "One-click LLM summaries surface each paper's key tools and techniques.",
      "Deployed live as a production app with 184 automated tests behind it.",
    ],
  },
  {
    slug: "uk-property-market-forecasting",
    index: "03",
    year: "Sept 2025",
    title: "UK Property Market Forecasting",
    summary:
      "Dissertation project forecasting 19 years of UK property data using XGBoost (81.5% R²), ARIMA and exponential smoothing, with SHAP interpretability and geospatial Power BI dashboards for investment and policy stakeholders.",
    tags: ["XGBoost", "ARIMA", "SHAP", "Power BI", "GIS", "UK GDPR"],
    overview:
      "MSc Data Science for Business dissertation. Developed quantitative forecasting models across 19 years of UK property data to identify regional risk and affordability patterns, translating the analysis into stakeholder-ready proposals.",
    approach: [
      "Built and compared XGBoost, ARIMA and exponential smoothing forecasting models across 19 years of UK property market data.",
      "Applied SHAP interpretability to explain model drivers behind regional risk and affordability patterns rather than leaving them as a black box.",
      "Constructed geospatial analysis and Power BI dashboards aimed at policy, investment and commercial stakeholders.",
      "Applied UK GDPR and data protection principles throughout data handling and reporting.",
    ],
    outcome: [
      "XGBoost forecasting model reached 81.5% R² across the property dataset.",
      "Identified regional risk and affordability patterns translated into clear, stakeholder-facing proposals.",
      "Delivered geospatial Power BI dashboards usable by policy, investment and commercial audiences.",
    ],
  },
  {
    slug: "fraud-detection-system",
    index: "04",
    year: "July 2026",
    title: "Financial Fraud Detection System",
    summary:
      "End-to-end fraud detection on 1.9M highly imbalanced transactions, with XGBoost scoring at 99% recall, a Streamlit monitoring app, and a parallel SAS build validated against the Python pipeline.",
    tags: ["Python", "XGBoost", "SAS", "Streamlit", "Feature Engineering", "Risk Scoring"],
    overview:
      "Built and deployed an end-to-end fraud detection system in Python on a highly imbalanced dataset of 1.9M transactions, covering data cleaning, feature engineering and model evaluation to produce transaction-level fraud probability scores and risk classification.",
    approach: [
      "Cleaned and engineered features across 1.9M transactions with heavy class imbalance, designing the pipeline around fraud recall rather than raw accuracy.",
      "Benchmarked a Logistic Regression baseline against XGBoost, tuning for the imbalanced target and validating with appropriate resampling and evaluation metrics.",
      "Developed a Streamlit real-time monitoring application with configurable risk thresholds and historical tracking to support live fraud decision-making.",
      "Replicated the full data preparation and risk scoring pipeline in SAS, validating outputs against the Python build for consistency.",
    ],
    outcome: [
      "Achieved 99% fraud recall using XGBoost, versus a 93% recall baseline Logistic Regression.",
      "Delivered transaction-level fraud probability scores and risk classification ready for operational use.",
      "Produced a working real-time monitoring app with configurable thresholds, not just an offline model.",
    ],
  },
  {
    slug: "marketing-campaign-analysis",
    index: "05",
    year: "Apr 2026",
    title: "Marketing Campaign Analysis",
    summary:
      "A/B test analysis across 2,300+ Meta advertising experiments for a UK sportswear brand, using Chi-Square and Mann-Whitney U testing, a Random Forest driver model, and a scale/test/fix recommendation report.",
    tags: ["A/B Testing", "Random Forest", "Statistical Testing", "Meta Ads"],
    overview:
      "UK Dig Data (Meta) project. Analysed A/B test data from a Meta advertising dataset for a UK sportswear brand, cleaning and integrating campaign and experiment records to construct key performance metrics.",
    approach: [
      "Cleaned and integrated campaign and experiment records to construct key performance metrics, including conversion rate, CPM and cost per conversion.",
      "Applied Chi-Square and Mann-Whitney U statistical tests to validate significance across 2,300+ experiments.",
      "Trained a Random Forest model to identify the drivers behind winning campaigns.",
    ],
    outcome: [
      "Produced a structured recommendation report identifying which campaigns to scale and which to treat as test cases.",
      "Proposed solutions for underperforming segments backed by statistically validated drivers.",
    ],
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
