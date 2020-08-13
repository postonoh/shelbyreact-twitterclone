import React from 'react';
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2> What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} ></TwitterTweetEmbed>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{ height: 400, tweetLimit: '5' }}
                    className="widget__TimelineEmbed"
                ></TwitterTimelineEmbed>
                <TwitterShareButton
                    url="https://facebook.com/cleverprogrammer"
                    options={{ text: "#reactjs is awsome", via: "cleverprogrammer" }}
                ></TwitterShareButton>
            </div>
        </div>
    );
}

export default Widgets
