// Lighter-weight project entries — not full case studies like lib/projects.ts,
// just enough to describe the project and link out to the LinkedIn skill
// association page for it. Rendered on the /projects "more projects" page.

export type MoreProject = {
  title: string;
  description: string;
  tags: string[];
  linkedinUrl: string;
};

export const moreProjects: MoreProject[] = [
  {
    title: "Business Analytics for Avon Orthopedic Clinic",
    description:
      "Applied descriptive statistics, predictive analytics and Simul8 modelling to 2,000+ orthopedic appointments, producing an evidence-based report that proposed reducing surgery referrals by 30%, with the potential to eliminate future readmissions and cut patient wait times.",
    tags: ["Statistics", "Simul8"],
    linkedinUrl:
      "https://www.linkedin.com/in/denseyzenelmaben/overlay/1339510616/skill-associations-details/",
  },
  {
    title: "Customer Contract Prediction",
    description:
      "Used models including Logistic Regression, Decision Trees and Neural Networks to identify customer responsiveness to marketing contract offers, reaching 88.3% accuracy.",
    tags: ["Machine Learning", "Orange (Software)"],
    linkedinUrl:
      "https://www.linkedin.com/in/denseyzenelmaben/overlay/1339402236/skill-associations-details/",
  },
  {
    title: "Electronic Dice System",
    description:
      "Created a random number generator using microcontroller logic and sensor-based activation, achieving reliable output with a less than 1% error margin.",
    tags: ["Microcontrollers", "Embedded Systems"],
    linkedinUrl:
      "https://www.linkedin.com/in/denseyzenelmaben/overlay/1340377698/skill-associations-details/",
  },
  {
    title: "Glasses Direct E-commerce Database",
    description:
      "Built and integrated SQL and MongoDB databases for an e-commerce platform, enabling efficient storage and retrieval of user, product and order data, improving query performance by 35%.",
    tags: ["SQL", "MongoDB"],
    linkedinUrl:
      "https://www.linkedin.com/in/denseyzenelmaben/overlay/1339892568/skill-associations-details/",
  },
  {
    title: "JC Penney Website Data Analysis",
    description:
      "Performed EDA, validation, augmentation and visualisation using Python to extract actionable insights from JC Penney's website data.",
    tags: ["Python (Programming Language)", "Data Analysis"],
    linkedinUrl:
      "https://www.linkedin.com/in/denseyzenelmaben/overlay/1339297173/skill-associations-details/",
  },
  {
    title: "Motion-Detecting Alarm System (FPGA-Based)",
    description:
      "Designed and deployed a motion-sensitive alarm system using FPGA boards, enabling real-time intrusion alerts with a 20% improvement in detection speed.",
    tags: ["Field-Programmable Gate Arrays (FPGA)", "Verilog"],
    linkedinUrl:
      "https://www.linkedin.com/in/denseyzenelmaben/overlay/1340313091/skill-associations-details/",
  },
  {
    title: "Pulse Oximeter & Bluetooth-Based Home Automation",
    description:
      "Built functional prototypes using IR sensors and PIC16F877A microcontrollers to control home appliances and measure blood oxygen levels, demonstrating 90% accuracy in testing.",
    tags: ["Sensors", "Microcontrollers"],
    linkedinUrl:
      "https://www.linkedin.com/in/denseyzenelmaben/overlay/1340227420/skill-associations-details/",
  },
  {
    title: "Sentiment Analysis of Amazon Reviews",
    description:
      "Applied NLP, VADER sentiment scoring and Transformers to classify review sentiment with 85% accuracy and detect sarcasm using Hugging Face.",
    tags: ["Natural Language Processing (NLP)", "Transformers"],
    linkedinUrl:
      "https://www.linkedin.com/in/denseyzenelmaben/overlay/1339205465/skill-associations-details/",
  },
];
