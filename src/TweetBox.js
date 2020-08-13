import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import ImageIcon from "@material-ui/icons/Image";
import PublicIcon from "@material-ui/icons/Public";
import GifIcon from "@material-ui/icons/Gif";
import SentimentSatisfiedSharpIcon from "@material-ui/icons/SentimentSatisfiedSharp";
import ScheduleRoundedIcon from "@material-ui/icons/ScheduleRounded";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);




function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [tweetGifs, setweetGifs] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

  const imageClick = () => {
    console.log("Click");
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
        <div className="tweet__worldContainer">
          <div className="tweet__world">
            <PublicIcon className="tweet__publicIcon" />{" "}
            <span>Every can reply </span>
          </div>
        </div>
        <div className="tweet__boxFooter">
          <ImageIcon
            className="tweet__imageIcon"
            onClick={imageClick}
          ></ImageIcon>
          <GifIcon className="tweet_gifIcon"  onClick={handleOpen}/>
          <SentimentSatisfiedSharpIcon className="" tweet__sentiIcon />
          <ScheduleRoundedIcon className="tweet__scheduleIcon" />
          {/* <input
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            className="tweetBox__imageInput"
            placeholder="Enter image URL"
            type="text"
          /> */}
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
			<div>
                <input onChange={(e) => setweetGifs(e.target.value)}
            className="tweet__gifSearch"
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

          <Button
            className="tweetBox__tweetButton"
            onClick={sendTweet}
            type="submit"
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
