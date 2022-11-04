import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://carsys24.com:8881/api/GetCars",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const dealerId = 27;

export default {
  getCars() {
    return apiClient.get("/" + dealerId);
  },
  // getDetailCars(carId) {
  //   return apiClient.get("/" + carId);
  // },
  async getDetailCars(carId) {
    try {
      const res = await apiClient.get("/" + carId);
      console.log('resIst', res);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
