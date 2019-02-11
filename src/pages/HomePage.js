import React from 'react';
import axios from 'axios';
import SlideCover from '../components/SlideCover'
import FiturList from '../components/FiturList';
import Galeri from '../components/Galeri'
import PostingCard from '../components/PostingCard'
// import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
 


class HomePage extends React.Component {
 
 
  
  render() {
    // const styles = StyleSheet.create({
    //   fadeIn: {
    //     animationName: fadeIn,
    //     animationDuration: '1s'
    //   }
    // })
   
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
