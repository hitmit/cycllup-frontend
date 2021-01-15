<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <Profile />
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-body">
                        <div class="activity-count">
                            <h3 class="text-footnote">Last 4 Weeks</h3>
                            <div class="count-total">
                                <div class="count text-display5">0</div>
                                <div class="count-label">Total Activities</div>
                            </div>
                        </div>
                        <div class="activity-calendar">
                            <h3 class="vh">Calendar</h3>
                        </div>
                        <div class="activity-breakdown">
                            <h3 class="vh">Hourly breakdown per week</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                <div class="nav-wrapper">
                    <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="myTab2" role="tablist">
                        <li class="nav-item">
                            <nuxt-link :to="{ name: 'athlete-id', params: { id: userId }}" class="nav-link">
                                <a>Overview</a>
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="false">
                                Trophy Case
                            </a>
                        </li>
                        <li class="nav-item">
                            <nuxt-link :to="{ name: 'athlete-id-following', params: { id: userId }}" class="nav-link">
                                <a>Following</a>
                            </nuxt-link>
                        </li>
                        <li class="nav-item active">
                            <nuxt-link :to="{ name: 'athlete-id-followers', params: { id: userId }}" class="nav-link active">
                                <a>Followers</a>
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="false">
                                KOMs / CRs
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="false">
                            Local Legends
                            </a>
                        </li>
                        <li class="nav-item">
                            <nuxt-link :to="{ name: 'athlete-id-posts', params: { id: userId }}" class="nav-link">
                                <a>Posts</a>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="card shadow">
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
                                <tr v-for="(follower, key) in followers" :key="follower.uid">
                                    <td>{{key+1}}</td>
                                    <td>
                                        <nuxt-link :to="{ name: 'athlete-id', params: { id: follower.uid }}" >
                                            {{follower.name}}
                                        </nuxt-link>
                                    </td>
                                    <td >
                                        <template v-if="checkFollowing(follower)">
                                            <span> Already Following</span>
                                        </template>
                                        <template v-else>
                                            Follow Back
                                        </template>
                                    </td>
                                </tr>
                                <tr v-if="!followers.length">
                                    <td colspan="3">No Followers found!!</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <SocialStats :following="followingCount" :followers="followersCount" :activities="0" />
            
                <Clubs />

                <div class="nav-wrapper">
                    <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="myTab2" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fa fa-paw" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fa fa-bicycle" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                <i class="fa fa-tint" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="card shadow">
                    <div class="card-body">
                        comming soon
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="follow-back" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" >
                        <h4 class="modal-title" id="myModalLabel">Follow Back</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
                    </div>
                    <div class="modal-body" v-if="followUser.name">
                        Are you sure you wanna follow {{ followUser.name }} ?
                    </div>
                    <div class="modal-footer">
                        <div class="form-group">
                            <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">No</button>
                            <button type="button" class="btn btn-success btn-sm" @click.prevent="followBack">Yes</button>
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
import Profile from '@/components/athlete/Profile';
import SocialStats from '@/components/athlete/SocialStats';
import Clubs from '@/components/athlete/Clubs';

export default {
    middleware: ['auth-user'],
    components: {
        Profile,
        SocialStats,
        Clubs
    },
    data() {
        return {
            userId: '',
            followUser: {}
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        ...mapGetters({
            followersCount: 'user/followersCount',
            followingCount: 'user/followingCount',
            followers: 'user/followers',
            following: 'user/following',
        }),
    },
    methods: {
        confirmFollowBack(item) {
            this.followUser = item;
            $("#follow-back").modal('show');
        },
        followBack() {
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
                vm.$store.dispatch('user/getFollowers', vm.user.uid);
                vm.$store.dispatch('user/getFollowing', vm.user.uid);
                $("#follow-back").modal('hide');
            }).catch(error => {
                vm.$nuxt.$loading.finish();
                vm.notifyResponse('Something went wrong, Please try again!!', 'error');
                $("#follow-back").modal('hide');
                // this.errors.record(error.data.errors);
            });
        },
        checkFollowing(follower) {
            let following = this.following;
            let alreadyFollowing = false

            following.forEach(element => {

                if (element.uid === follower.uid) {
                    alreadyFollowing = true;
                }
            });

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
        let uid = this.$route.params.id;
        this.userId = uid;
        this.$store.dispatch('user/getFollowers', uid);
        this.$store.dispatch('user/getFollowing', uid);
    }
}
</script>
