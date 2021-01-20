<template>
    <div class="row">
        <div class="col-3">
            <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <nuxt-link to="/settings/profile" class="mb-2 text-center nav-link active"><a>My Profle</a></nuxt-link>
                <nuxt-link to="/settings/account" class="mb-2 text-center nav-link"><a>My Account</a></nuxt-link>
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
            <div class="card shadow" id="v-pills-tabContent">
                <div class="card-header">
                    <div class="row align-items-center">
                        <div class="col-8">
                            <h3 class="mb-0">My profile </h3>
                        </div>
                        <div class="col-4 text-right">
                            <a href="#!" v-if="edit == true" @click.prevent="updateUser" class="btn btn-sm btn-primary   "><i class="fa fa-pencil"></i> Update</a>
                            <a href="#!" v-if="edit == true" @click.prevent="closeEdit" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Cancel</a>
                            <a href="#!" v-if="edit == false" class="btn btn-sm btn-success" @click.prevent="showEdit"><i class="fa fa-pencil"></i> Edit</a>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div v-if="edit == false">
                        <div class="form-group row" >
                            <label class="col-md-4 text-right">Name</label>
                            <div class="col-md-8">{{ profile.first_name }} {{ profile.last_name }}</div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-4 text-right">Bithday</label>
                            <div class="col-md-8">{{ profile.birthday }}</div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-4 text-right">Gender</label>
                            <div class="col-md-8">{{ profile.gender }}</div>
                        </div>
                    </div>
                    <div v-if="edit == true">
                        <div class="form-group row" >
                            <label class="col-md-4 text-right">First Name</label>
                            <div class="col-md-6">
                                <input type="text" v-model="user.first_name" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row" >
                            <label class="col-md-4 text-right">Last Name</label>
                            <div class="col-md-6">
                                <input type="text" v-model="user.last_name" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-4 text-right">Bithday</label>
                            <div class="col-md-6">
                                <input type="date" v-model="user.birthday" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-4 text-right">Gender</label>
                            <div class="col-md-6">
                                <select v-model="user.gender" class="form-control">
                                    <option value="">--Select Gender--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
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
            edit: false,
            user: {},
            loading: false,
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        },
        ...mapGetters({
            profile: 'user/profile',
        }),
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
        showEdit() {
            this.edit = true;
        },
        closeEdit() {
            this.edit = false;
        },
        updateUser() {
            let vm = this;
            vm.$nuxt.$loading.start();
            var data = {
                "field_first_name": [
                    {"value": this.user.first_name}
                ],
                "field_last_name": [
                    {"value": this.user.last_name}
                ],
                "field_gender": [
                    {"value": this.user.gender}
                ],
                "field_birthday": [
                    {"value": this.user.birthday}
                ],
            }
            let user = this.currentUser;
            api.updateResource('PATCH', '/user', user.uid, data).then(response => {
                vm.notifyResponse('User Updated Sucessfully.');
                vm.$nuxt.$loading.finish();
                vm.$store.commit('user/setProfile', response);
                vm.edit = false;
            }).catch(error => {
                vm.$nuxt.$loading.finish();
                vm.notifyResponse('Something went wrong, Please try again!!', 'error');
                vm.edit = false;
                // this.errors.record(error.data.errors);
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
    },
    mounted() {
        let vm = this;
        let user = this.currentUser;
        this.$store.dispatch('user/getProfile', user.uid).then(function(res) {
            if (res.field_first_name.length) {
                vm.user.first_name = res.field_first_name[0].value; 
            }
            if (res.field_last_name.length) {
                vm.user.last_name = res.field_last_name[0].value; 
            }
            if (res.field_gender.length) {
                vm.user.gender = res.field_gender[0].value; 
            }
            if (res.field_birthday.length) {
                vm.user.birthday = res.field_birthday[0].value; 
            }
        });
    }
}
</script>
