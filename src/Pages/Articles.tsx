import { useEffect, useState } from "react"
import { Sparkles, UserRound, CalendarDays, Clock, Tags, ArrowRight } from "lucide-react";

function Articles()
{
    const [articles,  setArticles] = useState<Article[]>([]);
    const [page, setPage] = useState<number>(1);

    async function fetchArticles()
    {
        const response = await fetch(`https://dev.to/api/articles?per_page=9&${page}`);
        const data = await response.json();

        setArticles(data);
    }

    useEffect(function(){
        fetchArticles();
    }, [page]);

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


    return (
        <div className="text-white p-10">
            <div className="mb-10">
                <div className="text-6xl font-extrabold mb-6 text-center">Articles</div>
                <div className="text-zinc-400 text-xl text-center">Discover the latest programming articles from the DEV Community API.</div>
            </div>

            <div className="w-[50%] m-auto mb-15">
                <div className="text-4xl font-bold mb-3">Popular Technologies</div>
                <div className="flex gap-10 flex-wrap">
                    <p className="bg-blue-900 p-3 rounded">All</p>
                    <p className="bg-blue-900 p-3 rounded">React</p>
                    <p className="bg-blue-900 p-3 rounded">TypeScript</p>
                    <p className="bg-blue-900 p-3 rounded">JavaScript</p>
                    <p className="bg-blue-900 p-3 rounded">Next.js</p>
                    <p className="bg-blue-900 p-3 rounded">Node.js</p>
                    <p className="bg-blue-900 p-3 rounded">Python</p>
                    <p className="bg-blue-900 p-3 rounded">CSS</p>
                    <p className="bg-blue-900 p-3 rounded">HTML</p>
                    <p className="bg-blue-900 p-3 rounded">AI</p>
                    <p className="bg-blue-900 p-3 rounded">Git</p>
                    <p className="bg-blue-900 p-3 rounded">Docker</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10 mb-10">
                {articles.map(function(article){
                    return (
                        <div className="border border-gray-800 p-5 rounded-xl">
                            <div><img className="rounded-2xl hover:scale-105 transition-transform duration-300 mb-5" src={article.cover_image}/></div>
                            <div className="text-2xl font-medium mb-5">{article.title}</div>
                            <div className="mb-8">{article.description}</div>
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
                            <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg hover:cursor-pointer" type="button">Read Article</button>
                        </div>
                        )
                    })}
            </div>

            <div className="flex justify-center items-center gap-10">
                <button onClick={function(){
                    setPage(prev => prev-1);
                }} className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg hover:cursor-pointer">Prev</button>
                <p>Page {page}</p>
                <button onClick={function(){
                    setPage(prev => prev + 1);
                }} className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg hover:cursor-pointer">Next</button>
            </div>
        </div>
    )
}

export default Articles