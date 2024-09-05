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
      <div className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4 mb-auto">
        <div className="width-full">
          <div className="px-12 py-12 md:py-20 lg:px-24 font-sans">
            <h3 className="text-xl md:text-2xl font-bold leading-snug text-slate-200 mb-4 uppercase">
              Blog
            </h3>

            <ul>
              {articles.map((article, id) => (
                <Link href={`/blog/${article.id}`} key={id}>
                  <li className="text-lg md:text-xl leading-snug text-slate-200 mb-4">
                    <div>{article.date}</div>
                    {article.title} - {article.description}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blog;
