<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>
                <form class="form-horizontal" v-on:submit.prevent="login" method="POST">
                    <div class="card-body">
                        <div class="form-group">
                            <label class="control-label">Username*</label>
                            <input class="form-control" type="text" v-model="user.name">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Password*</label>
                            <input class="form-control" type="password" v-model="user.pass">
                        </div>
                    </div>
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Login</button>
                        <nuxt-link to="/user/password" class="btn btn-link">Forgot your password?</nuxt-link>
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
                name: '',
                pass: ''
            }
        }
    },
    computed: {
    },
    methods: {
        login() {
            let vm = this;
            vm.$nuxt.$loading.start()
            // this.loading = true;
            this.$store.dispatch('auth/login', this.user).then(function (response) {
                vm.$nuxt.$loading.finish()
                // vm.$store.commit('auth/loginSuccess', response.data)
                vm.$router.push('/dashboard');
            }).catch(function (error) {
                vm.$nuxt.$loading.finish()
            });
        },
    },
    mounted () {
        this.$nextTick(() => {
            this.$nuxt.$loading.start()
            setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    }
}
</script>
