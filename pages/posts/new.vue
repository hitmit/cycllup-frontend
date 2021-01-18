<template>
    <div class="row justify-content-center">
        <div class="col-md-8 col-md-offset-2 mt-lg mb-xl" id="new-post">
            <div class="card">
                <div class="card-header">
                    <div class="row align-items-center">
                        <div class="col-8">
                            <h3 class="mb-0">New Post </h3>
                        </div>
                        <div class="col-4 text-right">
                            <button type="button" @click.prevent="discardPost" class="btn btn-sm btn-danger"><i class="fa fa-ban"></i> Cancel</button>
                            <button type="button" @click.prevent="savePost" class="btn btn-sm btn-success"><i class="fa fa-plus"></i> Save</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="title" class="control-label">Title</label>
                        <input type="text" class="form-control" placeholder="Add a title" v-model="post.title" />
                    </div>
                    <div class="form-group">
                        <label for="title" class="control-label">Body</label>
                        <textarea class="form-control" placeholder="Whats going on?" v-model="post.body"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/helper/api';

export default {
    middleware: ['auth-user'],
    data() {
        return {
            post: {}
        }
    },
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    methods: {
        discardPost() {
            var r =confirm('Changes that you made may not be saved.')
            if (r == true) {
                this.$router.push('/dashboard');
            }
        },
        savePost() {
            let vm = this;
            vm.$nuxt.$loading.start();
            let user = this.currentUser;
            var data = {
                "type": [
                    {"target_id": "article"}
                ],
                "title": [
                    {"value": this.post.title}
                ],
                "body": [
                    {"value": this.post.body, "format": "basic_html"}
                ],
                // "uid": [{"target_id": user.uid}]
            }
            
            api.createResource('POST', '/node', data).then(response => {
                vm.notifyResponse('Post Created Sucessfully.');
                vm.$router.push("/athlete/" + user.uid  + "/posts")
                vm.$nuxt.$loading.finish();
            }).catch(error => {
                vm.$nuxt.$loading.finish();
                vm.notifyResponse('Something went wrong, Please try again!!', 'error');
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
    }

}
</script>
