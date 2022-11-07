import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { storageFirebase } from "../firebase/config";

export const uploadFileFirebase = async (file: Express.Multer.File) => {
  try {
    const { buffer, originalname } = file;
    const extension = getExtensionFile(originalname)
    const { refData, id } = createRef(extension);
    await uploadBytes(refData, buffer);
    const url = await getUrlFile(id, extension)
    return { id, url, originalname, extension };
  } catch (error) {
    console.log(error);
  }
};

const createRef = (extension: string) => {
  const id = uuid();
  const refData = ref(storageFirebase, `uploads/${id}.${extension}`);
  return { refData, id };

};

export const getUrlFile = async (id: string, extension: string) => {
  try {
    const refFile = ref(storageFirebase, `uploads/${id}.${extension}`)
    const resp = await getDownloadURL(refFile)
    return resp
  } catch (error) {
    console.log(error)
    return ""
  }
}

const getExtensionFile = (file: string) => {
  const nameSplit = file.split(".")
  const extension = nameSplit[nameSplit.length - 1]
  return extension
}