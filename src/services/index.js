import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class myAxios {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.response.use((res) => res.data, error => {console.log(error)})
  }

  request(config) {
    return this.instance.request(config)
  };
  get(config) {
    return this.instance.request({...config, method: 'get'})
  };
  post(config) {
    return this.instance.request({...config, method: 'post'})
  };
}


const myRequest = new myAxios(BASE_URL, TIMEOUT);
export default myRequest;