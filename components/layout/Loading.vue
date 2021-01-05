<template>
    <div v-if="loading" id="loading-overlay">
        <i class="fa fa-spinner fa-spin spin-big text-white"></i>
    </div>

</template>

<script>
export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
}
</script>

<style>
#loading-overlay {
    width: 100%;
    height: 100%;
    display: table;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 99;      
    left: 0;
    top: 0;
}
#loading-overlay i {
    display:table-cell;
    vertical-align:middle;
    text-align:center;
}
.spin-big {
    font-size: 50px;
    height: 50px;
    width: 50px;
}
</style>