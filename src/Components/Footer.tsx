import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer()
{
    return (
        <div className="px-10 py-16 bg-linear-to-b from-zinc-900 to-black ">
            <div className="text-white flex flex-col gap-10 md:flex-row md:justify-between md:items-center mb-10">
                <div>
                    <div className="flex items-center gap-2">
                        <img className="md:w-16 md:h-16 w-12 h-12" src="/coding.png"/>
                        <div className="font-extrabold text-4xl md:text-5xl">Dev<span className="text-blue-700">Scope</span></div>
                    </div>
                    <div className="text-zinc-400 leading-7 mt-4 max-w-sm">A modern platform for developers to discover insightful articles, share knowledge, and grow together through the power of community.</div>
                </div>

                <div className="space-y-2">
                    <p className="text-lg tracking-wide font-bold mb-2">Quick Links</p>
                    <Link to="/"><p className="py-1 cursor-pointer hover:bg-zinc-800 rounded-lg px-2 hover:text-blue-400 transition-all duration-300">Home</p></Link>
                    <Link to="/articles"><p className="py-1 cursor-pointer hover:bg-zinc-800 rounded-lg px-2 hover:text-blue-400 transition-all duration-300">Articles</p></Link>
                    <Link to="/createpost"><p className="py-1 cursor-pointer hover:bg-zinc-800 rounded-lg px-2 hover:text-blue-400 transition-all duration-300">Create Post</p></Link>
                    <Link to="/about"><p className="py-1 cursor-pointer hover:bg-zinc-800 rounded-lg px-2 hover:text-blue-400 transition-all duration-300">About</p></Link>
                </div>

                <div className="space-y-2">
                    <p className="text-lg tracking-wide font-bold mb-2">Resources</p>
                    <a className="hover:text-blue-400 transition-all duration-300" href="https://developers.forem.com/api" target="_blank"><p className="py-1 hover:bg-zinc-800 rounded-lg px-2">DEV API</p></a>
                    <a className="hover:text-blue-400 transition-all duration-300" href="https://react.dev/" target="_blank"><p  className="py-1 hover:bg-zinc-800 rounded-lg px-2">React</p></a>
                    <a className="hover:text-blue-400 transition-all duration-300" href="https://www.typescriptlang.org/" target="_blank"><p className="py-1 hover:bg-zinc-800 rounded-lg px-2">TypeScript</p></a>
                    <a className="hover:text-blue-400 transition-all duration-300" href="https://tailwindcss.com/" target="_blank"><p className="py-1 hover:bg-zinc-800 rounded-lg px-2">Tailwind</p></a>
                </div>

                <div className="space-y-2">
                    <p className="py-1 hover:bg-zinc-800 rounded-lg px-2 text-lg tracking-wide font-bold mb-2">Connect</p>
                    <p className="py-1 hover:bg-zinc-800 rounded-lg px-2 flex items-center gap-1"><FaGithub/><span>GitHub</span></p>
                    <p className="py-1 hover:bg-zinc-800 rounded-lg px-2 flex items-center gap-1"><FaLinkedin/><span>LinkedIn</span></p>
                    <p className="py-1hover:bg-zinc-800 rounded-lg px-2 flex items-center gap-1"><FaEnvelope/><span>Email</span></p>
                </div>
            </div>

            <hr className="border-zinc-800 my-10" />

            <div className="text-white mb-10 w-full md:w-[50%] flex flex-col gap-3 md:flex-row justify-between m-auto"><span>© 2026 DevScope</span><span>Built with React + TypeScript</span></div>
            <div className="text-zinc-500 italic -mb-15 text-center">Keep learning. Keep building. Keep sharing. 🚀</div>
        </div>
    )
}

export default Footer