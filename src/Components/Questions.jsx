import React from 'react'

import "./Css/Questions.scss"

import Nav from "./Nav"

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Questions = () => {
  return (
    <>
      <Nav />
      <div className="Wrapper">
        <div className="Heading">#Questions</div>
        <div className="Questions">
          {/* <img className="Background" src={question} alt="df" /> */}
          <div className="QuestionContent">
            <div className="SelectData">
              <div className="selects">
                <select name="" id="">
                  <option value="">Branch</option>
                  <option value="tanmay">CSE</option>
                  <option value="tanmay">MECHANICAL</option>
                  <option value="tanmay">ELECTRICAL</option>
                  <option value="tanmay">CIVIL</option>
                </select>
                <select name="" id="">
                  <option value="">Semester</option>
                  <option value="tanmay">1st</option>
                  <option value="tanmay">2nd</option>
                  <option value="tanmay">3rd</option>
                  <option value="tanmay">4th</option>
                  <option value="tanmay">5th</option>
                  <option value="tanmay">6th</option>
                  <option value="tanmay">7th</option>
                </select>
                <select name="" id="" placeholder='tanmay'>
                  <option value="">Exam</option>
                  <option value="tanmay">1st Internal</option>
                  <option value="tanmay">2nd Internal</option>
                  <option value="tanmay">semester</option>
                </select>
              </div>
              {/* <div className="Button">FInd</div> */}
              <Button variant="contained" startIcon={<SearchIcon />}>
                Find
              </Button>
            </div>
          </div>
        </div>
        <div className="Heading">#Videos Search</div>
        <div className="VideoSearch">
          {/* <img className="Background" src={"https://img.freepik.com/premium-photo/youtube-logo-3d-rendering-close-up-youtube-channel-promotion-template_1379-4797.jpg"} alt="df" /> */}
          <div className="QuestionContent">
            <div className="SelectData">
              <div className="selects">
                <select name="" id="">
                  <option value="">Branch</option>
                  <option value="tanmay">CSE</option>
                  <option value="tanmay">MECHANICAL</option>
                  <option value="tanmay">ELECTRICAL</option>
                  <option value="tanmay">CIVIL</option>
                </select>
                <select name="" id="">
                  <option value="">Semester</option>
                  <option value="tanmay">1st</option>
                  <option value="tanmay">2nd</option>
                  <option value="tanmay">3rd</option>
                  <option value="tanmay">4th</option>
                  <option value="tanmay">5th</option>
                  <option value="tanmay">6th</option>
                  <option value="tanmay">7th</option>
                </select>
              </div>
              {/* <div className="Button">FInd</div> */}
              <Button variant="contained" startIcon={<SearchIcon />}>
                Find
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="Videos">
          <div className="Heading">#Videos</div>
          <Video src="https://www.youtube.com/embed?listType=playlist&amp;list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T" title="Theory of computation" author="tanmay kumar" />
          <Video src="https://www.youtube.com/embed?listType=playlist&amp;list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T" title="Theory of computation" author="tanmay kumar" />
          <Video src="https://www.youtube.com/embed?listType=playlist&amp;list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T" title="Theory of computation" author="tanmay kumar" />
          <Video src="https://www.youtube.com/embed?listType=playlist&amp;list=PLmXKhU9FNesSdCsn6YQqu9DmXRMsYdZ2T" title="Theory of computation" author="tanmay kumar" />
        </div> */}
      </div>
    </>
  )
}

export default Questions