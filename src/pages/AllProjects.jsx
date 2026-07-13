import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiStar, FiArrowLeft, FiFilter, FiCode } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AllProjects = () => {
    const [filter, setFilter] = useState('all');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with payment integration, user authentication, and order management.',
            image: '🛍️',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'fullstack',
            github: '#',
            live: '#',
            featured: true,
            color: 'from-pink-500/20 to-rose-500/20'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates and team workspace organization.',
            image: '✓',
            tags: ['React', 'Firebase', 'Tailwind'],
            category: 'frontend',
            github: '#',
            live: '#',
            featured: true,
            color: 'from-emerald-400/20 to-teal-500/20'
        },
        {
            id: 3,
            title: 'Social Media API',
            description: 'RESTful API for a social media platform handling complex relationships, feeds, and authentication.',
            image: '🔗',
            tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
            category: 'backend',
            github: '#',
            live: '#',
            featured: false,
            color: 'from-blue-500/20 to-indigo-650/20'
        },
        {
            id: 4,
            title: 'Weather App',
            description: 'Real-time weather application providing location-based forecasting and rich visualization of climate data.',
            image: '⛅',
            tags: ['React', 'API', 'Chart.js'],
            category: 'frontend',
            github: '#',
            live: '#',
            featured: false,
            color: 'from-sky-400/20 to-blue-500/20'
        },
        {
            id: 5,
            title: 'Blog Platform',
            description: 'Modern full-stack blogging platform supporting markdown, rich text, comments, and seo optimization.',
            image: '📝',
            tags: ['Next.js', 'Prisma', 'PostgreSQL'],
            category: 'fullstack',
            github: '#',
            live: '#',
            featured: true,
            color: 'from-purple-500/20 to-violet-600/20'
        },
        {
            id: 6,
            title: 'Leetcode Metric',
            description: 'Real-time dashboard to visualize and track coding problem-solving progress and statistics.',
            image: '💬',
            tags: ['React', 'Socket.io', 'Node.js'],
            category: 'fullstack',
            github: '#',
            live: '#',
            featured: false,
            color: 'from-yellow-400/20 to-orange-500/20'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
        { id: 'fullstack', label: 'Full Stack' }
    ];

    const filtered = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="bg-[#FDF8F3] min-h-screen relative overflow-x-hidden text-left">
            {/* Background Decoration */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#EE9372]/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#0B3331]/5 rounded-full blur-[100px]"></div>
            </div>

            {/* Navbar Back Button */}
            <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
                <div className="max-w-screen-2xl mx-auto">
                    <Link to="/" className="inline-flex pointer-events-auto items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-md text-[#0B3331] font-sans font-bold rounded-full shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 border border-[#0B3331]/10 group">
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </div>

            <section className="pt-32 pb-20 relative z-10">
                <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
                    {/* Header Section */}
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block py-1 px-4 rounded-full bg-[#EE9372]/10 text-[#EE9372] text-xs font-sans font-black tracking-widest uppercase border border-[#EE9372]/20">
                            Archive Catalogue
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-serif font-black text-[#0B3331] tracking-tight">
                            Explore <span className="underline decoration-[#EE9372] decoration-wavy underline-offset-4">Works</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-[#0B3331]/70 text-base sm:text-lg font-sans leading-relaxed">
                            A curated collection of web applications, API integrations, and technical challenges showcasing programming concepts.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center mb-16">
                        <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-full shadow-md border border-[#0B3331]/10">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`px-5 py-2 rounded-full text-xs font-sans font-bold transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                                        filter === cat.id
                                            ? 'text-[#FDF8F3] bg-[#0B3331] shadow-sm'
                                            : 'text-[#0B3331]/70 hover:text-[#0B3331] hover:bg-[#0B3331]/5'
                                    }`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {cat.id === 'all' && <FiFilter size={12} />}
                                        {cat.id === 'fullstack' && <FiCode size={12} />}
                                        {cat.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {filtered.map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-white rounded-3xl overflow-hidden border border-[#0B3331]/10 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full"
                            >
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="bg-[#EE9372] text-[#0B3331] text-[9px] font-sans font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                                            <FiStar size={10} fill="currentColor" /> Featured
                                        </div>
                                    </div>
                                )}

                                {/* Card Header / Emoji Icon Area */}
                                <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                                    {/* Overlay Pattern */}
                                    <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0B3331_1px,transparent_1px)] [background-size:16px_16px]"></div>

                                    {/* Emoji Icon */}
                                    <div className="text-7xl filter drop-shadow-lg transform group-hover:scale-108 group-hover:rotate-6 transition-transform duration-700">
                                        {project.image}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow text-left">
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {project.tags.slice(0, 3).map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 bg-[#0B3331]/5 text-[#0B3331] text-[9px] font-sans font-bold uppercase tracking-wider rounded border border-[#0B3331]/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-2 py-0.5 bg-[#0B3331]/5 text-[#0B3331]/75 text-[9px] font-sans font-bold rounded">+{project.tags.length - 3}</span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-serif font-black text-[#0B3331] mb-2 group-hover:text-[#EE9372] transition-colors duration-300 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-[#0B3331]/70 font-sans text-xs sm:text-sm leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-auto pt-4 border-t border-[#0B3331]/5 flex items-center justify-between">
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-1.5 text-[#0B3331]/70 hover:text-[#EE9372] text-xs font-sans font-bold transition-colors uppercase tracking-wider"
                                        >
                                            <FiGithub size={15} />
                                            <span>Code</span>
                                        </a>
                                        <a
                                            href={project.live}
                                            className="flex items-center gap-1.5 px-4 py-2 bg-[#0B3331] text-[#FDF8F3] hover:bg-[#EE9372] hover:text-[#0B3331] text-xs font-sans font-bold rounded-full transition-all duration-300 shadow-md transform active:scale-95"
                                        >
                                            Demo <FiExternalLink size={13} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <div className="inline-block p-6 rounded-full bg-[#0B3331]/5 mb-4 text-4xl">🤔</div>
                            <h3 className="text-xl font-serif font-black text-[#0B3331] mb-2">No projects found</h3>
                            <p className="text-[#0B3331]/60 font-sans text-sm">Try selecting a different category.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AllProjects;
