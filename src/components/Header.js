import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/" className="menu" style={{textDecoration: "none", color: "white"}}>DeskApp</NavLink> 
            </Typography>
            <NavLink to="/" className="menu" style={{textDecoration: "none", color: "white"}}><Button color="inherit">Home</Button></NavLink><div style={{marginLeft: '15px', marginRight: '15px'}}></div>
            <NavLink to="/features" className="menu" style={{textDecoration: "none", color: "white"}}><Button color="inherit">Features</Button></NavLink><div style={{marginLeft: '15px', marginRight: '15px'}}></div>
            <NavLink to="/downloads" className="menu" style={{textDecoration: "none", color: "white"}}><Button color="inherit">Downloads</Button></NavLink><div style={{marginLeft: '15px', marginRight: '15px'}}></div>
            <NavLink to="/sources" className="menu" style={{textDecoration: "none", color: "white"}}><Button color="inherit">Sources</Button></NavLink>
            </Toolbar>
        </AppBar>
        </div>

        <Container maxWidth="md">
            <div style={{textAlign: "center", marginTop: "5%", marginBottom: "5%"}} className="mobile">
                <Typography variant="h4" component="p" color="inherit">DeskApp은 모바일에서 이용이 불가능 합니다.<br /><br />지금 PC에서 DeskApp을 시도해 보세요!</Typography>
            </div>
        </Container>
    </>
  );
}
