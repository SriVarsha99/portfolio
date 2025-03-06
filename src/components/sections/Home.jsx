import { useEffect, useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"

export const Home = (onComplete) => {

    const [text, setText] = useState("")
    const fullText = "Hi, I am Srivarsha";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if(index >fullText.length){
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                },1000);
            }
        }, 90);

        return() => clearInterval(interval);
    },[onComplete])

    return <section 
    id="home"
    className="min-h-screen flex items-center justify-evenly relative"
    >
        <RevealOnScroll>

        <div className="text-center z-4 px-4">
        <h1 className="text-5xl ms:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to to-purple-600 bg-clip-text text-transparent leading-right ">
                {text}<span className="text-white animate-blink ml-1"> | </span>
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            a passionate and results-driven technology professional with a strong foundation in software development and system optimization. With experience in developing and enhancing applications, automating processes, and improving system efficiency, I thrive on solving complex challenges and building innovative solutions. Continuously learning and adapting to new technologies, I am dedicated to creating impactful and scalable advancements in the tech industry.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow:shadow[0_0_15px_rgba(59,130,246,0.4)]">
                    View Projects
                </a>

                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                    Contact Me
                </a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}