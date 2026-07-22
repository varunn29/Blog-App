import { Moon, Plus, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar()
{
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center bg-[#111827]/80 backdrop-blur-xl p-4">
                <Link to="/">
                    <div className="flex items-center gap-3">
                        <img className="w-14 h-14" src="/coding.png"/>
                        <p className="text-4xl font-extrabold text-white">Dev<span className='text-blue-700'>Scope</span></p>
                    </div>
                </Link>

                <button onClick={function(){
                    setMenuOpen(prev => !prev);
                }} className=' w-10 h-10 flex items-center justify-center text-white cursor-pointer translate-y-[5px] md:hidden'>{menuOpen ? <X/> : <Menu size={30}/>}</button>

                <div className="hidden md:flex gap-5 text-xl text-white">
                    <NavLink to="/" className={function({isActive}){
                        if(isActive)
                        {
                            return "text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
                        }
                        else
                        {
                            return 'hover:text-blue-500 text-zinc-300 duration-300'
                        }
                    }}>Home</NavLink>

                    <NavLink to="/articles" className={function({isActive}){
                        if(isActive)
                        {
                            return "text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
                        }
                        else
                        {
                            return 'hover:text-blue-500 text-zinc-300 duration-300'
                        }
                    }}>Articles</NavLink>

                    <NavLink to="/myposts" className={function({isActive}){
                        if(isActive)
                        {
                            return "text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
                        }
                        else
                        {
                            return 'hover:text-blue-500 text-zinc-300 duration-300'
                        }
                    }}>My Posts</NavLink>

                    <NavLink to="/about" className={function({isActive}){
                        if(isActive)
                        {
                            return "text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
                        }
                        else
                        {
                            return 'hover:text-blue-500 text-zinc-300 duration-300'
                        }
                    }}>About</NavLink>
                </div>

                <div className='hidden md:flex items-center gap-8 text-white'>
                    <div><input onChange={function(e){
                        setSearch(e.target.value);
                    }} onKeyDown={function(e){
                        if(e.key === "Enter" && search.trim() !== "")
                        {
                            setSearch("");
                            navigate(`/search/${search.trim().toLowerCase()}`);
                        }
                    }} value={search} type='text' placeholder='Search articles by tag...' className='border border-zinc-700 h-11 rounded-full w-72 pl-12 pr-4 text-white bg-zinc-900/80 placeholder:text-zinc-500 outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25 hover:border-zinc-500 duration-300'/></div>

                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700 hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300 cursor-pointer"><Moon/></div>

                    <Link to="/createpost"><div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-500 hover:to-cyan-400 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"><span><Plus /></span><span className='font-medium'>Create</span></div></Link>
                </div>
            </div>

            {menuOpen && (
                <div className='p-5'>
                    <div className='text-white bg-zinc-900 border border-zinc-800 rounded-2xl p-5'>
                        <div><input onChange={function(e){
                            setSearch(e.target.value);
                        }} onKeyDown={function(e){
                            if(e.key === "Enter" && search.trim() !== "")
                            {
                                setSearch("");
                                navigate(`/search/${search.trim().toLowerCase()}`);
                            }
                        }} value={search} type='text' placeholder='Search articles by tag...' className='border border-zinc-700 h-11 rounded-full w-full pl-12 pr-4 text-white bg-zinc-900/80 placeholder:text-zinc-500 outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25 hover:border-zinc-500 duration-300'/></div>

                        <div className='flex flex-col text-xl gap-3'>
                            <NavLink to="/" className={function({isActive}){
                                if(isActive)
                                {
                                    return "block rounded-lg px-3 py-3 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
                                }
                                else
                                {
                                    return "block rounded-lg px-3 py-3 hover:text-blue-500 text-zinc-300 duration-300";
                                }
                            }}>Home</NavLink>
                            
                            <NavLink to="/articles" className={function({isActive}){
                                if(isActive)
                                {
                                    return "block rounded-lg px-3 py-3 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
                                }
                                else
                                {
                                    return "block rounded-lg px-3 py-3 hover:text-blue-500 text-zinc-300 duration-300";
                                }
                            }}>Articles</NavLink>

                            <NavLink to="/myposts" className={function({isActive}){
                                if(isActive)
                                {
                                    return "block rounded-lg px-3 py-3 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
                                }
                                else
                                {
                                    return "block rounded-lg px-3 py-3 hover:text-blue-500 text-zinc-300 duration-300";
                                }
                            }}>My Posts</NavLink>

                            <NavLink to="/about" className={function({isActive}){
                                if(isActive)
                                {
                                    return "block rounded-lg px-3 py-3 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]";
                                }
                                else
                                {
                                    return "block rounded-lg px-3 py-3 hover:text-blue-500 text-zinc-300 duration-300";
                                }
                            }}>About</NavLink>
                        </div>

                        <hr className='text-zinc-700 mb-8 mt-4'></hr>

                        <div className='flex flex-col gap-5'>
                            <div className="w-full h-11 flex items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700 hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300 cursor-pointer"><span><Moon/></span><span className='font-medium'>Dark Mode</span></div>

                            <Link to="/createpost"><div className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-500 hover:to-cyan-400 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"><span><Plus /></span><span className='font-medium'>Create Post</span></div></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar