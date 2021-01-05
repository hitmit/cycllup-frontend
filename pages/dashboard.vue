<template>
    <div class="row">
        <div class="col-md-3" id="dashboard-athlete-sidebar">
            <div class="card" id="athlete-profile">
                <div class="card-body text-center">
                    <h3 class="mt-sm mb-md">
                        <div class="athlete-name">Hitesh Mittal</div>
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
        </div>
        <div class="main col-md-6" id="dashboard-feed">
            <h1>Welcome to dashboard</h1>
        </div>
        <div class="sidebar col-md-3" id="dashboard-sidebar">
        </div>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
    },
    methods: {
        
    }
}
</script>
