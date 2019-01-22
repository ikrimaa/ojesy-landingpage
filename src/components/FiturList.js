import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import * as contentful from 'contentful'
import FiturCard from './FiturCard';
import './styles.css';
import Typography from '@material-ui/core/Typography'

class FiturList extends Component {
    // state = {
    //     courses: [],
    //     searchString: ''
    // }

    // constructor() {
    //     super()
    //     this.getCourses()
    // }

    // getCourses = () => {
    //     client.getEntries({
    //         content_type: 'course',
    //         query: this.state.searchString
    //     })
    //     .then((response) => {
    //         this.setState({courses: response.items})
    //     })
    //     .catch((error) => {
    //         console.log("Error occured while fetching data")
    //         console.log(error)
    //     })
    // }



    render() {
        return (
            <div style={{ padding: 24 }}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                <Grid item xs={12} sm={6} lg={8} xl={8}>
                <Typography component="h4" variant="title" gutterBottom align="center"> Layanan Kami</Typography>
                <Typography align="center" >Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                    five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged.</Typography>
                </Grid>
                </Grid>
                {/* {this.state.courses ? ( */}
                <div className="wrapper">
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {/* { this.state.courses.map(currentCourse => ( */}
                        <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <FiturCard />
                        </Grid>
                        {/* ))} */}
                    </Grid>
                </div>
                {/* ) : "No courses found" } */}
            </div>
        )
    }
}
export default FiturList;