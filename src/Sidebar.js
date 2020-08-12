import React from 'react';
import './Sidebar.css';
import SideBarOption from "./SideBarOption";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";


function Sidebar() {
    return (
        <div className="sidebar">
          <TwitterIcon className="sidebar__twitterIcon"/>


            <SideBarOption active Icon={HomeIcon} text="Home" />
            <SideBarOption Icon={SearchIcon} text="Explore" />
            <SideBarOption Icon={NotificationsIcon} text="Notification" />
            <SideBarOption Icon={MailOutlineIcon} text="Message" />
            <SideBarOption Icon={BookmarkIcon} text="Bookmarks" />
            <SideBarOption Icon={ListAltIcon} text="Lists" />
            <SideBarOption Icon={PersonOutlineIcon} text="Profile" />
            <SideBarOption Icon={MoreHorizIcon} text="More" />

            <Button variant="outlined" className="sidebar__tweet" fullWidth >Tweet</Button>

        </div>
    )
}

export default Sidebar
