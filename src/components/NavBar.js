import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import logo from '../images/logo.png'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  typography :{
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 12,
    },
  },
  root: {
    width: '100%',
  },
  button: {
    hover:'none',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    color: '#fafafa',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
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



class NavBar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem href="test">
          <Button href="/" className={classes.button} >
          <Typography >Tentang Kami</Typography>
          </Button>
        </MenuItem>
        <MenuItem>
          <Button href="/" className={classes.button} >
          <Typography>Team</Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <Button href="/" className={classes.button} >
            <Typography>BLOG</Typography>
          </Button>
        </MenuItem>
      </Menu>
    );

    return (
      <MuiThemeProvider theme={themeX}>
        <header>
          <section>
            <AppBar position='fixed'>
              <Toolbar>
                <Button href="/" className={classes.button} >
                  <img src={logo} className="logo" />
                </Button>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <Button href="/" className={classes.button}>
                    <Typography className={classes.title} variant="h7" color="inherit" noWrap >Tentang Kami</Typography>
                  </Button>
                  <Button href="/" className={classes.button}>
                    <Typography className={classes.title} variant="h7" color="inherit" noWrap >Layanan</Typography>
                  </Button>
                  <Button href="/" className={classes.button} >
                    <Typography className={classes.title} variant="h7" color="inherit" noWrap >Blog</Typography>
                  </Button>
                  <Button href="/" className={classes.button} >
                    <Typography className={classes.title} variant="h7" color="inherit" noWrap >Team</Typography>
                  </Button>
                  <Button href="/" className={classes.button} >
                    <Typography className={classes.title} variant="h7" color="inherit" noWrap >Kontak</Typography>
                  </Button>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                    <MoreIcon />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
            {renderMenu}
            {renderMobileMenu}
          </section>
        </header>
      </MuiThemeProvider>
    );
  }
}
NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);