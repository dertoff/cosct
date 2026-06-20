/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const CTA_URL = "https://giftclick.org/aff_c?offer_id=4258&aff_id=158143";

const CostcoLogo = () => (
  <div className="flex flex-col items-center justify-center select-none py-2 shrink-0">
    <div className="relative inline-flex flex-col">
      <div className="relative pr-1">
        <div className="text-[54px] sm:text-[60px] font-black tracking-[-0.04em] text-brand-primary uppercase leading-none" style={{ fontFamily: "Impact, sans-serif", transform: "skewX(-14deg) scaleX(1.15)" }}>
          COSTCO
        </div>
        <div className="absolute top-1 -right-[14px] text-[12px] sm:text-[14px] font-bold text-brand-primary font-sans">
          ®
        </div>
      </div>
      <div className="flex items-center gap-[6px] w-[90%] self-end mt-[2px] pr-[1px]" style={{ transform: "skewX(-14deg) scaleX(1.15)" }}>
         <div className="flex flex-col justify-between h-[8px] sm:h-[10px] grow">
           <div className="h-[1.5px] sm:h-[2px] bg-[#005DAA] w-full"></div>
           <div className="h-[1.5px] sm:h-[2px] bg-[#005DAA] w-full"></div>
           <div className="h-[1.5px] sm:h-[2px] bg-[#005DAA] w-full"></div>
         </div>
         <div className="text-[12px] sm:text-[14px] font-black tracking-wider text-[#005DAA] uppercase leading-[0.8]" style={{ fontFamily: "Arial Black, Impact, sans-serif" }}>
           WHOLESALE
         </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      id: "1",
      title: "Click \"Start Now\"",
      description: "Begin your journey to savings."
    },
    {
      id: "2",
      title: "Complete 3-5 deals",
      description: "Discover brands you'll love."
    },
    {
      id: "3",
      title: "Receive your coupon",
      description: "Enjoy your savings instantly."
    }
  ];

  const faqs = [
    {
      question: "How do I get my code?",
      answer: "Once you complete the required number of deals, your unique discount code will be sent to the email address you provide."
    },
    {
      question: "What are Deals?",
      answer: "Deals include trying out new apps, taking surveys, or signing up for free trials from our trusted partners."
    },
    {
      question: "Can I use the code online?",
      answer: "Yes, your discount code is valid for use on the official store website at checkout."
    }
  ];

  return (
    <>
      {/* Desktop/Tablet Message */}
      <div className="hidden sm:flex min-h-screen flex-col items-center justify-center p-8 text-center bg-brand-bone">
        <div className="max-w-md bg-white p-10 rounded-3xl shadow-sm border border-black/5">
          <div className="mb-6 flex justify-center">
            <CostcoLogo />
          </div>
          <h2 className="text-[24px] font-black text-brand-primary mb-4 tracking-tight uppercase">Mobile Exclusive</h2>
          <p className="text-[16px] text-black/70 font-medium">
            This experience is optimized for mobile devices. Please open this link on your smartphone to continue.
          </p>
        </div>
      </div>

      {/* Mobile Content */}
      <main id="landing-page" className="sm:hidden min-h-screen flex flex-col items-center py-10 px-5 font-sans bg-brand-bone antialiased">
        <div className="w-full max-w-[440px] flex flex-col items-center gap-8">
        
        {/* Logo Section */}
        <header className="w-full flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CostcoLogo />
          </motion.div>
        </header>

        {/* Headline Section */}
        <section className="text-center px-2">
          <h1 className="text-[36px] leading-[1.1] font-black text-brand-primary tracking-tight uppercase">
            Get up to a <em className="not-italic text-black">$500</em> <br /> Discount Code
          </h1>
        </section>

        {/* Minimal Steps Section */}
        <section className="w-full space-y-4 my-2">
          {steps.map((step) => (
            <article key={step.id} className="flex items-center gap-5 bg-brand-soft border border-black/5 rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                <span className="text-[13px] font-black text-white">0{step.id}</span>
              </div>
              <h2 className="font-extrabold text-[18px] text-black uppercase tracking-tight m-0">{step.title}</h2>
            </article>
          ))}
        </section>

        {/* Primary CTA Button */}
        <div className="w-full">
          <a 
            href={CTA_URL}
            className="w-full flex items-center justify-center gap-2 bg-brand-primary text-white py-5 rounded-2xl font-black text-[22px] shadow-[0_12px_25px_rgba(227,24,55,0.25)] transition-all hover:bg-[#CC1531] hover:-translate-y-0.5 active:scale-[0.98] outline-none uppercase tracking-wide"
            id="cta-button"
            aria-label="Start Now to get your Costco discount code"
          >
            Start Now <ArrowRight className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>

        {/* FAQ Accordion */}
        <section className="w-full bg-white rounded-[32px] shadow-sm border border-black/5 p-8 mb-10">
          <h2 className="text-[20px] font-black text-brand-primary mb-6 px-1 uppercase tracking-tight border-b border-black/5 pb-2">Common Questions</h2>
          
          <div className="divide-y divide-black/5">
            {faqs.map((faq, index) => (
              <article key={index} className="py-2">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                  aria-expanded={openFaq === index}
                >
                  <h3 className={`font-extrabold uppercase tracking-tight text-[15px] transition-all duration-300 m-0 ${openFaq === index ? 'text-brand-primary' : 'text-black opacity-80 group-hover:opacity-100'}`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "circOut" }}
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors ${openFaq === index ? 'text-brand-primary' : 'text-black opacity-30'}`} aria-hidden="true" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-[14px] leading-relaxed text-black/60 pb-6 pr-4 font-medium m-0">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            ))}
          </div>

        </section>
      </div>
    </main>
    </>
  );
}

