const http = require("http");

const app = require("./server");
const config = require("./config");

const server = http.createServer(app);

server.listen(config.app.port, (err) => {
  if (!err) {
    console.log(`App is listening on port ${config.app.port}`);
  }
});
