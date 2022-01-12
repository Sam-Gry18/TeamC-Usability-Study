import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

export default function Section15(){ 

    const navigate = useNavigate();

    const [score, setscore] = useState(0);

    function getscore() {

        var score = parseInt(localStorage.getItem("date")) + parseInt(localStorage.getItem("month")) + parseInt(localStorage.getItem("year"))
        + parseInt(localStorage.getItem("day")) + parseInt(localStorage.getItem("place")) + parseInt(localStorage.getItem("city"))
        setscore(score);
        localStorage.setItem("orientation",score.toString());
  
      };

    function validateForm() {
        navigate("/results");
    }

    function onChangeDateCheck() {
        if(document.getElementById('date').checked==true){
          localStorage.setItem("date", "1");
          console.log(1)
        }else
        localStorage.setItem("date", "0");
        getscore()
      } 
      
      function onChangeMonthCheck() {
        if(document.getElementById('month').checked==true){
          localStorage.setItem("month", "1");
          console.log(1)
        }else
        localStorage.setItem("month", "0");
        getscore()
      }  

      function onChangeYearCheck() {
        if(document.getElementById('year').checked==true){
          localStorage.setItem("year", "1");
          console.log(1)
        }else
        localStorage.setItem("year", "0");
        getscore()
      } 
      
      function onChangeDayCheck() {
        if(document.getElementById('day').checked==true){
          localStorage.setItem("day", "1");
          console.log(1)
        }else
        localStorage.setItem("day", "0");
        getscore()
      }  

      function onChangePlaceCheck() {
        if(document.getElementById('place').checked==true){
          localStorage.setItem("place", "1");
          console.log(1)
        }else
        localStorage.setItem("place", "0");
        getscore()
      }  

      function onChangeCityCheck() {
        if(document.getElementById('city').checked==true){
          localStorage.setItem("city", "1");
          console.log(1)
        }else
        localStorage.setItem("city", "0");
        getscore()
      }  
      

    return(

        <>
            <h1>Orientation</h1>

            <input type="Checkbox" name="date" id="date" onClick={onChangeDateCheck}></input>
            <label>Date</label>

            <br></br>

            <input type="Checkbox" name="month" id="month" onClick={onChangeMonthCheck}></input>
            <label>Month</label>

            <br></br>

            <input type="Checkbox" name="year" id="year" onClick={onChangeYearCheck}></input>
            <label>Year</label>

            <br></br>

            <input type="Checkbox" name="day" id="day" onClick={onChangeDayCheck}></input>
            <label>Day</label>

            <br></br>

            <input type="Checkbox" name="place" id="place" onClick={onChangePlaceCheck}></input>
            <label>Place</label>

            <br></br>

            <input type="Checkbox" name="city" id="city" onClick={onChangeCityCheck}></input>
            <label>City</label>

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