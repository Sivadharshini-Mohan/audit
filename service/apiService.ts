import axios, { AxiosResponse } from "axios";

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": true,
};

export const apiService = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers,
});

const requestHandler = async (request: any) => {
  //   const accessToken = sessionStorage.getItem("token");
  //   if (accessToken) {
  //     request.headers.Authorization = accessToken;
  //   }
  return request;
};

const responseHandler = (response: AxiosResponse): AxiosResponse => {
  return response;
};

// export const logout = () => {
//   sessionStorage.removeItem("token");
//   sessionStorage.removeItem("userName");
//   window.location.href = "/";
// };
const errorHandler = (error: any) => {
  //   if (error.response.status === 403) {
  //     logout();
  //   }
  return Promise.reject(error?.response);
};

apiService.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

apiService.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);
