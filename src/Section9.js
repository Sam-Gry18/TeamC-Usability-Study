import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
export default function Section9(){ 

    const navigate = useNavigate();

    const [score, setscore] = useState(0);

    function getscore() {

        var score = parseInt(localStorage.getItem("letters")) 

        var scoretemp = parseInt(localStorage.getItem("subtraction")) + score 
        + parseInt(localStorage.getItem("front")) + parseInt(localStorage.getItem("back"))
        
        localStorage.setItem("attention",scoretemp.toString());

        setscore(score);
      };


    function validateForm() {
        navigate("/sec10");
    }

    function onChangeSec9Check() {
        if(document.getElementById('letters').checked==true){
            localStorage.setItem("letters", "1");
            console.log(1)
          }else
          localStorage.setItem("letters", "0");
          getscore()
      }

    return(

        <>
            <h1>Attention</h1>

            <p>Read list of letters. </p>
            <p>The subject must tap with his hand at each letter A. No points if less than 2 errors.</p>
            <br></br>
            <br></br>

            
            <h1>F B A C M N A A J K L B A F A K D E A A A J A M O F A A B</h1>

            <br></br>

            <input type="Checkbox" name="letters" id="letters" onClick={onChangeSec9Check}></input> <label id="counter">[{score} points]</label>

            <br></br>
            
            <br></br>
            <br></br>

            <div class="col-sm-4">

                <Button class="btn btn-info next-page" onClick={validateForm}>Next <i class="fas fa-arrow-right"></i></Button>
          </div>
            
        </>

    );
}