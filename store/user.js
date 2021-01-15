import api from '@/helper/api'

export const state = () => ({
    following: [],
    followers: [],
    profile: {}
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
    },
    profile: (state) => {
        return state.profile
    }
}

export const mutations = {
    setFollowers(state, followers) {
        state.followers = followers;
    },
    setFollowing(state, following) {
        state.following = following
    },
    setProfile(state, user) {
        var first_name = '';
        var last_name = '';
        var gender = '';
        var birthday = '';
        if (user.field_first_name.length) {
            first_name = user.field_first_name[0].value; 
        }
        if (user.field_last_name.length) {
            last_name = user.field_last_name[0].value; 
        }
        if (user.field_gender.length) {
            gender = user.field_gender[0].value; 
        }
        if (user.field_birthday.length) {
            birthday = user.field_birthday[0].value; 
        }
        state.profile = {
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthday: birthday,
        };
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
    },
    getProfile (context, user_id) {
        return new Promise((resolve, reject) => {
            api.getResource('get', '/user', user_id)
            .then(function (response) {
                context.commit('setProfile', response);
                resolve(response)
            }).catch(function (error) {
                reject(error)
            })
        })
    },
    getPosts (context, user_id) {
        return new Promise((resolve, reject) => {
            api.getResources('get', '/api/posts/' + user_id)
            .then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            })
        })
    }
}
