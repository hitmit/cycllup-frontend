<template>
    <div class="card mb-3 card-profile">
        <img src="~/assets/img/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
        <div class="row justify-content-center">
            <div class="card-profile-image">
                <img src="~/assets/img/user.png" class="rounded-circle">
            </div>
        </div>
        <div class="card-body">
            <div class="text-center mt-5">
                <h3>{{ currentUser.name }}</h3>
                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Clermont Ferrand, Auvergne, France</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currentUser() {
            var user = localStorage.getItem('currentUser');
            return JSON.parse(user);
        }
    }
}
</script>
