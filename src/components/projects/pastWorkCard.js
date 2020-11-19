import React from "react";
import { Grid } from "@material-ui/core";

function PastWorkCard(props) {
    return (
        <div className="pastWorkCard">
            <Grid container>
                <Grid item>
                    <Grid item container xs={12}>
                    <p className="pastWorkCard-logo">{props.logo}</p>
                    </Grid>
                    <Grid item container xs ={12}>
                    <p className="pastWorkCard-companyName">{props.companyName}</p>
                    </Grid>
                    <Grid item container xs={12}>
                    <p className="pastWorkCard-description">{props.projectDescription}</p>
                    </Grid>
                </Grid>
                </Grid>
        </div>
    );
}

export default PastWorkCard;