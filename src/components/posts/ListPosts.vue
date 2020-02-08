<template>
  <div>
    <FacebookPost></FacebookPost>
    <TwitterPost></TwitterPost>
    <YoutubePost></YoutubePost>
    <WordpressPost></WordpressPost>
  </div>
</template>

<script>
import FacebookPost from './FacebookPost'
import TwitterPost from './TwitterPost'
import YoutubePost from './YoutubePost'
import WordpressPost from './WordpressPost'

export default {
  name: 'ListPosts',
  components: {
    FacebookPost,
    TwitterPost,
    YoutubePost,
    WordpressPost,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
