export interface Profile {
  name: string;
  avatar: string;
  title: string;
  bio: string;
  location: string;
  locationLink?: string;
  email: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface WorkExperience {
  company: string;
  logo: string;
  role: string;
  dateRange: string;
  description: string;
}

export interface Education {
  institution: string;
  logo: string;
  degree: string;
  dateRange: string;
  description: string;
}

export interface Project {
  name: string;
  category: "web3" | "web2" | "bootcamps";
  status: "Ongoing" | "Completed";
  date: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    website?: string;
    source?: string;
  };
}

export interface Hackathon {
  name: string;
  logo: string;
  dateRange: string;
  location: string;
  description: string;
  tags: string[];
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  tags: string[];
  url: string;
}

export const profile: Profile = {
  name: "Vipul Kohli",
  avatar: "/avatar-new.png",
  title: "Software Engineer & Systems Developer",
  bio: "I am a Computer Science & Engineering student and software engineer specializing in backend systems, high-performance web APIs, and systems engineering. I build optimized IoT data pipelines, multi-threaded packet processors, and discrete event simulation engines.",
  location: "New Delhi, India",
  locationLink: "https://maps.google.com/?q=New+Delhi,+India",
  email: "kohlivipul48@gmail.com",
  socials: {
    email: "mailto:kohlivipul48@gmail.com",
    github: "https://github.com/Aisekaisee",
    linkedin: "https://www.linkedin.com/in/vipul-kohli-31bb3921b",
    twitter: "https://x.com/VIPULKOHLI71371",
  },
};

export const workExperience: WorkExperience[] = [
  {
    company: "Astroraag AI Solutions",
    logo: "/company.png",
    role: "Software Development Intern",
    dateRange: "April 2026 – June 2026",
    description: "Architected and deployed 8+ scalable REST APIs using FastAPI, establishing an optimized backend framework to support high-performance user transactions. Engineered relational database schemas and implemented server-side execution logic that reduced API query response latency by 18%.",
  },
  {
    company: "Liradolf Information Technologies",
    logo: "/company.png",
    role: "Software Development Intern",
    dateRange: "June 2025 – Sep 2025",
    description: "Overhauled the backend infrastructure for internal enterprise tools, restructuring core database schemas and writing comprehensive API documentation to accelerate cross-team onboarding by 25%. Optimized an Industry 4.0 IoT data pipeline by configuring MQTT ingestion and MongoDB persistence, boosting end-to-end data consistency by 14% across real-time machine efficiency (OEE) monitoring dashboards.",
  },
];

export const education: Education[] = [
  {
    institution: "Maharaja Agrasen Institute of Technology",
    logo: "/education.png",
    degree: "B.Tech in Computer Science & Engineering",
    dateRange: "2023 – 2027",
    description: "Deepening knowledge in Core Data Structures & Algorithms (DSA), Operating Systems (OS), Database Management Systems (DBMS), and Computer Networks. CGPA: 9.08/10.",
  },
  {
    institution: "BGS International Public School",
    logo: "/education.png",
    degree: "High School (CBSE)",
    dateRange: "2021 – 2023",
    description: "Completed Class 12th (92.4%) and Class 10th (95.6%) with a focus on Science and Mathematics.",
  },
];

export const skills: string[] = [
  "C/C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "FastAPI",
  "Scikit-learn",
  "NumPy",
  "Pandas",
  "React Native",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Git",
  "GitHub",
  "VS Code",
  "PyCharm",
  "Data Structures & Algorithms",
  "OOP",
  "DBMS",
  "Operating Systems",
  "Computer Networking",
  "REST APIs",
  "Microservices",
  "Unit Testing",
  "Japanese (JLPT N3)",
];

export const projects: Project[] = [
  {
    name: "EV Battery-Swap Simulation Engine",
    category: "web2",
    status: "Completed",
    date: "Jan 2026 – Feb 2026",
    description: "Engineered a SimPy Discrete Event Simulation (DES) modeling a city-wide EV battery-swap grid with Poisson arrivals, concurrent 3.5h charge cycles, and geo-weighted demand shocks. Built station and city-level analytics for live wait times and throughput metrics.",
    image: "/project-web2.png",
    tags: ["ReactJS", "SimPy", "FastAPI", "Supabase", "Python"],
    links: {
      source: "https://github.com/Aisekaisee",
    },
  },
  {
    name: "Deep Packet Inspection Engine",
    category: "web2",
    status: "Completed",
    date: "Oct 2025 – Dec 2025",
    description: "Built a high-throughput, multi-threaded C++ DPI engine utilizing flow-aware load balancing via 5-tuple hashing. Deployed lock-free inter-stage queues and a stateful connection tracker with automated TTL-based eviction.",
    image: "/project-blockchain.png",
    tags: ["C++", "Multithreading", "Networking", "CMake"],
    links: {
      source: "https://github.com/Aisekaisee",
    },
  },
  {
    name: "NutriDecode (Gemini AI Track Winner)",
    category: "bootcamps",
    status: "Completed",
    date: "2025",
    description: "Winner of Code Kshetra 2.0 GenAI Track. Analyzes food ingredients and profiles using native Google Gemini API integration and custom FastAPI server.",
    image: "/project-web2.png",
    tags: ["Gemini API", "FastAPI", "React", "Python"],
    links: {
      source: "https://github.com/Aisekaisee",
    },
  },
];

export const hackathons: Hackathon[] = [
  {
    name: "Blockathon IIT Roorkee 2025",
    logo: "/hackathon.png",
    dateRange: "Feb 2025",
    location: "IIT Roorkee, India",
    description: "1st Place Winner: Outperformed 50+ competing teams in a national-level blockchain hackathon challenge.",
    tags: ["Blockchain", "Smart Contracts", "Solidity", "Ethereum"],
  },
  {
    name: "Code Kshetra 2.0",
    logo: "/hackathon.png",
    dateRange: "2025",
    location: "Delhi, India",
    description: "Winner, GenAI Track: Built NutriDecode with native Gemini API integration, winning top honors out of 400+ participating engineering teams.",
    tags: ["GenAI", "Gemini API", "FastAPI", "React"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "How I Simulated a City-Wide EV Charging Network with SimPy",
    description: "Deep dive into discrete event simulation modelling, modeling Poisson arrival rates, and rendering live analytics in React.",
    date: "March 15, 2026",
    tags: ["Python", "SimPy", "React", "Simulations"],
    url: "https://github.com/Aisekaisee",
  },
  {
    title: "Building a Multi-Threaded Deep Packet Inspection Engine in C++",
    description: "A technical guide to implementing zero-copy packet dissection, 5-tuple flow hashing, and lock-free thread queues.",
    date: "January 10, 2026",
    tags: ["C++", "Networking", "Concurrency"],
    url: "https://github.com/Aisekaisee",
  },
  {
    title: "Optimizing FastAPI App Latency: Shaving 18% Off Query Responses",
    description: "Case study of index restructuring and SQL schema optimization during my internship at Astroraag AI Solutions.",
    date: "June 25, 2026",
    tags: ["FastAPI", "PostgreSQL", "API Performance"],
    url: "https://github.com/Aisekaisee",
  },
  {
    title: "Integrating Gemini API with React: Code Kshetra 2.0 Winner's Guide",
    description: "Step-by-step tutorial on sending multimodal prompts, streaming responses, and structuring AI outputs.",
    date: "February 20, 2025",
    tags: ["Gemini API", "AI", "FastAPI", "React"],
    url: "https://github.com/Aisekaisee",
  },
];
