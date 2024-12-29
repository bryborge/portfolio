import Link from "next/link";
import { formatDistanceToNow, parse } from 'date-fns';

import type { JSX } from "react";

/**
 * Renders a single blog article.
 *
 * @param {{ article: any }} props - The article to render.
 * @returns {JSX.Element} The rendered article component.
 */
const Article = ({ article }: { article: any }): JSX.Element => {
  const date = parse(article.date, 'MM-dd-yyyy', new Date());
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });

  return (
    <article className="mt-6 mb-4 border-b border-slate-500" key={article.id}>
      <div className="mb-4 flex justify-between">
        <span className="text-xs rounded-full bg-amber-400/10 text-amber-300 px-2 py-1">
          {article.category}
        </span>
        <span className="text-xs">
          {timeAgo}
        </span>
      </div>
      <div className="text-xl text-slate-200 font-bold mb-2">
        {article.title}
      </div>
      <div className="text-md font-sans mb-4">
        {article.description}.
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
  );
}

export default Article;
