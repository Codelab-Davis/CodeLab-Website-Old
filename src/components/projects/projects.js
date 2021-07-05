import React from "react";
import "../../css/projects.css";
import PastWorkCard from "./pastWorkCard";
import { Grid } from "@material-ui/core";
import ambiilogo from "./Ambii-Logo.png";
import codelablogo from "./LogoIcon.png";
import refocusai from "./refocusai.png";
import familyproud from "./familyproud.png";
import handstogether from "./handstogether.png";
import aggieexplorer from "./aggieexplorer.png";

// re-trigger vercel autodeploy test 

function projects(props) {
    return (
        <div>
            <Grid container>
                <Grid container item xs={0} md={1}></Grid>
                <Grid container item xs={12} md={11}>
                    <div className="projectTitle">projects.</div>
                </Grid>
                <Grid container item xs={0} md={1}></Grid>
                <Grid container item xs={12} md={5}>
                    <p className="projectDesc">
                        Each quarter, our teams take on projects
                        for clients or for developing the team's
                        coding skills.
                    </p>
                </Grid>
                <Grid container item xs={0} md={6}></Grid>
                
                <Grid container item xs={0} md={3}></Grid>
                <Grid container item justify="center" xs={12} md={6}>    
                    <p className="projectWow">
                        In all our projects, we strive for 
                        <span className="redWow"> wow.</span>
                        <br></br>
                        <br></br>
                        We imagine, innovate, and constantly
                        learn new things to push the limits of what
                        we can do.
                    </p>
                </Grid>
                <Grid container item xs={0} md={3}></Grid>

                <Grid container item xs={1}></Grid>
                <Grid container item xs={11}>
                    <p className="pastWork">Here's some of our past work.</p>
                </Grid>

            </Grid>

            <Grid container spacing={3}>
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
        </div>
    )
}

export default projects;