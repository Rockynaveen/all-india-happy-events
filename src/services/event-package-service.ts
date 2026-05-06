import api from "../api/api";

export const submitEventPackage = (data) => {
    return api.post("/eventpackage", data);
};