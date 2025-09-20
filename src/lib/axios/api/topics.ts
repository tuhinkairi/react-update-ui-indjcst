import type { TopicsResponse } from "../../../types/Api";
import { axiosClient } from "../axios-client";

export const fetchTopics = async ():Promise<TopicsResponse> => {
    try {
        const response = await axiosClient.post("/topics");
        // console.log(response.data.blogList)
        return response.data.data; 
    } catch (error) {
        throw new Error(`Failed to fetch archive: ${error}`);
    }
}