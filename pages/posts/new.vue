<template>
    <div class="row justify-content-center">
        <div class="col-md-8 col-md-offset-2 mt-lg mb-xl" id="new-post">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">New Post</h4>
                </div>
                <form id="edit-form-js"  method="post">
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
                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary">Publish</button>
                        <a href="#" class="btn btn-default">Discard</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: ['auth'],
    data() {
        return {
            post: {}
        }
    }
}
</script>

<style>

</style>