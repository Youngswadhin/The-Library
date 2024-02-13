import React, { useState } from 'react'

import "./Css/Video.scss"

import CircularProgress from '@mui/material/CircularProgress';

const Video = (props) => {
    const [load, setload] = useState(true)
    return (
        <>
            <div className="VideoFrame">
                <div className="Display">
                    <iframe className={load ? "Hide" : ""} src={props.src} title={props.title} onLoad={() => { setload(false) }}></iframe>
                    <div className={!load ? "Hide" : "Loading"} >
                        <CircularProgress />
                    </div>
                </div>
                <div className="title">{props.title}</div>
                <div className="author">{props.author}</div>
            </div>
        </>
    )
}

export default Video