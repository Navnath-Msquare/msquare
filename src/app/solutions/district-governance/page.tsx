"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DistrictGovernancePage() {
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
      <section className="relative min-h-[90vh] flex items-center bg-[#0a1121] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/District-governance.png"
            alt="District Governance & Decision Intelligence"
            fill
            className="object-cover object-top opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1121] via-[#0a1121]/80 to-transparent z-10 w-full lg:w-3/4"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1121] via-transparent to-transparent z-10 opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-20 h-full py-20 mt-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl mb-16"
          >
            <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">DISTRICT GOVERNANCE & DECISION INTELLIGENCE</span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              One District.<br/>Multiple Priorities.<br/>
              <span className="text-[#FF9933]">Smarter Decisions.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              A centralized platform that brings government schemes, departments and administrative data together for real-time visibility, deeper insights and faster decisions.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12"
          >
            {[
              { icon: 'fa-chart-column', title: 'Centralized', subtitle: 'District View' },
              { icon: 'fa-bullseye', title: 'Performance &', subtitle: 'Pendency Insights' },
              { icon: 'fa-sitemap', title: 'Taluka-wise', subtitle: 'Analysis' },
              { icon: 'fa-wand-magic-sparkles', title: 'AI-Powered', subtitle: 'Intelligence' }
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                  <i className={`fa-solid ${stat.icon} text-[#FF9933] text-xl`}></i>
                </div>
                <h4 className="text-white font-bold leading-tight">{stat.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{stat.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 02. DETAILED CAPABILITIES (8 BLOCKS) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] space-y-32">
          
          {/* Block 1 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                One District.<br/>One Centralized View.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Instead of reviewing different schemes and administrative subjects independently, the platform creates a common monitoring environment.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Government schemes, programs and administrative subjects can be centrally organized while still retaining their individual data structures, KPIs, reporting requirements and analytical views.
              </p>
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mt-8">
                <p className="text-[#FF9933] font-bold">Different Schemes. Different Data. One District-Level View.</p>
                <p className="text-gray-700 mt-2 text-sm">The implementation supports district-wide monitoring across multiple subjects rather than forcing every department into one generic reporting format.</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/banklnd-img.jpg" alt="One Centralized View" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Block 2 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row-reverse items-center gap-16"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                From Scheme Data to<br/>Administrative Intelligence
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-semibold">
                Don&apos;t Just Collect Data. Understand What Needs Attention.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The platform transforms departmental data into information that administrative leadership can use during reviews. Depending on the scheme or subject, the system can surface:
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Total Coverage', 'Completed / Resolved', 'Pending', 'Pendency %', 'Taluka-Wise Performance', 'Beneficiary Coverage', 'Progress Indicators', 'Top Performers', 'Low Performers', 'Delayed Updates', 'Exceptions', 'Trends'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200">{tag}</span>
                ))}
              </div>
              <p className="text-lg text-gray-700 font-medium italic border-l-4 border-[#FF9933] pl-4">
                This allows district administration to move beyond asking: &quot;How much data has been submitted?&quot; towards: &quot;Where is attention required?&quot;
              </p>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/p1.jpg" alt="Administrative Intelligence" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Block 3 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                Taluka-Wise Performance Visibility
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-semibold">
                See the District. Drill Down to the Taluka.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                District-level numbers alone can hide significant differences in execution. The platform enables Taluka-wise monitoring so that administration can compare implementation and identify variations across the district.
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-[#FF9933] mb-6 bg-orange-50 p-4 rounded-lg">
                District <i className="fa-solid fa-arrow-right"></i> Taluka <i className="fa-solid fa-arrow-right"></i> Scheme / Subject <i className="fa-solid fa-arrow-right"></i> Indicator <i className="fa-solid fa-arrow-right"></i> Status
              </div>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li><i className="fa-solid fa-circle-check text-green-500 mr-2"></i> High-performing & Low-performing Talukas</li>
                <li><i className="fa-solid fa-circle-exclamation text-red-500 mr-2"></i> High pendency & Implementation gaps</li>
                <li><i className="fa-solid fa-chart-line text-blue-500 mr-2"></i> Progress differences & Areas requiring follow-up</li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/crm.jpg" alt="Taluka-Wise Performance Visibility" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Block 4 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row-reverse items-center gap-16"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                Know What&apos;s Pending.<br/>And Know Where.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A total number has limited administrative value unless management can understand what sits behind it.
              </p>
              <div className="flex items-center flex-wrap gap-2 text-sm font-bold text-gray-700 mb-6 bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <span className="text-[#0a1121]">Total</span> <i className="fa-solid fa-arrow-right text-gray-400"></i> <span className="text-green-600">Completed / Resolved</span> <i className="fa-solid fa-arrow-right text-gray-400"></i> <span className="text-red-500">Pending</span> <i className="fa-solid fa-arrow-right text-gray-400"></i> <span className="text-[#FF9933]">Pendency %</span>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                The platform helps distinguish between these metrics and then connects that information to the relevant Taluka, department, scheme or administrative subject.
              </p>
              <p className="text-lg text-gray-700 font-medium italic border-l-4 border-gray-300 pl-4">
                This creates clearer accountability during review meetings because administration can identify where progress is strong and where intervention may be required.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/corporate-learning-hero.jpg" alt="Know What's Pending" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Block 5 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                Data Freshness<br/>Is Visible.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Government dashboards become less useful when decision-makers cannot determine whether the information is current. The platform maintains visibility of when information was last updated/imported.
              </p>
              <div className="flex items-center gap-3 mb-6 bg-blue-50 border border-blue-100 p-4 rounded-lg font-medium text-[#2f4a7c]">
                <i className="fa-solid fa-clock-rotate-left text-xl"></i>
                Last Updated <i className="fa-solid fa-arrow-right text-sm opacity-50"></i> Data Age <i className="fa-solid fa-arrow-right text-sm opacity-50"></i> Current / Delayed
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                If a scheme&apos;s information has not been updated within the expected period, the delay itself becomes visible. Because a decision is only as reliable as the data behind it.
              </p>
              <p className="text-xl font-bold text-[#0a1121]">
                This turns data freshness itself into a governance indicator.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-100">
               <Image src="/Images/erp.jpg" alt="Data Freshness" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Block 6 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row-reverse items-center gap-16"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                Every Scheme Doesn&apos;t<br/>Work the Same Way.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-semibold">
                So We Don&apos;t Force Every Scheme Into the Same Dashboard.
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">A grievance-monitoring program may require:</h4>
                  <p className="text-sm text-gray-600">Received &rarr; Resolved &rarr; Pending &rarr; Resolution Rate</p>
                </div>
                <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">A village-development subject may require:</h4>
                  <p className="text-sm text-gray-600">Total Villages &rarr; Covered Villages &rarr; Remaining Villages &rarr; Coverage %</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                The platform enables scheme-specific monitoring structures while bringing their important outcomes together for district-level review. <strong className="text-[#FF9933]">Scheme-Specific Intelligence. District-Wide Visibility.</strong>
              </p>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/service-2.jpg" alt="Scheme Specific Intelligence" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Block 7 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                From Review Meetings<br/>to Continuous Monitoring
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Traditionally, a significant amount of administrative review depends upon departments preparing reports before meetings. A centralized district platform changes that model.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl mb-6">
                <p className="text-sm font-bold text-gray-800 flex flex-col gap-2">
                  <span><i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Department Data</span>
                  <span><i className="fa-solid fa-arrow-down text-gray-400 ml-1"></i></span>
                  <span><i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Centralized Platform</span>
                  <span><i className="fa-solid fa-arrow-down text-gray-400 ml-1"></i></span>
                  <span><i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Continuous Visibility</span>
                  <span><i className="fa-solid fa-arrow-down text-gray-400 ml-1"></i></span>
                  <span><i className="fa-solid fa-circle-check text-green-500 mr-2"></i> Administrative Review &amp; Follow-Up</span>
                </p>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Collector Office can review important indicators from a common environment and focus discussions on exceptions, pendency and outcomes rather than spending review time merely consolidating numbers.
              </p>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/banking-solution.jpg" alt="Continuous Monitoring" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Block 8 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row-reverse items-center gap-16"
          >
            <div className="lg:w-1/2">
              <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">AI-Powered District Intelligence</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                Ask the District Data.<br/>Get Answers Without Searching.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As the number of schemes, Talukas and indicators increases, even a well-designed dashboard can contain a large amount of information. MSquare has introduced an AI-powered conversational intelligence layer.
              </p>
              
              <div className="bg-[#f8faff] border border-blue-100 p-6 rounded-xl mb-6 space-y-3">
                <p className="text-sm font-medium text-[#2f4a7c] bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-50 w-max max-w-full truncate">&quot;Give me the summary of recovery for Jalna district.&quot;</p>
                <p className="text-sm font-medium text-[#2f4a7c] bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-50 w-max max-w-full truncate">&quot;Which Taluka has the highest pendency?&quot;</p>
                <p className="text-sm font-medium text-[#2f4a7c] bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-50 w-max max-w-full truncate">&quot;Show the important observations.&quot;</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Instant Summary</h4>
                  <p className="text-sm text-gray-500">Convert data into an understandable summary.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Important Observations</h4>
                  <p className="text-sm text-gray-500">Surface notable patterns or differences.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/aboutUs.jpg" alt="AI Powered District Intelligence" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 03. FIVE WAYS SECTION */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] inline-block relative">
              Five Ways We Strengthen District Administration
              <div className="h-1 w-12 bg-[#FF9933] mx-auto mt-4 rounded-full"></div>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              { num: '01', icon: 'fa-map-location-dot', title: 'One District. One View.', desc: 'All schemes, departments and key indicators in one centralized environment.' },
              { num: '02', icon: 'fa-eye', title: 'Know What Needs Attention.', desc: 'Track performance, pendency, exceptions and data freshness in real time.' },
              { num: '03', icon: 'fa-location-dot', title: 'District → Taluka → Action.', desc: 'Drill down to taluka level and focus on areas that need intervention.' },
              { num: '04', icon: 'fa-wand-magic-sparkles', title: 'Ask the District Data.', desc: 'AI-powered conversational intelligence for faster understanding.' },
              { num: '05', icon: 'fa-list-check', title: 'From Reporting to Decision-Making.', desc: 'Turn government data into actionable insights for better outcomes.' }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FF9933] transition-all duration-300 relative group overflow-hidden">
                <div className="text-[#FF9933] font-bold text-xl mb-6">{card.num}</div>
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-[#FF9933] mb-8 group-hover:scale-110 transition-transform duration-300 border border-orange-100">
                  <i className={`fa-solid ${card.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 03. FROM DATA TO DECISION PROCESS */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] inline-block relative">
              From Data to Decision
              <div className="h-1 w-12 bg-[#FF9933] mx-auto mt-4 rounded-full"></div>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row justify-between items-center lg:items-start relative gap-8 lg:gap-0"
          >
            {/* Desktop Connecting Line */}
            <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-[2px] bg-gray-100 z-0"></div>

            {[
              { icon: 'fa-database', title: 'Collect', desc: 'Data from departments and schemes in their respective formats.', color: '#FF7A00' },
              { icon: 'fa-cloud-arrow-up', title: 'Centralize', desc: 'Bring all information together in a secure, structured platform.', color: '#3B82F6' },
              { icon: 'fa-chart-column', title: 'Monitor', desc: 'Track KPIs, performance and pendency across the district.', color: '#22C55E' },
              { icon: 'fa-magnifying-glass-chart', title: 'Analyze', desc: 'Compare, identify gaps and highlight areas needing attention.', color: '#8B5CF6' },
              { icon: 'fa-microchip', title: 'Ask AI', desc: 'Ask questions in natural language and get instant answers & insights.', color: '#F59E0B' },
              { icon: 'fa-users-gear', title: 'Ask & Improve', desc: 'Take informed decisions, follow up and improve citizen outcomes.', color: '#3B82F6' }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center w-full lg:w-40 group">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-[#0a1121] transition-colors relative">
                  <i className={`fa-solid ${step.icon} text-2xl`} style={{ color: step.color }}></i>
                  {idx < 5 && (
                    <div className="hidden lg:flex absolute -right-[60px] top-1/2 -translate-y-1/2 text-gray-300">
                      <i className="fa-solid fa-angle-right text-2xl"></i>
                    </div>
                  )}
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed px-2">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 04. BUILT FOR DISTRICT LEADERSHIP */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="container mx-auto px-4 lg:px-8 max-w-[1200px]"
        >
          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 hover:border-[#FF9933] transition-colors duration-300 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side Visual/Text */}
              <div className="lg:w-2/5 bg-[#f8faff] p-12 flex flex-col justify-center border-r border-gray-100 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
                <div className="w-16 h-16 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-[#2f4a7c] shadow-sm mb-8 relative z-10">
                  <i className="fa-solid fa-building-columns text-3xl"></i>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 relative z-10">Built for District Leadership</h3>
                <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                  Designed for the District Collector, departments and field administration to review, decide and act with confidence.
                </p>
              </div>

              {/* Right Side Checklist & Image */}
              <div className="lg:w-3/5 p-12 relative flex flex-col justify-center bg-white overflow-hidden">
                 <div className="absolute top-0 right-0 h-64 w-64 opacity-5 pointer-events-none">
                   <Image src="/Images/banklnd-img.jpg" alt="Bg" fill className="object-cover" />
                 </div>
                 
                 <div className="space-y-6 relative z-10">
                   {[
                     'Multi-scheme, Multi-department Monitoring',
                     'Taluka-wise Performance & Comparison',
                     'Pendency, Resolution & Beneficiary Insights',
                     'Data Freshness & Update Tracking',
                     'AI-Powered Q&A for Faster Clarity',
                     'Secure, Role-based Access'
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4 group">
                       <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:bg-[#FF9933] transition-colors">
                         <i className="fa-solid fa-check text-[#FF9933] text-sm group-hover:text-white transition-colors"></i>
                       </div>
                       <span className="text-gray-800 font-medium text-lg">{item}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 05. FINAL CTA */}
      <section className="bg-white pb-24 pt-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="container mx-auto px-4 lg:px-8 max-w-[1200px]"
        >
          <div className="bg-[#0a1121] rounded-[2rem] p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            <div className="absolute left-0 bottom-0 opacity-10">
              <i className="fa-solid fa-chart-line text-[200px] -ml-10 -mb-10 text-white"></i>
            </div>
            
            <div className="relative z-10 lg:w-2/3 flex items-center gap-6">
              <div className="hidden lg:flex w-20 h-20 rounded-2xl bg-white/10 border border-white/20 items-center justify-center shrink-0">
                 <i className="fa-solid fa-chart-simple text-[#FF9933] text-4xl"></i>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Stronger Governance. Smarter Decisions. Better Outcomes.
                </h2>
                <p className="text-base text-gray-300">
                  Empower district administration with real-time intelligence and AI-driven insights.
                </p>
              </div>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <Link href="/contact" className="px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold hover:bg-[#e68a2e] transition-colors text-center shadow-lg shadow-orange-500/20">
                Request a Demo <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-transparent border border-gray-600 text-white rounded-lg font-bold hover:bg-white/10 transition-colors text-center">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
