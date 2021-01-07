<template>
    <div>
        <div class="row">
            <div class="col-md-3">
                <div class="text-center">
                    <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar" />
                    <h6>Hitesh Mittal</h6>
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
                            <p>comming soon</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-3">
                    <div class="card-header">
                        Clubs
                    </div>
                    <div class="card-body">
                    </div>
                </div>
                <div class="card mb-3" id="athlete-profile">
                    <div class="card-body text-center">
                        <h3 class="mt-sm mb-md">
                            <div class="athlete-name">Hitesh Mittal</div>
                        </h3>
                        <ul class="list-stats text-center">
                            <li>
                                <a class="stat" href="/athletes/73696971/follows?type=following">
                                    <div class="stat-subtext">Following</div>
                                    <b class="stat-text">0</b>
                                </a>
                            </li>
                            <li>
                                <a class="stat" href="/athletes/73696971/follows?type=followers">
                                    <div class="stat-subtext">Followers</div>
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
export default {
    middleware: ['auth']
}
</script>
