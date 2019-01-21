import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class SlideCover extends Component {
    state = {
        url :'https://images.unsplash.com/photo-1527352675495-d54e8f102689?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    }
    render() {
        let url = this.state.url;
        return (
            <div  >
                <Carousel  showThumbs={false} showArrows={false} >
                <div>
                    <img  src={url} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={url} />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={url} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
            </div>
            
        );
    }
}

export default SlideCover;





