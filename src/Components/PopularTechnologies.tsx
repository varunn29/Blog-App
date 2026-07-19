import { useContext } from "react";
import { PostsContext } from "../Context/PostsContext";

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

interface PopularTechnologiesProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

function PopularTechnologies(props : PopularTechnologiesProps)
{
    const { setTag } = useContext(PostsContext);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-15">
                <div className="text-4xl font-bold mb-2">Popular Technologies</div>
                <div className="text-zinc-400 text-lg mb-5">Explore articles by your favorite programming technologies.</div>
                <div className="flex gap-5 flex-wrap">
                    <p onClick={function(){
                         setTag("")
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">All</p>
                    <p onClick={function(){
                         setTag("react");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">React</p>
                    <p onClick={function(){
                         setTag("typescript");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">TypeScript</p>
                    <p onClick={function(){
                         setTag("javascript");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">JavaScript</p>
                    <p onClick={function(){
                         setTag("nextjs");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Next.js</p>
                    <p onClick={function(){
                         setTag("node");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Node.js</p>
                    <p onClick={function(){
                         setTag("python");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Python</p>
                    <p onClick={function(){
                         setTag("css");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">CSS</p>
                    <p onClick={function(){
                         setTag("html");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">HTML</p>
                    <p onClick={function(){
                         setTag("ai");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">AI</p>
                    <p onClick={function(){
                         setTag("git");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Git</p>
                    <p onClick={function(){
                         setTag("docker");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Docker</p>
                    <p onClick={function(){
                         setTag("frontend");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Frontend</p>
                    <p onClick={function(){
                         setTag("backend");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Backend</p>
                    <p onClick={function(){
                         setTag("algorithms");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Algorithms</p>
                    <p onClick={function(){
                         setTag("webdev");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Web Development</p>
                    <p onClick={function(){
                         setTag("programming");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Programming</p>
                    <p onClick={function(){
                         setTag("career");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Career</p>
                    <p onClick={function(){
                         setTag("opensource");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Open Source</p>
                    <p onClick={function(){
                         setTag("devops");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">DevOps</p>
                    <p onClick={function(){
                         setTag("testing");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Testing</p>
                    <p onClick={function(){
                         setTag("api");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">API</p>
                    <p onClick={function(){
                         setTag("database");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Database</p>
                    <p onClick={function(){
                         setTag("linux");
                         props.setPage(1);
                         props.setArticles([]);
                    }} className="flex items-center justify-center bg-zinc-800 border border-zinc-700 px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:-translate-y-1 duration-300">Linux</p>
                </div>
            </div>
        </div>
    )
}

export default PopularTechnologies