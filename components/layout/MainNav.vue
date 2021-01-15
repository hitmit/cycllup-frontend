<template>
    <nav class="navbar nav-bar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="#">Cycllup</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <template v-if="loggedIn">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/dashboard"><a>Dashboard</a></nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/users"><a>Users</a></nuxt-link>
                        </li>
                    </template>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul  class="navbar-nav ml-auto nav-group">
                    <!-- Authentication Links -->
                    <template v-if="loggedIn">
                        <li class="nav-item dropdown drop-down-menu">
                            <a class="nav-link dropdown-toggle selection" href="#" id="navbarUserDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-user" aria-hidden="true"></i> {{currentUser.name}}
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarUserDropdown">
                                <nuxt-link class="dropdown-item" :to="{ name: 'athlete-id', params: { id: currentUser.uid }}">
                                    <a>
                                        <span class="upload-activity app-icon icon-upload-activity"></span>
                                        My Profile
                                    </a>
                                </nuxt-link>
                                <nuxt-link class="dropdown-item" to="/settings/profile">
                                    <a>
                                    <span class="upload-activity-manual app-icon icon-upload-activity-manual"></span>
                                    Settings
                                    </a>
                                </nuxt-link>
                                <a class="dropdown-item"  @click.prevent="logout()" href="#">
                                    <span class="upload-route app-icon icon-upload-route"></span>
                                    Logout
                                </a>
                            </div>
                        </li>

                        <li class="nav-item dropdown drop-down-menu">
                            <a class="nav-link selection" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" @click.prevent="commmingSoon">
                                    <span class="upload-activity app-icon icon-upload-activity"></span>
                                    Upload activity
                                </a>
                                <a class="dropdown-item" href="#" @click.prevent="commmingSoon">
                                    <span class="upload-activity-manual app-icon icon-upload-activity-manual"></span>
                                    Add manual entry
                                </a>
                                <a class="dropdown-item" href="#" @click.prevent="commmingSoon">
                                    <span class="upload-route app-icon icon-upload-route"></span>
                                    Create a route
                                </a>
                                <nuxt-link class="dropdown-item" to="/posts/new">
                                    <a>
                                        <span class="create-post app-icon icon-create-post"></span>
                                        Create a post
                                    </a>
                                </nuxt-link>
                            </div>
                        </li>
                    </template>
                    <template v-if="loggedIn == false">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/login"><a>Login</a></nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/register"><a>Register</a></nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
import api from '@/helper/api';

export default {
    computed: {
        loggedIn() {
            return this.$store.state.auth.loggedIn;
        },
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        commmingSoon() {
            this.$swal({
                type: 'success',
                title: 'Comming Soon!!',
                showConfirmButton: false,
                timer: 3000
            });
        },
        async logout() {
            try {
                let vm = this;
                vm.$nuxt.$loading.start()

                // let logout_token = localStorage.getItem('logout_token');

                // var response  = await api.createResource('POST', '/user/logout?_format=json&token=' + logout_token);
                // vm.$auth.logout();
                this.$store.commit('auth/logoutSuccess')
                vm.$router.push('/');
                vm.$nuxt.$loading.finish()

            } catch (err) {
                console.log(err)
            }
        },
    }
}
</script>