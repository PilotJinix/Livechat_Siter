const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const Server = require("./server");
const config = require("./webpack.config");

const compiler = webpack(config);

const server = new Server({
  port: config.devServer.port || 3000,
});

// Use Webpack Dev Middleware
const publicPath = config.output.publicPath;
server.app.use(
  webpackDevMiddleware(compiler, {
    publicPath: publicPath && typeof publicPath == "string" ? publicPath : "",
    writeToDisk: false,
  })
);

server.useStatic(path.join(__dirname, "public"));

// History Fallback API - from RAM
server.app.use("*", (req, res, next) => {
  const file = path.join(compiler.outputPath, "index.html");
  compiler.outputFileSystem.readFile(file, (error, buffer) => {
    if (error) return next(error);
    res.set("Content-Type", "text/html");
    res.send(buffer);
    res.end();
  });
});

server.start();
