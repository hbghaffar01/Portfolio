import {
  Adtv,
  rain,
  soar,
  clg,
  site,
  AstraTech,
  nathan,
  kraft,
  mobile,
  backend,
  creator,
  web,
  repairdesk,
  softsquare,
  repairdeskApp,
  coreDirection,
  deskDesignSystem,
  portfoilio,
  soutvilleSite,
  crypto
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Vue Developer",
    icon: web,
  },
  {
    title: "Typescript",
    icon: creator,
  },
  {
    title: "Node.js",
    icon: backend,
  }
];

const experiences = [
  {
    title: "Frontend Engineer",
    company_name: "Astra Tech",
    icon: AstraTech,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using js, Vue.js, Nuxt.js and React.js, Next.js, Mongo db, Node.js, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Converting old version code to new standards working on big scale projects using json based UI rendering and writing of documentations for other developers.",
      "Project Management using tool like jira and setting up monorepo system for project.",
      "Working with feature like reversing project and live streaming over large scale application",
      "Participating in scrum, Distributing task among the developers.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Nathan & Nathan",
    icon: nathan,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using js, Vue.js, Nuxt.js and React.js, Next.js, Mongo db, Node.js, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Converting old version code to new standards.",
      "Project Management using tool like jira and setting up monorepo system for project.",
      "Participating in scrum, Distributing task among the developers.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Repairdesk",
    icon: repairdesk,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using js, Vue.js and React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in scrum, User Feedback analysis.",
    ],
  },
  {
    title: "Associate Frontend Engineer",
    company_name: "Softsquare",
    icon: softsquare,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using Vue.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in  scrums, code reviews and providing constructive feedback to other developers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Nathan & Nathan",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "Repairdesk",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Softsquare",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "adtv.com",
    description:
      "The entertainment project based on live streaming and handling large data.",
    tags: [
      {
        name: "vue.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "white-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "Vitest",
        color: "green-text-gradient",
      },
      {
        name: "project-management",
        color: "orange-text-gradient",
      },
      {
        name: "cross-functional-team",
        color: "white-text-gradient",
      },
      {
        name: "live streaming support",
        color: "blue-text-gradient",
      }
    ],
    image: Adtv,
    source_code_link: "",
  },
  {
    name: "icp.com",
    description:
      "A project of uae for visa service.",
    tags: [
      {
        name: "vue.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "white-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "Vitest",
        color: "green-text-gradient",
      },
      {
        name: "project-management",
        color: "orange-text-gradient",
      },
      {
        name: "cross-functional-team",
        color: "white-text-gradient",
      }
    ],
    image: soar,
    source_code_link: "",
  },
  {
    name: "Rain.com",
    description:
      "A web3 project to trade crypto.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Adobe-photo-shop",
        color: "orange-text-gradient",
      },
      {
        name: "Typescript",
        color: "white-text-gradient",
      },
    ],
    image: rain,
    source_code_link: "",
  },
  {
    name: "Club-lab-golf",
    description:
      "A CRM system that manage the user activity provide analysis using charts and calendars to boot productivity.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "Nuxt",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Adobe-photo-shop",
        color: "orange-text-gradient",
      },
      {
        name: "Typescript",
        color: "white-text-gradient",
      },
    ],
    image: clg,
    source_code_link: "",
  },
  {
    name: "crypto site",
    description:
      "The porfolio for crypto site with live data and orderbook",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      }
    ],
    image: crypto,
    source_code_link: "",
  },
  {
    name: "Golf Kraft",
    description:
      "A Golf website for Golf lovers in uae",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      }
    ],
    image: kraft,
    source_code_link: "",
  },
  {
    name: "Club-lab-golf-website",
    description:
      "A Golf website for Golf lovers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Jira",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "orange-text-gradient",
      }
    ],
    image: site,
    source_code_link: "",
  },
  {
    name: "Repairdesk.com",
    description:
      "A Pos system that had allowed more than 3000+ store across the world for management of the each and every thing related to their business.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nest",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "desk-design-system",
        color: "pink-text-gradient",
      },
    ],
    image: repairdeskApp,
    source_code_link: "",
  },
  {
    name: "core-direction",
    description:
      "Web application that enables users to search for health related actitvites and it also allow coorporate for manage event for the organization and it's successfull accross united arab emirated.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "web-socket",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
    ],
    image: coreDirection,
    source_code_link: "",
  },
  {
    name: "desk-design-system",
    description:
      "A comprehensive npm User Interface package that is used accross the repairdesk oldeer and newer verion made with vuejs and tailwind. each and every component for web are developed in it.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "storybook",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: deskDesignSystem,
    source_code_link: "https://github.com/desk-design-system/d2s",
  },
  {
    name: "Southville Solution Site",
    description:
      "Web application that is used for customer support for southville solutions and this let know the client about the project completed and achievement made by the company.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: soutvilleSite,
    source_code_link: "",
  },
  {
    name: "Personal Portfolio",
    description: "Web application that my own project works and achievement.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfoilio,
    source_code_link: "https://github.com/hbghaffar01/React-Portfolio",
  },
];

export { services, experiences, testimonials, projects };
