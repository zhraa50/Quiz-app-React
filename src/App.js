import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);




  

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    // console.log(data);
    setQuestions(data.results);
  };

  return (

    <BrowserRouter>
      <div className="App">
      <Routes>
          <Route
            exact
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
            exact
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
      <Route exact path="/result" element={<Result />} />
        </Routes>
    


      </div>
      
    </BrowserRouter>
  );
}

export default App;