import Link from "next/link";
import { getArticleData, getArticleSlugs } from "@/lib/articles";

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
const Article = async ({ params }: { params: { slug: string } }): Promise<JSX.Element> => {
  const articleData = await getArticleData(params.slug);

  return (
    <main className="mx-auto min-h-screen font-sans">
      <div className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4 mb-auto">
        <div className="width-full">
          <div className="px-12 py-12 md:py-20 lg:px-24 font-sans">
            <article className="article" dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
            <Link
              href="/blog"
              className="rounded-full bg-indigo-400 px-4 py-2 font-heavy leading-5 text-indigo-950 hover:bg-indigo-300">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Article;
