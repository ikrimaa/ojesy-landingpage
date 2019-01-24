import React, { Component } from 'react';
import axios from 'axios';
import SlideCover from '../components/SlideCover'
import FiturList from '../components/FiturList';
import Galeri from '../components/Galeri'



class HomePage extends Component {
  state = {
    menus: [],
    listPost: []
  }

  // handleLoad = () => {
  //   axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
  //     .then(res => {
  //       let menus = res.data;
  //       this.setState({ menus });
  //       // console.log(this.state.menus.menu)
  //     })
  // }

  // handleLoadPost = () => {
  //   axios.get('https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page/post')
  //     .then(res => {
  //       let listPost = res.data;
  //       this.setState({
  //         listPost
  //       });
  //       console.log(listPost)
  //     })
  // }

  // componentDidMount() {
  //   this.handleLoad()
  //   this.handleLoadPost()
  // }

  render() {
    const { listPost } = this.state
    console.log(listPost) 
   
    return (
     <div >
       <SlideCover />
       <FiturList />
       <Galeri />
     </div> 
    
    );
  }
}

export default HomePage;
