import React, { useState } from 'react'
import { useAppContext } from "../contextLib";

import "./Css/Rating.scss"

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import ratingImg from "./res/rating.gif"

const Rating = (props) => {
    const [rating, setRating] = useState(0)
    const { ratingopen, setRatingopen } = useAppContext()

    const SwitchReaction = () => {
        var expression = { mouthPath: "", eyebrowPathLeft: "", eyebrowPathRight: "" }
        switch (rating) {
            case 5:
                expression.mouthPath = 'M90,80 C100,124 144,124 155,80 C144,80 100,80 90,80';
                expression.eyebrowPathLeft = 'M10,28 C20,4 46,4 56,28';
                expression.eyebrowPathRight = 'M189,28 C199,4 223,4 233,28';
                break;
            case 4:
                expression.mouthPath = 'M90,80 C100,124 144,124 155,80 C144,124 100,124 90,80';
                expression.eyebrowPathLeft = 'M10,28 C20,4 46,4 56,28';
                expression.eyebrowPathRight = 'M189,28 C199,4 223,4 233,28';
                break;
            case 3:
                expression.mouthPath = 'M90,110 C100,110 144,110 155,110 C144,110 100,110 90,110';
                expression.eyebrowPathLeft = 'M14,30 56,8';
                expression.eyebrowPathRight = 'M189,28 232,28';
                break;
            case 2:
                expression.mouthPath = 'M90,110 C100,80 144,80 155,110 C144,80 100,80 90,110';
                expression.eyebrowPathLeft = 'M10,28 C20,4 46,4 56,28';
                expression.eyebrowPathRight = 'M189,28 C199,4 223,4 233,28';
                break;
            case 1:
                expression.mouthPath = 'M90,110 C100,110 144,110 155,110 C144,110 100,110 90,110';
                expression.eyebrowPathLeft = 'M14,8 56,30';
                expression.eyebrowPathRight = 'M189,28 232,6';
                break;
            default:
                expression.mouthPath = 'M90,80 C100,124 144,124 155,80 C144,80 100,80 90,80';
                expression.eyebrowPathLeft = 'M10,28 C20,4 46,4 56,28';
                expression.eyebrowPathRight = 'M189,28 C199,4 223,4 233,28';
                break;
        }
        let background = rating === 1 ? "#fa5657" : rating === 2 ? "#f8b353" : rating === 3 ? "#fcb52b" : rating === 4 ? "#44eaad" : "#5faaff"

        return (
            <>
                <div className="Face" style={{ background: background }}>
                    <svg className="stroke--white" id="svg" fill="none" height="120" width="245" >
                        <g strokeWidth="8" strokeLinejoin="round" strokeLinecap="round">
                            <path id="mouth" d={expression.mouthPath}></path>
                            <g fill="white">
                                <circle r="15" cx="34" cy="67"></circle>
                                <circle r="15" cx="211" cy="65"></circle>
                            </g>
                            <path id="eyebrowL" d={expression.eyebrowPathLeft}></path>
                            <path id="eyebrowR" d={expression.eyebrowPathRight}></path>
                        </g>
                    </svg>
                </div>
            </>
        )
    }

    return (
        <Modal
            open={ratingopen}
            onClose={() => setRatingopen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="RatingContainer">
                <div className="Rating">
                    <div className="btnclose" onClick={() => setRatingopen(false)}><CloseRoundedIcon sx={{ color: "#fff" }} /></div>
                    <SwitchReaction />
                    <div className="StarContainer">
                        <div className="heading">Tell Us Your Experience!</div>
                        <div className="Star">
                            <span onClick={() => { setRating(1); }}>{rating >= 1 ? <StarRoundedIcon sx={{ color: "#ffd700" }} fontSize="large" /> : <StarRoundedIcon sx={{ color: "#ffd70040" }} fontSize="large" />}</span>
                            <span onClick={() => { setRating(2); }}>{rating >= 2 ? <StarRoundedIcon sx={{ color: "#ffd700" }} fontSize="large" /> : <StarRoundedIcon sx={{ color: "#ffd70040" }} fontSize="large" />}</span>
                            <span onClick={() => { setRating(3); }}>{rating >= 3 ? <StarRoundedIcon sx={{ color: "#ffd700" }} fontSize="large" /> : <StarRoundedIcon sx={{ color: "#ffd70040" }} fontSize="large" />}</span>
                            <span onClick={() => { setRating(4); }}>{rating >= 4 ? <StarRoundedIcon sx={{ color: "#ffd700" }} fontSize="large" /> : <StarRoundedIcon sx={{ color: "#ffd70040" }} fontSize="large" />}</span>
                            <span onClick={() => { setRating(5); }}>{rating >= 5 ? <StarRoundedIcon sx={{ color: "#ffd700" }} fontSize="large" /> : <StarRoundedIcon sx={{ color: "#ffd70040" }} fontSize="large" />}</span>
                        </div>
                    </div>
                    <div className="button">Submit</div>
                    <div className="close" onClick={() => setRatingopen(false)}>Not Now</div>
                </div>
            </div>
        </Modal>
    )
}

export default Rating