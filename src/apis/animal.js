import axios from 'axios'

const apianimais = axios.create({
  baseURL: 'http://192.168.0.173:19003/animais/'
})

export default apianimais
