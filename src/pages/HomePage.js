import React, { Component } from 'react';
import axios from 'axios';
import SlideCover from '../components/SlideCover'
import FiturList from '../components/FiturList';
import Galeri from '../components/Galeri'
import PostingCard from '../components/PostingCard'



class HomePage extends Component {
 
  
  render() {
   
   
    return (
     <div >
       <SlideCover />
       <FiturList />
       <Galeri />
       <PostingCard />
     </div> 
    
    );
  }
}

export default HomePage;
