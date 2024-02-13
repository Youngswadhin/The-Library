import React from 'react'

import "./Css/Card.css"

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Card = (props) => {
    return (
        <>
            <div className="card-wrapper">
                <div className="card-container">
                    <div className="card-header">
                        <img src={props.img}alt="" />
                    </div>
                    <div className="card-footer-title">
                        {props.name}
                        <div className="card-footer-title-des">{props.des}</div>
                    </div>
                </div>
                <div className="card-hover-content-container">
                    <div className="card-menu-icon">
                    <MenuRoundedIcon/>
                    </div>
                    <div className="card-hover-content">
                        <a href={props.insta}>
                            <InstagramIcon/>
                        </a>
                        <a href={props.github}>
                            <GitHubIcon/>
                        </a>
                        <a href={props.linkedin}>
                            <LinkedInIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card