import Server from "@ioc:Adonis/Core/Server";

import SocketIO from "socket.io";
import { instrument } from "@socket.io/admin-ui";

import { ServerMainNamespace, MainNamespace } from "@interfaces/socket/main";

type Callback<C> = (socket: C) => void;

class Ws {
  public isReady: boolean = false;
  public io: ServerMainNamespace;

  public start(callback: Callback<MainNamespace>) {
    this.io = new SocketIO.Server(Server.instance!, {
      cors: {
        origin: "*",
      },
    });

    // Admin-UI
    instrument(this.io, {
      auth: false,
    });

    // // Middleware
    // this.io.use(async (socket, next) => {
    //   socket.userID = socket.handshake.auth.userID as number;
    //   console.log(`socket.userID = ${socket.userID}`);
    //   next();
    // });

    this.io.on("connection", callback);
    this.isReady = true;
  }
}

export default new Ws();
