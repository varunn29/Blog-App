import { createContext, useState } from "react";

const PostsContext = createContext(null);

function PostsProvider({ children }) {

    const [posts, setPosts] = useState([]);

    return (
        <PostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PostsContext.Provider>
    )
}

export { PostsContext, PostsProvider };
