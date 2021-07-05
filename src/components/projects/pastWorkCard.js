import React from "react";
import { Grid } from "@material-ui/core";
import "../../css/projects.css";

function PastWorkCard(props) {
    function handleCardClick() { 
        if (props.projectLink != undefined) 
            window.open(props.projectLink); 
    } 
    return (
        <div className="pastWorkCard" onClick={handleCardClick}>
            <Grid container>
                <Grid item container justify="center" xs={12}>
                    <img className="pastWorkCardImage" src={props.logo} alt="Company Logo" />
                </Grid>

                <Grid item container xs={1}></Grid>
                <Grid item container xs={10}>
                    <p className="pastWorkCard-companyName">{props.companyName}</p>
                </Grid>
                <Grid container item xs={1}></Grid>

                <Grid item container xs={1}></Grid>
                <Grid item container xs={10} rows={4}>
                    <p className="pastWorkCard-description">{props.projectDescription}</p>
                </Grid>
                <Grid container item xs={1}></Grid>
                <Grid item container xs={1}></Grid>
                {props.projectLink != undefined && 
                    <Grid item container xs={10}>
                        <p className="pastWorkCard-link" href={props.projectLink}>View the project here</p>
                    </Grid>
                }
                <Grid container item xs={1}></Grid>
            </Grid>
        </div>
    );
}

export default PastWorkCard;