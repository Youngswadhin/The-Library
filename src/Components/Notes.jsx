import React, { useState } from 'react'
import { useAppContext } from "../contextLib";

import "./Css/Notes.scss"

import Nav from "./Nav"
import notes from "./res/notes.jpg"

import Chip from '@mui/material/Chip';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const Notes = () => {
  const { NoteData } = useAppContext()
  const [filter, setFilter] = useState({ civil: false, mechanical: false, electrical: false, cse: false, one: false, two: false, three: false, four: false, five: false, six: false, seven: false });

  const LocalNoteData = NoteData.filter((item) =>
  (!(filter.civil || filter.electrical || filter.mechanical || filter.cse || filter.one || filter.two || filter.three || filter.four || filter.five || filter.six || filter.seven) ? true :
    ((filter.civil && item.branch === "CE") ||
      (filter.electrical && item.branch === "EE") ||
      (filter.cse && item.branch === "CSE") ||
      (filter.mechanical && item.branch === "ME") ||
      (filter.one && item.semester === "1") ||
      (filter.two && item.semester === "2") ||
      (filter.three && item.semester === "3") ||
      (filter.four && item.semester === "4") ||
      (filter.five && item.semester === "5") ||
      (filter.six && item.semester === "6") ||
      (filter.seven && item.semester === "7"))
  )
  )

  const NoteFrame = (props) => {
    return (
      <>
        <div className="NoteFrame">
          <img src={notes} alt="" />
          <div className="title">{props.title.split(' ').slice(0,2).join(' ')}</div>
          <div className="author">-Swadhin</div>
          <div className="button">
            <div className="buttontitle">Download</div>
            <div className="icon"><ArrowDownwardRoundedIcon /></div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Nav />
      <div className="Notes">
        <div className="Heading">Notes</div>
        <div className="BooksFilter">
          {/* <div className="Heading">Filters</div> */}
          <div className="ChipGroup">
            {/* <div className="semiHeading">Branch</div> */}
            <Chip color={filter.civil ? "primary" : "default"} onClick={() => { setFilter({ ...filter, civil: !filter.civil }) }} label="Civil" />
            <Chip color={filter.electrical ? "primary" : "default"} onClick={() => { setFilter({ ...filter, electrical: !filter.electrical }) }} label="Electrical" />
            <Chip color={filter.mechanical ? "primary" : "default"} onClick={() => { setFilter({ ...filter, mechanical: !filter.mechanical }) }} label="Mechanical" />
            <Chip color={filter.cse ? "primary" : "default"} onClick={() => { setFilter({ ...filter, cse: !filter.cse }) }} label="Computer Science" />
            {/* <span className="semiHeading">Semester</span> */}
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Chip color={filter.one ? "primary" : "default"} onClick={() => { setFilter({ ...filter, one: !filter.one }) }} label="1st Semester" />
            <Chip color={filter.two ? "primary" : "default"} onClick={() => { setFilter({ ...filter, two: !filter.two }) }} label="2nd Semester" />
            <Chip color={filter.three ? "primary" : "default"} onClick={() => { setFilter({ ...filter, three: !filter.three }) }} label="3rd Semester" />
            <Chip color={filter.four ? "primary" : "default"} onClick={() => { setFilter({ ...filter, four: !filter.four }) }} label="4th Semester" />
            <Chip color={filter.five ? "primary" : "default"} onClick={() => { setFilter({ ...filter, five: !filter.five }) }} label="5th Semester" />
            <Chip color={filter.six ? "primary" : "default"} onClick={() => { setFilter({ ...filter, six: !filter.six }) }} label="6th Semester" />
            <Chip color={filter.seven ? "primary" : "default"} onClick={() => { setFilter({ ...filter, seven: !filter.seven }) }} label="7th Semester" />
          </div>
        </div>
        <div className="NotesContainer">
          <NoteFrame img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfrKkpq5d0rVh2ASSS-qbQjicJJgKgWYnOQ&usqp=CAU" title="Theory of Computation and Os" author="tanmay" />
          <NoteFrame img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfrKkpq5d0rVh2ASSS-qbQjicJJgKgWYnOQ&usqp=CAU" title="TOC" author="tanmay" />
          <NoteFrame img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfrKkpq5d0rVh2ASSS-qbQjicJJgKgWYnOQ&usqp=CAU" title="TOC" author="tanmay" />
          <NoteFrame img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfrKkpq5d0rVh2ASSS-qbQjicJJgKgWYnOQ&usqp=CAU" title="TOC" author="tanmay" />
          <NoteFrame img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfrKkpq5d0rVh2ASSS-qbQjicJJgKgWYnOQ&usqp=CAU" title="TOC" author="tanmay" />
          <NoteFrame img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfrKkpq5d0rVh2ASSS-qbQjicJJgKgWYnOQ&usqp=CAU" title="TOC" author="tanmay" />
          <NoteFrame img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfrKkpq5d0rVh2ASSS-qbQjicJJgKgWYnOQ&usqp=CAU" title="TOC" author="tanmay" />
          <NoteFrame img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfrKkpq5d0rVh2ASSS-qbQjicJJgKgWYnOQ&usqp=CAU" title="TOC" author="tanmay" />
        </div>
      </div>
    </>
  )
}

export default Notes