import axios from 'axios'

const factory_manager_workshop_services = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/workshop/',
    timeout: 5000,
    headers: {
        'Authorization': localStorage.getItem('access_token') ? "JWT " + localStorage.getItem('access_token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

factory_manager_workshop_services.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        // test for token presence, no point in sending a request if token isn't present
        if (localStorage.getItem('refresh_token') && error.response.status === 401 && error.response.statusText === "Unauthorized") {
            const refresh_token = localStorage.getItem('refresh_token');

            return factory_manager_workshop_services
                .post('/token/refresh/', { refresh: refresh_token })
                .then((response) => {

                    localStorage.setItem('access_token', response.data.access);
                    localStorage.setItem('refresh_token', response.data.refresh);

                    factory_manager_workshop_services.defaults.headers['Authorization'] = "JWT " + response.data.access;
                    originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                    return factory_manager_workshop_services(originalRequest);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        // specific error handling done elsewhere
        return Promise.reject({ ...error });
    }
);

export default factory_manager_workshop_services;