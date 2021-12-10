import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import { signIn } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "10rem auto",
    width: "30%",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignIn = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const [creds, setCreds] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("")

  const handleEmailChange = (e) => {
    setEmailError('');
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordError('');
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "") {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailRegex.test(email)) {
        dispatch(signIn(email, password));
        setEmail("")
        setEmailError("")
      } else {
        setEmailError("Invalid Email")
      }
    } else {
      setEmailError("Email Required");
    }

    if (password !== "") {
      if (password.length < 7) {
        setPasswordError("Password must be atleast 7 characters long")
        setPassword("")
      } else {
        setPassword("")
      }
    } else {
      setPasswordError("Password is Required");
    }
  };

  if (auth.id) return <Redirect to="/jobs" />;//change

  return (
    <>
      <form
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Login</Typography>
        <TextField
          className={classes.spacing}
          id="enter-email"
          name="email"
          label="Enter your email"
          fullWidth
          // value={creds.email}
          // onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div className="error-msg">{emailError}</div>}
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          name="password"
          label="Enter your password"
          fullWidth
          // value={creds.password}
          value={password}
          // onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          onChange={handlePasswordChange}
        />
        {passwordError && <div className="error-msg">{passwordError}</div>}
        <Button
          variant="contained"
          color="primary"
          className="spacing"
          type="submit"
        >
          Login
        </Button>
        <p></p>
        <Typography>New to MyJobs ? <Link style={{ color: "#43AFFF" }} className="linkStyle" to="/signup">Create an account</Link></Typography>
      </form>
    </>
  );
};

export default SignIn;
