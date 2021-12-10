import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';

import { addJob, updateJob } from '../../store/actions/jobActions';



const AddJob = ({ job, setJob }) => {
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (job.id) {
            const id = job.id;
            const updatedJob = {
                title: job.title,
                // isComplete: job.isComplete,    
                date: job.date,
                location: job.location,
                description: job.description,
                id: job.id
            }

            dispatch(updateJob(updatedJob, id));

        } else {
            const newJob = {
                ...job,
                date: new Date()
            }

            dispatch(addJob(newJob));
        }
        handleClose()
        setJob({ title: '', description: '', location: '' });
    }

    return (
        <>
            <div>
                <div className="fab">
                    <div className="mainop" onClick={handleClickOpen}>
                        <i className="add-icon"><AddOutlined /></i>
                    </div>
                </div>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className="post-job">Post Job</DialogTitle>
                    <DialogContent className="post-job">
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <TextField
                                autoFocus
                                margin="dense"
                                required = "required"
                                fullWidth
                                variant="standard"
                                id="enter-title"
                                label="Title"
                                value={job.title}
                                onChange={(e) => setJob({ ...job, title: e.target.value })}
                            /><br></br>
                            <TextField
                                margin="dense"
                                required = "required"
                                fullWidth
                                variant="standard"
                                id="enter-desc"
                                label="Description"
                                value={job.description}
                                onChange={(e) => setJob({ ...job, description: e.target.value })}
                            /><br></br>
                            <TextField
                                margin="dense"
                                required = "required"
                                fullWidth
                                variant="standard"
                                id="enter-location"
                                label="Location"
                                value={job.location}
                                onChange={(e) => setJob({ ...job, location: e.target.value })}
                            /><br></br>
                            <DialogActions className="post-job">
                            <Button variant="contained"  className="spacing" type="submit">
                                Add
                            </Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                    {/* <DialogActions className="post-job">
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions> */}
                </Dialog>
            </div>

        </>
    );
}

export default AddJob;