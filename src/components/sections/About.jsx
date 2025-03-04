export const About = () => {
    const frontendSkills = ["React", "Vue", "Typescript", "Tailwindcss", "Svelte"];
    const backendSkills = ["Node.js", "Python", "GarphQl"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                The prospect of contributing to innovative applications that blend AI with interactive user interfaces is truly exciting. I am eager to bring my technical skills, creativity, and problem-solving abilities to your team and help drive VOSYN's vision forward.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech,key) => (
                                <span 
                                key = {key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech,key) => (
                                <span 
                                key = {key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            
            </div>

            <div className="grid grid-cols-1 grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                              🎓 Education
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.E in Computer Science and University</strong>
                                    Visvesvaraya Technological University[2017 - 2021]
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Web Development, Cloud Computing....
                                </li>
                            </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">
                              💼 Work Experience
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                        Software Engineer at Accenture India Pvt. Ltd. [2021 - 2023]
                                    </h4>
                                    <p>
                                        I maintained and optimized microservices for BestBuy’s online platform, ensuring high availability and performance. As a Frontend Developer, 
                                        I enhanced web pages to improve efficiency across release cycles and built a Python automation bot to streamline support operations. 
                                        Previously, as an Application Development Associate at SAP Labs, I developed enterprise-grade web applications using SAPUI5, JavaScript, and OData, optimizing performance and integrating backend services for seamless data handling.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Front-end developer Intern at Hermitcrabs Technologies, Inc [2020]
                                    </h4>
                                    <p>
                                    Directed optimization of a website, addressing challenges, implementing data-driven improvements, and collaborating on inbound
                                    marketing for enhanced performance.
                                    </p>
                                </div>
                            </div>
                </div>

            </div>

        </div>
    </section>
}