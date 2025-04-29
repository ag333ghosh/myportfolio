import { useRef, useState } from "react"
import { RevealOnScroll } from "./RevealOnScroll"
import emailjs from "@emailjs/browser"


export const Contact = () => {

    const formRef = useRef();

    const [fromData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });


    function handelSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_PUBLIC_KEY)
            .then((response) => {
                alert("message send !");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => alert("Oops! something went wrong, please send again."));
    }

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >

            <RevealOnScroll>

                <div className="px-4 w-[70%] mx-auto">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 
                     bg-clip-text text-transparent text-center">Get In Touch</h2>

                    <form className="space-y-6" onSubmit={handelSubmit} ref={formRef}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={fromData.name}
                                onChange={(e) => {
                                    setFormData({ ...fromData, name: e.target.value })
                                }}
                                required
                                placeholder="Your name . . ."
                                className="w-full my-2 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={fromData.email}
                                onChange={(e) => {
                                    setFormData({ ...fromData, email: e.target.value })
                                }}
                                required
                                placeholder="Example@email.com"
                                className="w-full my-2 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />
                            <textarea

                                id="message"
                                name="message"
                                value={fromData.message}
                                onChange={(e) => {
                                    setFormData({ ...fromData, message: e.target.value })
                                }}
                                required
                                role={5}
                                placeholder="Your message . . ."
                                className="w-full my-2 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 px-6 font-medium transition rounded relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            >
                                Send Message
                            </button>

                        </div>
                    </form>
                </div>

            </RevealOnScroll>

        </section>
    )
}