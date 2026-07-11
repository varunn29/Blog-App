import { useEffect, useState } from "react"
import { Sparkles, UserRound, CalendarDays, Clock, Tags, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

function Articles()
{
    interface Article {
    id: number;
    cover_image: string | null;
    title: string;
    description: string;
    published_at: string;
    reading_time_minutes: number;
    tag_list: string[];
    url: string;

    user: {
      name: string;
      profile_image: string;
    };
    }

    const [articles,  setArticles] = useState<Article[]>([]);
    const [page, setPage] = useState<number>(1);

    async function fetchArticles()
    {
        const response = await fetch(`https://dev.to/api/articles?per_page=9&page=${page}`);
        const data = await response.json();

        setArticles(data);
    }

    useEffect(function(){
        fetchArticles();
    }, [page]);

    if(articles.length === 0)
    {
        return <Loading/>
    }

    return (
        <div className="max-w-7xl mx-auto text-white px-8 py-10">
            <div className="mb-20">
                <div className="text-6xl font-extrabold mb-6 text-center">Articles</div>
                <div className="text-zinc-400 text-xl text-center">Discover the latest programming articles from the DEV Community API.</div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-15">
                <div className="text-4xl font-bold mb-2">Popular Technologies</div>
                <div className="text-zinc-400 text-lg mb-5">Explore articles by your favorite programming technologies.</div>
                <div className="flex gap-5 flex-wrap">
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">All</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">React</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">TypeScript</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">JavaScript</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Next.js</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Node.js</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Python</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">CSS</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">HTML</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">AI</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Git</p>
                    <p className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Docker</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10 mb-10">
                {articles.map(function(article){
                    return (
                        <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 duration-300">
                            <div><img className="w-full h-52 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 mb-5" src={article.cover_image}/></div>
                            <div className="text-2xl font-bold line-clamp-2 mb-5">{article.title}</div>
                            <div className="text-zinc-400 line-clamp-3 mb-8">{article.description}</div>
                            <div className="flex gap-2 mb-2"><span><UserRound /></span>{article?.user.name}</div>
                            <div className="flex gap-2 mb-2"><span><Tags /></span>{article?.tag_list.join(" • ")}</div>
                            <div>
                            <div className="flex gap-2 mb-2"><span><CalendarDays /></span>
                                {new Date(article.published_at).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                                </div>
                                <div className="flex gap-2 mb-5"><span><Clock /></span>{article?.reading_time_minutes} min read</div>
                            </div>
                            <Link to={`/articles/${article.id}`}>
                            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 p-3 rounded-lg hover:cursor-pointer" type="button">Read Article<span><ArrowRight size={18}/></span></button>
                            </Link>
                        </div>
                        )
                    })}
            </div>

            <div className="flex justify-center items-center gap-10">
                <button onClick={function(){
                    if(page > 1){
                        setPage(prev => prev-1);
                        setArticles([]);
                    }
                }} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 p-3 rounded-lg hover:cursor-pointer"><ArrowLeft size={18}/>Prev</button>
                <p>Page {page}</p>
                <button onClick={function(){
                    setPage(prev => prev + 1);
                    setArticles([]);
                }} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 p-3 rounded-lg hover:cursor-pointer">Next<ArrowRight size={18}/></button>
            </div>
        </div>
    )
}

export default Articles