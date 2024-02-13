import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from "../contextLib";
// Css
import "./Css/Nav.scss"
// Images
import logo from "./res/Logo.svg"

// Modules
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Nav = () => {
    const [navigation, setNavigaion] = useState("Err")
    const [searchData, setSearchData] = useState("");
    const [drawer, setdrawer] = useState(false)
    const {search, setSearch, isAuth } = useAppContext()

    useEffect(() => {
        setNavigaion(window.location.pathname)
    }, [])

    return (
        <div className="Nav">
            <img className="Logo" src={logo} alt="Book" />
            <div className="SearchBar">
            <SearchRoundedIcon/>
                <input className="" type="text" name="SearchBook" id="BookSearch" placeholder='Enter Book' value={searchData} onChange={e => setSearchData(e.target.value)} />
                <div className="SearchEnter" onClick={()=>setSearch(!search)}><ArrowForwardRoundedIcon/></div>
            </div>
            <div className="Menu">
                <Link to="/"><span className={navigation === "/" ? "MenuItems Dark" : "MenuItems"}>Home</span></Link>
                <Link to="/books"><span className={navigation === "/books" ? "MenuItems Dark" : "MenuItems"}>Books</span></Link>
                <Link to="/notes"><span className={navigation === "/notes" ? "MenuItems Dark" : "MenuItems"}>Notes</span></Link>
                <Link to="/questions"><span className={navigation === "/questions" ? "MenuItems Dark" : "MenuItems"}>Questions</span></Link>
                {isAuth?<Link to="/user"><span className={navigation === "/user" ? "MenuItems Dark" : "MenuItems"}>User</span></Link>:
                <Link to="/login"><span className={navigation === "/login" ? "MenuItems Dark" : "MenuItems"}>Login</span></Link>}
            </div>
            <Button onClick={() => setdrawer(true)} className="Menu_btn"><MenuRoundedIcon sx={{ color: "#000", fontSize: 33 }} /></Button>
            <Drawer
                anchor="right"
                open={drawer}
                onClose={() => setdrawer(false)}
                className="Drawer"
            >
                <div className="Menu_Side">
                    <div className="Menu_Side_covered">
                        <img className="Logo" src={logo} alt="Book" />
                        <Button onClick={() => setdrawer(false)} className="Menu_btn"><ClearRoundedIcon sx={{ color: "#000", fontSize: 33 }} /></Button>
                    </div>
                    <Link to="/"><span className={navigation === "/" ? "MenuItems Dark" : "MenuItems"}>Home</span></Link>
                    <Link to="/books"><span className={navigation === "/books" ? "MenuItems Dark" : "MenuItems"}>Books</span></Link>
                    <Link to="/notes"><span className={navigation === "/notes" ? "MenuItems Dark" : "MenuItems"}>Notes</span></Link>
                    <Link to="/questions"><span className={navigation === "/questions" ? "MenuItems Dark" : "MenuItems"}>Questions</span></Link>
                    {isAuth?<Link to="/user"><span className={navigation === "/user" ? "MenuItems Dark" : "MenuItems"}>User</span></Link>:
                    <Link to="/login"><span className={navigation === "/user" ? "MenuItems Dark" : "MenuItems"}>Login</span></Link>}
                </div>
            </Drawer>
        </div>
    )
}

export default Nav