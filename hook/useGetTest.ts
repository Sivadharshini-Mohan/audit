import { apiService } from "@service/apiService";
import { useQuery } from "react-query";

const getData = () => {
  return apiService.get(`posts`);
};

export const useGetTest = () => {
  return useQuery("test", getData);
};
