import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
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



class DetailBlog extends Component {
  constructor(props){
    super(props)
    this.state = {
      postings: [],
      id: '',
    };
  }


  

  handleLoad = () => {
    axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
      .then(res => {
        let landingPage = res.data;
        let postings = landingPage.posting;
        this.setState({ postings });
        console.log(postings);
      })
};

handleDeatail = (id) => {
 
}




componentDidMount(){
  this.handleLoad()


}


  render() {
   
    const { classes } = this.props;
    const { postings } = this.state;
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
        <div>
     
          <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
               I
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="judul"
            subheader="tanggal"
          />
          <CardMedia
            className={classes.media}
            image=""
            title="Paella dish"
          />
          <CardContent>
            <Typography component="p">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
            <Typography component="p">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          </CardActions>
        </Card>
    
        
        </div>
     
      </LayoutBody>
    </section>
      </MuiThemeProvider>
    );
  }
}
DetailBlog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailBlog);