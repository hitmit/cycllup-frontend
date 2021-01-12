import axios from 'axios'

const client = axios.create({
    baseURL: 'https://dev-cycllup.pantheonsite.io',
    json: true
});

export default {

    async execute (method, resource, data) {
        return new Promise((resolve, reject) => {
            // inject the accessToken for each request
            let accessToken = localStorage.getItem('csrf_token');
            // let accessToken = 'xNfOjjdou42JF6H313GSb2ABkSJj5N1UD6e3RGG9OXA';
            client({
                method,
                url: resource,
                data,
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token":accessToken,
                    "cache-control": "no-cach"
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
    createResource (method, url, data, format='json') {
        console.log('dddd');
        return this.execute(method, url + '?_format=' + format, data)
    },
    updateResource (method, url, id, data, format='json') {
        return this.execute(method, url + '/' + id + '?_format=' + format, data)
    },
    deleteResource (method, url, id) {
        return this.execute(method, url + '/' + id)
    },
    deleteResources (method, url, data) {
        return this.execute(method, url, data)
    },
}
