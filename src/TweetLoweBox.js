import React, { useState, useRef } from "react";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import SentimentSatisfiedSharpIcon from "@material-ui/icons/SentimentSatisfiedSharp";
import ScheduleRoundedIcon from "@material-ui/icons/ScheduleRounded";
import { Button } from "@material-ui/core";
import { Grid, Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import "./TweetLowerBox.css";
import SearchIcon from "@material-ui/icons/Search";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    left: theme.spacing(1),
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
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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

function TweetLoweBox() {
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
  const [tweetGifs, settweetGifs] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const gf = new GiphyFetch("zOGPG3EwagQMXW2vEwWv0zvaGvmFJU2x");
  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });
  const categories= gf.categories();
 


  return (
    <div>
      <div className="gifPopup__boxFooter">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none",
          }}
        />
        <ImageIcon
          onClick={() => imageUploader.current.click()}
          ref={uploadedImage}
        />
        <GifIcon className="gifPopup_gifIcon" onClick={handleOpen} />
        <SentimentSatisfiedSharpIcon className="" tweet__sentiicon />
        <ScheduleRoundedIcon className="gifPopup__scheduleIcon" />
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <div className="animatedgifContainer">
            <DialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
            ></DialogTitle>
            <div className="gif__searchContainer">
              <SearchIcon className="gif__searchIcon" />
              <input
                onChange={(e) => settweetGifs(e.target.value)}
                className="gifPopup__gifSearch"
                placeholder="Search for Gifs"
                type="text"
                value={settweetGifs}
              />
            </div>
          </div>
          <DialogContent dividers>
            <Typography gutterBottom>
              <div>
              <Grid width={500} columns={3} gutter={6} fetchGifs={fetchGifs} />
              </div>
            </Typography>          
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default TweetLoweBox;
