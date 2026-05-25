import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiLayers, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFocused, setIsFocused] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send message via WhatsApp
    const phoneNumber = '918000114849';
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24 bg-[#050816] relative overflow-hidden" id="contact">
      {/* Premium Ambient Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 select-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[450px] md:w-[600px] h-[450px] md:h-[600px] bg-[#915eff]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[450px] md:w-[600px] h-[450px] md:h-[600px] bg-[#00f6ff]/15 rounded-full blur-[140px]" />
      </div>
      
      {/* Cyber Grid Detail */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

      <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 xl:px-24 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16 sm:mb-20" data-aos="fade-down">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-4 rounded-full bg-[#00f6ff]/10 border border-[#00f6ff]/30 text-[#00f6ff] font-bold text-xs tracking-widest uppercase shadow-[0_0_10px_rgba(0,246,255,0.15)]">
            <FiMessageSquare size={12} className="animate-pulse" /> Collaborate
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Let's Create <br className="sm:hidden" /> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00f6ff] drop-shadow-[0_2px_15px_rgba(0,246,255,0.2)]">Extraordinary</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#aaa6c3] text-sm sm:text-base leading-relaxed">
            Have an idea? Let's turn it into reality. I'm always open to discussing new projects, creative web solutions, or opportunities to be part of your visions.
          </p>
        </div>

        {/* 2-Column Floating Glass Form Container */}
        <div 
          className="max-w-5xl mx-auto bg-[#090b14]/70 backdrop-blur-xl border border-white/5 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden" 
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">

            {/* LEFT COLUMN: Premium Interactive Form */}
            <div className="md:col-span-7 p-8 sm:p-12 order-2 md:order-1 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-2">
                Send a Message <span className="w-1.5 h-1.5 rounded-full bg-[#915eff] animate-pulse" />
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="flex flex-col gap-2 relative">
                  <span className={`text-[10px] uppercase font-bold tracking-wider transition-colors duration-300 ${
                    isFocused === 'name' ? 'text-[#915eff]' : 'text-white/40'
                  }`}>
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('name')}
                    onBlur={() => setIsFocused('')}
                    className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:bg-white/[0.04] outline-none transition-all duration-300 ${
                      isFocused === 'name' 
                        ? 'border-[#915eff] shadow-[0_0_15px_rgba(145,94,255,0.15)]' 
                        : 'border-white/10'
                    }`}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2 relative">
                  <span className={`text-[10px] uppercase font-bold tracking-wider transition-colors duration-300 ${
                    isFocused === 'email' ? 'text-[#915eff]' : 'text-white/40'
                  }`}>
                    Your Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('email')}
                    onBlur={() => setIsFocused('')}
                    className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:bg-white/[0.04] outline-none transition-all duration-300 ${
                      isFocused === 'email' 
                        ? 'border-[#915eff] shadow-[0_0_15px_rgba(145,94,255,0.15)]' 
                        : 'border-white/10'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2 relative">
                  <span className={`text-[10px] uppercase font-bold tracking-wider transition-colors duration-300 ${
                    isFocused === 'message' ? 'text-[#915eff]' : 'text-white/40'
                  }`}>
                    Project details
                  </span>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setIsFocused('message')}
                    onBlur={() => setIsFocused('')}
                    className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:bg-white/[0.04] outline-none transition-all duration-300 resize-none ${
                      isFocused === 'message' 
                        ? 'border-[#915eff] shadow-[0_0_15px_rgba(145,94,255,0.15)]' 
                        : 'border-white/10'
                    }`}
                    placeholder="Tell me about your project, timeline, or open roles..."
                  />
                </div>

                {/* Premium Action Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="group relative w-full sm:w-auto px-8 py-4 bg-transparent rounded-full font-bold text-xs tracking-widest uppercase overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 border border-white/10 hover:border-[#00f6ff]/40 cursor-pointer"
                  >
                    {/* Glowing background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#915eff] via-[#00f6ff] to-[#915eff] bg-[length:200%_auto] animate-gradient-shift opacity-85 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                    {/* Hover shine swipe */}
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0"></span>
                    
                    <span className="relative z-10 flex items-center gap-2 text-white">
                      Send Message <FiSend size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN: Interactive Info Sidebar */}
            <div className="md:col-span-5 bg-[#09071c]/80 p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2 border-t md:border-t-0 md:border-l border-white/5">
              {/* Internal Holographic glow */}
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#00f6ff] rounded-full opacity-[0.06] blur-3xl pointer-events-none" />

              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2">
                  Contact Info <FiLayers className="text-[#00f6ff]" size={16} />
                </h3>
                <p className="text-white/40 text-xs tracking-widest uppercase mb-12">connect instantly</p>

                {/* Structured Info Blocks */}
                <div className="space-y-6">
                  
                  {/* Email block */}
                  <a href="mailto:csunidhi22@gmail.com" className="flex items-center gap-4 group p-3.5 rounded-xl border border-transparent bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#915eff] group-hover:bg-[#915eff]/10 border border-white/10 group-hover:border-[#915eff]/30 group-hover:shadow-[0_0_15px_rgba(145,94,255,0.25)] transition-all duration-300">
                      <FiMail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold font-mono">Email</p>
                      <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200 mt-0.5">csunidhi22@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone block */}
                  <a href="tel:+918000114849" className="flex items-center gap-4 group p-3.5 rounded-xl border border-transparent bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/5 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#00f6ff] group-hover:bg-[#00f6ff]/10 border border-white/10 group-hover:border-[#00f6ff]/30 group-hover:shadow-[0_0_15px_rgba(0,246,255,0.25)] transition-all duration-300">
                      <FiPhone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold font-mono">Phone</p>
                      <p className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200 mt-0.5">+91 8000114849</p>
                    </div>
                  </a>

                  {/* Location block */}
                  <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.01] border border-transparent hover:bg-white/[0.03] transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ff00ea] border border-white/10 group-hover:border-[#ff00ea]/30 group-hover:bg-[#ff00ea]/10 group-hover:shadow-[0_0_15px_rgba(255,0,234,0.25)] transition-all duration-300">
                      <FiMapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold font-mono">Location</p>
                      <p className="text-sm font-semibold text-white/80 mt-0.5">Vadodara, Gujarat, India</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Social Icons Row */}
              <div className="flex gap-4 mt-12 md:mt-0 relative z-10 pl-3">
                <a 
                  href="https://github.com/Sunidhichaudhary21" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white/80 hover:text-white hover:bg-[#915eff]/10 hover:border-[#915eff]/40 hover:shadow-[0_0_15px_rgba(145,94,255,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <FiGithub size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center bg-white/5 text-white/80 hover:text-white hover:bg-[#00f6ff]/10 hover:border-[#00f6ff]/40 hover:shadow-[0_0_15px_rgba(0,246,255,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <FiLinkedin size={18} />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
