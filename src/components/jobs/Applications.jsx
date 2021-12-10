import React from "react";
import { Typography } from "@material-ui/core";

const Applications = ({ application }) => {
    return (
        <>
            <div>
                <div>
                    <Typography variant="h6" >
                        {application.name}
                    </Typography>
                    <Typography variant="body2">
                        {application.email}
                    </Typography>
                    <Typography variant="body2">
                        {application.skills}
                    </Typography>
                </div>
            </div>
        </>
    );
};

export default Applications;
