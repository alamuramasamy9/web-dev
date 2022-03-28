import React from "react";
import { useSelector } from "react-redux";
import TweetListItem from "./TweetListItem";

const TweetList = () => {

    const selectAllTweets = (state) => state.tweets.tweets;
    const tweets = useSelector(selectAllTweets);

    return (
        <ul className="list-group">
            {
                tweets.map(tweet =>
                    <TweetListItem tweet={tweet} />
                )
            }
        </ul>
    )
};

export default TweetList;