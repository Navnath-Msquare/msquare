import type { Metadata } from 'next';
import CareersUI from './CareersUI';

export const metadata: Metadata = {
  title: 'Careers - MSquare Software',
  description: 'Explore career opportunities at MSquare Software and be part of a team that’s shaping the future of software solutions.',
};

const jobs = [
  {
    title: 'Junior Software Developer',
    type: 'Full Time',
    description: 'We are looking for a Junior MEAN Stack Developer with a passion for web and mobile app development. The candidate should have fundamental knowledge of MongoDB, Express.js, Angular, and Node.js and strong understanding of system architecture, scalability, and best coding practices.',
    requirements: [
      '1-3 years of experience in full-stack development',
      'Basic understanding of MongoDB, Express.js, Angular, and Node.js.',
      'Knowledge of HTML, CSS, JavaScript, and TypeScript.',
      'Familiarity with RESTful APIs and JSON.',
      'Troubleshoot and debug applications.',
      'Stay up-to-date with new technologies and frameworks',
      'Participate in daily stand-up meetings and agile development processes.'
    ],
    eligibility: [
      'Assist in developing web and mobile applications using MEAN stack.',
      'Work closely with senior developers to implement features and fix bugs.',
      'Write clean, maintainable, and efficient code.',
      'Familiarity with RESTful APIs and JSON.',
      'Understanding of Git and version control systems.',
      'Eagerness to learn and improve technical skills.'
    ],
    benefits: [
      'Attractive salary package for freshers and experienced candidates.',
      'Flexible work environment.',
      'Career growth and performance-based increments.',
      'Learning and development support.'
    ]
  },
  {
    title: 'Business Development Executive',
    type: 'Full Time',
    description: 'Drive growth and expand our market presence by identifying new business opportunities and building strong relationships with clients.',
    requirements: [
      'Proven experience in business development or sales in the IT sector.',
      'Excellent communication and negotiation skills.',
      'Ability to understand technical requirements and present software solutions.',
      'Proactive approach to lead generation and market research.'
    ],
    eligibility: [
      'Identify and target new business opportunities.',
      'Develop and maintain strong client relationships.',
      'Collaborate with the technical team to tailor solutions for clients.',
      'Achieve sales targets and contribute to company growth.'
    ],
    preferredSkills: [
      'Experience with Flutter or React Native for cross-platform mobile development.',
      'Knowledge of Microservices architecture.',
      'Familiarity with TypeScript, Redis, and Elasticsearch.'
    ],
    benefits: [
      'Attractive salary package with incentives.',
      'Flexible work environment.',
      'Global exposure and networking opportunities.',
      'Performance-based growth.'
    ]
  },
  {
    title: 'Senior Software Developer / Team Lead',
    type: 'Full Time',
    description: 'We are seeking a highly experienced Senior MEAN Stack Developer to lead and develop web applications, mobile apps (Android & iOS), and enterprise solutions for our clients. The ideal candidate should have hands-on expertise in MongoDB, Express.js, Angular, and Node.js, along with a strong understanding of system architecture, scalability, and best coding practices.',
    requirements: [
      '5+ years of experience in full-stack web and mobile application development.',
      'Expertise in MongoDB, Express.js, Angular, and Node.js.',
      'Strong knowledge of RESTful APIs, GraphQL, and third-party integrations.',
      'Experience in cloud deployment (AWS, Azure, or Google Cloud).',
      'Familiarity with Docker, Kubernetes, and CI/CD pipelines.',
      'Hands-on experience in Agile development methodologies.',
      'Strong problem-solving skills and ability to work in a fast-paced environment.'
    ],
    eligibility: [
      'Architect, develop, and maintain web and mobile applications using MEAN technologies',
      'Lead the development team, provide technical guidance, and ensure high-quality code.',
      'Collaborate with designers, project managers, and other stakeholders.',
      'Optimize application performance, scalability, and security.',
      'Conduct code reviews and mentor junior developers.',
      'Troubleshoot, debug, and enhance existing applications.',
      'Stay updated with the latest industry trends and emerging technologies.'
    ],
    preferredSkills: [
      'Experience with Flutter or React Native for cross-platform mobile development.',
      'Knowledge of Microservices architecture.',
      'Familiarity with TypeScript, Redis, and Elasticsearch.'
    ],
    benefits: [
      'Competitive salary based on experience.',
      'Flexible work environment.',
      'Growth opportunities and leadership roles.',
      'Learning and development support.'
    ]
  }
];

export default function CareersPage() {
  return <CareersUI jobs={jobs} />;
}
