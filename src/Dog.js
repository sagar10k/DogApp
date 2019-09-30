import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import './Dog.css'
export class Dog extends Component {
  render() {
    let name=this.props.match.params.name
    let dog=this.props.dogs.find(x=> x.name === name)
    return (
        dog === undefined 
        ? <Redirect to='/dogs' />
        :<div className='Dog'>
          <h1>{ name }</h1>
          <img src= {dog.src} alt={dog.name} />
          {
            dog.facts.map(el=> <p>{ el }</p>)
          }
          <button onClick={ this.props.history.goBack }>Go Back</button>
         </div>     
    )
  }
}

export default Dog
