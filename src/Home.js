import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

export class Home extends Component {
  // handleShow(){
  //   <Redirect to=''/>
  // }
  render() {
    return (
      <div>
        {this.props.dogs.map(el=>(
              <div className='Home-img'>
                {/* <h3>{el.name}</h3> */}
                <img className='Home-img'  src={ el.src }/>
                <br></br>
                <Link className='Home-link' to={ `/dogs/${el.name}` }>View</Link>
              </div>
          ))}
      </div>
    )
  }
}

export default Home
