<template>
    <div class="container">
        <h1 class="text-center m-3">
            The #1 app for runners and cyclists
        </h1>
        <div class="row">
            <div class="col-md-5 col-md-offset-1 m-3">
                <div class="text-center devices-image">
                    <img alt="" src="~/assets/img/home-banner.jpg" />
                </div>
            </div>
            <div class="col-md-5 m-3">
                <div class="signup-form-group">
                    <div class="signup-form">
                        <a class="signup-button facebook-signup-button btn btn-default btn-block" href="#">
                            Sign up with Facebook
                        </a>
                        <a class="signup-button google-signup-button btn btn-default btn-block" href="#">
                            Sign up with Google
                        </a>

                        <div class="hr text-center">
                            <div class="hr-text">or</div>
                        </div>
                        <nuxt-link class="signup-button email-signup-button btn btn-default btn-block" to="/register">
                            <a>Use my email</a>
                        </nuxt-link>
                        <div class="disclaimer-text text-center m-3">
                            <p>
                                By signing up for Cycllup, you agree to the <a href="#">Terms of Service</a>.
                                View our <a href="#">Privacy Policy</a>.
                            </p>
                            <p>
                                Already a Member?
                                <nuxt-link to="/login"><a>Log In</a></nuxt-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>
<style>
    body {
        background: #FFF;
    }
</style>