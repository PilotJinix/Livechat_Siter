// NODE_MODULES
import { io } from "socket.io-client";
// CONFIGS
import { host } from "__src/configs";
// CONTRACTS
import { MainNamespace } from "@interfaces/socket/main";
import { OtherNamespace } from "@interfaces/socket/other";

export const namespace = {
  main: `${host}/`,
  other: `${host}/other`,
};

const main: MainNamespace = io(namespace.main);
// {
//   auth: {
//     token: "invalidtoken",
//   },
// }

// const other: OtherNamespace = io(namespace.other);

export { main };
