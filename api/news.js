export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const {
    country = "us",
    category = "general",
    page = 1,
    pageSize = 6,
  } = req.query;

  const apiKey = process.env.React_App_NewsMonkey;

  if (!apiKey) {
    return res.status(500).json({
      status: "error",
      message: "Missing API key in environment variables",
    });
  }

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch news data",
    });
  }
}
