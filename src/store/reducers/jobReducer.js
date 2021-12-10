import { toast } from "react-toastify";

const jobReducer = (jobs = [], action) => {
  switch (action.type) {
    case "GET_JOBS":
      return action.jobs.data;
    case "ALL_JOBS":
      return action.jobs.data;
    case "ADD_JOB":
      toast.success("Job posted...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return [action.job.data.data, ...jobs];
    case "APPLY_JOB":
      toast.success("Job Applied...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return [action.job.data, ...jobs];
    case "UPDATE_JOB":
      toast.success("Job was updated...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return jobs.map((job) =>
        job.id === action.job.data.id ? action.job.data : job
      );
    case "DELETE_JOB":
      toast.success("Job was deleted...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return jobs.filter((job) => job.id !== action.id);
    case "CLEAR_JOBS":
      return [];
    default:
      return jobs;
  }
};

export default jobReducer;
