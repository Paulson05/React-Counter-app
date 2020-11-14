import React, { Component } from 'react'
class NavBar extends Component{
    render() { 
        return (
            
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="counter.jsx">
        navbar <span className="badge badge-pile badge-secondary">{this.props.totalCounters}</span>
            </a>
            </nav>
          );
    }
}
 
export default NavBar;