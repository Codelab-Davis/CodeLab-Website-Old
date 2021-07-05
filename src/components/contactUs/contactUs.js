import React, { useState } from "react";
import "./contactUs.css";
import { Grid, TextField, Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
require("dotenv").config({ path: "../../../.env" });

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  leftField: {
    marginBottom: "1.5rem",
    marginRight: "0.5rem",
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      marginRight: "0rem",
    },
  },
  rightField: {
    marginBottom: "1.5rem",
    marginLeft: "0.5rem",
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      marginLeft: "0rem",
    },
  },
  bottomField: {
    marginBottom: "2rem",
    ['@media (max-width: 768px)']: { // eslint-disable-line no-useless-computed-key
      marginBottom: "1.5rem",
    },
  }
});

function ContactUs(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  function sendEmail() {
    var templateParams = {
      name: name,
      email: email,
      message: message
    };

    setName("");
    setEmail("");
    setMessage("");

    emailjs.send(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, templateParams, process.env.REACT_APP_UID)
    .then(function(response) {
      setSuccess(true);
    }, 
    function(error) {
      setFailure(true);
    });
  }

  const handlenamechange = (event) => {
    setName(event.target.value);
  }

  const handleemailchange = (event) => {
    setEmail(event.target.value);
  }

  const handlemessagechange = (event) => {
    setMessage(event.target.value);
  }

  const handleClose = () => {
    setSuccess(false);
    setFailure(false);
  }

  return (
    <Grid container>
      <Grid container xs={1} />
      <Grid container item xs={10}>
        <div className="contactTitle"> contact us. </div>
      </Grid>
      <Grid container xs={1} />
      <Grid container xs={1} />
      <Grid container item xs={10}>
        <h className="contactq"> You've got questions, we've got answers. </h>
      </Grid>
      <Grid container xs={1} />
      <Grid container xs={1} />
      <Grid container item xs={10}>
        <Grid container item xs={12} md={4}>
          <Grid container item xs={12} md={12}>
            <div>
              <p className="chatTitle"> Let's chat!</p>
              <p className="chatTxt">Whether you’re a potential client or a student with questions, shoot us a message through this form!</p>
              <p className="chatTxt">You can also reach us at codelabdavis@gmail.com.</p>
            </div>
          </Grid>
        </Grid>

        <Grid container item xs={12} md={8}>
          <Grid container item xs={12} md={6}>
            <TextField onChange={handlenamechange} className={classes.leftField} id="form-name" label="Name" type="name" variant="outlined" value={name} fullWidth />
          </Grid>
          <Grid container item xs={12} md={6}>
            <TextField onChange={handleemailchange} className={classes.rightField} id="form-email" label="Email" type="email" variant="outlined" value={email} fullWidth />
          </Grid>
          <Grid container item xs={12}>
            <TextField onChange={handlemessagechange} className={classes.bottomField} id="form-message" label="Message" type="message" variant="outlined" value={message} fullWidth multiline rows={10} rowsMax={10} />
          </Grid>
          <Grid container item xs={12} justify="flex-end">
              <button className="submitButton" onClick={sendEmail}>
                  <body1>Submit</body1>
              </button>                 
          </Grid>
          <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Your message has been sent. Thank you! 
            </Alert>
          </Snackbar>
          <Snackbar open={failure} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              There was an error sending a message. Please email us directly at codelabdavis@gmail.com.
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
      <Grid container xs={1} />
    </Grid>
  );
}

export default ContactUs;
