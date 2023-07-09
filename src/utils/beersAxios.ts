import Axios from 'axios'

const beersAxios = Axios.create({
  baseURL: process.env.BACKEND_URL || 'https://api.punkapi.com/v2/',
})

export default beersAxios
