import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import './styles.css';
import fitur from '../images/calendar.png'

const FiturCard = (props) => {
    return(
        <div>
                        
          {/* { props.FiturCard ? ( */}
                <Card>
                    <CardMedia style={{height: 0, paddingTop: '56.25%', }}
                        image={fitur}
                        // image={props.course.fields.courseImage.fields.file.url}
                        // title={props.course.fields.title}
                        />
                    <CardContent >
                        <Typography gutterBottom variant="headline" component="h2" align="center">
                            {/* {props.course.fields.title} */} HALO
                        </Typography>
                    </CardContent>
                </Card>
          {/* ): null }   */}
          
        </div>
        
        
    )
}
export default FiturCard