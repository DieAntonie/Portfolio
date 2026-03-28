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
    resumeUrl: "assets/ChrisAnderson-Resume.pdf"
  },

  statement: `Results-driven Senior Software Engineer with 12+ years of experience designing and implementing scalable enterprise solutions. 
  Proven expertise in cloud architecture (AWS/Azure), full-stack development, and DevOps practices. 
  Demonstrated track record of leading cross-functional teams to deliver high-impact projects that reduce costs by 40% and improve system performance by 3x. 
  Passionate about mentoring engineers and implementing best practices that drive operational excellence. 
  Seeking to leverage deep technical expertise and leadership capabilities to architect transformative solutions at a forward-thinking organization.`,

  skills: [
    { category: "Cloud & DevOps", items: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Azure DevOps"] },
    { category: "Languages", items: ["C#", ".NET Core", "JavaScript", "TypeScript", "Python", "SQL", "Go"] },
    { category: "Frameworks", items: ["React", "Angular", "Node.js", "ASP.NET", "Blazor"] },
    { category: "Databases", items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "DynamoDB"] },
    { category: "Tools & Practices", items: ["Azure Boards", "Jira", "Confluence", "Agile/Scrum", "Microservices", "REST APIs", "GraphQL"] }
  ],

  experience: [
    {
      id: "exp1",
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      startDate: "2019-03",
      endDate: "Present",
      description: "Led architecture and development of microservices platform serving 2M+ users. Designed CI/CD pipelines reducing deployment time by 75%. Mentored team of 8 engineers and established coding standards.",
      highlights: [
        "Architected event-driven system processing 50K requests/second",
        "Reduced infrastructure costs by $200K annually through optimization",
        "Implemented automated testing achieving 95% code coverage"
      ]
    },
    {
      id: "exp2",
      title: "Software Engineer II",
      company: "InnovateTech Inc.",
      location: "Seattle, WA",
      startDate: "2016-06",
      endDate: "2019-02",
      description: "Developed enterprise web applications using .NET Core and React. Collaborated with product team to translate requirements into technical solutions. Led migration from monolith to microservices architecture.",
      highlights: [
        "Built real-time dashboard processing 1M+ data points daily",
        "Reduced page load time by 60% through performance optimization",
        "Led migration project saving 500+ engineering hours annually"
      ]
    },
    {
      id: "exp3",
      title: "Software Engineer",
      company: "DataSoft Systems",
      location: "Austin, TX",
      startDate: "2014-01",
      endDate: "2016-05",
      description: "Full-stack development of customer-facing applications. Implemented RESTful APIs and integrated third-party services. Participated in Agile ceremonies and contributed to sprint planning.",
      highlights: [
        "Developed payment processing module handling $10M+ monthly",
        "Created automated testing framework reducing QA time by 40%",
        "Won quarterly innovation award for process improvement tool"
      ]
    },
    {
      id: "exp4",
      title: "Junior Software Developer",
      company: "StartupXYZ",
      location: "Denver, CO",
      startDate: "2012-06",
      endDate: "2013-12",
      description: "Developed and maintained web applications using C# and JavaScript. Collaborated with senior developers on feature implementation. Learned industry best practices and coding standards.",
      highlights: [
        "Built customer portal increasing client retention by 25%",
        "Contributed to 15+ successful client projects",
        "Completed Microsoft certification during first year"
      ]
    }
  ],

  education: [
    {
      type: "degree",
      title: "Bachelor of Science in Computer Science",
      institution: "University of California, Berkeley",
      year: "2012",
      gpa: "3.7",
      honors: "Magna Cum Laude"
    },
    {
      type: "certification",
      title: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-ASA-2023-XXXXX"
    },
    {
      type: "certification",
      title: "Microsoft Certified: Azure Administrator Associate",
      institution: "Microsoft",
      year: "2022",
      credentialId: "AZ-104"
    },
    {
      type: "certification",
      title: "Microsoft Certified: Azure Developer Associate",
      institution: "Microsoft",
      year: "2022",
      credentialId: "AZ-204"
    },
    {
      type: "certification",
      title: "Microsoft Certified: Azure Fundamentals",
      institution: "Microsoft",
      year: "2021",
      credentialId: "AZ-900"
    },
    {
      type: "certification",
      title: "Microsoft Certified Solutions Developer (MCSD)",
      institution: "Microsoft",
      year: "2018",
      credentialId: "MCSD-AppBuilder"
    }
  ],

  projects: [
    {
      title: "CloudCost Analyzer",
      description: "Real-time cloud cost optimization platform that analyzes AWS/Azure spending and provides actionable recommendations. Features ML-powered anomaly detection and automated cost forecasting.",
      technologies: ["Python", "AWS Lambda", "React", "DynamoDB", "SageMaker"],
      image: "assets/images/project-cost.jpg",
      demoUrl: "https://demo.cloudcostanalyzer.com",
      githubUrl: "https://github.com/chrisanderson/cloudcost-analyzer"
    },
    {
      title: "EventFlow Platform",
      description: "Scalable event-driven microservices platform for processing and analyzing streaming data. Handles 1M+ events/day with sub-100ms latency.",
      technologies: [".NET 8", "Kafka", "Kubernetes", "PostgreSQL", "Redis"],
      image: "assets/images/project-eventflow.jpg",
      demoUrl: "https://demo.eventflow.io",
      githubUrl: "https://github.com/chrisanderson/eventflow"
    },
    {
      title: "DevOps Dashboard",
      description: "Centralized monitoring and analytics dashboard for DevOps pipelines. Integrates with GitHub Actions, Azure DevOps, and Jenkins for unified visibility.",
      technologies: ["TypeScript", "Angular", "Node.js", "Elasticsearch", "Grafana"],
      image: "assets/images/project-devops.jpg",
      demoUrl: "https://demo.devopsdash.com",
      githubUrl: "https://github.com/chrisanderson/devops-dashboard"
    },
    {
      title: "SecureVault API",
      description: "Enterprise-grade secrets management API with role-based access control, audit logging, and automatic rotation. Compliance-ready for SOC2 and HIPAA.",
      technologies: ["Go", "PostgreSQL", "gRPC", "Docker", "Vault"],
      image: "assets/images/project-vault.jpg",
      demoUrl: null,
      githubUrl: "https://github.com/chrisanderson/securevault-api"
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
