
import type { Icon } from 'lucide-react';
import { Briefcase, Brain, HardHat, CloudCog, Database, UsersRound, LayoutDashboard, ListChecks, Workflow, TrendingUp, SearchCheck, Smartphone, Sigma, TestTube2, Zap, BarChartBig } from 'lucide-react';

export interface JobExperience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  icon: Icon;
}

export const experiences: JobExperience[] = [
  {
    company: 'Cognizant',
    role: 'Associate',
    duration: '07/2022 to 02/2024',
    responsibilities: [
      'Developed and maintained Cypress automation scripts with JavaScript/BDD.',
      'Reduced regression testing cycle times by 30% through efficient automation.',
      'Collaborated with development teams to identify and resolve defects early.',
    ],
    icon: Briefcase,
  },
  {
    company: 'Prime Software',
    role: 'Test Engineer',
    duration: '01/2022 to 06/2022',
    responsibilities: [
      'Established comprehensive test coverage of 95% using Cypress framework.',
      'Designed and executed automated test cases for web applications.',
      'Contributed to improving overall software quality and release stability.',
    ],
    icon: Briefcase,
  },
  {
    company: 'Ncoderella Soft',
    role: 'Software Analyst',
    duration: '08/2018 to 12/2021',
    responsibilities: [
      'Implemented Selenium automation frameworks for UI testing.',
      'Performed database validation and integrity checks.',
      'Managed defect tracking and reporting using Jira.',
    ],
    icon: Briefcase,
  },
];

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: Icon;
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Data Science',
    skills: ['Python', 'SQL', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Streamlit'],
    icon: Sigma,
  },
  {
    name: 'ML & AI',
    skills: ['Predictive Modeling', 'NLP', 'ANN', 'Clustering', 'Statistical Analysis'],
    icon: Brain,
  },
  {
    name: 'Testing Tools',
    skills: ['Selenium', 'Cypress', 'TestNG', 'Postman'],
    icon: HardHat,
  },
  {
    name: 'DevOps/Cloud',
    skills: ['Docker', 'Jenkins', 'Git', 'Azure', 'AWS'],
    icon: CloudCog,
  },
  {
    name: 'Databases & BI',
    skills: ['MySQL', 'Power BI', 'Tableau'],
    icon: Database,
  },
  {
    name: 'Soft Skills',
    skills: ['Problem-solving', 'Agile teamwork', 'Communication', 'Analytical Thinking'],
    icon: UsersRound,
  },
];

export interface ServiceOffering {
  title: string;
  description: string;
  icon: Icon;
}

export const services: ServiceOffering[] = [
  {
    title: 'Data Science Solutions',
    description: 'Leveraging advanced algorithms and statistical models to extract actionable insights from complex datasets.',
    icon: Zap,
  },
  {
    title: 'Data Analytics & Dashboarding',
    description: 'Creating interactive dashboards and reports for data visualization and informed decision-making.',
    icon: LayoutDashboard,
  },
  {
    title: 'QA Automation (Cypress & JS)',
    description: 'Building robust and scalable test automation frameworks using Cypress and JavaScript for modern web applications.',
    icon: ListChecks,
  },
  {
    title: 'End-to-End Selenium Test Frameworks',
    description: 'Developing comprehensive Selenium-based test automation solutions for thorough application testing.',
    icon: TestTube2, 
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  dataAiHint: string;
  icon: Icon;
}

export const projects: Project[] = [
  {
    title: 'Retail Sales Forecasting with ANN',
    description: 'Developed an Artificial Neural Network model to predict retail sales, boosting accuracy by 15%. Deployed on AWS EC2 with a Streamlit UI.',
    technologies: ['Python', 'TensorFlow', 'ANN', 'Streamlit', 'AWS EC2'],
    imageUrl: 'https://i.postimg.cc/0jr8Lzfr/Chart.png',
    dataAiHint: 'sales chart',
    icon: TrendingUp,
  },
  {
    title: 'Copper Insight Platform',
    description: 'Built a platform for copper industry analysis, achieving over 90% accuracy in regression and classification tasks for material properties.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Regression', 'Classification'],
    imageUrl: 'https://picsum.photos/400/300?random=2',
    dataAiHint: 'copper industry',
    icon: SearchCheck,
  },
  {
    title: 'PhonePe Pulse Explorer',
    description: 'Created a real-time analytics dashboard for PhonePe Pulse data, enabling 50% faster data querying and visualization of transaction trends.',
    technologies: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'Data Visualization'],
    imageUrl: 'https://picsum.photos/400/300?random=3',
    dataAiHint: 'phonepe analytics',
    icon: Smartphone,
  },
];

export const education = [
    {
        degree: "IIT-M Pravartak Certified Advanced Programmer in Data Science",
        year: "2024",
        institution: "GUVI Geek Networks, IITM Research Park"
    },
    {
        degree: "B.Tech in Information Technology",
        year: "2014",
        institution: "Sri Ramanujar Engineering College"
    }
];
