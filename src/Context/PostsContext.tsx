import { createContext, useEffect, useState } from "react";

const PostsContext = createContext(null);

function PostsProvider({ children }) {
    
    function getPosts()
    {
        const postsData = localStorage.getItem("posts");
        const postsArray = JSON.parse(postsData);

        if(postsArray)
        {
            return postsArray;
        }
        else
        {
            return [];
        }
    }

    const [posts, setPosts] = useState(getPosts);
    const [tag, setTag] = useState("");
    const [articles,  setArticles] = useState<Article[]>([]);
    const [page, setPage] = useState<number>(1);

    useEffect(function(){
        localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);

    return (
        <PostsContext.Provider value={{posts, setPosts, tag, setTag}}>
            {children}
        </PostsContext.Provider>
    )
}

export { PostsContext, PostsProvider };
