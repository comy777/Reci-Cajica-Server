import { model, Schema } from 'mongoose'

const TokenFaticonSchema = new Schema({
  token: {
    type: String,
    required: [true, 'El token es requerido']
  },
  expires: {
    type: Number,
    required: [true, "Fecha de expiracion requerida"]
  },
  created: {
    type: Date,
    required: [true, "La fecha de creacion es requerida"]
  }
})

export default model("token", TokenFaticonSchema)