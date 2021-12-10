import axios from "axios";
import { url, setHeaders } from "../../api";
import { toast } from "react-toastify";

export const getJobs = (count) => {
  return (dispatch) => {
    axios
      .get(`${url}/recruiters/jobs?page=${count}`, setHeaders())
      .then((jobs) => {
        dispatch({
          type: "GET_JOBS",
          jobs: jobs.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const allJobs = (count) => {
  return (dispatch) => {
    axios
      .get(`${url}/candidates/jobs?page=${count}`, setHeaders())
      .then((jobs) => {
        dispatch({
          type: "ALL_JOBS",
          jobs: jobs.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addJob = (newJob) => {
  return (dispatch, getState) => {
    axios
      .post(`${url}/jobs`, { ...newJob }, setHeaders())
      .then((job) => {
        dispatch({
          type: "ADD_JOB",
          job,
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const applyJob = (jobId) => {
  return (dispatch) => {
    axios
      .post(`${url}/candidates/jobs`, { jobId }, setHeaders())
      .then((applied) => {
        dispatch({
          type: "APPLY_JOB",
          applied
        });
      })
      .catch((error) => {
        console.log(error.response);

        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const appliedJobs = () => {
  return (dispatch) => {
    axios
      .get(`${url}/candidates/jobs/applied`, setHeaders())
      .then((applied) => {
        dispatch({
          type: "APPLIED_JOBS",
          applied: applied.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const jobApplication = (jobId) => {
  return (dispatch) => {
    axios
      .get(`${url}/recruiters/jobs/${jobId}/candidates`, setHeaders())
      .then((applications) => {
        if (applications.data.message === "No candidates have applied for the job posting") {
          dispatch({
            type: "JOB_APPLICATIONS",
            applications: []
          });
        } else
          dispatch({
            type: "JOB_APPLICATIONS",
            applications: applications.data.data
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateJob = (updatedJob, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/jobs/${id}`, updatedJob, setHeaders())
      .then((job) => {
        dispatch({
          type: "UPDATE_JOB",
          job,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

export const deleteJob = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/jobs/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_JOB",
          id,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
};

