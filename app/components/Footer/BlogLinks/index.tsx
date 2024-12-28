import { getArticleCategories } from "@/lib/articles";
import Link from "next/link";

import type { JSX } from "react";

/**
 * Renders the BlogLinks component.
 *
 * @return {Promise<JSX.Element>} A promise that resolves to a JSX element
 *   containing a list of links to blog categories.
 */
const BlogLinks = async (): Promise<JSX.Element> => {
  const categories = await getArticleCategories();
 
  // TODO: Change href to point to specific blog category, like: `/blog/category/${category}`
  return (
    <div>
      <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
        Blog
      </h6>

      {categories.map((category) => (
        <p key={category} className="mb-4">
          <Link
            href={'/blog'}
            className="hover:underline">
            {category}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default BlogLinks;
