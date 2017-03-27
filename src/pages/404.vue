<template>
  <div class="ph4 mt5-ns pt4 mw9">
    <h1 class="f2 mv0 lh-copy fw3 ttu">404 Page Not Found</h1>
    <p class="fw2 lh-copy">
      Sorry, there's no page here. Try the links above.
    </p>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.commit('setTitle', {title: '404 Page Not Found'})
    },
  }
</script>
