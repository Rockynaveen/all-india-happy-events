


import axios from "axios";

export const fetchBlogs = async () => {
    const res = await axios.get(
        "https://allhappyevents.jbservices.in/api/blogs"
    );

    return res.data; // ✅ IMPORTANT
};