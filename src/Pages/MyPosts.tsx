import { Sparkles, SquarePen, UserRound, CalendarDays, Clock, ArrowRight, Pencil, Trash2, Tags } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PostsContext } from "../Context/PostsContext";
import { useContext } from 'react';

function MyPosts()
{
    const {posts, setPosts} = useContext(PostsContext);

    function updatePosts(id)
    {
        const posts = JSON.parse(localStorage.getItem("posts"));
        const updatedPosts = posts.filter(function(post){
            if(post.id !== id)
            {
                return post;
            }
        })

        setPosts(updatedPosts);
    }

    const navigate = useNavigate();

    function editPosts(id)
    {
        navigate(`/editpost/${id}`)
    }

    if(posts.length === 0)
    {
        return (
        <div className="text-white mx-auto px-15 py-12">
            <div className="bg-zinc-900 border border-gray-800 rounded-xl px-8 py-5 mb-20 flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-2 bg-gray-800 py-2 px-3 w-fit rounded-2xl mb-3"><span><Sparkles/></span>Every Post Matters</div>
                    <h1 className="text-6xl font-extrabold mb-3 leading-tight">My Posts</h1>
                    <p className="text-zinc-400 text-xl leading-8 max-w-xl mb-8">Manage all your published articles, update existing posts, and keep track of your writing journey.</p>
                    <Link to="/createpost"><button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold hover:scale-105 duration-300 cursor-pointer hover:shadow-xl hover:shadow-blue-500/20">Create New Post</button></Link>
                </div>
                
                <div><img className="w-140 h-80 object-contain" src="/2192247.jpg"/></div>
            </div>

            <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl px-10 py-20 text-center overflow-hidden">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"></div>

                <div className='bg-blue-500/10 text-blue-400 rounded-full px-4 py-2 flex items-center gap-2 font-medium mb-10 w-fit m-auto'><Sparkles/>Start Your Writing Journey</div>

                <p className='text-5xl font-extrabold mb-6'>No Posts Yet</p>

                <div className='flex items-center justify-center bg-blue-500/10 border border-blue-500/20 w-44 h-44 rounded-full mx-auto shadow-2xl shadow-blue-500/20 mb-10'><SquarePen size={64}/></div>

                <p className='max-w-2xl mx-auto text-zinc-400 text-lg leading-tight mb-12'>Looks like you haven't published any articles yet. Start sharing tutorials, projects, and programming insights with the developer community.</p>

                <Link to="/createpost"><button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold hover:scale-105 duration-300 cursor-pointer hover:shadow-xl hover:shadow-blue-500/20 flex gap-2 items-center mx-auto"><SquarePen/>Create Your First Post</button></Link>
            </div>
        </div>
    )
    }

    return (
        <div className="text-white mx-auto px-15 py-12">
            <div className="mb-20 flex justify-between items-center">
                <div>
                    <div className="flex items-center gap-2 bg-gray-800 py-2 px-3 w-fit rounded-2xl mb-3"><span><Sparkles/></span>Every Post Matters</div>
                    <h1 className="text-6xl font-extrabold mb-3 leading-tight">My Posts</h1>
                    <p className="text-zinc-400 text-xl leading-8 max-w-xl mb-8">Manage all your published articles, update existing posts, and keep track of your writing journey.</p>
                    <Link to="/createpost"><button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl font-semibold hover:scale-105 duration-300 cursor-pointer hover:shadow-xl hover:shadow-blue-500/20">Create New Post</button></Link>
                </div>
                
                <div><img className=" h-80 object-contain" src="/2192247.jpg"/></div>
            </div>

            <div className="grid grid-cols-3 gap-10 border border-gray-800 px-8 py-5 rounded-xl">
                {posts.map(function(post){
                    return (
                        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 duration-300">
                            <div><img className="w-full h-52 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 mb-5" src={post.coverImage}/></div>
                            <div className="text-2xl font-medium mb-5 line-clamp-2">{post.title}</div>
                            <div className="mb-8 line-clamp-3">{post.description}</div>
                            <div className="flex gap-2 mb-2"><span><UserRound /></span>Catman</div>
                            <div className="flex gap-2 mb-2"><span><Tags /></span>{post.tags.join(" • ")}</div>

                            <div className="flex gap-2 mb-2"><span><CalendarDays /></span>
                                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </div>

                            <div className="flex gap-2 mb-5"><span><Clock /></span>{Math.ceil(post.content.trim().split(/\s+/).length / 200)} min read</div>

                            <div className='flex justify-between items-center'>
                                <Link to={`/articles/${post.id}`}>
                                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 p-3 rounded-lg    hover:cursor-pointer" type="button">Read Article<ArrowRight size={18}/></button>
                                </Link>

                                <div className='flex gap-3'>
                                    <button onClick={function(){
                                        editPosts(post.id);
                                    }} title='Edit' className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-blue-600 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300" type='button'><Pencil /></button>

                                    <button onClick={function(){
                                        updatePosts(post.id);
                                    }} title='Delete' className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-red-600 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300" type='button'><Trash2 /></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyPosts