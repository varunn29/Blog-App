import { UserRound, CalendarDays, Clock, Tags, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

interface FetchedArticlesProps {
    articles: Article[];
}

function FetchedArticles(props : FetchedArticlesProps)
{
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10">
                {props.articles.map(function(article){
                    return (
                        <div className="bg-zinc-900 border border-zinc-800 p-4 md:p-5 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 duration-300">
                            <div><img className="w-full h-52 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 mb-5" src={article.cover_image ?? ""}/></div>
                            <div className="text-xl md:text-2xl leading-tight font-bold line-clamp-2 mb-5">{article.title}</div>
                            <div className="text-zinc-400 line-clamp-3 leading-7 mb-8">{article.description}</div>
                            <div className="flex items-center text-zinc-300 gap-2 mb-2"><span><UserRound /></span>{article?.user.name}</div>
                            <div className="flex items-center text-zinc-300 gap-2 mb-2"><span><Tags /></span>{article?.tag_list.join(" • ")}</div>
                            <div>
                            <div className="flex items-center text-zinc-300 gap-2 mb-2"><span><CalendarDays /></span>
                                {new Date(article.published_at).toLocaleDateString("en-IN", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                                </div>
                                <div className="flex items-center text-zinc-300 gap-2 mb-2"><span><Clock /></span>{article?.reading_time_minutes} min read</div>
                            </div>
                            <Link to={`/articles/${article.id}`}>
                            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 font-semibold rounded-lg hover:cursor-pointer" type="button">Read Article<span><ArrowRight size={18}/></span></button>
                            </Link>
                        </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default FetchedArticles