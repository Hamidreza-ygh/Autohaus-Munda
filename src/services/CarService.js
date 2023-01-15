import axios from "axios";

const apiClient = axios.create({
  // baseURL: "https://carsys24.at:8881/api/GetCars",
  baseURL: "http://213.143.118.8:8881/api/GetCars",
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
      const mainRes = await this.getCars();
      const objectedRes = mainRes.data.Cars.reduce(function (r, a) {
        r[a.CarID] = r[a.CarID] || [];
        r[a.CarID].push(a);
        return r;
      }, Object.create(null));
      const res = await apiClient.get("/" + carId);
      let outList = [];
      let outMap = objectedRes[carId][0];
      res.data.Cars[0].Images.forEach(i => {
          let innerMap = {};
          innerMap["imageSrc"] = i;
          outList.push(innerMap);
      });
      outMap["images"] = outList;
      console.log('resIst', res);
      console.log('outMap', outMap);
      return outMap;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
