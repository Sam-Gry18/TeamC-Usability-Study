import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

export default function Section14(){ 

    const navigate = useNavigate();

    const [mis, setmis] = useState(0);

    const [score, setscore] = useState(0);

    function getscore() {

        var score = parseInt(localStorage.getItem("velvetx3")) + parseInt(localStorage.getItem("daisyx3")) 
        + parseInt(localStorage.getItem("facex3")) + parseInt(localStorage.getItem("redx3")) + parseInt(localStorage.getItem("churchx3"))
        setscore(score);
        localStorage.setItem("delayedrecall",score.toString());
        console.log(score);
  
      };

    function validateForm() {
        navigate("/sec15");
    }

    function getMIS() {
      var mis = parseInt(localStorage.getItem("redx1")) + parseInt(localStorage.getItem("redx2")) + parseInt(localStorage.getItem("redx3")) + parseInt(localStorage.getItem("velvetx1"))
      + parseInt(localStorage.getItem("velvetx2")) + parseInt(localStorage.getItem("velvetx3")) + parseInt(localStorage.getItem("facex1")) + parseInt(localStorage.getItem("facex2")) + parseInt(localStorage.getItem("facex3"))
      + parseInt(localStorage.getItem("daisyx1")) + parseInt(localStorage.getItem("daisyx2")) + parseInt(localStorage.getItem("daisyx3")) + parseInt(localStorage.getItem("churchx1"))
      + parseInt(localStorage.getItem("churchx2")) + parseInt(localStorage.getItem("churchx3"))
      setmis(mis);
      localStorage.setItem("mis",mis.toString());

    };

    function onChangeredx1Check() {
        if(document.getElementById('redx1').checked==true){
          localStorage.setItem("redx1", "1");
          console.log(1)
        }else
        localStorage.setItem("redx1", "0");
        getMIS();
    }

    function onChangeredx2Check() {
      if(document.getElementById('redx2').checked==true){
        localStorage.setItem("redx2", "1");
        console.log(1)
      }else
      localStorage.setItem("redx2", "0");
      getMIS();
  }

  function onChangeredx3Check() {
    if(document.getElementById('redx3').checked==true){
      localStorage.setItem("redx3", "1");
      console.log(1)
    }else
    localStorage.setItem("redx3", "0");
    getMIS();
    getscore();
}

function onChangevelvetx1Check() {
  if(document.getElementById('velvetx1').checked==true){
    localStorage.setItem("velvetx1", "1");
    console.log(1)
  }else
  localStorage.setItem("velvetx1", "0");
  getMIS();
}

function onChangevelvetx2Check() {
  if(document.getElementById('velvetx2').checked==true){
    localStorage.setItem("velvetx2", "1");
    console.log(1)
  }else
  localStorage.setItem("velvetx2", "0");
  getMIS();
}

function onChangevelvetx3Check() {
  if(document.getElementById('velvetx3').checked==true){
    localStorage.setItem("velvetx3", "1");
    console.log(1)
  }else
  localStorage.setItem("velvetx3", "0");
  getMIS();
  getscore();
}

function onChangechurchx1Check() {
  if(document.getElementById('churchx1').checked==true){
    localStorage.setItem("churchx1", "1");
    console.log(1)
  }else
  localStorage.setItem("churchx1", "0");
  getMIS();
}

function onChangechurchx2Check() {
  if(document.getElementById('churchx2').checked==true){
    localStorage.setItem("churchx2", "1");
    console.log(1)
  }else
  localStorage.setItem("churchx2", "0");
  getMIS();
}

function onChangechurchx3Check() {
  if(document.getElementById('churchx3').checked==true){
    localStorage.setItem("churchx3", "1");
    console.log(1)
  }else
  localStorage.setItem("churchx3", "0");
  getMIS();
  getscore();
}

function onChangefacex1Check() {
  if(document.getElementById('facex1').checked==true){
    localStorage.setItem("facex1", "1");
    console.log(1)
  }else
  localStorage.setItem("facex1", "0");
  getMIS();
}

function onChangefacex2Check() {
  if(document.getElementById('facex2').checked==true){
    localStorage.setItem("facex2", "1");
    console.log(1)
  }else
  localStorage.setItem("facex2", "0");
  getMIS();
}

function onChangefacex3Check() {
  if(document.getElementById('facex3').checked==true){
    localStorage.setItem("facex3", "1");
    console.log(1)
  }else
  localStorage.setItem("facex3", "0");
  getMIS();
  getscore();
}

function onChangedaisyx1Check() {
  if(document.getElementById('daisyx1').checked==true){
    localStorage.setItem("daisyx1", "1");
    console.log(1)
  }else
  localStorage.setItem("daisyx1", "0");
  getMIS();
}

function onChangedaisyx2Check() {
  if(document.getElementById('daisyx2').checked==true){
    localStorage.setItem("daisyx2", "1");
    console.log(1)
  }else
  localStorage.setItem("daisyx2", "0");
  getMIS();
}

function onChangedaisyx3Check() {
  if(document.getElementById('daisyx3').checked==true){
    localStorage.setItem("daisyx3", "1");
    console.log(1)
  }else
  localStorage.setItem("daisyx3", "0");
  getMIS();
  getscore();
}

    return(

        <>
            <div>
                <h1>Delayed Recall</h1>
                <h2>Memory Index Score (MIS) </h2>
            </div>

            <br></br>
            <br></br>

            <table>
            
              <tr>
                <th><input type="Checkbox" name="facex3" id="facex3" onClick={onChangefacex3Check}></input>FACE</th>
                <th><input type="Checkbox" name="velvetx3" id="velvetx3" onClick={onChangevelvetx3Check}></input>VELVET</th>  
                <th><input type="Checkbox" name="churchx3" id="churchx3" onClick={onChangechurchx3Check}></input>CHURCH</th>   
                <th><input type="Checkbox" name="daisyx3" id="daisyx3" onClick={onChangedaisyx3Check}></input>DAISY</th>   
                <th><input type="Checkbox" name="redx3" id="redx3" onClick={onChangeredx3Check}></input>RED</th>
                Has to recall words WITH NO CUE
              </tr>
              <tr>
                <td><input type="Checkbox" name="facex2" id="facex2" onClick={onChangefacex2Check}></input></td>
                <td><input type="Checkbox" name="velvetx2" id="velvetx2" onClick={onChangevelvetx2Check}></input></td>
                <td><input type="Checkbox" name="churchx2" id="churchx2" onClick={onChangechurchx2Check}></input></td>
                <td><input type="Checkbox" name="daisyx2" id="daisyx2" onClick={onChangedaisyx2Check}></input></td>
                <td><input type="Checkbox" name="redx2" id="redx2" onClick={onChangeredx2Check}></input></td>
              Category Cue
              </tr>
              <tr>
              <td><input type="Checkbox" name="facex1" id="facex1" onClick={onChangefacex1Check}></input></td>
                <td><input type="Checkbox" name="velvetx1" id="velvetx1" onClick={onChangevelvetx1Check}></input></td>
                <td><input type="Checkbox" name="churchx1" id="churchx1" onClick={onChangechurchx1Check}></input></td>
                <td><input type="Checkbox" name="daisyx1" id="daisyx1" onClick={onChangedaisyx1Check}></input></td>
                <td><input type="Checkbox" name="redx1"id="redx1" onClick={onChangeredx1Check}></input></td>
              Multiple Choice Cue
              </tr>
            
            </table> 

            <br></br>
            <br></br>

            <p>Points for UNCUED recall only</p>

            <br></br>

            <h2 id="counter">MIS = {mis}/15</h2>
            <br></br>

            <label id="counter">[{score} points]</label>

            <br></br>
            <br></br>
            
            <div class="col-sm-4">
                <br></br>
                <Button class="btn btn-info next-page" onClick={validateForm}>Next <i class="fas fa-arrow-right"></i></Button>
            </div>
            
        </>

    );
}