import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Question from "../Componet/Ques";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
  
    useEffect(() => {
      setOptions(
        questions &&
          handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
          ])
      );
    }, [currQues, questions]);
  
    console.log(questions);
  
    const handleShuffle = (options) => {
      return options.sort(() => Math.random() - 0.5);
    };
  
    return (
      <div className="card">
  
        {questions ? (
          <>
            <div>
              <span>
                Score : {score}
              </span>
            </div>
            <Question
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </>
        ) : (
          <CircularProgress/>
        )}
      </div>
    );
  };

export default Quiz;