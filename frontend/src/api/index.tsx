// NODE_MODULES
import axios from "axios";
export { AxiosResponse } from "axios";
// CONFIGS
import { host } from "__src/configs";

export const api = axios.create({ baseURL: `${host}/api` });
