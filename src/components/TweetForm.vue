<template>
  <div class="tweet-form container" :class="{open:showForm}">
      <form @submit="sendTweet">
        <input class="form-control" placeholder="Tu nombre" v-model="username"/>
        <textarea class="form-control" rows="3" placeholder="Escribe tu tweet..." v-model="tweet" />
        <button @click="reloadTweets" class="btn btn-primary">Enviar Tweet</button>
      </form>
  </div>
</template>

<script>
import {ref, toRefs} from 'vue';
import { saveTweetApi } from '../api/tweet';
export default {
    props:{
        showForm:Boolean,
        openCloseForm:Function,
        reloadTweets: Function,
    },
    setup(props){

       
        const {reloadTweets, openCloseForm} = props;
        const {showForm, } = toRefs(props);
        console.log(reloadTweets);

        let username = ref("");
        let tweet = ref("");
        const sendTweet = (e) => {
            //para no usar preventDefault se puede usar en la directiva lo siguiente
            //@submit.prevent = "sendTweet" y ya no necesitariamos e como param ni el preventdefault al interior de la función
            e.preventDefault();
           
           if(!tweet.value || !username.value) return;

            saveTweetApi(tweet.value, username.value);
            tweet.value = "";
            username.value = "";
            openCloseForm();
            reloadTweets();
            
        }

        return{
            sendTweet,
            username,
            tweet,
            showForm
        }
    }
}
</script>

<style lang="scss" scoped>
    .tweet-form{
        margin-top:20px;
        overflow: hidden;
        height: 0px;

        &.open{
            height: auto;
        }
        
        form{
            margin-bottom: 50px;
            input{
                margin-bottom: 10px;
            }
            button{
                width:100%;
                margin-top: 10px;
            }
        }
    }
</style>