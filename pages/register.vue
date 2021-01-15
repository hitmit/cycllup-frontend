<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>
                <form class="form-horizontal" v-on:submit.prevent="register" method="POST">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="control-label">Email</label>
                            <input class="form-control" type="text" v-model="user.email">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Password</label>
                            <input class="form-control" type="password" v-model="user.password">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Register</button>
                        <nuxt-link to="/login" class="btn btn-link">Login</nuxt-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/helper/guestapi';

export default {
    middleware: ['guest-user'],
    data() {
        return {
            user: {},
            loading: false,
        }
    },
    methods: {
        register: function() {
            let vm = this;
            vm.$nuxt.$loading.start();
            var data = {
                "name": [{"value": this.user.email}],
                "pass": [{"value": this.user.password}],
                "mail": [{"value": this.user.email}],
                "roles": [{"target_id": "cyclist"}]
            }
            // this.notifyResponse('test');
            api.register('POST', '/cycllup/user/register', data)
            .then(response => {
                console.log(response);
                // vm.notifyResponse('User Created Sucessfully.');
                // vm.$router.push('/login');
                vm.$nuxt.$loading.finish();
                // vm.user = {};
            })
            .catch(error => {
                vm.$nuxt.$loading.finish();
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
    mounted () {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    }
}
</script>