import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

import { signUp } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "10rem auto !important",
    padding: "30px",
    width: "30% !important",
    borderRadius: "20px",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

const SignUp = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    userRole: "",
    confirmPassword: "",
    skills: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ name: "", email: "", password: "", confirmPassword: "", userRole: "", skills: "" });
  };

  if (auth.id) return <Redirect to="/jobs" />;//change

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Signup</Typography>
        <div className="radio-toolbar">
          <p>I'm a*</p>
          <input type="radio" className="inputtype" id="radioRecruiter" name="userRole" value="0" onChange={(e) => setUser({ ...user, userRole: e.target.value === "0" ? 0 : 1 })} checked={user.userRole === 0} />
          <label htmlFor="radioRecruiter">Recruiter</label>

          <input type="radio" className="inputtype" id="radioCandidate" name="userRole" value="1" onChange={(e) => setUser({ ...user, userRole: e.target.value === "1" ? 1 : 0 })} checked={user.userRole === 1} />
          <label htmlFor="radioCandidate">Candidate</label>
        </div>
        <TextField
          className={classes.spacing}
          id="enter-name"
          label="First Name*"
          // variant="outlined"
          required="required"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-email"
          label="Enter your email*"
          required="required"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          label="Create Password*"
          // variant="outlined"
          required="required"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          type="password"
          required="required"
          label="Confirm Password*"
          // variant="outlined"
          fullWidth
          value={user.confirmPassword}
          onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
        />
        <TextField
          className={classes.spacing}
          id="enter-password"
          label="skills*"
          // variant="outlined"
          required="required"
          fullWidth
          value={user.skills}
          onChange={(e) => setUser({ ...user, skills: e.target.value })}
        />
        <Button
          variant="contained"
          className="spacing"
          type="submit"
        >
          SignUp
        </Button>
        <p></p>
        <Typography>Have an Account ? <Link style={{ color: "#43AFFF" }} className="linkStyle" to="/signin">Login</Link></Typography>
      </form>
    </>
  );
};

export default SignUp;
