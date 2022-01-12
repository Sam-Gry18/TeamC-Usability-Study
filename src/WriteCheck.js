import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import "jquery-ui-dist/jquery-ui"
import $ from 'jquery';


export default function WriteCheck(){ 

  const navigate = useNavigate();

  function validateForm() {
    special_next();
  }

  function onChangeEduCheck() {
    if(document.getElementById('edu').checked==true){
      localStorage.setItem("eduCheck", "1");
      console.log(1)
    }else
    localStorage.setItem("eduCheck", "0");
  }

  function onChangeWriteCheck() {
    if(document.getElementById('write').checked==true){
      localStorage.setItem("writeCheck", "1");
      console.log(1)
    }else
    localStorage.setItem("writeCheck", "0");
  }

  function onChangeBlindCheck() {
    if(document.getElementById('blind').checked==true){
      localStorage.setItem("blindCheck", "1");
      console.log(1)
    }else
    localStorage.setItem("blindCheck", "0");
  }

  //window.onload = onPageLoad();

  //function onPageLoad() {

   // console.log(localStorage.getItem("writeCheck"));
   // console.log(localStorage.getItem("eduCheck"));
   // console.log(localStorage.getItem("blindCheck"));
   /// if(localStorage.getItem("writeCheck")==='1') {
   //   $("#write").prop('checked', true);
   // }
   // if(localStorage.getItem("eduCheck")==='1') {
     // console.log("yes");
     // $("#edu").prop('checked', true);
    //}
  //}

  function special_next() {
    console.log("blind? " + localStorage.getItem("blindCheck"));
    if(localStorage.getItem("blindCheck")==="1") {
      navigate("/sec7");
  }else if(localStorage.getItem("blindCheck")==='0' && localStorage.getItem("writeCheck")==='1') {
      navigate("/sec6");
  }else{navigate("/sec3");}
}

    return(

      <>
          <h1>Patient</h1>
          
          <br></br>

          <input type="checkbox" id="write" name="write" onClick={onChangeWriteCheck}></input> 
          <label name="write">Tick the checkbox if the patient is NOT able to write </label>
          <br></br>
          <br></br>

          <input type="checkbox" id="blind" name="blind" onClick={onChangeBlindCheck}></input> 
          <label name="blind">Tick the checkbox if the patient is blind.</label>
          <br></br>
          <br></br>

          <p>Certain tests will be skipped if the patient is not able to write and the test will be marked differently.</p>

          <br></br>
          <br></br>

          <input type="checkbox" id="edu" name = "edu" onClick={onChangeEduCheck}></input>
          <label name="edu">Tick if subject has less than 12 years of education.</label>

          <br></br>
          <br></br>

          <div class="col-sm-4">
            <Button class="btn btn-primary" onClick={validateForm}>Next <i class="fas fa-arrow-right"></i></Button>
          </div>
          
      </>

    );
}