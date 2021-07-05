import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home/home";
import GetInvolvedPage from "./getInvolved/getInvolved";
import ProjectPage from "./projects/projects";
import AboutUsPage from "./aboutUs/aboutUs";
import ContactUsPage from "./contactUs/contactUs";

export default function RouterPage(props) {
    return ( 
    <Switch>
        <Route exact path="/" render={(props => (
            <>
                <HomePage {...props} />
            </>
        ))}
        />
        <Route exact path="/getinvolved" render={(props => (
            <>
                <GetInvolvedPage {...props}></GetInvolvedPage>
            </>
        ))}
        />
        <Route exact path="/projects" render={(props => (
            <>
                <ProjectPage {...props}></ProjectPage>
            </>
        ))}
        />
        <Route exact path="/about" render={(props => (
            <>
                <AboutUsPage {...props}></AboutUsPage>
            </>
        ))}
        />
        <Route exact path="/contactus" render={(props => (
            <>
                <ContactUsPage {...props}></ContactUsPage>
            </>
        ))}
        />
    </Switch>
    )
}
