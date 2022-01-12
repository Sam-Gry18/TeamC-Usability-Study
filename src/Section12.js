import { Checkbox } from '@material-ui/core';
import 'react-html5-camera-photo/build/css/index.css';
import { Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import "jquery-ui-dist/jquery-ui"
import $ from 'jquery';

export default function Section12(){ 

    const [seconds, setSeconds] = useState(60)
    const [paused, setPaused] = useState(false)

    const [score, setscore] = useState(0);

    function getscore() {

        var scoretemp = parseInt(localStorage.getItem("rep1")) + parseInt(localStorage.getItem("rep2")) + parseInt(localStorage.getItem("sec12"));
        
        localStorage.setItem("language",scoretemp.toString());

        var scor = parseInt(localStorage.getItem("sec12"));
        setscore(scor);
  
      };


    const startTimer = () => {

        const current = setInterval(() => {
            
            setSeconds(seconds => seconds - 1)
        }, 1000)

        document.querySelector('.start-button').setAttribute("disabled", "true")
        document.querySelector('.stop-button').removeAttribute("disabled")

            const pauseButton = document.createElement("Button")
            pauseButton.innerText = 'pause'
            pauseButton.className="pause-button"
            document.querySelector('.counter-container').appendChild(pauseButton)
            setPaused(false)

            pauseButton.addEventListener("click", () => {

                if (pauseButton.innerText === "pause"){

                    pauseButton.innerText = "resume"
                    clearInterval(current)
                    setPaused(true)

                } else {

                    pauseButton.innerText = 'pause'

                    if(!setPaused) {
                    
                        setInterval(() => {
                        
                            setSeconds(seconds => seconds - 1)
                        }, 1000)
                        setPaused(false)
                    }
                     
                }
            })
    }

    const stopTimer = () => {

        clearInterval(setSeconds(60))

        document.querySelector('.stop-button').setAttribute("disabled", "true")
        document.querySelector('.start-button').removeAttribute("disabled")
        document.querySelector('.pause-button').remove()
        setPaused(true)
    }

    const currentCount = seconds

    const navigate = useNavigate();

    function validateForm() {
        if(document.getElementById('count').value<0 || document.getElementById('count').value == null || document.getElementById('count').value == ""){
            alert("Form is invalid. Please enter a number in the field.");
        }else{
            navigate("/sec13");
        }   
    }

    const [num_inputs, setInputs] = useState();

    const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setInputs(value);
    };

      function onChangeSec12countCheck() {
        if(document.getElementById('count').value>10){
            localStorage.setItem("sec12", "1");
            $("#sec12").prop('checked', true);
            setscore(1);
            console.log(1)
          }else{
            localStorage.setItem("sec12", "0");
            $("#sec12").prop('checked', false);
            setscore(0);
          }  
          getscore();  
      }

    return(

        <>
            <h1>Language</h1>

            <br></br>

            <div className="counter-container">
                Timer:<br></br>
                <Button className="start-button" onClick={startTimer}>start</Button>
                <Button className="stop-button" onClick={stopTimer}>stop</Button>
                
                <p id="counter">{currentCount}</p>
            </div>

            <br></br>

            <p>Fluency: Name maximum number of words in one minute that begin with letter F. </p>
            
            <br></br>

            <br></br>

            <input type="number" id="count" name="count" value={num_inputs} onChange={onChangeSec12countCheck} size = "1" /> <label name="count">(Number of words is 11 or more)</label>

            <br></br>
            <br></br>

            <label id="counter">[{score} points]</label>

            <br></br>
            
            <div class="col-sm-4">
                <br></br>

                <Button class="btn btn-info next-page" onClick={validateForm}>Next<i class="fas fa-arrow-right"></i></Button>
            </div>
            
        </>

    );
}