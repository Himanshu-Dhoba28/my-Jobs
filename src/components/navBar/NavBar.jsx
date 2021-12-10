import React from "react";
import { AppBar, Typography, Toolbar, Button, Box, Avatar, IconButton, Tooltip } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/actions/authActions";


const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const handleSignOut = () => {
    dispatch(signOut());
    history.push("/signin");
  };

  return (
    <>
      <div className="root">
        <AppBar className="app-bar">
          <Toolbar>
            <Typography variant="h4" className="title">
              {/* <Link className="linkStyle" to="/"> */}
              My<span className="title">Jobs</span>
              {/* </Link> */}
            </Typography>
            {user.id ? (
              <>
                <Typography variant="subtitle2" className="title">
                  Logged in as {user.name}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                  <Tooltip title="Account settings">
                    <IconButton>
                      <Avatar sx={{ width: 42, height: 42 }}>{user.name.charAt(0)}</Avatar>
                    </IconButton>
                  </Tooltip>
                  <Button
                    edge="end"
                    color="inherit"
                    className="authButton"
                    onClick={() => handleSignOut()}
                  >
                    <Link className="linkStyle" to="/jobs">
                      SignOut
                    </Link>
                  </Button>
                </Box>

              </>
            ) : (
              <>
                <Button
                  edge="end"
                  color="inherit"
                  className="authButton"
                >
                  <Link className="linkStyle" to="/signin">
                    Login
                  </Link>
                </Button>
                <Button
                  edge="end"
                  color="inherit"
                  className="authButton"
                >
                  <Link className="linkStyle" to="/signup">
                    SignUp
                  </Link>
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default NavBar;
