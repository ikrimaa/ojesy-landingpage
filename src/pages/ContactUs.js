import Iframe from 'react-iframe'
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../components/styles.css';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import { Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    // backgroundColor: '#82b1ff',
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
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



class ContactUs extends Component {
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
    return (
    <MuiThemeProvider theme={themeX}>
     <section className={classes.root}>
       <LayoutBody className={classes.layoutBody} width="large">
       
        <div>
          <Grid container spacing={10}>
         
            <Grid item xs={12} md={6}>
            <div className={classes.item}>
            <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSeuHa4N5VJn2JM-4T1oct1NVxDhPRrPGJsjFXaYx-94hAA78A/viewform?embedded=true"
                      width="450px"
                      height="850px"
                      id="myId"
                      className={classes.item}
                      display="flex"
                      position="relative"
                      />
            </div>
          </Grid>  
          <Grid item xs={12} md={6}>
          <div className={classes.item}>
          <Card className={classes.card}>
          <CardContent>
          <Typography variant="h4"  component="h2"  gutterBottom>
          Alamat
        </Typography>
        <Typography variant="h5" component="h2">
         
        </Typography>
        <Typography component="p" className={classes.pos}>
        Margomulyo 150 (Barat SDN Margomulyo 1), Margomulyo, Kecamatan Balen, Mendayu Kidul, Margomulyo
        Balen, Kabupaten Bojonegoro, Jawa Timur 60252
          <br />
          0877-5111-1292
        </Typography>
        </CardContent>
          <CardActions>
          <Button 
        color="primary"
        size="small"
        variant="contained"
        href="https://s.id/3jSkA" target="_Blank"
> Hubungi via Whatsapp</Button>
          </CardActions>
          </Card>
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