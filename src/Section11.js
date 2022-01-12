import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

export default function Section11(){ 

    const navigate = useNavigate();

    const [score, setscore] = useState(0);

    function getscore() {

        var scoretemp = parseInt(localStorage.getItem("rep1")) + parseInt(localStorage.getItem("rep2")) + parseInt(localStorage.getItem("sec12"));
        
        localStorage.setItem("language",scoretemp.toString());

        var scor = parseInt(localStorage.getItem("rep1")) + parseInt(localStorage.getItem("rep2"))
        setscore(scor);


      };



    function validateForm() {
        navigate("/sec12");
    }

    function onChangerep1Check() {
        if(document.getElementById('rep1').checked==true){
            localStorage.setItem("rep1", "1");
            console.log(1)
          }else
            localStorage.setItem("rep1", "0");
            getscore();
      }

      function onChangerep2Check() {
        if(document.getElementById('rep2').checked==true){
            localStorage.setItem("rep2", "1");
            console.log(1)
          }else
            localStorage.setItem("rep2", "0");
            getscore();
      }

    return(

        <>
            <h1>Language</h1>

            <br></br>
            
            <p>Repeat:</p> <br></br>
            <input type="Checkbox" name="rep1" id="rep1" onClick={onChangerep1Check}></input> <label name="rep1"> I only know that John is the one to help today. </label>

            <br></br>
            <input type="Checkbox" name="rep2" id="rep2" onClick={onChangerep2Check}></input> <label name="rep2">The cat always hid under the couch when dogs were in the room. </label>
            <br></br>
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