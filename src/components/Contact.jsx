import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#915eff]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00f6ff]/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="text-[#00f6ff] font-bold tracking-widest uppercase text-sm mb-3 block glow-text">Collaborate</span>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let's Create <br /> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-[#00f6ff]">Extraordinary</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#aaa6c3] text-lg">
            Have an idea? Let's turn it into reality. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        {/* Floating Glass Form Card */}
        <div className="bg-[#151030]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-5 min-h-[500px]">

            {/* Left: Interactive Form */}
            <div className="col-span-3 p-8 md:p-12 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-white mb-8">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white font-medium placeholder-transparent focus:outline-none focus:border-[#915eff] transition-colors peer"
                    placeholder="Name"
                  />
                  <label className="absolute left-0 top-4 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[#915eff] peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs">
                    Your Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white font-medium placeholder-transparent focus:outline-none focus:border-[#915eff] transition-colors peer"
                    placeholder="Email"
                  />
                  <label className="absolute left-0 top-4 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[#915eff] peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs">
                    Your Email
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white font-medium placeholder-transparent focus:outline-none focus:border-[#915eff] transition-colors peer resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label className="absolute left-0 top-4 text-white/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[#915eff] peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs">
                    Tell me about your project
                  </label>
                </div>

                <div className="pt-4">
                  <button type="submit" className="group flex items-center gap-3 px-8 py-4 bg-[#915eff] text-white rounded-full font-bold hover:bg-white hover:text-[#050816] transition-all duration-300 shadow-[0_0_15px_rgba(145,94,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:-translate-y-1">
                    Send Message <FiSend className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Info Panel */}
            <div className="col-span-2 bg-[#100d25] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2 border-l border-white/5">
              {/* Decorative Circle */}
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#00f6ff] rounded-full opacity-10 blur-3xl"></div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
                <p className="text-[#aaa6c3] text-sm mb-12">connect instantly.</p>

                <div className="space-y-8">
                  <a href="mailto:csunidhi22@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#050816] flex items-center justify-center group-hover:bg-[#915eff] transition-colors border border-white/10 group-hover:shadow-[0_0_15px_rgba(145,94,255,0.4)]">
                      <FiMail />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider">Email</p>
                      <p className="font-medium group-hover:text-[#915eff] transition-colors">csunidhi22@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+918000114849" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#050816] flex items-center justify-center group-hover:bg-[#00f6ff] transition-colors border border-white/10 group-hover:shadow-[0_0_15px_rgba(0,246,255,0.4)] group-hover:text-[#050816]">
                      <FiPhone className="group-hover:text-[#050816]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider">Phone</p>
                      <p className="font-medium group-hover:text-[#00f6ff] transition-colors">+91 8000114849</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#050816] flex items-center justify-center border border-white/10 text-[#ff00ea]">
                      <FiMapPin />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider">Location</p>
                      <p className="font-medium">Vadodara, Gujarat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12 md:mt-0 relative z-10">
                <a href="https://github.com/Sunidhichaudhary21" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-[#050816] hover:bg-[#915eff] hover:border-[#915eff] hover:shadow-[0_0_15px_rgba(145,94,255,0.4)] transition-all">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-[#050816] hover:bg-[#00f6ff] hover:text-[#050816] hover:border-[#00f6ff] hover:shadow-[0_0_15px_rgba(0,246,255,0.4)] transition-all">
                  <FiLinkedin />
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
