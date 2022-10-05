import { uploadBytes, ref } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { storageFirebase } from "../firebase/config";

export const uploadFileFirebase = async (file: Express.Multer.File) => {
  try {
    const { refData, id } = createRef();
    const { buffer } = file;
    await uploadBytes(refData, buffer);
    return id;
  } catch (error) {
    console.log(error);
  }
};

const createRef = () => {
  const id = uuid();
  const refData = ref(storageFirebase, `uploads/${id}`);
  return { refData, id };
};
