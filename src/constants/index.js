import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    vuex,
    next,
    git,
    googleAnalytics,
    vue,
    jfrgroup,
    telecard,
    avaib,
    articleSummarizer,
    shirtCustomizer,
    hulu,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development Specialist",
      icon: web,
    },
    {
      title: "Frontend Development Expert",
      icon: mobile,
    },
    {
      title: "CMS Integration Consultant",
      icon: backend,
    },
    {
      title: "User Experience (UX) Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue",
      icon: vue,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Vuex",
      icon: vuex,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Google Analytics",
      icon: googleAnalytics,
    },
    
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "JFR Group International",
      icon: jfrgroup,
      iconBg: "#383E56",
      date: "July 2019 - September 2020",
      points: [
        "Proficiently designed and developed numerous websites using Javascript and Wordpress.",
        "Created user-friendly websites that catered to diverse client needs and industries.",
        "Consistently maintained and updated websites to align with evolving industry trends and client requirements.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Telecard",
      icon: telecard,
      iconBg: "#E6DEDD",
      date: "February 2021 - July 2022",
      points: [
        "Developing and maintaining web applications using React.js.",
        "Developed many CRM systems for companies such as  Bank Al Habib, Noorani Seeds, Eiwan Real Estate, and Telecard's own CRM and many more.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Avaib",
      icon: avaib,
      iconBg: "#383E56",
      date: "August 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and Vue.js.",
        "Collaborating with cross-functional teams including designer, project manager, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Article Summarizer",
      description:
        "An article summarizer tool enables users to paste a website or blog link, generating concise and digestible summaries of the content, simplifying the process of extracting key information from lengthy articles.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rapid-API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: articleSummarizer,
      source_code_link: "https://github.com/nabeeel96/article-summarizer",
      project_link: "https://article-summarizer-liart.vercel.app",
    },
    {
      name: "Shirt Customizer",
      description:
        "A shirt customizer tool allows users to design and personalize their own shirts by choosing from a variety of options such as colors, patterns, graphics, and text, resulting in a unique and tailored garment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "openAI-API",
          color: "green-text-gradient",
        },
        {
          name: "threeJS",
          color: "pink-text-gradient",
        },
      ],
      image: shirtCustomizer,
      source_code_link: "https://github.com/nabeeel96/shirt_customizer",
      project_link: "https://sparkly-melba-d2a622.netlify.app",
    },
    {
      name: "Hulu Clone",
      description:
        "A Hulu clone utilizes the TMDB API to categorize movies, offering a streaming platform that mirrors Hulu's content and features, allowing users to access a vast library of films and TV shows.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tmdb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hulu,
      source_code_link: "https://github.com/nabeeel96/hulu-clone.git",
      project_link: "https://hulu-clone-khaki.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };