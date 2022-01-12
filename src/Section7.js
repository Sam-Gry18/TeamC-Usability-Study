import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import { Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

export default function Section7(){ 

    const navigate = useNavigate();

    function validateForm() {
        navigate("/sec8");
    }

    return(

        <>
            <h1>Memory</h1>

            <p>Read list of words, subject must repeat them. Do 2 trials, even if 1st trial is succesful.
            Do a recall after 5 minutes.</p>

            <br></br>
            <br></br>
            <table>
            
              <tr>
                <th>FACE</th>
                <th>VELVET</th>  
                <th>CHURCH</th>   
                <th>DAISY</th>   
                <th>RED</th>
              </tr>
              <tr>
                <td><input type="Checkbox" name="face1" id="face1" ></input></td>
                <td><input type="Checkbox" name="velvet1" id="velvet1" ></input></td>
                <td><input type="Checkbox" name="church1" id="church1" ></input></td>
                <td><input type="Checkbox" name="daisy1" id="daisy1" ></input></td>
                <td><input type="Checkbox" name="red1" id="red1" ></input></td>
              1st TRIAL 
              </tr>
              <tr>
              <td><input type="Checkbox" name="face2" id="face2" ></input></td>
                <td><input type="Checkbox" name="velvet2" id="velvet2" ></input></td>
                <td><input type="Checkbox" name="church2" id="church2" ></input></td>
                <td><input type="Checkbox" name="daisy2" id="daisy2" ></input></td>
                <td><input type="Checkbox" name="red2" id="red2" ></input></td>
              2nd TRIAL
              </tr>
            
            </table> 

            <br></br>
            <br></br>

            <label>[No points]</label>
            <br></br>
            <br></br>

            <div class="col-sm-4">

                <Button class="btn btn-info next-page" onClick={validateForm}>Next <i class="fas fa-arrow-right"></i></Button>
            </div>
            
        </>
    

    

    );
}