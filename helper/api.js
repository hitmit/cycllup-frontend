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
            let tokenUrl =  siteURL + '/rest/session/token';
            axios.get(tokenUrl, {
                withCredentials: true
            }).then(response => {
                var user_token = localStorage.getItem('user_token');
                client({
                    method,
                    url: resource,
                    data,
                    withCredentials: true,
                    headers: {
                        'X-CSRF-Token': response.data,
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic '+ user_token
                    },
                    params: { _format: 'json' }
                }).then(response => {
                    resolve(response.data) 
                })
                .catch(error => {
                    reject(error.response)
                });
            })
            .catch(error => {
                reject(error.response)
            });
        })
    },
    getResources (method, url, data) {
        return this.execute(method, url, data)
    },
    getResource (method, url, id) {
        return this.execute(method, url + '/' + id)
    },
    createResource (method, url, data) {
        return this.execute(method, url, data)
    },
    updateResource (method, url, id, data) {
        return this.execute(method, url + '/' + id, data)
    },
    deleteResource (method, url, id) {
        return this.execute(method, url + '/' + id)
    },
    deleteResources (method, url, data) {
        return this.execute(method, url, data)
    }
}
