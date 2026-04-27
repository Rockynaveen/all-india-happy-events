import axios from "axios";

export const fetchRealWeddings = async () => {
  const res = await axios.get(
    "https://allhappyevents.jbservices.in/api/real-weddings"
  );

  return res.data?.data || [];
};