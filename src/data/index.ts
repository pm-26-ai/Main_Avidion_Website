import { IoSearch } from "react-icons/io5";
import { BiPaint } from "react-icons/bi";
import { LuCodeXml } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { GoFileCode } from "react-icons/go";
import { MdAppRegistration } from "react-icons/md";

export const navItems = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Services",
    url: "/services",
  },
  {
    id: 3,
    name: "About Us",
    url: "/about-us",
  },
  {
    id: 4,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 5,
    name: "Blogs",
    url: "/blogs",
  },
  {
    id: 6,
    name: "Career",
    url: "/careers",
  },
];

export const blogs = [
  {
    id: 1,
    image: "/blogs/blog-1.png",
    mainTech: "Chatbots",
    date: "May 24, 2025",
    heading: "How Chatbots Are Improving Patient Engagement in Clinics",
    content:
      "In today’s fast-paced, tech-driven world, healthcare providers are under...",
    author: "Shreya Goyal",
    url: "/blogs/ai-chatbot-in-healthcare",
  },
  {
    id: 2,
    image: "/blogs/blog-2.png",
    mainTech: "CRM",
    date: "April 26, 2025",
    heading: "What Changes Does CRM Bring to a Business?",
    content:
      "In today’s competitive world, building strong customer relationships is key...",
    author: "Shreya Goyal",
    url: "/blogs/boost-business-crm-system",
  },
  {
    id: 3,
    image: "/blogs/blog-3.png",
    mainTech: "ERP",
    date: "April 28, 2025",
    heading: "How Does ERP Help to Manage Business Processes?",
    content:
      "Running a business means handling many moving parts—sales, finance...",
    author: "Shreya Goyal",
    url: "/blogs/erp-helps-in-business",
  },
  {
    id: 4,
    image: "/blogs/blog-1.png",
    mainTech: "Chatbots",
    date: "May 24, 2025",
    heading: "How Chatbots Are Improving Patient Engagement in Clinics",
    content:
      "In today’s fast-paced, tech-driven world, healthcare providers are under...",
    author: "Shreya Goyal",
    url: "/blogs/ai-chatbot-in-healthcare",
  },
];

export const whatWeOfferCards = [
  {
    id: 1,
    title: "Custom Website Development",
    content:
      "Tailor-made, responsive, and lightning-fast websites built with the latest tech stack.",
    icon: "/what-we-offer/icon-1.svg",
  },
  {
    id: 2,
    title: "AI Integration & Chatbots",
    content: "Visual insights into your site’s performance.",
    icon: "/what-we-offer/icon-2.svg",
  },
  {
    id: 3,
    title: "Mobile App Development",
    content: "Automatic suggestions and the best keywords to target.",
    icon: "/what-we-offer/icon-3.svg",
  },
  {
    id: 4,
    title: "CRM",
    content:
      "Salesforce, HubSpot, Zoho CRM tailored to enhance customer satisfaction, raising scores by 25%.",
    icon: "/what-we-offer/icon-4.svg",
  },
  {
    id: 5,
    title: "3D Websites",
    content:
      "3D websites capture attention and create memorable brand stories through immersive visuals and interaction.",
    icon: "/what-we-offer/icon-5.svg",
  },
  {
    id: 6,
    title: "WMS & ERP Systems",
    content:
      "Seamless warehouse management system integration reduces inventory costs by 15%.",
    icon: "/what-we-offer/icon-6.svg",
  },
];

export const portfolio = [
  {
    id: 1,
    videoUrl: "/portfolio/portfolio-1.mp4",
    title: "Avidion Softwares – Futuristic AI & Cloud Transformation Website",
    description:
      "Avidion Software's official website is a visually captivating, interactive platform designed to position the company as a leader in AI integration, cloud solutions...",
    // redirectUrl:"#"
  },
  {
    id: 2,
    videoUrl: "/portfolio/portfolio-2.mp4",
    title:
      "Avidion: Crafting Future-Ready Digital Experiences with AI at the Core",
    description:
      "Avidion is a premium software development company dedicated to transforming ideas into reality for startups and enterprises worldwide. With a futur...",
    // redirectUrl:"#"
  },
  {
    id: 3,
    videoUrl: "/portfolio/portfolio-3.mp4",
    title:
      "ElevateCare – Suggesting an uplift in healthcare standards and patient experience.",
    description:
      "This website was developed for HealthCare Center, a forward-thinking medical facility dedicated to providing advanced healthcare for a better...",
    // redirectUrl:"#"
  },
  {
    id: 4,
    videoUrl: "/portfolio/portfolio-4.mp4",
    title: "Logistics sector",
    description:
      "A warehouse worker wearing a headset and holding a RFID embedded device, navigating through aisles filled with sports merchandise. The worker... ",
    // redirectUrl:"#"
  },
  {
    id: 5,
    videoUrl: "/portfolio/portfolio-5.mp4",
    title: "Healthcare Sector",
    description:
      "A radiologist reviews a CT scan on a computer screen, where AI-generated annotations highlight areas of concern, such as potential intracranial...",
    // redirectUrl:"#"
  },
  {
    id: 6,
    videoUrl: "/portfolio/portfolio-6.mp4",
    title: "Real Estate",
    description:
      "A real estate agent uses a computer displaying AI-generated property descriptions alongside high-resolution images of properties...",
    // redirectUrl:"#"
  },
  {
    id: 7,
    videoUrl: "/portfolio/portfolio-7.mp4",
    title: "E-commerce",
    description:
      "A digital interface showcasing AI-generated fashion designs based on textual descriptions. The screen displays multiple apparel images created...",
    // redirectUrl:"#"
  },
];

export const howWeWork = [
  {
    title: "Discovery",
    description:
      "We begin by understanding your business needs, goals, and the specific challenges you want to address.",
    icon: IoSearch,
  },
  {
    title: "Planning",
    description:
      "Our team creates a detailed roadmap outlining the scope, timeline, resources, and deliverables for your project.",
    icon: MdAppRegistration,
  },
  {
    title: "Design",
    description:
      "We create user-centric designs that align with your brand identity and provide optimal user experience.",
    icon: BiPaint,
  },
  {
    title: "Development",
    description:
      "Our developers build your solution using cutting-edge technologies and best development practices.",
    icon: LuCodeXml,
  },
  {
    title: "Testing",
    description:
      "Rigorous quality assurance ensures your solution works flawlessly across all devices and scenarios.",
    icon: GoFileCode,
  },
  {
    title: "Deployment",
    description:
      "We handle the smooth launch of your solution, ensuring everything runs perfectly in the production environment.",
    icon: HiOutlineRocketLaunch,
  },
  {
    title: "Support & Growth",
    description:
      "Our relationship continues with ongoing maintenance, updates, and strategic growth initiatives.",
    icon: FaChartLine,
  },
];

export const tapeSection = [
  {
    url: "./infinite-scroll/gemini.svg",
  },
  {
    url: "./infinite-scroll/instamojo.svg",
  },
  {
    url: "./infinite-scroll/openai.svg",
  },
  {
    url: "./infinite-scroll/paypal.svg",
  },
  {
    url: "./infinite-scroll/payu.svg",
  },
  {
    url: "./infinite-scroll/razorpay.svg",
  },
  {
    url: "./infinite-scroll/stripe.svg",
  },
  {
    url: "./infinite-scroll/lyro.svg",
  },
];

export const whyChooseUs = [
  {
    id: 1,
    icon: "/why-choose-us/rocket.png",
    title: "Innovation-Led Development – ",
    content: "We blend creativity and code for futuristic solutions.",
  },
  {
    id: 2,
    icon: "/why-choose-us/lock.png",
    title: "Security by Design – ",
    content:
      "Your data and systems stay protected with enterprise-grade security.",
  },
  {
    id: 3,
    icon: "/why-choose-us/cross.png",
    title: "Modular Architecture – ",
    content: "Scale effortlessly with plug-and-play custom solutions.",
  },
  {
    id: 4,
    icon: "/why-choose-us/hand.png",
    title: "Agile & Transparent – ",
    content:
      "Stay in the loop with iterative development and real-time collaboration.",
  },
  {
    id: 5,
    icon: "/why-choose-us/bulb.png",
    title: "Human + AI Intelligence – ",
    content: "Combine strategy and automation for smarter decision-making.",
  },
  {
    id: 6,
    icon: "/why-choose-us/brain.png",
    title: "Deep Domain Expertise-",
    content:
      "Empowering Business Transformation with AI, Cloud, and Enterprise Solutions",
  },
];

export const currentOpenings = [
  {
    title: "3D Designer",
    content:
      "We're seeking a talented UI/UX designer with strong 3D design expertise to craft immersive and visually compelling user experiences for next-gen web and mobile applications.",
    department: "Design",
    workType: ["On-site", "Full-time"],
    requirements: [
      "2+ years of professional experience in UI/UX design",
      "Proficiency in 3D design tools like Blender, Figma, or Adobe XD",
      "Strong understanding of user-centered design principles",
      "Ability to create wireframes, mockups, and interactive prototypes",
      "Experience designing for both web and mobile platforms",
      "Understanding of animation, transitions, and micro-interactions in 3D environments",
    ],
    benefits: [
      "Creative freedom on cutting-edge projects",
      "Opportunity to work with AI-driven & 3D experiences",
      "Collaborative and innovation-driven environment",
      "Health insurance",
      "Competitive salary",
    ],
  },

  {
    title: "Mobile & Custom Software Developer",
    content:
      "We're looking for a passionate developer experienced in building high-performance mobile apps and custom software solutions using modern frameworks like React Native and Flutter.",
    department: "Technology",
    workType: ["On-site", "Full-time"],
    requirements: [
      "2+ years of hands-on experience in mobile app development",
      "Proficiency in React Native and/or Flutter",
      "Experience in building and deploying apps for both Android and iOS",
      "Familiarity with RESTful APIs, Firebase, or GraphQL",
      "Knowledge of app performance optimization and debugging",
      "Experience developing custom software solutions for clients",
    ],
    benefits: [
      "Opportunity to work on AI-driven and innovative products",
      "Exposure to diverse client projects and domains",
      "Health insurance",
      "Competitive salary",
      "Skill development and certification support",
    ],
  },
];
