import axios from 'axios'

export const apiFaticon = axios.create({
  baseURL: process.env.API_FATICON_URL
})