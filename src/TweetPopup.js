import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";



function TweetPopup() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState(""); 
  
  

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Shelby Poston",
      username: "shelby_poston2",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      Avatar:
        "https://pbs.twimg.com/profile_images/1284238923695366151/VNrmusSd_bigger.jpg",
    });

    setTweetMessage("");
    setTweetImage("");
  };


  return (
    <div className="tweetBox">
      <form>
           <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1284238923695366151/VNrmusSd_bigger.jpg" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            className=""
            placeholder="What is happeing?"
            type="text"
            value={tweetMessage}
          />
        </div>
        <div className="gifPopup__worldContainer">
          <div className="gifPopup__world">
            <PublicIcon className="gifPopup__publicIcon" />{" "}
            <span>Every can reply </span>
          </div>
        </div>
        <div className="gifPopup__boxFooter">
          <ImageIcon
            className="gifPopup__imageIcon"
            onClick={imageClick}
          ></ImageIcon>
          <GifIcon className="gifPopup_gifIcon" onClick={handleOpen} />
          <SentimentSatisfiedSharpIcon className="" tweet__sentiicon />
          <ScheduleRoundedIcon className="gifPopup__scheduleIcon" />
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              <div>
                <input
                  onChange={(e) => setweetGifs(e.target.value)}
                  className="gifPopup__gifSearch"
                  placeholder="Search for Gifs"
                  type="text"
                  value={setweetGifs}
                />
              </div>
            </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                Next to add gif from https://giphy.com/
              </Typography>
              <Typography gutterBottom>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor.
              </Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Donec sed
                odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </form>
    </div>
  );
}

export default TweetPopup;
