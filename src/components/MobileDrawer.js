import React, { useState } from "react";
import { Grid, Link, Fade } from "@material-ui/core";
import logo from "../logo.png";
import "../css/mobiledrawer.css";

function MobileDrawer() {
    const [showMenu, setShowMenu] = useState(false);

    function setMenu() {
        let curStatus = showMenu;
        setShowMenu(!curStatus);
    }

    return (
        <Grid container xs={12} style={{marginTop: "0.75rem", marginBottom: "3.5rem"}}>
            <Grid container item xs={9}>
                <Link href="/">
                    <img class="logo" src={logo} />
                </Link>
            </Grid>
            <Grid container  xs={3} justify="flex-end" style={{marginTop: "0.9rem"}}>
                <img onClick={setMenu} src="https://img.icons8.com/ios/36/000000/menu--v6.png"/>
            </Grid>
            { showMenu ? ( <Fade in={showMenu}>
                <Grid container item xs={12}>
                    <Grid container className="menu" style={{marginTop: "1rem"}}>
                        <Grid container item justify="flex-end">
                            <body1>
                                <Link class="text" href="/about">
                                    about us
                                </Link>
                            </body1>
                        </Grid>
                        <Grid container item justify="flex-end">
                            <body1>
                                <Link class="text" href="/projects">
                                    projects
                                </Link>
                            </body1>
                        </Grid>
                        <Grid container item justify="flex-end">
                            <body1>
                                <Link class="text" href="/getinvolved">
                                    get involved
                                </Link>
                            </body1>
                        </Grid>
                        <Grid container item justify="flex-end">
                            <body1>
                                <Link class="text" href="https://medium.com/@codelabdavis">
                                    blog
                                </Link>
                            </body1>
                        </Grid>
                        <Grid container item justify="flex-end">
                            <body1>
                                <Link class="text" href="/contactus">
                                    contact us
                                </Link>
                            </body1>
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>) : null }
        </Grid>
    )
}

export default MobileDrawer