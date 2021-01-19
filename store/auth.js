import api from '@/helper/guestapi'
import { getLocalUser } from "@/helper/auth";
import axios from 'axios'

const user = getLocalUser();

export const state = () => ({
    loggedIn: !!user,
    user: user,
})

export const getters = {
    
}

export const mutations = {
    loginSuccess(state, payload) {
        var response = payload.response
        var cred = payload.data
        var str = cred.name + ":" + cred.pass;
        state.user = response.current_user;
        state.loggedIn = true;
        localStorage.setItem('user', JSON.stringify(response.current_user));
        localStorage.setItem('logout_token', response.logout_token);
        localStorage.setItem('csrf_token', response.csrf_token);
        localStorage.setItem('user_token', btoa(str));
    },
    logoutSuccess(state) {
        state.loggedIn = false;
        localStorage.removeItem('user');
        localStorage.removeItem('logout_token');
        localStorage.removeItem('csrf_token');
        localStorage.removeItem('user_token');
    }
}

export const actions = {
    login (context, data) {
        return new Promise((resolve, reject) => {
            api.login('post', '/user/login', data)
            .then(function (response) {
                context.commit('loginSuccess', {response: response, data: data});
                resolve(response)
            }).catch(function (error) {
                reject(error)
            })
        })
    },
    register (context, data) {
        return new Promise((resolve, reject) => {
            api.register('post', '/user/register', data)
            .then(function (response) {
                context.commit('loginSuccess', {response: response, data: data});
                resolve(response)
            }).catch(function (error) {
                reject(error)
            })
        })
    },
    reset (context, data) {
        return new Promise((resolve, reject) => {
            api.reset('post', '/user/password', data)
            .then(function (response) {
                resolve([])
            }).catch(function (error) {
                reject(error)
            })
        })
    },
    resetPass (context, data) {
        return new Promise((resolve, reject) => {
            api.resetPass('post', '/cycllup/reset/pass', data)
            .then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            })
        })
    },
}
