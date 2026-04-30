import axios from "axios";

export const getVendorById = (id: number) => {
  return axios.get(
    `https://allhappyevents.jbservices.in/api/vendors/${id}`
  );
};