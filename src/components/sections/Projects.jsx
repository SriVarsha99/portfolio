export const Projects = () =>{
    return (
        <section className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            Bronco Connect : Social Media Platform 
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Developed a scalable and modular front-end for Bronco Connect using ReactJS, Redux, and Tailwind CSS, integrating RESTful APIs with Axios for seamless CRUD operations and real-time engagement. Optimized performance with React hooks, lazy loading, and code splitting while ensuring accessibility and security.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js"].map((tech,key) => (
                                <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/SriVarsha99/Social-Media-Website" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project 🔍
                            </a>
                        </div>
                        
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            Distributed File Sharing System 
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Designed and implemented a scalable DFSS using the Chord protocol for efficient peer-to-peer file storage and retrieval.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js"].map((tech,key) => (
                                <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/kvnayak/DistributedSystems-DFS" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project 🔍
                            </a>
                        </div>
                        
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            Location-Based Event Mapping Web App 
                        </h3>
                        <p className="text-gray-400 mb-4">
                        Developed a web application that displays real-time event locations on an interactive map. Integrated Firebase Realtime Database for
                        event storage and Flask for backend API services.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Node.js"].map((tech,key) => (
                                <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="hhttps://github.com/kvnayak/h4h" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project 🔍
                            </a>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}