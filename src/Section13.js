import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

export default function Section13(){ 

    const navigate = useNavigate();

    const [score, setscore] = useState(0);

    function getscore() {

        var score = parseInt(localStorage.getItem("trans")) + parseInt(localStorage.getItem("meas")) 
        setscore(score);
        localStorage.setItem("abstraction",score.toString());
  
      };

    function validateForm() {
        navigate("/sec14");
    }

    function onChangetransCheck() {
        if(document.getElementById('trans').checked==true){
            localStorage.setItem("trans", "1");
            console.log(1)
          }else
            localStorage.setItem("trans", "0");
            getscore()
      }

      function onChangemeasCheck() {
        if(document.getElementById('meas').checked==true){
            localStorage.setItem("meas", "1");
            console.log(1)
          }else
            localStorage.setItem("meas", "0");
            getscore()
      }

    return(

        <>
            <h1>Abstraction</h1>

            <p>Similarity between e.g. orange - banana = fruit</p>

            <input type="Checkbox" name="trans" id="trans" onClick={onChangetransCheck}></input> 
            <label>Train - bicycle</label>

            <br></br>
            <input type="Checkbox" name="meas" id="meas" onClick={onChangemeasCheck}></input> 
            <label> Watch - ruler</label>

            <br></br>
            <br></br>
            <label id="counter">[{score} points]</label>

            <div class="col-sm-4">
                <br></br>

                <Button class="btn btn-info next-page" onClick={validateForm}>Next <i class="fas fa-arrow-right"></i></Button>
            </div>
            
        </>

    );
}