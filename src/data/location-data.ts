import type { Location } from "../types/location-type";

// Images
import loc1 from "../assets/images/locations/location_1.jpg";
import loc2 from "../assets/images/locations/location_2.jpg";
import loc3 from "../assets/images/locations/loaction_3.jpg";
import loc4 from "../assets/images/locations/location_4.jpg";
import loc5 from "../assets/images/locations/location_5.jpg";
import loc6 from "../assets/images/locations/location_6.jpg";

export const locations: Location[] = [
    { name: "Hyderabad", listings: "120+ Listings", image: loc1 },
    { name: "Vijayawada", listings: "95+ Listings", image: loc2 },
    { name: "Tirupati", listings: "150+ Listings", image: loc3 },
    { name: "Rajahmundry", listings: "80+ Listings", image: loc4 },
    { name: "Vizag", listings: "200+ Listings", image: loc5 },
    { name: "Warangal", listings: "110+ Listings", image: loc6 }
];