import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Login - https://codepen.io/CodeOpacity/pen/YzjaMde
// Card - https://codepen.io/lauraalpinto/pen/qLzGBX

import Home from "./Components/Home"
import Books from "./Components/Books"
import Notes from "./Components/Notes"
import Questions from "./Components/Questions"
import User from "./Components/User"
import Err from "./Err"
import Login from "./Components/Login"

import Rating from './Components/Rating'
import Loader from "./Components/Loader"
import { AppContext } from "./contextLib";

function App() {
  const [BookData, setBookData] = useState([]);
  const [NoteData, setNoteData] = useState([]);
  const [UserData,setUserData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(false);
  const [ratingopen, setRatingopen] = useState(false)
  const [error, setError] = useState(false)
  const [isAuth, setAuth] = useState(false)

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const wait = async () => {
      setIsLoading(true)
      fetch(`https://mocki.io/v1/efd26afd-4f7c-4d1b-a3df-644494c48995`)
        .then((response) => response.json())
        .then((actualData) => { setBookData(actualData);console.log("data loaded") })
        .catch((err) => {
          console.log(err.message);
          alert(err.message)
          setError(true);
        });
      await sleep(1500);
      setIsLoading(false)
    }
    wait()
  }, [])

  useEffect(() => {
    const wait = async (time) => {
      await sleep(time);
      setRatingopen(true);
    }
    wait(60000)
  },[])

  return (
    <>
      <AppContext.Provider value={{ BookData, NoteData, isLoading, setIsLoading, search, setSearch, ratingopen, setRatingopen, error, setError, isAuth }}>
        {isLoading ? (
          <>
            <br /><br />
            <Loader />
          </>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/user" element={<User />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Err />} />
            </Routes>
          </BrowserRouter>
        )}
        <Rating />
      </AppContext.Provider>
    </>
  );
}

export default App;


/* 
git init
git add . 
git commit -m "changes"
git push -u origin main */
