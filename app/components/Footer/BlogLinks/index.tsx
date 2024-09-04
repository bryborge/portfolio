import { getArticleCategories } from "@/lib/articles";
import Link from "next/link";

/**
 * Renders the BlogLinks component.
 *
 * @return {JSX.Element} The rendered BlogLinks component.
 */
const BlogLinks = (): JSX.Element => {
  const categories = getArticleCategories();
 
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
