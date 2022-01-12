//React imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';

//Styling
//import Button from 'react-bootstrap/Button';
import { Button, makeStyles } from "@material-ui/core";
import DoneIcon from "@material-ui/icons";
import Form from 'react-bootstrap/Form';
import "jquery-ui-dist/jquery-ui"
import "./style.css";
import { theme } from './theme';
import { padding } from "@mui/system";


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


export default function Section1() {
  // Arrays containing data

  const diagnosisArray = [
    { id: 1, condition: "Post-LL Fracture Rehab" },
    { id: 2, condition: "Deterioration in General Condition" },
    { id: 3, condition: "Falls" },
    { id: 4, condition: "Respiratory" },
    { id: 5, condition: "Neurology" },
    { id: 6, condition: "Rehab Post-LL Amputation" },
    { id: 7, condition: "Rehab Post-General Surgery" },
    { id: 8, condition: "Post-UL Fracture Rehab" },
    { id: 9, condition: "Cognitive Decline / Dementia Care" },
    { id: 10, condition: "Other" },
  ],
    levelOfEducation = [
      { id: 1, level: "Primary" },
      { id: 2, level: "Secondary" },
      { id: 3, level: "Post-Secondary" },
      { id: 4, level: "Tertiary" },
    ],
    navigate = useNavigate(),
    classes = useStyles();

  const [diagnosis1, setDiagnosis] = useState("");
  const [presentCondition1, setPresentCondition] = useState("");
  const [medicalHistory1, setMedicalHistory] = useState("");
  const [drugHistory1, setDrugHistory] = useState("");
  const [smoking1, setSmoking] = useState("");
  const [alchohol1, setAlchohol] = useState("");
  const [education1, setEducation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }


  useEffect(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $(".next-page").hide();
  });

  // function to display options text area if option is selected
  function showOptionTextArea(e) {
    let selectedElement = $(e.target).find("option:selected").val();
    if (selectedElement === "Other") {
      $(".option-text-area").show().removeClass("hideFromView");
    } else {
      setDiagnosis($(e.target).find("option:selected").val());
      $(".option-text-area").hide().addClass("hideFromView");
    }
  }


  function validateCheckBoxes(typeOfCheck, target) {
    const elements = $(`.${typeOfCheck}`);
    const inputs = [elements[0], elements[1]];

    if ($(target).hasClass("selected")) {
      $(target).removeClass("selected");
      if (typeOfCheck === "smoking") {
        setSmoking("");
      } else {
        setAlchohol("");
      }
      inputs.forEach((input) => {
        if (target !== input) {
          $(input).removeAttr("disabled");
        }
      });
    } else {
      $(target).addClass("selected");
      if (typeOfCheck === "smoking") {
        setSmoking(target.value);
      } else {
        setAlchohol(target.value);
      }
      inputs.forEach((input) => {
        if (target !== input) {
          $(input).attr("disabled", true);
        }
      });
    }
  }

  //validate form
  function validateDiagnosis() {
    let isValid = false;
    let selectedOption = $("#diagnosis-select").find("option:selected");
    if (selectedOption.val() === "") {
      selectedOption.parent().addClass("error");
      isValid = false;
    } else {
      selectedOption.parent().removeClass("error");
      isValid = true;
    }
    return isValid;
  }

  function validateEducation() {
    let isValid = false;
    let selectedOption = $("#education-select").find("option:selected");
    if (selectedOption.val() === "") {
      selectedOption.parent().addClass("error");
      isValid = false;
    } else {
      setEducation(selectedOption.val());
      selectedOption.parent().removeClass("error");
      isValid = true;
    }
    return isValid;
  }

  function validateTextAreas() {
    let isValid = false;
    let inputs = $("textarea");
    let elements = [inputs[0], inputs[1], inputs[2], inputs[3]];
    if (!$(elements[0]).hasClass("hidden")) {
      if ($(elements[0]).val() === "") {
        $(elements[0]).addClass("error");
        isValid = false;
      } else {
        setDiagnosis($(elements[0]).val());
        $(elements[0]).removeClass("error");
        isValid = true;
      }
    }
    for (let i = 1; i < elements.length; i++) {
      if ($(elements[i]).val() === "") {
        $(elements[i]).addClass("error");
        isValid = false;
      } else {
        $(elements[i]).removeClass("error");
        isValid = true;
      }
    }
    return isValid;
  }

  function validateSmokingCheckbox() {
    let smokingElements = $(".smoking");
    let isValid = false;

    if ($(smokingElements[0]).hasClass("selected") || $(smokingElements[1]).hasClass("selected")) {
      isValid = true;
      $(smokingElements).removeClass("error");
    } else {
      $(smokingElements).addClass("error");
      isValid = false;
    }

    return isValid;
  }

  function validateAlchoholCheckbox() {
    let alcoholElements = $(".alcohol");
    let isValid = false;

    if ($(alcoholElements[0]).hasClass("selected") || $(alcoholElements[1]).hasClass("selected")) {
      isValid = true;
      $(alcoholElements).removeClass("error");
    } else {
      $(alcoholElements).addClass("error");
      isValid = false;
    }

    return isValid;
  }

  function validateForm() {
    let diagnosis = validateDiagnosis(),
      education = validateEducation(),
      textArea = validateTextAreas(),
      smoking = validateSmokingCheckbox(),
      alchohol = validateAlchoholCheckbox();
     
    if (diagnosis && education && textArea && smoking && alchohol) {
      localStorage.setItem("diagnosis", diagnosis1);
      localStorage.setItem("present-condition", presentCondition1);
      localStorage.setItem("medical-history", medicalHistory1);
      localStorage.setItem("drug-history", drugHistory1);
      localStorage.setItem("smoking", smoking1);
      localStorage.setItem("alchohol", alchohol1);
      localStorage.setItem("education", education1);
      navigate("/mobility")
    } else {
      alert("Form is invalid");
      $(".next-page").hide();
    }
  }


  return (
    <div className={classes.background}>
      <form onSubmit={handleSubmit}>
        <h3 style={{ fontWeight: "bold" }}> Section A: Geriatric Consultant </h3>
        <div className={classes.backgroundTitles}>
          <div class="panel-heading">
            <h3 class="panel-title" style={{ fontWeight: "bold" }}>1. Referral Details</h3>
          </div>
          <div className={classes.background}>
            <div class="form-group row">
              <div></div>
              <label for="diagnosis" className={classes.Text}>Diagnosis:</label>
              <div class="col-sm-5">
                <div class="row mb-5">
                  <div></div>
                  <select className={classes.TextArea} style={{ fontSize: "12px", width: "210px" }} id="diagnosis-select" onChange={showOptionTextArea}>

                    <option selected disabled value=""> --Please choose an option--</option>
                    {diagnosisArray.map((selection) => (
                      <option id={selection.id} value={selection.condition} >
                        {selection.condition}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="row mb-5 option-text-area hideFromView">
                  <div class="form-floating option-text-area hideFromView">
                  <div class="form-group row">
                  <label for="floatingTextarea option-text-area hideFromView" style={{ marginTop: "-40px" }} className={classes.Text} >Other Diagnosis: </label>
                  </div>
                    <textarea class={`form-control option-text-area hideFromView ${classes.TextArea}`} placeholder="Add additional diagnosis here" id="otherTextarea" style={{ height: "100px", resize: "none",fontSize: "15px", width:"100%"}} onInput={(e) => { setDiagnosis(e.target.value) }}></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="presentCondition" style={{ marginTop: "-40px" }} className={classes.Text}>History of Present Condition: </label>
              <div class="col-sm-10">
                <textarea class="form-control" placeholder="Input patient's present condition history" style={{ fontSize: "15px",resize: "none", height:"100px" }} id="historyTextarea" className={classes.TextArea} onInput={(e) => { setPresentCondition(e.target.value) }}></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label for="pastCondition" className={classes.Text}>Past Medical History: </label>
              <div class="col-sm-10">
                <textarea class="form-control" placeholder="Input patient's medical history" style={{ fontSize: "15px",resize: "none",height:"100px" }} id="pastTextarea" className={classes.TextArea} onInput={(e) => { setMedicalHistory(e.target.value) }}></textarea>
              </div>
            </div>
            <div class="form-group row">
              <label for="drugHistory" className={classes.Text}>Drug History: </label>
              <div class="col-sm-10">
                <textarea class="form-control" placeholder="Input patient's drug history" style={{ fontSize: "15px",resize: "none",height:"100px" }} id="drugTextarea" className={classes.TextArea} onInput={(e) => { setDrugHistory(e.target.value) }}></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.backgroundTitles}>
          <div class="panel-heading">
            <h3 class="panel-title" style={{ fontWeight: "bold" }}>2. Social Habits</h3>
          </div>
          <div className={classes.background}>
            <fieldset class="form-group">
              <div class="row">
                <label className={classes.Text}>Smoking: </label>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input class={`${classes.CheckBox} smoking`} type="checkbox" value="yes" id="yesSmoking" onClick={(e) => { validateCheckBoxes("smoking", e.target); }}></input>
                    <label className={classes.CheckBoxText} for="yesSmoking">
                      Yes
                    </label>
                  </div>
                  <div class="form-check" >
                    <input class={`${classes.CheckBox} smoking`} type="checkbox" value="no" id="noSmoking" onClick={(e) => { validateCheckBoxes("smoking", e.target) }}></input>
                    <label className={classes.CheckBoxText} for="noSmoking">
                      No
                    </label>
                  </div>

                </div>
              </div>
            </fieldset>
            <fieldset class="form-group">
              <div class="row">
                <label className={classes.Text}>Alcohol: </label>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input class={`${classes.CheckBox} alcohol`} type="checkbox" value="yes" id="yesAlcohol" onClick={(e) => { validateCheckBoxes("alcohol", e.target) }}></input>
                    <label className={classes.CheckBoxText} for="yesAlcohol">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input class={`${classes.CheckBox} alcohol`} type="checkbox" value="no" id="noAlcohol" onClick={(e) => { validateCheckBoxes("alcohol", e.target) }}></input>
                    <label className={classes.CheckBoxText} for="noAlcohol">
                      No
                    </label>
                  </div>

                </div>
              </div>
            </fieldset>
          </div>
        </div>
        <div className={classes.backgroundTitles}>
          <div class="panel-heading">
            <h3 class="panel-title" style={{ fontWeight: "bold" }}>3. Level of Education</h3>
          </div>
          <div className={classes.background}>
            <label for="education" style={{ marginLeft: "-42%", padding: "0px 200px 20px -5%" }} className={classes.Text}>Education:</label>
            <div class="col-sm-5">
              <div class="row mb-5">
                <select style={{ marginTop: "11%", fontSize: "12px", width: "210px" }} className={classes.TextArea} id="education-select" onChange={(e) => { setEducation($(e.target).find("option:selected").val()) }}>
                  <option selected disabled value=""> --Please choose an option--</option>
                  {levelOfEducation.map((selection) => (
                    <option id={selection.id} value={selection.level}>
                      {selection.level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-4">
            <Button type="submit" variant="contained" className={classes.button} onClick={validateForm} size="large" > Submit <span style={{ padding_right: "10px", resize: "none" }}>
              <i class="fas fa-check" data-fa-transform="shrink-8 right-6"></i></span></Button>
          </div>
        </div>
      </form>
    </div>

  );
};