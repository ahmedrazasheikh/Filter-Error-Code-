import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import './Home.css'
import './home.scss';
import { Link } from "react-router-dom";
import bb from '../assets/images/menu-icon.svg'
import logo from '../assets/images/header-logo-1.svg'
import man from '../assets/images/user.svg'
import shopping from '../assets/images/shopping-icon.svg'
import "pure-react-carousel/dist/react-carousel.es.css";
import ReactCardSlider from 'react-card-slider-component';
import dd from '../assets/images/footer-logo.png'
import ddqq from '../assets/images/1.png'
import caroImage from '../assets/images/banner-img.png'
import short from '../assets/images/boxers-img.png'
import mesurment from '../assets/images/siora-img.png'
import person from '../assets/images/jusdevoyage-img.png'
import tag from '../assets/images/crown-img.png'
import girl from '../assets/images/member-1.png'
import boy from '../assets/images/member-2.jpg'
import thirdboy from '../assets/images/member-3.jpg'
import GroupImage from '../assets/images/Group-img.png'
import shirt from '../assets/images/shirt-2.png'
import homeHat from '../assets/images/home-hat.png'
import homeHoodies from '../assets/images/home-hoodies.png'
import homeTshirt from '../assets/images/home-tshirt.png'
import rigth from '../assets/images/next-icon.png'
import left from '../assets/images/prevew-icon.png'
import homeShorts from '../assets/images/home-shorts.png'
import { Drawer, Button, Divider } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import shirt2 from '../assets/images/shirt-2.png'
import Header from './Header/Header';
import Carousel from "react-elastic-carousel";
// import './fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from './Footer';



const Home = () => {
  let baseUrl = "https://jade-lonely-marlin.cyclic.app/api";




  useEffect(() => {

    const getProfile = async () => {
      try {
        let response = await axios.get(`${baseUrl}/profile`,
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': '0',
            }
          });

        console.log("response: ", response);
      } catch (error) {

        console.log("axios error: ", error);


      }



    }
    getProfile();

  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]
  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => { setIsVisible(true); };
  const closeDrawer = () => { setIsVisible(false); };

  const styles = {
    button: {
      background: "transparent",
      outline: "none",
      color: "black",
      border: "none",
      fontSize: 26
    },
  };








  return (
    <div>
      <div className='bg-black py-1  text-center	  text-white'> Spend $50 for free shipping</div>
      <Header />
      <div className='mmmmiok' >




        {/* Second */}

        <div className='mmqqoop'>

          <div className='iiyytt ml-0'>
            <h1 className='fgd font-extrabold	mkjbbfss '>Do Well, Live Well & Dress Really Well</h1> <br />
            {/* <h1 className='fgd mkjbbfss'></h1><br /> */}
            <p className='mkjbbfss awdw'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien,
              mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat, at ullamcorper neque feugiat id.</p>
            <button className='iutrvh'>Shop Now!</button>
          </div>


          <div className='ffmmkklloo'>
            <img src={caroImage} alt="" />
          </div>
        </div>



      </div>



      {/* Second */}

      <div className='rtfsecond'>
        <h1 className='mjhgre' >Best Selling Product</h1>
        <p className='headfill2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin a tempus augue, id convallis est. Nulla neque sapien,
          mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet
          luctus erat, at ullamcorper neque feugiat id.
        </p>
      </div>

      <Drawer
        visible={isVisible}
        placement="left"
        onClose={closeDrawer}
      >
        {/* <button type="button" class="btn-close text-reset" onClick={closeDrawer} data-bs-dismiss="offcanvas" aria-label="Close"></button> */}

        {/* <Divider /> */}
        <p id="nav-item"><Link to="/" class="text-white">Home</Link></p>
        <Divider />
        <p id="nav-item"><Link to="/about" class="text-white">About Us</Link></p>
        <Divider />
        <p id="nav-item"><Link to="/collection" class="text-white">Collection</Link></p>
        <Divider />
        <p id="nav-item"><Link to="/subcription" class="text-white">Subcription</Link></p>
        <Divider />
        <p id="nav-item"><Link to="/contactus" class="text-white">Contact Us</Link></p>
      </Drawer>

      {/* Forth Part */}

      <Carousel class="sc-bcXHqe kXteup rec rec-arrow rec" style={{ width: "75%", display: "flex", aligItems: "center", marginLeft: "12%" }} breakPoints={breakPoints}>

        <div id="">
          <div class="content-with-image">
            <div class="image" style={{ border: "1px solid gray" }}>
              <img src={shirt} class="carousal-img img-fluid" />
            </div>

            <div class="desc text-center">
              <h2 className='mpos1'  >Menace Shirt Design</h2>
            </div>
          </div>

          <div class="member-text text-center">
            <h4 className='mpos1' >  Menace Shirt Design</h4>
            <p class="over-line mkop2">Retail: $90.00</p>
            <p className='nmji1 ' >3 For $30 (B1G2)</p>
          </div>

          <div class="member-link text-center">
            <a href="#" className='mjij1 '  >NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div id="">
          <div class="content-with-image">
            <div class="image" style={{ border: "1px solid gray" }}>
              <img src={shirt} class="carousal-img img-fluid" />
            </div>
            {/* <button tabindex="0" class="sc-bcXHqe kXteup rec rec-arrow rec rec-arrow-right" type="button" fdprocessedid="otcib3">==❯</button> */}

            <div class="desc text-center">
              <h2 className='mpos1' >Menace Shirt Design</h2>
            </div>
          </div>

          <div class="member-text text-center">
            <h4 className='mpos1' >Menace Shirt Design</h4>
            <p class="over-line mkop2">Retail: $90.00</p>
            <p className='nmji1'>3 For $30 (B1G2)</p>
          </div>

          <div class="member-link text-center">
            <a href="#" className='mjij1'>NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div id="">
          <div class="content-with-image">
            <div class="image" style={{ border: "1px solid gray" }}>
              <img src={shirt} class="carousal-img img-fluid" />
            </div>

            <div class="desc text-center">
              <h2 className='mpos1' >Menace Shirt Design</h2>
            </div>
          </div>

          <div class="member-text text-center">
            <h4 className='mpos1' >Menace Shirt Design</h4>
            <p class="over-line mkop2">Retail: $90.00</p>
            <p className='nmji1' >3 For $30 (B1G2)</p>
          </div>

          <div class="member-link text-center">
            <a href="#" className='mjij1'>NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div id="">
          <div class="content-with-image">
            <div class="image" style={{ border: "1px solid gray" }}>
              <img src={shirt} class="carousal-img img-fluid" />
            </div>

            <div class="desc text-center">
              <h2 className='mpos1' >Menace Shirt Design</h2>
            </div>
          </div>

          <div class="member-text text-center">
            <h4 className='mpos1' >Menace Shirt Design</h4>
            <p class="over-line mkop2">Retail: $90.00</p>
            <p className='nmji1'>3 For $30 (B1G2)</p>
          </div>

          <div class="member-link text-center">
            <a href="#" className='mjij1'>NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div id="">
          <div class="content-with-image">
            <div class="image" style={{ border: "1px solid gray" }}>
              <img src={shirt} class="carousal-img img-fluid" />
            </div>

            <div class="desc text-center">
              <h2 className='mpos1' >Menace Shirt Design</h2>
            </div>
          </div>

          <div class="member-text text-center">
            <h4 className='mpos1' >Menace Shirt Design</h4>
            <p class="over-line mkop2">Retail: $90.00</p>
            <p className='nmji1'>3 For $30 (B1G2)</p>
          </div>

          <div class="member-link text-center">
            <a href="#" className='mjij1'>NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div id="">
          <div class="content-with-image">
            <div class="image" style={{ border: "1px solid gray" }}>
              <img src={shirt} class="carousal-img img-fluid" />
            </div>

            <div class="desc text-center">
              <h2 >Menace Shirt Design</h2>
            </div>
          </div>

          <div class="member-text text-center">
            <h4 className='mpos1' >Menace Shirt Design</h4>
            <p class="over-line mkop2">Retail: $90.00</p>
            <p className='nmji1 ' >3 For $30 (B1G2)</p>
          </div>



          <div class="member-link text-center">
            <a href="#" className='mjij1'>NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></a>
          </div>
        </div>
      </Carousel>



      <div className='flex  justify-center	'   >

        <button className='iutrvh1'>Shop Now!</button>
      </div>
      <br />


      <div className=' ghdsaaaasa bg-black  text-white'>
        <h1 className='head1bg' >Your Choice Counts</h1>
        <h3 className='head3bg'>Choose what design you'd like to see us add an d get an extra special discount.</h3>
        <button className='iutrvh'>CONTINUE</button>
      </div>

      <br />
      <br />
      <br />



      {/* FiFth Part */}



      <div className='fifth'>
        <div className='flex flex-col' >
          <h1 className='bsafdjaus'>About Tatsu Threads</h1>
          <div className='nono'>
            <div className='mokli'>
              <img class="buy-now-img img-fluid" src={short} alt="" />
            </div>
            <div className='fokli'>
              <img className='filterqwe' src={mesurment} alt="" />
              <p className='headfill23 text-white'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. sed euismod libero nec arcu vehicula congue.
                pellentesque lacinia lobortis efficitur. mauris vel ipsum mi. mauris lacus tellus..
              </p>
            </div>
          </div>
          <div className='eflsonkkh'>
            <div className='mokli' id='Person'>
              <img class="buy-now-img img-fluid" src={person} alt="" />
            </div>
            {/* <div>
              <img style={{ "padding": "0px 10px 0px 10px" }} src={person} alt="" />
            </div> */}
            <div className='msahduasduasb' >
              <img src={tag} className="oikl" alt="" />
            </div>
          </div>
        </div>
      </div>



      {/* Sixth Part */}

      <div className='hjsgaisa33'>
        <h1 style={{ 'font-size': '77px' }} className='headfill'>Trending Now</h1>
        <div className='jkloun'>
          <p className='ParagrphColor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien, mattis
            at molestie id, auctor faucibus ligula.</p>
        </div>
      </div>




      {/* Seventh  */}



      <div className='cng'>

        <div className='zxczxczx notcallhonkdfs		flex-col  flex '>
          <div class="buy-now">
            <img src={girl} class="buy-now-img img-fluid" alt="" />
          </div>
          <h3 className='mt-6  text-xl  nhyjn'>Menace Shirt Design</h3>
          <h3 className=' my-2 mkop23'>Retail: $90.00</h3>
          <h3 className='my-2 nmji1'>3 For $30 (B1G2)</h3>
          <h3 className=' text-sm	  mjij12'  >NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></h3>
        </div>


        <div className='zxczxczx notcallhonkdfs  niyvfgbhgaa	mt-16	flex-col  flex	'>
          <div class="buy-now">
            <img src={boy} class="buy-now-img img-fluid" alt="" />
          </div>
          <h3 className='mt-6  text-xl  nhyjn' >Menace Shirt Design</h3>
          <h3 className=' my-2  mkop23'>Retail: $90.00</h3>
          <h3 className='my-2 nmji1'>3 For $30 (B1G2)</h3>
          <h3 className=' text-sm	  mjij12' >NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></h3>
        </div>


        <div className='zxczxczx notcallhonkdfs		flex-col  flex'>
          <div class="buy-now">
            <img src={thirdboy} class="buy-now-img img-fluid" alt="" />
          </div>
          <h3 className='mt-6  text-xl  nhyjn' >Menace Shirt Design</h3>
          <h3 className=' my-2 mkop23'>Retail: $90.00</h3>
          <h3 className='my-2 nmji1'>3 For $30 (B1G2)</h3>
          <h3 className=' text-sm	  mjij12' >NEW VIP MEMEBERSHIP OFFER <i class="fa fa-caret-right" aria-hidden="true"></i></h3>

        </div>
      </div>

      {/* Eight  */}



      <div className='nativeiop'  >
        <div style={{ "marginTop": "100px" }} class="row flex">
          <div class="col-xs-12 col-sm-6" >
            <h1 id='teck-colllection-text'>Once Again tatsuthreads defies
              the odds with the 2k22
              Collection</h1>
          </div>
          <div class="col-xs-12 col-sm-6">
            <p className='' id='teck-colllection-textParagraf'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. sed euismod libero nec
              arcu vehicula congue. pellentesque lacinia lobortis efficitur. mauris vel ipsum mi
              . mauris lacus tellus.lorem ipsum dolor sit amet, consectetur adipiscing elit. sed
              euismod libero nec arcu vehicula congue.
              <br />

              {/* <div className='flex  justify-center	'   > */}

              <button className='iutrvh1'>Discover US</button>


              {/* </div> */}
              <div class="teck-hr">
              </div>
            </p>


          </div>

          <div class="col-xs-12 col-sm-12">

          </div>
        </div>
        <div className='ComponentEdit'> </div>
      </div>









      {/* Nine  */}




      {/* Footer */}
      <section>
        <div id="our-collection"> <h1 className='njihggyuygvgy' >Our Collection</h1></div>
        <div class="flex flex-wrap justify-center">
          <div class="flex flex-col  asdasdsadsadasd  w-full m-6 overflow-hidden sm:w-52">
            <div class="tatsu-collection">
              <img src={homeTshirt} class="img-fluid" />
            </div>
            <div class="product-name">
              <h4 className='vhgnsaajdss'>Joggers</h4>
            </div>
          </div>
          <div class="flex flex-col  vfrtgbnhy w-full m-6 overflow-hidden sm:w-52">
            {/* <img src="images/database-icon.svg" alt="" class="h-20 m-6" />
          <h2 class="text-center px-2 pb-5">Database Support</h2>
          <a href="#" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Know More</a> */}
            <div class="tatsu-collection">
              <img src={homeHat} class="img-fluid" />
            </div>
            <div class="product-name">
              <h4 className='vhgnsaajdss'  >Hats</h4>
            </div>
          </div>
          <div class="flex flex-col w-full vfrtgbnhy m-6 overflow-hidden sm:w-52">
            <div class="tatsu-collection">
              <img src={homeHoodies} class="img-fluid" />
            </div>
            <div class="product-name">
              <h4>Hoodies</h4>
            </div>
          </div>
          <div class="flex flex-col  vfrtgbnhy  w-full m-6 overflow-hidden sm:w-52">
            <div class="tatsu-collection">
              <img src={homeTshirt} class="img-fluid" />
            </div>
            <div class="product-name">
              <h4 className='vhgnsaajdss'  >Joggers</h4>
            </div>
          </div>
          <div class="flex flex-col  vfrtgbnhy w-full m-6 overflow-hidden sm:w-52">
            <div class="tatsu-collection">
              <img src={homeShorts} class="img-fluid" />
            </div>
            <div class="product-name">
              <h4 className='vhgnsaajdss'  >Shorts</h4>
            </div>
          </div>
        </div>
      </section>






      <Footer />


    </div>
  )
}

export default Home