import { Search, Moon, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar()
{
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
                    <Link to="/">Home</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/myposts">My Posts</Link>
                    <Link to="/about">About</Link>
                </div>

                <div className='flex items-center gap-5 text-white'>
                    <div className='border border-blue-500 rounded-full p-2'><Search/></div>
                    <div className='border border-blue-500 rounded-full p-2'><Moon/></div>
                    <Link to="/createpost"><div className='flex items-center text-base gap-2 border border-blue-500 rounded-full p-2'><span><Plus /></span><span className='font-medium'>Create</span></div></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar