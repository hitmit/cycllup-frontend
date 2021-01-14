import axios from 'axios'

const siteURL = 'https://dev-cycllup.pantheonsite.io'

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
        console.log('dddd');
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
    },
    login(method, url, data) {
        return new Promise((resolve, reject) => {
            client({
                method,
                url: url,
                data,
                headers: {
                    "content-type": "application/json",
                    "cache-control": "no-cach"
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
}
