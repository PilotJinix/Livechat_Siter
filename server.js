const express = require("express");

class Server {
  constructor(props) {
    this.app = express();
    this.port = props.port;
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`React server running at port ${this.port}`);
    });
  }
}

module.exports = Server;
