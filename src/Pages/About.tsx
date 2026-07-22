import { Code2 } from "lucide-react";

function About() {
  return (
    <div className="text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full mb-6">
            <Code2 className="text-blue-500" size={18} />
            <span>About DevScope</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Built for Developers
          </h1>

          <p className="text-zinc-400 text-base md:text-xl max-w-xl md:max-w-3xl mx-auto leading-7 md:leading-8">
            DevScope is a modern blogging platform where developers can
            discover programming articles, explore trending technologies,
            and share their own knowledge through beautifully written posts.
          </p>
        </div>

        {/* About */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-24">
          <div className="flex-1 flex justify-center">
            <img
              src="/16569.jpg"
              alt="Developer"
              className="w-full max-w-xs md:max-w-md"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is DevScope?
            </h2>

            <p className="text-base md:text-lg text-zinc-400 leading-7 md:leading-8 mb-6">
              DevScope combines articles from the DEV Community with a
              personal blogging experience. Browse developer content from
              popular technologies like React, TypeScript, JavaScript,
              Python, AI, and more—all in one clean, responsive interface.
            </p>

            <p className="text-zinc-400 leading-8">
              You can also create and manage your own posts, making
              DevScope a place to both learn from others and document
              your own development journey.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-10">
            Built With
          </h2>

          <div className="flex justify-center flex-wrap gap-4">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Vite",
              "DEV API",
              "Lucide React",
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-zinc-800 border border-zinc-700 hover:border-blue-500 hover:bg-zinc-900 transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;