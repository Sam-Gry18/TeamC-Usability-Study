import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

export default function Section6(){ 

    function validateForm() {
        navigate("/sec7");
    }

    const navigate = useNavigate();

    const [score, setscore] = useState(0);

    function getscore() {

        var score = parseInt(localStorage.getItem("lion")) + parseInt(localStorage.getItem("rhino")) + parseInt(localStorage.getItem("camel"))
        setscore(score);
        localStorage.setItem("naming",score.toString());
  
      };

    function special_back() {
      if(localStorage.getItem("blindCheck")==='1') {
        navigate("/moca");
    }if(localStorage.getItem("blindCheck")==='0' && localStorage.getItem("writeCheck")==='1') {
      navigate("/moca")
    }else{navigate("/sec5");}
        
    }

    function onChangeCamelCheck() {
      if(document.getElementById('camel').checked==true){
        localStorage.setItem("camel", "1");
        console.log(1)
      }else
      localStorage.setItem("camel", "0");
      getscore();
      }

      function onChangeLionCheck() {
        if(document.getElementById('lion').checked==true){
          localStorage.setItem("lion", "1");
          console.log(1)
        }else
        localStorage.setItem("lion", "0");
        getscore();
      }

      function onChangeRhinoCheck() {
        if(document.getElementById('rhino').checked==true){
          localStorage.setItem("rhino", "1");
          console.log(1)
        }else
        localStorage.setItem("rhino", "0");
        getscore();
      }

    return(
        <> 
            <h1>Naming</h1>

            <input type="Checkbox" name="lion" id="lion" onClick={onChangeLionCheck}></input>
            <img src="lion.png"></img> 
            <br></br>

            <input type="Checkbox"  name="rhino" id="rhino" onClick={onChangeRhinoCheck}></input>
            <img src="rhino.png"></img>
            <br></br>

            <input type="Checkbox" name="camel" id="camel" onClick={onChangeCamelCheck}></input>
            <img src="camel.png"></img>
            <br></br>
            

            <br></br>
            <br></br>

            <label id="counter">[{score} points]</label>

            <br></br>
            <br></br>

            <div class="col-sm-4">
                <Button  class="btn btn-info next-page" onClick={validateForm}>Next <i class="fas fa-arrow-right"></i></Button>
            </div>
        </>

    );
}