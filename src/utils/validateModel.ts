import { DataAppInterface } from "../interfaces/interfaces";
import DataApp from "../models/DataApp";
import DataCardImages from "../models/DataCardImages";
import DataListMaterials from "../models/DataListMaterials";
import FormUser from "../models/FormUser";

export const validateFormUser = async (
  id: string,
  file?: string,
  url?: string,
  originalname?: string,
  extensionFile?: string,
  icon?: string) => {
  const formUser = await FormUser.findById(id);
  if (!formUser) return;
  if (file) {
    await FormUser.findByIdAndUpdate(id, { file, url, originalname, extensionFile, icon });
  }
  return true;
};

export const validateDataApp = async (data: DataAppInterface) => {
  if (data === "app") {
    return await DataApp.find({})
  }
  if (data === "card") {
    return await DataCardImages.find({})
  }
  if (data === "materials") {
    return await DataListMaterials.find({})
  }
  return []
}