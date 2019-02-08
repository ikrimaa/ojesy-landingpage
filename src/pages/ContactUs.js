import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../components/styles.css';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import { Grid } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Iframe from 'react-iframe'

const styles = theme => ({
  root: {
    display: 'flex',
    // backgroundColor: '#82b1ff',
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 5,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  title: {
    marginBottom: theme.spacing.unit * 5,
    alignItems: 'center',
  },


});


const themeX = createMuiTheme({
  palette: {
    primary: {
      ligth: '#1769aa',
      main: '#2196f3',
      dark: '#4dabf5',
    },
    secondary: {
      light: '#5b7bb2',
      main: '#2196f3',
      dark: '#9bc0ff',
    },
  },
});



class ContactUs extends Component {

  render() {

    const { classes } = this.props;
    return (

      <MuiThemeProvider theme={themeX}>
        <section className={classes.root}>
          <LayoutBody className={classes.layoutBody} width="large">

            <Typography variant="h4" marked="center" className={classes.title} component="h2">
              Hubungi Kami
        </Typography>
            <div>

              <Grid container spacing={40}>

                <Grid item xs={12} md={4}>
                  <div className={classes.item}>

                    <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSeuHa4N5VJn2JM-4T1oct1NVxDhPRrPGJsjFXaYx-94hAA78A/viewform?embedded=true"
                      width="450px"
                      height="1000px"
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                      allowFullScreen />
                  </div>
                </Grid>
              </Grid>
            </div>
          </LayoutBody>
        </section>
      </MuiThemeProvider>
    );
  }
}
ContactUs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactUs);

