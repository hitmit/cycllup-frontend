import api from '@/helper/api'

export const state = () => ({
    following: [],
    followers: []
})

export const getters = {
    followers: (state) => {
        return state.followers
    },
    following: (state) => {
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
            api.getResources('get', '/api/followers/' + user_id)
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
            api.getResources('get', '/api/following/' + user_id)
            .then(function (response) {
                context.commit('setFollowing', response);
                resolve(response)
            }).catch(function (error) {
                reject(error)
            })
        })
    }
}
