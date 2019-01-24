
import React, {Component} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
 import './slider-animations.css';
 import './styles.css';
 import axios from 'axios';
class SlideCover extends Component {
    state = {
        landingPage: [],
        covers: [], 
    }
// handleload = mengambil data dari api data covers 
    handleLoad = () => {
        axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
          .then(res => {
            let landingPage = res.data;
            let covers = landingPage[0].cover;
            this.setState({ covers });
          })
      }

      componentDidMount() {
        this.handleLoad()
      }
    render() {
        const { covers } = this.state
        return (
        <div>
		<Slider autoplay={3000} className="slider-wrapper">
			{covers.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.link_gambar}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.name}</h1>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</Slider>
	    </div>   
        );
    }
}

export default SlideCover;
