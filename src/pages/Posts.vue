<template>
  <div class="ph4 mt5 pt4 mw9">
    <p v-if="!posts.length && !$store.state.loading">No Posts</p>

    <transition-group name="fade">
      <post v-for="post in posts" :post="post" :excerpt="true" :key="post.slug" class="cb pv4 bb"></post>
    </transition-group>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        number: 10,
      }
    },
    mounted () {
      this.setPageTitle()
    },
    computed: {
      category () {
        return this.$route.params.category
      },
      posts () {
        return this.$store.getters.postsInCategory(this.category).slice(0, this.number)
      },
    },
    methods: {
      setPageTitle () {
        this.$store.commit('setTitle', {title: `${capitalizeWords(this.category)} | Posts`})
      },
    },
    watch: {
      category () {
        this.setPageTitle()
      },
    },
  }

  function capitalizeWords (words) {
    return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  }
</script>
