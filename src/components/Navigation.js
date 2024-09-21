import React from 'react'
import '../components/Navigation.css'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo"><Link to="/">DesignX</Link></label>
      <ul>
        <li><a className="active" id='deco'><Link to="/" id='deco'>Home</Link></a></li>
        <li><a ><Link to='/about' id='deco'>About</Link></a></li>
        <li><a >Services</a></li>
        <li><a >Contact</a></li>
        <li><a >Feedback</a></li>
      </ul>
    </nav>
    </div>
    </div>
  )
}

export default Navigation