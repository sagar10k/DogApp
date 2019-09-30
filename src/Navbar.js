import React, { Component } from 'react'
import {NavLink, withRouter } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li className='Navbar-li'>
              <NavLink exact activeClassName='Navbar-active-link' className='Navbar-li' to='/dogs'>Home</NavLink>            
            </li> 
            {
              this.props.names.map(el=>{
                let lnk=`/dogs/${el}`
                  return(
                    <li className='Navbar-li'>
                      <NavLink exact activeClassName='Navbar-active-link' className='Navbar-li' to={ lnk }>{ el }</NavLink>
                    </li>
                  )
              })
            }
          </ul>
        </nav>
      </div>
    )
  }
}

export default withRouter(Navbar); 
