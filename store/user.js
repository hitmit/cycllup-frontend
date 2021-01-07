import api from '@/helper/api'

export const state = () => ({
    following: [],
    followers: []
})

export const getters = {
    followers: (state) => {
        console.log(state.followers)
        return state.followers
    },
    following: (state) => {
        console.log(state.following)
        return state.following
    },
    followersCount: (state) => {
        return state.followers.length
    },
    followingCount: (state) => {
        return state.following.length
    }
}

export const mutations = {
    loginSuccess(state, payload) {
        localStorage.setItem('user', payload.current_user);
        localStorage.setItem('logout_token', payload.logout_token);
        localStorage.setItem('csrf_token', payload.csrf_token);
    },
    logoutSuccess(state) {
        localStorage.removeItem('user');
        localStorage.removeItem('logout_token');
        localStorage.removeItem('csrf_token');
    },
    setFollowers(state, followers) {
        state.followers = followers;
    },
    setFollowing(state, following) {
        state.following = following
    }
}

export const actions = {
    getFollowers (context, user_id) {
        return new Promise((resolve, reject) => {
            api.getResources('get', '/api/followers/' + user_id + '?_format=json')
            .then(function (response) {
                context.commit('setFollowers', response);
                resolve(response)
            }).catch(function (error) {
                reject(error)
            })
        })
    },
    getFollowing (context, user_id) {
        return new Promise((resolve, reject) => {
            api.getResources('get', '/api/following/' + user_id + '?_format=json')
            .then(function (response) {
                context.commit('setFollowing', response);
                resolve(response)
            }).catch(function (error) {
                reject(error)
            })
        })
    }
}
