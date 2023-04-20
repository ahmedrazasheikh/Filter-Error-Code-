import React from 'react'
import dd from  '../assets/images/footer-logo.png'
import './Home.css'
const Footer = () => {
  return (
    <div class="pg-footer">
    <footer class="footer">
      {/* <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
      <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
    </svg> */}
      <div class="footer-content">
        <div class="footer-content-column"style={{textAlign:"start"}}>
          <div class="footer-logo">
            <a class="footer-logo-link" href="#" style={{marginLeft:"-50%",marginBottom:"10%"}}>
              <span class="hidden-link-text">LOGO</span>
              <img src={dd} alt="" />
            </a>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 footer-col logo-box">
            <p className='footer-para-text'>lorem ipsum dolor sit amet, consectetur <br /> elit. sed libero nec arcu vehicula congue.
            </p>
            <div className='kojnbdsnk'style={{marginLeft:"-50%",marginTop:"20%",fontSize:25}}>
              <i class="fa-brands mrAdd  fa-facebook-f"></i>
              <i class="fa-brands mrAdd  fa-instagram"></i>
              <i class="fa-brands mrAdd  fa-pinterest"></i>
              <i class="fa-brands mrAdd  fa-youtube"></i>
              <i class="fa-brands mrAdd  fa-twitter"></i>
            </div>
          </div>
        </div>
        <div class="footer-content-column" style={{textAlign:"start"}}>
          <div class="footer-menu">
            <h2 class="footer-menu-name" style={{fontFamily:300,fontSize:35}}> Quick Links</h2>
            <ul id="menu-company" class="footer-menu-list">
              <li class="menu-item menu-item-type-post_type menu-item-object-page" style={{fontFamily:10,fontSize:25}}>
                <a href="#">About Us    </a>
              </li>
              <li class="menu-item menu-item-type-taxonomy menu-item-object-category" style={{fontFamily:10,fontSize:25}}>
                <a href="#">Collection      </a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page" style={{fontFamily:10,fontSize:25}}>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column" style={{textAlign:"start"}}>
          <div class="footer-menu">
            <h2 class="footer-menu-name" style={{fontFamily:10,fontSize:35}}> Usefuls Links</h2>
            <ul id="menu-quick-links" class="footer-menu-list">
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#" style={{fontFamily:10,fontSize:25}}>FAQ's </a>
              </li>
              <li class="menu-item menu-item-type-custom menu-item-object-custom">
                <a target="_blank" rel="noopener noreferrer" href="#" style={{fontFamily:10,fontSize:25}}>Terms and Conditions</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page" style={{fontFamily:10,fontSize:25}}>
                <a href="#">Subscription</a>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page" style={{fontFamily:10,fontSize:25}}>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-content-column" style={{textAlign:"start"}}>
          <div class="footer-call-to-action">
            <h2 class="FillTheVAlue" style={{fontFamily:100,fontSize:35}}> Newsletter Subscription</h2>
            <p class="footer-call-to-action-description" style={{fontFamily:10,fontSize:25}}> lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <input className='border-1 kkll border-whites rounded-sm px-4 py-1 mt-10' style={{padding:"2%",width:"105%"}} placeholder='Email Address' type="text" name="" id="" />
              <button className='nnju  border-black text-xl text-black mt-6 px-11 py-4 '>SUBSCRIBE</button>
            </p>
       
          </div>
        </div>
      </div>
    </footer>
  </div>

  )
}

export default Footer