import Server from "@ioc:Adonis/Core/Server";

import SocketIO from "socket.io";
import { instrument } from "@socket.io/admin-ui";

import { ServerMainNamespace, MainNamespace } from "@interfaces/socket/main";
import { NamespaceOtherNamespace, OtherNamespace } from "@interfaces/socket/other";

type Callback<C> = (socket: C) => void;

class Ws {
  public isReady: boolean = false;
  public io: ServerMainNamespace;

  // Namespaces
  public otherNamespace: NamespaceOtherNamespace;

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

    // Middleware
    // this.io.use((socket, next) => {
    //   const { token } = socket.handshake.auth;

    //   next();
    // });

    this.io.on("connection", callback);
    this.isReady = true;

    this.otherNamespace = this.io.of("/other");
  }

  public otherStart(callback: Callback<OtherNamespace>) {
    this.otherNamespace.on("connection", callback);
  }
}

export default new Ws();
