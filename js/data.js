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
      id: "exp1",
      title: "Senior Software Engineer",
      company: "Entelect",
      location: "Utrecht, Netherlands",
      startDate: "2021-10",
      endDate: "Present",
      description: "Led architecture and development of microservices platform serving 2M+ users. Designed CI/CD pipelines reducing deployment time by 75%. Mentored team of 8 engineers and established coding standards.",
      highlights: [
        "Architected event-driven system processing 50K requests/second",
        "Reduced infrastructure costs by $200K annually through optimization",
        "Implemented automated testing achieving 95% code coverage"
      ],
      projects: [
        {
          name: "Cloud Migration Platform",
          client: "Major European Retailer",
          description: "Led migration of legacy monolith to cloud-native microservices architecture on Azure. Implemented event-driven communication using Service Bus and designed CI/CD pipelines reducing deployment time from hours to minutes.",
          technologies: ["Azure", ".NET 8", "React", "Terraform", "Azure DevOps"],
          metrics: "Reduced infrastructure costs by 40% and deployment time by 75%"
        },
        {
          name: "Real-time Analytics Dashboard",
          description: "Developed real-time data visualization platform processing 50K+ events per second. Built WebSocket-based dashboard with live streaming capabilities and automated alerting.",
          technologies: ["React", "Node.js", "Apache Kafka", "Redis", "PostgreSQL"],
          metrics: "Achieved sub-100ms latency for real-time updates"
        }
      ]
    },
    {
      id: "exp2",
      title: "Intermediate Software Engineer",
      company: "Kohde (Pty) Ltd",
      location: "Centurion, South Africa",
      startDate: "2021-09",
      endDate: "2020-11",
      description: "Developed enterprise web applications using .NET Core and React. Collaborated with product team to translate requirements into technical solutions. Led migration from monolith to microservices architecture.",
      highlights: [
        "Built real-time dashboard processing 1M+ data points daily",
        "Reduced page load time by 60% through performance optimization",
        "Led migration project saving 500+ engineering hours annually"
      ],
      projects: [
        {
          name: "Property Management System",
          client: "National Property Group",
          description: "Developed full-stack property management solution with tenant tracking, lease management, and maintenance scheduling. Integrated with payment gateways for automated rent collection.",
          technologies: [".NET Core", "Angular", "SQL Server", "Azure"],
          metrics: "Processing 500+ monthly transactions with 99.9% uptime"
        },
        {
          name: "Insurance Claims Portal",
          description: "Built customer-facing portal for insurance claim submissions with document upload, status tracking, and automated workflows. Implemented OCR integration for document processing.",
          technologies: ["React", "Node.js", "MongoDB", "AWS Lambda"],
          metrics: "Reduced claim processing time by 45%"
        }
      ]
    },
    {
      id: "exp3",
      title: "Full Stack Developer",
      company: "Quant Engineering Solutions",
      location: "Pretoria, South Africa",
      startDate: "2018-09",
      endDate: "2020-10",
      description: "Full-stack development of customer-facing applications. Implemented RESTful APIs and integrated third-party services. Participated in Agile ceremonies and contributed to sprint planning.",
      highlights: [
        "Developed payment processing module handling $10M+ monthly",
        "Created automated testing framework reducing QA time by 40%",
        "Won quarterly innovation award for process improvement tool"
      ],
      projects: [
        {
          name: "E-commerce Platform",
          client: "Fashion Retail Brand",
          description: "Developed scalable e-commerce solution with inventory management, order processing, and integrated payment solutions. Implemented caching strategies and CDN integration for performance.",
          technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Redis"],
          metrics: "Handled 10,000+ concurrent users during peak sales"
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
      description: "Developed and maintained web applications using C# and JavaScript. Collaborated with senior developers on feature implementation. Learned industry best practices and coding standards.",
      highlights: [
        "Built customer portal increasing client retention by 25%",
        "Contributed to 15+ successful client projects",
        "Completed Microsoft certification during first year"
      ]
    },
    {
      id: "exp5",
      title: "Technical Consultant",
      company: "EOH MC Solutions",
      location: "Cape Town, South Africa",
      startDate: "2016-12",
      endDate: "2018-03",
      description: "Developed and maintained web applications using C# and JavaScript. Collaborated with senior developers on feature implementation. Learned industry best practices and coding standards.",
      highlights: [
        "Built customer portal increasing client retention by 25%",
        "Contributed to 15+ successful client projects",
        "Completed Microsoft certification during first year"
      ],
      projects: [
        {
          name: "Government Portal Modernization",
          client: "National Government Department",
          description: "Modernized legacy ASP.NET applications to responsive web solutions. Implemented single sign-on integration with government identity provider and automated document workflows.",
          technologies: ["ASP.NET MVC", "C#", "SQL Server", "jQuery", "Azure AD"],
          metrics: "Served 2M+ citizens with improved accessibility compliance"
        }
      ]
    },
    {
      id: "exp6",
      title: "Full Stack Developer",
      company: "Quant Engineering Solutions",
      location: "Pretoria, South Africa",
      startDate: "2015-09",
      endDate: "2016-11",
      description: "Full-stack development of customer-facing applications. Implemented RESTful APIs and integrated third-party services. Participated in Agile ceremonies and contributed to sprint planning.",
      highlights: [
        "Developed payment processing module handling $10M+ monthly",
        "Created automated testing framework reducing QA time by 40%",
        "Won quarterly innovation award for process improvement tool"
      ]
    },
    {
      id: "exp7",
      title: "Learner Developer",
      company: "OneLaw (Pty) Ltd",
      location: "Pretoria, South Africa",
      startDate: "2012-01",
      endDate: "2014-10",
      description: "Full-stack development of customer-facing applications. Implemented RESTful APIs and integrated third-party services. Participated in Agile ceremonies and contributed to sprint planning.",
      highlights: [
        "Developed payment processing module handling $10M+ monthly",
        "Created automated testing framework reducing QA time by 40%",
        "Won quarterly innovation award for process improvement tool"
      ],
      projects: [
        {
          name: "Legal Case Management System",
          description: "Developed case management solution for law firm with document management, calendar integration, and client communication tracking. Built custom reporting for billable hours.",
          technologies: ["C#", "WinForms", "SQL Server", "Crystal Reports"],
          metrics: "Used by 50+ legal professionals across the firm"
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
