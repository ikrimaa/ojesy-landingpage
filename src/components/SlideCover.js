
import React, {Component} from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import 'normalize.css/normalize.css';
 import './slider-animations.css';
 import './styles.css';

class SlideCover extends Component {
   
    render() {
        const content = [
            {
                title: 'OJESY',
                description:
                'ORANG TUA TENANG SAAT ANAK AMAN DI JALAN',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
                user: 'Luan Gjokaj',
                userProfile: 'https://i.imgur.com/JSW6mEk.png'
            },
            {
                title: 'OJESY',
                description:
                'ORANG TUA TENANG SAAT ANAK AMAN DI JALAN',
                button: 'Discover',
                image: 'https://i.imgur.com/DCdBXcq.jpg',
                user: 'Erich Behrens',
                userProfile: 'https://i.imgur.com/0Clfnu7.png'
            },
            {
                title: 'OJESY',
                description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
                button: 'Buy now',
                image: 'https://i.imgur.com/DvmN8Hx.jpg',
                user: 'Bruno Vizovskyy',
                userProfile: 'https://i.imgur.com/4KeKvtH.png'
            }
        ];

        return (
        <div>
		{/* <Header /> */}
		<Slider autoplay={3000} className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
	    </div>
         
            
        );
    }
}

export default SlideCover;
