import { FileText, Image, Tags, TextAlignStart, SquarePen } from 'lucide-react';
import { useContext, useState } from "react";
import { PostsContext } from "../Context/PostsContext";

function CreatePost()
{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [content, setContent] = useState("");

    const { posts, setPosts } = useContext(PostsContext);

    const newPost = {
        id: Date.now(),
        title,
        description,
        tags,
        content, 
        publishedAt: new Date()
    };

    function handleSubmit(e)
    {
        e.preventDefault();

        setPosts(...posts, newPost);
    }

    return (
        <div className="text-white p-10 max-w-6xl m-auto">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold">Create New Post</h1>
                <p className="text-zinc-400 mt-3 text-lg">Share your knowledge with the developer community.</p>
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
                    <input className="w-full mt-3 rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500 " id="image" type="file" accept="image/*"/>
                </div>

                <div className="mb-8">
                    <label className="flex gap-2 items-center text-xl font-bold" htmlFor="tags"><Tags/>Add Tags</label>
                    <input className="w-full mt-3 rounded-xl bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none focus:border-blue-500" id="tags" type="text" placeholder="Create tags..."/>
                </div>

                <div className="mb-8">
                    <label className="flex gap-2 items-center text-xl font-bold" htmlFor="content"><SquarePen/>Content</label>
                    <textarea onChange={function(e){
                        setContent(e.target.value);
                    }} className="w-full mt-3 rounded-xl bg-zinc-800 border border-zinc-700 p-4 outline-none resize-none focus:border-blue-500" id="content" value={content} placeholder="Write your article here..." rows={18}></textarea>
                </div>

                <div className="flex justify-end gap-4 mt-5">
                    <button className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800">Cancel</button>
                    <button type='submit' className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold">Publish</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost