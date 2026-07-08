import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ArticleDetails()
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

    const params = useParams();
    const [article, setArticle] = useState<Article>();

    async function fetchData()
    {
        const response = await fetch(`https://dev.to/api/articles/${params.id}`);
        const data = await response.json();

        console.log(data);
        setArticle(data);
    }

    useEffect(function(){
        fetchData();
    }, []);

    return (
        <div>
            <div>
                <div><img src={article?.cover_image}/></div>
            </div>
        </div>
    )
}

export default ArticleDetails