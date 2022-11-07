import {Schema, model} from 'mongoose'
import {Items} from '../interfaces/interfaces'

const DataListMaterials = new Schema({
  title: {
    type: String,
    default: "",
    trim: true
  },
  items: {
    type: [
      {
        title: String,
        image: String,
        href: String
      }
    ],
  }
}, {timestamps: true})

export default model("dataListMaterials", DataListMaterials)