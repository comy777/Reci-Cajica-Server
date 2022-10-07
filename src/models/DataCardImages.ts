import {Schema, model} from 'mongoose'

const DataCardImagesSchema = new Schema({
  title: {
    type: String,
    default: "",
    trim: true
  },
  body: {
    type: String,
    default: "",
    trim: true
  },
  image: {
    type: String,
    default: "",
    trim: true
  },
  path: {
    type: String,
    default: "details"
  },
  imageDetails: {
    type: String,
    default: "",
    trim: true
  }
}, {timestamps: true})

export default model("dataCardImages", DataCardImagesSchema)