import {v4 as uuidv4} from 'uuid';
import { size } from "lodash";
import { TWEETS } from '../utils/constants';

export function saveTweetApi(tweet, username){
    const tweets = getTweetsApi();
    if(size(tweets)===0){
        //cuando no hay nada en el localstorage
        const tweetTemp = [
            {
                id:uuidv4(),
                tweet,
                username,
                createdAt: new Date(),
            }
        ];
        localStorage.setItem(TWEETS, JSON.stringify(tweetTemp));
    }else{
        //si hay elementos en el localstorage
        tweets.push({
            id:uuidv4(),
            tweet,
            username,
            createdAt: new Date(),
        });
        localStorage.setItem(TWEETS, JSON.stringify(tweets));
    }

}

export function getTweetsApi(){
    const tweets = localStorage.getItem(TWEETS);
    if(tweets){
        return JSON.parse(tweets);
    }
    return [];
}

export function deleteTweetApi(id){
    console.log("click");
    console.log(id);
    const tweets = getTweetsApi();
    console.log(tweets);
    const tempTweets = tweets.filter(twit => twit.id !== id);
    console.log(tempTweets);
    return localStorage.setItem(TWEETS, JSON.stringify(tempTweets));
}