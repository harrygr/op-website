<template>
  <div class="ph4 mt5-ns pt4 mw9">
    <h1 class="f3 mv0 lh-copy fw3 ttu">Contact</h1>
    <section class="fw2 lh-copy">


    </section>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.commit('setTitle', {title: 'Contact'})
    },
  }
</script>
