import http from "http";

const mockPayload = {
  title: "Vite + React",
  status: "ok",
};

export function startMockServer(port = 4010) {
  const server = http.createServer((req, res) => {
    if (req.url === "/api/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(mockPayload));
      return;
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  });

  return new Promise((resolve) => {
    server.listen(port, "0.0.0.0", () => resolve(server));
  });
}

startMockServer().then(() => {
  console.log("Mock server listening on port 4010");
});
