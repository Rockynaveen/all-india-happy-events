import api from "../api/api";
import type { EventRequest } from "../types/event-types";

export const createEventRequest = async (data: EventRequest) => {
  const res = await api.post("/eventpackage", data);
  return res.data;
};

