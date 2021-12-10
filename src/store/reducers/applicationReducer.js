const applicationReducer = (applications = [], action) => {
  switch (action.type) {
    case "JOB_APPLICATIONS":
      return action.applications
    default:
      return applications;
  }
};

export default applicationReducer;

