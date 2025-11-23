import * as fs from "fs";
import { SitemapStream, streamToPromise } from 'sitemap';
import axiosClientSitemap from "./axios-client.js";

const apiService = axiosClientSitemap();

const sitemapStream = new SitemapStream({ hostname: "https://www.indjcst.com/" });

async function fetchDataListing() {
  try {
    const response = await apiService.post('archiveList');
    return response.data;
  } catch (error) {
    console.error('Error fetching archive listing:', error);
    return [];
  }
}

async function fetchConferenceListing() {
  try {
    const response = await apiService.post('conferenceList');
    return response.data;
  } catch (error) {
    console.error('Error fetching conference listing:', error);
    return [];
  }
}

async function fetchcurrentIssueList() {
  try {
    const response = await apiService.post('currentIssueList');
    return response.data;
  } catch (error) {
    console.error('Error fetching current issue list:', error);
    return [];
  }
}

async function fetchBlogListings() {
  try {
    const response = await apiService.post('blogFetch');
    return response.data.blogList;
  } catch (error) {
    console.error('Error fetching blog listing:', error);
    return [];
  }
}
async function fetchTagListings() {
  try {
    const response = await apiService.post('tagFetch');
    return response.data.tagsList;
  } catch (error) {
    console.error('Error fetching tag listing:', error);
    return [];
  }
}

async function generateSitemap() {
  const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/contact-us', changefreq: 'monthly', priority: 0.9 },
    { url: '/ethics', changefreq: 'monthly', priority: 0.8 },
    { url: '/blogs', changefreq: 'weekly', priority: 0.85 },
    { url: '/tag', changefreq: 'weekly', priority: 0.85 },
    { url: '/aim-and-scope', changefreq: 'monthly', priority: 0.85 },
    { url: '/editorial-board', changefreq: 'monthly', priority: 0.8 },
    { url: '/peer-review-policy', changefreq: 'monthly', priority: 0.8 },
    { url: '/publication-ethics-policy', changefreq: 'monthly', priority: 0.8 },
    { url: '/indexing-and-abstracting', changefreq: 'monthly', priority: 0.8 },
    { url: '/FAQs', changefreq: 'monthly', priority: 0.75 },
    { url: '/topics', changefreq: 'monthly', priority: 0.8 },
    { url: '/call-for-papers', changefreq: 'monthly', priority: 0.9 },
    { url: '/instruction-for-author', changefreq: 'monthly', priority: 0.85 },
    { url: '/journal-publishing-process', changefreq: 'monthly', priority: 0.8 },
    { url: '/guidance-for-ems', changefreq: 'monthly', priority: 0.75 },
    { url: '/article-processing-charges', changefreq: 'monthly', priority: 0.75 },
    { url: '/downloads', changefreq: 'monthly', priority: 0.7 },
    { url: '/impact-Factor', changefreq: 'monthly', priority: 0.85 },
    { url: '/paper-status', changefreq: 'monthly', priority: 0.8 },
    { url: '/cross-mark-policy', changefreq: 'monthly', priority: 0.75 },
    { url: '/archives', changefreq: 'weekly', priority: 0.9 },
    { url: '/publications', changefreq: 'weekly', priority: 0.9 },
    { url: '/thesis', changefreq: 'weekly', priority: 0.85 },
    { url: '/conference', changefreq: 'monthly', priority: 0.85 },
    { url: '/404', changefreq: 'yearly', priority: 0.1 }
  ];

  urls.forEach(url => sitemapStream.write(url));

  const dataList = await fetchDataListing();
  const conferenceList = await fetchConferenceListing();
  const blogList = await fetchBlogListings();
  const tagList = await fetchTagListings();
  const currentIssueList = await fetchcurrentIssueList();

  const writtenUrls = new Set();

  // Archive papers
  if (dataList && Array.isArray(dataList)) {
    dataList.forEach((paper) => {
      const { year, volume, issue, paper_id, paper_title, paper_url } = paper;
      const formatTitle = (title = "") =>
        title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
      const formattedTitle = formatTitle(paper_title);

      const paperlistUrl = `/archives/paperlist?year=${year}&volume=${volume}&issue=${issue}`;
      if (!writtenUrls.has(paperlistUrl)) {
        sitemapStream.write({ url: paperlistUrl, changefreq: 'monthly', priority: 0.8 });
        writtenUrls.add(paperlistUrl);
      }

      const paperDetailsUrl = `/archives/paper-details?paperid=${paper_id}&papertitle=${formattedTitle}`;
      if (!writtenUrls.has(paperDetailsUrl)) {
        sitemapStream.write({ url: paperDetailsUrl, changefreq: 'monthly', priority: 0.8 });
        writtenUrls.add(paperDetailsUrl);
      }

      if (paper_url) {
        sitemapStream.write({ url: paper_url, changefreq: 'monthly', priority: 0.5 });
        writtenUrls.add(paper_url);
      }
    });
  }

  // Current issue papers
  if (currentIssueList && Array.isArray(currentIssueList.papersList)) {
    const papers = currentIssueList.papersList;
    papers.forEach((paper) => {
      const { year, volume, issue, id, title } = paper;
      const formatTitle = (title = "") =>
        title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
      const formattedTitle = formatTitle(title);

      const paperlistUrl = `/current-issue/paperlist?year=${year}&volume=${volume}&issue=${issue}`;
      if (!writtenUrls.has(paperlistUrl)) {
        sitemapStream.write({ url: paperlistUrl, changefreq: "monthly", priority: 0.8 });
        writtenUrls.add(paperlistUrl);
      }

      const paperDetailsUrl = `/current-issue/paper-details?paperid=${id}&papertitle=${formattedTitle}`;
      if (!writtenUrls.has(paperDetailsUrl)) {
        sitemapStream.write({ url: paperDetailsUrl, changefreq: "monthly", priority: 0.8 });
        writtenUrls.add(paperDetailsUrl);
      }
    });
  }

  // Conference papers
  if (conferenceList && Array.isArray(conferenceList)) {
    conferenceList.forEach((paper) => {
      const { category_id, year, category_name, volume, issue, id, title, pdf_url } = paper;
      const formatTitle = (title = "") =>
        title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
      const formattedTitle = formatTitle(title);

      const paperlistUrl = `/conference/paperlist?id=${category_id}&year=${year}&volume=${volume}&issue=${issue}&name=${category_name}`;
      if (!writtenUrls.has(paperlistUrl)) {
        sitemapStream.write({ url: paperlistUrl, changefreq: 'monthly', priority: 0.8 });
        writtenUrls.add(paperlistUrl);
      }

      const paperDetailsUrl = `/conference/paper-details?paperid=${id}&papertitle=${formattedTitle}`;
      if (!writtenUrls.has(paperDetailsUrl)) {
        sitemapStream.write({ url: paperDetailsUrl, changefreq: 'monthly', priority: 0.8 });
        writtenUrls.add(paperDetailsUrl);
      }

      if (pdf_url) {
        sitemapStream.write({ url: pdf_url, changefreq: 'monthly', priority: 0.5 });
        writtenUrls.add(pdf_url);
      }
    });
  }

  // Blog posts
  if (blogList && Array.isArray(blogList)) {
    const uniqueUrlTitles = new Set();

    blogList.forEach((blog) => {
      const { url_title, title } = blog;

      if (!uniqueUrlTitles.has(url_title)) {
        const blogUrl = `/blogs/${url_title}`;
        if (!writtenUrls.has(blogUrl)) {
          sitemapStream.write({ url: blogUrl, changefreq: 'weekly', priority: 0.7 });
          writtenUrls.add(blogUrl);
          uniqueUrlTitles.add(url_title);
        }
      } else {
        console.log(`Duplicate url_title found: ${title}`);
      }
    });
  } else {
    console.log("Error: blogList is not an array or is undefined");
  }

  if (tagList && Array.isArray(tagList)) {
    const uniqueUrlTitles = new Set();

    tagList.forEach((tag) => {
      const { url_title, title } = tag;

      if (!uniqueUrlTitles.has(url_title)) {
        const tagUrl = `/tag/${url_title}`;
        if (!writtenUrls.has(tagUrl)) {
          sitemapStream.write({ url: tagUrl, changefreq: 'weekly', priority: 0.7 });
          writtenUrls.add(tagUrl);
          uniqueUrlTitles.add(url_title);
        }
      } else {
        console.log(`Duplicate url_title found: ${title}`);
      }
    });
  } else {
    console.log("Error: tagList is not an array or is undefined");
  }

  sitemapStream.end();

  try {
    const sitemapData = await streamToPromise(sitemapStream);
    fs.writeFileSync('./public/sitemap.xml', sitemapData.toString());
    console.log('✅ Sitemap generated successfully.');
  } catch (err) {
    console.error('Error generating sitemap:', err);
  }
}

generateSitemap();
