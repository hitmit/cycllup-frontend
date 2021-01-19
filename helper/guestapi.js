import axios from 'axios'
import config from './config';

const siteURL = config.drupal_url;

const client = axios.create({
    baseURL: siteURL,
    json: true
});
export default {
    async execute(method, resource, data) {
        return new Promise((resolve, reject) => {
            client({
                method,
                url: resource,
                data,
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                },
                params: { _format: 'json' }
            }).then(response => {
                resolve(response.data) 
            })
            .catch(error => {
                reject(error.response)
            });
        })
    },
    login(method, url, data) {
        return this.execute(method, url, data)
    },
    register(method, url, data) {
        return this.execute(method, url, data)
    },
    reset(method, url, data) {
        return this.execute(method, url, data)
    },
    resetPass(method, url, data) {
        return this.execute(method, url, data)
    }
}
