/* eslint-disable @typescript-eslint/no-explicit-any */
import { devEnvironment } from "../environments/dev";
// import { prodEnvironment } from "../environments/prod";
import { decryptData } from "../utils/crypto";

const getEnvironmentUrl = () => {
  return devEnvironment.baseUrl;
  // return prodEnvironment.baseUrl;
};

export { getEnvironmentUrl };
