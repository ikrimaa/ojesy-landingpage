import React, { Component } from 'react';
//import logo from 'pages/app/logo.svg';
import '../app/App.css';
import axios from 'axios';

class HomePage extends Component {
  state = {
    menus : []
  }

  handleLoad = () => {
    axios.post(`https://private-16c0d2-ikrimaa.apiary-mock.com/v1/landing-page`)
    .then(res => {
      let menus = res.data;
      this.setState({ menus });
      console.log(this.state.menus)
    })
  }

  componentDidMount() {
    this.handleLoad()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>
        {/* { this.state.menus.menu.map(menu => <li>{menu.cover}</li>)} */}
      </ul>
        </header>
      </div>
    );
  }
}

export default HomePage;
