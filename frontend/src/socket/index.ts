// NODE_MODULES
import { io } from "socket.io-client";
// CONTRACTS
import { MainNamespace } from "@interfaces/socket/main";
import { OtherNamespace } from "@interfaces/socket/other";

const host = "http://127.0.0.1:3333";
// const host = "http://192.168.173.1";

export const namespace = {
  main: `${host}/`,
  other: `${host}/other`,
};

const main: MainNamespace = io();

// const other: OtherNamespace = io(namespace.other);

export { main };
