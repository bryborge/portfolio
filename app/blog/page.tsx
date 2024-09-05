import { getAllArticles } from "@/lib/articles";
import Link from "next/link";

/**
 * Renders the blog page with a list of all articles.
 * 
 * @returns {Promise<JSX.Element>} The rendered blog page.
 */
const Blog = async (): Promise<JSX.Element> => {
  const articles = await getAllArticles();

  return (
    <main className="mx-auto min-h-screen font-sans">
      <section className="mx-auto mb-auto max-w-screen-xl width-full px-12 py-12 md:py-20 md:grid lg:grid-cols-2 font-sans">
        <div className="mb-4">
          <h1 className="mb-2 text-slate-200 text-4xl font-bold leading-snug">
            Blog
          </h1>
          <p className="text-lg">Here are my thoughts, tutorials, and more.</p>
        </div>

        <div>
          {articles.map((article, id) => (
            <article className="mt-6 mb-4 border-b border-slate-500" key={id}>
              <div className="mb-4">
                <span className="text-xs rounded-full bg-amber-400/10 text-amber-300 px-2 py-1">
                  {article.category}
                </span>
              </div>
              <div className="text-xl text-slate-200 font-bold mb-2">
                {article.title}
              </div>
              <div className="text-md font-sans mb-4">
                {article.description}
              </div>
              <Link href={`/blog/${article.id}`} className="flex justify-end">
                <div className="flex items-center mb-6 font-bold text-indigo-400">
                  Read more
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blog;
