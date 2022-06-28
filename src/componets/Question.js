import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./Erorr";
import "./Quesation.css"

const Question = ({currentQuestions, setCurrentQuestions, questions, options, correct, setScore, score, setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currentQuestions > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrentQuestions(currentQuestions + 1);
      setSelected();
    } else setError("Kindly select your option first");
  };

  const handleQuit = () => {
    setCurrentQuestions(0);
    setQuestions();
  };
  console.log(questions);
  return (
    <div className="question">
      <h1>Question {currentQuestions + 1} : </h1>

      <div className="singleQuestion">
        <h2>{questions[currentQuestions].question}</h2>

        <div className="options">
          {error && <ErrorMessage> {error}</ErrorMessage>}

          {/* handleCheck to check if correct or not */}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width:170}}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width:170 }}
            onClick={handleNext}
          >
            {currentQuestions > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;