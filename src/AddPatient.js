import React, { useState } from "react";

import { app } from "../src/firebaseConfig";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {
    getFirestore,
    doc,
    onSnapshot,
    getDocs,
    collection
} from "firebase/firestore";
import { theme } from './theme';
import { Button, makeStyles} from "@material-ui/core";


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



const db = getFirestore();


export default function AddPatient() {
    const [patient, setPatient] = useState(null),
        [pastResults, setPastResults] = useState(null),
        navigate = useNavigate(),
        classes = useStyles();



    async function getPatient() {
        let id = $("#search-patient").val();
        if (id === "") {
            alert("No id was inputted")
            setPatient(null);
        } else {
            const ref = doc(db, "patients", id);
            await onSnapshot(ref, (doc) => {
                if (typeof doc.data() === "undefined") {
                    alert("No patient found, please try again");
                    setPatient(null);
                    $("#next-button").addClass("hideFromView");
                } else {
                    setPatient(doc.data());
                    localStorage.setItem("id", id);
                    getPreviousResults(id);
                    $("#next-button").removeClass("hideFromView");
                }
            });
        }
    }

    async function getPreviousResults(id) {
        let previousResults = [];
        const allRecords = await getDocs(collection(db, "patients", id, "SectionA"));
        allRecords.forEach((doc) => {
            previousResults.push({
                date: doc.id,
                result: doc.data(),
            });
        });
        setPastResults(previousResults);
    }

    function showPastResults() {
        if (pastResults !== null) {
            if (pastResults.length > 0) {
                return (
                    <div>
                        <h2 class={`${classes.Text}`}>Past Results:</h2>
                        {pastResults.map((record, index) => (
                            <div class="accordion w-75 p-3 centreContent" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class={`accordion-button ${classes.Text}`} type="button" data-bs-toggle="collapse" data-bs-target={`#result-${index}`} aria-expanded="true" aria-controls="collapseOne">
                                            {record.date}
                                        </button>
                                    </h2>
                                    <div id={`result-${index}`} class="accordion-collapse collapse" aria-labelledby="Result History">
                                        <div class="accordion-body">
                                            <div>
                                                <h2 class={`${classes.Text}`}>Section 1</h2>
                                                <ul>
                                                    <li class={`${classes.Text}`}>Diagnosis: <span>{record.result.section1.diagnosis}</span></li>
                                                    <li class={`${classes.Text}`}>Present Condition: <span>{record.result.section1.present_condition}</span></li>
                                                    <li class={`${classes.Text}`}>Medical History: <span>{record.result.section1.medical_history}</span></li>
                                                    <li class={`${classes.Text}`}>Drug Hisory: <span>{record.result.section1.drug_history}</span></li>
                                                    <li class={`${classes.Text}`}>Smoking: <span>{record.result.section1.smoking}</span></li>
                                                    <li class={`${classes.Text}`}>Alchohol: <span>{record.result.section1.alchohol}</span></li>
                                                    <li class={`${classes.Text}`}>Level of Education: <span>{record.result.section1.education}</span></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h2 class={`${classes.Text}`}>Mobility Index: <span class={`${classes.Text}`}>{record.result.mobility_index}</span></h2>
                                            </div>
                                            <div>
                                                <h2 class={`${classes.Text}`}>MOCA Test</h2>
                                                <ul>
                                                    <li class={`${classes.Text}`}>Visual: <span>{record.result.moca.visual}</span></li>
                                                    <li class={`${classes.Text}`}>Naming: <span>{record.result.moca.naming}</span></li>
                                                    <li class={`${classes.Text}`}>Memory: <span>{record.result.moca.memory}</span></li>
                                                    <li class={`${classes.Text}`}>Attention: <span>{record.result.moca.attention}</span></li>
                                                    <li class={`${classes.Text}`}>Language: <span>{record.result.moca.language}</span></li>
                                                    <li class={`${classes.Text}`}>Abstraction: <span>{record.result.moca.abstraction}</span></li>
                                                    <li class={`${classes.Text}`}>Recall: <span>{record.result.moca.recall}</span></li>
                                                    <li class={`${classes.Text}`}>Orientation: <span>{record.result.moca.orientation}</span></li>
                                                    <li class={`${classes.Text}`}>Final Score: <span>{record.result.moca.final_score}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        }
    }



    return (
        <div className={classes.background}>
            <div class="input-group mb-3 w-75 p-3 centreContent">
                <span class={`input-group-text ${classes.Text}`} id="basic-addon1">Search for patient by ID</span>
                <input type="text" class="form-control" id="search-patient" ></input>
                <button class="btn btn-outline-secondary searchButton" type="button" id="edit-button" onClick={getPatient}><i class="fas fa-search"></i></button>
            </div>
            <div>
                {patient !== null &&
                    <div>
                        <span>
                            <p class={`${classes.Text}`}>Patient Name: {patient.name}</p>
                            <p class={`${classes.Text}`}>Patient Age: {patient.age}</p>
                            <div>
                                {showPastResults()}
                            </div>
                        </span>
                    </div>
                }
            </div>
            <Button class={`next-page hideFromView text ${classes.button}` } id="next-button" onClick={() => { navigate("/questions"); }}>Next <i class="fas fa-arrow-right"></i></Button>
        </div>
    );
}