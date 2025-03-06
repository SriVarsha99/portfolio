import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () =>{
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-3 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            Bronco Connect : Social Media Platform 
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Developed a scalable and modular front-end for Bronco Connect using ReactJS, Redux, and Tailwind CSS, integrating RESTful APIs with Axios for seamless CRUD operations and real-time engagement. Optimized performance with React hooks, lazy loading, and code splitting while ensuring accessibility and security.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React.js", "Node.js"].map((tech,key) => (
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

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-3 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            Distributed File Sharing System 
                        </h3>
                        <p className="text-gray-400 mb-4">
                        Designed and implemented a scalable Distributed File Sharing System (DFSS) using the Chord protocol, integrating Flask APIs, multi-threading, consistent hashing, fault tolerance (Ping-Ack), leader election, and data replication, ensuring high availability, efficient load balancing, and seamless file storage/retrieval in a peer-to-peer network.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "HTML"].map((tech,key) => (
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

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-3 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            Location-Based Event Mapping Web App 
                        </h3>
                        <p className="text-gray-400 mb-4">
                        Developed a React.js web application with an interactive Google Maps API and Folium visualization, displaying real-time event locations. Built a Flask backend with Firebase Realtime Database for event storage, authentication, and API management, implementing CORS handling for secure cross-origin communication.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React.js", "Node.js"].map((tech,key) => (
                                <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/kvnayak/h4h" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project 🔍
                            </a>
                        </div>
                        
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-3 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                            Facial Recognition 
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Developed an effective solution for face detection, alignment, and recognition by gathering a diverse dataset of facial images with varied angles, lighting, and expressions, and preprocessing them to enhance quality and standardize features. Leveraged Convolutional Neural Networks (CNNs) for robust feature extraction and classification to ensure accurate facial recognition.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "ML Libries", "Haar Cascade"].map((tech,key) => (
                                <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/vaishnaviu/Face_Recognition">
                                View Project 🔍
                            </a>
                        </div>
                        
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-3 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">
                        An App to Assist Differently Abled People 
                        </h3>
                        <p className="text-gray-400 mb-4">
                        Developed a multi-functional app to assist differently-abled individuals with features like navigation, chat, voice recognition, text recognition, and object detection. Built using Java, leveraging Mapbox API for navigation and the YOLO algorithm for object detection to facilitate daily tasks and communication.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Java", "Mapbox API", "TensorFlow Lite", "Firebase", "OpenCV"].map((tech,key) => (
                                <span 
                                    key = {key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://github.com/SriVarsha99/Social-Media-Website">
                                View Project 🔍
                            </a>
                        </div>
                        
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}