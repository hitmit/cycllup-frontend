<template>
    <div class="row">
        <div class="col-md-3" id="">
            <div class="card mb-3 card-profile" id="athlete-profile">
                <div class="row justify-content-center">
                    <div class="card-profile-image">
                        <img src="~/assets/img/user.png" class="rounded-circle">
                    </div>
                </div>
                <div class="card-body">
                    <div class="row mt-5">
                        <div class="col text-center">
                            {{currentUser.name}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="card-profile-stats d-flex justify-content-center">
                                <div>
                                    <span class="heading">{{followingCount}}</span>
                                    <span class="description">Following</span>
                                </div>
                                <div>
                                    <span class="heading">{{followersCount}}</span>
                                    <span class="description">Followers</span>
                                </div>
                                <div>
                                    <span class="heading">0</span>
                                    <span class="description">Activities</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <ul class="nav nav-tabs m-2" id="myTab" role="tablist">
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
                <div class="tab-content m-3" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <p>comming soon</p>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        comming soon
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        comming soon
                    </div>
                </div>
            </div>
        </div>
        <div class="main col-md-6" id="dashboard-feed">
            <div class="card mb-3">
                <img class="card-img-top" src="https://d3nn82uaxijpm6.cloudfront.net/assets/onboarding/header_image-39d887c771c7094d2adeb4fe67589f471f70bb3fc26e66b69a7e4edf29f90ce6.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Getting Started</h5>
                    <p class="card-text">We’ve listed a couple of steps to help you get set up on cycllup.</p>
                </div>
            </div>
            <div class="card">
                <div class="media m-3">
                    <img class="mr-3" src="https://d3nn82uaxijpm6.cloudfront.net/assets/onboarding/mobile_app-ac2d2af9ceacf1b5d362ea3b4d7d7a42ef21e96c6a4677b6d1a5031704daa14e.jpg" height="150" width="150" alt="Generic placeholder image">
                    <div class="media-body">
                        <h5 class="mt-0">Get our free app</h5>
                        <p>Record, analyze and share activities right from your phone. Our free mobile app keeps you connected with friends and ready for the next workout.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <section class="section club" id="club-module">
                <div class="media">
                    <div class="media-object">
                        <img alt="" class="media-img" height="50" width="50" src="https://d3nn82uaxijpm6.cloudfront.net/assets/application/dashboard/sidebar-badge-clubs-dda5c075f23e3f2ced7d0e4b2afb87df988978962b6de33c7a232be53b6a75ca.png">
                    </div>
                    <div class="media-body">
                        <h6 class="text-subhead text-strong media-title">Clubs on cycllup</h6>
                        <p class="media-text">
                            Why do it alone? Get more out of your cycllup experience by joining or creating a Club.
                        </p>
                    </div>
                </div>
            </section>
            <hr/>
            <section class="section" id="invite-your-friend-module">
                <div class="media">
                    <div class="media-object">
                        <img alt="" class="media-img" height="50" width="50" src="https://d3nn82uaxijpm6.cloudfront.net/assets/application/dashboard/sidebar-badge-challenges-9908f45d44160c600a4f9d788795b180a74001daae32461705f5f57d90a7c651.png">
                    </div>
                    <div class="media-body">
                        <h6 class="text-subhead  text-strong media-title">Your Friends On cycllup</h6>
                        <p class="media-text">
                            Find and invite friends to see their adventures and share some encouragement.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>    
</template>

<script>
import { mapGetters } from "vuex";

export default {
    middleware: ['auth'],
    computed: {
        currentUser() {
            var user = localStorage.getItem('currentUser');
            return JSON.parse(user);
        },
        // ...mapGetters({
        //     followersCount: 'user/followersCount',
        //     followingCount: 'user/followingCount',
        // }),
    },
    data() {
        return {
            followersCount: 0,
            followingCount: 0
        }
    },
    methods: {
        
    },
    mounted() {
        let vm = this;
        let user = this.currentUser;
        this.$store.dispatch('user/getFollowers', user.uid);
        this.$store.dispatch('user/getFollowing', user.uid);
    }
}
</script>
