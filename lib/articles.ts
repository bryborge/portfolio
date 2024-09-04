import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

type articleItem = {
  id: string;
  title: string;
  date: string;
  category?: string;
  description: string;
};

const articlesDirectory = path.join(process.cwd(), "articles");

export const getArticleItems = (): articleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
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

export const getArticleCategories = (): string[] => {
  const articleItems = getArticleItems();
  const categories = new Set<string>();
  articleItems.forEach((article) => {
    if (article.category) {
      categories.add(article.category);
    }
  });

  return Array.from(categories);
}

// TODO: add date filtering
// TODO: add category filtering
// export const getCategorizedArticles = (category: any = null): articleItem[] => {
//   return getArticleItems().filter((article) => article.category === category);
// };

export const getArticleSlugs = async (): Promise<any> => {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map(fileName => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}

export const getArticleData = async (id: string): Promise<any> => {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
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
