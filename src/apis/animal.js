import axios from 'axios'

const apianimais = axios.create({
  baseURL: 'https://django-pi-j444-dev.fl0.io/animais/'
})

export default apianimais
