import React, { Component } from 'react';
import Navbar from './Navbar';
import Dog from './Dog';
import Home from './Home';
import whiskey from './imgs/whiskey.jpg'
import hazel from './imgs/hazel.jpg'
import tubby from './imgs/tubby.jpg'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom' 


class App extends Component{
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render(){
    let dogarr=[];
    this.props.dogs.map(el=> dogarr.push(el.name));
    return (
      <div className="App">
        <Navbar names={ dogarr }/>
        <Switch>
          <Route
            exact path='/dogs/:name'
            render={(routeProps)=> <Dog {...routeProps} dogs={this.props.dogs} />}            
          />
          <Route
            exact path='/dogs'
            render={()=> <Home dogs={this.props.dogs}/>}
          />
          <Route
            render={()=> <Redirect to='/dogs'/>}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
