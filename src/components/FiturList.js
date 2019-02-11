import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './styles.css';
import Button from './Button';
import LayoutBody from './LayoutBody';
import Typography from './Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
  root: {
    display: 'flex',
    // backgroundColor: '#82b1ff',
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  title: {
    marginBottom: theme.spacing.unit * 10,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#2196f3',
    '&:hover': {
        backgroundColor: '#5393ff',
      },
    marginTop: theme.spacing.unit * 8,
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



class FiturList extends Component {
  state = {
    features: [],
  };

  handleLoad = () => {
    axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
      .then(res => {
        let landingPage = res.data;
        let features = landingPage[0].feature;
        this.setState({ features });
        console.log(features);
      })
};
componentDidMount(){
  this.handleLoad()
}
  render() {
    const { classes } = this.props;
    const { features } = this.state;
    return (
    <MuiThemeProvider theme={themeX}>
     <section className={classes.root}>
       <LayoutBody className={classes.layoutBody} width="large">
        <img
          src=""
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          LAYANAN KAMI
        </Typography>
        <div>
          <Grid container spacing={40}>
          {features.map((item)=> (
            <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                src={item.gambar_feature}
                alt="{item.deskripsi}"
                className={classes.image}
              />
              <Typography variant="h5" align="center">
                {item.name}
              </Typography>
            </div>
          </Grid>  
          ))}        
          </Grid>
        </div>
        <Button
            color="secondary"
          //color="primary"
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="https://play.google.com/store/apps/details?id=com.ojesy.ojesy" target="_Blank" variant="button" />
          )}
        >
          PESAN SEKARANG
        </Button>
      </LayoutBody>
    </section>
      </MuiThemeProvider>
    );
  }
}
FiturList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiturList);