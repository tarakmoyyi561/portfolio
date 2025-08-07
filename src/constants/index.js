import maisonava from '../assets/projects/maisonava.png';
import ringBuilder from '../assets/projects/ringbuilder.png';
import jewelCounter from '../assets/projects/jewelcounter.png';
import nsutErp from '../assets/projects/nsit.png';
import irsm from '../assets/projects/irsm.png';
import thomsonPress from '../assets/projects/thomsonpress.jpg';
import pbl from '../assets/projects/pbl.png';

// src/constants/index.js

export const HERO_CONTENT = `Hi, I’m Tarak Moyyi  
Senior Software Engineer

I specialize in building secure, scalable web applications using PHP, Laravel, and Node.js.
      With over a decade of experience, I’ve delivered enterprise-grade ERP and eCommerce platforms.
      I enjoy translating business needs into performant backend systems and APIs.
      My approach is user-focused, performance-driven, and clean-code oriented.
      I’ve worked extensively with MySQL, JavaScript, Bootstrap, and RESTful APIs.
      From cloud deployments on AWS and Linode to integrating Stripe and PayPal, I cover it all.
      I'm constantly improving and keeping up with tech trends like AI tools and automation.
      Whether collaborating with teams or owning end-to-end delivery, I get the job done.
      Let’s work together to turn your next project into a real-world success.`;

export const ABOUT_TEXT = `I’m a passionate software engineer with 10+ years of experience in web development and backend architecture.
      I’ve built applications for industries ranging from education to eCommerce and enterprise finance.
      My core stack includes Laravel, PHP, MySQL, CodeIgniter, and JavaScript, backed by strong API design skills.
      I'm known for building maintainable, testable systems with strong version control and documentation.
      At Sparsh and Plum Soft, I led multiple full-cycle projects with a focus on scalable architecture and security.
      I'm comfortable integrating payment gateways like Stripe, PayPal, and BillDesk with ease.
      Tools like Postman, JIRA, GitHub, and AWS are part of my everyday workflow.
      I value clean design patterns, code reviews, and continual improvement.
      I believe in crafting software that solves real problems and adapts to user needs.
      When not coding, I enjoy exploring AI tools and cloud optimization strategies.`;

export const TECH_STACK = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'PHP',
  'Laravel',
  'CodeIgniter',
  'MySQL',
  'Bootstrap',
  'Git',
];

export const EXPERIENCES = [
   {
    year: '2025 – Present',
    role: 'Senior Software Engineer',
    company: 'Gravity Cybertech Pvt Ltd.',
    description: [
      
    ],
    technologies: ['Laravel', 'Vue js', 'PHP', 'Node.js', 'MySQL', 'GitHub'],
  },
  {
    year: '2021 – 2025',
    role: 'Team Lead - Senior Software Engineer',
    company: 'Sparsh Communications Pvt. Ltd.',
    description: [
      'Spearheaded API development for user activities, marketplace functionality, cart, and order management, supporting over 100K concurrent users.',
      'Conducted Stripe and PayPal payment integrations, enabling secure and seamless eCommerce transactions.',
      'Leveraged AI for dynamic image generation, enhancing user experience with personalized and automated visuals.',
      'Upgraded Laravel frameworks from v5 to v9 and implemented 3D modeling integrations.',
      'Optimized code to support 100,000 concurrent users, improving platform performance.',
      'Delivered tailored solutions with advanced features like multi-currency support and payment integrations.',
    ],
    technologies: ['Laravel', 'PHP', 'Node.js', 'Stripe', 'AWS', 'MySQL', 'SQL', 'GitHub', 'Jira'],
  },
  {
    year: '2021 (Contract)',
    role: 'Full Stack Developer',
    company: 'Avanto Technologies',
    description: [
      'Designed and developed a Laravel-based diamond customization platform with advanced product logic.',
      'Integrated Razorpay payments, achieving a 95% success rate in transactions.',
      'Implemented real-time ring builder workflows, enhancing user experience and reducing customization time by 25%.',
    ],
    technologies: ['Laravel', 'JavaScript', 'Razorpay', 'MySQL'],
  },
  {
    year: '2012 – 2021',
    role: 'Senior PHP Developer',
    company: 'Plum Soft Solutions',
    description: [
      'Delivered multiple ERP modules for HR, payroll, finance, student management, and fee processing.',
      'Managed full-cycle implementation of university and school systems.',
      'Integrated BillDesk and SBI payment gateways, ensuring secure and seamless transactions.',
    ],
    technologies: ['Laravel', 'CodeIgniter', 'PHP', 'MySQL', 'Bootstrap'],
  },
];

export const PROJECTS = [
  {
    title: 'Maisonava (E-Commerce Platform)',
    duration: '06/2024 – Present',
    description: [
      'Developed backend APIs supporting user activities, marketplace features, and cart functionality.',
      'Integrated Stripe and PayPal for secure payment processing.',
    ],
    technologies: ['Node.js', 'APIs'],
    image: maisonava,
    demo: 'https://maisonava.com',
  },
  {
    title: 'Ring Builder (AI Image Generation)',
    duration: '2023 – 2024',
    description: [
      'Engineered unique image generation with AI (ChatGPT), allowing dynamic jewelry designs based on user prompts.',
      'Expanded product customization capabilities for bespoke jewelry.',
    ],
    technologies: ['PHP', 'Laravel', 'APIs', 'ReactJS'],
    image: ringBuilder,
    demo: 'https://www.dazl.design/custom_designer',
  },
  {
    title: 'Jewel Counter (E-Commerce Platform)',
    duration: '2021 – 2023',
    description: [
      'Implemented user management, marketplace, bespoke jewelry, order management, pricing configuration, and multi-currency management.',
      'Designed well-structured databases and optimized code.',
      'Integrated Stripe for payments and upgraded Laravel from version 5 to 9.',
      'Enabled image generation using 3dm and STL file uploads.',
      'Used Jira for project management and performed unit testing, code reviews, and deployments.',
      'Managed media file storage in AWS S3 and Rackspace multi-cloud storage.',
      'Monitored Linode load balancer and handled SSL updates and subdomain creation.',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'AWS S3', 'Stripe', 'Jira'],
    image: jewelCounter,
    demo: 'https://app.jewelcounter.com/dashboard',
  },
  {
    title: 'NSUT ERP (University Management System)',
    duration: '2018 – 2021',
    description: [
      'Developed a complete lifecycle system for students, faculty, and staff.',
      'Implemented modules for fee management, admit card generation, examinations, results, and hostel management.',
      'Built dynamic sites for competitive exams and recruitment processes.',
      'Integrated BillDesk and SBI payment gateways.',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'APIs'],
    image: nsutErp,
    demo: 'https://www.imsnsit.org/',
  },
  {
    title: 'IRSM (ERP - Indian Road Survey Management)',
    duration: '2016 – 2018',
    description: [
      'Implemented task management, project management, and inventory management.',
      'Developed HR and accounts modules for streamlined operations.',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'APIs'],
    image: irsm,
    demo: 'http://plumware.in/irsm/do.php?pw=_3Su_ODFeq.StS',
  },
  {
    title: 'Thomson Press (ERP)',
    duration: '2014 – 2016',
    description: [
      'Implemented inventory management, sales, purchase, and assets management.',
      'Developed HR and accounts modules, including order management for digital systems.',
      'Provided IMS reports, account ledgers, and trial balances.',
      'Created a unique order management dashboard for real-time order status tracking.',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'APIs'],
    image: thomsonPress,
    demo: 'http://plumdatum.com/thomsonpress/index2.htm',
  },
  {
    title: 'PBL (ERP - PBL Transport Corporation Private Ltd)',
    duration: '2012 – 2014',
    description: [
      'Developed and supported modules for trip sheets, sales, purchase, and store management.',
      'Implemented vehicle tracking and HR payroll systems.',
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'APIs'],
    image: pbl,
    demo: 'https://pbltransport.net/prod/pblbee/login',
  },
];

export const CONTACT = {
  email: 'tarakmoyyi@gmail.com',
  phone: '+91-9160694616',
  location: 'Hyderabad, India',
};

