// import React, { Component } from 'react'
// import Grid from '@material-ui/core/Grid'
// // import TextField from '@material-ui/core/TextField'
// // import * as contentful from 'contentful'
// import FiturCard from './FiturCard';
// import './styles.css';
// import Typography from '@material-ui/core/Typography'

// class FiturList extends Component {
//     // state = {
//     //     courses: [],
//     //     searchString: ''
//     // }

//     // constructor() {
//     //     super()
//     //     this.getCourses()
//     // }

//     // getCourses = () => {
//     //     client.getEntries({
//     //         content_type: 'course',
//     //         query: this.state.searchString
//     //     })
//     //     .then((response) => {
//     //         this.setState({courses: response.items})
//     //     })
//     //     .catch((error) => {
//     //         console.log("Error occured while fetching data")
//     //         console.log(error)
//     //     })
//     // }



//     render() {
//         return (
//             <div style={{ padding: 40 }}>
//                 <Grid
//                     container
//                     direction="column"
//                     justify="center"
//                     alignItems="center"
//                 >
//                 <Grid item xs={12} sm={6} lg={8} xl={8}>
//                 <Typography component="h4" variant="title" gutterBottom align="center"> Layanan Kami</Typography>
//                 <Typography align="center" >Lorem Ipsum is simply dummy text of the 
//                     printing and typesetting industry. Lorem Ipsum has been the 
//                     industry's standard dummy text ever since the 1500s, when an unknown 
//                     printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
//                     five centuries, but also the leap into electronic typesetting, 
//                     remaining essentially unchanged.</Typography>
//                 </Grid>
//                 </Grid>
//                 {/* {this.state.courses ? ( */}
//                 <div className="wrapper">
//                     <Grid container spacing={40} style={{ padding: 24 }}>
//                         {/* { this.state.courses.map(currentCourse => ( */}
//                         <Grid item xs={12} sm={6} lg={4} xl={3}>
//                             <FiturCard />
//                         </Grid>
//                         <Grid item xs={12} sm={6} lg={4} xl={3}>
//                             <FiturCard />
//                         </Grid>
//                         <Grid item xs={12} sm={6} lg={4} xl={3}>
//                             <FiturCard />
//                         </Grid>
//                         {/* ))} */}
//                     </Grid>
//                 </div>
//                 {/* ) : "No courses found" } */}
//             </div>
//         )
//     }
// }
// export default FiturList;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import './styles.css';
import Button from './Button';
import LayoutBody from './LayoutBody';
import Typography from './Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#82b1ff',
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
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
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
});

function FiturList(props) {
  const { classes } = props;

  return (
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
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src=""
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Pengendara Wanita
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src=""
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  Langganan Bulanan
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src=""
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                 {'Driver Tetap'}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
            color="secondary"
          //color="primary"
          size="large"
          variant="contained"
          className={classes.button}
          component={linkProps => (
            <Link {...linkProps} href="/home" variant="button" />
          )}
        >
          PESAN SEKARANG
        </Button>
      </LayoutBody>
    </section>
  );
}

FiturList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FiturList);