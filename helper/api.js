import axios from 'axios'

const client = axios.create({
    baseURL: 'https://dev-cycllup.pantheonsite.io',
    json: true
});

export default {

    async execute (method, resource, data) {
        return new Promise((resolve, reject) => {
            // inject the accessToken for each request
            let accessToken = localStorage.getItem('auth._token.local');
            client({
                method,
                url: resource,
                data,
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": `${accessToken}`,
                    "withCredentials": true
                }
            }).then(response => {
                resolve(response.data) 
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
}
