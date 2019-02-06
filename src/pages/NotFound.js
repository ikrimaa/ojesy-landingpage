import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../components/styles.css';
import Button from '../components/Button';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import { Card } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
  root: {
    display: 'flex',
    // backgroundColor: '#82b1ff',
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 17,
    marginBottom: theme.spacing.unit * 18,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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



class NotFound extends Component {




  render() {

    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={themeX}>
      <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
  
        <Button
         
          color="secondary"
         
          size="large"
          variant="contained"
          className={classes.button}
          href=""
        >
          Not Found : 404
        </Button>
      </LayoutBody>
    </section>
      </MuiThemeProvider>
    );
  }
}
NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);

