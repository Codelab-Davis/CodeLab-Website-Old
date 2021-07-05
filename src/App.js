import React from "react";
import "./css/App.css";
import "./css/getInvolved.css";
import "bootstrap/dist/css/bootstrap.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/navbar";
import Footer from "./components/footer/footer";
import RouterPage from "./components/RouterPage";
import { BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles(() => ({
}));

function App() {
  const classes = useStyles();

  return (
    <div class="container-fluid">
      {/* <div class="row justify-content-center"> */}
        {/* <div style={{border: "2px solid red"}} class="col"> */}
          <Router>
            <div className="nav">
              <Navbar />
            </div>
            <RouterPage />
            <div className="footer">
              <Footer />
            </div>
          </Router>
        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default App;