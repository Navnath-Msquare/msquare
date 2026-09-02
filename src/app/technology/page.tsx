"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TechnologyPage() {
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
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* 01. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#0a1121] overflow-hidden pt-20 lg:pt-0">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/Technology_Banner.png"
            alt="Technology Engineered for Real-World Complexity"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1121] via-[#0a1121]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1121] via-transparent to-transparent z-10"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20 h-full flex flex-col justify-center py-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mb-16 lg:mb-24 mt-10 lg:mt-0"
          >
            <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Technology</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Technology Engineered<br />for Real-World Complexity.
            </h1>
            <p className="text-xl text-gray-300 font-semibold mb-6">
              Secure. Scalable. Integrated. Intelligent.
            </p>
            <p className="text-gray-400 text-lg mb-4 max-w-2xl leading-relaxed">
              MSquare engineers technology platforms that connect applications, workflows, data and intelligence into reliable digital ecosystems.
            </p>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              From user experience to infrastructure, every layer is engineered to work together — helping organizations operate securely, scale confidently and make better-informed decisions.
            </p>
          </motion.div>

          {/* 4 Technology Principles Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 border-t border-white/10 pt-10"
          >
            {[
              { title: 'Secure by Design', desc: 'Protection engineered into every layer.', icon: 'fa-shield-halved' },
              { title: 'Built to Scale', desc: 'Ready for growing users, locations and workloads.', icon: 'fa-chart-simple' },
              { title: 'Integrated by Nature', desc: 'Applications, systems and data working together.', icon: 'fa-link' },
              { title: 'Intelligent by Design', desc: 'Turning information into useful intelligence.', icon: 'fa-brain' }
            ].map((principle, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF9933] shrink-0">
                  <i className={`fa-solid ${principle.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{principle.title}</h4>
                  <p className="text-gray-400 text-sm">{principle.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 02. OUR TECHNOLOGY ARCHITECTURE */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">Our Technology Architecture</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">A Connected Foundation That Powers Every Experience.</h2>
            <p className="text-gray-600">From user experience to infrastructure, every technology layer is engineered to work together as one connected environment.</p>
          </div>

          {/* Architecture Flow (2-Column Grid for all devices > Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             {[
              { num: '01', title: 'EXPERIENCE LAYER', desc: 'Web • Mobile • Dashboards • Role-Based Experiences', text: 'Intuitive digital experiences designed around how people access information and perform their work.', icon: 'fa-desktop', color: 'text-orange-500' },
              { num: '02', title: 'BUSINESS & WORKFLOW LAYER', desc: 'Processes • Approvals • Operations • Administration • Field Execution', text: 'Business logic that transforms organizational processes into structured digital workflows.', icon: 'fa-sitemap', color: 'text-blue-500' },
              { num: '03', title: 'INTELLIGENCE LAYER', desc: 'AI • Analytics • Insights • Summaries • Decision Support', text: 'Turn operational information into meaningful intelligence that helps people understand, prioritize and decide.', icon: 'fa-brain', color: 'text-green-500' },
              { num: '04', title: 'INTEGRATION LAYER', desc: 'APIs • Enterprise Systems • Government Platforms • Third-Party Services', text: 'Connect applications, platforms and external services through secure, structured integrations.', icon: 'fa-link', color: 'text-purple-500' },
              { num: '05', title: 'DATA & SECURITY LAYER', desc: 'Structured Data • Documents • Access Control • Audit Trails • Protection', text: 'Protect organizational information while maintaining governance, traceability and controlled access.', icon: 'fa-lock', color: 'text-yellow-500' },
              { num: '06', title: 'CLOUD & INFRASTRUCTURE LAYER', desc: 'Availability • Performance • Scalability • Monitoring • Reliability', text: 'Infrastructure engineered to support growing users, workloads, locations and business-critical operations.', icon: 'fa-cloud', color: 'text-cyan-500' }
            ].map((layer, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 hover:shadow-xl hover:border-[#FF9933] transition-all group"
              >
                <div className={`w-16 h-16 shrink-0 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center ${layer.color} group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${layer.icon} text-2xl`}></i>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="text-[#1a2b4c] font-bold text-xl">{layer.num}</span>
                    <span className={`${layer.color} text-[11px] font-black uppercase tracking-wider`}>{layer.title}</span>
                  </div>
                  <p className="text-gray-800 text-sm font-bold mb-3">{layer.desc}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{layer.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[#1a2b4c] font-bold text-sm lg:text-base">Six layers. One connected technology foundation.</p>
        </div>
      </section>

      {/* 03. OUR TECHNOLOGY CAPABILITIES */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">Our Technology Capabilities</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">Engineering Across the Digital Stack.</h2>
            <p className="text-gray-600">Our capabilities span the technology lifecycle — from architecture and application engineering to intelligence, integration, security and infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Engineering & Architecture', text: 'Robust, modular and maintainable platforms engineered around operational requirements and long-term evolution.', icon: 'fa-cube', color: 'text-orange-500' },
              { num: '02', title: 'AI & Intelligence', text: 'AI-assisted capabilities that transform operational information into summaries, insights and decision support.', icon: 'fa-brain', color: 'text-green-500' },
              { num: '03', title: 'Integration & APIs', text: 'Secure integrations connecting enterprise systems, government platforms, services and external data sources.', icon: 'fa-link', color: 'text-purple-500' },
              { num: '04', title: 'Cloud & Scalability', text: 'Cloud-ready infrastructure engineered for availability, performance and growing workloads.', icon: 'fa-cloud', color: 'text-blue-500' },
              { num: '05', title: 'Security & Data Protection', text: 'Role-based access, encryption, auditability and data protection engineered across platform layers.', icon: 'fa-shield-halved', color: 'text-teal-500' },
              { num: '06', title: 'Web & Mobile Engineering', text: 'Connected web and mobile experiences for management, employees, administrators and field operations.', icon: 'fa-mobile-screen', color: 'text-orange-400' },
              { num: '07', title: 'Data, Analytics & Visibility', text: 'Dashboards, reporting and analytics that bring clarity to operations and support informed decisions.', icon: 'fa-chart-pie', color: 'text-yellow-500' },
              { num: '08', title: 'Technology Engineering', text: 'Modern engineering practices focused on performance, reliability, maintainability and continuous improvement.', icon: 'fa-code', color: 'text-indigo-500' }
            ].map((cap, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#FF9933] transition-all group flex flex-col"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`text-3xl ${cap.color} group-hover:scale-110 transition-transform`}>
                    <i className={`fa-solid ${cap.icon}`}></i>
                  </div>
                  <div>
                    <span className={`font-bold text-sm ${cap.color}`}>{cap.num}</span>
                    <h3 className="font-bold text-[#1a2b4c] text-lg leading-tight">{cap.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-auto">{cap.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. TECHNOLOGY STACK */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center">
          <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">Technology Stack</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-4">Modern Technologies. Chosen for Reliability and Scale.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Technology should serve the platform — not define its limitations. We select technologies based on performance, security, maintainability, integration requirements and the environments in which our platforms need to operate.
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16"
          >
            {[
              { name: 'Angular', icon: 'fa-brands fa-angular', color: 'text-[#dd0031]' },
              { name: 'Node.js', icon: 'fa-brands fa-node-js', color: 'text-[#339933]' },
              { name: 'MongoDB', icon: 'fa-solid fa-envira', color: 'text-[#47a248]' }, 
              { name: 'TypeScript', icon: 'fa-solid fa-code', color: 'text-[#3178c6]' },
              { name: 'Ionic', icon: 'fa-solid fa-mobile-screen', color: 'text-[#3880ff]' },
              { name: 'AWS', icon: 'fa-brands fa-aws', color: 'text-[#ff9900]' },
              { name: 'Docker', icon: 'fa-brands fa-docker', color: 'text-[#2496ed]' },
              { name: 'Firebase', icon: 'fa-solid fa-fire', color: 'text-[#ffca28]' },
              { name: 'Redis', icon: 'fa-solid fa-database', color: 'text-[#dc382d]' },
              { name: 'Nginx', icon: 'fa-solid fa-server', color: 'text-[#009639]' }
            ].map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center group cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-3 group-hover:shadow-md group-hover:border-[#FF9933] transition-all">
                  <i className={`${tech.icon} text-3xl ${tech.color} group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100`}></i>
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-gray-900 transition-colors">{tech.name}</span>
              </div>
            ))}
          </motion.div>

          <p className="text-gray-500 text-sm max-w-3xl mx-auto">
            Our technology ecosystem continues to evolve as we adopt the right technologies for performance, security, maintainability and scale.
          </p>
        </div>
      </section>

      {/* 05 & 06. ENGINEERED FOR THE LONG TERM & CTA */}
      <section className="bg-[#0a1121] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
           <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FF9933] blur-[150px]"></div>
           <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600 blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">Engineered For The Long Term</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Technology That Works Today.<br/>And Evolves for Tomorrow.
            </h2>
            <p className="text-gray-400 mb-6">
              Organizations evolve. Processes change. Users grow. Systems need to connect. Data becomes more important and new possibilities emerge.
            </p>
            <p className="text-gray-400">
              We engineer platforms with that reality in mind — creating technology foundations that can be secured, integrated, scaled and continuously improved over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-24 border-b border-white/10 pb-24">
            {[
              { title: 'Reliable', desc: 'Built for dependable, business-critical operations.', icon: 'fa-shield' },
              { title: 'Adaptable', desc: 'Designed to evolve with changing organizational requirements.', icon: 'fa-arrows-rotate' },
              { title: 'Connected', desc: 'Ready to work within a wider technology ecosystem.', icon: 'fa-link' },
              { title: 'Maintainable', desc: 'Engineered for sustainable long-term development.', icon: 'fa-gears' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF9933] mb-6 hover:bg-[#FF9933] hover:text-white transition-colors cursor-default">
                  <i className={`fa-solid ${item.icon} text-2xl`}></i>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Have a Complex Technology Challenge?</h3>
              <p className="text-gray-400 max-w-2xl">
                Whether you are modernizing an existing process, connecting multiple systems or engineering a new digital platform, it begins with understanding what needs to work. Let's engineer the right technology foundation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact" className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold hover:bg-[#e68a2e] transition-colors text-center shadow-lg shadow-orange-500/20">
                Talk to MSquare <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-bold hover:bg-white/10 transition-colors text-center">
                Request a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
