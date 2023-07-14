import { getEnvironmentUrl as baseURL } from "./axios.helpers";
import { AxiosBuilder } from "./axios.builder";

const instances = {
  public: AxiosBuilder.builder()
    .withBaseUrl(baseURL())
    .withDefaultHeaders()
    .toDomain()
    .initInstance(),
  private: AxiosBuilder.builder()
    .withBaseUrl(baseURL())
    .withDefaultHeaders()
    .haveCredentials()
    .toDomain()
    .initInstance(),
};

export { instances };
