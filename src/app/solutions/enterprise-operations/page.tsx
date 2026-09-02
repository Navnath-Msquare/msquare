"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EnterpriseOperationsPage() {
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
            <Link href="/" className="hover:text-[#FF9933] transition-colors">Home</Link>
            <i className="fa-solid fa-chevron-right text-[10px]"></i>
            <span className="text-gray-400">Solutions</span>
            <i className="fa-solid fa-chevron-right text-[10px]"></i>
            <span className="text-[#FF9933]">Enterprise Operations & Automation</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 relative">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:w-1/2 z-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b4c] mb-6 leading-tight">
                Enterprise Operations & Automation
              </h1>
              <p className="text-xl text-[#FF9933] font-bold mb-6">
                Simplifying Complex Operations. At Enterprise Scale.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed max-w-xl">
                As organizations grow across locations, departments and business functions, operational complexity grows with them. Approvals become multi-layered, administrative processes become difficult to track, expenses require stronger controls, and information becomes fragmented across people, spreadsheets, emails and systems.
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                MSquare engineers enterprise technology platforms that bring these operations together—connecting people, processes, locations and data through structured digital workflows.
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm max-w-xl">
                <p className="text-sm text-gray-600 mb-4 font-medium italic">
                  &quot;Our experience includes building and supporting enterprise operations technology for Fusion Finance, connecting critical administrative processes across 1,740+ branches throughout India.&quot;
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] w-full flex items-center justify-center scale-110 lg:scale-125 mt-8 lg:-mt-[18rem]"
            >
              <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
                <Image 
                 //src="/assets/MSquare-removebg-.png"
                  src="/assets/MSquare_Enterprise.png"
                  alt="Enterprise Operations"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gray-100">
             <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#FF9933] hover:shadow-md transition-all duration-300">
               <div className="w-14 h-14 bg-orange-50 text-[#FF9933] rounded-full flex items-center justify-center text-2xl shrink-0">
                  <i className="fa-solid fa-building"></i>
               </div>
               <div>
                  <div className="text-2xl font-bold text-[#1a2b4c]">1,740+</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">Client Branches</div>
               </div>
             </div>
             <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#FF9933] hover:shadow-md transition-all duration-300">
               <div className="w-14 h-14 bg-orange-50 text-[#FF9933] rounded-full flex items-center justify-center text-2xl shrink-0">
                  <i className="fa-solid fa-map-location-dot"></i>
               </div>
               <div>
                  <div className="text-2xl font-bold text-[#1a2b4c]">PAN-India</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">Operations</div>
               </div>
             </div>
             <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#FF9933] hover:shadow-md transition-all duration-300">
               <div className="w-14 h-14 bg-orange-50 text-[#FF9933] rounded-full flex items-center justify-center text-2xl shrink-0">
                  <i className="fa-solid fa-shield"></i>
               </div>
               <div>
                  <div className="text-2xl font-bold text-[#1a2b4c]">2+ Years</div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wide mt-1">In Production</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 02. COMPLEXITY TO CONNECTED */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">From Operational Complexity<br />to Connected Enterprise</h2>
            <p className="text-gray-600 mb-6">
              As organisations grow, a single transaction may move between a branch, business team, administration, finance and Head Office—while following different approval authorities, financial limits and organizational policies.
            </p>
            <p className="text-gray-600 mb-10">
              At scale, managing these processes manually or through disconnected systems creates delays, limited visibility and unnecessary operational complexity.
            </p>
            <p className="text-[#FF9933] font-bold text-lg">
              MSquare helps organizations transform this environment into a connected digital operating model.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-6 mb-16 max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
            {[
              { label: 'Understand', icon: 'fa-magnifying-glass' },
              { label: 'Simplify', icon: 'fa-scissors' },
              { label: 'Digitize', icon: 'fa-laptop-code' },
              { label: 'Automate', icon: 'fa-robot' },
              { label: 'Measure', icon: 'fa-chart-pie' },
              { label: 'Improve', icon: 'fa-arrow-trend-up' }
            ].map((step, idx, arr) => (
              <div key={idx} className="flex items-center group">
                 <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 text-gray-500 flex items-center justify-center text-lg mb-2 shadow-sm group-hover:border-[#FF9933] group-hover:text-[#FF9933] group-hover:bg-orange-50 transition-colors">
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700">{step.label}</span>
                 </div>
                 {idx < arr.length - 1 && (
                    <div className="mx-2 md:mx-4 text-gray-300 mt-[-20px]"><i className="fa-solid fa-angle-right"></i></div>
                 )}
              </div>
            ))}
          </div>

          <div className="text-center font-bold text-[#1a2b4c] text-xl">
             We don&apos;t simply digitize existing complexity.<br />
             We understand it first. Then we simplify it.
          </div>
        </div>
      </section>

      {/* 03. ENTERPRISE PROCESSES WE DIGITIZE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
           <div className="text-center mb-16">
            <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">CORE CAPABILITIES</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c]">Enterprise Processes We Digitize</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Workflow & Approval Automation', icon: 'fa-sitemap', color: 'text-blue-500', 
                desc: 'Transform complex organizational approval structures into configurable digital workflows.', 
                bullets: ['Role-based approvals', 'Authority hierarchies', 'Approval slabs', 'Business rules', 'Escalations', 'Notifications', 'Exception handling', 'Complete process visibility'],
                tagline: 'The right transaction reaches the right authority at the right time.'
              },
              { title: 'Multi-Location & Branch Operations', icon: 'fa-building', color: 'text-purple-500', 
                desc: 'Connect geographically distributed branches, offices and operational teams through centralized enterprise platforms.',
                bullets: [],
                tagline: 'Standardized processes across locations with greater visibility into operational activity, responsibilities and pending actions.'
              },
              { title: 'Expense & Administrative Operations', icon: 'fa-file-invoice-dollar', color: 'text-green-500', 
                desc: 'Digitize recurring and operational expenses through structured processes with authorization limits, supporting documentation, validations and approval controls.',
                bullets: ['Rent & Lease Administration', 'Utilities', 'Advances', 'Petty Cash', 'Administrative Expenses', 'Recurring Obligations'],
                tagline: ''
              },
              { title: 'Procurement & Vendor Operations', icon: 'fa-cart-flatbed', color: 'text-orange-500', 
                desc: 'Connect internal requirements, approvals, procurement teams and vendors through structured workflows.',
                bullets: ['Requirement', 'Approval', 'Procurement', 'Vendor', 'Fulfilment'],
                tagline: 'Greater accountability, traceability and visibility throughout the procurement lifecycle.'
              },
              { title: 'Inventory & Asset Operations', icon: 'fa-boxes-stacked', color: 'text-teal-500', 
                desc: 'Manage organizational assets, equipment, consumables and operational material across multiple locations.',
                bullets: ['Request', 'Approval', 'Procurement', 'Inventory', 'Allocation', 'Dispatch', 'Receipt'],
                tagline: 'Greater visibility over what was requested, approved, procured, allocated and delivered.'
              },
              { title: 'Document & Process Tracking', icon: 'fa-file-signature', color: 'text-red-500', 
                desc: 'Create traceability for critical documents moving between branches, departments and Head Office.',
                bullets: ['What was dispatched?', 'Who dispatched it?', 'Where is it?', 'Was it received?', 'What action remains pending?'],
                tagline: 'Converts document movement from an informal activity into a measurable enterprise process.'
              }
            ].map((process, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:border-[#FF9933] hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl mb-6 shadow-sm border border-gray-100 group-hover:border-[#FF9933] group-hover:bg-orange-50 transition-colors">
                   <i className={`fa-solid ${process.icon} ${process.color} group-hover:text-[#FF9933]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#1a2b4c] mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-1">{process.desc}</p>
                
                {process.bullets.length > 0 && (
                   <div className="mb-6 flex flex-wrap gap-2">
                     {process.bullets.map((bullet, i) => (
                        <span key={i} className="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                           {bullet}
                        </span>
                     ))}
                   </div>
                )}

                {process.tagline && (
                  <div className="mt-auto bg-[#f8f9fa] p-4 rounded-xl border border-gray-100">
                    <p className="text-[#1a2b4c] text-xs font-bold leading-relaxed">
                      <i className="fa-solid fa-quote-left text-[#FF9933]/50 mr-2"></i>
                      {process.tagline}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. AUTOMATION BUILT AROUND BUSINESS RULES */}
      <section className="py-24 bg-[#0a1121] text-white">
         <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Technology Should Understand<br/><span className="text-[#FF9933]">How Your Organization Works.</span></h2>
            <p className="text-gray-400 mb-4 text-lg">
              Enterprise automation isn&apos;t simply about converting paper forms into digital forms. The real value comes when the platform understands the organization&apos;s policies, authority structures and operating rules.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-md mb-12">
             <div className="flex flex-col md:flex-row items-center justify-between gap-4 overflow-x-auto pb-4 hide-scrollbar">
                {[
                  { title: 'Expense Submitted', icon: 'fa-file-invoice-dollar' },
                  { title: 'Category Identified', icon: 'fa-tags' },
                  { title: 'Amount Evaluated', icon: 'fa-calculator' },
                  { title: 'Authority Determined', icon: 'fa-user-tie' },
                  { title: 'Business Approval', icon: 'fa-check' },
                  { title: 'Admin Approval', icon: 'fa-check-double' },
                  { title: 'Exception Escalated', icon: 'fa-triangle-exclamation' },
                  { title: 'History Maintained', icon: 'fa-clock-rotate-left' }
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex flex-col md:flex-row items-center shrink-0">
                     <div className="flex flex-col items-center w-28 text-center group">
                        <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-2xl text-gray-300 mb-4 group-hover:bg-[#FF9933] group-hover:border-[#FF9933] group-hover:text-white transition-colors">
                           <i className={`fa-solid ${step.icon}`}></i>
                        </div>
                        <span className="text-xs font-bold text-gray-300 tracking-wider leading-tight group-hover:text-[#FF9933] transition-colors">{step.title}</span>
                     </div>
                     {idx < arr.length - 1 && (
                        <div className="hidden md:block mx-4 text-[#FF9933]/50">
                           <i className="fa-solid fa-arrow-right"></i>
                        </div>
                     )}
                     {idx < arr.length - 1 && (
                        <div className="md:hidden my-3 text-[#FF9933]/50">
                           <i className="fa-solid fa-arrow-down"></i>
                        </div>
                     )}
                  </div>
                ))}
             </div>
          </div>

          <div className="text-center font-bold text-xl md:text-2xl">
             Instead of forcing organizations to adapt to rigid software,<br/>
             <span className="text-[#FF9933]">MSquare engineers technology around the way the business operates.</span>
          </div>
         </div>
      </section>

      {/* 05. MANAGEMENT VISIBILITY */}
      <section className="py-24 bg-white border-b border-gray-100">
         <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="lg:w-1/2">
                  <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">MANAGEMENT VISIBILITY</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">From Transactions to Decisions.</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Enterprise platforms should do more than process transactions. They should help management understand what is happening across the organization.
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                     <p className="font-bold text-[#1a2b4c] mb-4 text-sm uppercase tracking-wider">MSquare solutions provide visibility into:</p>
                     <div className="flex flex-wrap gap-2">
                        {['Operational KPIs', 'Pending Actions', 'Approval Status', 'Exceptions & Deviations', 'Branch/Location Activity', 'Expense Visibility', 'Inventory Position', 'Vendor Activity', 'Process Turnaround', 'Management Reporting'].map((kpi, i) => (
                           <span key={i} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                              {kpi}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
               
               <div className="lg:w-1/2 w-full">
                  <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full blur-[50px] -mr-10 -mt-10"></div>
                     <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-[50px] -ml-10 -mb-10"></div>
                     
                     <div className="relative z-10 flex flex-col gap-6">
                        <div className="flex items-center gap-6 group">
                           <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center text-3xl text-gray-400 group-hover:text-[#FF9933] group-hover:border-[#FF9933] transition-colors">
                              <i className="fa-solid fa-list-check"></i>
                           </div>
                           <div>
                              <h4 className="font-bold text-[#1a2b4c] text-xl">Transactions</h4>
                              <p className="text-sm text-gray-500">Day-to-day operational execution.</p>
                           </div>
                        </div>
                        <div className="ml-8 w-1 h-8 border-l-2 border-dashed border-gray-300"></div>
                        <div className="flex items-center gap-6 group">
                           <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center text-3xl text-gray-400 group-hover:text-[#FF9933] group-hover:border-[#FF9933] transition-colors">
                              <i className="fa-solid fa-eye"></i>
                           </div>
                           <div>
                              <h4 className="font-bold text-[#1a2b4c] text-xl">Visibility</h4>
                              <p className="text-sm text-gray-500">Real-time understanding of what is happening.</p>
                           </div>
                        </div>
                        <div className="ml-8 w-1 h-8 border-l-2 border-dashed border-gray-300"></div>
                        <div className="flex items-center gap-6 group">
                           <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm border border-gray-200 flex items-center justify-center text-3xl text-gray-400 group-hover:text-[#FF9933] group-hover:border-[#FF9933] transition-colors">
                              <i className="fa-solid fa-brain"></i>
                           </div>
                           <div>
                              <h4 className="font-bold text-[#1a2b4c] text-xl">Intelligence</h4>
                              <p className="text-sm text-gray-500">Insights from patterns, exceptions and delays.</p>
                           </div>
                        </div>
                        <div className="ml-8 w-1 h-8 border-l-2 border-dashed border-gray-300"></div>
                        <div className="flex items-center gap-6 group">
                           <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#FF9933] shadow-md border border-[#FF9933] flex items-center justify-center text-3xl text-white">
                              <i className="fa-solid fa-bullseye"></i>
                           </div>
                           <div>
                              <h4 className="font-bold text-[#1a2b4c] text-xl">Better Decisions</h4>
                              <p className="text-sm text-gray-500 font-bold">Actionable, data-driven outcomes.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 06. CUSTOMER SUCCESS */}
      <section className="py-24 bg-gray-50 border-t border-b border-gray-100">
         <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
               <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">CUSTOMER SUCCESS</span>
               <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c]">Fusion Finance</h2>
               <p className="text-xl text-[#FF9933] font-bold mt-2">Enterprise Administration Across 1,740+ Branches</p>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-xl border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 overflow-hidden">
               <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 relative min-h-[350px] lg:min-h-auto bg-gray-100 p-8 flex flex-col justify-center border-r border-gray-100">
                     <div className="absolute inset-0 z-0">
                        <Image src="/assets/AboutUSPage_Banner1.png" alt="Fusion" fill className="object-cover opacity-10" />
                     </div>
                     <div className="relative z-10">
                        <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center mb-8 p-4">
                           <Image src="/Images/clients/fusion.png" alt="Fusion Logo" width={80} height={80} className="object-contain" />
                        </div>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                           MSquare has engineered and continues to support a centralized enterprise administration platform for Fusion Finance, connecting critical administrative operations across its nationwide branch network.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                           <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                              <div className="text-2xl font-black text-[#1a2b4c] mb-1">1,740+</div>
                              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Client Branches</div>
                           </div>
                           <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                              <div className="text-2xl font-black text-[#1a2b4c] mb-1">PAN-India</div>
                              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Operations</div>
                           </div>
                        </div>
                        <Link href="/customer-success" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a2b4c] text-white rounded-lg font-bold hover:bg-[#FF9933] transition-colors shadow-md text-sm">
                           Explore Success Story <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                     </div>
                  </div>
                  
                  <div className="lg:w-3/5 p-8 lg:p-12 bg-white">
                     <h3 className="text-2xl font-bold text-[#1a2b4c] mb-8">Operations Digitized</h3>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                           { title: 'Rent & Lease Admin', desc: 'Managing branch properties, ownership/rent bifurcation, agreements, deposits, and recurring rent processes.', icon: 'fa-building-circle-check' },
                           { title: 'Utility Management', desc: 'Processing electricity, internet, telephone and other branch utility expenses with duplicate-bill controls.', icon: 'fa-bolt' },
                           { title: 'Courier & Doc Tracking', desc: 'Tracking critical document movement between branches and Head Office from dispatch through receipt.', icon: 'fa-envelope-open-text' },
                           { title: 'Advance Settlement', desc: 'Managing branch advances, approved expenditure and settlement workflows.', icon: 'fa-money-bill-transfer' },
                           { title: 'Petty Cash', desc: 'Controlling predefined expense heads, spending limits and branch-level petty-cash transactions.', icon: 'fa-coins' },
                           { title: 'Inventory & Procurement', desc: 'Managing branch requirements for assets and consumables—from requirement through allocation.', icon: 'fa-boxes-stacked' },
                           { title: 'Vendor Management', desc: 'Digitizing vendor onboarding, validation and approval according to organizational policies.', icon: 'fa-users-gear' }
                        ].map((op, i) => (
                           <div key={i} className="flex gap-4 group">
                              <div className="w-10 h-10 shrink-0 rounded-xl bg-orange-50 text-[#FF9933] flex items-center justify-center text-lg border border-orange-100 group-hover:bg-[#FF9933] group-hover:text-white transition-colors shadow-sm">
                                 <i className={`fa-solid ${op.icon}`}></i>
                              </div>
                              <div>
                                 <h4 className="font-bold text-[#1a2b4c] text-sm mb-1">{op.title}</h4>
                                 <p className="text-gray-500 text-xs leading-relaxed">{op.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 07. OUR APPROACH */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
               <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">OUR APPROACH</span>
               <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">We Don&apos;t Start With Technology.<br/>We Start With the Business.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0"></div>
               
               {[
                  { step: '01', title: 'Understand', desc: 'We study the existing process, stakeholders, dependencies and challenges.' },
                  { step: '02', title: 'Simplify', desc: 'We identify unnecessary complexity and determine how the process can work better.' },
                  { step: '03', title: 'Engineer', desc: 'We design workflows, business rules, architecture and integrations.' },
                  { step: '04', title: 'Connect', desc: 'We bring together people, departments, branches, systems and vendors.' },
                  { step: '05', title: 'Evolve', desc: 'We continue supporting and enhancing the platform as the organization grows.' }
               ].map((item, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="relative z-10 flex flex-col items-center text-center group"
                  >
                     <div className="w-20 h-20 rounded-full bg-white border-4 border-gray-50 shadow-md flex items-center justify-center mb-6 group-hover:border-[#FF9933] transition-colors relative">
                        <span className="text-2xl font-black text-gray-300 group-hover:text-[#FF9933] transition-colors">{item.step}</span>
                        <div className="absolute inset-2 rounded-full border border-dashed border-gray-200 group-hover:border-[#FF9933] animate-[spin_10s_linear_infinite]"></div>
                     </div>
                     <h3 className="font-bold text-[#1a2b4c] text-lg mb-2">{item.title}</h3>
                     <p className="text-gray-500 text-xs leading-relaxed px-2">{item.desc}</p>
                  </motion.div>
               ))}
            </div>

            <div className="mt-16 text-center text-xl font-bold text-[#1a2b4c] bg-orange-50/50 py-6 px-8 rounded-2xl inline-block mx-auto border border-orange-100 shadow-sm">
               We don&apos;t digitize complexity. <span className="text-[#FF9933]">We simplify it first.</span>
            </div>
         </div>
      </section>

      {/* 08. BUILT FOR ENTERPRISE REALITY */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
               <h2 className="text-3xl lg:text-4xl font-bold text-[#1a2b4c] mb-6">Built for Enterprise Reality</h2>
               <p className="text-gray-600 text-lg">
                  Enterprise technology needs to perform long after implementation. Because an enterprise platform isn&apos;t simply a software project. It becomes part of how the organization operates.
               </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
               {['Scalability', 'Security', 'Role-Based Access', 'Workflow Controls', 'Auditability', 'Integration', 'Performance', 'Maintainability', 'Data Protection', 'Continuous Evolution'].map((tag, i) => (
                  <div key={i} className="bg-white border border-gray-200 text-gray-700 text-sm font-bold px-5 py-2.5 rounded-full shadow-sm flex items-center gap-2 hover:border-[#FF9933] hover:text-[#FF9933] transition-colors cursor-default">
                     <i className="fa-solid fa-check text-green-500"></i> {tag}
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 09. BEYOND FINANCIAL SERVICES & CTA */}
      <section className="py-24 bg-[#0a1121] relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF9933] rounded-full blur-[150px] opacity-20 -mr-[250px] -mt-[250px]"></div>
         
         <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               <div>
                  <span className="text-[#FF9933] font-bold tracking-widest text-xs uppercase mb-3 block">CROSS-INDUSTRY EXPERTISE</span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Beyond Financial Services</h2>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                     Our experience in a complex, distributed financial-services environment gives MSquare deep practical understanding of multi-location operations, approval hierarchies, administrative controls and enterprise workflows.
                  </p>
                  <p className="text-gray-300 mb-8 font-medium">
                     We bring that experience to organizations across industries where operational complexity is becoming difficult to manage, measure or scale.
                  </p>
                  <div className="flex flex-wrap gap-3">
                     {['Financial Services', 'Manufacturing', 'Healthcare', 'FMCG', 'Large Enterprises', 'Government & Public Sector'].map((ind, i) => (
                        <div key={i} className="bg-white/10 border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-md backdrop-blur-sm">
                           {ind}
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden group border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full blur-[40px] -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                  
                  <div className="relative z-10">
                     <h3 className="text-2xl font-bold text-[#1a2b4c] mb-4">Have a Complex Operational Challenge?</h3>
                     <p className="text-gray-600 mb-2 font-medium">Multiple locations. Multiple approvals. Multiple departments. Multiple systems.</p>
                     <p className="text-gray-600 mb-8">The answer doesn&apos;t have to be more complexity.</p>
                     <p className="text-xl font-bold text-[#FF9933] mb-8">Let&apos;s make the technology simple.</p>
                     
                     <Link href="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#FF9933] text-white rounded-lg font-bold hover:bg-[#e68a2e] transition-colors shadow-lg shadow-orange-500/20 text-center text-lg">
                        Talk to MSquare <i className="fa-solid fa-arrow-right ml-2"></i>
                     </Link>
                  </div>
               </div>

            </div>
         </div>
      </section>

    </div>
  );
}
