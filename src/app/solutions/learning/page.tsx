"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LearningPage() {
  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 overflow-x-hidden">
      
      {/* 01. HERO SECTION */}
      <section className="bg-white pt-12 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Breadcrumbs */}
          <div className="text-sm font-semibold text-gray-500 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#FF9933]">Home</Link>
            <i className="fa-solid fa-chevron-right text-[10px]"></i>
            <span className="text-gray-400">Solutions</span>
            <i className="fa-solid fa-chevron-right text-[10px]"></i>
            <span className="text-[#FF9933]">Learning & Development</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 relative">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:w-1/2 z-10"
            >
              <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Learning & Development</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b4c] mb-6 leading-tight">
                Learning That Keeps<br />Organizations <span className="text-[#FF9933]">Ready.</span>
              </h1>
              <p className="text-xl text-[#1a2b4c] font-bold mb-6">
                Enterprise Learning. Compliance. Certification. Continuous Growth.
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Empower your employees with role-relevant learning, stay compliant with regulatory requirements, validate knowledge and turn learning into continuous development.
              </p>

              <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-8">
                {[
                  { title: 'Role Relevant', subtitle: 'Learning', icon: 'fa-graduation-cap' },
                  { title: 'RBI & Regulatory', subtitle: 'Compliance', icon: 'fa-shield-halved' },
                  { title: 'Certification &', subtitle: 'Recognition', icon: 'fa-certificate' },
                  { title: 'Rewards for', subtitle: 'Continuous Learning', icon: 'fa-gift' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group cursor-default w-[calc(50%-1rem)] md:w-auto">
                    <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-500 mb-3 group-hover:scale-110 group-hover:border-[#FF9933] group-hover:text-[#FF9933] transition-all">
                      <i className={`fa-solid ${item.icon} text-lg`}></i>
                    </div>
                    <span className="text-xs font-bold text-[#1a2b4c] leading-tight mb-1">{item.title}</span>
                    <span className="text-[10px] text-gray-500 leading-tight">{item.subtitle}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] w-full"
            >
              {/* Image Container that breaks out to the right */}
              <div className="absolute inset-0 lg:-mr-[calc(50vw-50%)] lg:rounded-l-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/Images/corporate-learning-hero.jpg"
                  alt="Enterprise Learning Platform"
                  fill
                  className="object-cover object-left"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent lg:hidden"></div>
              </div>

              {/* Floating Certificate Badge */}
              <div className="absolute top-8 left-4 lg:-left-16 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-5 flex flex-col items-center border border-gray-100 z-10 w-48 transition-transform hover:-translate-y-1">
                <div className="absolute -inset-1 border border-yellow-400/30 rounded-2xl m-1.5"></div>
                <div className="relative z-10 text-center mb-3">
                  <span className="text-gray-500 text-xs tracking-wider uppercase mb-1 block">Certificate</span>
                  <span className="text-[#1a2b4c] font-bold text-sm block">of Achievement</span>
                </div>
                <div className="relative z-10 w-32 h-24 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                  <Image
                    src="/Images/dummy-certificate.jpg"
                    alt="Dummy Certificate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </motion.div>
          </div>

          {/* The Learning Journey */}
          <div className="pt-12 border-t border-gray-100">
            <h3 className="text-center text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-8">The Learning Journey</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto pb-4 hide-scrollbar">
              {[
                { title: 'INDUCT', desc: 'Structured onboarding', icon: 'fa-user-plus' },
                { title: 'LEARN', desc: 'Role-relevant programs', icon: 'fa-book-open' },
                { title: 'ASSESS', desc: 'Validate knowledge', icon: 'fa-clipboard-check' },
                { title: 'COMPLY', desc: 'Stay aligned with compliance', icon: 'fa-shield-halved' },
                { title: 'CERTIFY', desc: 'Recognize achievement', icon: 'fa-file-signature' },
                { title: 'ENGAGE', desc: 'Encourage participation', icon: 'fa-users-rays' },
                { title: 'GROW', desc: 'Turn learning into development', icon: 'fa-arrow-trend-up' }
              ].map((step, idx, arr) => (
                <div key={idx} className="flex items-center shrink-0 group">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex flex-col items-center w-28 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center text-gray-500 mb-3 group-hover:border-[#FF9933] group-hover:text-[#FF9933] transition-colors shadow-sm">
                      <i className={`fa-solid ${step.icon} text-xl`}></i>
                    </div>
                    <span className="text-[#1a2b4c] font-black text-xs tracking-wider mb-1">{step.title}</span>
                    <span className="text-gray-500 text-[10px] leading-tight">{step.desc}</span>
                  </motion.div>
                  
                  {idx < arr.length - 1 && (
                    <div className="text-gray-300 mx-1 md:mx-3 text-sm">
                      <i className="fa-solid fa-angles-right"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. ENTERPRISE LEARNING ACROSS THE ORGANIZATION */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">One Learning Ecosystem.<br />Every Level. Every Role.</h2>
            <p className="text-gray-600 mb-4">
              Create a centralized learning environment that connects employees across organizational structures, departments, designations and locations — while delivering learning relevant to their responsibilities.
            </p>
            <p className="text-[#FF9933] font-bold text-lg">The right learning, for the right employee, at the right time.</p>
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 hover:border-[#FF9933] transition-colors duration-300 mb-12 overflow-x-auto hide-scrollbar">
            
            {/* Top Level (Locations) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 relative min-w-fit mx-auto">
              <div className="absolute top-1/2 left-[15%] w-[70%] h-[2px] bg-gray-100 -z-0 hidden md:block"></div>
              
              <div className="bg-white border-2 border-[#1a2b4c] rounded-xl px-6 py-4 z-10 w-48 text-center flex flex-col items-center shadow-md shrink-0">
                <i className="fa-solid fa-building text-[#1a2b4c] text-2xl mb-2"></i>
                <span className="font-bold text-xs tracking-wider text-[#1a2b4c]">HEAD OFFICE</span>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl px-6 py-4 z-10 w-48 text-center flex flex-col items-center text-gray-500 opacity-70 shrink-0">
                <i className="fa-solid fa-sitemap text-2xl mb-2"></i>
                <span className="font-bold text-xs tracking-wider">REGIONAL OFFICES</span>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-xl px-6 py-4 z-10 w-48 text-center flex flex-col items-center text-gray-500 opacity-70 shrink-0">
                <i className="fa-solid fa-store text-2xl mb-2"></i>
                <span className="font-bold text-xs tracking-wider">BRANCHES</span>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center mb-12 text-gray-300">
               <i className="fa-solid fa-arrow-down-long text-3xl"></i>
            </div>

            {/* Bottom Level (Role Flow) */}
            <div className="flex items-center justify-center gap-3 min-w-fit mx-auto">
              <div className="px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 bg-gray-50 shrink-0">DEPARTMENT</div>
              <i className="fa-solid fa-arrow-right text-gray-300 text-[10px] shrink-0"></i>
              <div className="px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 bg-gray-50 shrink-0">DESIGNATION</div>
              <i className="fa-solid fa-arrow-right text-gray-300 text-[10px] shrink-0"></i>
              <div className="px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 bg-gray-50 shrink-0">ROLE</div>
              <i className="fa-solid fa-arrow-right text-gray-300 text-[10px] shrink-0"></i>
              <div className="px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-600 bg-gray-50 shrink-0">RESPONSIBILITY</div>
              <i className="fa-solid fa-arrow-right text-[#FF9933] text-sm mx-1 shrink-0"></i>
              <div className="px-5 py-2 border border-[#FF9933] bg-orange-50 rounded-lg text-xs font-black text-[#FF9933] shrink-0 shadow-sm">RELEVANT LEARNING</div>
            </div>

          </div>

          {/* Example Roles */}
          <div className="max-w-4xl mx-auto">
            <h4 className="text-center font-bold text-[#1a2b4c] mb-6">Structured Learning For Every Role</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { role: 'Cashier / Teller', desc: 'Operations, process learning and applicable compliance' },
                { role: 'Loan / Credit Officer', desc: 'Credit processes, lending policies and product knowledge' },
                { role: 'Branch Manager', desc: 'Operations, leadership, policies and compliance' },
                { role: 'Compliance / Risk Team', desc: 'Regulatory updates and mandatory programs' },
                { role: 'Senior Management', desc: 'Regulatory, policy, leadership and strategic learning' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                     <i className="fa-solid fa-user-tie text-[#FF9933]"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-[#1a2b4c] text-sm mb-1">{item.role}</h5>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03. LEARNING & COMPLIANCE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">Learning Built Around<br/>What the Organization Requires.</h2>
            <p className="text-gray-600">
              Enterprise learning is not one-size-fits-all. Structure learning around regulatory requirements, organizational policies, operational responsibilities and employee roles.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { title: 'RBI Compliance Learning', desc: 'Structured learning around applicable RBI compliance and regulatory awareness requirements.', icon: 'fa-building-columns', color: 'text-blue-600' },
              { title: 'Organization-Specific Compliance', desc: 'Configure mandatory learning around internal policies, processes and compliance programs.', icon: 'fa-building-shield', color: 'text-purple-600' },
              { title: 'Operational Learning', desc: 'Build learning around products, processes, operations, SOPs, policies and employee responsibilities.', icon: 'fa-gears', color: 'text-green-600' },
              { title: 'Role-Based Mandatory Learning', desc: 'Assign learning according to department, designation, role and responsibility.', icon: 'fa-users-gear', color: 'text-orange-500' }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#FF9933] transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <i className={`fa-solid ${pillar.icon} text-3xl ${pillar.color}`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#1a2b4c] mb-3 leading-tight">{pillar.title}</h3>
                <p className="text-gray-600 text-sm">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Flexible Learning Architecture */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 hover:border-[#FF9933] transition-colors duration-300 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/3">
              <h3 className="text-xl font-bold text-[#1a2b4c] mb-3">Flexible Learning Architecture</h3>
              <p className="text-gray-600 text-sm">
                Create, manage and deliver learning in a structured, scalable and flexible way.
              </p>
            </div>
            
            <div className="lg:w-2/3 flex flex-col gap-8 w-full overflow-x-auto hide-scrollbar">
              {/* Architecture Flow */}
              <div className="flex items-center justify-between gap-2 min-w-fit">
                {[
                  { name: 'PROGRAM', icon: 'fa-layer-group' },
                  { name: 'COURSE', icon: 'fa-book' },
                  { name: 'MODULE', icon: 'fa-cubes' },
                  { name: 'CONTENT', icon: 'fa-file-video' },
                  { name: 'ASSESSMENT', icon: 'fa-clipboard-list' }
                ].map((item, idx, arr) => (
                  <div key={idx} className="flex items-center shrink-0">
                    <div className="flex flex-col items-center w-20">
                      <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#1a2b4c] mb-2 shadow-sm">
                        <i className={`fa-solid ${item.icon}`}></i>
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 tracking-wider text-center">{item.name}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="mx-2 md:mx-4 text-gray-300"><i className="fa-solid fa-arrow-right"></i></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Supported Content */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-gray-200">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider w-full md:w-auto text-center md:text-left">Supported Content:</span>
                {[
                  { name: 'Video', icon: 'fa-youtube', color: 'text-red-500' },
                  { name: 'PDF', icon: 'fa-file-pdf', color: 'text-red-400' },
                  { name: 'Presentation', icon: 'fa-file-powerpoint', color: 'text-orange-500' },
                  { name: 'Document', icon: 'fa-file-word', color: 'text-blue-500' }
                ].map((content, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-gray-200 text-xs font-semibold text-gray-600">
                    <i className={`fa-solid ${content.icon} ${content.color}`}></i> {content.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. ASSESS. CERTIFY. DEVELOP. */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">Learning Should Lead Somewhere.</h2>
            <p className="text-gray-600 mb-4">
              Learning becomes meaningful when organizations can validate understanding, recognize achievement and use learning information to support employee development.
            </p>
            <p className="text-[#FF9933] font-bold text-lg mb-10">From learning activity to development visibility.</p>

            {/* Horizontal Arrow Flow Diagram */}
            <div className="flex flex-wrap items-center justify-center w-full gap-2 lg:gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              {[
                { label: 'LEARN', icon: 'fa-book-open-reader' },
                { label: 'ASSESS', icon: 'fa-pen-to-square' },
                { label: 'VALIDATE', icon: 'fa-list-check' },
                { label: 'CERTIFY', icon: 'fa-award' },
                { label: 'EVALUATE', icon: 'fa-chart-line' },
                { label: 'DEVELOP', icon: 'fa-stairs' }
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-50 text-[#1a2b4c] group-hover:bg-[#FF9933] group-hover:text-white transition-colors flex items-center justify-center text-lg md:text-xl mb-3 border border-gray-200 group-hover:border-[#FF9933] shadow-sm">
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-gray-700 tracking-wider uppercase group-hover:text-[#FF9933] transition-colors">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="mx-2 md:mx-4 text-[#FF9933] text-sm md:text-base">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Learn', desc: 'Complete assigned and relevant learning.', icon: 'fa-book-open-reader' },
              { step: '02', title: 'Assess', desc: 'Validate understanding through assessments and quizzes.', icon: 'fa-pen-to-square' },
              { step: '03', title: 'Validate', desc: 'Measure knowledge and completion.', icon: 'fa-list-check' },
              { step: '04', title: 'Certify', desc: 'Recognize successful achievement.', icon: 'fa-award' },
              { step: '05', title: 'Evaluate', desc: 'Understand learning participation and progress.', icon: 'fa-chart-line' },
              { step: '06', title: 'Develop', desc: 'Use insights to support continuous employee development.', icon: 'fa-stairs' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-[#FF9933] transition-colors"
              >
                <div className="absolute top-0 right-0 p-6 text-7xl font-black text-gray-50 opacity-50 group-hover:text-orange-50 transition-colors z-0">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF9933] text-2xl mb-6">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a2b4c] mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. CONTINUOUS LEARNING & ENGAGEMENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">Keep Learning Active.</h2>
            <p className="text-gray-600">
              Learning should not end when a course is completed. Encourage continuous participation through knowledge activities, challenges, recognition and healthy competition.
            </p>
          </div>

          {/* Visual Sequence */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-20 overflow-x-auto pb-4 hide-scrollbar w-full">
            {[
              { title: 'WEEKLY QUIZ', icon: 'fa-stopwatch', color: 'text-blue-500' },
              { title: 'KNOWLEDGE CHALLENGE', icon: 'fa-puzzle-piece', color: 'text-purple-500' },
              { title: 'RANKING', icon: 'fa-ranking-star', color: 'text-yellow-500' },
              { title: 'LEARNING CHAMPION', icon: 'fa-crown', color: 'text-[#FF9933]' },
              { title: 'RECOGNITION', icon: 'fa-medal', color: 'text-red-500' },
              { title: 'REWARD', icon: 'fa-gift', color: 'text-green-500' }
            ].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col md:flex-row items-center shrink-0 w-full md:w-auto">
                <div className="flex flex-col items-center text-center w-32">
                  <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center mb-4">
                    <i className={`fa-solid ${step.icon} text-2xl ${step.color}`}></i>
                  </div>
                  <span className="text-[10px] font-black text-gray-600 uppercase tracking-wider">{step.title}</span>
                </div>
                
                {idx < arr.length - 1 && (
                  <div className="hidden md:block mx-4 text-gray-300">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                )}
                {/* Mobile down arrow */}
                {idx < arr.length - 1 && (
                  <div className="md:hidden my-4 text-gray-300">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 3 Compact Ideas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Learning Champions', desc: 'Recognize employees who consistently learn and perform.', icon: 'fa-trophy' },
              { title: 'Leaderboards & Rankings', desc: 'Create healthy participation across employees, teams and locations.', icon: 'fa-list-ol' },
              { title: 'Continuous Knowledge', desc: 'Keep employees engaged beyond mandatory courses.', icon: 'fa-lightbulb' }
            ].map((idea, idx) => (
              <div key={idx} className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100 flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center text-[#FF9933]">
                  <i className={`fa-solid ${idea.icon} text-lg`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2b4c] mb-1">{idea.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{idea.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. CUSTOMER SUCCESS */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">Customer Success</span>
            <h2 className="text-3xl font-bold text-[#1a2b4c]">Enterprise Learning in Action.</h2>
          </div>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:border-[#FF9933] transition-colors duration-300 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 relative min-h-[300px] lg:min-h-full">
                <Image 
                  src="/Images/fusion-app.jpg"
                  alt="Fusion Finance Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="lg:w-3/5 p-8 lg:p-12">
                <h3 className="text-3xl font-black text-[#1a2b4c] mb-2">Fusion Finance</h3>
                <p className="text-[#FF9933] font-bold mb-6">6,000+ Active Employees Supported</p>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                  A centralized Learning & Development platform supporting structured learning, compliance programs, assessments, certifications and continuous employee engagement across the organization.
                </p>

                {/* Proof Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { val: '6,000+', label: 'Active Employees' },
                    { val: 'Structured', label: 'Enterprise Learning' },
                    { val: 'Compliance', label: 'Mandatory Learning' },
                    { val: 'Continuous', label: 'Knowledge Engagement' }
                  ].map((stat, idx) => (
                    <div key={idx} className="border border-gray-100 rounded-xl p-4 text-center bg-gray-50 flex flex-col justify-center h-full">
                      <div className="text-[#1a2b4c] font-black text-lg mb-1">{stat.val}</div>
                      <div className="text-gray-500 text-[10px] font-bold uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Capabilities list */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                  {[
                    'RBI Compliance Learning', 'Organization-Specific Learning', 'Department & Designation-Based Learning',
                    'Assessments & Quizzes', 'Continuous Learning', 'Learning Champions', 'Recognition & Rewards'
                  ].map((cap, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                      <i className="fa-solid fa-circle-check text-green-500"></i> {cap}
                    </div>
                  ))}
                </div>

                <Link href="/customer-success" className="inline-flex items-center gap-2 text-white bg-[#1a2b4c] px-6 py-3 rounded-lg font-bold hover:bg-[#FF9933] transition-colors text-sm shadow-md">
                  Explore Customer Success Story <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. FINAL CTA */}
      <section className="bg-[#0a1121] py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#FF9933] blur-[120px] opacity-20"></div>
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10 text-center">
          <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-4 block">BUILD A CULTURE OF CONTINUOUS LEARNING</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Learning That Moves<br/>People and Organizations Forward.
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            From induction and mandatory learning to assessments, certification, engagement and employee development — create one connected environment for continuous organizational learning.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold hover:bg-[#e68a2e] transition-colors shadow-lg shadow-orange-500/20 text-center">
              Talk to MSquare <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-bold hover:bg-white/10 transition-colors text-center">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
