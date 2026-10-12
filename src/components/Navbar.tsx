'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from "../../public/assets/MSquareFinallogo.png";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Industries', href: '/industries' },
  { label: 'Customer Success', href: '/customer-success' },
  { label: 'Products', href: '/products' },
  { label: 'Technology', href: '/technology' },
  { label: 'Insights', href: '/insights' },
  { label: 'Company', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileMenu = (menu: string) => {
    setExpandedMobile(expandedMobile === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setExpandedMobile(null);
  }, [pathname]);

  // Auto-close mobile menu on desktop breakpoint resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const getLinkClass = (active: boolean) =>
    `relative px-2.5 2xl:px-3 py-2 text-[13px] 2xl:text-sm font-semibold transition-colors duration-300 whitespace-nowrap ${
      active ? 'text-[#FF9933]' : 'text-gray-800 hover:text-[#FF9933]'
    }`;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-3 md:py-4 shadow-sm"}`}
    >
      <nav>
        <div className="container mx-auto px-4 sm:px-6 xl:px-8 max-w-[1440px] flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex-shrink-0 mr-2 sm:mr-4"
          >
            <Image
              src={Logo}
              alt="MSquare Software"
              width={160}
              height={55}
              style={{ maxHeight: "42px", width: "auto", objectFit: "contain" }}
              className="transition-transform hover:scale-105 h-8 sm:h-9 md:h-10"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-0.5 2xl:gap-2 flex-1 justify-center relative">
            {navLinks.map((link) => {
              if (link.label === "Company") {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className={`${getLinkClass(isActive(link.href) || isActive("/philosophy") || isActive("/careers"))} flex items-center gap-1`}
                    >
                      {link.label}{" "}
                      <i className="fa-solid fa-chevron-down text-[10px]"></i>
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50 overflow-hidden">
                      <Link
                        href="/about"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        About MSquare
                      </Link>
                      <Link
                        href="/philosophy"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        Our Philosophy
                      </Link>
                      <Link
                        href="/careers"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors"
                      >
                        Careers
                      </Link>
                    </div>
                  </div>
                );
              }
              if (link.label === "Solutions") {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className={`${getLinkClass(isActive(link.href))} flex items-center gap-1`}
                    >
                      {link.label}{" "}
                      <i className="fa-solid fa-chevron-down text-[10px]"></i>
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50 overflow-hidden">
                      <Link
                        href="/solutions/atma"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        ATMA (Agriculture)
                      </Link>
                      <Link
                        href="/solutions/learning"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        Learning & Development
                      </Link>
                      <Link
                        href="/solutions/employee-engagement"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        Employee Engagement
                      </Link>
                      <Link
                        href="/solutions/enterprise-operations"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        Enterprise Operations & Automation
                      </Link>
                      <Link
                        href="/solutions/disaster-management"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        Disaster Management
                      </Link>
                      <Link
                        href="/solutions/district-governance"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors"
                      >
                        District Governance
                      </Link>
                    </div>
                  </div>
                );
              }
              if (link.label === "Products") {
                return (
                  <div key={link.label} className="relative group">
                    <button
                      className={`${getLinkClass(isActive(link.href))} flex items-center gap-1`}
                    >
                      {link.label}{" "}
                      <i className="fa-solid fa-chevron-down text-[10px]"></i>
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col z-50 overflow-hidden">
                      <Link
                        href="/products/automateschool"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        AutomateMySchool
                      </Link>
                      <Link
                        href="/products/banklnd"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        BankLnD
                      </Link>
                      <Link
                        href="/products/bharatkadsa"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        BharatKadsa
                      </Link>
                      <Link
                        href="/products/greenybook"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        GreenyBook
                      </Link>
                      <Link
                        href="/products/gymcloudsuite"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors border-b border-gray-50"
                      >
                        GymCloudSuite
                      </Link>
                      <Link
                        href="/products/zeroticket"
                        className="px-4 py-3 text-sm text-gray-700 hover:text-[#FF9933] hover:bg-orange-50 font-medium transition-colors"
                      >
                        ZeroTicket
                      </Link>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={getLinkClass(isActive(link.href))}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden xl:flex items-center ml-4 flex-shrink-0">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#FF9933] text-white rounded-md font-bold text-sm hover:bg-[#e68a2e] transition-all whitespace-nowrap shadow-md"
            >
              Talk to Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden p-2 text-gray-800 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.i
              animate={{ rotate: isOpen ? 90 : 0 }}
              className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-2xl`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-t border-gray-100 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1.5">
              {navLinks.map((link) => {
                if (
                  link.label === "Company" ||
                  link.label === "Solutions" ||
                  link.label === "Products"
                ) {
                  const subLinks =
                    link.label === "Company"
                      ? [
                          { label: "About MSquare", href: "/about" },
                          { label: "Our Philosophy", href: "/philosophy" },
                          { label: "Careers", href: "/careers" },
                        ]
                      : link.label === "Solutions"
                        ? [
                            {
                              label: "ATMA (Agriculture)",
                              href: "/solutions/atma",
                            },
                            {
                              label: "Learning & Development",
                              href: "/solutions/learning",
                            },
                            {
                              label: "Employee Engagement",
                              href: "/solutions/employee-engagement",
                            },
                            {
                              label: "Enterprise Operations & Automation",
                              href: "/solutions/enterprise-operations",
                            },
                            {
                              label: "Disaster Management",
                              href: "/solutions/disaster-management",
                            },
                            {
                              label: "District Governance",
                              href: "/solutions/district-governance",
                            },
                          ]
                        : [
                            {
                              label: "AutomateMySchool",
                              href: "/products/automateschool",
                            },
                            { label: "BankLnD", href: "/products/banklnd" },
                            {
                              label: "BharatKadsa",
                              href: "/products/bharatkadsa",
                            },
                            {
                              label: "GreenyBook",
                              href: "/products/greenybook",
                            },
                            {
                              label: "GymCloudSuite",
                              href: "/products/gymcloudsuite",
                            },
                            {
                              label: "ZeroTicket",
                              href: "/products/zeroticket",
                            },
                          ];

                  return (
                    <div
                      key={link.label}
                      className="flex flex-col gap-1 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleMobileMenu(link.label)}
                        className={`flex items-center justify-between px-4 py-3 text-base font-bold rounded-lg transition-colors ${expandedMobile === link.label ? "bg-orange-50/50 text-[#FF9933]" : "text-gray-900 hover:bg-gray-50"}`}
                      >
                        {link.label}
                        <i
                          className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${expandedMobile === link.label ? "rotate-180 text-[#FF9933]" : "text-gray-400"}`}
                        ></i>
                      </button>
                      <AnimatePresence>
                        {expandedMobile === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex flex-col gap-1 overflow-hidden"
                          >
                            {subLinks.map((subLink) => (
                              <Link
                                key={subLink.label}
                                href={subLink.href}
                                className={`pl-8 pr-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${isActive(subLink.href) ? "text-[#FF9933] bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}
                                onClick={() => setIsOpen(false)}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-3 text-base font-semibold rounded-lg transition-colors ${isActive(link.href) ? "text-[#FF9933] bg-orange-50" : "text-gray-900 hover:bg-gray-50"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-4 mx-4 bg-[#FF9933] text-white text-center py-4 rounded-xl font-bold hover:bg-[#e68a2e] transition-all shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Talk to Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}