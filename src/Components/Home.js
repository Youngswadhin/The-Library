import React, { useState } from 'react'
// Css
import "./Css/Home.scss"
import "./Css/Book.css"
// My Component
import Nav from "./Nav"
import Counter from './Counter'
import Card from "./Card"
// Img
import book_cover from "./res/book_cover.png"
import logo from "./res/Logo.svg"
import swadhin from "./res/swadhin.jpg"
import tanmay from "./res/tanmay.jpg"
// Other Component
import Tooltip from '@mui/material/Tooltip';
import AnimatedText from 'react-animated-text-content';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Home = () => {
    const [back, setBack] = useState(false)
    const [heading, setHeading] = useState(true)
    const [suggestion, setSuggestion] = useState({ branch: "", book: "", author: "" })

    return (
        <>
            <Nav />
            {/* Home */}
            <div className="Home">
                {/* view-back     open-book      view-rotate*/}
                <div className="BackContent">
                </div>
                <div className={heading ? "HomeContent" : "HomeContent hide"}>
                    <AnimatedText
                        type='letter'
                        interval={0.05}
                        duration={.4}
                        className="heading"
                        animation={{
                            y: '100px',
                            ease: 'ease-in-out',
                        }}
                    >
                        The Books
                    </AnimatedText>
                    <AnimatedText
                        type='words'
                        interval={0.05}
                        className="Des"
                        duration={1}
                        animation={{
                            y: '100px',
                            ease: 'ease',
                        }}
                    >
                        "The Books Are The Portal For Knowledge"
                    </AnimatedText>
                    <AnimatedText
                        type='words'
                        interval={0.05}
                        className="Des_min"
                        duration={1}
                        animation={{
                            y: '100px',
                            ease: 'ease',
                        }}
                    >
                        "Developed and Maintained by Team Young"
                    </AnimatedText>
                </div>

                {/* Book */}
                <Tooltip className='BookToolTip' title={back ? "Click To Close" : "Click To Open"} arrow>
                    <div id="book" onMouseEnter={() => setHeading(false)} onMouseLeave={() => { setHeading(true); }} className={back ? "open-book" : "view-cover"} onClick={() => setBack(!back)}>
                        <div className="main">
                            <div className="book-font">
                                <div className="book-cover">
                                    <img src={book_cover} alt="" />
                                </div>
                                <div className="book-cover-back"></div>
                            </div>
                            <div className="book-page">
                                {/* page Details */}
                                <AnimatedText
                                    type='words'
                                    interval={0.05}
                                    className="Des"
                                    duration={1}
                                    animation={{
                                        y: '100px',
                                        ease: 'ease',
                                    }}
                                >
                                    "When I look back, I am so impressed again with the life-giving power of literature. If I were a young person today, trying to gain a sense of myself in the world, I would do that again by reading, just as I did when I was young." – Maya Angelou
                                </AnimatedText> 
                            </div>
                            <div className="book-back">
                                {/* <img src="https://i.pinimg.com/originals/29/c4/89/29c489252af8d27cb817b97538dcf9a5.png" alt="" /> */}
                            </div>
                            <div className="book-bone">
                                {/* Book Side */}
                            </div>
                            <div className="book-top"></div>
                            <div className="book-right"></div>
                            <div className="book-bottom"></div>
                        </div>
                    </div>
                </Tooltip>
            </div>
            {/* CardContainer */}
            <div className="CardContainer">
                <div className="box red">
                    <h2>Free Books & Notes</h2>
                    <p>We are providing 450+ free books here
                        with smooth download and suggestions for
                        book entry.</p>
                </div>
                <div className="box cyan">
                    <h2>Save Your Downloads</h2>
                    <p>Signup and save your progress with us,
                        Save downloaded books and hit like and save.</p>
                </div>
                <div className="box orange">
                    <h2>Questions & More</h2>
                    <p>We also provide question papers and syllabus
                        and a website for visualizing the complex structures.</p>
                </div>
            </div>
            {/* Counter */}
            <div className="Counter">
                <Counter target={450} title='Book' duration={2} />
                <Counter target={300} title='User' duration={2} />
                <Counter target={768} title='Download' duration={2} />
            </div>
            {/* Profile Coders */}
            <div className="ProfileCard">
                <Card img="https://1.bp.blogspot.com/-J_SmSLk4AKk/X5bbIBOJNGI/AAAAAAAAEAk/FrlG14Sbd-gnFcfV6yTpaYLxsaRGchNrACPcBGAsYHg/s724/IMG_20201026_194220.jpg" name="Love Babber" des="Founder" />
                <Card img={swadhin} name="Swadhin Kumar" des="Developer" />
                <Card img={tanmay} name="Tanmay Kumar" des="UI Designer" />
            </div>
            {/* Suggestion */}
            <div className="Suggestion">
                <div className="group">
                    <div className="heading">Suggest Us Anything!</div>
                    <div className="des">Send us book name and author name for adding</div>
                </div>
                <div className="group">
                    <div className="des" type="email">Email</div>
                    <input type="text" name="" id="" />
                </div>
                <div className="group">
                    <div className="des">Message</div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <button className='button'>Send</button>
            </div>
            {/* Footer */}
            <div className="Footer">
                <div className="Name">
                    <div className="Logo"><img src={logo} alt="" /></div>
                    <div className="heading">The Books</div>
                    <div className="des">"Get Set and Read"</div>
                </div>
                {/* <div className="Logo"><img src={logo} alt="" /></div> */}
                <div className="text">We are trying our best to make the website user friendly, If you have any problem and query then contact us by the social handle given. <br /><span>-Swadhin & Team</span></div>
                <div className="SocialGrp">
                    <div className="social_handel">
                        <InstagramIcon sx={{ color: "#fff", fontSize: "30px" }} />
                        <GitHubIcon sx={{ color: "#fff", fontSize: "30px" }} />
                        <LinkedInIcon sx={{ color: "#fff", fontSize: "30px" }} />
                        <AlternateEmailIcon sx={{ color: "#fff", fontSize: "30px" }} />
                    </div>
                    <a href="#">youngswadhin@gmail.com</a>
                </div>
            </div>
        </>
    )
}

export default Home
