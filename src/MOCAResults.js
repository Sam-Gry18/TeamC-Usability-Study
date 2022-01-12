import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";


export default function MOCAResults(){ 

    const [score, setScore] = useState(0);
    const [mis, setMIS] = useState(0);
    const [max, setMax] = useState(0);
    const [viso, setviso] = useState(0);
    const [name, setname] = useState(0);
    const [attn, setattn] = useState(0);
    const [lang, setlang] = useState(0);
    const [abs, setabs] = useState(0);
    const [recall, setrecall] = useState(0);
    const [orien, setorien] = useState(0);
    const [status, setstatus] = useState("");

    const navigate = useNavigate();

    function validateForm() {
        
    }

    function calculateTotal() {

        setMIS(parseInt(localStorage.getItem("mis")))

        console.log("visuo"+ localStorage.getItem("visuo"))
        console.log("attention"+ localStorage.getItem("attention"))
        console.log("naming"+ localStorage.getItem("naming"))
        console.log("language"+ localStorage.getItem("language"))
        console.log("abstraction"+ localStorage.getItem("abstraction"))
        console.log("delayedrecall"+ localStorage.getItem("delayedrecall"))
        console.log("orientation"+ localStorage.getItem("orientation"))

        setviso(parseInt(localStorage.getItem("visuo")));
        setname(parseInt(localStorage.getItem("naming")));
        setattn(parseInt(localStorage.getItem("attention")));
        setlang(parseInt(localStorage.getItem("language")));
        setabs(parseInt(localStorage.getItem("abstraction")));
        setrecall(parseInt(localStorage.getItem("delayedrecall")));
        setorien(parseInt(localStorage.getItem("orientation")));

        var total = parseInt(localStorage.getItem("visuo")) + parseInt(localStorage.getItem("naming")) + parseInt(localStorage.getItem("attention")) + parseInt(localStorage.getItem("language"))
        + parseInt(localStorage.getItem("abstraction")) + parseInt(localStorage.getItem("delayedrecall")) + parseInt(localStorage.getItem("orientation"));

        if(localStorage.getItem("eduCheck")==='1') {
            total = total + 1;
        }

        if(total>30) {
            total = 30;
        }

        localStorage.setItem("total ", total.toString());

        if(parseInt(localStorage.getItem("blindCheck"))==='1' ) {
            setMax(22); 
        }else if (localStorage.getItem("blindCheck")==='0' && localStorage.getItem("writeCheck")==='1')
            setMax(25);
            else{
                setMax(30);
            }

        var temptot = Math.round((total*30)/max);

        setScore(temptot);
        
        if(total>25) {
            setstatus("No Cognitive Impairment");
        }else if(total>17){
            setstatus("Mild Cognitive Impairment");
        }else if(total>9) {
            setstatus("Moderate Cognitive Impairment");
        }else {
            setstatus("Severe Cognitive Impairment");
        }
        localStorage.setItem("moca_final",`${temptot} - ${status}`);
    }

    return(

        <>    
            <script>calculateTotal();</script> 
            <h1>Montreal Cognitive Assessment (MOCA(R)) Score</h1>
            <p>Version 8.1 English</p>

           <h2>www.mocatest.org</h2>
           
           <p>(C) Z. Nasreddine MD</p>
           <br></br>

           <p>Training and Certification are required to ensure accuracy.</p>

           <br></br>
           <h1>Results:</h1>
           <br></br>

           <h2>Visuospatial/Executive: {viso}</h2>
           <br></br>
           <h2>Naming: {name}</h2>
           <br></br>
           <h2>Memory: No Points</h2>
           <br></br>
           <h2>Attention: {attn}</h2>
           <br></br>
           <h2>Language: {lang}</h2>
           <br></br>
           <h2>Abstraction: {abs}</h2>
           <br></br>
           <h2>Delayed Recall: {recall}</h2>
           <br></br>
           <h2>Orientation: {orien}</h2>
           <br></br>

           <br></br>

           <h2>MIS:{mis}/15</h2>

           <br></br>

           <h2>Total:{score}/{max} {status}</h2>

           <br></br>

           <div class="col-sm-4">
                <Button type="submit" class="btn btn-primary" onClick={calculateTotal}>Get Results</Button>
                <Button type="submit" class="btn btn-primary" onClick={()=>{navigate("/review");}}>Review Results</Button>
            </div>

        </>

    );
}