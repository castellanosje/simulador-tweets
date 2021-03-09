<template>
  <Menu :openCloseForm = "openCloseForm" :showForm="showForm"  />
  <TweetForm :showForm="showForm" :openCloseForm = "openCloseForm" :reloadTweets = "reloadTweets" />
   <TweetList :tweets="tweets" :reloadTweets = "reloadTweets" />
</template>

<script>
import { ref } from 'vue';
import Menu from './components/Menu';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList'
import useFormTweet from './hooks/useFormTweets';
import { getTweetsApi } from './api/tweet'
export default {
  name: 'App',
  components: {
    Menu,
    TweetForm,
    TweetList
  },
  setup(){
    let tweets = ref(getTweetsApi().reverse());
    const {openCloseForm, showForm} = useFormTweet();

    const reloadTweets = () =>{
      
      console.log("se ejecuta");
      tweets.value = getTweetsApi().reverse();
    }
    
    
    return{
        showForm,
        openCloseForm,
        tweets,
        reloadTweets
    }

  }
}
</script>

<style lang="scss">

</style>
