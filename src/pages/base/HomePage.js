import React, { Component } from 'react';
//import logo from 'pages/app/logo.svg';
import '../app/App.css';
import axios from 'axios';


class HomePage extends Component {
  state = {
    menus: [],
    listPost: [] 
  }

  handleLoad = () => {
    axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
    .then(res => {
      let menus = res.data;
      this.setState({ menus });
     // console.log(this.state.menus.menu)
    })
  }

  handleLoadPost = () => {
    axios.get('https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page/post')
    .then(res => {
      let listPost = res.data;
      this.setState({
        listPost
      });
       console.log(listPost)
    })
  }

  componentDidMount() {
    this.handleLoad()
    this.handleLoadPost()
  }

  render() {
    const {listPost} = this.state
    console.log(listPost)
    return (
      <div className="App">
        <header className="App-header">
        <ul>
        {/* { this.state.menus.menu.map( datas => <li>{datas}</li>)} */}
        {this.state.menus.menu}
        {/* menampilkan post */}
        <div>{
         listPost.map(datas => <div className="App-cards" >{datas.name} - {datas.post}</div>
            
            )
        }
        </div>
      </ul>
        </header>
        <div class="w3-container w3-green">
  <h1>W3Schools Demo</h1> 
  <p>Resize this responsive page!</p> 
</div>
        
      </div>
    );
  }
}

export default HomePage;
