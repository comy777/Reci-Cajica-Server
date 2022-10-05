import { Schema, model } from "mongoose";

const FormUser = new Schema(
  {
    first_name: {
      type: String,
      default: "",
      trim: true,
    },
    last_name: {
      type: String,
      default: "",
      trim: true,
    },
    msg: {
      type: String,
      required: [true, "El mensaje es requerido"],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "El correo electronico es requerido"],
      trim: true,
    },
    file: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default model("form", FormUser);
