import { create } from "zustand";

export type EventRequest = {
  name: string;
  phone: string;
  email: string;
  event_date: string;
  message: string;
};

type Store = {
  requests: EventRequest[];
  addRequest: (data: EventRequest) => void;
};

export const useEventRequestStore = create<Store>((set) => ({
  requests: [],
  addRequest: (data) =>
    set((state) => ({
      requests: [...state.requests, data],
    })),
}));
