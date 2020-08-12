import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase'



function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

const sendTweet = e => {

    e.preventDefault();
    db.collection('posts').add({
        displayName: 'Shelby Poston',
        username: 'shelby_poston2',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        Avatar: "https://pbs.twimg.com/profile_images/1284238923695366151/VNrmusSd_bigger.jpg"
    });

    setTweetMessage("");
    setTweetImage("");

};

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1284238923695366151/VNrmusSd_bigger.jpg" />
                    <input onChange={(e) => setTweetMessage(e.target.value)} className="" placeholder="What is happeing?" type="text" value={tweetMessage} />
                </div>
                    <input
                    onChange={(e) => setTweetImage(e.target.value) }
                    value={tweetImage} className="tweetBox__imageInput" placeholder="Enter image URL" type="text" />
                <Button className="tweetBox__tweetButton" onClick={sendTweet} type="submit">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
