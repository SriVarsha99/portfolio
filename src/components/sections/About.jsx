import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const programmingLanguages = ["Python", "Java", "C", "C++", "JavaScript", "Typescript", "SQL", "HTML", "CSS" ];
    const frontendFrame = ["React.js", "Vue", "Tailwind CSS", "Flutter"]
    const backendFrame = ["Node.js", "Flask", "GarphQl", "Flutter"];
    const toolsPlatform = ["MySQL", "RabbitMQ", "Splunk", "Dynatrace", "Kubernetes", "AWS", "GCP"];

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                I am an enthusiastic and results-driven Computer Science professional with a solid foundation in software development, distributed systems, and machine learning. With hands-on experience at Accenture, I have developed and optimized enterprise applications, automated processes, and enhanced system efficiency. Currently pursuing my Master’s in Computer Science at Santa Clara University, I specialize in building scalable solutions, leveraging cutting-edge technologies, and driving impactful innovations in software engineering
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-0.5xl font-bold mb-4">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            {programmingLanguages.map((tech,key) => (
                                <span 
                                key = {key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-0.5xl font-bold mb-4">Frontend Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendFrame.map((tech,key) => (
                                <span 
                                key = {key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-0.5xl font-bold mb-4">Tools & Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                            {toolsPlatform.map((tech,key) => (
                                <span 
                                key = {key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-0.5xl font-bold mb-4">Backend Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendFrame.map((tech,key) => (
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
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">
                                    Bachelor of Engineering - Computer Science and Engineering: 
                                    </h4>
                                    <strong>Visvesvaraya Technological University [2017 - 2021]</strong>
                                    <p>
                                    Relevant Coursework: Machine Learning, Distributed Systems, Design and Analysis of Algorithms, Operating Systems, Computer Architecture
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                    Masters - Computer Science and Engineering:
                                    </h4>
                                    <strong>Santa Clara University [2023 - 2025]</strong>
                                    <p>
                                    Relevant Coursework: Data Structures & Algorithms, AI, Machine Learning, Computer Networks, DBMS, Advanced Algorithms, Advanced DBMS, Operating Systems, Web Technology and its applications
                                    </p>
                                </div>
                            </div>
                            
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

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                        Maintained and optimized microservices for <strong>BestBuy’s</strong> online platform, ensuring high availability and performance.   
                                        </li>
                                        <li>
                                        Built an automation bot using Python to acknowledge tickets and analyze order trends, streamlining support operations.
                                        </li>
                                        <li>
                                        Developed and enhanced web pages as a Frontend Developer using <strong>SAP UI5</strong> for SAP Labs, improving efficiency across release cycles.
                                        </li>
                                    </ul>
                                    
                                </div>

                                <div>
                                    <h4 className="font-semibold">
                                        Front-end developer Intern at Hermitcrabs Technologies, Inc [2020]
                                    </h4>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>
                                        Directed optimization of a website, addressing challenges, implementing data-driven improvements, and collaborating on inbound marketing for enhanced performance.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                </div>

            </div>

        </div>
        </RevealOnScroll>
    </section>
}