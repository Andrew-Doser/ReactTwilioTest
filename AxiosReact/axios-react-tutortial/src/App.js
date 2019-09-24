// src/App.js
//
import React from "react";

import API from "./utils/API";
import User from "./User";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null,
      phoneNumber: null,
    };
  }

  render() {
    const { isLoading, name, avatar, email, phoneNumber } = this.state;

    return (
      
      <div>
        <User isLoading={isLoading} name={name} avatar={avatar} email={email} phoneNumber={phoneNumber}/>
        
      </div>
    );
  }

  async componentDidMount() {

    // // Load async data.
    // try {
    //   let userData = await API.get('/', {
    //     params: {
    //       results: 1,
    //       inc: 'name, email,picture'
    //     }
    //   })

    //   userData = userData.data.results[0];
    //   // Update state with new data.
    //   const name = `${userData.name.first} ${userData.name.last}`;
    //   const avatar = userData.picture.large;
    //   const email = userData.email;

    //   // Re-render our component.
      this.setState({
        ...this.state, ...{
          isLoading: false,
          name: 'Andrew Doser',
          avatar: 'https://live.staticflickr.com/114/303369118_166b721ebc.jpg',
          email: 'drew.doser@gmail.com',
          phoneNumber: '5035019827',
        }
      });
    // }
    // catch (e) {
    //   console.log(`Axios failed: ${e}`);
    // }
    // var qs = require('qs');
    // try {
    //   const response = await API.post(
    //     '/api/createuser/',
    //     qs.stringify({
    //       'email': 'loser.aim@gmail.com',     
    //       'password': 'pmas',
    //       'confirmPassword':'pmas',
    //       'userName': 'loseraim',
    //       'phoneNumber': '5035019827',
    //     })
    //   );
    //   console.log('Returned Data:', response);
    // } catch (e) {
    //   console.log(`Axios failed: ${e}`);
    // }

  }
}

export default App;
