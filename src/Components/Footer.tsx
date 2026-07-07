import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer()
{
    return (
        <div className="px-10 py-16 bg-linear-to-b from-zinc-900 to-black ">
            <div className="text-white flex justify-between items-center mb-10">
                <div>
                    <div className="flex items-center gap-2">
                        <img className="w-16 h-16" src="/coding.png"/>
                        <div className="font-extrabold text-5xl">Dev<span className="text-blue-700">Scope</span></div>
                    </div>
                    <div className="text-zinc-400 leading-7 mt-4 max-w-sm">A modern platform for developers to discover insightful articles, share knowledge, and grow together through the power of community.</div>
                </div>

                <div className="space-y-1">
                    <p className="text-lg tracking-wide font-bold mb-2">Quick Links</p>
                    <p className="cursor-pointer hover:text-blue-400 transition-all duration-300">Home</p>
                    <p className="cursor-pointer hover:text-blue-400 transition-all duration-300">Articles</p>
                    <p className="cursor-pointer hover:text-blue-400 transition-all duration-300">Create Post</p>
                    <p className="cursor-pointer hover:text-blue-400 transition-all duration-300">About</p>
                </div>

                <div className="space-y-1">
                    <p className="text-lg tracking-wide font-bold mb-2">Resources</p>
                    <a className="hover:text-blue-400 transition-all duration-300" href="https://developers.forem.com/api" target="_blank"><p>DEV API</p></a>
                    <a className="hover:text-blue-400 transition-all duration-300" href="https://react.dev/" target="_blank"><p>React</p></a>
                    <a className="hover:text-blue-400 transition-all duration-300" href="https://www.typescriptlang.org/" target="_blank"><p>TypeScript</p></a>
                    <a className="hover:text-blue-400 transition-all duration-300" href="https://tailwindcss.com/" target="_blank"><p>Tailwind</p></a>
                </div>

                <div className="space-y-1">
                    <p className="text-lg tracking-wide font-bold mb-2">Connect</p>
                    <p className="flex items-center gap-1"><FaGithub/><span>GitHub</span></p>
                    <p className="flex items-center gap-1"><FaLinkedin/><span>LinkedIn</span></p>
                    <p className="flex items-center gap-1"><FaEnvelope/><span>Email</span></p>
                </div>
            </div>
            <hr className="border-zinc-800 my-10" />
            <div className="text-white mb-10 w-[50%] flex justify-between m-auto"><span>© 2026 Blogger</span><span>Built with React + TypeScript</span></div>
            <div className="text-zinc-500 italic -mb-15 text-center">Keep learning. Keep building. Keep sharing. 🚀</div>
        </div>
    )
}

export default Footer