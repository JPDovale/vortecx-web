import axios, {
	type AxiosHeaders,
	type AxiosInstance,
	type AxiosRequestConfig,
} from "axios";
import type { Response } from "./responses/response";

const api: AxiosInstance = axios.create({
	baseURL: "https://jpdovale.vercel.app/api",
	withCredentials: true,
});

api.interceptors.response.use(
	(res) => res,
	(error) => {
		if (error.response?.data) {
			return Promise.resolve({
				message: error.response.data,
				status: error.response.status,
			});
		}

		const err = {
			message: "Não foi possível se conectar com o servidor!",
			status: 500,
		};

		return Promise.resolve(err);
	},
);

const connection = {
	setDefaultBearerToken: (token: string) => {
		api.defaults.headers.Authorization = `Bearer ${token}`;
	},

	get: <T>(url: string, config?: AxiosRequestConfig) =>
		api.get<unknown, Response<T, AxiosHeaders>>(url, config),

	post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
		api.post<unknown, Response<T, AxiosHeaders>>(url, data, config),

	put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
		api.put<unknown, Response<T, AxiosHeaders>>(url, data, config),

	patch: <T>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
		api.patch<unknown, Response<T, AxiosHeaders>>(url, data, config),

	delete: <T>(url: string, config?: AxiosRequestConfig) =>
		api.delete<unknown, Response<T, AxiosHeaders>>(url, config),
};

export { api, connection };
