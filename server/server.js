const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, "../public");

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json"
};

const server = http.createServer((req, res) => {
  // API ROUTE
  if (req.url === "/api/projects") {
    const data = fs.readFileSync(
      path.join(__dirname, "../data/projects.json")
    );

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
    return;
  }

  // STATIC FILES
  let filePath = path.join(
    PUBLIC_DIR,
    req.url === "/" ? "index.html" : req.url
  );

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || "text/plain";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);