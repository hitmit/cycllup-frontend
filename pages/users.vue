<template>
    <div class="row justify-content-center">
        <div class="col-md-8 col-md-offset-2 mt-lg mb-xl" id="new-post">
            <div class="card">
                <div class="card-header">Users</div>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, key) in users" :key="user.uid" >
                                <template v-if="user.uid != currentUser.uid">
                                    <td >{{ key+1 }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>
                                        <template v-if="checkFollowing(user) != false">
                                            <a href="#" @click.prevent="confirmUnfollow(checkFollowing(user))" >UnFollow </a>
                                        </template>
                                        <template v-else>
                                            <a href="#" @click.prevent="confirmFollow(user)" >Follow</a>
                                        </template>
                                    </td>
                                </template>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal fade" id="follow-user" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" >
                        <h4 class="modal-title" id="myModalLabel">Follow</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
                    </div>
                    <div class="modal-body" v-if="followUser.name">
                        Are you sure you wanna follow  {{ followUser.name }} ?
                    </div>
                    <div class="modal-footer">
                        <div class="form-group">
                            <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">No</button>
                            <button type="button" class="btn btn-success btn-sm" @click.prevent="follow">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="unfollow-user" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" >
                        <h4 class="modal-title" id="myModalLabel">Unfollow</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
                    </div>
                    <div class="modal-body">
                        Are you sure you wanna unfollow this user ?
                    </div>
                    <div class="modal-footer">
                        <div class="form-group">
                            <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">No</button>
                            <button type="button" class="btn btn-success btn-sm" @click.prevent="unfollow">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import api from '@/helper/api';

export default {
    middleware: ['auth-user'],
    data() {
        return {
            users: [],
            followUser: {},
            flag_id: 0
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        ...mapGetters({
            following: 'user/following',
        }),
    },
    methods: {
        confirmFollow(item) {
            this.followUser = item;
            $("#follow-user").modal('show');
        },
        follow() {
            // this.followUser = item;
            let vm = this;
            vm.$nuxt.$loading.start();
            let user = this.currentUser;
            var data = {
                "flag_id": [
                    {"target_id": "following"}
                ],
                "entity_type": [
                    {"value": "user"}
                ],
                "global": [
                    {
                        "value": false
                    }
                ],
                "entity_id": [
                    {"value": this.followUser.uid}
                ],
                "uid": [{"target_id": user.uid}]
            }
            api.createResource('POST', '/entity/flagging', data).then(response => {
                vm.notifyResponse('You have started following: ' + vm.followUser.name);
                vm.$nuxt.$loading.finish();
                vm.followUser = {};
                vm.$store.dispatch('user/getFollowers', response.uid[0].target_id);
                vm.$store.dispatch('user/getFollowing', response.uid[0].target_id);
                $("#follow-user").modal('hide');
            }).catch(error => {
                vm.$nuxt.$loading.finish();
                vm.notifyResponse('Something went wrong, Please try again!!', 'error');
                $("#follow-user").modal('hide');
                // this.errors.record(error.data.errors);
            });
        },
        confirmUnfollow(item) {
            this.flag_id = item;
            $("#unfollow-user").modal('show');
        },
        unfollow() {
            // this.followUser = item;
            let vm = this;
            vm.$nuxt.$loading.start();
            let user = this.currentUser;
            api.deleteResource('DELETE', '/entity/flagging', + vm.flag_id).then(response => {
                let user = vm.currentUser;
                vm.notifyResponse('You have unfollowed this user');
                vm.$nuxt.$loading.finish();
                vm.$store.dispatch('user/getFollowers', user.uid);
                vm.$store.dispatch('user/getFollowing', user.uid);
                $("#unfollow-user").modal('hide');
            }).catch(error => {
                vm.$nuxt.$loading.finish();
                vm.notifyResponse('Something went wrong, Please try again!!', 'error');
                $("#unfollow-user").modal('hide');
                // this.errors.record(error.data.errors);
            });
        },
        checkFollowing(user) {
            let following = this.following;
            let alreadyFollowing = false
            let vm = this;
            let flag_id = 0
            following.forEach(element => {
                if (element.uid === user.uid) {
                    alreadyFollowing = true;
                    flag_id = element.id;
                }
            });
            if (alreadyFollowing) {
                return flag_id;
            }
            return alreadyFollowing;
        },
        notifyResponse(message, type='success', container='floating', timer=3000) { 
            this.$swal({
                type: type,
                title: message,
                showConfirmButton: false,
                timer: timer
            });
        }
    },
    mounted() {
        let vm = this;
        // this.$nuxt.$loading.start();
        api.getResources('GET', '/api/user/list').then(response => {
            vm.users = response;
            vm.$nuxt.$loading.finish();
        }).catch(error => {
            vm.$nuxt.$loading.finish();
        });

        let user = this.currentUser;
        this.$store.dispatch('user/getFollowing', user.uid);

    }
}
</script>
