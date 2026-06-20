// api/news.js
export default async function handler(req, res) {
  // Allows your GitHub Pages site to read the data securely
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  // Capture ALL the query parameters sent by your React component
  const {
    country = "us",
    category = "general",
    page = 1,
    pageSize = 6,
  } = req.query;

  // Uses the secure token saved on Vercel's dashboard website
  const apiKey = process.env.React_App_NewsMonkey;
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

  try {
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch news data" });
  }
}
