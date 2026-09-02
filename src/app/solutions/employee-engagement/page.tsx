'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function EmployeeEngagementPage() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* 01 - HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="lg:w-1/2">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
                <Link href="/" className="hover:text-[#FF9933]">Home</Link>
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
                <Link href="/solutions" className="hover:text-[#FF9933]">Solutions</Link>
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
                <span className="text-[#FF9933]">Employee Engagement & Experience</span>
              </div>
              
              <motion.div variants={fadeUp} className="mb-6">
                <span className="text-[#FF9933] text-sm font-bold tracking-widest uppercase">EMPLOYEE ENGAGEMENT & EXPERIENCE</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a2b4c] leading-[1.1] mb-6">
                Create Experiences Employees Want to Be Part Of.
              </motion.h1>
              <motion.div variants={fadeUp} className="text-gray-600 text-lg md:text-xl font-medium space-y-4 mb-10 max-w-xl">
                <p>Connect People. Encourage Participation. Create Experiences That Stay With Them.</p>
                <p className="text-sm">From organization-wide employee programs to recognition initiatives and employee gatherings, technology helps organizations create experiences that are organized for management and meaningful for employees.</p>
              </motion.div>
              
              {/* Quick Icons Strip */}
              <motion.div variants={staggerContainer} className="flex flex-wrap gap-4">
                {[
                  { icon: 'fa-users', title: 'Connect' },
                  { icon: 'fa-clipboard-check', title: 'Participate' },
                  { icon: 'fa-comments', title: 'Engage' },
                  { icon: 'fa-trophy', title: 'Recognize' },
                  { icon: 'fa-image', title: 'Experience' }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-orange-50 text-[#FF9933] rounded-full flex items-center justify-center text-xl mb-3 border border-orange-100">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <h3 className="text-[#1a2b4c] font-bold text-xs mb-1 uppercase tracking-wider">{item.title}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image 
                  src="/assets/Employee-engagement.png" 
                  alt="Employee Engagement Platform" 
                  fill 
                  className="object-contain lg:object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
            <i className="fa-solid fa-quote-left text-4xl text-orange-200 mb-6"></i>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b4c] leading-relaxed mb-8">
              Employee engagement goes beyond announcements, activities or occasional corporate events. Organizations need meaningful ways to help employees participate, connect, communicate, be recognized and feel part of the organization.
            </h2>
            <p className="text-gray-600 text-lg">
              MSquare engineers enterprise employee engagement platforms that bring together employee participation, communication, personalized experiences, recognition, networking and shared memories within one structured digital environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ONE CONNECTED EXPERIENCE - TEXT SUMMARY */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-6 leading-tight">One Employee Experience.<br/><span className="text-[#FF9933]">Before, During & Beyond.</span></h2>
                 <div className="space-y-4 text-gray-600">
                   <p>Large employee engagement programs involve much more than bringing employees together.</p>
                   <p>Behind every experience are employee registrations, preferences, travel arrangements, hotel coordination, itineraries, communication, activities, recognition and hundreds of individual interactions.</p>
                   <p>When these are managed through spreadsheets, emails, messaging groups and multiple teams, the employee experience can quickly become fragmented.</p>
                   <p className="font-bold text-[#1a2b4c]">MSquare brings these touchpoints together into one connected employee experience.</p>
                 </div>
              </div>
              <div className="md:w-1/2 bg-orange-50 p-10 rounded-3xl border border-orange-100 flex items-center justify-center shadow-inner">
                 <div className="flex items-center gap-4 text-[#FF9933] font-black text-xl md:text-2xl uppercase tracking-widest flex-wrap justify-center">
                    <span>Before</span>
                    <i className="fa-solid fa-arrow-right text-sm"></i>
                    <span>During</span>
                    <i className="fa-solid fa-arrow-right text-sm"></i>
                    <span>Beyond</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* THE COMPLETE JOURNEY TIMELINE */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="text-center mb-16">
            <span className="text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-4 block">THE COMPLETE JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4c] mb-4">The Complete Employee Engagement Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Rather than presenting travel, communication, networking, recognition and photos as disconnected capabilities, MSquare brings them together around the employee.</p>
          </motion.div>
          
          <div className="relative max-w-4xl mx-auto">
             {/* Vertical Line */}
             <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 -translate-x-1/2 hidden md:block"></div>
             
             <div className="space-y-12">
               {[
                 { step: 'INVITE', title: 'Employee participation begins.', align: 'right', icon: 'fa-envelope-open' },
                 { step: 'PERSONALIZE', title: 'Preferences, travel, accommodation and individual requirements.', align: 'left', icon: 'fa-user-check' },
                 { step: 'COMMUNICATE', title: 'Schedules, updates, instructions and important information.', align: 'right', icon: 'fa-bullhorn' },
                 { step: 'PARTICIPATE', title: 'Activities, sessions and organizational initiatives.', align: 'left', icon: 'fa-users-gear' },
                 { step: 'CONNECT', title: 'Employees interact beyond teams and locations.', align: 'right', icon: 'fa-network-wired' },
                 { step: 'RECOGNIZE', title: 'Achievements and contributions become visible.', align: 'left', icon: 'fa-medal' },
                 { step: 'SHARE', title: 'Photos, moments and experiences are shared.', align: 'right', icon: 'fa-share-nodes' },
                 { step: 'REMEMBER', title: 'The employee experience continues beyond the program.', align: 'left', icon: 'fa-heart' },
               ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    className={`flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}
                  >
                     <div className="md:w-1/2 flex justify-center md:justify-end order-2 md:order-none">
                        <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#FF9933] transition-colors duration-300 max-w-sm w-full text-center ${item.align === 'left' ? 'md:text-left' : 'md:text-right'}`}>
                          <h3 className="text-[#FF9933] font-black text-xl mb-2 tracking-wider">{item.step}</h3>
                          <p className="text-gray-600 font-medium">{item.title}</p>
                        </div>
                     </div>
                     
                     <div className="z-10 w-16 h-16 bg-[#1a2b4c] rounded-full border-4 border-white shadow-md flex items-center justify-center flex-shrink-0 text-[#FF9933] text-xl order-1 md:order-none">
                        <i className={`fa-solid ${item.icon}`}></i>
                     </div>
                     
                     <div className="hidden md:block md:w-1/2 order-3 md:order-none"></div>
                  </motion.div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE FEATURE BLOCKS (Alternating) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-32">
            
            {/* Block 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2 order-2 md:order-1">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-2">Personalized Employee Experience</h2>
                 <h3 className="text-[#FF9933] font-bold text-lg mb-6">Make Every Employee Feel Considered.</h3>
                 <div className="space-y-4 text-gray-600 mb-6">
                   <p>When hundreds of employees participate in an organizational program, their individual requirements can be different.</p>
                   <p>The platform enables organizations to maintain employee-specific information and preferences so that communication and experiences can be personalized.</p>
                   <p>Instead of employees depending on multiple emails, spreadsheets or messages, relevant information can be made available through one organized experience.</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['Employee Profile', 'Participation Details', 'Preferences', 'Travel Information', 'Accommodation Details', 'Personalized Itinerary', 'Program Information', 'Important Updates'].map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2">
                 <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-50">
                    <Image src="/Images/gallery-1.jpeg" alt="Personalized Employee Experience" fill className="object-cover" />
                 </div>
               </div>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                 <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-50">
                    <Image src="/Images/gallery-2.jpeg" alt="Travel, Stay & Itinerary" fill className="object-cover" />
                 </div>
               </div>
               <div className="md:w-1/2">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-2">Travel, Stay & Itinerary</h2>
                 <h3 className="text-[#FF9933] font-bold text-lg mb-6">Coordinate the Journey Around the Employee.</h3>
                 <div className="space-y-4 text-gray-600 mb-6">
                   <p>For employee gatherings, annual programs, recognition initiatives and other organization-led experiences, travel and accommodation coordination can become operationally complex.</p>
                   <p>MSquare enables organizations to structure details so each participating employee can receive information relevant to their own journey.</p>
                   <p className="font-bold text-[#1a2b4c]">Travel → Stay → Schedule → Experience</p>
                   <p>This reduces coordination complexity for organizing teams while creating a smoother experience for employees.</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['Travel Details', 'Arrival & Departure', 'Flight / Train Information', 'Hotel Allocation', 'Room Information', 'Check-In / Check-Out', 'Transfers', 'Venue Information', 'Personalized Itinerary'].map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2 order-2 md:order-1">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-2">Employee Communication</h2>
                 <h3 className="text-[#FF9933] font-bold text-lg mb-6">Right Information. Right Employee. Right Time.</h3>
                 <div className="space-y-4 text-gray-600 mb-6">
                   <p>Employee programs generate continuous communication before and during the experience.</p>
                   <p>The platform provides a structured channel for communication that can be delivered around the employee's participation and requirements rather than depending entirely on fragmented messaging channels.</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['Program Announcements', 'Schedule Updates', 'Travel Information', 'Hotel Information', 'Activity Notifications', 'Reminders', 'Important Instructions', 'Leadership Messages', 'Push Notifications'].map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2">
                 <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-50">
                    <Image src="/Images/gallery-3.jpeg" alt="Employee Communication" fill className="object-cover" />
                 </div>
               </div>
            </div>

            {/* Block 4 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                 <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-50">
                    <Image src="/Images/gallery-4.jpeg" alt="Participation & Engagement" fill className="object-cover" />
                 </div>
               </div>
               <div className="md:w-1/2">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-2">Participation & Engagement</h2>
                 <h3 className="text-[#FF9933] font-bold text-lg mb-6">Turn Employees From Attendees Into Participants.</h3>
                 <div className="space-y-4 text-gray-600 mb-6">
                   <p>Employee engagement becomes meaningful when people actively participate rather than simply attend.</p>
                   <p>Organizations can use the platform to encourage participation. This creates opportunities for employees to interact with the organization and with each other throughout the experience.</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['Activities', 'Sessions', 'Challenges', 'Polls', 'Surveys', 'Interactive Programs', 'Employee Initiatives', 'Feedback', 'Engagement Campaigns'].map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Block 5 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2 order-2 md:order-1">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-2">Employee Recognition</h2>
                 <h3 className="text-[#FF9933] font-bold text-lg mb-6">Make Achievement Visible.</h3>
                 <div className="space-y-4 text-gray-600 mb-6">
                   <p>Recognition is an important part of employee engagement.</p>
                   <p>Recognition can become part of the employee's digital experience rather than remaining limited to the stage or a single announcement.</p>
                   <p className="font-bold text-[#1a2b4c]">ACHIEVEMENT → RECOGNITION → CELEBRATION</p>
                   <p>This helps organizations make employees feel seen and appreciated.</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['Employee Achievements', 'Awards', 'Milestones', 'Winners', 'Team Achievements', 'Leadership Recognition', 'Special Contributions'].map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2">
                 <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-50">
                    <Image src="/Images/gallery-5.jpeg" alt="Employee Recognition" fill className="object-cover" />
                 </div>
               </div>
            </div>

            {/* Block 6 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                 <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-50">
                    <Image src="/Images/gallery-6.jpeg" alt="Employee Networking" fill className="object-cover" />
                 </div>
               </div>
               <div className="md:w-1/2">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-2">Employee Networking</h2>
                 <h3 className="text-[#FF9933] font-bold text-lg mb-6">Help People Connect Beyond Their Immediate Teams.</h3>
                 <div className="space-y-4 text-gray-600 mb-6">
                   <p>Large organizations often bring together employees who work across different departments, locations and responsibilities but rarely get an opportunity to interact.</p>
                   <p>A structured employee networking environment can help employees discover and connect with colleagues participating in the same organizational experience.</p>
                   <p className="italic">The objective is to create stronger internal connections across the organization—not to create another public social network.</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['People', 'Teams', 'Locations', 'Activities', 'Shared Interests', 'Program Participation'].map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Block 7 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2 order-2 md:order-1">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-2">Internal Social Experience</h2>
                 <h3 className="text-[#FF9933] font-bold text-lg mb-6">Create a Digital Space Around the Employee Community.</h3>
                 <div className="space-y-4 text-gray-600 mb-6">
                   <p>Employee experiences generate conversations, achievements and moments worth sharing.</p>
                   <p>The platform can provide a private organizational environment where employees can extend engagement beyond formal communication and participate in the experience together.</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['Share Updates', 'Post Photos', 'Celebrate Moments', 'React', 'Interact', 'Recognize Colleagues', 'Discover Program Highlights'].map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2">
                 <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-50">
                    <Image src="/Images/ph1.jpeg" alt="Internal Social Experience" fill className="object-cover" />
                 </div>
               </div>
            </div>

            {/* Block 8 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                 <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-50">
                    <Image src="/Images/ph2.jpg" alt="Photos, Moments & Memories" fill className="object-cover" />
                 </div>
               </div>
               <div className="md:w-1/2">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-2">Photos, Moments & Memories</h2>
                 <h3 className="text-[#FF9933] font-bold text-lg mb-6">Don't Let the Experience End When the Program Ends.</h3>
                 <div className="space-y-4 text-gray-600 mb-6">
                   <p>Employee programs create moments that employees remember—team activities, achievements, celebrations, leadership interactions and shared experiences.</p>
                   <p>Employees can revisit important moments while the organization maintains a structured digital record of the experience.</p>
                   <p className="font-bold text-[#1a2b4c]">PARTICIPATE → EXPERIENCE → SHARE → REMEMBER</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['Photo Galleries', 'Employee Photos', 'Program Highlights', 'Recognition Moments', 'Team Memories', 'Shared Experiences'].map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Block 9 */}
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2 order-2 md:order-1">
                 <h2 className="text-3xl font-black text-[#1a2b4c] mb-2">Feedback & Post-Experience</h2>
                 <h3 className="text-[#FF9933] font-bold text-lg mb-6">Understand the Experience. Continue the Connection.</h3>
                 <div className="space-y-4 text-gray-600 mb-6">
                   <p>Employee engagement should not stop when a program concludes.</p>
                   <p>This helps organizations understand what employees valued and where future experiences can improve. The same digital environment can continue supporting communication, recognition, memories and employee interaction beyond the program itself.</p>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {['Overall Experience', 'Activities', 'Sessions', 'Travel', 'Accommodation', 'Communication', 'Participation', 'Suggestions'].map((tag, i) => (
                     <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                   ))}
                 </div>
               </div>
               <div className="md:w-1/2 order-1 md:order-2">
                 <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-[#FF9933] transition-colors duration-300 bg-gray-50">
                    <Image src="/Images/ph3.jpg" alt="Feedback & Post-Experience" fill className="object-cover" />
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER SUCCESS (Terumo) */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Image Placeholder */}
            <div className="w-full lg:w-1/3 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-inner bg-gray-100">
              <Image src="/assets/CustomerSuccess_1.png" alt="Terumo India Office" fill className="object-cover" />
            </div>
            
            {/* Right Content */}
            <div className="w-full lg:w-2/3">
              <span className="text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-2 block">CUSTOMER SUCCESS</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4c] mb-2">Terumo India</h2>
              <h3 className="text-gray-500 font-medium mb-6">Connected Employee Engagement Experience</h3>
              
              <p className="text-gray-600 text-sm mb-8 max-w-2xl leading-relaxed">
                MSquare implemented a unified employee experience platform supporting participation, travel coordination, communication, recognition and overall experience for organization-wide programs.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[#1a2b4c]">
                    <i className="fa-regular fa-user text-2xl"></i>
                    <span className="text-2xl font-black text-[#FF9933]">600+</span>
                  </div>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wide">Employees</span>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[#1a2b4c]">
                    <i className="fa-regular fa-user-circle text-2xl"></i>
                    <span className="text-sm font-bold leading-tight">Personalized Employee Experience</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[#1a2b4c]">
                    <i className="fa-regular fa-comments text-2xl"></i>
                    <span className="text-sm font-bold leading-tight">Connected Communication</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[#1a2b4c]">
                    <i className="fa-solid fa-suitcase-rolling text-2xl"></i>
                    <span className="text-sm font-bold leading-tight">Integrated Travel & Stay</span>
                  </div>
                </div>
                
                {/* Additional touchpoints mentioned in text */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[#1a2b4c]">
                    <i className="fa-solid fa-users text-2xl"></i>
                    <span className="text-sm font-bold leading-tight">Employee Networking</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[#1a2b4c]">
                    <i className="fa-solid fa-camera text-2xl"></i>
                    <span className="text-sm font-bold leading-tight">Photos & Shared Memories</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[#1a2b4c]">
                    <i className="fa-solid fa-trophy text-2xl"></i>
                    <span className="text-sm font-bold leading-tight">Employee Recognition</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-[#1a2b4c]">
                    <i className="fa-solid fa-chart-pie text-2xl"></i>
                    <span className="text-sm font-bold leading-tight">Participation & Feedback</span>
                  </div>
                </div>
              </div>
              
              <Link href="/customer-success" className="inline-flex items-center gap-2 bg-[#FF9933] text-white px-6 py-3 rounded-md font-bold text-sm hover:bg-[#e68a2e] transition-colors shadow-md">
                Explore Customer Success Story <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* BUILT AROUND THE EMPLOYEE */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a2b4c] mb-6">Built Around the Employee</h2>
            <p className="text-xl font-bold text-[#FF9933] mb-6">Technology should remain behind the experience—not become the experience.</p>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              The objective is to make participation easier for employees while giving organizations a structured way to coordinate communication, engagement and employee experiences at scale.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50 py-6 px-4 rounded-3xl border border-gray-100 shadow-inner">
              <span>Personalization</span> <span className="text-gray-300">&middot;</span>
              <span>Communication</span> <span className="text-gray-300">&middot;</span>
              <span>Participation</span> <span className="text-gray-300">&middot;</span>
              <span>Coordination</span> <span className="text-gray-300">&middot;</span>
              <span>Networking</span> <span className="text-gray-300">&middot;</span>
              <span>Recognition</span> <span className="text-gray-300">&middot;</span>
              <span>Feedback</span> <span className="text-gray-300">&middot;</span>
              <span>Memories</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#0a1121] rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
               <Image src="/assets/Employee-engagement.png" alt="Tech" fill className="object-cover opacity-10" />
            </div>
            
            <div className="relative z-10 md:w-2/3">
              <span className="text-[#FF9933] text-xs font-bold tracking-widest uppercase mb-4 block">CREATE BETTER EMPLOYEE EXPERIENCES</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">Bring People Together.<br/>Make Every Experience Count.</h2>
              <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
                From participation and personalized coordination to communication, networking, recognition and shared memories, MSquare engineers technology that helps organizations create connected and meaningful employee experiences.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto shrink-0">
              <Link href="/contact" className="bg-[#FF9933] text-white px-8 py-4 rounded-md font-bold text-center hover:bg-[#e68a2e] transition-colors shadow-lg">
                Talk to MSquare <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
