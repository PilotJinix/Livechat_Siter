// NODE_MODULES
import { io } from "socket.io-client";
// CONFIGS
import { host } from "__src/configs";
// CONTRACTS
import { MainNamespace } from "@interfaces/socket/main";

export const namespace = {
  main: `${host}/`,
};

const main: MainNamespace = io(namespace.main);

// const other: OtherNamespace = io(namespace.other);

export { main };
