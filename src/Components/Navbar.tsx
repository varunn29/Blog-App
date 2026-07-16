import { Search, Moon, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar()
{
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex justify-between items-center bg-[#111827]/80 backdrop-blur-xl p-4">
                <Link to="/">
                    <div className="flex items-center gap-3">
                        <img className="w-14 h-14" src="/coding.png"/>
                        <p className="text-4xl font-extrabold text-white">Dev<span className='text-blue-700'>Scope</span></p>
                    </div>
                </Link>

                <div className="flex gap-5 text-xl text-white">
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

                <div className='flex items-center gap-8 text-white'>
                    <div><input onChange={function(e){
                        setSearch(e.target.value);
                    }} onKeyDown={function(e){
                        if(e.key === "Enter" && search.trim() !== "")
                        {
                            navigate(`/search/${search.trim().toLowerCase()}`);
                        }
                    }} value={search} type='text' placeholder='Search articles by tag...' className='border border-zinc-700 h-11 rounded-full w-72 pl-12 pr-4 text-white bg-zinc-900/80 placeholder:text-zinc-500 outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25 hover:border-zinc-500 duration-300'/></div>

                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-800/80 border border-zinc-700 hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-110 transition-all duration-300 cursor-pointer"><Moon/></div>

                    <Link to="/createpost"><div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-500 hover:to-cyan-400 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 cursor-pointer"><span><Plus /></span><span className='font-medium'>Create</span></div></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar