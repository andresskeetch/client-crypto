import axios, { AxiosInstance } from "axios";

class ApiProvider {
  instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create();
  }

  get = ({ url = "" }: { url: string }) => this.instance.get(url);
}
export default ApiProvider;
