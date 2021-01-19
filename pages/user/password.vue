<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Reset Password</div>
                <form class="form-horizontal" v-on:submit.prevent="reset" method="POST">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="control-label">Email*</label>
                            <input class="form-control" type="email" required v-model="user.mail">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Send Password Reset Link</button>
                        <nuxt-link to="/login" class="btn btn-link">Login</nuxt-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['guest-user'],
    data() {
        return {
            loading: false,
            user: {
                mail: ''
            }
        }
    },
    methods: {
        reset() {
            let vm = this;
            vm.$nuxt.$loading.start()
            // this.loading = true;
            this.$store.dispatch('auth/reset', this.user).then(function (response) {
                vm.$nuxt.$loading.finish()
                vm.notifyResponse('Replacement login information has been send to your mail account.');
                vm.user = {};
            }).catch(function (error) {
                vm.$nuxt.$loading.finish()
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
