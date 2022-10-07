import {Schema, model} from 'mongoose'

const DataAppSchema = new Schema({
  title: {
    type: String,
    default: "",
    trim: true,
  },
  body: {
    type: String,
    default: "",
    trim: true,
  },
  image: {
    type: String,
    default: "",
    trim: true,
  },
}, {timestamps: true})

export default model("appData", DataAppSchema)