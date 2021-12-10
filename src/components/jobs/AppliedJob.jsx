import React from "react";
import { Typography } from "@material-ui/core";

const AppliedJob = ({ ap }) => {
    return (
        <>
            <div>
                <div>
                    <Typography variant="h6" >
                        {ap.title}
                    </Typography>
                    <Typography variant="body2">
                        Job Description : {ap.description}
                    </Typography>
                    <Typography variant="body2">
                        Job Location : {ap.location}
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default AppliedJob;
