import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'BVR Code | Freelance Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to the website of BVR Code', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Benjamin',
  subtitle: 'I\'m a Freelance Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile',
  paragraphOne: 'I am a professional and enthusiastic full-stack software engineer, with a strong focus on front-end development.',
  paragraphTwo: 'My skills go from front-end web development (with Typescript, React ...) to back-end web development (with .NET, Node, Python ...) to mobile apps (with React Native, Ionic ...). I stay up-to-date with the latest trends so every challenge is welcome.',
  paragraphThree: 'If you want to work with me, or just talk, do not hesitate to contact me!',
  resume: 'https://drive.google.com/file/d/1aFGoFWx5ZiLb_SjnI67oBBKNhUwFp9w5/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-u2be',
    title: 'U2be website',
    info: 'A pixel perfect clone of the U2 website, made for a Belgian U2 tribute band named \'U2be\'.',
    info2: 'Built with PHP, Laravel, OctoberCMS, Bootstrap, SASS.',
    url: 'https://u2be.eu',
  },
  {
    id: nanoid(),
    img: 'project-matchup',
    title: 'Matchup',
    info: 'I have built the fundamentals and first versions of the cross-platform Matchup apps for both Android and iOS from scratch. I guided and managed other developers who started working on the app later in the project\'s lifecycle.',
    info2: 'Built with React Native, Typescript, Nodejs, Firebase, Google Cloud Postgres.',
    url: 'https://matchupapp.net'
  },
  {
    id: nanoid(),
    img: 'project-tezzex',
    title: 'Tezzex auto-buy micro-service',
    info: 'I have built a micro-service that can find and buy products on several ',
    info2: 'Built with Typescript, Nodejs, Express, Puppeteer, Postgres.',
    url: 'https://tezzex.com'
  },
  {
    id: nanoid(),
    img: 'project-studentplanner',
    title: 'Student Planner',
    info: 'Application to manage students and their internships for your company.',
    info2: 'Built with Typescript, React, Ant design, SASS, Firebase.',
    url: 'https://stud-plan.web.app',
    repo: 'https://github.com/BenjaVR/StudentPlanner', // if no repo, the button will not show up
    remark: 'Login required, contact me if interested.'
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'benjamin@bvrcode.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
