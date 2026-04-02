const portfolioData = {
  personal: {
    name: "Chris Anonie Pieterse",
    title: "Senior Software Engineer",
    headshot: "assets/images/headshot.jpg",
    email: "chrisantoniep@gmail.com",
    phone: "+31 6 1785 2820",
    location: "Oss - Netherlands",
    linkedin: "https://linkedin.com/in/chrisantoniepieterse",
    github: "https://github.com/DieAntonie",
    resumeUrl: "assets/ChrisAntoniPieterse-Resume.pdf"
  },

  statement: `Results-driven Senior Software Engineer with 12+ years of experience designing and implementing scalable enterprise solutions. 
  Proven expertise in cloud architecture (AWS/Azure), full-stack development, and DevOps practices. 
  Demonstrated track record of leading cross-functional teams to deliver high-impact projects that reduce costs by 40% and improve system performance by 3x. 
  Passionate about mentoring engineers and implementing best practices that drive operational excellence. 
  Seeking to leverage deep technical expertise and leadership capabilities to architect transformative solutions at a forward-thinking organization.`,

  skills: [
    { category: "Cloud & DevOps", items: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Azure DevOps"] },
    { category: "Languages", items: ["C#", ".NET Core", "JavaScript", "TypeScript", "Python", "SQL", "PHP"] },
    { category: "Frameworks", items: ["React", "Angular", "Node.js", "ASP.NET", "CherryPy", "Laravel"] },
    { category: "Databases", items: ["SQL Server", "PostgreSQL", "MongoDB", "DynamoDB", "MariaDB"] },
    { category: "Tools & Practices", items: ["Azure Boards", "Jira", "Confluence", "Agile/Scrum", "Microservices", "REST APIs", "GraphQL"] }
  ],

  experience: [
    {
      id: "exp7",
      title: "Senior Software Engineer",
      company: "Entelect",
      location: "Utrecht, Netherlands",
      startDate: "2021-10",
      endDate: "Present",
      description: "Senior Software Engineer delivering enterprise-grade solutions across infrastructure platforms, rail logistics, and insurance domains, with a strong focus on technical excellence, modernization, and stakeholder alignment.",
      highlights: [
        "Led technical excellence initiatives across multiple high-impact enterprise projects",
        "Mentored developers and improved team-wide engineering standards",
        "Designed and implemented scalable architectures in both cloud and legacy environments",
        "Acted as key liaison between technical teams and business stakeholders",
        "Drove modernization of monolithic systems into distributed architectures"
      ],
      projects: [
        {
          name: "Internal Developer Portal",
          client: "ABB",
          description: "Developed and contributed to an Internal Developer Portal using Backstage, focusing on improving developer experience, standardizing infrastructure provisioning, and enabling self-service capabilities.",
          technologies: ["Backstage", "React", "Node.js", "Azure DevOps", "PostgreSQL"],
          metrics: "Reduced developer onboarding time by ~40% and enabled self-service provisioning for 80% of common infrastructure requests"
        },
        {
          name: "TAPS",
          client: "ProRail",
          description: "Developed rail planning capabilities and system integrations to support complex freight capacity planning, ensuring seamless interoperability with external systems.",
          technologies: ["Azure DevOps", "Node.js", "MS SQL Server", ".Net 8"],
          metrics: "Improved planning efficiency by ~30% and reduced manual coordination efforts across systems by ~50%"
        },
        {
          name: "VodaSure",
          client: "Vodacom Financial Services",
          description: "Led technical design and modernization of a legacy insurance platform, introducing serverless automation, improving system reliability, and mentoring team members on best practices.",
          technologies: ["AWS", ".NET 6", "React", "Node.js", "PostgreSQL", "GitHub Actions", "AWS Lambda"],
          metrics: "Reduced critical production incidents by ~35%, improved deployment frequency by 2x, and automated recurring developer tasks saving ~20 hours per month"
        },
      ]
    },
    {
      id: "exp6",
      title: "Intermediate Software Engineer",
      company: "Kohde (Pty) Ltd",
      location: "Centurion, South Africa",
      startDate: "2021-09",
      endDate: "2020-11",
      description: "Intermediate Software Developer responsible for end-to-end delivery of an e-commerce platform, acting as the sole technical lead and integration specialist.",
      highlights: [
        "Successfully delivered a full e-commerce platform as the sole developer",
        "Integrated ERP, payment, and logistics systems into a unified workflow",
        "Led all stakeholder engagement and requirement gathering",
        "Solved complex logistical optimization problems using algorithmic approaches"
      ],
      projects: [
        {
          name: "TableCharm E-commerce Platform",
          client: "TableCharm",
          description: "Implemented and customized an open-source e-commerce solution, integrating it with ERP, payment gateways, and courier services while solving complex packing optimization challenges.",
          technologies: ["GrandNode", "React", "Node.js", "MongoDB", "Azure DevOps", ".NET 5"],
          metrics: "Enabled online sales channel contributing to 25% of total revenue and reduced order processing time by ~50%"
        },
        {
          name: "TableCharm Stock Management System",
          client: "TableCharm",
          description: "Enhanced and maintained a stock management system, implementing features for inventory tracking, supplier management, and reporting to support operational efficiency.",
          technologies: ["PHP", "Laravel", "MariaDB"]
        }
      ]
    },
    {
      id: "exp5",
      title: "Full Stack Developer",
      company: "Quant Engineering Solutions",
      location: "Pretoria, South Africa",
      startDate: "2018-09",
      endDate: "2020-10",
      description: "Software Developer contributing to the evolution of a large-scale medical practice management system, focusing on web transformation, event sourcing, and system reliability.",
      highlights: [
        "Played a key role in transitioning a legacy desktop system to web",
        "Introduced event sourcing concepts into an existing architecture",
        "Improved system observability and product usage insights",
        "Championed automated testing and code quality practices"
      ],
      projects: [
        {
          name: "GoodX Web “GXWeb”",
          description: "Developed and enhanced a web-based medical practice system, introducing event sourcing capabilities and improving system reliability and usability.",
          technologies: ["Python", "Asyncio", "PostgreSQL", "JavaScript", "Node.js"],
          metrics: "Improved system performance by ~25% and reduced support incidents by ~20% through better observability"
        }
      ]
    },
    {
      id: "exp4",
      title: "Freelance .NET Developer",
      company: "BlackIce Digital",
      location: "Pretoria, South Africa",
      startDate: "2018-04",
      endDate: "2018-08",
      description: "Freelance .NET Developer providing technical expertise and development support for client projects, including kiosk-client applications and desktop management systems.",
      highlights: [
        "Provided technical expertise and development support for client projects",
        "Refurbished and optimized a kiosk-client application for improved performance",
        "Developed proof of concept for desktop management system integrating with Microsoft Intune and Azure AD",
        "Ensured compliance with client technical standards and contributed to enhanced user experience"
      ],
      projects: [
        {
          name: "Enquiries Kiosk-Client and Cloud Client-Management System",
          client: "South African Road Accident Fund (RAF)",
          description: "Client based Microsoft Certified Professional, providing technical expertise, refurbishing and optimizing a kiosk-client application and cloud client-management system.",
          technologies: ["C#", "WPF", "GitHub"],
          metrics: "Compliance with RAF's technical standards and improved system performance and reliability, contributing to enhanced user experience and operational efficiency."
        },
        {
          name: "Obsidian desktop management system POC",
          description: "Proof of concept development for desktop management system, integrating with Microsoft Intune and Azure AD for device inventory, remote management, and security compliance.",
          technologies: ["C#", "Azure AD", "Microsoft Graph API"]
        }
      ]
    },
    {
      id: "exp3",
      title: "Technical Consultant",
      company: "EOH MC Solutions",
      location: "Cape Town, South Africa",
      startDate: "2016-12",
      endDate: "2018-03",
      description: "Technical Consultant delivering enterprise financial systems, with early exposure to CQRS and event-driven architectures in a production environment.",
      highlights: [
        "Gained strong foundation in CQRS and event sourcing",
        "Delivered enterprise financial data capture system",
        "Led agile ceremonies and promoted CI/CD practices",
        "Improved team delivery consistency through better engineering practices"
      ],
      projects: [
        {
          name: "Annuity Quote Management System (AQMS)",
          client: "Old Mutual",
          description: "Developed a cloud-based annuity data capture system, enabling digitization of manual processes and improving data accessibility for financial decision-making.",
          technologies: ["ASP.NET MVC", "C#", "SQL Server", "AngularJS", "Azure DevOps"],
          metrics: "Digitized 90% of manual processes and reduced data processing turnaround time by ~60%"
        },
        {
          name: "Student Enrollment and Management System",
          client: "University of Stellenbosch Business School",
          description: "Maintained student enrollment and management system with course registration, fee payment integration, and academic record tracking. Implemented role-based access control for students, faculty, and administrators.",
          technologies: [".Net Framework", "C#", "SQL Server", "jQuery"]
        }
      ]
    },
    {
      id: "exp2",
      title: "Full Stack Developer",
      company: "Quant Engineering Solutions",
      location: "Pretoria, South Africa",
      startDate: "2015-09",
      endDate: "2016-11",
      description: "Software Developer contributing to the evolution of a large-scale medical practice management system, focusing on web transformation, event sourcing, and system reliability.",
      highlights: [
        "Played a key role in transitioning a legacy desktop system to web",
        "Introduced event sourcing concepts into an existing architecture",
        "Improved system observability and product usage insights",
        "Championed automated testing and code quality practices"
      ],
      projects: [
        {
          name: "GoodX Web “GXWeb”",
          description: "Contributed to early-stage development of a cloud-based extension to a desktop medical system, focusing on feature parity and integration capabilities.",
          technologies: ["Python", "CherryPy", "PostgreSQL", "JavaScript", "Grunt", "Knockout.js"],
          metrics: "Delivered core features enabling onboarding of initial pilot customers and reducing manual workflows by ~30%"
        },
        {
          name: "ChloroForm",
          description: "Lead maintainer of legacy Anesthesiologist’s booking and scheduling system, responsible for refactoring codebase, implementing new features, and optimizing performance.",
          technologies: ["Python", "PostgreSQL", "CherryPy", "Knockout.js"],
          metrics: "Mission-critical system with 99.9% uptime and improved scheduling efficiency by ~25% through performance optimizations and feature enhancements"
        }
      ]
    },
    {
      id: "exp1",
      title: "Learner Developer",
      company: "OneLaw (Pty) Ltd",
      location: "Pretoria, South Africa",
      startDate: "2012-01",
      endDate: "2014-10",
      description: "Junior Software Developer supporting and enhancing financial recovery systems, with a focus on production support and incremental system improvements.",
      highlights: [
        "Supported production systems in a regulated financial environment",
        "Improved internal tooling and SLA tracking capabilities",
        "Collaborated closely with support and engineering teams",
        "Gained foundational experience in agile delivery and release cycles"
      ],
      projects: [
        {
          name: "Lotus",
          description: "Maintained and enhanced a debt recovery platform, introducing SLA tracking improvements and supporting operational workflows.",
          technologies: [".Net Framework", "SQL Server", "JavaScript", "MS Dynamics CRM"],
          metrics: "Improved ticket resolution tracking accuracy by ~40% and reduced SLA breaches by ~25%"
        }
      ]
    },
  ],

  education: [
    {
      type: "degree",
      title: "Bachelor of Science in Computer Science",
      institution: "University of South Africa (UNISA)",
      year: "2019"
    },
    {
      type: "certification",
      title: "Microsoft Certified: Azure Developer Associate",
      institution: "Microsoft",
      year: "2024",
      credentialId: "494EDB175D6B7181"
    },
    {
      type: "certification",
      title: "Microsoft Certified: Azure Administrator Associate",
      institution: "Microsoft",
      year: "2024",
      credentialId: "40EC9EE15D273158"
    },
    {
      type: "certification",
      title: "Microsoft Certified: Azure Fundamentals",
      institution: "Microsoft",
      year: "2024",
      credentialId: "68443908155C63AB"
    },
    {
      type: "certification",
      title: "AWS Certified Cloud Practitioner",
      institution: "Amazon Web Services",
      year: "2024",
      credentialId: "a9405b8b244c47d48e2cf497e6ac538e"
    },
    {
      type: "certification",
      title: "PRINCE2® Foundation",
      institution: "AXELOS Global Best Practice",
      year: "2020",
      credentialId: "GR656168589CP"
    },
    {
      type: "certification",
      title: "Microsoft Certified Solutions Associate: Web Applications (MCSA)",
      institution: "Microsoft",
      year: "2020",
      credentialId: "75X44F-C5B436"
    },
    {
      type: "certification",
      title: "Microsoft Certified Professional ",
      institution: "Microsoft",
      year: "2017",
      credentialId: "915B96-6CDQEF"
    },
    {
      type: "certification",
      title: "Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3",
      institution: "Microsoft",
      year: "2017",
      credentialId: "311296-N4D44A"
    },
    {
      type: "certification",
      title: "C++ Programming Certificate",
      institution: "University of South Africa (UNISA)",
      year: "2015",
      credentialId: "UN621681ISA"
    }
  ],

  projects: [
    {
      title: "CloudCost Analyzer",
      description: "Real-time cloud cost optimization platform that analyzes AWS/Azure spending and provides actionable recommendations. Features ML-powered anomaly detection and automated cost forecasting.",
      technologies: ["Python", "AWS Lambda", "React", "DynamoDB", "SageMaker"],
      image: "assets/images/project-cost.jpg",
      demoUrl: "https://demo.cloudcostanalyzer.com",
      githubUrl: "https://github.com/dieantonie/cloudcost-analyzer"
    },
    {
      title: "EventFlow Platform",
      description: "Scalable event-driven microservices platform for processing and analyzing streaming data. Handles 1M+ events/day with sub-100ms latency.",
      technologies: [".NET 8", "Kafka", "Kubernetes", "PostgreSQL", "Redis"],
      image: "assets/images/project-eventflow.jpg",
      demoUrl: "https://demo.eventflow.io",
      githubUrl: "https://github.com/dieantonie/eventflow"
    },
    {
      title: "DevOps Dashboard",
      description: "Centralized monitoring and analytics dashboard for DevOps pipelines. Integrates with GitHub Actions, Azure DevOps, and Jenkins for unified visibility.",
      technologies: ["TypeScript", "Angular", "Node.js", "Elasticsearch", "Grafana"],
      image: "assets/images/project-devops.jpg",
      demoUrl: "https://demo.devopsdash.com",
      githubUrl: "https://github.com/dieantonie/devops-dashboard"
    },
    {
      title: "SecureVault API",
      description: "Enterprise-grade secrets management API with role-based access control, audit logging, and automatic rotation. Compliance-ready for SOC2 and HIPAA.",
      technologies: ["Go", "PostgreSQL", "gRPC", "Docker", "Vault"],
      image: "assets/images/project-vault.jpg",
      demoUrl: null,
      githubUrl: "https://github.com/dieantonie/securevault-api"
    }
  ],

  references: [
    {
      quote: "Chris consistently delivered exceptional results, leading our cloud migration initiative that saved the company $500K annually. His technical expertise combined with leadership skills made him invaluable.",
      name: "Sarah Mitchell",
      title: "VP of Engineering, TechCorp Solutions",
      email: "sarah.mitchell@techcorp.com"
    },
    {
      quote: "One of the most talented engineers I've worked with. Chris has an rare ability to translate complex business requirements into elegant technical solutions while mentoring the team.",
      name: "David Chen",
      title: "Director of Product, InnovateTech Inc.",
      email: "david.chen@innovatetech.com"
    },
    {
      quote: "Chris joined us early in his career and quickly became a go-to engineer for our most challenging projects. His growth mindset and dedication to excellence set a great example for the team.",
      name: "Michael Roberts",
      title: "CTO, StartupXYZ",
      email: "michael.roberts@startupxyz.com"
    }
  ],

  contact: {
    formEndpoint: "https://formspree.io/f/your-form-id",
    availability: "Open to opportunities",
    responseTime: "Typically responds within 24 hours"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
