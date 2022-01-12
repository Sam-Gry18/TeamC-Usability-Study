import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Button} from 'react-bootstrap';
import ImagePreview from './ImagePreview';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
export default function Section4(){

    const [dataUri, setDataUri] = useState('');
    const isFullscreen = false;
    const cameraRef = React.useRef();

    const [score, setscore] = useState(0);

    function getscore() {

        var score = parseInt(localStorage.getItem("cube")) 
  
        setscore(score);
  
        var scoretemp = score + 
        + parseInt(localStorage.getItem("clock1")) + parseInt(localStorage.getItem("clock2")) + parseInt(localStorage.getItem("clock3")) + parseInt(localStorage.getItem("pattern"))
          
          localStorage.setItem("visuo",scoretemp.toString());
        };

    
    function handleTakePhoto (dataUri) {
        // Do stuff with the photo...
        console.log('takePhoto');
      }
    
      function handleCameraError (error) {
        console.log('handleCameraError', error);
      }
    
      function handleCameraStart (stream) {
        console.log('handleCameraStart');
      }
    
      function handleCameraStop () {
        console.log('handleCameraStop');
      }

      function handleTakePhotoAnimationDone (dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
        localStorage.setItem("cubepic",dataUri);
      }

      function clearPhoto() {
        setDataUri('');
        localStorage.setItem("cubepic","");
    }


      function submitPhoto() {
        const url = "http://localhost:3000/api/img";
        const request = axios.post(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                img: dataUri
            })
        }).catch(error => {
            console.warn(error);
        });
    }

    const navigate = useNavigate();

    function validateForm() {
        alert("Form is valid");
    }

    function special_back() {
        if(localStorage.getItem("blindCheck")==='1') {
          navigate("/moca");
      }if(localStorage.getItem("blindCheck")==='0' && localStorage.getItem("writeCheck")==='1') {
        navigate("/moca")
      }else{navigate("/sec3");}
      }

    function onChangeCubeCheck() {
        if(document.getElementById('cube').checked==true){
          localStorage.setItem("cube", "1");
          console.log(1)
        }else
        localStorage.setItem("cube", "0");
        getscore();
      }
    

    return(
        <>
            
            <h1> Visuospatial/Executive</h1>
            <img src="cube.png"></img>
            
            <div>
                {(dataUri)
                    ? <ImagePreview dataUri={dataUri}
                                    isFullscreen={isFullscreen}
                    /> :
                    <Camera ref={cameraRef}
                            onTakePhoto={(dataUri) => {
                                handleTakePhoto(dataUri);
                            }}
                            onTakePhotoAnimationDone={(dataUri) => {
                                handleTakePhotoAnimationDone(dataUri);
                            }}
                            onCameraError={(error) => {
                                handleCameraError(error);
                            }}
                            onCameraStart={(stream) => {
                                handleCameraStart(stream);
                            }}
                            onCameraStop={() => {
                                handleCameraStop();
                            }}
                    />
                }
            </div>

            <Button class="btn btn-primary" onClick={clearPhoto}>Clear Photo</Button>

            <br></br>
            <br></br>

            <label name="cube">Correct? </label>
            <input type="Checkbox"  name="cube" id="cube" onClick={onChangeCubeCheck}></input>
            
            <label id="counter">[{score} points]</label>

            <br></br>

            <div class="col-sm-4">
                <br></br>

                <Button class="btn btn-primary" onClick={()=> {navigate("/sec5");}}>Next <i class="fas fa-arrow-right"></i></Button>
            </div>
        
        </>

    

    );
}