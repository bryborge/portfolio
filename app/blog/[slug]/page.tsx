import Link from "next/link";
import { getArticleData, getArticleSlugs } from "@/lib/articles";

// Required for next.js static sites (output: 'export')
//   - see: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export const generateStaticParams = async () => {
  const slugs = await getArticleSlugs();

  return slugs.map((slug: { slug: any; }) => ({
    slug: slug.slug,
  }));
}

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <main className="mx-auto min-h-screen font-sans">
      <div className="mx-auto max-w-screen-xl lg:flex lg:justify-between lg:gap-4 mb-auto">
        <div className="width-full">
          <div className="px-12 py-12 md:py-20 lg:px-24 font-sans">
            {/* <h1 className="text-xl md:text-2xl font-bold leading-snug text-slate-200 mb-4 uppercase">
              {articleData.title}
            </h1> */}
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
