import { axiosConfig } from "../../axios.config";

axiosConfig.interceptors.request.use((req) => {
    if (localStorage.getItem('access_token')) {
        const token: string | null = localStorage.getItem('access_token');
        req.headers['Authorization'] = 'Bearer ${token}';
        return req;
    }
    return req;
});
