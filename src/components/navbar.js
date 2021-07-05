import React from "react";
import { Grid, Link, Hidden } from "@material-ui/core";
import logo from "./home/logo.svg"
import MobileDrawer from "./MobileDrawer"
import styles from "../css/navbar.css";

function Navbar(props) {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    // this is a container, and the outermost "grid" element. this is what you wrap the rest of your grid stuff in
    <>
    <Hidden only={['xs', 'sm']}>
      <Grid container style={{marginTop: "0.75rem"}}>
        {/* this is a container item. the xs={6} means that you're taking up half of the width of the grid container, which is the width of the entire red rectangle */}
        {/* think of the full width of the page as a unit of 12. you are taking up the 6 most left units first, or 6/12 AKA 1/2 of the entire page.  */}
        <Grid container item xs={3}>
          <Link href="/">
            <img class="logo" src={logo} alt="Codelab Logo" />
          </Link>
        </Grid>
        {/* another container item taking up the right 6/12ths of the page */}
        <Grid
          container
          item
          justify="flex-end"
          xs={9}
          style={{ marginTop: "1rem" }}
        >
          {/* these are individual items inside of the container item. if you wanted each entry to be on a separate line you would not make them grid items */}
          <Grid item>
            <body1>
              <Link class="text" href="/about">
                about us
              </Link>
            </body1>
          </Grid>
          <Grid item>
            <body1>
              <Link class="text" href="/projects">
                projects
              </Link>
            </body1>
          </Grid>
          <Grid item>
            <body1>
              <Link class="text" href="/getinvolved">
                get involved
              </Link>
            </body1>
          </Grid>
            <Grid item>
            <body1>
              <Link class="text" href="https://medium.com/@codelabdavis">
                blog
              </Link>
            </body1>
          </Grid>
          <Grid item>
            <body1>
              <Link class="text" href="/contactus">
                contact us
              </Link>
            </body1>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
    <Hidden only={['md', 'lg', 'xl']}>
      <MobileDrawer />
    </Hidden>
    </>
  );
}

export default Navbar;
