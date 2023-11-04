import { getDataService, signOutUserService } from "../services/mainServices";

export const getDataAction = () => async () => {
  try {
    const response = await getDataService();
    const { data, status } = response;
    if (status === 200 && data?.data) {
      return response;
    }else{
      return response?.data;
    }
  } catch (err) {
    throw err;
  }
};

export const SignOutUserAction = () => async () => {
  try {
    const response = await signOutUserService();
    const { data, status } = response;
    if (status === 200 && data?.data) {
      return response;
    }else{
      return response?.data;
    }
  } catch (err) {
    throw err;
  }
};