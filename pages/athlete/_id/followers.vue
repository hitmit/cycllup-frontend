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
            <div class="col-md-8">
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
                                    <td>Follow/Unfollow</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
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
    </div>
</template>

<script>
import { mapGetters } from "vuex";
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
            userId: ''
        }
    },
    computed: {
        currentUser() {
            var user = localStorage.getItem('currentUser');
            return JSON.parse(user);
        },
        ...mapGetters({
            followersCount: 'user/followersCount',
            followingCount: 'user/followingCount',
            followers: 'user/followers'
        }),
    },
    mounted() {
        let uid = this.$route.params.id;
        this.userId = uid;
        this.$store.dispatch('user/getFollowers', uid);
        this.$store.dispatch('user/getFollowing', uid);
    }
}
</script>
