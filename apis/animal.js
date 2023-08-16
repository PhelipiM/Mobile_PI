import axios from 'axios'

const apianimais = axios.create({
  baseURL: 'http://191.52.55.58:19003/animais/'
})

export default apianimais