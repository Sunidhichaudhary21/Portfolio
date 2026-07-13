import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiLayers } from 'react-icons/fi';

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
    <section className="py-24 bg-[#FDF8F3] relative overflow-hidden border-t border-[#0B3331]/10" id="contact">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* Title Block */}
        <div className="text-left mb-16 max-w-2xl" data-aos="fade-right">
          <span className="font-sans font-black text-xs tracking-[0.2em] text-[#EE9372] uppercase mb-3 inline-block">
            Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#0B3331] leading-tight">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-[#0B3331]/75 text-sm mt-3 leading-relaxed">
            Have an idea? Let's turn it into reality. I'm always open to discussing new projects, creative web solutions, or opportunities to be part of your visions.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="max-w-5xl bg-white border border-[#0B3331]/15 rounded-[2.5rem] shadow-lg overflow-hidden" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">

            {/* LEFT COLUMN: Clean Form */}
            <div className="md:col-span-7 p-8 sm:p-12 order-2 md:order-1 flex flex-col justify-center border-t md:border-t-0 border-[#0B3331]/5 text-left">
              <h3 className="text-xl font-serif font-black text-[#0B3331] mb-8 flex items-center gap-2.5">
                Send a Message <span className="w-2 h-2 rounded-full bg-[#EE9372]" />
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="flex flex-col gap-2 relative">
                  <span className={`text-[10px] uppercase font-sans font-black tracking-widest transition-colors duration-300 ${
                    isFocused === 'name' ? 'text-[#EE9372]' : 'text-[#0B3331]/50'
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
                    className={`w-full bg-[#FDF8F3]/50 border rounded-2xl px-4 py-3.5 text-sm text-[#0B3331] placeholder-[#0B3331]/30 focus:bg-white outline-none transition-all duration-300 ${
                      isFocused === 'name' 
                        ? 'border-[#EE9372] shadow-sm' 
                        : 'border-[#0B3331]/10'
                    }`}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2 relative">
                  <span className={`text-[10px] uppercase font-sans font-black tracking-widest transition-colors duration-300 ${
                    isFocused === 'email' ? 'text-[#EE9372]' : 'text-[#0B3331]/50'
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
                    className={`w-full bg-[#FDF8F3]/50 border rounded-2xl px-4 py-3.5 text-sm text-[#0B3331] placeholder-[#0B3331]/30 focus:bg-white outline-none transition-all duration-300 ${
                      isFocused === 'email' 
                        ? 'border-[#EE9372] shadow-sm' 
                        : 'border-[#0B3331]/10'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2 relative">
                  <span className={`text-[10px] uppercase font-sans font-black tracking-widest transition-colors duration-300 ${
                    isFocused === 'message' ? 'text-[#EE9372]' : 'text-[#0B3331]/50'
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
                    className={`w-full bg-[#FDF8F3]/50 border rounded-2xl px-4 py-3.5 text-sm text-[#0B3331] placeholder-[#0B3331]/30 focus:bg-white outline-none transition-all duration-300 resize-none ${
                      isFocused === 'message' 
                        ? 'border-[#EE9372] shadow-sm' 
                        : 'border-[#0B3331]/10'
                    }`}
                    placeholder="Tell me about your project, timeline, or open roles..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="group relative w-full sm:w-auto px-8 py-3.5 bg-[#0B3331] hover:bg-[#EE9372] text-[#FDF8F3] hover:text-[#0B3331] rounded-full font-sans font-bold text-xs tracking-widest uppercase shadow-md transition-all duration-300 hover:scale-102 flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <FiSend size={13} className="transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN: Info Sidebar */}
            <div className="md:col-span-5 bg-[#0B3331]/5 p-8 sm:p-12 flex flex-col justify-between relative border-t md:border-t-0 md:border-l border-[#0B3331]/5 text-left">
              
              <div>
                <h3 className="text-xl font-serif font-black mb-1 flex items-center gap-2.5 text-[#0B3331]">
                  Contact Info <FiLayers className="text-[#EE9372]" size={18} />
                </h3>
                <p className="text-[#0B3331]/50 text-[10px] tracking-widest uppercase font-sans font-bold mb-12">connect instantly</p>

                {/* Info Blocks */}
                <div className="space-y-6">
                  
                  {/* Email block */}
                  <a href="mailto:csunidhi22@gmail.com" className="flex items-center gap-4 group p-2.5 rounded-2xl border border-transparent hover:bg-white hover:border-[#0B3331]/10 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#EE9372] border border-[#0B3331]/10 shadow-sm">
                      <FiMail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#0B3331]/40 uppercase tracking-widest font-sans font-bold">Email</p>
                      <p className="text-sm font-bold text-[#0B3331] mt-0.5">csunidhi22@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone block */}
                  <a href="tel:+918000114849" className="flex items-center gap-4 group p-2.5 rounded-2xl border border-transparent hover:bg-white hover:border-[#0B3331]/10 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#EE9372] border border-[#0B3331]/10 shadow-sm">
                      <FiPhone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#0B3331]/40 uppercase tracking-widest font-sans font-bold">Phone</p>
                      <p className="text-sm font-bold text-[#0B3331] mt-0.5">+91 8000114849</p>
                    </div>
                  </a>

                  {/* Location block */}
                  <div className="flex items-center gap-4 p-2.5 rounded-2xl border border-transparent hover:bg-white hover:border-[#0B3331]/10 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#EE9372] border border-[#0B3331]/10 shadow-sm">
                      <FiMapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#0B3331]/40 uppercase tracking-widest font-sans font-bold">Location</p>
                      <p className="text-sm font-bold text-[#0B3331] mt-0.5">Vadodara, Gujarat, India</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Social Icons */}
              <div className="flex gap-4 mt-12 md:mt-0 relative z-10 pl-3">
                <a 
                  href="https://github.com/Sunidhichaudhary21" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full border border-[#0B3331]/10 flex items-center justify-center bg-white text-[#0B3331] hover:text-[#EE9372] hover:border-[#EE9372] transition-all duration-300"
                >
                  <FiGithub size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-[#0B3331]/10 flex items-center justify-center bg-white text-[#0B3331] hover:text-[#EE9372] hover:border-[#EE9372] transition-all duration-300"
                >
                  <FiLinkedin size={16} />
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
