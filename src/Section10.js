import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

export default function Section10(){ 

    const navigate = useNavigate();

    const [score, setscore] = useState(0);

    function getscore() {

        var one = parseInt(localStorage.getItem("one"));
        var two = parseInt(localStorage.getItem("two"));
        var three = parseInt(localStorage.getItem("three"));
        var four = parseInt(localStorage.getItem("four"));
        var five = parseInt(localStorage.getItem("five"));

        var temp = one + two + four + three + five;
        if (temp===5){
          setscore(3);
        }else if (temp === 4) {
          setscore(3);
        }else if (temp === 3) {
          setscore(2);
        }else if (temp === 2) {
          setscore(2);
        }else if (temp === 1) {
          setscore(1);
        }else if (temp === 0) {
          setscore(0);
        }
        localStorage.setItem("subtraction",temp.toString());

        var scoretemp = temp + parseInt(localStorage.getItem("letters")) 
        + parseInt(localStorage.getItem("front")) + parseInt(localStorage.getItem("back"))
        
        localStorage.setItem("attention",scoretemp.toString());
      };

    function validateForm() {
        navigate("/sec11");
    }

    function onChangeoneCheck() {
      if(document.getElementById('one').checked==true){
        localStorage.setItem("one", "1");
        console.log(1)
      }else
      localStorage.setItem("one", "0");
      getscore();
      }

      function onChangetwoCheck() {
        if(document.getElementById('two').checked==true){
          localStorage.setItem("two", "1");
          console.log(1)
        }else
        localStorage.setItem("two", "0");
        getscore();
      }

      function onChangethreeCheck() {
        if(document.getElementById('three').checked==true){
          localStorage.setItem("three", "1");
          console.log(1)
        }else
        localStorage.setItem("three", "0");
        getscore();
      }

      function onChangefourCheck() {
        if(document.getElementById('four').checked==true){
          localStorage.setItem("four", "1");
          console.log(1)
        }else
        localStorage.setItem("four", "0");
        getscore();
      }

      function onChangefiveCheck() {
        if(document.getElementById('five').checked==true){
          localStorage.setItem("five", "1");
          console.log(1)
        }else
        localStorage.setItem("five", "0");
        getscore();
      }

    return(

        <>
            
            <h1>Attention</h1> 

            <p>Serial 7 subtraction starting at 100.</p>
            <br></br>
            <br></br>

            <input type="Checkbox" name="one" id="one" onClick={onChangeoneCheck}></input> <label name="one">93</label>
            <br></br>
            <input type="Checkbox" name="two" id="two" onClick={onChangetwoCheck}></input><label name="two">86</label> 
            <br></br>
            <input type="Checkbox" name="three" id="three" onClick={onChangethreeCheck}></input><label name="three">79</label> 
            <br></br>
            <input type="Checkbox" name="four" id="four" onClick={onChangefourCheck}></input><label name="four">72</label> 
            <br></br>
            <input type="Checkbox" name="five" id="five" onClick={onChangefiveCheck}></input><label name="five">65</label>

            <br></br>
            <br></br>

            <p>4 or 5 correct subtractions: 3 pts, 2 or 3 correct: 2 pts, 1 correct: 1 pt, 0 correct: 0 pt.</p>

            <label id="counter">[{score} points]</label>

            <br></br>
            <br></br>
            
            <div class="col-sm-4">

                <Button class="btn btn-info next-page" onClick={validateForm}>Next <i class="fas fa-arrow-right"></i></Button>
            </div>
            
        </>

    );
}