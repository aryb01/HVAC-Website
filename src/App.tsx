import { useState, useEffect } from 'react';
import { ChevronDown, Phone, Menu, X, Star, ArrowRight, Users, FileText, Wrench, ClipboardCheck, Handshake, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const reviews = [
  {
    name: "Vanessa Certain",
    text: "Great working with this company. Good service and good communication and the installation and end result were flawless."
  },
  {
    name: "Nitzara Vega",
    text: "Can not complain. Was excellent. Communication, timeframe, respectful and very patient when I requested changes."
  },
  {
    name: "joseph wood",
    text: "Highly suggest this company. Install was completed in 2 days. Very professional and great communication."
  },
  {
    name: "Isaac M.",
    text: "Excellent service from start to finish. The team was punctual, clean, and walked me through the entire new system."
  }
];

const services = [
  {
    title: "AC Installation",
    description: "Elevate your home's comfort with our premium AC installation service. Our skilled team ensures a durable, efficient system that keeps you cool all summer.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Heating & Furnace",
    description: "Stay warm during the coldest months. We provide expert furnace installation, repair, and maintenance tailored to your home's specific heating needs.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Routine Maintenance",
    description: "Prevent costly breakdowns with our comprehensive maintenance plans. We clean, inspect, and tune up your HVAC systems for peak performance.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Indoor Air Quality",
    description: "Breathe easier with our advanced air purification and filtration solutions. We help eliminate allergens, dust, and pollutants from your indoor air.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Ductless Systems",
    description: "Enjoy personalized comfort in every room. Ductless systems offer energy-efficient heating and cooling without the need for extensive ductwork.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Smart Thermostats",
    description: "Take control of your energy bills. We install and configure smart thermostats that learn your habits and optimize your home's temperature automatically.",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2000&auto=format&fit=crop"
  }
];

const processSteps = [
  { title: "Free Consult", icon: Users },
  { title: "Estimation & Proposal", icon: FileText },
  { title: "We do the work", icon: Wrench },
  { title: "Final Inspection", icon: ClipboardCheck },
  { title: "Payment", icon: Handshake }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=600&h=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&h=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&h=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=600&h=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=600&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&h=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&h=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=600&h=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&h=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&h=600&auto=format&fit=crop"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-white relative flex flex-col">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <nav className="flex items-center justify-between px-4 sm:px-6 py-4 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg">
              AC
            </div>
            <div className="font-black text-lg sm:text-xl leading-tight tracking-tighter">
              PRO<br/>HVAC
            </div>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 font-bold text-sm tracking-wide">
            <a href="#" className="hover:text-blue-400 transition-colors">HOME</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition-colors">
              SERVICES <ChevronDown size={16} />
            </div>
            <a href="#" className="hover:text-blue-400 transition-colors">PROJECTS</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition-colors">
              SERVICE AREAS <ChevronDown size={16} />
            </div>
            <a href="#" className="hover:text-blue-400 transition-colors">BLOG</a>
            <a href="#" className="hover:text-blue-400 transition-colors">CONTACT</a>
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Call Button */}
            <button className="lg:hidden bg-white text-slate-900 hover:bg-gray-100 p-2.5 rounded-full transition-colors shadow-sm">
              <Phone size={18} className="text-orange-600" />
            </button>
            
            {/* Mobile Quote Button */}
            <button className="lg:hidden bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-3 sm:px-4 rounded transition-colors text-xs sm:text-sm tracking-wide shadow-sm">
              GET FREE QUOTE
            </button>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded transition-colors text-sm tracking-wide">
                GET FREE QUOTE
              </button>
              <button className="bg-white text-slate-900 hover:bg-gray-100 font-bold py-3 px-6 rounded flex items-center gap-2 transition-colors text-sm tracking-wide">
                <Phone size={16} className="text-orange-600" />
                1300 123 456
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-1 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-800 border-b border-white/10 shadow-2xl">
            <div className="flex flex-col px-4 py-4 space-y-4 font-bold text-sm tracking-wide">
              <a href="#" className="block py-2 hover:text-blue-400 transition-colors">HOME</a>
              <div className="flex items-center justify-between py-2 cursor-pointer hover:text-blue-400 transition-colors">
                SERVICES <ChevronDown size={16} />
              </div>
              <a href="#" className="block py-2 hover:text-blue-400 transition-colors">PROJECTS</a>
              <div className="flex items-center justify-between py-2 cursor-pointer hover:text-blue-400 transition-colors">
                SERVICE AREAS <ChevronDown size={16} />
              </div>
              <a href="#" className="block py-2 hover:text-blue-400 transition-colors">BLOG</a>
              <a href="#" className="block py-2 hover:text-blue-400 transition-colors">CONTACT</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 flex-1 flex items-center px-4 sm:px-6 pt-32 pb-12 max-w-7xl mx-auto w-full min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Column: Typography */}
          <div className="space-y-6 max-w-2xl pt-8 lg:pt-0">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white drop-shadow-lg">
              HVAC SERVICES YOU<br />
              CAN RELY ON
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-200 max-w-lg drop-shadow-md">
              Offering top-tier heating and cooling installation and repair services for homeowners seeking reliability and quality.
            </p>
          </div>

          {/* Right Column: Lead Form */}
          <div className="bg-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl border border-slate-700/50 w-full max-w-md mx-auto lg:ml-auto">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-2xl shadow-lg mb-4">
                AC
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-center">GET A FREE QUOTE</h2>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1.5">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="John Smith" 
                  className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1.5">Phone *</label>
                <input 
                  type="tel" 
                  placeholder="Example: 0412 345 678" 
                  className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1.5">Short message about your needs *</label>
                <textarea 
                  rows={3}
                  placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**" 
                  className="w-full px-4 py-3 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 flex-shrink-0"
                />
                <label htmlFor="terms" className="text-xs font-medium text-gray-300 leading-tight">
                  I agree to <a href="#" className="text-blue-400 hover:underline">terms & conditions</a> provided by the company. By providing my phone number, I agree to receive text messages from the business.
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black text-xl py-4 rounded mt-4 transition-colors shadow-lg"
              >
                SEND
              </button>
            </form>
          </div>

        </div>
      </main>

      {/* Reviews Section */}
      <section className="relative z-10 w-full bg-slate-900 py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="flex-1">
              <div className="inline-block bg-black text-white font-black px-4 py-2 text-sm sm:text-base tracking-wide uppercase mb-4">
                Discover what our customers have to say about us
              </div>
              <div className="flex items-center gap-6">
                <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase">Reviews</h2>
                <div className="hidden md:block h-[2px] bg-orange-600/50 flex-1 ml-4"></div>
              </div>
            </div>
            <button className="bg-white text-black font-black py-4 px-8 flex items-center gap-2 hover:bg-gray-100 transition-colors uppercase tracking-wide text-sm sm:text-base whitespace-nowrap">
              Contact Us Now <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Infinite Carousel */}
        <div className="relative mt-12 overflow-hidden flex">
          {/* Gradient Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none items-stretch">
            {/* Render 4 sets to ensure enough width for infinite loop on large screens */}
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 px-3 items-stretch">
                {reviews.map((review, i) => (
                  <div key={`${setIndex}-${i}`} className="bg-white rounded-2xl p-8 w-[85vw] sm:w-[350px] flex-shrink-0 flex flex-col justify-between shadow-xl h-full">
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <span className="text-orange-400 font-black text-2xl">5</span>
                        <div className="flex text-orange-400">
                          <Star fill="currentColor" size={20} className="text-orange-400" />
                          <Star fill="currentColor" size={20} className="text-orange-400" />
                          <Star fill="currentColor" size={20} className="text-orange-400" />
                          <Star fill="currentColor" size={20} className="text-orange-400" />
                          <Star fill="currentColor" size={20} className="text-orange-400" />
                        </div>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed mb-8">
                        {review.text}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-slate-500 font-medium">{review.name}</span>
                      <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 w-full bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase">Our Services</h2>
            <div className="h-[2px] bg-[#a67c52] flex-1 ml-4"></div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-slate-800">
          {services.map((service, i) => (
            <div key={i} className="relative group h-[400px] sm:h-[500px] border-r border-b border-slate-800 overflow-hidden cursor-pointer">
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col items-start">
                <div className="bg-black text-white font-black px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 uppercase tracking-wide relative z-10 text-sm sm:text-base shadow-lg">
                  {service.title} 
                  <div className="bg-[#a67c52] rounded-full p-0.5">
                    <ArrowRight size={18} className="text-black" />
                  </div>
                </div>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out w-full max-w-sm relative -mt-1">
                  <div className="overflow-hidden">
                    <div className="bg-white text-slate-800 p-5 text-sm sm:text-base font-medium leading-relaxed shadow-xl pt-6">
                      {service.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 w-full bg-[#1b2a24] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <div className="flex items-center gap-6 mb-4">
              <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase">Our Process</h2>
              <div className="h-[2px] bg-[#a67c52] flex-1 ml-4"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 font-medium">Our process is simple and only contains a few simple steps</p>
          </div>

          <div className="hidden lg:flex w-full pt-4">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center relative flex-1">
                {/* Circle */}
                <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl z-20">
                  <step.icon className="text-black w-14 h-14" strokeWidth={1.5} />
                  {/* Pointer */}
                  <div className="absolute -bottom-3 w-8 h-8 bg-white rotate-45 rounded-sm"></div>
                </div>
                
                {/* Vertical Line */}
                <div className="w-1 h-16 bg-white my-4 z-10 relative"></div>

                {/* Chevron */}
                <div 
                  className={`h-24 bg-black flex items-center justify-center px-12 z-30 ${
                    i === 0 
                      ? 'w-full clip-chevron-first' 
                      : i === processSteps.length - 1 
                        ? 'w-[calc(100%+2rem)] -ml-8 clip-chevron-last' 
                        : 'w-[calc(100%+2rem)] -ml-8 clip-chevron'
                  }`}
                >
                  <span className="text-white font-bold text-lg text-center leading-tight">{step.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout (Vertical) */}
          <div className="flex lg:hidden flex-col pt-4 relative">
            {/* Connecting Line */}
            <div className="absolute left-10 top-10 bottom-10 w-1 bg-white z-0"></div>
            
            {processSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-6 relative z-10 mb-12 last:mb-0">
                {/* Circle */}
                <div className="relative w-20 h-20 shrink-0 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <step.icon className="text-black w-8 h-8" strokeWidth={1.5} />
                </div>
                
                {/* Text Box */}
                <div className="bg-black flex-1 py-5 px-6 rounded-r-xl rounded-l-sm relative shadow-lg">
                  {/* Left pointer triangle */}
                  <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-black rotate-45"></div>
                  <span className="text-white font-bold text-lg leading-tight">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Gallery Section */}
      <section className="relative z-10 w-full bg-[#16221d] py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="flex-1">
              <div className="inline-block bg-black text-white font-black px-4 py-2 text-sm sm:text-base tracking-wide uppercase mb-4 rounded-sm">
                See why our customers love us
              </div>
              <div className="flex items-center gap-6">
                <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-white uppercase">See Our Work</h2>
                <div className="hidden md:block h-[2px] bg-[#a67c52] flex-1 ml-4"></div>
              </div>
            </div>
            <button className="bg-white text-black font-black py-4 px-8 flex items-center gap-2 hover:bg-gray-100 transition-colors uppercase tracking-wide text-sm sm:text-base whitespace-nowrap rounded-sm shadow-lg">
              See All Photos <ArrowRight size={20} />
            </button>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="break-inside-avoid overflow-hidden rounded-xl group relative cursor-pointer shadow-lg">
                <img 
                  src={img} 
                  alt={`HVAC Work ${i+1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-32 sm:py-40">
        {/* Wavy Top Divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[40px] sm:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#16221d]"></path>
          </svg>
        </div>

        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1.1] mb-10 drop-shadow-2xl">
            Ready to take the next step?<br/>Get a free quote today!
          </h2>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-black py-4 px-10 text-lg sm:text-xl transition-colors uppercase tracking-wide rounded shadow-2xl">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg text-white">
                  AC
                </div>
                <div className="font-black text-xl leading-tight tracking-tighter text-white">
                  PRO<br/>HVAC
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                Top-tier heating and cooling installation and repair services for homeowners seeking reliability and quality.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer text-white">
                  <Facebook size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer text-white">
                  <Twitter size={18} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer text-white">
                  <Instagram size={18} />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Process</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-blue-400 transition-colors">AC Installation</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Heating & Furnace</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Routine Maintenance</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Indoor Air Quality</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Ductless Systems</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold uppercase tracking-wide mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-[#a67c52] shrink-0 mt-0.5" />
                  <span>1300 123 456</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-[#a67c52] shrink-0 mt-0.5" />
                  <span>info@prohvac.com.au</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#a67c52] shrink-0 mt-0.5" />
                  <span>123 Climate Way<br/>Sydney NSW 2000</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
            <p>&copy; {new Date().getFullYear()} PRO HVAC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Quote Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded transition-colors text-sm tracking-wide shadow-2xl">
          GET FREE QUOTE
        </button>
      </div>
    </div>
  );
}
