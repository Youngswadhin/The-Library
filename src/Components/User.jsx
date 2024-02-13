import React from 'react'
import "./Css/User.scss"

import Nav from "./Nav"
import TimeLine from "./TimeLine"

import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';

const User = () => {
    return (
        <>
            <Nav />
            <div className="User">
                <div className="UserContainer">
                    <div className="UserInfo">
                        <div className="UserCard">
                            <img src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNpZGUlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="profile" />
                            <div className="Content">
                                <div className="StatusData">
                                    <div className="Level">Level 1</div>
                                    <div className="StatusIndicator">
                                        <div className="text">Some more points..</div>
                                        <progress class='bar' value='30' max='100'></progress>
                                    </div>
                                </div>
                                <div className="UserDetails">
                                    <div className="name">Tanmay Kumar Panda</div>
                                    <div className="des">CSE 5th sem</div>
                                </div>
                            </div>
                        </div>
                        <div className="UserSpec">
                            <div className="heading">About You</div>
                            <div className="UserData">
                                <div className="email data">Email : tanmaypanda752@gmail.com</div>
                                <div className="userid data">User Id : 2001110091</div>
                            </div>
                            <div className="Tags">
                                <div className="title">Tags : </div>
                                <Chip label="CSE" />
                                <Chip label="5th" />
                                <Chip label="Extra" />
                            </div>
                            <div className="EditButton">
                                <ModeEditRoundedIcon className="icon"/>
                            </div>
                        </div>
                    </div>
                    <div className="UserStatus">
                        <div className="statusHolder">
                            <img src="https://cdn.dribbble.com/users/515705/screenshots/9818728/media/4a706681babc1cf92c04487bcdfbfdde.jpg?compress=1&resize=400x300" alt="" />
                        </div>
                        <div className="Data">
                            <div class="circles-small">
                                <div class="circle-small">
                                    <div class="text">34<br /><span class="small">Books</span></div>
                                    <svg>
                                        <circle class="bg" cx="40" cy="40" r="37"></circle>
                                        <circle class="progress one" cx="40" cy="40" r="37"></circle>
                                    </svg>
                                </div>
                                <div class="circle-small">
                                    <div class="text">13<br /><span class="small">Notes</span>
                                    </div>
                                    <svg>
                                        <circle class="bg" cx="40" cy="40" r="37"></circle>
                                        <circle class="progress two" cx="40" cy="40" r="37"></circle>
                                    </svg>
                                </div>
                            </div>
                            {/* <div className="downloads">
                                <DownloadRoundedIcon sx={{ fontSize: "30px", color: "#8f86ff" }} />
                                <span>57 Downloads</span>
                            </div>
                            <div className="saved">
                                <BookmarkRoundedIcon sx={{ fontSize: "30px", color: "#8f86ff" }} />
                                <span>48 Saved</span>
                            </div> */}
                        </div>
                        <div className="quote">"The way to get started is to quit talking and begin doing."</div>
                    </div>
                </div>
                <div className="mailus">
                    <div className="title">Be A Developer In CodeBreakers!</div>
                    <Button className='Button' variant="contained" startIcon={<CodeIcon />}>
                        Apply
                    </Button>
                </div>
                {/* <div className="TimeLine">
                    Downloads
                    <TimeLine />
                </div> */}
            </div>
        </>
    )
}

export default User