import FormUser from "../models/FormUser";

export const validateFormUser = async (id: string, file?: string) => {
  const formUser = await FormUser.findById(id);
  if (!formUser) return;
  if (file) {
    await FormUser.findByIdAndUpdate(id, { file });
  }
  return true;
};
