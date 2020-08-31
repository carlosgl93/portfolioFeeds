import React from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import NearMeIcon from "@material-ui/icons/NearMe"
import { ExpandMoreOutlined, AccountCircle } from "@material-ui/icons"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import "../Css/Project.css"

function Project() {
    return (
        <div className="post">
            <h1 className="post_title"></h1>
            <div className="post_top">
                <Avatar
                    src=""
                    className="post_avatar"
                />
                <div className="post_topInfo">
                    <h3>Post Author</h3>
                    <p>Post TimeStamp</p>
                </div>
            </div>

            <div className="post_Bottom">
                <p>Post Message</p>
            </div>
            <div className="post_iframe">

            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Project
