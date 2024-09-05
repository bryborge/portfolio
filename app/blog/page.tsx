import { getAllArticles } from "@/lib/articles";
import Article from "./components/Article";

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
            <Article key={id} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Blog;
