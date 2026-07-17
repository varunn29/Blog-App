import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../Context/PostsContext";
import PopularTechnologies from "../Components/PopularTechnologies";
import FetchedArticles from "../Components/FetchedArticles";
import { useNavigate, useParams } from "react-router-dom";
import { Sparkles, UserRound, CalendarDays, Clock, Tags, ArrowRight, ArrowLeft } from "lucide-react";
import Loading from "../Components/Loading";

function SearchResults()
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
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    

    const params = useParams();
    const { tag, setTag } = useContext(PostsContext);
    const navigate = useNavigate();

    async function fetchData()
    {
        setLoading(true);
        const response = await fetch(`https://dev.to/api/articles?tag=${params.tag}&per_page=9&page=${page}`);
        const data = await response.json();

        setArticles(data);
        setLoading(false);
    }

    useEffect(function(){
        fetchData();
    }, [params.tag, page])

    if(loading)
    {
        return <Loading/>
    }

    return (
        <div className="max-w-7xl mx-auto text-white px-8 py-10">
            <div className="text-center mb-16">
                <h1 className="text-6xl font-extrabold mb-4">Search Results</h1>
                <p className="text-xl text-zinc-400">Find articles from the DEV Community by technology or tag.</p>
            </div>

            <div className="mb-12">
                <input onChange={function(e){
                    setSearch(e.target.value);
                }} onKeyDown={function(e){
                    if(e.key === "Enter" && search.trim() !== "")
                        {
                            setSearch("");
                            navigate(`/search/${search.trim().toLowerCase()}`);
                        }
                }} className="w-full h-14 rounded-xl bg-zinc-800 border border-zinc-700 px-6 outline-none focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20" type="text" placeholder="Search articles by tag..."/>
            </div>

            <div className="bg-linear-to-r from-blue-600/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6 mb-12">
                <h2 className="text-3xl font-bold">Showing results for <span className="text-blue-400 capitalize">{params.tag}</span></h2>

                <p className="text-zinc-400 mt-2">Found {articles.length} matching articles from the DEV Community.</p>
            </div>

            <div className="my-16">
                <PopularTechnologies/>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-4xl font-bold">
                        Articles
                    </h2>

                    <p className="text-zinc-400 mt-2">
                        Browse the articles matching your search.
                    </p>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center py-10">
                {articles.length === 0
                ? 
                <div>
                    <div className="text-7xl mb-6">🔍</div>
                    <h2 className="text-3xl font-bold mb-3"> No articles found</h2>
                    <p className="text-zinc-400">Try searching for another technology or choose one from below.</p>
                </div>
                :
                <FetchedArticles articles={articles}/>
                }
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

export default SearchResults