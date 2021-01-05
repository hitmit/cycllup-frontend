<template>
  <div>
    <header id="global-header">
      <MainNav />
    </header>
    <main class="py-4">
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import MainNav from "@/components/layout/MainNav"
export default {
  components: {
    MainNav
  }
}
</script>
