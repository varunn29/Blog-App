import { Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Articles from "./Pages/Articles"
import ArticleDetails from "./Pages/ArticleDetails"
import CreatePost from "./Pages/CreatePost"
import MyPosts from "./Pages/MyPosts"
import SearchResults from "./Pages/SearchResults"

function App()
{
  return (
    <div className="bg-[#09090B] min-h-screen overflow-y-auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/createpost" element={<CreatePost/>}/>
        <Route path="/editpost/:id" element={<CreatePost/>}/>
        <Route path="/articles/:id" element={<ArticleDetails />}/>
        <Route path="/myposts" element={<MyPosts/>}/>
        <Route path="/search/:tag" element={<SearchResults />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App