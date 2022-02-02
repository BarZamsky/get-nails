import axios from "axios";

class server {
  baseUrl = process.env.REACT_APP_BASE_URL;

  get(url) {
    console.log(`GET ${this.baseUrl}/${url}`)
    axios.get(`${this.baseUrl}/${url}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
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
    console.log(`POST ${this.baseUrl}/${url}`)
    axios.post(`${this.baseUrl}/${url}`, body, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
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