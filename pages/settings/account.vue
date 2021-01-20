<template>
    <div class="row">
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <nuxt-link to="/settings/profile" class="mb-2 text-center nav-link"><a>My Profle</a></nuxt-link>
                <nuxt-link to="/settings/account" class="mb-2 text-center nav-link active"><a>My Account</a></nuxt-link>
                <a class="mb-2 text-center nav-link" @click.prevent="commmingSoon">My Performance</a>
                <a class="mb-2 text-center nav-link" @click.prevent="commmingSoon">Display Perferences</a>
                <a class="mb-2 text-center nav-link" @click.prevent="commmingSoon">Privacy Controls</a>
                <a class="mb-2 text-center nav-link" @click.prevent="commmingSoon">Data Permissions</a>
                <a class="mb-2 text-center nav-link" @click.prevent="commmingSoon">Email Notifications</a>
                <a class="mb-2 text-center nav-link" @click.prevent="commmingSoon">My Gear</a>
                <a class="mb-2 text-center nav-link" @click.prevent="commmingSoon">Partnet Integration</a>
                <a class="mb-2 text-center nav-link" @click.prevent="commmingSoon">My Badges</a>
            </div>
        </div>
        <div class="col-md-9">
            <div class="card shadow">
                <div class="card-header">
                    <div class="row align-items-center">
                        <div class="col-8">
                            <h3 class="mb-0">My profile </h3>
                        </div>
                        <div class="col-4 text-right">
                            <a href="#!" @click.prevent="updatePassword" class="btn btn-sm btn-primary   "><i class="fa fa-pencil"></i> Update</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group" >
                        <label class="control-label">Current Password</label>
                        <input type="password" v-model="user.current_pass.value" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label class="control-label">New Password</label>
                        <input type="password" v-model="user.pass.value" class="form-control" />
                    </div>
                    <div class="form-group ">
                        <label class="control-label">Confirm Password</label>
                        <input type="password" v-model="user.confirm_pass.value" class="form-control" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/helper/api';
import { mapGetters } from "vuex";

export default {
    middleware: ['auth-user'],
    data() {
        return {
            user: {
                "current_pass": { "value": ""}, 
                "pass": { "value": ""},
                "confirm_pass": { "value": ""}, 
            },
            loading: false,
        }
    },
    computed: {
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
        updatePassword() {
            let vm = this;
            vm.$nuxt.$loading.start();
            api.createResource('POST', '/cycllup/user/password', this.user).then(response => {
                vm.notifyResponse(response.data.message);
                vm.$nuxt.$loading.finish();
                vm.user = {}
            }).catch(error => {
                vm.$nuxt.$loading.finish();
                vm.notifyResponse(error.data.message, 'error');
            });
        },
        notifyResponse(message, type='success', container='floating', timer=3000) { 
            this.$swal({
                type: type,
                title: message,
                showConfirmButton: false,
                timer: timer
            });
        }
    }
}
</script>
