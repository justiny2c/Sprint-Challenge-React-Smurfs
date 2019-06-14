import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from "axios";
import {Route, NavLink} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount(){
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({
            smurfs: response.data
          })
      })
      .catch(err => {});

  }

  addSmurf = smurf => {

    let url = "http://localhost:3333/smurfs";
    axios
      .post(url, smurf)
      .then(
        response => this.setState({
        smurfs: response.data

      })
      )
      .catch(err => console.log(err))
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();

    let url = `http://localhost:5000/friends/${id}`

    axios.delete(url)
    .then(response => this.setState({
        friends: response.data

    }))
    
}    


  // Notice what your map function is looping over and returning inside of Smurfs.

  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to="/smurf-form">Form</NavLink>
          <NavLink to="/">Smurfs</NavLink>  


        </nav>

        <Route path = "/smurf-form"
          render = {props => <SmurfForm addSmurf={this.addSmurf}
          {...props}/>
        }/>
        <Route exact path = "/"
          render = {props => <Smurfs smurfs={this.state.smurfs}
          deleteSmurf={this.deleteSmurf}
          {...props}/>
        }/>
      </div>
    );
  };
}

export default App;
