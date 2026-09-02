"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ATMAPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans text-gray-900">
      
      {/* 01. HERO */}
      <section className="relative w-full bg-white flex flex-col pt-16 md:pt-24 lg:pt-32 pb-0">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-20 flex flex-col lg:flex-row mb-12">
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 pr-0 lg:pr-12 relative z-20"
          >
            <span className="text-[#2b6a4b] font-bold text-sm tracking-widest uppercase mb-4 block">
              AGRICULTURE & FIELD PROGRAM MANAGEMENT — ATMA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#1a2b4c] leading-[1.1] mb-6 tracking-tight">
              Plan. Execute.<br />Measure. Impact.<br />
              <span className="text-[#2b6a4b]">From Field to Farmer.</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl font-medium mb-10 leading-relaxed max-w-xl">
              Digitize agriculture extension programs from planning to field execution — connecting schedules, BTM activities, farmer participation, field evidence, outcomes and reporting in one platform.
            </p>
          </motion.div>
        </div>

        {/* Hero Background Image - Absolute positioned but respecting a certain height */}
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-[600px] lg:h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 lg:hidden" />
          <Image 
            src="/assets/ATMA (2).png" 
            alt="ATMA Agriculture Field Execution" 
            fill 
            className="object-cover object-right-top"
            priority
          />
        </div>

        {/* 5-Pillar Overlap Component */}
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-30 transform translate-y-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 hover:border-[#FF9933] transition-colors duration-300 p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:divide-x divide-gray-100">
              {[
                { icon: 'fa-calendar-check', title: 'Plan & Schedule', desc: 'Structure programs and field activities.' },
                { icon: 'fa-person-walking-luggage', title: 'Field Execution', desc: 'Enable BTMs to execute planned activities.' },
                { icon: 'fa-users', title: 'Farmer Participation', desc: 'Record beneficiary participation and inclusion.' },
                { icon: 'fa-camera', title: 'Field Evidence', desc: 'Capture activity evidence from the field.' },
                { icon: 'fa-chart-line', title: 'Outcomes & Reporting', desc: 'Track progress and support program review.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center px-2">
                  <div className="text-[#2b6a4b] text-3xl mb-4">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h3 className="font-bold text-[#1a2b4c] text-sm mb-2 leading-tight">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* spacer for the overlapping card */}
      <div className="h-32 md:h-24 bg-white"></div>

      {/* 02. ONE CONNECTED PROGRAM JOURNEY */}
      <section className="py-24 bg-white border-t border-gray-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#2b6a4b] font-bold text-xs tracking-widest uppercase mb-4 block">
              ONE PLATFORM. END-TO-END PROGRAM MANAGEMENT.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-6">
              From Planning to Measurable Field Outcomes.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Bring planning, execution, participation, evidence and reporting into one connected program lifecycle.
            </p>
          </motion.div>

          {/* 7-Step Horizontal Timeline */}
          <div className="relative w-full max-w-6xl mx-auto mb-16">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[5%] right-[5%] h-0.5 bg-gray-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-8 relative z-10">
              {[
                { step: '01', title: 'PLAN', sub: 'Define Programs & Activities', desc: 'Create programs, schemes and activities with objectives, targets and timelines.', icon: 'fa-calendar-days' },
                { step: '02', title: 'SCHEDULE', sub: 'Assign Field Activities', desc: 'Schedule activities by date and location and assign them to the appropriate BTM.', icon: 'fa-clock' },
                { step: '03', title: 'EXECUTE', sub: 'Conduct Activities in the Field', desc: 'BTMs access their schedules and conduct assigned activities across villages and field locations.', icon: 'fa-person-chalkboard' },
                { step: '04', title: 'RECORD', sub: 'Capture Farmer Participation', desc: 'Record attendance and beneficiary information, including participation across relevant categories.', icon: 'fa-clipboard-user' },
                { step: '05', title: 'EVIDENCE', sub: 'Document Field Execution', desc: 'Capture photographs, documents and activity evidence directly from the field.', icon: 'fa-camera-retro' },
                { step: '06', title: 'MEASURE', sub: 'Track Progress & Outcomes', desc: 'Monitor activity completion, farmer reach, coverage and program outcomes.', icon: 'fa-chart-pie' },
                { step: '07', title: 'REPORT', sub: 'Review & Improve', desc: 'Generate structured reports and provide program leadership with visibility for review and better planning.', icon: 'fa-file-lines' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-100 shadow-sm flex flex-col items-center justify-center mb-6 relative group-hover:border-[#2b6a4b] transition-colors z-10">
                    <span className="text-[#2b6a4b] font-bold text-xs mb-1">{item.step}</span>
                    <i className={`fa-solid ${item.icon} text-gray-400 text-xl group-hover:text-[#1a2b4c] transition-colors`}></i>
                  </div>
                  <h4 className="font-bold text-[#1a2b4c] text-sm tracking-widest mb-2">{item.title}</h4>
                  <h5 className="font-bold text-gray-800 text-sm mb-3 leading-tight">{item.sub}</h5>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Simple Button-style Timeline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-2 max-w-4xl mx-auto mt-16"
          >
            {['Plan', 'Schedule', 'Execute', 'Record', 'Evidence', 'Measure', 'Report'].map((step, idx, arr) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="px-5 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm font-bold text-gray-700">
                  {step}
                </span>
                {idx < arr.length - 1 && (
                  <i className="fa-solid fa-arrow-right text-gray-300 text-sm"></i>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 03. KEY CAPABILITIES */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#2b6a4b] font-bold text-xs tracking-widest uppercase mb-4 block">KEY CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-6">
              Built for Agriculture Extension Management.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'fa-calendar-day', title: 'Program Planning & Scheduling', desc: 'Structure schemes, programs, activities, targets, schedules and field assignments from one environment.' },
              { icon: 'fa-mobile-screen', title: 'BTM Field Execution', desc: 'Give BTMs a focused mobile experience to view assigned activities, record execution and update field progress.' },
              { icon: 'fa-users-viewfinder', title: 'Farmer Participation & Inclusion', desc: 'Capture farmer participation with beneficiary information and category-wise visibility for better program monitoring.' },
              { icon: 'fa-shield-halved', title: 'Field Evidence & Traceability', desc: 'Maintain photographs, documents and field evidence against activities to strengthen execution visibility and accountability.' },
              { icon: 'fa-gauge-high', title: 'Performance Monitoring', desc: 'Track completion, coverage, participation and BTM performance through role-based dashboards.' },
              { icon: 'fa-file-signature', title: 'Outcomes & Reporting', desc: 'Convert field activity data into structured reports and management visibility for program review and decision-making.' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#FF9933] transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="text-[#2b6a4b] text-3xl mb-6">
                  <i className={`fa-regular ${item.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#1a2b4c] mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. PROGRAM VISIBILITY */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#2b6a4b] font-bold text-xs tracking-widest uppercase mb-4 block">FROM FIELD ACTIVITY TO PROGRAM VISIBILITY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-6">
              Know What Is Happening. Where. And With What Outcome.
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Field programs become more effective when leadership can see execution beyond activity counts. The ATMA platform brings together field progress, participation, evidence and outcomes to create a clearer view of program implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Activity Progress', desc: 'Know what is planned, completed and pending.', icon: 'fa-list-check' },
              { title: 'BTM Performance', desc: 'Understand execution across assigned field teams.', icon: 'fa-user-check' },
              { title: 'Farmer Reach', desc: 'Track participation and program coverage.', icon: 'fa-people-group' },
              { title: 'Field Outcomes', desc: 'Connect activities with measurable program results.', icon: 'fa-bullseye' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 text-[#2b6a4b] flex items-center justify-center text-2xl mb-6">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h4 className="font-bold text-[#1a2b4c] mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. ROLE-BASED CONNECTIVITY */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-[#2b6a4b] font-bold text-xs tracking-widest uppercase mb-4 block">CONNECTING PROGRAM LEADERSHIP WITH FIELD EXECUTION</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4c] mb-6">One Program. Connected at Every Level.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-4">
              The platform creates a connected flow of information from program leadership to field execution and back.
            </p>
            <p className="text-[#2b6a4b] font-bold italic text-sm">
              Planning moves from leadership to field. Visibility moves from field to leadership.
            </p>
          </motion.div>

          <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4">
             {/* Desktop Connecting Line */}
             <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-[#2b6a4b]/30 z-0"></div>
             
             {[
               { role: 'Project Director', level: 'District-level', desc: 'District-level program visibility, monitoring and review.', icon: 'fa-user-tie', color: 'bg-[#1a2b4c]' },
               { role: 'Taluka / Block', level: 'Coordinator', desc: 'Local program coordination and performance visibility.', icon: 'fa-users-gear', color: 'bg-gray-700' },
               { role: 'BTM', level: 'Field Team', desc: 'Activity schedules, field execution, participation and evidence capture.', icon: 'fa-mobile-screen-button', color: 'bg-[#2b6a4b]' },
               { role: 'Villages & Farmers', level: 'Ground Level', desc: 'Program delivery, participation and outcomes at the ground level.', icon: 'fa-seedling', color: 'bg-[#FF9933]' }
             ].map((item, i, arr) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center relative z-10 w-full md:w-1/4"
                >
                  <div className="w-48 h-48 rounded-full border-4 border-white shadow-xl flex items-center justify-center bg-gray-100 overflow-hidden relative mb-6">
                     <div className={`absolute inset-0 ${item.color} opacity-10`}></div>
                     <i className={`fa-solid ${item.icon} text-5xl text-gray-400`}></i>
                  </div>
                  <h3 className="font-bold text-[#1a2b4c] text-lg leading-tight">{item.role}</h3>
                  <p className="font-bold text-gray-500 text-xs mb-3 uppercase tracking-wider">{item.level}</p>
                  <p className="text-gray-600 text-sm max-w-[200px]">{item.desc}</p>
                  
                  {/* Mobile downward arrow */}
                  {i < arr.length - 1 && (
                    <div className="md:hidden text-[#2b6a4b] text-xl my-4">
                      <i className="fa-solid fa-arrow-down"></i>
                    </div>
                  )}
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 06. IMPACT STRIP */}
      <section className="py-20 bg-[#14231b] relative overflow-hidden text-center text-white">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#4ade80] font-bold text-xs tracking-widest uppercase mb-8 block">
              EMPOWERING FIELD TEAMS. ENABLING BETTER DECISIONS.
            </span>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16">
              Connecting people, programs and field performance to create measurable impact in agriculture extension.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-8 divide-x divide-gray-700/50">
            {[
              { num: '8+', label: 'BTMs', sub: 'Active in Field' },
              { num: '8+', label: 'Talukas', sub: 'Under Coverage' },
              { num: 'Thousands', label: 'of Farmers', sub: 'Program Participation' },
              { num: 'Better', label: 'Visibility', sub: 'Across Field Execution' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.num}</div>
                <div className="text-lg font-medium text-gray-300 mb-1">{item.label}</div>
                <div className="text-sm text-[#4ade80]">{item.sub}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-gray-500 text-xs italic mt-8">*Implementation snapshot</p>
        </div>
      </section>

      {/* 07. FINAL CTA */}
      <section className="bg-white">
        <div className="flex flex-col md:flex-row w-full min-h-[500px]">
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-[#f8f9fa]"
          >
            <span className="text-[#2b6a4b] font-bold text-xs tracking-widest uppercase mb-4 block">
              AGRICULTURE & FIELD PROGRAM MANAGEMENT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b4c] mb-6 leading-tight">
              Turn Field Activity Into Measurable Program Visibility.
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-lg">
              Connect planning, BTM execution, farmer participation, field evidence and reporting through one structured digital platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#FF9933] text-white rounded-full font-bold hover:bg-[#e68a2e] transition-colors shadow-lg flex items-center gap-2 text-base w-full sm:w-auto justify-center">
                Request a Demo <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white text-[#1a2b4c] border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2 text-base w-full sm:w-auto justify-center">
                Talk to Our Team
              </Link>
            </div>
          </motion.div>
          {/* Right Side Image */}
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
            <Image 
              src="/assets/ATMA (2).png" 
              alt="Field Activity" 
              fill 
              className="object-cover object-center"
            />
            {/* Overlay gradient to blend into the left block slightly */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f8f9fa] to-transparent hidden md:block" />
          </div>
        </div>
      </section>

    </div>
  );
}
