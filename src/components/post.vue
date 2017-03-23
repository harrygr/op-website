<template>
  <article class="post">

    <router-link :to="`/posts/${category}/${post.ID}`" v-if="excerpt && post.post_thumbnail" class="db fl-ns w-30-ns w-50-l mw6 pr3-ns pb3">
      <img :src="post.post_thumbnail.URL" alt="">
    </router-link>

    <router-link v-if="excerpt" :to="`/posts/${category}/${post.ID}`" class="link black">
      <h1 class="f3 mv0 lh-copy fw3 tracked-tight" :class="excerpt ? 'dim' : ''">{{ post.title }}</h1>
    </router-link>
    <h1 v-if="!excerpt" class="f3 mv0 lh-copy fw3 ttu">{{ post.title }}</h1>

    <time v-if="post.date" :datetime="post.date" itemprop="datePublished" class="sans-serif f6 gray">{{ date }}</time>
    <section class="fw2 lh-copy" v-html="excerpt ? post.excerpt : post.content"></section>
    <div class="cb"></div>
  </article>
</template>

<script>
  export default {
    props: {
      excerpt: {
        type: Boolean,
        default: false,
      },
      post: {
        type: Object,
        required: true,
      },
    },

    computed: {
      category () {
        const categories = Object.keys(this.post.categories)
        return categories.length ? this.post.categories[categories[0]].slug : 'uncategorized'
      },

      date () {
        return new Date(this.post.date).toLocaleDateString()
      },
    },
  }
</script>

<style>
  .post img {
    max-width: 100%;
    height: auto;
  }
  .post section a {
    color: #357EDD;
  }
  .post p:last-child {
    margin-bottom:0;
  }
</style>
