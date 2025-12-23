import React, { useState, useEffect } from 'react';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Download, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Users, 
  Menu, 
  X,
  Target,
  Lightbulb,
  Database,
  Briefcase,
  Award,
  FileText,
  ArrowRight
} from 'lucide-react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";

const PORTFOLIO_DATA = {
  hero: {
    name: "Ankit Kumar",
    role: "Product Manager",
    pitch: "Product leader driving 0→1 product builds, GTM strategy, and platform innovation across warehousing, fintech, and AI-led consumer tools.",
    location: "Bangalore / Gurugram / Hyderabad",
    email: "ak199630@gmail.com",
    stats: [
      { label: "Years Experience", value: "4.5+", icon: Briefcase },
      { label: "Users Impacted", value: "Millions", icon: Users },
      { label: "Impact Generated", value: "₹76Cr+", icon: Award },
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/ankit-kumar-917301117/",
      github: "#", 
      resume: "#" 
    }
  },
  about: {
    text: [
      "I am a results-driven Product Manager with over 4.5 years of experience building and scaling digital products at hyper-growth startups like Zepto and Blinkit, as well as large enterprises like Airtel. My expertise lies in bridging the gap between complex operations and user-centric technology.",
      "Currently pursuing my PGP at the Indian School of Business (ISB) with a focus on Technology Management & Marketing. I hold a B.Tech in Electronics and Communications from Delhi Technological University (DTU), where I secured an All India Rank of 5896.",
      "Throughout my career, I've delivered over ₹75Cr+ in impact through data-driven decision making, from optimizing warehouse logistics to launching AI-led consumer tools. When I'm not building products, I'm a passionate basketball player (Gold Medalist) and an avid long-distance runner."
    ]
  },
  experience: [
    {
      company: "Zepto",
      role: "Senior Manager (Warehouse Management System)",
      location: "Bengaluru, India",
      period: "Dec 2024 - Apr 2025",
      description: "Championed AI-enabled process automation and stakeholder alignment, streamlining warehouse ops and accelerating decision-making.",
      achievements: [
        "Architected Microservices foundation on Kubernetes for the AI Control Tower, guaranteeing horizontal scalability for 0→1 roadmap.",
        "Set up API governance across 10+ WMS pipelines, improving data integrity by 30% and driving ₹3Cr in savings.",
        "Redesigned task flows (shift scheduling, order picking) based on 150+ survey insights, boosting operator efficiency by 35%.",
        "Engineered real-time inventory visibility engine, reducing spoilage by 22% (₹1.5Cr to ₹1.2Cr) via automated alerts."
      ],
      tags: ["AI Automation", "Microservices", "Supply Chain", "0 to 1"]
    },
    {
      company: "Blinkit (Zomato)",
      role: "Manager - 1 (Product Growth & Strategy)",
      location: "India",
      period: "Dec 2023 - Sep 2024",
      description: "Directed product growth and operational transformation across a 500+ store network, spearheading digital and AI-driven innovations.",
      achievements: [
        "Youngest manager (25y) selected to lead nationwide team of 500+ dark stores; orchestrated Print Store expansion.",
        "Shipped demand forecasting feature with supervised learning, optimizing excess inventory by 20% (₹10Cr → ₹8Cr).",
        "Rolled out workflow automation features cutting manual overhead, delivering 15% annual savings (₹76Cr → ₹75.1Cr).",
        "Engineered data framework for picking-dispatch workflows, reducing picking inaccuracy by 20% via anomaly detection."
      ],
      tags: ["Growth Strategy", "New Verticals", "ML Integration", "Scale"]
    },
    {
      company: "Algosure LLP",
      role: "Product Manager (Founding Team)",
      location: "India",
      period: "Mar 2021 - Jan 2023",
      description: "Partnered with founders to define 0→1 product roadmap, prioritizing stock screeners, portfolio tracking, and investor tools.",
      achievements: [
        "Defined 0→1 product roadmap prioritizing stock screeners and investor tools, driving 1,200+ early sign-ups.",
        "First product hire converted to equity partner; established foundational processes (PRDs, OKRs, Sprints).",
        "Led delivery of 3 releases including React dashboards and AI-powered insights, improving user activation by 25%.",
        "Integrated 5+ broker APIs (Zerodha, Upstox) enabling low-latency execution and seamless portfolio management."
      ],
      tags: ["Founding PM", "Fintech", "0 to 1", "API Integration"]
    },
    {
      company: "Bharti Airtel",
      role: "Assistant Product Manager",
      location: "Gurugram, India",
      period: "Jun 2019 - Feb 2021",
      description: "Fast-tracked to leadership in 12 months for delivering major product releases and coordinating ~400 stakeholders.",
      achievements: [
        "Reduced customer complaints by 18% (3.5K → 2.9K/mo) by presenting a predictive modeling solution to the CTO.",
        "Spearheaded product roadmap of Airtel Work App, shipping 3 major releases achieving 4.2-star rating (4K+ reviews).",
        "Drove 100% adoption of Airtel Work App by leading 20+ onboarding sessions, digitizing legacy workflows.",
        "Boosted cross-department productivity by 30% by shipping 5+ workflow automation tools across 10+ verticals."
      ],
      tags: ["Enterprise SaaS", "Predictive Modeling", "Digital Transformation"]
    }
  ],
  projects: [
    {
      title: "TriageAI Control Center",
      category: "AI-First QA Automation",
      description: "An AI-first intelligence layer that autonomously analyzes, prioritizes, detects duplicates, assigns, and validates bugs via BrowserStack—reducing manual triage time by over 90%.",
      link: "https://triageai-dash-yf5fgpyn.manus.space",
      stats: [
        { label: "Hours Saved", value: "122.5" },
        { label: "Time-to-Triage", value: "2 min" },
        { label: "Override Rate", value: "6.2%" }
      ],
      outcomes: [
        "Reduced average bug processing time from 30-60 mins to just 2-5 mins.",
        "Implemented semantic duplicate detection with 95% accuracy using embeddings.",
        "Automated reproduction steps by triggering BrowserStack sessions autonomously.",
        "Achieved a 6.2% human override rate, indicating high trust in AI decisions."
      ],
      tech: ["GPT-4", "BrowserStack", "React 19", "Vector Embeddings"]
    },
    {
      title: "AI Control Tower & Ops Automation",
      category: "Supply Chain / Logistics",
      description: "Architected a scalable microservices-based control tower to centralize warehouse operations, reducing manual intervention and enabling real-time decision making.",
      stats: [
        { label: "Savings", value: "₹3Cr+" },
        { label: "Efficiency", value: "+35%" },
        { label: "Adoption", value: "100%" }
      ],
      outcomes: [
        "Reduced spoilage by 22% via real-time inventory visibility",
        "Improved operator efficiency by 35% through UX redesign",
        "Secured 100% adoption within 3 months of launch"
      ],
      tech: ["Kubernetes", "Microservices", "Python", "SQL"]
    },
    {
      title: "Demand Forecasting Engine",
      category: "ML / Growth",
      description: "Built and deployed a supervised learning model to predict inventory demand across dark stores, directly impacting the bottom line by optimizing stock levels.",
      stats: [
        { label: "Inventory", value: "-20%" },
        { label: "Impact", value: "₹2Cr" },
        { label: "Accuracy", value: "High" }
      ],
      outcomes: [
        "Optimized excess inventory from ₹10Cr down to ₹8Cr",
        "Reduced picking inaccuracy by 20% via anomaly detection",
        "Scaled successfully across 500+ dark stores"
      ],
      tech: ["Machine Learning", "Data Pipelines", "WMS"]
    }
  ],
  caseStudies: [
    {
      title: "Glance Commerce Extension",
      subtitle: "Bridging the Discovery-to-Transaction Gap",
      description: "Proposed a 'Zero-Click' commerce layer on the lock screen to solve the 70% cart abandonment problem for D2C brands. The solution uses 'Agentic AI' to automate campaigns and a 'Helix Risk Engine' to underwrite impulse purchases instantly.",
      metrics: ["Zero-Click Checkout", "Agentic Automation", "Reduced RTO"],
      filename: "ISB_Ankit_62510830_Inmobipm_case.pdf",
      color: "bg-red-50 border-red-100"
    },
    {
      title: "InsureApp: AI Claims Platform",
      subtitle: "Reducing Motor Insurance Claim Inspection Time",
      description: "Designed a 'Smart Claims Platform' to reduce settlement TAT from 4.2 days to 2 hours using AI self-inspection and fraud detection algorithms. The solution balances customer NPS with strict regulatory compliance.",
      metrics: ["450% ROI", "TAT: 2 Hours", "Fraud < 2%"],
      filename: "ISB_AnkitKumar_6251830_InsureAppCaseStudy.pdf",
      color: "bg-blue-50 border-blue-100"
    },
    {
      title: "Spotify Live Events Marketplace",
      subtitle: "Solving the 'Discovery Failure' in Live Music",
      description: "Proposed an integrated marketplace within Spotify to convert 626M MAUs into ticket buyers. Leverages listening data for verified fan presales, demand forecasting, and transparent pricing to disrupt the ticketing monopoly.",
      metrics: ["$497M Rev (Yr 3)", "47s Purchase Time", "99% Bot Reduction"],
      filename: "SpotifyLiveMarketEntryStrategy(1).pdf", 
      color: "bg-green-50 border-green-100"
    },
    {
      title: "Empires & Puzzles: Monetization",
      subtitle: "Player-First Monetization Strategy",
      description: "Revamped the monetization strategy for a high-grossing RPG to combat power creep and fatigue. Introduced 'Valor Pass 2.0' and 'Veteran Rewind' systems to balance F2P progression with whale retention.",
      metrics: ["16% Payer Conv.", "$180M Revenue Opt.", "15% Churn Redux"],
      filename: "Empires-and-Puzzles-Player-First-Monetization(2).pdf",
      color: "bg-purple-50 border-purple-100"
    }
  ],
  skills: [
    {
      category: "Product Strategy",
      icon: Target,
      items: ["GTM Strategy", "0→1 Builds", "Roadmap Planning", "OKRs & KPIs", "Platform Innovation"]
    },
    {
      category: "Domain Expertise",
      icon: Lightbulb,
      items: ["Warehousing", "Fintech", "Quick Commerce", "AI-Led Tools", "Consumer Tech"]
    },
    {
      category: "Data & Technical",
      icon: Database,
      items: ["SQL", "Python", "A/B Testing", "Statistical Analysis", "Data-Driven Decisions"]
    }
  ],
  testimonials: [
    {
      text: "Ankit's strategic thinking and execution excellence helped us achieve 300% growth in our key metrics. He's a true product leader.",
      author: "Manager Name",
      role: "VP Engineering, Zepto/Blinkit"
    },
    {
      text: "His ability to translate complex user needs into actionable product features is unmatched. Ankit delivered results consistently.",
      author: "Colleague Name",
      role: "Head of Design, Airtel"
    }
  ]
};

const SectionHeading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block ${className}`}>
    {children}
    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-indigo-500 rounded-full"></span>
  </h2>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-md rounded-xl shadow-sm border border-white/20 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const Button = ({ children, variant = "primary", className = "", icon: Icon, ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0";
  const variants: any = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 border border-transparent",
    secondary: "bg-white text-indigo-600 border border-indigo-100 hover:bg-indigo-50 hover:border-indigo-200 shadow-sm",
    outline: "bg-transparent text-gray-600 border border-gray-300 hover:bg-gray-50 hover:text-gray-900"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
};

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'case-studies', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-gray-800 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-lg z-50 border-b border-white/20 shadow-sm supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
              {PORTFOLIO_DATA.hero.name}
            </span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Case Studies', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-sm font-medium transition-all duration-200 hover:text-indigo-600 relative group ${
                    activeSection === item.toLowerCase().replace(' ', '-') ? 'text-indigo-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 transform origin-left transition-transform duration-200 ${
                    activeSection === item.toLowerCase().replace(' ', '-') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-5 duration-200">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {['About', 'Experience', 'Projects', 'Case Studies', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-3 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-300/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse"></div>
          <div className="absolute bottom-0 left-20 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse delay-1000"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center px-3 py-1 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full text-sm font-medium text-indigo-600 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Available for New Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Hi, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient bg-300%">
                {PORTFOLIO_DATA.hero.name}
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-light">
              {PORTFOLIO_DATA.hero.pitch}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 space-y-3 sm:space-y-0 sm:space-x-6 text-sm md:text-base">
              <div className="flex items-center group">
                <div className="p-2 bg-indigo-50 rounded-lg mr-3 group-hover:bg-indigo-100 transition-colors">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                </div>
                {PORTFOLIO_DATA.hero.location}
              </div>
              <div className="flex items-center group">
                <div className="p-2 bg-indigo-50 rounded-lg mr-3 group-hover:bg-indigo-100 transition-colors">
                  <Mail className="w-4 h-4 text-indigo-600" />
                </div>
                <a href={`mailto:${PORTFOLIO_DATA.hero.email}`} className="hover:text-indigo-600 transition-colors border-b border-transparent hover:border-indigo-200">
                  {PORTFOLIO_DATA.hero.email}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button onClick={() => scrollToSection('contact')}>
                Get in Touch
              </Button>
              <Button variant="outline" icon={Download}>
                Resume
              </Button>
              <div className="flex gap-2">
                <a 
                  href={PORTFOLIO_DATA.hero.social.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 bg-white border border-gray-200 rounded-lg hover:border-indigo-600 hover:text-indigo-600 hover:shadow-md transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button className="p-3 bg-white border border-gray-200 rounded-lg hover:border-indigo-600 hover:text-indigo-600 hover:shadow-md transition-all duration-300">
                  <Github className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block h-[600px]">
             {/* Abstract decorative background */}
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-indigo-200/50 transform rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <img 
                src="/images/hero-bg.png" 
                alt="Abstract Background" 
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>
            
            {/* Stats Cards - Floating Effect */}
            <div className="absolute -left-12 bottom-20 w-full max-w-md space-y-4 z-20">
               {PORTFOLIO_DATA.hero.stats.map((stat, idx) => (
                 <Card key={idx} className={`p-4 flex items-center space-x-5 transform transition-all duration-500 hover:translate-x-2 border-l-4 border-l-indigo-500 backdrop-blur-xl bg-white/90 shadow-lg ${idx === 1 ? 'ml-12' : idx === 2 ? 'ml-24' : ''}`}>
                   <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600 shadow-inner">
                     <stat.icon className="w-6 h-6" />
                   </div>
                   <div>
                     <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                     <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</div>
                   </div>
                 </Card>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Me */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <SectionHeading>About Me</SectionHeading>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
                <img 
                  src="/images/profile-placeholder.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                />
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                {PORTFOLIO_DATA.about.text.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-4xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-1 first-letter:float-left">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Experience */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeading className="mb-16">Professional Experience</SectionHeading>
        <div className="relative border-l-2 border-indigo-100 ml-3 md:ml-6 pl-8 space-y-16">
          {PORTFOLIO_DATA.experience.map((job, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[43px] top-0 p-1.5 bg-white border-2 border-indigo-100 rounded-full group-hover:border-indigo-500 transition-colors duration-300">
                <div className="w-4 h-4 bg-indigo-600 rounded-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              <Card className="p-8 md:p-10 hover:border-indigo-200">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{job.role}</h3>
                    <div className="text-xl text-indigo-600 font-medium mb-2">{job.company}</div>
                    <div className="flex items-center text-gray-500 text-sm font-medium">
                      <MapPin className="w-4 h-4 mr-1" /> {job.location}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 text-indigo-700 font-semibold bg-indigo-50 px-4 py-1.5 rounded-full text-sm inline-block self-start border border-indigo-100">
                    {job.period}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-8 font-medium text-lg leading-relaxed border-l-4 border-indigo-200 pl-4">
                  {job.description}
                </p>

                <div className="mb-8 bg-slate-50/80 p-6 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center uppercase tracking-wide text-sm">
                    <Award className="w-4 h-4 mr-2 text-indigo-500" /> Key Achievements
                  </h4>
                  <ul className="space-y-4">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm md:text-base">
                        <div className="mt-1.5 mr-3 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Projects */}
      <section id="projects" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Dark theme background effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <p className="text-slate-400 max-w-xl">Selected works showcasing product strategy, technical execution, and measurable impact.</p>
            </div>
            <div className="hidden md:block w-24 h-1 bg-indigo-500 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <div key={idx} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-900/20 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-indigo-400 font-bold text-xs mb-2 uppercase tracking-widest">{project.category}</div>
                    <h3 className="text-2xl font-bold group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                  </div>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700 rounded-lg hover:bg-indigo-600 transition-colors">
                      <ExternalLink className="text-slate-300 hover:text-white w-5 h-5" />
                    </a>
                  ) : (
                    <div className="p-2 bg-slate-700/50 rounded-lg cursor-not-allowed">
                      <ExternalLink className="text-slate-500 w-5 h-5" />
                    </div>
                  )}
                </div>

                <p className="text-slate-300 mb-8 leading-relaxed h-auto md:h-24">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {project.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-700/50">
                      <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide opacity-80">Key Outcomes</h4>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-700/50">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-700 text-slate-300 rounded text-xs font-medium border border-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Case Studies */}
      <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionHeading>Product Teardowns & Case Studies</SectionHeading>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Deep dives into product problems, strategic solutions, and detailed analysis.</p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.caseStudies.map((study, idx) => (
            <Card key={idx} className={`p-8 hover:-translate-y-2 transition-all duration-300 border-t-4 ${study.color.replace('bg-', 'border-t-').replace('border-', 'border-')} h-full flex flex-col`}>
              <div className={`w-14 h-14 ${study.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                <FileText className="w-7 h-7 text-gray-700" />
              </div>
              
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">{study.subtitle}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{study.title}</h3>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                {study.description}
              </p>
              
              <div className="space-y-3 mb-8 bg-gray-50 p-4 rounded-lg">
                {study.metrics.map((metric, i) => (
                   <div key={i} className="flex items-center text-sm font-semibold text-gray-700">
                     <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2" />
                     {metric}
                   </div>
                ))}
              </div>

              <a 
                href={`/assets/${study.filename}`} 
                download 
                className="inline-flex items-center justify-center w-full py-3 px-4 bg-white border border-gray-200 rounded-lg text-indigo-600 font-semibold hover:bg-indigo-50 hover:border-indigo-200 transition-all group mt-auto"
              >
                Download PDF <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* 6. Skills */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gradient-to-b from-white to-indigo-50/30 rounded-[3rem] my-12">
        <div className="text-center mb-16">
          <SectionHeading>Core Competencies</SectionHeading>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.skills.map((skillGroup, idx) => (
            <Card key={idx} className="p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-none shadow-md bg-white">
              <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:shadow-indigo-200">
                <skillGroup.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="px-4 py-1.5 bg-gray-50 border border-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:border-indigo-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>



      {/* 8. Contact / CTA */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-50/50 skew-y-3 transform origin-bottom-right translate-y-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Let's Build Something <br/>
            <span className="text-indigo-600">Amazing</span> Together
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
            I'm always interested in discussing new opportunities, exciting product challenges, or just connecting with fellow product enthusiasts.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`mailto:${PORTFOLIO_DATA.hero.email}`} className="w-full sm:w-auto">
              <Button className="w-full text-lg px-10 py-4 shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 hover:-translate-y-1">
                Send Message
              </Button>
            </a>
            <a href={PORTFOLIO_DATA.hero.social.linkedin} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full text-lg px-10 py-4 hover:-translate-y-1" icon={Linkedin}>
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a href={PORTFOLIO_DATA.hero.social.linkedin} className="text-gray-400 hover:text-indigo-600 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${PORTFOLIO_DATA.hero.email}`} className="text-gray-400 hover:text-indigo-600 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-400 text-sm font-medium">© {new Date().getFullYear()} {PORTFOLIO_DATA.hero.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Portfolio />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
