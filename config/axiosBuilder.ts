/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

interface IHeaders {
  [key: string]: string;
}
interface InterceptorRequestFunction {
  (config: InternalAxiosRequestConfig<any>):
    | InternalAxiosRequestConfig
    | Promise<InternalAxiosRequestConfig>;
}
interface InterceptorResponseFunction {
  (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse>;
}

class AxiosDomain {
  private baseURL: string;
  private headers: IHeaders = {};
  private withCredentials: boolean;

  constructor(BaseUrl: string, Headers: IHeaders, WithCredentials: boolean) {
    this.baseURL = BaseUrl;
    this.headers = Headers;
    this.withCredentials = WithCredentials;
  }

  initInstance(): AxiosInstance {
    return axios.create({
      baseURL: this.baseURL,
      headers: this.headers,
      withCredentials: this.withCredentials,
    });
  }

  addRequestInterceptor(interceptor: InterceptorRequestFunction): AxiosDomain {
    const instance = this.initInstance();
    instance.interceptors.request.use(interceptor);
    return this;
  }

  addResponseInterceptor(
    interceptor: InterceptorResponseFunction
  ): AxiosDomain {
    const instance = this.initInstance();
    instance.interceptors.response.use(interceptor);
    return this;
  }
}

export class AxiosBuilder {
  public baseURL = "";
  public headers: IHeaders = {};
  public withCredentials = false;

  static builder(): AxiosBuilder {
    return new AxiosBuilder();
  }

  toDomain(): AxiosDomain {
    return new AxiosDomain(this.baseURL, this.headers, this.withCredentials);
  }

  withBaseUrl(url: string): AxiosBuilder {
    this.baseURL = url;
    return this;
  }
  withHeaders(headers: IHeaders): AxiosBuilder {
    this.headers = headers;
    return this;
  }
  haveCredentials(): AxiosBuilder {
    this.withCredentials = true;
    return this;
  }
}
