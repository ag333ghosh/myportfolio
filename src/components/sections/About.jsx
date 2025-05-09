import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {

    const frontendSkills = ["HTML5", "CSS3", "bootstrap-4", "React.js", 'Redux', "JavaScript(ES6+)", "TailwindCSS-4"];
    const backendSkills = ["Node.js", "MongoDB", "Express.js"];

    return <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
            bg-clip-text text-transparent text-center
            ">
                    About Me
                </h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 ">
                        I am a React.js developer with hands-on experience in front-end technologies such as
                        JavaScript (ES6+), HTML5, CSS3, and modern React features including Hooks, Context API,
                        and React Router. I have worked on building dynamic and responsive web applications
                        using RESTful APIs and efficient state management solutions like Redux.<br /><br />

                        Currently, I am pursuing training in backend development with a focus on Node.js,
                        Express.js, and MongoDB to become a proficient full-stack developer in the MERN stack.
                    </p>
                    <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    frontendSkills.map((item) => (
                                        <span key={item} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {
                                    backendSkills.map((item) => (
                                        <span key={item} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                            {item}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-col-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong>BCA</strong> - Maulana Abul Kalam Azad University of Technology (Completed in 2018)
                                </li>
                                <li>
                                    <strong>Higher Secondary Education</strong> - West Bengal Board of Higher Secondary Education (Completed in 2015)
                                </li>
                                <li>
                                    <strong>Secondary Education</strong> - West Bengal Board of Secondary Education (Completed in 2012)
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💻 Experience</h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold">MERN stack training and internship - Weavers Web Academy
                                        (in association with Weavers Web Solutions) [2024 - Present]</h4>
                                    <p>
                                    Completed offline training and internship in React.js and related front-end technologies,
                                     gaining hands-on experience by building multiple projects and contributing to live applications.
                                      Currently undergoing Node.js training to enhance full-stack development skills as part of the MERN stack.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Computer Science Teacher - Gyandeep coaching for success (GCS) [2023 - Present]</h4>
                                    <p>
                                        Here I teach computers to students from class five to class twelve.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </RevealOnScroll>
    </section>
}