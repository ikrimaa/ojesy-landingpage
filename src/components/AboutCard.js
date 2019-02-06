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
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: 0,
    display: 'flex',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 25,
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
    marginBottom: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 5,
  },

  image: {
    width: 150,
    height: 150,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },

  button: {
    backgroundColor: '#2196f3',
    '&:hover': {
      backgroundColor: '#5393ff',
    },
    marginTop: theme.spacing.unit * 8,
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    '&:hover': {
      backgroundColor: '#5393ff',
    },
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 3}px`,
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
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



class AboutCard extends Component {
  state = {
    abouts: [],
    misi: [],
    visi: [],
  };

  handleLoad = () => {
    axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
      .then(res => {
        let landingPage = res.data;
        let abouts = landingPage[0].about;
        let misi = landingPage[0].misi
        let visi = landingPage[0].visi
        this.setState({ abouts, misi, visi });

      })
  };

  componentDidMount() {
    this.handleLoad()
  }
  render() {

    const { classes } = this.props;
    const { abouts, misi, visi } = this.state;
    return (
      <MuiThemeProvider theme={themeX}>
        <section className={classes.root}>
          <LayoutBody className={classes.layoutBody} width="large">
          <Typography variant="h4" marked="center" className={classes.title} component="h2">
              Tentang Kami
           </Typography>
            <Grid container spacing={0}>
              <Grid item xs={12} md={6} className={classes.cardWrapper}>
                {abouts.map((item) => (
                  <div className={classes.card}>
                    <Typography variant="h5">
                      {item.ket}
                    </Typography>
                  </div>
                ))}
              </Grid>
              <Grid item xs={12} md={6} className={classes.imagesWrapper}>
                <Hidden smDown>
                  <div className={classes.imageDots} />
                  <img
                    src="https://instagram.fsub3-1.fna.fbcdn.net/vp/806ad873fb44fe5bb039ab322570a991/5CF661D6/t51.2885-15/e35/43322029_246019232725613_1415426984659096566_n.jpg?_nc_ht=instagram.fsub3-1.fna.fbcdn.net&_nc_cat=105"
                    alt="call to action"
                    className={classes.image}
                  />
                </Hidden>
              </Grid>
            </Grid>
          
          <Typography variant="h4" marked="center" className={classes.title} component="h2">
              Visi
          </Typography>
           <div>
          <Grid container spacing={50}>
          {visi.map((item) => (
            <Grid item xs={12} md={12}>
            <div className={classes.item}>
              <Typography variant="h5" align="center">
                {item.name}
              </Typography>
            </div>
          </Grid>
          ))} 
          </Grid>
        </div>
            <Typography variant="h4" marked="center" className={classes.title} component="h2">
              Misi
           </Typography>
            <div>
          <Grid container spacing={50}>
          {misi.map((item) => (
            <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <div className={classes.number}>{item.id}.</div>
              <Typography variant="h5" align="center">
                {item.name}
              </Typography>
            </div>
          </Grid>
          ))} 
          </Grid>
        </div>

          </LayoutBody>
        </section>
      </MuiThemeProvider>
    );
  }
}
AboutCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutCard);

