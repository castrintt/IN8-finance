/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from "axios";

interface IHeaders {
  [key: string]: string;
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

  withDefaultHeaders(): AxiosBuilder {
    this.headers = {
      "Content-Type": "application/json",
    };
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
