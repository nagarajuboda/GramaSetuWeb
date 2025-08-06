import axios from "axios";
import { apiurl } from "../createAxiosInstance";
const SuperAdminService = {
  async GetAllStates() {
    const response = await apiurl.get("/SuperAdmin/GetALlStates");
    return response.data;
  },
  async AddState(obj) {
    const response = await apiurl.post("/SuperAdmin/AddState", obj);
    return response.data;
  },
};

export default SuperAdminService;
