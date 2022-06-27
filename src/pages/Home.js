

import React ,{ useState } from "react";
import {  useNavigate } from "react-router-dom";
import Error from "../Componet/Error";
import Category from "../Componet/Category";
import { MenuItem, TextField, Button } from "@material-ui/core";






const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
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
      }

      

    return <div className="contenir">
      <div className="settings">
        <span style={{ fontSize: 30 }}> SELECT Quiz Settings</span>
        <div className="settings__select">
          {error && <Error>Please Fill all the feilds</Error>}
          
          <TextField
            label="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            variant="outlined" />

               <TextField select label='select category'
                variant="outlined" 
                 value={Category}
                 onChange={(e) => setCategory(e.target.value)} >
                 {category.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
             </TextField>
             <TextField select label='select difficulty' variant="outlined"    value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}  >
   <MenuItem key="Easy" value="Easy">
    Easy
   </MenuItem>
   <MenuItem key="Medium" value="Medium">
   Medium
   </MenuItem>
   <MenuItem key="Hard" value="Hard">
   Hard
   </MenuItem>
    
   </TextField>
   <br/>
   <Button
    variant="contained" color="secondary" size="large" onClick={handleSubmit}>
            Start Quiz
    </Button>

          </div>
          </div>
          </div>

   
};



export default Home;