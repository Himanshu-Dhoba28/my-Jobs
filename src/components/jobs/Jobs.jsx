import React, { useState } from "react";
import AddJob from "./AddJob";
import ListJobs from "./ListJobs";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const Jobs = () => {
  const auth = useSelector((state) => state.auth);
  const token = auth.token;
  const role = jwtDecode(token);
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: ""

  });

  return (
    <>
      {!auth.id ? <Redirect to="/signin" /> : "welcome"}
      {role.userRole === 0 ? (
        <>
          <AddJob job={job} setJob={setJob} />
          <ListJobs job={job} setJob={setJob} />
        </>
      ) : (
        <>
          <ListJobs job={job} setJob={setJob} />
        </>
      )}
    </>
  );
};

export default Jobs;
