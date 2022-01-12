import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
export default function Section8(){ 

  const navigate = useNavigate();

  const [score, setscore] = useState(0);

    function getscore() {

      var score = parseInt(localStorage.getItem("front")) + parseInt(localStorage.getItem("back")) 
      setscore(score);

      var scoretemp = parseInt(localStorage.getItem("subtraction")) + parseInt(localStorage.getItem("letters")) 
      + score

      localStorage.setItem("attention",scoretemp.toString());
      console.log("attention"+localStorage.getItem("attention"));
  
      };


  function validateForm() {
    navigate("/sec9");
  }

  function onChangeFrontCheck() {
    if(document.getElementById('front').checked==true){
      localStorage.setItem("front", "1");
      console.log(1)
    }else
    localStorage.setItem("front", "0");
    getscore();
  }

  function onChangeBackCheck() {
    if(document.getElementById('back').checked==true){
      localStorage.setItem("back", "1");
      console.log(1)
    }else
    localStorage.setItem("back", "0");
    getscore();
  }

    return(

      <>
          <div>
            <h1>Attention</h1>
          </div>

          <p>Read list of digits (1 digit/sec.)</p>

          <br></br>
          <br></br>

          <input type="Checkbox" name="front" id="front" onClick={onChangeFrontCheck}></input> <label name="front">Subject has to repeat them in the forward order.</label>
          
          <h1>2 1 8 5 4</h1>

          <br></br>

          <input type="Checkbox" name="back" id="back" onClick={onChangeBackCheck}></input> <label name="back">Subject has to repeat them in the backward order.</label>
          
          <h1> 7 4 2</h1>

          <br></br>


          <label id="counter">[{score} points]</label>

          <br></br>


          <div class="col-sm-4">
            <br></br>

            <Button class="btn btn-info next-page" onClick={validateForm}>Next <i class="fas fa-arrow-right"></i></Button>
          </div>
          
      </>

    );
}