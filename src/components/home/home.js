import React from "react";
import { Grid, Button } from "@material-ui/core";
import styles from "../../css/home.css"
import img from "./logo.svg"
import PastWorkCard from "../projects/pastWorkCard.js";


function home(props) { 
    return (
        <div>
        <br></br>
        <br></br>
        <Grid container> 
            <Grid container item xs={2}/>
            <Grid container item xs={3}>
                <img class="imagestyle" src={img}/>
                <label class="toptext">
                <br></br>
                <h>
                    <p className="txtf">
                        We’re a team of driven, exploring developers at UC Davis, building projects for clients.
                    </p>
                </h>
                </label>
            </Grid>
            <Grid container item xs={3} />
                <Grid container item xs={3}>
                    <Grid item>
                        <label>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFtndUuH8KTDrEYKGCnyn1-ZOGgZtJ-treQQ&usqp=CAU"/>
                        </label>
                    </Grid>
                </Grid>
            <Grid container item xs={1} />
            </Grid>
            <br></br>
            <Grid container>
            <Grid container item xs={3} />
                <div>
                    <p className="toptext"> 
                    <br></br>
                    We're not just an orgranization, but a team
                    <br></br>                      
                    and a community, always learning from each other
                    <br></br>
                    and growing our skills togeter.
                    </p>
                </div>
            </Grid>
            <br></br>
            <br></br>
            <Grid container item>
                <Grid container item xs={6}>
                    <div className=  "longbox"/>
                    <br></br>
                    <div className=  "longbox"/>
                </Grid>
                <Grid container item xs ={1}/>
                <Grid contanier item xs={5}>
                    <div className= "vtbox"/>
                </Grid>
            </Grid>

            <Grid item>
            <div>
                <p className="tagtext"> <b>Our Projects</b></p>

            <Grid item container xs={12}>
                <p className="subtext">  Here are some of the projects we have worked on in the past. </p>
            </Grid>
            </div>

            <Grid item>
                <div>
                    <br></br>
                    <Grid container>
                    <Grid container iem xs={4}>
                    <PastWorkCard 
                        logo = "logo"
                        companyName= "Company Name" 
                        projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat sagittis integer placerat quis metus, nisl, tellus. Sed diam et massa ante id egestas nunc lacus."
                    />    
                    </Grid>
                    <Grid container item xs={3}>
                    <div className = "homebox"/>
                    </Grid>
                    <Grid container item xs={1}/>
                    <Grid container item xs={3}>
                    <div className = "homebox"/>
                    </Grid>
                    </Grid>
                </div>

                <Grid item>
                <div>
                <p className="tagtext"> <b>Join Us! </b></p>
                <br></br>
                <Grid item container xs={12}>
                    <p className="subtext">  We recruit twice a year, once in fall quarter and once in spring quarter. </p>
                </Grid>
                <br></br>
                <Grid container>
                <Button className= "buttonUi" 
                 background-color= "rgb(0,128,0)" 
                 href="/about"> Learn More
                </Button>
                </Grid>
                </div>
                </Grid>
            </Grid>
        </Grid>
    </div>


    )
}

export default home;