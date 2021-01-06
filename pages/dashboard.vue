<template>
    <div class="row">
        <div class="col-md-3" id="dashboard-athlete-sidebar">
            <div class="card mb-3" id="athlete-profile">
                <div class="card-body text-center">
                    <h3 class="mt-sm mb-md">
                        <div class="athlete-name">{{ currentUser.name }}</div>
                    </h3>
                    <ul class="list-stats text-center">
                        <li>
                            <a class="stat" href="/athletes/73696971/follows?type=following"><div class="stat-subtext">Following</div>
                                <b class="stat-text">0</b>
                            </a>
                        </li>
                        <li>
                            <a class="stat" href="/athletes/73696971/follows?type=followers"><div class="stat-subtext">Followers</div>
                                <b class="stat-text">0</b>
                            </a>
                        </li>
                        <li>
                            <a class="stat" href="/athlete/training"><div class="stat-subtext">Activities</div>
                                <b class="stat-text">0</b>
                            </a>
                        </li>
                    </ul>
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
                    <p class="card-text">We’ve listed a couple of steps to help you get set up on Strava.</p>
                </div>
            </div>
            <div class="card">
                <div class="media m-3">
                    <img class="mr-3" src="https://d3nn82uaxijpm6.cloudfront.net/assets/onboarding/mobile_app-ac2d2af9ceacf1b5d362ea3b4d7d7a42ef21e96c6a4677b6d1a5031704daa14e.jpg" height="150" width="150" alt="Generic placeholder image">
                    <div class="media-body">
                        <h5 class="mt-0">Get our free app</h5>
                        <p>Record, analyze and share activities right from your phone. Our free mobile app keeps you connected with friends and ready for the next workout.</p>
                        <div class="inset upload-links">
                            <a href="https://itunes.apple.com/app/strava-cycling/id426826309?mt=8"><img alt="Download the Strava iOS App on the App Store" src="https://d3nn82uaxijpm6.cloudfront.net/assets/marketing/btn-app-store-ce6d7e854676cd9d99ca5d718bb8b55a3c579fc87783d0d1e2f7aff0307efd66.png"></a>
                            <a href="https://play.google.com/store/apps/details?id=com.strava"><img alt="Strava Android App on Google Play" src="https://d3nn82uaxijpm6.cloudfront.net/assets/marketing/btn-google-play-1af0a2be816284e40414957321dc112dc8ed3e1f7de6d3d0b0dad8787ed58028.svg"></a>
                        </div>
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
                        <h6 class="text-subhead text-strong media-title">Clubs on Strava</h6>
                        <p class="media-text">
                            Why do it alone? Get more out of your Strava experience by joining or creating a Club.
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
                        <h6 class="text-subhead  text-strong media-title">Your Friends On Strava</h6>
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
export default {
    middleware: ['auth'],
    computed: {
        currentUser() {
            console.log()
            var user = localStorage.getItem('currentUser');
            return JSON.parse(user);
        }
    },
    data() {
        return {
        }
    },
    methods: {
        
    }
}
</script>
