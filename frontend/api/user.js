import { BASE_PATH } from "../utils/constants";

export function registerApi(formData) {
  try {
    const url = `${BASE_PATH}/auth/local/register`;
  } catch (error) {
    console.log(error);
    return null;
  }
}
