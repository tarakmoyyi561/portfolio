import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhp, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaLaravel,
  FaGithub, FaStripe, FaPaypal, FaJira, FaAws, FaDatabase,
  FaCode, FaShoppingCart, FaLaptopCode, FaServer
} from 'react-icons/fa';
import {
  SiJquery, SiJson, SiCodeigniter, SiPostman, SiApache, SiMysql, SiNginx
} from 'react-icons/si';
import { GiArtificialIntelligence, GiReceiveMoney } from 'react-icons/gi';
import { MdOutlineSecurity } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';

const categories = [
  {
    title: 'Web Technologies',
    skills: [
      { icon: <FaPhp className='text-6xl text-indigo-600' />, name: 'PHP' },
      { icon: <FaNodeJs className='text-6xl text-green-600' />, name: 'Node.js' },
      { icon: <SiJquery className='text-6xl text-blue-500' />, name: 'jQuery' },
      { icon: <FaHtml5 className='text-6xl text-orange-600' />, name: 'HTML' },
      { icon: <FaCss3Alt className='text-6xl text-blue-600' />, name: 'CSS3' },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { icon: <FaJs className='text-6xl text-yellow-400' />, name: 'JavaScript' },
      { icon: <SiJson className='text-6xl text-yellow-700' />, name: 'JSON' },
      { icon: <TbApi className='text-6xl text-teal-500' />, name: 'RESTful APIs' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { icon: <FaLaravel className='text-6xl text-red-500' />, name: 'Laravel' },
      { icon: <SiCodeigniter className='text-6xl text-orange-500' />, name: 'CodeIgniter' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { icon: <SiMysql className='text-6xl text-blue-500' />, name: 'MySQL' },
      { icon: <FaDatabase className='text-6xl text-green-600' />, name: 'SQL' },
    ],
  },
  {
    title: 'Version Control & Testing',
    skills: [
      { icon: <FaGithub className='text-6xl text-white' />, name: 'GitHub' },
      { icon: <SiPostman className='text-6xl text-orange-600' />, name: 'Postman' },
      { icon: <FaCode className='text-6xl text-purple-400' />, name: 'Unit Testing' },
      { icon: <MdOutlineSecurity className='text-6xl text-pink-500' />, name: 'Code Review' },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { icon: <FaAws className='text-6xl text-yellow-500' />, name: 'AWS S3' },
      { icon: <FaServer className='text-6xl text-green-400' />, name: 'Linode' },
      { icon: <FaStripe className='text-6xl text-indigo-500' />, name: 'Stripe' },
      { icon: <FaPaypal className='text-6xl text-blue-500' />, name: 'PayPal' },
      { icon: <GiReceiveMoney className='text-6xl text-orange-500' />, name: 'Bill Desk' },
      { icon: <FaJira className='text-6xl text-[#0052CC]' />, name: 'JIRA' },
      { icon: <GiArtificialIntelligence className='text-6xl text-green-400' />, name: 'ChatGPT - AI' },
    ],
  },
  {
    title: 'Web Server',
    skills: [
      { icon: <SiApache className='text-6xl text-red-600' />, name: 'Apache' },
      { icon: <SiNginx className='text-6xl text-green-500' />, name: 'Nginx' },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      { icon: <FaCode className='text-6xl text-cyan-400' />, name: 'Payment Gateway Integration' },
      { icon: <FaLaptopCode className='text-6xl text-yellow-400' />, name: 'ERP Systems' },
      { icon: <FaShoppingCart className='text-6xl text-green-400' />, name: 'eCommerce Platforms' },
    ],
  },
];

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>
        Technologies
      </motion.h1>
      <div className='space-y-12'>
        {categories.map((category, index) => (
          <div key={index}>
            <h2 className='mb-6 text-2xl font-semibold text-center'>{category.title}</h2>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className='flex flex-wrap items-center justify-center gap-6'>
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4'>
                  {skill.icon}
                  <p className='mt-2 text-sm text-neutral-400'>{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
