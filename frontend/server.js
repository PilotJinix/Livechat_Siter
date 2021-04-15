const express = require("express");

class Server {
  constructor(props) {
    this.app = express();
    this.port = props.port;
  }

  useStatic(path) {
    this.app.use(express.static(path));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`React server running at port ${this.port}`);
    });
  }
}

module.exports = Server;
