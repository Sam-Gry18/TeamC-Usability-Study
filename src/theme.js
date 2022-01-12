import {createTheme} from "@material-ui/core";
import { Padding } from "@mui/icons-material";
import { borderRadius, color, fontFamily, fontSize, padding } from "@mui/system";
import { spacing } from "@mui/system";

//theme is created to be able to re use the main colours of the application
export const theme = createTheme({
    palette:{
        primary: {
            main: "#0d47a1",
            score: "#ffffff"
        }
    },
    button:{
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 20,
        width: 300,
        height: 50,
        backgroundColor: "darkblue",
        color:"white",
        border:"3px groove black",
        paddingTop: "10px",
        justifyContent: "center",
        margin: 30
    },
    root: {
        width: 500,
        backgroundColor: "#0d47a1"
    },
    background:{
        backgroundColor: "#2596be",
        width: "100%",
        height: "100%"
    },
    backgroundTitles:{
        backgroundColor: "#f1f1f1"
    },

    Text: {
        color: "#000000",
        fontFamily: "Roboto",
        fontSize: 20,
        paddingLeft: "20px",
        letterSpacing: 1
    },

    CheckBoxText: {
        color: "#000000",
        fontFamily: "Roboto",
        fontSize: 15,
        letterSpacing: 1,
        paddingLeft: "10px"
    },

    CheckBox: {
        paddingLeft: "10px",
    },

    TextArea:{
        marginLeft: "20px",
        width: "50%",
        borderRadius: "5px",
    },

    textTitles:{
        fontWeight: "bold",
        color: "#000000",
        fontFamily: "Roboto",
        fontSize: 45,
        //letterSpacing: 1,
        width: "100%",
        height: 83,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    
    body:{
        color: "#000000",
        fontFamily: "Roboto",
        fontSize: 25,
        //letterSpacing: 1,
        width: "100%",
        height: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
    },

    score:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

   //in cases of needing the class use: class={`next-page hideFromView text ${classes.button}`}
})