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
    <section className="py-24 bg-[#FFFDF9] relative overflow-hidden border-t border-neutral-100" id="contact">
      <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* Title Block */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="font-display font-extrabold text-[11px] tracking-[0.2em] text-[#B39274] uppercase mb-4 inline-block">
            Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 leading-tight">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-neutral-500 text-sm mt-3 leading-relaxed">
            Have an idea? Let's turn it into reality. I'm always open to discussing new projects, creative web solutions, or opportunities to be part of your visions.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="max-w-5xl bg-white border border-neutral-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">

            {/* LEFT COLUMN: Clean Form */}
            <div className="md:col-span-7 p-8 sm:p-12 order-2 md:order-1 flex flex-col justify-center border-t md:border-t-0 border-neutral-100">
              <h3 className="text-lg font-bold text-neutral-800 mb-8 flex items-center gap-2">
                Send a Message <span className="w-1.5 h-1.5 rounded-full bg-[#B39274]" />
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="flex flex-col gap-2 relative">
                  <span className={`text-[10px] uppercase font-bold tracking-wider transition-colors duration-300 ${
                    isFocused === 'name' ? 'text-[#B39274]' : 'text-neutral-400'
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
                    className={`w-full bg-neutral-50 border rounded-xl px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400/60 focus:bg-white outline-none transition-all duration-300 ${
                      isFocused === 'name' 
                        ? 'border-[#B39274] shadow-sm' 
                        : 'border-neutral-200'
                    }`}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2 relative">
                  <span className={`text-[10px] uppercase font-bold tracking-wider transition-colors duration-300 ${
                    isFocused === 'email' ? 'text-[#B39274]' : 'text-neutral-400'
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
                    className={`w-full bg-neutral-50 border rounded-xl px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400/60 focus:bg-white outline-none transition-all duration-300 ${
                      isFocused === 'email' 
                        ? 'border-[#B39274] shadow-sm' 
                        : 'border-neutral-200'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2 relative">
                  <span className={`text-[10px] uppercase font-bold tracking-wider transition-colors duration-300 ${
                    isFocused === 'message' ? 'text-[#B39274]' : 'text-neutral-400'
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
                    className={`w-full bg-neutral-50 border rounded-xl px-4 py-3.5 text-sm text-neutral-800 placeholder-neutral-400/60 focus:bg-white outline-none transition-all duration-300 resize-none ${
                      isFocused === 'message' 
                        ? 'border-[#B39274] shadow-sm' 
                        : 'border-neutral-200'
                    }`}
                    placeholder="Tell me about your project, timeline, or open roles..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="group relative w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-white rounded-full font-bold text-xs tracking-widest uppercase overflow-hidden shadow-sm transition-all duration-300 hover:scale-102 hover:bg-[#B39274] active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message <FiSend size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN: Info Sidebar */}
            <div className="md:col-span-5 bg-neutral-50 p-8 sm:p-12 flex flex-col justify-between relative border-t md:border-t-0 md:border-l border-neutral-100">
              
              <div>
                <h3 className="text-lg font-bold mb-1 flex items-center gap-2 text-neutral-800">
                  Contact Info <FiLayers className="text-[#B39274]" size={16} />
                </h3>
                <p className="text-neutral-400 text-[10px] tracking-widest uppercase mb-12">connect instantly</p>

                {/* Info Blocks */}
                <div className="space-y-6">
                  
                  {/* Email block */}
                  <a href="mailto:csunidhi22@gmail.com" className="flex items-center gap-4 group p-2.5 rounded-xl border border-transparent hover:bg-white hover:border-neutral-200/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#B39274] border border-neutral-200 shadow-sm transition-all duration-300">
                      <FiMail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold font-mono">Email</p>
                      <p className="text-sm font-semibold text-neutral-700 mt-0.5">csunidhi22@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone block */}
                  <a href="tel:+918000114849" className="flex items-center gap-4 group p-2.5 rounded-xl border border-transparent hover:bg-white hover:border-neutral-200/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#B39274] border border-neutral-200 shadow-sm transition-all duration-300">
                      <FiPhone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold font-mono">Phone</p>
                      <p className="text-sm font-semibold text-neutral-700 mt-0.5">+91 8000114849</p>
                    </div>
                  </a>

                  {/* Location block */}
                  <div className="flex items-center gap-4 p-2.5 rounded-xl border border-transparent hover:bg-white hover:border-neutral-200/50 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#B39274] border border-neutral-200 shadow-sm transition-all duration-300">
                      <FiMapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold font-mono">Location</p>
                      <p className="text-sm font-semibold text-neutral-750 mt-0.5">Vadodara, Gujarat, India</p>
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
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 transition-all duration-300"
                >
                  <FiGithub size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 transition-all duration-300"
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
