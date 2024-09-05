import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

type article = {
  id: string;
  title: string;
  date: string;
  category?: string;
  description: string;
};

// The path to the articles directory
const articlesDir = path.join(process.cwd(), "articles");


  /**
   * Returns the data for all articles in the articles directory.
   *
   * @returns {Promise<article[]>} A promise that resolves to an array of objects containing the article data. The array is sorted in descending order by date.
   */
export const getAllArticles = async (): Promise<article[]> => {
  const fileNames = fs.readdirSync(articlesDir);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      description: matterResult.data.description
    };
  });

  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

/**
 * Returns an array of unique article categories.
 *
 * @return {string[]} A list of unique article categories.
 */
export const getArticleCategories = async (): Promise<string[]> => {
  const articleItems = await getAllArticles();
  const categories = new Set<string>();

  articleItems.forEach((article) => {
    if (article.category) {
      categories.add(article.category);
    }
  });

  return Array.from(categories);
}


/**
 * Returns an array of article slugs.
 *
 * @return {Promise<{slug: string}[]>} A promise that resolves to an array of objects containing the slug of each article.
 */
export const getArticleSlugs = async (): Promise<{slug: string}[]> => {
  const fileNames = fs.readdirSync(articlesDir);

  return fileNames.map(fileName => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}


/**
 * Returns the data for a single article, given its id.
 *
 * @param {string} id The id of the article to retrieve.
 * @return {Promise<Object | null>} A promise that resolves to the article data, or null if the article does not exist.
 */
export const getArticleData = async (id: string): Promise<{
  id: string;
  contentHtml: string;
  category?: string;
}> => {
  const fullPath = path.join(articlesDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
