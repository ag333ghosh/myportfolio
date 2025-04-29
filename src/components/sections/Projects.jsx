import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {
    return <section
        id="projects"
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
            bg-clip-text text-transparent text-center
            ">
                    Projects
                </h2>
                <div className="grid grid-col-1 md:grid-cols-2 gap-6 ">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">E-commerce web-app</h3>
                        <p className="text-gray-400 mb-2">Built a React-based e-commerce site with
                            product browsing, cart management, and user authentication using Context
                            API and localStorage. Used Redux for cart state, styled with Tailwind CSS,
                            and added a search feature for better UX.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {
                                ["React.js", "redux", "tailwindCSS", "react-router"].map((item) => (
                                    <span key={item} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {item}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                target="_blank"
                                href="https://ag333ghosh.github.io/ecommerce-cart/"
                                className="text-blue-400 hover:text-blue-300 transition-colors m-4"
                            >
                                View Project ↗
                            </a>
                        </div>
                    </div>


                    {/* Responsive Webpage Layout */}

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Responsive Webpage Layout</h3>
                        <p className="text-gray-400 mb-2">Built a responsive webpage using HTML, CSS, and Bootstrap,
                            featuring a hero section, services, products, subscription form,and contact area.
                            Ensured clean layouts and smooth responsiveness across mobile, tablet, and desktop devices.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {
                                ["HTML5", "CSS3", "bootstrap-4"].map((item) => (
                                    <span key={item} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {item}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                target="_blank"
                                href="https://ag333ghosh.github.io/responsive-page/"
                                className="text-blue-400 hover:text-blue-300 transition-colors m-4"
                            >
                                View Project ↗
                            </a>
                        </div>
                    </div>
                    {/* Manage your todo */}


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Manage your todo</h3>
                        <p className="text-gray-400 mb-2">A to-do app where you can add, edit, delete,
                            and mark tasks as complete. I used localstorage to save the tasks so they
                            stay even after refreshing the page.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {
                                ["React.js", "Context API", "tailwindCSS", "localStorage"].map((item) => (
                                    <span key={item} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {item}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                target="_blank"
                                href="https://ag333ghosh.github.io/todo/"
                                className="text-blue-400 hover:text-blue-300 transition-colors m-4"
                            >
                                View Project ↗
                            </a>
                        </div>
                    </div>

                    {/* Personal Portfolio Website */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
                 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Personal Portfolio Website</h3>
                        <p className="text-gray-400 mb-2">Built with React and Tailwind CSS, featuring
                            sections like Home, About, Projects, and Contact. Integrated EmailJS for direct email functionality.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {
                                ["React.js", "tailwindCSS", "EmailJS"].map((item) => (
                                    <span key={item} className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                    rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {item}
                                    </span>
                                ))
                            }
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                target="_blank"
                                href="https://ag333ghosh.github.io/myportfolio/"
                                className="text-blue-400 hover:text-blue-300 transition-colors m-4"
                            >
                                View Project ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    </section>
}
