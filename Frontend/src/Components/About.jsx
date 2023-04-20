import React from 'react'
import image from '../assets/images/about-us-2.png'
import dd from '../assets/images/footer-logo.png'
import aa from '../assets/images/Ellipse 6.png'
import caroImage from '../assets/images/banner-img.png'
import vv from '../assets/images/memeber-img.png'
// import './Contact.css'
import './About.css'
// import './Contact-us.css';
// import './Contact2.css.css';
import Header from './Header/Header'
import { Link } from 'react-router-dom'
import tatus from '../assets/images/tatsu.png'
import Footer from './Footer'


const Contact = () => {



  return (

    <div>
      <div className='bg-black  text-white'> Spend $50 for free shipping</div>
      <Header />
      <div className='mmmmiok' >
        <div style={{ backgroundImage: `url(${tatus})` }}>
          <div className='ml-5 p-5' style={{ textAlign: "left" }}>
            <h1 className='fgd font-extrabold	mkjbbfss ' style={{ fontSize: 100 }}>About Us</h1>
            <p className='ml-1 p-5' style={{ fontSize: 50, color: "white", lineHeight: 1 }}>Life shouldn't be so black & white.<br />
              The Brightest flame casts the darkest <br /> shadow.</p>
            <button className='iutrvh'>Shop Now!</button>
            <br />
          </div>
        </div>
      </div>

      <img src={image} alt="" />


      <section className='about-text-container'>
      <div className='first-text-about'    >
        <h1 className='about-heading' >Tales Of Tatsu Threads</h1>
        <p className='about-text' >  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus. Pellentesque in sollicitudin tellus. Mauris dignissim viverra nunc, eu consectetur turpis vulputate a. Nullam vulputate condimentum nunc, a tempus tortor molestie sit amet. Morbi tempor, metus ut aliquet laoreet, augue sapien dictum nibh, id bibendum lorem arcu vitae orci. Proin finibus, turpis at aliquam posuere, arcu erat commodo massa, ac aliquet nulla ligula at augue. Sed eros tellus, consequat vel lobortis sit amet, dignissim quis metus. In nulla quam, luctus porttitor accumsan vitae, interdum a orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit magna at lacinia eleifend.</p>
      </div>


      <div className='secound-text-about' >
        <div className='about-first-div'><h1 className='about-heading-2'>Story of Tatsu Threads</h1></div>
        <div className='about-text-div'>
        <p className='about-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus. Pellentesque in sollicitudin tellus. Mauris dignissim viverra nunc, eu consectetur turpis vulputate a. Nullam vulputate condimentum nunc, a tempus tortor molestie sit amet. Morbi tempor, metus ut aliquet laoreet, augue sapien dictum nibh, id bibendum lorem arcu vitae orci. Proin finibus, turpis at aliquam posuere, arcu erat commodo massa, ac aliquet nulla ligula at augue. Sed eros tellus, consequat vel lobortis sit amet, dignissim quis metus. In nulla quam, luctus porttitor accumsan vitae, interdum a orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit magna at lacinia eleifend.</p>
      </div>
      </div>

      <div className='third-text-about' >
        <div className='about-first-div'><h1 className='about-heading-2'>How did all Started</h1></div>
        <div className='about-text-div'>
        <p className='about-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada metus et porttitor. Suspendisse potenti. Integer sed risus finibus, fermentum nibh et, pellentesque metus. Pellentesque in sollicitudin tellus. Mauris dignissim viverra nunc, eu consectetur turpis vulputate a. Nullam vulputate condimentum nunc, a tempus tortor molestie sit amet. Morbi tempor, metus ut aliquet laoreet, augue sapien dictum nibh, id bibendum lorem arcu vitae orci. Proin finibus, turpis at aliquam posuere, arcu erat commodo massa, ac aliquet nulla ligula at augue. Sed eros tellus, consequat vel lobortis sit amet, dignissim quis metus. In nulla quam, luctus porttitor accumsan vitae, interdum a orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed blandit magna at lacinia eleifend.</p>
      </div>
      </div>

     
  </section>


      {/*  Carousel*/}
      <div>
        <h1 className='text-6xl mt-12'>Our Testimomials</h1>
        <div class="testimonials-section">
          <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav" />
          <input type="radio" name="slider" title="slide2" class="slider__nav" />
          <input type="radio" name="slider" title="slide3" class="slider__nav" />
          <input type="radio" name="slider" title="slide4" class="slider__nav" />
          <input type="radio" name="slider" title="slide5" class="slider__nav" />
          <div class="slider__inner">
            <div class="slider__contents">
              <img src={aa} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">We love you guys. It's easy to order, we get shipments quick and my rep solves tough problems the right way. We get answers that work.</p>
              <h2 class="slider__caption mt-16">Rhonda | NylonCraft</h2>
            </div>
            <div class="slider__contents">
              <img src={vv} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">You all bend over backwards to get it done. Inside sales and the Account Managers are great! It's your service...you all know that it's not just about taking orders </p>
              <h2 className='slider__caption  mt-16'>Jared | Rexam</h2>
            </div>
            <div class="slider__contents">
              <img src={aa} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">It's the long-term relationship we have with Proheat that keeps me calling you guys. I trust you, you're quick, and everybody </p>
              <h2 class="slider__caption">Chris | C&M Fine Pack</h2>
            </div>
            <div class="slider__contents">
              <img src={vv} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">You answer my questions, always takes care of problems, and I never have a hassle.</p>
              <h2 class="slider__caption">Rex | LNP Engineering Plastics</h2>
            </div>
            <div class="slider__contents">
              <img src={vv} alt="" />
              <quote>&rdquo;</quote>
              <p class="slider__txt">Proheat's staff are all so friendly and everybody goes above and beyond. Everyone is courteous, everything is quick and you get us what we need. I have to shop around for everything and we ALWAYS come back to Proheat.</p>
              <h2 class="slider__caption">Darlene | Russel Stover</h2>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>


  )
}

export default Contact