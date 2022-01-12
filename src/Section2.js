import React from 'react';
import { useNavigate } from "react-router-dom";
import {Button, makeStyles} from "@material-ui/core";
import { theme } from './theme';
import {Box} from "@mui/system";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { propTypes } from 'react-bootstrap/esm/Image';
import { useState } from "react";

const useStyles = makeStyles({
    button:{
        ...theme.button
    },
    background:{
        ...theme.background
    },
    textTitles:{
        ...theme.textTitles
    },
    body:{
        ...theme.body
    },
    score:{
        ...theme.score
    }
})

export default function Section2(){
    const diseasesArray = [
        { id: 1, condition: "Myocardial Infection", score: 1 }, 
        { id: 2, condition: "Congestive Heart Failure", score: 1 },
        { id: 3, condition: "Peripheral Vascular Disease", score: 1 },
        { id: 4, condition: "Cerebrovascular Disease", score: 1 },
        { id: 5, condition: "Dementia", score: 1 },
        { id: 6, condition: "Chronic Pulmonary Disease", score: 1 },
        { id: 7, condition: "Rheumatic Disease", score: 1 },
        { id: 8, condition: "Peptic Ulcer Disease", score: 1 },
        { id: 9, condition: "Liver Disease, mild", score: 1 },
        { id: 10, condition: "Diabetes without chronic complications", score: 1 },
        { id: 11, condition: "Renal Disease, mild to moderate", score: 1 },
        { id: 12, condition: "Diabetes with chronic complications", score: 2 },
        { id: 13, condition: "Hemiplegia or Paraplegia", score: 2 },
        { id: 14, condition: "Any Malignancy", score: 2 },
        { id: 15, condition: "Liver Disease, moderate to severe", score: 3 },
        { id: 16, condition: "Renal Disease, severe", score: 3 },
        { id: 17, condition: "HIV Infection, no AIDS", score: 3 },
        { id: 18, condition: "Metastatic Solid Tumor", score: 6 },
        { id: 19, condition: "AIDS", score: 6 },
    ];

    const [checkedState, setCheckedState] = useState(
        new Array(diseasesArray.length).fill(false)
    );
    
    const [totalScore, setTotal] = useState(0);
    const totalPossible = 38;

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        
        setCheckedState(updatedCheckedState);
        const totalScore = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + diseasesArray[index].score;
                }
                return sum;
            },
            0
        );   

        setTotal(totalScore);
        localStorage.setItem("mobility-index",`${totalScore} / ${totalPossible}`)
    };

    const classes = useStyles();
    const navigate = useNavigate();
    return(
            <Box component="div" sx={{overflow:"hidden"}}>
                <div className={classes.background}>
            <Form>
                <h3 className={classes.textTitles}> <u>Section B: Charlson Co-Morbidity Index</u> </h3> 
                    <Row className={classes.body} > 
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[0]} onChange={() => handleOnChange(0)} label="Myocardial Infection"/> </Col>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[1]} onChange={() => handleOnChange(1)} label="Congestive Heart Failure" /> </Col>
                    </Row>   
                    <Row className={classes.body} >
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[2]} onChange={() => handleOnChange(2)} label="Peripheral Vascular Disease" /> </Col>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[3]} onChange={() => handleOnChange(3)} label="Cerebrovascular Disease" /> </Col>
                    </Row>                   
                    <Row className={classes.body}>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[4]} onChange={() => handleOnChange(4)} label="Dementia" /> </Col>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[5]} onChange={() => handleOnChange(5)} label="Chronic Pulmonary Disease" /> </Col>
                    </Row>
                    <Row className={classes.body}>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[6]} onChange={() => handleOnChange(6)} label="Rheumatic Disease" /> </Col>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[7]} onChange={() => handleOnChange(7)} label="Peptic Ulcer Disease" /> </Col>
                    </Row>
                    <Row className={classes.body}>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[8]} onChange={() => handleOnChange(8)} label="Liver Disease, mild" /> </Col>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[9]} onChange={() => handleOnChange(9)} label="Diabetes without chronic complications" /> </Col>
                    </Row>
                    <Row className={classes.body}>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[10]} onChange={() => handleOnChange(10)} label="Renal Disease, mild to moderate" /> </Col>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[11]} onChange={() => handleOnChange(11)} label="Diabetes with chronic complications" /> </Col>
                    </Row>
                    <Row className={classes.body}>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[12]} onChange={() => handleOnChange(12)} label="Hemiplegia or Paraplegia" /> </Col>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[13]} onChange={() => handleOnChange(13)} label="Any Malignancy" /> </Col>
                    </Row>
                    <Row className={classes.body}>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[14]} onChange={() => handleOnChange(14)} label="Liver Disease, moderate to severe" /> </Col>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[15]} onChange={() => handleOnChange(15)} label="Renal Disease, severe" /> </Col>
                    </Row>
                    <Row className={classes.body}>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[16]} onChange={() => handleOnChange(16)} label="HIV Infection, no AIDS" /> </Col>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[17]} onChange={() => handleOnChange(17)} label="Metastatic Solid Tumor" /> </Col>
                    </Row>
                    <Row className={classes.body}>
                        <Col className="my-1"> <Form.Check type="checkbox" id="customControlAutosizing" checked={checkedState[18]} onChange={() => handleOnChange(18)} label="AIDS" /> </Col>
                        <Col> </Col>
                    </Row>
                    <Box  component="div" sx={{display:"flex",mx:"auto",justifyContent:"center",alignItems:"center",backgroundColor:"#ffffff",width: 150, border: 5}}>
                        <h4 className={classes.body}> <b><u>{totalScore} / {totalPossible}</u></b></h4>
                    </Box>
                    
                    <Box textAlign="center">
                        <Button variant = "contained" className={classes.button} size ="large" onClick={()=> {navigate("/moca")}}> <u>Submit</u> <i class="fas fa-check" data-fa-transform="shrink-8 right-6"></i></Button>
                    </Box>
                </Form>
            </div>
            </Box>
             
    )
}