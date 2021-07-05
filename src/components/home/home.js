import React from "react";
import { Grid, Link, Hidden } from "@material-ui/core";
import styles from "../../css/home.css"
import logo from "./logo.svg"
import PastWorkCard from "../projects/pastWorkCard.js";
import ambiilogo from "./ambiiLogo.png";
import Homepg from "./HomepageGraphic.png";
import left from "./WSQ21GroupPhoto.jpg";
import bottom from "./bottomright.png";
import topright from "./topright.png";
import codelablogo from "./codelabLogo.png";
import refocusai from "./refocusai.png";
import familyproud from "./familyproud.png";
import handstogether from "./handstogether.png";
import aggieexplorer from "./aggieexplorer.png"; 

function home(props) { 
    return (
        <Grid container> 
            <Grid container>
                <Grid container item xs={1} />
                <Grid container item xs={10} md={4}>
                    <img className="imagestyle"src={logo} alt="Codelab Logo" />
                    <p class="txtf">
                        We’re a team of driven software developers at UC Davis building projects for companies and non-profits.
                    </p>
                </Grid>
                <Grid container item xs={1}/>
                <Grid container item xs={12} md={5}>
                    <Hidden only={['xs']}>
                        <Grid container item sm={2} md={2} />
                    </Hidden>
                    <Grid container item xs={12} sm={8} md={10}>
                        <img className="homelogo" src={Homepg} alt="Man Writing Code" />
                    </Grid>
                </Grid>

            </Grid>
            
            <Grid container>
            <Grid container item xs={1} md={3} />
                <Grid container item xs={10} md={6} align="center">
                    <p className="toptext"> 
                    We're not just an organization, but a team
                    and a community, always learning from each other
                    and growing our skills togeter.
                    </p>
                </Grid>
            <Grid container item xs={1} md={3}/>        
            </Grid>

            <Grid container style={{marginTop: "3rem"}}>
                <Grid container item xs={1} />        
                <Grid container item xs={10}>
                    <img style={{width: "100%", height: "auto"}} src={left} alt="All Team Meeting"/>
                </Grid>
                <Grid container item xs={1} />
            </Grid>

            <Grid container>
                <Grid item container xs={1} /> 
                <Grid item xs={10}>
                    <p className="tagtext"> <b>Our Projects</b></p>
                    <p className="subtext">  Here are some of the projects we have worked on in the past. </p>
                </Grid>
                <Grid item container xs={1} /> 
            </Grid>

            <Grid container justify="flex-start" spacing={3}>
                <Grid container item xs={0} md={1}></Grid>
                <Grid container item xs={12} sm={6} md={3}>
                    <PastWorkCard 
                        logo={refocusai} 
                        companyName="ReFocus AI" 
                        projectDescription="Created a system to link and convert data between databases for ReFocus AI, offering AI sales enablement for sales professionals. Also created several ML models to predict data growth."
                    />
                </Grid>
                <Grid container item xs={12} sm={6} md={3}>
                    <PastWorkCard 
                        logo={familyproud} 
                        companyName="Family Proud" 
                        projectDescription="Worked alongside Family Proud, a platform simplifying the process of giving and receiving support for families, assisting in the creation of their web and mobile apps and backend."
                    />
                </Grid>
                <Grid container item xs={12} sm={6} md={3}>
                    <PastWorkCard 
                        logo={handstogether} 
                        companyName="Hands Together" 
                        projectDescription="Created a website with a shop, checkout, and dashboard system for Hands Together, a non-profit promoting academic excellence among preschoolers."
                        projectLink="https://www.handstogether-sa.org/"
                    />
                </Grid>
                <Grid container item xs={0} md={2}></Grid>
                <Grid container item xs={0} md={1}></Grid>
                <Grid container item xs={12} sm={6} md={3}>
                    <PastWorkCard 
                        logo={aggieexplorer} 
                        companyName="AggieExplorer" 
                        projectDescription="Built a website for UC Davis students to view grade distributions on a per course basis and analyze course fill-up times."
                        projectLink="https://www.aggieexplorer.com/"
                    />
                </Grid>
                <Grid container item xs={12} sm={6} md={3}>
                    <PastWorkCard 
                        logo={ambiilogo} 
                        companyName="Ambii" 
                        projectDescription="Worked with Ambii, a music streaming service for businesses, to create an internal UI to manage their databases."
                        projectLink="https://codelabdavis.medium.com/ambii-internal-ui-fall-20-client-project-2385a0d99ced"
                    />
                </Grid>
                <Grid container item xs={12} sm={6} md={3}>
                    <PastWorkCard 
                        logo={codelablogo}
                        companyName="CodeLab"
                        projectDescription={<div>Built the many pages of CodeLab’s website with ReactJS. <br /> <br /> </div>}
                        projectLink="https://codelabdavis.medium.com/codelab-website-fall-20-mentored-project-d5559c54743f"
                    />
                </Grid>
                <Grid container item xs={1}></Grid>
            </Grid>

                <Grid container>
                    <Grid item container xs={1} />
                    <Grid item xs={10} md={10}>
                        <p className="tagtext"> <b>Join Us! </b></p>
                        <p className="subtext">  We recruit twice a year, once in fall quarter and once in winter quarter. </p>
                    </Grid>
                    <Grid item container xs={1} />
                    <Grid item container xs={1} />
                        <Grid container item xs={11} md={11}>
                            <Link href="/about">
                                <button className="applyButton">
                                    <body1>Learn More</body1>
                                </button>
                            </Link>                        
                        </Grid>
                </Grid>
            </Grid>
    )
}

export default home;