import React from 'react'
import '../Components/collection.css'
import dd from '../assets/images/footer-logo.png'
import shirt from '../assets/images/t-shirt.png'
import shorts from '../assets/images/shorts.png'
import Trouser from '../assets/images/Joggers-img.png'
import Hoddie from '../assets/images/hoodies.png'
import Cap from '../assets/images/hats.png'
import caroImage from '../assets/images/banner-img.png'
import Header from '../Components/Header/Header'
import { Link } from 'react-router-dom'
import tatus from '../assets/images/tatsu.png'
import Footer from './Footer'


const Collection = () => {
  return (
    <div>
      <div className='bg-black  text-white'> Spend $50 for free shipping</div>
      <Header />

      <div className='mmmmiok' >
        <div style={{ backgroundImage: `url(${tatus})` }}>
          <div className='ml-5 p-5' style={{ textAlign: "left" }}>
            <h1 className='fgd font-extrabold	mkjbbfss ' style={{ fontSize: 100 }}>Tatsu Threads Products</h1> <br />
            {/* <h1 className='fgd mkjbbfss'></h1><br /> */}
            <p className='ml-1 p-5' style={{ fontSize: 50, color: "white", lineHeight: 1 }}>Life shouldn't be so black & white.<br />
              The Brightest flame casts the darkest <br /> shadow.</p>
            <button className='iutrvh'>Shop Now!</button>
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="midPart">
        {/* First Part */}

        <section className="first-product">
         
            <img src={shirt} className="img-container"/>
         
          <div className="product-text">
            <h1 className="heading">T-SHIRTS</h1>
            <div className='para-container'>
            <p className="paragraph-style">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et tristique metus, ut auctor nunc. Curabitur tristique nunc vel
              metus vestibulum luctus. Vestibulum interdum malesuada metus et
              porttitor. Suspendisse potenti. Integer sed risus finibus,
              fermentum nibh et, pellentesque metus.
              <br />
              <br />
              Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum
              interdum malesuada metus et porttitor
            </p>
           
            </div>
            <Link to='/Tshirts'><button className='shop-button'>SHOP NOW</button></Link>
          </div>
        </section>

        <section className="secound-product">
      
            <img src={shorts} className="img-container" />
       
          <div className="product-text">
            <h1 className="heading">SHORTS</h1>
            <div className='para-container'>
            <p className="paragraph-style">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et tristique metus, ut auctor nunc. Curabitur tristique nunc vel
              metus vestibulum luctus. Vestibulum interdum malesuada metus et
              porttitor. Suspendisse potenti. Integer sed risus finibus,
              fermentum nibh et, pellentesque metus.
              <br />
              <br />
              Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum
              interdum malesuada metus et porttitor
            </p>
           
            </div>
           <Link to='/Shorts'><button className='shop-button'>SHOP NOW</button></Link> 
          </div>
        </section>

        <section className="first-product">
          
            <img src={Trouser} className="img-container" />
         
          <div className="product-text">
            <h1 className="heading">JOGGERS</h1>
            <div className='para-container'>
            <p className="paragraph-style">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et tristique metus, ut auctor nunc. Curabitur tristique nunc vel
              metus vestibulum luctus. Vestibulum interdum malesuada metus et
              porttitor. Suspendisse potenti. Integer sed risus finibus,
              fermentum nibh et, pellentesque metus.
              <br />
              <br />
              Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum
              interdum malesuada metus et porttitor
            </p>
           
            </div>
            <Link to='/Joggers'><button className='shop-button'>SHOP NOW</button></Link>
          </div>
        </section>

        <section className="secound-product">
         
            <img src={Hoddie} className="img-container" />
       
          <div className="product-text">
            <h1 className="heading">TATSU HOODIES</h1>
            <div className='para-container'>
            <p className="paragraph-style">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et tristique metus, ut auctor nunc. Curabitur tristique nunc vel
              metus vestibulum luctus. Vestibulum interdum malesuada metus et
              porttitor. Suspendisse potenti. Integer sed risus finibus,
              fermentum nibh et, pellentesque metus.
              <br />
              <br />
              Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum
              interdum malesuada metus et porttitor
            </p>
           
            </div>
            <Link  to="/hoodie"><button className='shop-button'>SHOP NOW</button></Link>
          </div>
        </section>

        <section className="first-product">
     
            <img src={Cap}  className="img-container"/>
      
          <div className="product-text">
            <h1 className="heading">HATS</h1>
            <div className='para-container'>
            <p className="paragraph-style">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              et tristique metus, ut auctor nunc. Curabitur tristique nunc vel
              metus vestibulum luctus. Vestibulum interdum malesuada metus et
              porttitor. Suspendisse potenti. Integer sed risus finibus,
              fermentum nibh et, pellentesque metus.
              <br />
              <br />
              Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum
              interdum malesuada metus et porttitor
            </p>
           
            </div>
           <Link to='/hats'>
            <button className='shop-button'>SHOP NOW</button>
          </Link>
          </div>
        </section>
      </div>

      <Footer />

    </div>
  )
}

export default Collection