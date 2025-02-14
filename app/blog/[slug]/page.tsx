import { getArticleData, getArticleMeta, getArticleSlugs } from "@/lib/articles";
import Link from "next/link";

import type { JSX } from "react";

/**
 * Generates static params for the blog pages. The static params are based on the
 * list of articles available in the articles directory.
 * 
 * See: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 *
 * @returns {Promise<{ slug: string; }[]>} A promise that resolves to an array of
 *   objects with `slug` property containing the slug of each article.
 */
export const generateStaticParams = async (): Promise<{ slug: string; }[]> => {
  const slugs = await getArticleSlugs();

  return slugs.map((slug: { slug: any; }) => ({
    slug: slug.slug,
  }));
}

/**
 * Renders a single article page from the list of articles.
 * 
 * @param {{ params: { slug: string } }} props - The props object passed to the component.
 * @param {string} props.params.slug - The slug for the article to be rendered.
 * @returns {Promise<JSX.Element>} The rendered article page.
 */
const Article = async (props: { params: Promise<{ slug: string }> }): Promise<JSX.Element> => {
  const params = await props.params;
  const articleData = await getArticleData(params.slug);
  const articleMeta = await getArticleMeta(params.slug);

  return (
    <main className="mx-auto mb-auto min-h-screen max-w-screen-xl lg:gap-4 width-full px-12 py-12 md:py-20 lg:px-24 font-sans">
      <article className="article">
        <div className="mb-4">
          <div className="bg-slate-200 p-4 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
            <div className="m-4">
              <h1 className="text-center md:text-left">{`${articleMeta?.title}`}</h1>
              <p className="text-center md:text-left text-slate-700">{`${articleMeta?.description}`}</p>
              <p className="text-center md:text-left text-sm text-slate-700">{`${articleMeta?.date}`}</p>
            </div>

            <div className="m-4 mt-0 md:mt-5">
              <Link href="/blog">
                <button className="rounded-full bg-indigo-500 px-4 py-2 font-bold leading-5 text-indigo-50 text-sm hover:bg-indigo-700 outline outline-indigo-800 m-1">
                  Back to Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 p-8 rounded-lg shadow-lg">
          <section dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </div>
      </article>
    </main>
  );
}

export default Article;
