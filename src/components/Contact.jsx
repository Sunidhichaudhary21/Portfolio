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
    <section className="py-24 bg-[#fffcf5] relative overflow-hidden" id="contact">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-125 bg-[#e09f3e]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-[500px] bg-[#335c67]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="text-[#e09f3e] font-bold tracking-widest uppercase text-sm mb-3 block">Collaborate</span>
          <h2 className="text-5xl md:text-6xl font-black text-[#335c67] mb-6">
            Let's Create <br /> Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e09f3e] to-[#9e2a2b]">Extraordinary</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#335c67]/70 text-lg">
            Have an idea? Let's turn it into reality. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        {/* Floating Glass Form Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-[0_30px_60px_-15px_rgba(51,92,103,0.15)] overflow-hidden" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-5 min-h-[500px]">

            {/* Left: Interactive Form */}
            <div className="col-span-3 p-8 md:p-12 order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#335c67] mb-8">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#335c67]/10 py-4 text-[#335c67] font-medium placeholder-transparent focus:outline-none focus:border-[#e09f3e] transition-colors peer"
                    placeholder="Name"
                  />
                  <label className="absolute left-0 top-4 text-[#335c67]/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#335c67]/40 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[#e09f3e] peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs">
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
                    className="w-full bg-transparent border-b-2 border-[#335c67]/10 py-4 text-[#335c67] font-medium placeholder-transparent focus:outline-none focus:border-[#e09f3e] transition-colors peer"
                    placeholder="Email"
                  />
                  <label className="absolute left-0 top-4 text-[#335c67]/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#335c67]/40 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[#e09f3e] peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs">
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
                    className="w-full bg-transparent border-b-2 border-[#335c67]/10 py-4 text-[#335c67] font-medium placeholder-transparent focus:outline-none focus:border-[#e09f3e] transition-colors peer resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label className="absolute left-0 top-4 text-[#335c67]/40 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#335c67]/40 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-[#e09f3e] peer-focus:text-xs peer-valid:-top-2 peer-valid:text-xs">
                    Tell me about your project
                  </label>
                </div>

                <div className="pt-4">
                  <button type="submit" className="group flex items-center gap-3 px-8 py-4 bg-[#335c67] text-white rounded-full font-bold hover:bg-[#e09f3e] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Send Message <FiSend className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Info Panel */}
            <div className="col-span-2 bg-[#335c67] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
              {/* Decorative Circle */}
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-[#e09f3e] rounded-full opacity-20 blur-3xl"></div>

              <div>
                <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
                <p className="text-white/60 text-sm mb-12">connect instantly.</p>

                <div className="space-y-8">
                  <a href="mailto:csunidhi22@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#e09f3e] transition-colors">
                      <FiMail />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Email</p>
                      <p className="font-medium group-hover:text-[#e09f3e] transition-colors">csunidhi22@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+918000114849" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#e09f3e] transition-colors">
                      <FiPhone />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Phone</p>
                      <p className="font-medium group-hover:text-[#e09f3e] transition-colors">+91 8000114849</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <FiMapPin />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider">Location</p>
                      <p className="font-medium">Vadodara, Gujarat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12 md:mt-0">
                <a href="https://github.com/Sunidhichaudhary21" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#335c67] transition-all">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/sunidhi-chaudhary-b9a188304/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#335c67] transition-all">
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
