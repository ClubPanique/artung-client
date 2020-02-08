<template>
  <div>
    <Header></Header>
    <SearchBar></SearchBar>
    <ListArtists></ListArtists>
  </div>
</template>

<script>
import Header from '../components/navs/Header'
import SearchBar from '../components/searchs/SearchBar'
import ListArtists from '../components/artists/ListArtists'

export default {
  name: 'Home',
  components: {
    Header,
    SearchBar,
    ListArtists,
  }
};
</script>

<style lang="scss">

</style>
