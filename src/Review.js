import React from "react";
import "./style.css";
import { theme } from './theme';
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import { app } from "../src/firebaseConfig";
import { async } from "@firebase/util";
import {
    doc,
    setDoc,
    getFirestore,
  } from "firebase/firestore";
import { Button, makeStyles} from "@material-ui/core";


  const db = getFirestore();
  let d = new Date();

  const useStyles = makeStyles({
    button: {
      ...theme.button
    },
    background: {
      ...theme.background
    },
    backgroundTitles: {
      ...theme.backgroundTitles
    },
  
    Text: {
      ...theme.Text
    },
  
    CheckBoxText: {
      ...theme.CheckBoxText
    },
  
    CheckBox: {
      ...theme.CheckBox
    },
  
    TextArea: {
      ...theme.TextArea
    },
  
  })



export default function Review() {

    //array containing all the elements to edit
    const reviewResults = [
        { id: "diagnosis", name: "Diagnosis", value: localStorage.getItem("diagnosis") },
        { id: "present-condition", name: "History of Present Condition", value: localStorage.getItem("present-condition") },
        { id: "medical-history", name: "Past Medical History", value: localStorage.getItem("medical-history") },
        { id: "drug-history", name: "Drug History", value: localStorage.getItem("drug-history") },
        { id: "smoking", name: "Smoking", value: localStorage.getItem("smoking") },
        { id: "alchohol", name: "Alchohol", value: localStorage.getItem("alchohol") },
        { id: "education", name: "Level of Education", value: localStorage.getItem("education") },
        {id:"mobility-index", name: "Charlson Co-Morbidity Index", value: localStorage.getItem("mobility-index")}
    ],
    navigate = useNavigate(),
    classes = useStyles();

    function enableEdit(target,category){
        let icon = $(target).children(),
            input =  $(`#${category}`);
        if(icon.hasClass("fa-edit")){
            icon.removeClass("fa-edit").addClass("fa-check");
            input.removeAttr("disabled");
        }else{
            icon.removeClass("fa-check").addClass("fa-edit");
            input.attr("disabled","disabled");
        }
    }

    function updateValue(target,value){
        localStorage.setItem(target.id,value);
    }

    function saveResults(){
        saveToDB().then(()=>{
            alert("Results have been successfully saved");
            localStorage.clear();
            alert("Redirecting to main page");
            navigate("/");
        }).catch(()=>{
            alert("Error with saving to db, please try again");
        });
        
    }

    async function saveToDB(){
        const ref = doc(db, "patients", localStorage.getItem("id"));
        const date = `${d.getDate()}-${d.getMonth()+1}-${d.getUTCFullYear()} at ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        const patientReference = doc(ref, "SectionA",date);
        setDoc(patientReference, {
            section1:{
                diagnosis: localStorage.getItem("diagnosis"),
                present_condition: localStorage.getItem("present-condition"),
                medical_history: localStorage.getItem("medical-history"),
                drug_history: localStorage.getItem("drug-history"),
                smoking: localStorage.getItem("smoking"),
                alchohol: localStorage.getItem("alchohol"),
                education: localStorage.getItem("education"),
            },
            mobility_index: localStorage.getItem("mobility-index"),
            moca:{
                visual: parseInt(localStorage.getItem("visuo")),
                naming: parseInt(localStorage.getItem("naming")),
                memory: "no points",
                attention: parseInt(localStorage.getItem("attention")),
                language: parseInt(localStorage.getItem("language")),
                abstraction: parseInt(localStorage.getItem("abstraction")),
                recall: parseInt(localStorage.getItem("delayedrecall")),
                orientation: parseInt(localStorage.getItem("orientation")),
                final_score: localStorage.getItem("moca_final")
            },
        });
    }


    return (
        <div>
        <form>
            <h3 style={{ fontWeight: "bold" }}> Results Obtained </h3>
            {reviewResults.map((selection) => (
                <div class="panel panel-default w-75 p-3 centreContent">
                    <div class={`panel-heading ${classes.Text}`}>{selection.name}</div>
                    <div class="panel-body">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control"  id={selection.id} defaultValue={selection.value} aria-label={selection.id} aria-describedby="button-addon2" disabled onInput={(e)=> {updateValue(e.target,e.target.value)}}></input>
                            <button class="btn btn-outline-secondary" type="button" id="edit-button" onClick={(e)=> {enableEdit(e.target,selection.id)}}><i class="fas fa-edit"></i></button>
                        </div>
                    </div>
                </div>
            ))}
        </form>
        <Button class={`text ${classes.button}` } id="next-button" onClick={saveResults}>Confirm Results</Button>
        </div>
    )
}
