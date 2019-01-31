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
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 10,
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
  };

  handleLoad = () => {
    axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
      .then(res => {
        let landingPage = res.data;
        let abouts = landingPage[0].about;
        this.setState({ abouts });
     
      })
};

componentDidMount(){
  this.handleLoad()
}


  render() {
   
    const { classes } = this.props;
    const { abouts } = this.state;
    return (
      <MuiThemeProvider theme={themeX}>
     <section className={classes.root}>
       <LayoutBody className={classes.layoutBody} width="large">
        
        
        <div>
          <Grid container spacing={40}>
          {abouts.map((item)=> (
            <Grid item xs={12} md={12}>
            <div className={classes.item}>
              
            <Typography variant="h4" marked="center" className={classes.title} component="h2">
            {item.judul}
            </Typography>
            <Typography  variant="h6" >
            {item.keterangan}
            </Typography>
            <Typography  variant="h6" >
            {item.ket2}
            </Typography>
            <Typography  variant="h6" >
            {item.ket3}
            </Typography>
            <Typography  variant="h6" >
            {item.ket24}
            </Typography>
            <Typography  variant="h6" >
            {item.ket5}
            </Typography>
            <Typography  variant="h6" >
            {item.ket6}
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