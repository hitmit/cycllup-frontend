<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <div class="text-center">
                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar" />
                    <h6>{{ currentUser.name }}</h6>
                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Clermont Ferrand, Auvergne, France</p>
                </div>
            </div>
            <div class="col-md-9">
                <section class="activity-summary-v2">
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
                </section>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <ul class="nav nav-tabs m-2" id="myTab2" role="tablist">
                        <li class="nav-item active">
                            <a class="nav-link active" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">
                                Overview
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="false">
                                Trophy Case
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="false">
                                Following
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="false">
                                Followers
                            </a>
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
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                            <div class="card-body">
                                <p>comming soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
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
                <div class="card mb-3">
                    <div class="card-header">
                        Clubs
                    </div>
                    <div class="card-body">
                    </div>
                </div>
                

        


                <div class="card mb-3">
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
        ...mapGetters({
            followersCount: 'user/followersCount',
            followingCount: 'user/followingCount',
        }),
    },
    mounted() {
        let vm = this;
        let user = this.currentUser;
        this.$store.dispatch('user/getFollowers', user.uid);
        this.$store.dispatch('user/getFollowing', user.uid);
    }
}
</script>
