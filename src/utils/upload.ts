import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { storageFirebase } from "../firebase/config";

export const uploadFileFirebase = async (file: Express.Multer.File) => {
  try {
    const { refData, id } = createRef();
    const { buffer } = file;
    await uploadBytes(refData, buffer);
    const url = await getUrlFile(id)
    return {id, url};
  } catch (error) {
    console.log(error);
  }
};

const createRef = () => {
  const id = uuid();
  const refData = ref(storageFirebase, `uploads/${id}`);
  return { refData, id };
  
};

export const getUrlFile = async (id: string) => {
  try {
    const refFile = ref(storageFirebase, id)
    const resp = await getDownloadURL(refFile)
    return resp
  } catch (error) {
    console.log(error)
    return ""
  }
}