import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { LocationOnOutlined } from "@material-ui/icons";
import moment from "moment";
import jwtDecode from "jwt-decode";
import { DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, Button, Typography } from "@material-ui/core";
import { applyJob, jobApplication } from "../../store/actions/jobActions";
import Applications from "./Applications";

const useStyles = makeStyles({
  moreStyle: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: "#8f8f8f",
  },
  isComplete: {
    color: "green",
  },
  checked: {
    textDecoration: "line-through",
  },
});

const Job = ({ job, setJob, jobs }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [disable, setDisable] = React.useState(false);
  const [apply, setApply] = React.useState('Apply');
  const auth = useSelector((state) => state.auth);
  const applications = useSelector((state) => state.applications);
  const token = auth.token;
  const role = jwtDecode(token);
  const userRole = role.userRole;

  const jobId = job.id;

  const handleView = () => {
    dispatch(applyJob(jobId));
    setDisable(true)
    setApply('Applied')
  }

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    dispatch(jobApplication(jobId));
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

  return (
    <>
      <div>
        <div>
          <Typography variant="h6" className={classes.moreStyle}>
            {job.title}
          </Typography>
          <Typography variant="body2" className={classes.moreStyle}>
            {job.description}
          </Typography>
          <Typography variant="body2" className={classes.moreStyle}>
            Added: {moment(job.date).fromNow()}
          </Typography>
          <br></br>
          <Typography variant="body2" className={classes.moreStyle}>
            <span><LocationOnOutlined className="icon" /> {job.location}
              {userRole === 0 ? <Button size="small" onClick={handleClickOpen('paper')} className="application-btn">View Applications</Button> : <Button disabled={disable} size="small" onClick={handleView} className="application-btn">{apply}</Button>}
            </span>
          </Typography>
        </div>
        <div>
        </div>
        <div>

          <Dialog
            className="modal"
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Applicants</DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                {applications &&
                  applications.map((application) => {

                    return (
                      <div className="card">
                        <div className="card-body">
                          <Applications
                            application={application}
                            key={application.id}
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
        </div>
      </div>
    </>
  );
};

export default Job;
