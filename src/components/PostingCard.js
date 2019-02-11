import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './styles.css';
import Button from './Button';
import LayoutBody from './LayoutBody';
import Typography from './Typography';
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
    marginBottom: theme.spacing.unit * 14,
  },

  image: {
    height: 55,
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
  card: {
    display: 'inline-block',
    borderRadius: 1,
    border: 1,
    boxShadow: 'none',
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



class PostingCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      visible: 2,
      error: false,
      id:'',
    };

    this.loadMore = this.loadMore.bind(this);
  }

  handleId = (id) => {
    this.setState({
      id: id
    })
  }
  handleLoad = () => {
    axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
      .then(res => {
        let landingPage = res.data;
        let items = landingPage[0].posting;
        this.setState({ items });
        // console.log(postings);

      }).catch(error => {
        console.error(error);
      this.setState({
        error: true
      });
      })
     
    
  };
  
  loadMore() {
    this.setState((prev) => {
      return { visible: prev.visible + 2 };
    });
  }

  componentDidMount() {
    this.handleLoad()
  }

  render() {
    const url = "/detail"
    const { classes } = this.props;
    const { postings, id } = this.state;
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
              BLOG
        </Typography>
          <div >
          {this.state.items.slice(0, this.state.visible).map((item, index) => {
              return (
                <div  key={item.id}>
              
                  <Card className={classes.card} >
                 
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                          {item.avatar}
                        </Avatar>
                      }
                      action={
                        <IconButton>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={item.judul}
                      subheader={item.published_at}
                    />
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/paella.jpg"
                      title="Paella dish"
                    />
                    <CardContent>
                      <Typography component="p">
                        {item.post}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                      <Button size="small" color="primary" value={item.id}
                        href={`${url}/${item.id}`}
                        id={item.id}
                        onChange={(id) => { this.handleId(item.id) }}
                      >
                        Learn More
                    </Button>
                    </CardActions>
                </Card>
                </div>
              );
            })}
          </div>
          {this.state.visible < this.state.items.length &&
             <Button
             onClick={this.loadMore}
              color="secondary"
              color="primary"
              size="large"
              variant="contained"
              className={classes.button}
              
            >
              READ MORE
        </Button>
          }
          </LayoutBody>
        </section>
      </MuiThemeProvider>

    );
  }
}
PostingCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostingCard);
