import React, { useState } from 'react';
import { Menu, X, ChevronDown, ExternalLink, Code, TrendingUp, Users, Zap, Globe, Target, BarChart3 } from 'lucide-react';

export default function ClymeAI() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const clients = [
    { name: "China Visa Department", url: "https://www.chinavisadepartment.com/" },
    { name: "WeMarket Trades", url: "https://wemarkettrades.com/" },
    { name: "Go Beyond Travel", url: "https://www.gobeyondtravelagency.com/" },
    { name: "Notary Service Dept", url: "https://www.notaryservicedepartment.com/" },
    { name: "The Passport Office", url: "https://www.thepassportoffice.com/" },
    { name: "Supercharged By Grace", url: "https://www.superchargedbygrace.com/login" }
  ];

  const faqs = [
    {
      question: "What is Clyme AI?",
      answer: "Clyme AI is an AI-powered platform that builds high-performance websites, optimizes SEO, and generates qualified leads for businesses of all sizes."
    },
    {
      question: "How does it work?",
      answer: "Our AI agents analyze your business, build custom strategies, and execute across website development, search optimization, and lead generation - all working together as a unified system."
    },
    {
      question: "Do I need to replace my current team?",
      answer: "No. Clyme AI enhances your existing team by automating repetitive tasks and providing AI-powered insights, allowing your team to focus on strategy and growth."
    },
    {
      question: "Is this secure?",
      answer: "Yes. We use enterprise-grade security with SOC 2 compliance, AES-256 encryption, and you retain full ownership of all your data."
    },
    {
      question: "What does the onboarding look like?",
      answer: "We start with a discovery call to understand your goals, then deploy our AI agents customized to your business within 2-4 weeks."
    },
    {
      question: "What's the ROI?",
      answer: "Most clients see 300% traffic growth, 2-5x conversion improvements, and consistent lead generation within 90 days."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="cursor-pointer flex items-center space-x-3" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold">Clyme</h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:opacity-70 transition-opacity">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:opacity-70 transition-opacity">Portfolio</button>
              <button onClick={() => scrollToSection('team')} className="text-sm font-medium hover:opacity-70 transition-opacity">Team</button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:scale-105 transition-transform">Schedule Demo</button>
            </div>

            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-sm font-medium py-2">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left text-sm font-medium py-2">Portfolio</button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left text-sm font-medium py-2">Team</button>
              <button onClick={() => scrollToSection('contact')} className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-lg">Schedule Demo</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Purple to Blue Gradient */}
      <section id="hero" className="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-600 to-blue-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/50 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            Build. Rank. Convert.<br />
            <span className="text-5xl sm:text-6xl lg:text-7xl">On Autopilot.</span>
          </h1>
          
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow">
            AI-powered websites, SEO optimization, and lead generation that grows your business while you sleep.
          </p>
          
          <button onClick={() => scrollToSection('contact')} className="px-10 py-5 bg-white text-purple-900 font-bold rounded-xl text-lg hover:scale-105 transition-transform inline-flex items-center space-x-2 shadow-2xl">
            <span>Book a Demo</span>
            <span>→</span>
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-2xl font-bold mb-12">Build Websites. Rank Higher. Generate More Leads.</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['SEO Rankings', 'Website Speed', 'Lead Generation', 'Conversion Rate'].map((label, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-purple-500/30 hover:-translate-y-1 transition-all">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">10x</div>
                <div className="text-gray-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="services" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Meet Your AI Agents</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl">
            Specialized AI agents that build websites, optimize SEO, and generate leads—working together to grow your business on autopilot
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Code className="w-6 h-6" />, title: "Website Builder Agent", desc: "Translates your vision into high-performance websites with modern design, responsive layouts, and optimized code.", color: "purple" },
              { icon: <Target className="w-6 h-6" />, title: "SEO Optimizer Agent", desc: "Analyzes keywords, optimizes content, and implements technical SEO to rank your site on page one.", color: "blue" },
              { icon: <Users className="w-6 h-6" />, title: "Lead Generation Agent", desc: "Creates smart forms, landing pages, and automation flows that convert visitors into qualified leads.", color: "indigo" },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Analytics Agent", desc: "Tracks performance, identifies opportunities, and provides actionable insights for continuous improvement.", color: "violet" },
              { icon: <Globe className="w-6 h-6" />, title: "Content Strategy Agent", desc: "Develops content calendars, writes optimized copy, and maintains brand consistency across all channels.", color: "fuchsia" },
              { icon: <Zap className="w-6 h-6" />, title: "Custom Workflow Agents", desc: "Tailored agents built specifically for your unique business processes and requirements.", color: "purple" }
            ].map((agent, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 text-purple-400`}>
                  {agent.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{agent.title}</h3>
                <p className="text-gray-400">{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Platform Section */}
      <section className="py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">Built on</h3>
          <h2 className="text-5xl font-bold mb-6">One AI-Powered Platform</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A unified platform that handles your entire digital presence. Website development, SEO optimization, and lead generation work together seamlessly—all powered by AI.
          </p>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <p className="text-gray-400 text-lg mb-6">Your business deserves better digital presence.</p>
            <h2 className="text-5xl font-bold leading-tight">
              Most businesses struggle with outdated websites, poor SEO rankings, and manual lead generation—while competitors with AI-powered systems dominate their markets.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "Slow, Outdated Websites", desc: "Your website looks dated, loads slowly, and doesn't convert visitors. Meanwhile, competitors with modern sites are stealing your customers." },
              { num: "02", title: "Poor SEO Rankings", desc: "You're buried on page 5 of Google while competitors rank #1. Every day without visibility is lost revenue and missed opportunities." },
              { num: "03", title: "Manual Lead Generation", desc: "Chasing leads manually, using spreadsheets, and watching potential customers slip away because you don't have automated systems in place." },
              { num: "04", title: "No Integration", desc: "Website, SEO tools, CRM, and marketing platforms all disconnected—creating data silos and wasting hours on manual work." }
            ].map((problem, i) => (
              <div key={i} className="bg-white/5 border-l-4 border-purple-500 p-8 rounded-xl hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-purple-400 mb-4">{problem.num}</div>
                <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                <p className="text-gray-400 leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">AI-Powered Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Lightning-Fast Websites", desc: "AI builds modern, responsive websites optimized for speed, conversions, and user experience. Launch in days, not months." },
              { title: "Dominate Search Rankings", desc: "Our AI analyzes your competition, finds keyword opportunities, and optimizes your entire site to rank on page 1 of Google." },
              { title: "Automated Lead Generation", desc: "Smart forms, landing pages, and nurture sequences run on autopilot—turning visitors into qualified leads 24/7." },
              { title: "Everything Connected", desc: "One platform that unifies your website, SEO data, and lead pipeline—giving you complete visibility and control." }
            ].map((solution, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all">
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-400 leading-relaxed">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center">Flexible Pricing for Any Stage</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, title: "Per Project", desc: "Scale with your growth", popular: false },
              { icon: <Users className="w-8 h-8" />, title: "Monthly Retainer", desc: "Ongoing optimization", popular: true },
              { icon: <Code className="w-8 h-8" />, title: "Per Agent", desc: "Modular rollout", popular: false }
            ].map((plan, i) => (
              <div key={i} className={`bg-white/5 ${plan.popular ? 'border-2 border-purple-500' : 'border border-white/10'} rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all relative`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center mb-6 text-purple-400">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-gray-400 mb-6">{plan.desc}</p>
                <button onClick={() => scrollToSection('contact')} className={`w-full px-6 py-3 ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'border border-white/20'} rounded-lg hover:bg-white/5 transition-all font-medium`}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Our Work</h2>
          <p className="text-xl text-gray-400 mb-12">Trusted by businesses across multiple industries</p>
          <div className="space-y-0">
            {clients.map((client, i) => (
              <a key={i} href={client.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-6 px-4 border-b border-white/10 hover:bg-white/5 transition-all group">
                <span className="text-lg font-medium group-hover:text-purple-400 transition-colors">{client.name}</span>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Your Growth Partners</h2>
          <p className="text-gray-400 text-lg">Our team has built websites and driven growth for hundreds of businesses across every industry</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 mb-12">Everything you need to know about Clyme. Can't find what you're looking for? Schedule a demo with our team.</p>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10 hover:bg-white/5 transition-all">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-6 px-4 flex justify-between items-center">
                  <span className="text-lg font-semibold pr-8">{faq.question}</span>
                  <ChevronDown className={`w-6 h-6 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-6 text-gray-400 leading-relaxed">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-4xl sm:text-5xl font-bold leading-tight">
            "In business, your digital<br />presence is your first<br />impression—make it count."
          </blockquote>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-400 mb-12">Let's build your website, optimize your SEO, and automate your lead generation with AI</p>
          <button className="px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl text-xl hover:scale-105 transition-transform shadow-2xl">
            Book Your Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold">Clyme</h3>
              </div>
              <p className="text-sm text-gray-400">AI-powered websites, SEO & lead generation</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase">Product</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-sm text-gray-400 hover:text-white">Services</button>
                <button onClick={() => scrollToSection('pricing')} className="block text-sm text-gray-400 hover:text-white">Pricing</button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase">Company</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('team')} className="block text-sm text-gray-400 hover:text-white">Team</button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-sm text-gray-400 hover:text-white">Portfolio</button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Privacy</a>
                <a href="#" className="block text-sm text-gray-400 hover:text-white">Terms</a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            © 2025 Clyme. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}