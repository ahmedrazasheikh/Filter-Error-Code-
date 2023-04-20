import React from 'react'
import './subcription.css'
import coin from '../assets/images/coins-svgrepo-com.svg'
import RightIcon from '../assets/images/forward-icon.svg'
import diamond from '../assets/images/diamond-svgrepo-com (2).svg'
import car from '../assets/images/shipping-fast-solid-svgrepo-com (1).svg'
import key from '../assets/images/key-svgrepo-com.svg'
import dd from '../assets/images/footer-logo.png'
import aa from '../assets/images/Ellipse 6.png'
import vv from '../assets/images/memeber-img.png'
import cross from '../assets/images/cancel-svgrepo-com.svg'
import Header from './Header/Header'
import caroImage from '../assets/images/banner-img.png'
import { Link } from 'react-router-dom'
import tatus from '../assets/images/tatsu.png'
import Footer from './Footer'



const Subcription = () => {
  return (
    <div>
      <div className='bg-black  text-white'> Spend $50 for free shipping</div>
      <Header />

      <div className='mmmmiok' >
        <div style={{ backgroundImage: `url(${tatus})` }}>
          <div className='ml-5 p-5' style={{ textAlign: "left" }}>
            <h1 className='fgd font-extrabold	mkjbbfss ' style={{ fontSize: 100 }}>Subscription</h1> <br />
            {/* <h1 className='fgd mkjbbfss'></h1><br /> */}
            <p className='ml-1 p-5' style={{ fontSize: 50, color: "white", lineHeight: 1 }}>Life shouldn't be so black & white.<br />
              The Brightest flame casts the darkest <br /> shadow.</p>
            <button className='iutrvh'>Shop Now!</button>
            <br />
            <br />
          </div>
        </div>
      </div>

      {/*  Inner Div*/}
      <div className="innner">
        <section className="vip-member">
          <h2 className="text-7xl">How Our VIP Membership Works</h2>

          <p className='paragraph-style-gray mt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            tempus augue, id convallis est. Nulla neque sapien, mattis at
            molestie id, auctor faucibus ligula. Pellentesque laoreet luctus
            erat, at ullamcorper neque feugiat id.
          </p>
        </section>

        {/* member  */}
        <section className='member-section'>
            <div>
            <h2 className="text-4xl">MEMBER CREDITS</h2>
            </div>
            <div className='member-list'>
            <ul className='paragraph-style-white'>
                 <li className='mt-2'>
                  Lorem  sed impedit totam. Dicta provident consequatur voluptate, quis adipisci esse fugiat ullam ea quisquam, corporis omnis culpa ipsam placeat excepturi cupiditate voluptatem vel quae! Perspiciatis.
                 </li>
                 <li className='mt-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, aspernatur eligendi porro perspiciatis nam placeat id quae aperiam voluptate repellat deserunt veritatis nobis explicabo hic rem nihil maiores eveniet perferendis iure praesentium tempore. Voluptates sed adipisci cum eveniet non delectus reiciendis fugiat iusto libero, dolor mollitia sequi vero architecto magni!
                 </li>
                 <li className='mt-5'>
                  Lorem  sed impedit totam. Dicta provident consequatur voluptate, quis adipisci esse fugiat ullam ea quisquam, corporis omnis culpa ipsam placeat excepturi cupiditate voluptatem vel quae! Perspiciatis.
                 </li>
                 <li className='mt-5'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, aspernatur eligendi porro perspiciatis nam placeat id quae aperiam voluptate repellat deserunt veritatis nobis explicabo hic rem nihil maiores eveniet perferendis iure praesentium tempore. Voluptates sed adipisci cum eveniet non delectus reiciendis fugiat iusto libero, dolor mollitia sequi vero architecto magni!
                 </li>
                 
             </ul>

            



            </div>
        </section>

        {/* Third Part  */}

        <div className="cards-parent">
          {/* One */}

          <div className="cards">
            <div className="icon-cards">
              <img className="heiop" src={coin} alt="" />
            </div>

            <div className="content-cards">
              <h1 className="text-3xl">More Saving</h1>
              <p className="paragraph-style-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                tempus augue, id convallis est.{" "}
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="icon-cards">
              <img className="heiop" src={RightIcon} alt="" />
            </div>

            <div className="content-cards">
              <h1 className="text-3xl">Skip Often as you like</h1>
              <p className="paragraph-style-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                tempus augue, id convallis est.{" "}
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="icon-cards">
              <img className="heiop" src={diamond} alt="" />
            </div>

            <div className="content-cards">
              <h1 className="text-3xl">Best Quality</h1>
              <p className="paragraph-style-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                tempus augue, id convallis est.{" "}
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="icon-cards">
              <img className="heiop" src={car} alt="" />
            </div>

            <div className="content-cards">
              <h1 className="text-3xl">More Saving</h1>
              <p className="paragraph-style-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                tempus augue, id convallis est.{" "}
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="icon-cards">
              <img className="heiop" src={key} alt="" />
            </div>

            <div className="content-cards">
              <h1 className="text-3xl">More Saving</h1>
              <p className="paragraph-style-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                tempus augue, id convallis est.{" "}
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="icon-cards">
              <img className="heiop" src={cross} alt="" />
            </div>

            <div className="content-cards">
              <h1 className="text-3xl">More Saving</h1>
              <p className="paragraph-style-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                tempus augue, id convallis est.{" "}
              </p>
            </div>
          </div>
          
          
        </div>

       

        <div class="wrapper">
          <div class="table basic pmmvfd ">
            <div class="">
              <h2
                className="mkoiu89"
                style={{ "font-size": "3rem", "font-family": "Roundkey" }}
              >
                SILVER
              </h2>
            </div>
            <div class="aj_p">
            <span class="text price">$50.0</span>
            </div>
           
            <div class="package-name"></div>
            <ul class="features">
            
              
              <li>
                <p className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
            </ul>
            <div>
             
            </div>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div class="table basic pmmvfd ">
            <div class="">
              <h2
                className="mkoiu89"
                style={{ "font-size": "3rem", "font-family": "Roundkey" }}
              >
              GOLD
              </h2>
            </div>
            <div class="aj_p">
            <span class="text price">$100.0</span>
            </div>
           
            <div class="package-name"></div>
            <ul class="features">
            
              
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
            </ul>
            <div>
             
            </div>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div class="table basic pmmvfd ">
            <div class="">
              <h2
                className="mkoiu89"
                style={{ "font-size": "3rem", "font-family": "Roundkey" }}
              >
                DIAMOND
              </h2>
            </div>
            <div class="aj_p">
            <span class="text price">$150.0</span>
            </div>
           
            <div class="package-name"></div>
            <ul class="features">
            
              
              <li>
                <p className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
              <li>
                <p  className='mkoiu89'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nesciunt saepe placeat dolor. Odit, incidunt!</p>
              </li>
            </ul>
            <div>
             
            </div>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>



      <Footer />

    </div>
  )
}

export default Subcription