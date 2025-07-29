import axios from "axios";
import { apiurl } from "../createAxiosInstance";
const AuthService = {
  async FcnLogin(obj) {
    const response = await apiurl.post("/User/GetOTP", obj);
    return response.data;
  },
  async FcnVerifyOtp(obj) {
    const response = await apiurl.post("/User/VerifyOtp", obj);
    return response.data;
  },
};
export default AuthService;
