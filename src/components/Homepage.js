import React from 'react'
import './Homepage.css'

function Homepage() {
  return (
    <div>
        <div style={{height:'1000px',width:'100vw'}}>
      <div>
      <div>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" id='imgcontainer'>
      <img src="https://wallpaperaccess.com/full/39668.jpg" className='img' alt="..."/>
    </div>
    <div class="carousel-item" id='imgcontainer'>
      <img src="https://wallpaperaccess.com/full/3169357.jpg" className='img' alt="..."/>
    </div>
    <div class="carousel-item" id='imgcontainer'>
      <img src="https://wallpaperaccess.com/full/7460.jpg" className='img' alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     </div>
      
    </div>
    </div>
    </div>
  )
}

export default Homepage