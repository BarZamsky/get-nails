import axios from "axios";

class server {
  baseUrl = process.env.BASE_URL;

  get(url) {
    axios.get(`${this.baseUrl}/${url}`)
      .then(res => {
        return {
          success: true,
          data: res.data
        }
      })
      .catch(err => {
        console.log(err && err.message);
        return {
          success: false
        }
      })
  }

  post(url, body) {
    axios.post(`${this.baseUrl}/${url}`, body)
      .then(res => {
        return {
          success: true,
          data: res.data
        }
      })
      .catch(err => {
        console.log(err && err.message);
        return {
          success: false
        }
      })
  }
}

export default new server();