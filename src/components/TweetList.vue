<template>
  <div class="container">
      <h1 class="text-center mb-4">Lista de tweets</h1>
      <p v-if="tweets.length === 0" class="text-center">No hay tweets de momento...</p>
      <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
          <p class="tweet__title">{{tweet.username}}</p>
          <p class="tweet__text">{{tweet.tweet}}</p>
          <span>{{formatDate(tweet.createdAt)}}</span>
          <Close @click="deleteTweet(tweet.id)"/>
      </div>
  </div>
</template>

<script>
import { toRefs } from 'vue';
import moment from 'moment';
import 'moment/locale/es-mx';
import { Close } from "./icons/index";
import { deleteTweetApi } from '../api/tweet.js'
export default {
    props:{
        tweets: Array,
        reloadTweets: Function
    },
    components:{
        Close
    },
    setup(props){
        const { tweets } = toRefs(props);
        const { reloadTweets } = props;
        const formatDate = (date) => {
            return moment(date).fromNow();
        };
        const deleteTweet = (id) =>{
            deleteTweetApi(id);
            reloadTweets();
        };
        return{
            tweets,
            formatDate,
            deleteTweet
        }
    }

}
</script>

<style lang="scss" >
    .tweet{
        position: relative;
        border:1px solid #ccc;
        padding:20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            margin:0;
        }
        &__title{
            position:absolute;
            left:10px;
            top:-12px;
            background-color:#fff;
            padding:0 10px;
            font-weight: bold;
        }
        &__text{
            color:grey;
        }

        span{
            position: absolute;
            right:10px;
            bottom: -10px;;
            font-size: 12px;
            color:grey;
            background-color: #fff;
            padding:0 20px;
            border:1px solid #ccc;
        }
        svg {
            width:20px;
            height:20px;
            &:hover{
                cursor: pointer;
                color:red;
            }
        }
    }
</style>