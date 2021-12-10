import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, Button, Typography } from "@material-ui/core";
import Job from "./Job";
import { makeStyles } from "@material-ui/core/styles";
import jwtDecode from "jwt-decode";
import { getJobs, allJobs, appliedJobs } from "../../store/actions/jobActions";
import AppliedJob from "./AppliedJob";

const useStyles = makeStyles({
  jobsStyle: {
    margin: "5rem 0rem 5rem 5rem",
    alignItems: "center !important"
  },
});

const ListJobs = ({ job, setJob }) => {

  const [count, setCount] = useState(1)
  const auth = useSelector((state) => state.auth);
  const jobs = useSelector((state) => state.jobs);
  const applications = useSelector((state) => state.applications);
  const applied = useSelector((state) => state.applied);
  const role = jwtDecode(auth.token);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  useEffect(() => {
    role.userRole === 0 ? dispatch(getJobs(count)) : dispatch(allJobs(count))
  }, [job.id, dispatch, count]);

  const handleView = (scrollType) => () => {
    dispatch(appliedJobs());
    setOpen(true);
    setScroll(scrollType);
  };


  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  if (!applications) {
    return null
  }



  if (!auth.id) return <Redirect to="/signin" />;

  return (
    <>
      <div className={classes.jobsStyle}>
        <Typography className="heading" variant="h5">
          {" "}
          {role.userRole === 0 ? jobs.length === 0 ? "No job posted yet" : "Job posted by you" : <span>Available Jobs <Button size="small" className="already-applied" onClick={handleView('paper')}>Already Applied Job</Button></span>}{" "}
        </Typography>
        {jobs &&
          jobs.map((job) => {

            return (

              <div className="card">
                <div className="card-body">
                  <Job
                    job={job}
                    key={job.id}
                    setJob={setJob}
                    jobs={jobs}
                  />
                </div>
              </div>
            );
          })}
        <Dialog
          // className="modal"
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Applied Jobs</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              {applied &&
                applied.map((ap) => {

                  return (
                    <div className="card">
                      <div className="card-body">
                        <AppliedJob
                          ap={ap}
                          key={ap.id}
                        />
                      </div>
                    </div>
                  );
                })}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
        <div className="pagination-btn">
          <Button className="pagination" disabled={count === 1 ? true : false} onClick={() => setCount(count - 1)}>&#8249;</Button>
          <Button className="pagination">{count}</Button>
          <Button className="pagination" onClick={() => setCount(count + 1)}>&#8250;</Button>
        </div>

      </div>
    </>
  );
};

export default ListJobs;
