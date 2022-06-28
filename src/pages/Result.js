import { Button } from "@mui/material";
import React ,{useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "./Ruslit.css"

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/result");
    }
  }, [name, navigate]);

  return (
    <div className="result">
              <img src="https://prima-med.org/wp-content/uploads/2021/11/1591428914phpMABeQI-1024x576.jpeg "
              alt="">
</img>
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      
      >
        Go to home page
      </Button>
    </div>
  );
};

export default Result;