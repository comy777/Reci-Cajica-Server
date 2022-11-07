import { v2 } from 'cloudinary'
import { FileCloudinary } from '../interfaces/interfaces'
v2.config({
  api_key: process.env.API_KEY,
  cloud_name: process.env.CLOUD_NAME,
  api_secret: process.env.API_SECRET
})

export const getAllFilesCludinary = async () => {
  try {
    const resp = await v2.api.resources()
    const files: FileCloudinary[] = resp.resources
    const newData = getDataFiles(files)
    return newData
  } catch (error) {
    console.log(error)
  }
}

const getDataFiles = (data: FileCloudinary[]) => {
  const newData = data.map((item, i) => {
    const { width, height, folder, secure_url } = item
    const data = { width, height, folder, secure_url }
    return data
  })
  return newData
}