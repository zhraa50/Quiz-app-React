import './App.css';
import React, { useState } from 'react';

import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Final from './pages/Final';



function App() {
  const [questions ,setQuestions] = useState();
  const [score ,setScore] = useState();
  const [name, setName] = useState();



const fetchQuestions = async (category = '', difficulty = '') => {
  const request = await fetch(
    `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`);


  const data = await request.json();
  setQuestions(data.results);
};

  
    return (
      <BrowserRouter>
              <div className="App">

      <Routes>
              <Route
                path="/"
                element={
                  <Home
                    name={name}
                    setName={setName}
                    fetchQuestions={fetchQuestions}
                  />
                }
                />
                    
            <Route
             path="/quiz"
              element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
                 />
              }
                />

            <Route
             path="/final"
              element = {<Final name={name} score={score} 
              />
              }
              />


              </Routes>

        
        </div>
      </BrowserRouter>
    );
  }





  




export default App;
