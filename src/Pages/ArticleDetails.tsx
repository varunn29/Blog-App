import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Sparkles, UserRound, CalendarDays, Clock, Tags, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Loading from "../Components/Loading";
import { PostsContext } from "../Context/PostsContext";

function ArticleDetails()
{
    interface Article {
    id: number;
    cover_image: string | null;
    title: string;
    description: string;
    published_at: string;
    reading_time_minutes: number;
    tags: string[];
    body_markdown: string;

    user: {
        name: string;
        profile_image: string;
    };
    }

    const params = useParams();
    const [article, setArticle] = useState<Article>();

    const {posts} = useContext(PostsContext);

    const result = posts.find(function(post){
        if(Number(params.id) === post.id)
        {
            return post;
        }
        else
        {
            return null;
        }
    })

    async function fetchData()
    {
        const response = await fetch(`https://dev.to/api/articles/${params.id}`);
        const data = await response.json();

        console.log(data);
        setArticle(data);
    }

    useEffect(function(){
        if(result)
        {
            const articleFromPost = {
                id: result.id,
                title: result.title,
                description: result.description,
                cover_image: result.coverImage,
                published_at: result.publishedAt,
                body_markdown: result.content,
                reading_time_minutes: Math.ceil(result.content.trim().split(/\s+/).length / 200),
                tags: result.tags,
                user: {
                    name: "Catman",
                    profile_image: ""
            }
            }

            setArticle(articleFromPost);
        }
        else
        {
            fetchData();
        }
    }, []);

    if(!article)
    {
       return <Loading/>
    }

    return (
        <div>
            <div className="text-white max-w-5xl mx-auto px-8 py-10">
                <div><img className="w-full h-[450px] object-cover rounded-3xl mb-8" src={article?.cover_image}/></div>
                <div className="flex gap-2 mb-6 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm"><span><Tags /></span>{article.tags.join(" • ")}</div>
                <div className="font-extrabold text-6xl leading-tight mb-6">{article.title}</div>
                <div className="text-zinc-400 leading-8 text-xl mb-8">{article.description}</div>
                <div className="flex items-center gap-5 mb-5">
                    <div className="flex gap-2"><span><UserRound/></span>{article.user.name}</div>
                    <div className="flex gap-2"><span><CalendarDays /></span>
                      {new Date(article.published_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex gap-2"><span><Clock /></span>{article.reading_time_minutes} min read</div>
                </div>
                <hr className="border-zinc-800 my-10"/>

                <div className="prose prose-invert prose-lg max-w-none"><ReactMarkdown>{article.body_markdown}</ReactMarkdown></div>
            </div>
        </div>
    )
}

export default ArticleDetails