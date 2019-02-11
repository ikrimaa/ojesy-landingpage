import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import { white } from 'ansi-colors';
import logo from '../images/instagram-logo.png'


const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: "#4dabf5",
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    display: 'flex',
  },
  iconsWrapper: {
    height: 90,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing.unit,
    '&:hover': {
    //   backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
    
  },
  
  
});



function Footer(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={20}>
          <Grid item xs={6} sm={4} md={2}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={10}
            >
              <Grid item className={classes.icons}>
              
                <a href="" className={classes.icon}>
                  <img width="20px" src={logo} alt="instagram" />
                </a>
              </Grid>
              <Grid item>© 2019 magang</Grid>
            </Grid>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  pure,
  withStyles(styles),
)(Footer);