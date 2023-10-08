import axios from 'axios'

const api = axios.create({
  baseURL: 'https://django-pi-j444-dev.fl0.io/'
})

export default api