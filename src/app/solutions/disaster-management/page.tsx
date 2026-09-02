"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DisasterManagementPage() {
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
      <section className="bg-white overflow-hidden pt-12 lg:pt-20 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
          {/* Breadcrumb */}
          <div className="text-sm font-medium text-gray-400 mb-8">
            Home &gt; Solutions &gt; Government &amp; Public Sector &gt; <span className="text-[#FF9933]">Disaster Management &amp; Preparedness (TDMP &amp; VDMP)</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="lg:w-[45%] flex flex-col justify-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="mb-12"
              >
                <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">DISASTER MANAGEMENT & PREPAREDNESS</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1121] mb-6 leading-[1.1]">
                  Digital TDMP &<br />VDMP Planning.<br />Government Compliance.<br />
                  <span className="text-[#FF9933]">In a Click.</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed font-medium mt-6">
                  From government-prescribed data capture to mandatory annual TDMP & VDMP reporting—structured digitally across the administrative hierarchy.
                </p>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  { icon: 'fa-file-contract', title: 'Government', subtitle: 'Prescribed Formats' },
                  { icon: 'fa-rotate', title: 'Capture Once,', subtitle: 'Update When Required' },
                  { icon: 'fa-chart-simple', title: 'Track Completion', subtitle: 'at Every Level' },
                  { icon: 'fa-language', title: 'Lengthy Reports', subtitle: 'in Marathi in a Single Click' }
                ].map((stat, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-3 border border-orange-100 text-[#FF9933]">
                      <i className={`fa-solid ${stat.icon} text-xl`}></i>
                    </div>
                    <h4 className="text-gray-900 font-bold text-[13px] leading-tight">{stat.title}</h4>
                    <p className="text-gray-500 text-[11px] leading-tight font-medium mt-1">{stat.subtitle}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="lg:w-[55%] relative w-full h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl lg:ml-8">
              <Image 
                src="/assets/Disaster-Management.png"
                alt="Disaster Management Software"
                fill
                className="object-cover object-left-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 02. CORE CAPABILITIES (5 CARDS) */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="container mx-auto px-4 lg:px-8 max-w-[1400px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { 
                icon: 'fa-file-shield', 
                title: 'Government Standard', 
                desc: 'Data captured strictly as per pre-approved government formats and requirements.' 
              },
              { 
                icon: 'fa-arrows-rotate', 
                title: 'Less Repetition', 
                desc: 'Reuse existing information and update only what has changed every year.' 
              },
              { 
                icon: 'fa-eye', 
                title: 'Complete Visibility', 
                desc: 'Know what\'s complete, what\'s in progress and what\'s pending—at every level.' 
              },
              { 
                icon: 'fa-language', 
                title: 'Marathi Reporting', 
                desc: 'Generate lengthy TDMP or VDMP reports in Marathi in a single click.' 
              },
              { 
                icon: 'fa-shield-halved', 
                title: 'Accurate & Reliable', 
                desc: 'Structured data ensures consistency, accuracy and reliable compliance reporting.' 
              }
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#FF9933] transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#f4f7fb] flex items-center justify-center text-[#2f4a7c] mb-6 shadow-sm border border-[#e5ecf5]">
                  <i className={`fa-solid ${card.icon} text-2xl`}></i>
                </div>
                <h3 className="text-[17px] font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 03. THE COMPLETE PROCESS (6 STEPS) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] inline-block relative">
              The Complete Process
              <div className="h-1 w-12 bg-[#FF9933] mx-auto mt-4 rounded-full"></div>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row justify-between relative"
          >
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[45px] left-[5%] right-[5%] h-px border-t-2 border-dashed border-orange-200 z-0"></div>

            {[
              { num: '1', title: 'CAPTURE', icon: 'fa-pen-to-square', desc: 'Data captured as per government-prescribed formats at the field level.' },
              { num: '2', title: 'REVIEW', icon: 'fa-user-check', desc: 'Reviewed by the assigned authority at each level.' },
              { num: '3', title: 'MONITOR', icon: 'fa-chart-pie', desc: 'Track completion status of subjects and villages in real time.' },
              { num: '4', title: 'UPDATE', icon: 'fa-rotate', desc: 'Update only the changes for the new planning year.' },
              { num: '5', title: 'GENERATE', icon: 'fa-file-lines', desc: 'Generate complete TDMP or VDMP report in Marathi.' },
              { num: '6', title: 'SUBMIT', icon: 'fa-download', desc: 'Submit the required yearly reports to the central government.' }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center w-full lg:w-40 mb-12 lg:mb-0">
                <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#2f4a7c] mb-6 shadow-sm relative group hover:border-[#2f4a7c] transition-colors">
                  <i className={`fa-solid ${step.icon} text-3xl group-hover:scale-110 transition-transform`}></i>
                  {idx < 5 && (
                    <div className="hidden lg:flex absolute -right-[70px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-50 border border-orange-200 items-center justify-center text-[#FF9933] z-20">
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </div>
                  )}
                </div>
                <h4 className="text-[15px] font-bold text-gray-900 mb-2">{step.num}. {step.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[140px]">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 04. CONTENT BLOCKS */}
      <section className="py-24 bg-gray-50">
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
              <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Built Around Prescribed Government Formats</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                Not Generic Forms.<br/>Government-Defined Data Structures.
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>The platform does not allow disaster-management information to be collected through arbitrary or independently designed formats.</p>
                <p>Data capture is structured according to the pre-approved / prescribed government formats and information requirements applicable to TDMP and VDMP preparation.</p>
                <p>Each required subject and information area is digitally structured so that officials complete the plan systematically.</p>
                <div className="mt-8 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <p className="font-bold text-[#2f4a7c] flex items-center gap-3 text-sm lg:text-base">
                    <i className="fa-solid fa-arrow-right text-[#FF9933]"></i> Prescribed Format → Structured Capture → Tracking → Consolidation → Final Report
                  </p>
                </div>
                <p className="pt-2 text-base text-gray-500">This helps maintain consistency in the information being collected across villages and administrative levels.</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/banklnd-img.jpg" alt="Government Prescribed Formats" fill className="object-cover hover:scale-105 transition-transform duration-700" />
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
              <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">From Village Entry to District-Level Compliance</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                The Administrative Workflow. Digitized.
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>The digital workflow follows the administrative structure through which disaster-management information is prepared and monitored:</p>
                
                <div className="flex items-center gap-2 flex-wrap font-bold text-sm text-[#2f4a7c] my-6">
                  <span className="bg-[#f4f7fb] px-3 py-1.5 rounded-lg border border-[#e5ecf5]">District Collector</span> <i className="fa-solid fa-arrow-right text-[#FF9933] text-xs"></i>
                  <span className="bg-[#f4f7fb] px-3 py-1.5 rounded-lg border border-[#e5ecf5]">Admin</span> <i className="fa-solid fa-arrow-right text-[#FF9933] text-xs"></i>
                  <span className="bg-[#f4f7fb] px-3 py-1.5 rounded-lg border border-[#e5ecf5]">Tehsildar</span> <i className="fa-solid fa-arrow-right text-[#FF9933] text-xs"></i>
                  <span className="bg-[#f4f7fb] px-3 py-1.5 rounded-lg border border-[#e5ecf5]">Mandal Adhikari</span> <i className="fa-solid fa-arrow-right text-[#FF9933] text-xs"></i>
                  <span className="bg-[#f4f7fb] px-3 py-1.5 rounded-lg border border-[#e5ecf5]">Saja / Field</span>
                </div>

                <p>Village-level information is captured through the assigned administrative roles according to the prescribed TDMP/VDMP structure.</p>
                <p>Higher administrative levels gain visibility into the progress of plan preparation without depending entirely on manually consolidated files.</p>
                <p className="font-bold text-[#2f4a7c] mt-4 text-sm lg:text-base">Village Data → Admin Review → Taluka Plan → District Visibility → Compliance</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/p1.jpg" alt="Administrative Workflow" fill className="object-cover hover:scale-105 transition-transform duration-700" />
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
              <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Know Exactly Where the Plan Stands</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                Complete Visibility.<br/>Real-Time Progress.
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>The system provides year-wise and jurisdiction-wise visibility into the preparation status of disaster-management plans.</p>
                <p>Administration can monitor:</p>
                <ul className="grid grid-cols-2 gap-y-3 gap-x-4 font-bold text-[#2f4a7c] text-sm my-6">
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#FF9933]"></i> Required Subjects</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#FF9933]"></i> Completed Subjects</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#FF9933]"></i> In-Progress Subjects</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#FF9933]"></i> Pending Subjects</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#FF9933]"></i> Village Completion</li>
                  <li className="flex items-center gap-2"><i className="fa-solid fa-check text-[#FF9933]"></i> Admin Progress</li>
                </ul>
                <p>This means the Collector Office and responsible officials can identify where information has been completed and where follow-up is still required.</p>
                <p className="font-bold text-[#0a1121] bg-orange-50 px-4 py-3 rounded-lg border border-orange-100 inline-block mt-4 text-sm lg:text-base">
                  Don't wait for the final reporting deadline to discover what is incomplete.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/crm.jpg" alt="Complete Visibility" fill className="object-cover hover:scale-105 transition-transform duration-700" />
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
              <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Annual Compliance Without Starting Again</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                Capture Once.<br/>Update What Changed.
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>TDMP and VDMP are recurring planning exercises. But that should not mean administration has to recreate the entire information base every year.</p>
                <p>The platform maintains structured information from previous planning cycles so that relevant data can be carried forward, reviewed and updated wherever required.</p>
                <div className="mt-8 p-6 bg-[#f4f7fb] rounded-xl border border-[#e5ecf5] shadow-sm">
                  <p className="font-bold text-[#2f4a7c] flex flex-wrap items-center gap-2 text-sm">
                    Prev Year Data <i className="fa-solid fa-arrow-right text-[#FF9933] text-xs"></i> Review <i className="fa-solid fa-arrow-right text-[#FF9933] text-xs"></i> Update <i className="fa-solid fa-arrow-right text-[#FF9933] text-xs"></i> Validate <i className="fa-solid fa-arrow-right text-[#FF9933] text-xs"></i> Current Year Plan
                  </p>
                </div>
                <p className="pt-2">This significantly reduces unnecessary repetitive data-entry effort while helping maintain continuity and consistency in disaster-management information.</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/corporate-learning-hero.jpg" alt="Annual Compliance" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

          {/* Block 5 - Proven Implementation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="lg:w-1/2">
              <span className="text-[#FF9933] font-bold tracking-widest text-sm uppercase mb-4 block">Proven Implementation</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1121] mb-6 leading-tight">
                District Disaster Management<br/>Authority, Jalna
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>MSquare has digitized the TDMP and VDMP planning workflow for district disaster-management administration, creating a structured environment for:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 font-bold text-[#2f4a7c] text-sm my-6 bg-[#f8faff] p-6 rounded-xl border border-blue-50 shadow-sm">
                  <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#FF9933]"></i> Government-Prescribed Data</div>
                  <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#FF9933]"></i> Village-Level Plan Prep</div>
                  <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#FF9933]"></i> Role-Based Workflow</div>
                  <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#FF9933]"></i> Year-Wise Plan Management</div>
                  <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#FF9933]"></i> Subject-Wise Tracking</div>
                  <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#FF9933]"></i> Pending / In-Progress</div>
                  <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#FF9933]"></i> TDMP & VDMP Generation</div>
                  <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#FF9933]"></i> Marathi Report Generation</div>
                  <div className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#FF9933]"></i> Annual Compliance Reporting</div>
                </div>

                <p className="pt-2 text-base italic border-l-4 border-[#FF9933] pl-4">The implementation demonstrates how a traditionally lengthy and recurring administrative exercise can be transformed into a structured, maintainable and digitally reportable process.</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[350px] lg:h-[450px] w-full rounded-2xl shadow-xl overflow-hidden border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
               <Image src="/Images/banking-solution.jpg" alt="Proven Implementation Jalna" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 05. BOTTOM HIGHLIGHTS */}
      <section className="py-24 bg-white relative overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="container mx-auto px-4 lg:px-8 max-w-[1200px] relative z-10"
        >
          
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Box 1 */}
            <motion.div variants={fadeInUp} className="bg-[#f8faff] rounded-3xl p-10 lg:p-12 border border-[#e5ecf5] hover:border-[#FF9933] flex-1 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-white border border-[#e5ecf5] flex items-center justify-center text-[#2f4a7c] shadow-sm">
                  <i className="fa-solid fa-shield-halved text-4xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0a1121] mb-4">Built for Mandatory Government Compliance</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    TDMP & VDMP preparation and submission are mandatory for every year. Our platform ensures that the entire process—from prescribed data capture to final reporting—is structured, trackable and easy to complete.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div variants={fadeInUp} className="bg-[#fff9f2] rounded-3xl p-10 lg:p-12 border border-orange-100 hover:border-[#FF9933] flex-1 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="w-20 h-20 shrink-0 rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-[#FF9933] shadow-sm">
                  <i className="fa-solid fa-file-lines text-4xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#0a1121] mb-4">Lengthy Reports.<br/>In Marathi. In a Single Click.</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Generate complete TDMP and VDMP reports in Marathi as per the prescribed government structure and format. No manual compilation. No formatting effort.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="text-center mt-12 mb-8">
            <h3 className="text-3xl md:text-5xl font-bold text-[#0a1121]">
              Government-Standard Data In.<br/>
              <span className="text-[#FF9933]">Government-Ready Report Out.</span>
            </h3>
            <p className="text-xl text-gray-500 mt-6 font-medium">
              Structured data capture based on prescribed formats.<br/>Complete TDMP & VDMP reports generated in Marathi.
            </p>
          </motion.div>

        </motion.div>
      </section>

      {/* 06. FINAL CTA */}
      <section className="bg-white pb-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="container mx-auto px-4 lg:px-8 max-w-[1200px]"
        >
          <div className="bg-[#0a1121] rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
            <div className="absolute left-0 bottom-0 opacity-10">
              <i className="fa-solid fa-building-columns text-[200px] -ml-10 -mb-10 text-white"></i>
            </div>
            
            <div className="relative z-10 lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stronger Preparedness. Simpler Compliance.
              </h2>
              <p className="text-lg text-gray-300">
                Digitize TDMP & VDMP planning and make annual reporting faster, accurate and hassle-free.
              </p>
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
