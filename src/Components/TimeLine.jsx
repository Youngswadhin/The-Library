import React from 'react'
import "./Css/Timeline.scss"

// https://codepen.io/dcode-software/pen/dyWbjBe
// https://codepen.io/j471n/pen/vYJaLvm
// https://codepen.io/MarkBoots/pen/OJOqNyB
// https://codepen.io/ManasaGowlikar/pen/WBMdNM

const TimeLine = () => {

    const TimeLineList = ({ date, data }) => {
        return (
            <>
                <li>
                    <div className="m-timeline__date">
                        {date}
                    </div>

                    <p>
                        {data.join(', ')}
                    </p>
                </li>
            </>
        )
    }

    const data = [
        {
            date: "12 jul 2022",
            data: ["The Engineering mathmatics The Engineering mathmatics jfj guj  jkgu jkugh iug uig ", "The Edge"]
        },
        {
            date: "12 jul 2022",
            data: ["The Engineering mathmatics jfj guj  jkgu jkugh iug uig uijkg uijg ujg ug uf uyg ujg ug ", "The Edge"]
        },
        {
            date: "12 jul 2022",
            data: ["The Engineering mathmatics", "The Edge"]
        },
        {
            date: "12 jul 2022",
            data: ["The Engineering mathmatics", "The Edge"]
        },
        {
            date: "12 jul 2022",
            data: ["The Engineering mathmatics", "The Edge"]
        }
    ]

    return (
        <>
            <ul className="m-timeline">
                {data.map((val, ind) => {
                    return <TimeLineList key={ind} date={val.date} data={val.data}/>
                })}
            </ul>
        </>
    )
}

export default TimeLine