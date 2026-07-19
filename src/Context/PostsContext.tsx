import { createContext, useEffect, useState } from "react";

interface Post {
    id: number;
    title: string;
    description: string;
    coverImage: string;
    content: string;
    tags: string[];
    publishedAt: string;
}

interface PostsContextType {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
    tag: string;
    setTag: React.Dispatch<React.SetStateAction<string>>;
}

interface PostsProviderProps {
    children: React.ReactNode;
}

const PostsContext = createContext<PostsContextType>({
    posts: [],
    setPosts: () => {},
    tag: "",
    setTag: () => {},
    });

function PostsProvider({ children } : PostsProviderProps) {
    
    function getPosts() : Post[]
    {
        const postsData = localStorage.getItem("posts");

        if(postsData)
        {
            const postsArray = JSON.parse(postsData) as Post[];
            return postsArray;
        }
        else
        {
            return [];
        }
    }

    const [posts, setPosts] = useState<Post[]>(getPosts);
    const [tag, setTag] = useState("");

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
