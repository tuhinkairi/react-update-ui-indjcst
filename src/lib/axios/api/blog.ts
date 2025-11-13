import { axiosClient } from "../axios-client";

export const fetchBlog = async () => {
    try {
        const response = await axiosClient.post("/blogFetch");
        // console.log(response.data.blogList)
        return response.data.blogList; 
    } catch (error) {
        throw new Error(`Failed to fetch archive: ${error}`);
    }
}

export const fetchTag = async () => {
    try {
        const response = await axiosClient.post("/tagFetch");
        // console.log(response.data.tagsList)
        return response.data.tagsList; 
    } catch (error) {
        throw new Error(`Failed to fetch archive: ${error}`);
    }
}