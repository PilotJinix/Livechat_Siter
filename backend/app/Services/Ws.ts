import Server from "@ioc:Adonis/Core/Server";

import SocketIO from "socket.io";

class Ws {
  public isReady: boolean = false;
  public io: SocketIO.Server;

  public start(callback: (socket: SocketIO.Socket) => void) {
    this.io = new SocketIO.Server(Server.instance!);
    this.io.on("connection", callback);
    this.isReady = true;
  }
}

export default new Ws();
