import { useContext, useEffect, useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react";
import Loading from "../Components/Loading";
import PopularTechnologies from "../Components/PopularTechnologies";
import { PostsContext } from "../Context/PostsContext";
import FetchedArticles from "../Components/FetchedArticles";

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

    const { tag } = useContext(PostsContext);

    const [articles,  setArticles] = useState<Article[]>([]);
    const [page, setPage] = useState<number>(1);

    async function fetchArticles(tag:string)
    {
        let response;

        if(tag === "")
        {
            response = await fetch(`https://dev.to/api/articles?per_page=9&page=${page}`);
        }
        else
        {
            response = await fetch(`https://dev.to/api/articles?tag=${tag}&per_page=9&page=${page}`);
        }

        const data = await response.json();

        setArticles(data);
    }

    useEffect(function(){
        fetchArticles(tag);
    }, [page, tag]);

    if(articles.length === 0)
    {
        return <Loading/>
    }

    return (
        <div className="max-w-7xl mx-auto text-white px-5 md:px-8 py-8 md:py-10">
            <div className="mb-12 md:mb-20">
                <div className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-center">Articles</div>
                <div className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto leading-7 text-center">Discover the latest programming articles from the DEV Community API.</div>
            </div>

            <PopularTechnologies setPage={setPage} setArticles={setArticles}/>

            <FetchedArticles articles={articles}/>

            <div className="flex justify-center items-center gap-4 md:gap-10">
                <button onClick={function(){
                    if(page > 1){
                        setPage(prev => prev-1);
                        setArticles([]);
                    }
                }} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-semibold rounded-lg hover:cursor-pointer"><ArrowLeft size={18}/>Prev</button>
                <p className="text-sm md:text-base font-medium">Page {page}</p>
                <button onClick={function(){
                    setPage(prev => prev + 1);
                    setArticles([]);
                }} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 md:px-5 md:py-3 text-sm md:text-base font-semibold rounded-lg hover:cursor-pointer">Next<ArrowRight size={18}/></button>
            </div>
        </div>
    )
}

export default Articles