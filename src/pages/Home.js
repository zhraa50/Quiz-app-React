
import { TextField ,Button,MenuItem} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../componets/Erorr";
import Categories from "../componets/Categories"
import './Home.css'
const Home = ({ name, setName, fetchQuestions }) => {
    const [category ,setCategory] = useState(" ");
    const [difficulty ,setDifficulty] = useState(" ");
    const [error, setError] = useState(false);
  
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
          setError(true);
          return;
        } else {
          setError(false);
          fetchQuestions(category, difficulty);
          navigate("/quiz");
        }
      };
      return(
        <div className="content">
        <div className="settings">
      <h1>QUIZ APP</h1>
      <img src="https://img.freepik.com/free-vector/quiz-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design_180786-81.jpg?w=740" alt="Girl in a jacket">
</img>
  
          <div className="settings_s">
            {error && (<ErrorMessage> You need to fill all the feilds</ErrorMessage>
            )}
  
            <TextField
               style={{ marginBottom:50 }}
              label="Type your name here"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
            >

                </TextField>
                <TextField
             select
            label="Select Quiz Category"
            variant="standard"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((e) => (
              <MenuItem key={e.category} value={e.value}>
                {" "}
                {e.category}{" "}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ marginBottom: 50 }}
            select
            label="Select Difficulty"
            variant="standard"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Eeasy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>


              <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            
            Start the Quiz
            </Button>
            
</div>
</div>

                </div>
  );
};

export default Home;



