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
  async getDetailCars(carId) {
    return await apiClient.get("/" + carId);
  },
};
