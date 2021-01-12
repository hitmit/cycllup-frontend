<template>
  <div class="card mb-3">
        <div class="card-header">Social Stats</div>
        <div class="card-body">
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
                            <span class="heading">{{activitiesCount}}</span>
                            <span class="description">Activities</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['following', 'followers', 'activities'],
    data() {
        return {
            followingCount: this.following,
            followersCount: this.followers,
            activitiesCount: this.activities
        }
    }
}
</script>
