import { FileText, Image, Tags, TextAlignStart, SquarePen, LoaderCircle } from 'lucide-react';
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../Context/PostsContext";
import { useNavigate, useParams } from "react-router-dom";

function CreatePost()
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [content, setContent] = useState("");
    const [coverImage, setCoverImage] = useState("");

    const { posts, setPosts } = useContext(PostsContext);

    const [published, setPublished] = useState(false);

    const navigate = useNavigate();

    const newPost = {
        id: Date.now(),
        title,
        description,
        tags: tags.split(",").map(function(tag){
        return tag.trim();
        }),
        content, 
        publishedAt: new Date(),
        coverImage
    };

    function handleSubmit(e)
    {
        e.preventDefault();

        if(params.id)
        {
            const updatedPosts = posts.map(function(post){
            if(post.id === Number(params.id))
            {
                return {...post,
                         title, 
                         description,
                         content,
                         coverImage,
                         tags: tags.split(",").map(tag => tag.trim())
                }
            }

            return post;
        })
            setPosts(updatedPosts);
        }
        else
        {
            setPosts([...posts, newPost]);
        }

        setPublished(true);

        setTimeout(function(){
            navigate("/myposts");
        }, 2000);
    }

    const params = useParams();

    useEffect(function(){
        if(params.id)
        {
            const post = posts.find(function(post){
                return post.id === Number(params.id);
            })

            setTitle(post.title);
            setDescription(post.description);
            setCoverImage(post.coverImage);
            setContent(post.content);
            setTags(post.tags.join(", "));
        }
    }, [])

    return (
        <div className="text-white p-10 max-w-6xl m-auto">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold">{params.id ? "Update the Existing Post" : "Create New Post"}</h1>
                <p className="text-zinc-400 mt-3 text-lg">{params.id ? "Update your article and keep it fresh for the developer community" : "Share your knowledge with the developer community"}</p>
            </div>

            <form onSubmit={function(e){
                handleSubmit(e);
            }} className="flex flex-col border border-zinc-800 rounded-3xl shadow-xl bg-zinc-900 p-10">
                <div className="mb-8">
                    <label className="flex gap-2 items-center text-xl font-bold" htmlFor="title"><FileText/>Title</label>
                    <input onChange={function(e){
                        setTitle(e.target.value);
                    }} className="w-full mt-3 rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500" id="title" type="text" value={title} placeholder="Enter article title..."/>
                </div>

                <div className="mb-8">
                    <label className="flex gap-2 items-center text-xl font-bold" htmlFor="description"><TextAlignStart/>Description</label>
                    <input onChange={function(e){
                        setDescription(e.target.value);
                    }} className="w-full mt-3 rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500" id="description" type="text" value={description} placeholder="Short description..."/>
                </div>

                <div className="mb-8">
                    <label className="flex gap-2 items-center text-xl font-bold" htmlFor="image"><Image/>Cover Image</label>
                    <input onChange={function(e){
                        setCoverImage(e.target.value)
                    }} className="w-full mt-3 rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500" id="image" type="text" value={coverImage} placeholder='Paste image URL...'/>
                </div>

                <div className="mb-8">
                    <label className="flex gap-2 items-center text-xl font-bold" htmlFor="tags"><Tags/>Add Tags</label>
                    <input onChange={function(e){
                        setTags(e.target.value);
                    }} className="w-full mt-3 rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500" id="tags" type="text" value={tags} placeholder="Create tags..."/>
                </div>

                <div className="mb-8">
                    <label className="flex gap-2 items-center text-xl font-bold" htmlFor="content"><SquarePen/>Content</label>
                    <textarea onChange={function(e){
                        setContent(e.target.value);
                    }} className="w-full mt-3 rounded-xl bg-zinc-800 border border-zinc-700 p-4 outline-none resize-none focus:border-blue-500" id="content" value={content} placeholder="Write your article here..." rows={18}></textarea>
                </div>

                <div className="flex justify-end gap-4 mt-5">
                    <button className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800">Cancel</button>
                    <button type='submit' className={`px-8 py-3 rounded-xl font-semibold
                           ${published 
                                 ? "bg-green-600 text-white cursor-default shadow-lg shadow-green-500/20"
                                 : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
                            }
                        `}>{params.id ? (published ? "✓ Changes Saved" : "Save Changes")
                                      : (published ? "✓ Published" : "Publish")}</button>
                </div>
            </form>
            
            <div className='text-right mt-2'>{published && (
                <p className="inline-flex items-center gap-2 text-lg text-zinc-400"><LoaderCircle size={16} className="animate-spin" /><span>Redirecting to <span className="text-blue-400">My Posts</span></span></p>
            )}</div>
        </div>
    )
}

export default CreatePost