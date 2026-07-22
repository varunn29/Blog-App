import { Sparkles, UserRound, CalendarDays, Clock, Tags, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

function Home() {
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

  const [articles, setArticles] = useState<Article[]>([]);

  async function fetchData() {
    const response = await fetch("https://dev.to/api/articles?per_page=20");
    const articlesData = await response.json();

    console.log(articlesData);
    setArticles(articlesData);
  }

  useEffect(function () {
    fetchData();
  }, []);

  const latestArticles : Article[] = articles.slice(1,4);

  if(articles.length === 0)
  {
    return <Loading/>
  }

  return (
    <div className="max-w-8xl p-15">
      <div className="text-white flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="flex items-center gap-2 bg-gray-800 py-2 px-3 w-fit rounded-2xl mb-5">
            <span>
              <Sparkles />
            </span>
            Your daily dose of developer knowledge
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5">
            Discover.{" "}
            <span className="bg-linear-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              Learn.
            </span>
            <br></br>Share. Grow.
          </div>
          <div className="max-w-xl text-lg text-gray-300 leading-8 mb-15">
            Explore thousands of articles from the DEV Community and create your
            own developer journal
          </div>

          <div className="flex gap-5">
            <Link to="/articles">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-base md:text-2xl font-bold text-white rounded-lg p-3 md:p-5 cursor-pointer"
                type="button"
              >
                Explore Articles
              </button>
            </Link>

            <Link to="/createpost">
            <button
              className="border border-gray-600 bg-transparent hover:bg-gray-800 text-base md:text-2xl font-bold text-white rounded-lg p-3 md:p-5 cursor-pointer"
              type="button"
            >
              Create a Post
            </button>
            </Link>

          </div>
        </div>

        <div className="flex-1">
          <div className="relative hidden md:block">
            <img
              className="w-20 h-20 absolute top-0 right-80 hover:cursor-pointer hover:scale-115 transition-transform duration-300"
              src="/atom.png"
            />
            <img
              className="w-20 h-20 absolute top-25 right-120 hover:cursor-pointer hover:scale-115 transition-transform duration-300"
              src="/css-3.png"
            />
            <img
              className="w-20 h-20 absolute top-25 right-38 hover:cursor-pointer hover:scale-115 transition-transform duration-300"
              src="/html.png"
            />
            <img
              className="w-20 h-20 absolute top-60 right-144 hover:cursor-pointer hover:scale-115 transition-transform duration-300"
              src="/node-js.png"
            />
            <img
              className="w-20 h-20 absolute top-60 right-14 hover:cursor-pointer hover:scale-115 transition-transform duration-300"
              src="/python.png"
            />
            <img
              className="w-20 h-20 absolute top-95 right-120 hover:cursor-pointer hover:scale-115 transition-transform duration-300"
              src="/js.png"
            />
            <img
              className="w-20 h-20 absolute top-95 right-38 hover:cursor-pointer hover:scale-115 transition-transform duration-300"
              src="/typescript.png"
            />
            <img
              className="w-20 h-20 absolute top-120 right-80 hover:cursor-pointer hover:scale-115 transition-transform duration-300"
              src="/claude-ai.webp"
            />
            <img
              className="w-20 h-20 absolute top-60 right-80 hover:cursor-pointer hover:scale-115 transition-transform duration-300"
              src="/brain.png"
            />
          </div>

          <div className="relative h-80 md:hidden mt-15">
            <img className="absolute w-12 h-12 top-0 left-1/2 -translate-x-1/2 hover:cursor-pointer hover:scale-115 transition-transform duration-300" src="/atom.png"/>
            <img className="absolute w-12 h-12 top-12 right-10 hover:cursor-pointer hover:scale-115 transition-transform duration-300" src="/css-3.png"/>
            <img className="absolute w-12 h-12 top-12 left-10 hover:cursor-pointer hover:scale-115 transition-transform duration-300" src="/html.png"/>
            <img className="absolute w-12 h-12 top-28 left-2 hover:cursor-pointer hover:scale-115 transition-transform duration-300" src="/node-js.png"/>
            <img className="absolute w-12 h-12 top-28 right-2 hover:cursor-pointer hover:scale-115 transition-transform duration-300" src="/python.png"/>
            <img className="absolute w-12 h-12 top-48 left-12 hover:cursor-pointer hover:scale-115 transition-transform duration-300" src="/js.png"/>
            <img className="absolute w-12 h-12 top-48 right-12 hover:cursor-pointer hover:scale-115 transition-transform duration-300" src="/typescript.png"/>
            <img className="absolute w-12 h-12 top-64 left-1/2 -translate-x-1/2 hover:cursor-pointer hover:scale-115 transition-transform duration-300" src="/claude-ai.webp"/>
            <img className="absolute w-12 h-12 top-28 left-1/2 -translate-x-1/2 hover:cursor-pointer hover:scale-115 transition-transform duration-300" src="/brain.png"/>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 text-white mt-16 md:mt-40 border border-gray-800 px-5 md:px-8 py-5 md:py-6 rounded-xl mb-20">
        <div className="text-3xl md:text-4xl font-bold md:font-extrabold mb-6">Editor's Choice</div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          <div className="md:w-1/2">
            <img
              className="w-full md:w-[90%] h-60 md:h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              src={articles[0]?.cover_image ?? ""}
            />
          </div>

          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl font-bold leading-tight mb-4">{articles[0]?.title}</p>
            <p className="text-zinc-300 leading-7 mb-6">{articles[0]?.description}</p>

            <p className="font-medium flex items-center text-zinc-300 gap-2 mb-3"><span><UserRound /></span>{articles[0]?.user.name}</p>
            <p className="font-medium flex items-center text-zinc-300 gap-2 mb-3"><span><CalendarDays /></span>
              {new Date(articles[0]?.published_at).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p className="font-medium flex items-center text-zinc-300 gap-2 mb-3"><span><Clock /></span>{articles[0]?.reading_time_minutes} min read</p>

            <p className="font-medium flex items-center text-zinc-300 gap-2 mb-3"><span><Tags /></span>{articles[0]?.tag_list.join(" • ")}</p>

            <Link to={`/articles/${articles[0]?.id}`}>
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 font-semibold rounded-lg hover:cursor-pointer" type="button">Read Article<ArrowRight size={18}/></button>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-white border border-gray-800 px-5 md:px-8 py-5 md:py-6 rounded-xl mb-20">
          <div className="flex justify-between items-center mb-6">
            <div className="text-3xl md:text-4xl font-bold md:font-extrabold mb-5">Latest Articles</div>
            <Link to="/articles"><div className="flex gap-1 hover:text-blue-500 duration-300">View All<span><ArrowRight/></span></div></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {latestArticles.map(function(article){
              return (
                <div className="bg-zinc-900 border border-zinc-800 p-4 md:p-5 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 duration-300">
                  <div><img className="w-full h-56 md:h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-300 mb-5" src={article.cover_image ?? ""}/></div>
                  <div className="text-xl md:text-2xl font-bold leading-tight mb-4 line-clamp-2">{article.title}</div>
                  <div className="text-zinc-300 leading-7 mb-6 line-clamp-3">{article.description}</div>
                  <div className="flex items-center gap-2 mb-3 text-zinc-300"><span><UserRound /></span>{article?.user.name}</div>
                  <div className="flex items-center gap-2 mb-3 text-zinc-300"><span><Tags /></span>{article?.tag_list.join(" • ")}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-zinc-300"><span><CalendarDays /></span>
                      {new Date(article.published_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-zinc-300"><span><Clock /></span>{article?.reading_time_minutes} min read</div>
                  </div>
                  <Link to={`/articles/${article.id}`}>
                     <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 font-semibold rounded-lg    hover:cursor-pointer" type="button">Read Article<ArrowRight size={18}/></button>
                  </Link>
                </div>
              )
            })}
          </div>
      </div>

      <div className="bg-zinc-900 text-white border border-gray-800 px-5 md:px-8 py-6 md:py-5 rounded-xl flex flex-col md:flex-row justify-between mb-5">
        <div>
          <div className="flex items-center gap-2 text-sm md:text-base bg-gray-800 py-2 px-3 w-fit rounded-2xl mt-4 md:mt-10 mb-5"><span><Sparkles/></span>Be a Contributor</div>
          <div className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">Ready to Share Your Knowledge?</div>
          <div className="font-medium mb-8 text-zinc-300 leading-7 max-w-xl">Every developer has something valuable to share. Write tutorials, document your projects, and inspire others with your programming journey.</div>
          <Link to="/createpost"><button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 font-semibold rounded-lg hover:cursor-pointer" type="button">Create Your First Post</button></Link>
        </div>

        <div><img className="w-full max-w-xs mt-10 md:mt-0 md:w-auto md:h-80 object-contain" src="2301.i032.016.S.m005.c13.isometric gamers illustration.jpg"/></div>
      </div>
    </div>
  );
}

export default Home;
