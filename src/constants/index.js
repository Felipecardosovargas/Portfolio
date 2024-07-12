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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  student,
  Instituto_Federal_Sul_rio_grandense,
  prefa,
  self_employed,
  carrent,
  jobit,
  tripguide,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web developer",
    company_name: "Student",
    icon: student,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Recently, I delved into programming and initiated an internal school project for a science fair.",
      "This endeavor provided me with valuable exposure to block-based programming and foundational web development.",
      "I honed my skills in creating games using HTML, CSS, and scripting languages during this process.",
      "The project not only enhanced my technical abilities but also fueled my passion for exploring programming further.",
    ],
  },
  {
    title: "Professional Transformation",
    company_name: "Instituto_Federal_Sul_rio_grandense",
    icon: Instituto_Federal_Sul_rio_grandense,
    iconBg: "#E6DEDD",
    date: "April 2023 - Dec 2026",
    points: [
      
      "Entering Instituto Federal marked a pivotal step in my career journey, where I immersed myself deeply in the study of informatics.",
      "At Instituto Federal, I expanded my knowledge and skills in computer science, elevating my understanding of programming languages and software development.",
      "The rigorous curriculum at Instituto Federal equipped me with advanced techniques and methodologies essential for tackling complex coding challenges.",
      "My experience at Instituto Federal not only deepened my technical proficiency but also fostered a passion for pursuing innovative solutions in the field of informatics",
    ],
  },
  {
    title: "Traine DBA",
    company_name: "Prefeitura",
    icon: prefa,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Transitioning into a role at Sapiranga City Hall, I focused on cultivating soft skills beyond my initial informatics training.",
      "Although not directly in an IT role, I revolutionized operations by crafting high-quality BA spreadsheets and automating critical processes.",
      "This experience allowed me to refine project management skills and enhance organizational efficiency.",
      "My contributions led to significant advancements in workflow optimization and data-driven decision-making within the municipal sector.",
    ],
  },
  {
    title: "Self employed",
    company_name: "Freelancers platforms",
    icon: self_employed,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Present",
    points: [
      "I specialize in developing interactive landing pages using advanced technologies such as the MERN stack and Django, particularly for e-commerce platforms.",
      "My approach involves collaborating closely with diverse teams to integrate Python and JavaScript frameworks, ensuring dynamic and responsive web experiences.",
      "By leveraging my expertise, I contribute to enhancing user engagement and achieving client objectives effectively.",
      "My work emphasizes teamwork and a client-centric approach, ensuring that projects are delivered with high quality and innovation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };