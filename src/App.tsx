/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Package, 
  Users, 
  Sparkles, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  CheckCircle2,
  Utensils,
  Bath,
  Bed,
  Home,
  ArrowRight,
  Truck,
  Languages
} from 'lucide-react';

// --- Components ---

const Sparkle = ({ className = "" }: { className?: string }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [0, 1.2, 1], 
      opacity: [0, 1, 0.6],
      rotate: [0, 45, 90]
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    className={`text-brand-green ${className}`}
  >
    <Sparkles size={24} fill="currentColor" />
  </motion.div>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-2 mb-4"
    >
      <div className="h-px w-8 bg-brand-green" />
      <span className={`text-sm font-bold uppercase tracking-widest ${light ? 'text-brand-green' : 'text-brand-blue'}`}>
        {subtitle || "Professional Care"}
      </span>
      <div className="h-px w-8 bg-brand-green" />
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold ${light ? 'text-white' : 'text-brand-navy'}`}
    >
      {title}
    </motion.h2>
  </div>
);

const ContactButtons = ({ vertical = false }: { vertical?: boolean }) => (
  <div className={`flex ${vertical ? 'flex-col' : 'flex-wrap'} gap-3`}>
    <div className="flex gap-2">
      <a 
        href="tel:7703770635"
        className="bg-brand-blue text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all shadow-md hover:shadow-lg active:scale-95 text-sm md:text-base"
      >
        <Phone size={18} />
        Call Us
      </a>
      <a 
        href="sms:7703770635"
        className="bg-brand-blue text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all shadow-md hover:shadow-lg active:scale-95 text-sm md:text-base"
      >
        <MessageSquare size={18} />
        Text Us
      </a>
    </div>
    <a 
      href="mailto:24cleaningcolutions@gmail.com"
      className="bg-brand-blue text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all shadow-md hover:shadow-lg active:scale-95 text-sm md:text-base w-fit"
    >
      <Mail size={18} />
      Email Us
    </a>
  </div>
);

// --- Main App ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessInfo = {
    name: "Cleaning Service Solutions LLC",
    phone: "(770) 377-0635",
    email: "24cleaningcolutions@gmail.com",
    location: "Gainesville, GA",
    hours: "Mon – Fri, 8:00 AM – 5:00 PM",
    serviceAreas: ["Atlanta", "Braselton", "Buford", "Gainesville", "Oakwood", "Jefferson"]
  };

  const services = [
    {
      title: "Kitchen",
      icon: <Utensils className="text-brand-blue" size={32} />,
      desc: "A deep, hygienic clean for the heart of your home. We sanitize countertops, scrub sinks, and clean all appliance exteriors until they sparkle."
    },
    {
      title: "Bathrooms",
      icon: <Bath className="text-brand-blue" size={32} />,
      desc: "Complete disinfection of showers, tubs, toilets, and vanities. We remove soap scum and leave your mirrors and fixtures streak-free."
    },
    {
      title: "Bedrooms",
      icon: <Bed className="text-brand-blue" size={32} />,
      desc: "Creating a serene sanctuary for rest. We dust all surfaces, vacuum carpets, and ensure every corner is free of allergens and dust."
    },
    {
      title: "Living Room",
      icon: <Home className="text-brand-blue" size={32} />,
      desc: "The perfect space for family time. We meticulously dust furniture, clean baseboards, and refresh floors for a welcoming atmosphere."
    },
    {
      title: "Full Home Cleaning",
      icon: <Sparkles className="text-brand-blue" size={32} />,
      desc: "Our comprehensive one-time deep clean. We bring all supplies to transform your entire residence into a spotless, healthy environment."
    },
    {
      title: "Moving-Related Cleaning",
      icon: <Truck className="text-brand-blue" size={32} />,
      desc: "Perfect for move-ins or move-outs. We provide a deep, comprehensive clean to ensure your new home is ready for you, or your old home is spotless for the next residents."
    }
  ];

  const trustPoints = [
    { title: "Insured & Bonded", icon: <ShieldCheck size={40} />, desc: "Your peace of mind is our priority." },
    { title: "All Supplies Provided", icon: <Package size={40} />, desc: "We bring professional-grade equipment." },
    { title: "Family Owned", icon: <Users size={40} />, desc: "Personal care from Maria and her family." },
    { title: "Serving North GA", icon: <MapPin size={40} />, desc: "Proudly based in Gainesville, GA." },
    { title: "Bilingual Service", icon: <Languages size={40} />, desc: "We speak English & Spanish — porque tu hogar merece lo mejor." }
  ];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const message = `New Quote Request:\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nAddress: ${data.address}\nService: ${data.service}`;
    window.location.href = `sms:7703770635?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-green selection:text-brand-navy">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-blue p-2 rounded-lg">
              <Sparkles className="text-brand-green" size={24} />
            </div>
            <span className="text-xl md:text-2xl font-display font-bold text-brand-blue leading-tight">
              Cleaning Service<br/><span className="text-brand-navy opacity-80 text-sm md:text-base font-medium tracking-wide">Solutions LLC</span>
            </span>
          </div>

            <div className="hidden lg:flex items-center gap-8">
              {['Services', 'Gallery', 'Why Us', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-brand-navy font-medium hover:text-brand-blue transition-colors min-h-[44px] flex items-center"
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-2">
                <a 
                  href="tel:7703770635"
                  className="bg-brand-blue text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all shadow-lg shadow-brand-blue/20 min-h-[44px]"
                >
                  <Phone size={16} />
                  Call Us
                </a>
                <a 
                  href="sms:7703770635"
                  className="bg-brand-blue text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all shadow-lg shadow-brand-blue/20 min-h-[44px]"
                >
                  <MessageSquare size={16} />
                  Text Us
                </a>
              </div>
            </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-brand-blue p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {['Services', 'Gallery', 'Why Us', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-display font-semibold text-brand-navy min-h-[44px] flex items-center"
                  >
                    {item}
                  </a>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex gap-2">
                    <a 
                      href="tel:7703770635"
                      className="flex-1 bg-brand-blue text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <Phone size={20} />
                      Call Us
                    </a>
                    <a 
                      href="sms:7703770635"
                      className="flex-1 bg-brand-blue text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <MessageSquare size={20} />
                      Text Us
                    </a>
                  </div>
                  <a 
                    href="mailto:24cleaningcolutions@gmail.com"
                    className="bg-brand-blue text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <Mail size={20} />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-mint/30">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <Sparkle className="absolute top-20 left-[10%]" />
          <Sparkle className="absolute top-40 right-[15%]" />
          <Sparkle className="absolute bottom-20 left-[20%]" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-brand-green/30">
              <CheckCircle2 className="text-brand-green" size={20} />
              <span className="text-sm font-bold text-brand-navy tracking-wide uppercase">Insured • Family Owned • Se Habla Español 🇲🇽</span>
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-brand-navy leading-[1.1] mb-6">
              Your Home Deserves a <span className="text-brand-blue">Spotless Clean.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-navy/80 mb-10 leading-relaxed max-w-xl">
              Professional residential cleaning across North Georgia. We bring everything needed to make your home shine—from Gainesville to Atlanta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:7703770635"
                className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all shadow-xl shadow-brand-blue/20"
              >
                <Phone size={22} />
                Call Us
              </a>
              <a 
                href="#contact"
                className="bg-white text-brand-blue border-2 border-brand-blue px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-brand-mint/20 transition-all"
              >
                Get a Free Quote
                <ArrowRight size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=1000" 
                alt="Clean modern home interior" 
                className="w-full h-[400px] md:h-[500px] object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-green text-brand-navy p-6 rounded-2xl shadow-xl border-4 border-white max-w-[200px]">
              <Star className="mb-2" fill="currentColor" />
              <p className="font-bold text-lg leading-tight">5+ Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Our Cleaning Services" 
            subtitle="What We Clean" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-8 rounded-3xl border-l-4 border-transparent border-y border-r border-gray-100 shadow-sm hover:shadow-xl hover:border-l-brand-blue hover:bg-brand-mint/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="text-brand-green/30" size={40} />
                </div>
                <div className="bg-brand-mint/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-mint/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-brand-navy">{service.title}</h3>
                <p className="text-brand-navy/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-brand-navy/60 font-medium italic">
              * We specialize in one-time deep cleans and bring all necessary supplies and equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Our Work in Action" 
            subtitle="Gallery" 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", title: "Sparkling Bathroom" },
              { url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800", title: "Pristine Kitchen" },
              { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800", title: "Clean Living Space" },
              { url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", title: "Tidy Bedroom" },
              { url: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800", title: "Detailed Cleaning" },
              { url: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800", title: "Spotless Floors" },
              { url: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=800", title: "Polished Surfaces" },
              { url: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800", title: "Fresh Linens" },
              { url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800", title: "Window Cleaning" },
              { url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800", title: "Modern Bathroom" },
              { url: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=800", title: "Kitchen Detail" },
              { url: "https://images.unsplash.com/photo-1603614486387-276f74fcbe2a?auto=format&fit=crop&q=80&w=800", title: "Organized Pantry" }
            ].map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 4) * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md bg-gray-100"
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="whyus" className="py-24 bg-brand-mint/20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            title="Why Homeowners Trust Us" 
            subtitle="The CSS Difference" 
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {trustPoints.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white text-brand-blue shadow-lg mb-6 border-2 border-brand-green/20">
                  {point.icon}
                </div>
                <h4 className="text-xl font-display font-bold mb-2 text-brand-navy">{point.title}</h4>
                <p className="text-brand-navy/70">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Maria, Owner of Cleaning Service Solutions" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block">Meet the Owner</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-8">Family-Owned & <span className="text-brand-blue">Locally Rooted</span></h2>
              <div className="space-y-6 text-lg text-brand-navy/80 leading-relaxed">
                <p>
                  Hi, I'm Maria! With over 5 years of professional cleaning experience right here in the Gainesville area, I founded Cleaning Service Solutions LLC to bring a higher standard of care to our community.
                </p>
                <p>
                  As a family-owned and operated business, we treat every home as if it were our own. My passion for a spotless home is what drives us to be meticulous in every corner we clean.
                </p>
                <p>
                  As a bilingual team, we proudly serve both English and Spanish-speaking households across North Georgia, ensuring clear communication and exceptional service for all our clients.
                </p>
                <p>
                  We know that inviting someone into your home requires trust. That's why we're fully insured, bonded, and committed to providing a reliable, friendly service that makes your life easier and your home healthier.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center text-brand-blue">
                  <Heart fill="currentColor" size={24} />
                </div>
                <span className="font-display font-bold text-xl text-brand-navy italic">"Your home, our passion." — Maria</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-brand-blue text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <SectionHeading 
            title="Where We Sparkle" 
            subtitle="Service Areas" 
            light 
          />
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {businessInfo.serviceAreas.map((area, idx) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl font-display font-bold text-xl md:text-2xl hover:bg-brand-green hover:text-brand-navy transition-all cursor-default"
              >
                {area}
              </motion.div>
            ))}
          </div>
          
          <p className="text-xl md:text-2xl font-medium text-brand-mint">
            Based in <span className="underline decoration-brand-green underline-offset-8">Gainesville, GA</span> — proudly serving the surrounding North Georgia area.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-brand-navy mb-8">Get Your <span className="text-brand-blue">Free Quote</span></h2>
              <p className="text-lg text-brand-navy/70 mb-10">
                Ready for a spotless home? Fill out the form below or reach out directly. We'll get back to you quickly with a personalized estimate.
              </p>
              
              <div className="space-y-8">
                <p className="text-brand-blue font-bold italic flex items-center gap-2">
                  <Languages size={20} />
                  Hablamos Español — feel free to call or text us in Spanish.
                </p>
                <div className="flex items-start gap-6">
                  <div className="bg-brand-mint/30 p-4 rounded-2xl text-brand-blue">
                    <Phone size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-xl text-brand-navy mb-3">Call or Text</h4>
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="tel:7703770635"
                        className="bg-brand-blue text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all shadow-md"
                      >
                        <Phone size={20} />
                        Call Us
                      </a>
                      <a 
                        href="sms:7703770635"
                        className="bg-brand-blue text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all shadow-md"
                      >
                        <MessageSquare size={20} />
                        Text Us
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-brand-mint/30 p-4 rounded-2xl text-brand-blue">
                    <Mail size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-xl text-brand-navy mb-3">Email Us</h4>
                    <a 
                      href="mailto:24cleaningcolutions@gmail.com"
                      className="inline-flex bg-brand-blue text-white px-6 py-3 rounded-full font-bold items-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all shadow-md"
                    >
                      <Mail size={20} />
                      Email Us
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-brand-mint/30 p-4 rounded-2xl text-brand-blue">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-brand-navy mb-1">Business Hours</h4>
                    <p className="text-lg text-brand-navy/70">{businessInfo.hours}</p>
                    <p className="text-brand-navy/50 font-medium">Closed Saturday & Sunday</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-brand-mint/10 p-8 md:p-12 rounded-[40px] border border-brand-mint/30 shadow-xl"
            >
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wide">Full Name</label>
                    <input 
                      required 
                      name="name"
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wide">Phone Number</label>
                    <input 
                      required 
                      name="phone"
                      type="tel" 
                      placeholder="(770) 000-0000"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all bg-white"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-navy uppercase tracking-wide">Email Address</label>
                  <input 
                    required 
                    name="email"
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all bg-white"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wide">Street Address</label>
                    <input 
                      required 
                      name="address"
                      type="text" 
                      placeholder="123 Main St, Gainesville"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wide">Service Requested</label>
                    <select 
                      required
                      name="service"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all bg-white appearance-none min-h-[56px]"
                    >
                      <option value="">Select a service...</option>
                      <option>Full Home Cleaning</option>
                      <option>Moving-Related Cleaning</option>
                      <option>Kitchen Only</option>
                      <option>Bathrooms Only</option>
                      <option>Bedrooms Only</option>
                      <option>Living Room Only</option>
                    </select>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-brand-navy transition-all shadow-xl shadow-brand-blue/20 group"
                >
                  <MessageSquare size={24} />
                  Send Quote Request via SMS
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-sm text-brand-navy/50 font-medium">
                  Submitting will open your messaging app to send us these details.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-brand-blue p-2 rounded-lg">
                  <Sparkles className="text-brand-green" size={24} />
                </div>
                <span className="text-2xl font-display font-bold text-white">
                  Cleaning Service Solutions LLC
                </span>
              </div>
              <p className="text-white/60 text-lg max-w-md mb-4">
                Professional residential cleaning services across North Georgia. Family-owned, locally operated, and dedicated to your home's sparkle.
              </p>
              <p className="text-brand-green font-bold mb-8 flex items-center gap-2">
                <Languages size={18} />
                Se Habla Español
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-xl mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li><a href="#services" className="hover:text-brand-green transition-colors min-h-[44px] flex items-center">Services</a></li>
                <li><a href="#gallery" className="hover:text-brand-green transition-colors min-h-[44px] flex items-center">Gallery</a></li>
                <li><a href="#whyus" className="hover:text-brand-green transition-colors min-h-[44px] flex items-center">Why Choose Us</a></li>
                <li><a href="#about" className="hover:text-brand-green transition-colors min-h-[44px] flex items-center">About Maria</a></li>
                <li><a href="#contact" className="hover:text-brand-green transition-colors min-h-[44px] flex items-center">Get a Quote</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-xl mb-6">Contact Us</h4>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <a 
                    href="tel:7703770635"
                    className="flex-1 bg-brand-blue text-white px-4 py-2.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all text-sm shadow-md min-h-[44px]"
                  >
                    <Phone size={16} />
                    Call Us
                  </a>
                  <a 
                    href="sms:7703770635"
                    className="flex-1 bg-brand-blue text-white px-4 py-2.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all text-sm shadow-md min-h-[44px]"
                  >
                    <MessageSquare size={16} />
                    Text Us
                  </a>
                </div>
                <a 
                  href="mailto:24cleaningcolutions@gmail.com"
                  className="bg-brand-blue text-white px-4 py-2.5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-green hover:text-brand-navy transition-all text-sm shadow-md min-h-[44px]"
                >
                  <Mail size={16} />
                  Email Us
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-xl mb-6">Service Areas</h4>
              <ul className="space-y-4 text-white/70 text-sm">
                <li>Gainesville & Oakwood</li>
                <li>Braselton & Buford</li>
                <li>Atlanta & Jefferson</li>
                <li className="text-brand-green font-bold">North Georgia Region</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-medium">
            <p>© 2025 Cleaning Service Solutions LLC. All rights reserved.</p>
            <div className="flex gap-8">
              <span>Insured & Bonded</span>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Helper for the heart icon used in About Us
function Heart({ size = 24, fill = "none", className = "" }: { size?: number, fill?: string, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill} 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
