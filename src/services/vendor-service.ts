import Api from "../api/axios";

// ✅ Types (optional but recommended)
export interface Vendor {
  id: number;
  slug: string;
  brand_name: string;
  thumbnail: string;
  per_day_price: number;
  rating: number;
  total_reviews: number;
  is_premium: boolean;
  menus: { name: string }[];
  address: {
    city_id: string;
    state_id: string;
  };
}

// ✅ Get all vendors
export const getVendors = async (): Promise<Vendor[]> => {
  const res = await Api.get("/vendors");

  return res.data.data.vendors; // based on your API
};

// ✅ Get single vendor
export const getVendorById = async (id: number) => {
  return Api.get(`/vendors/${id}`);
};