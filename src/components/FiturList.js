import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
// import TextField from '@material-ui/core/TextField'
// import * as contentful from 'contentful'
import FiturCard from './FiturCard';


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

    // onSearchInputChange = (event) => {
    //     if (event.target.value) {
    //         this.setState({searchString: event.target.value})
    //     } else {
    //         this.setState({searchString: ''})
    //     }
    //     this.getCourses()
    // }

    render() {
        return (
            <div>
                {/* {this.state.courses ? ( */}
                    <div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            {/* { this.state.courses.map(currentCourse => ( */}
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <FiturCard  />
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