import React from 'react'
import address from '../assets/images/address.svg'
import number from '../assets/images/number.svg'
import mail from '../assets/images/mail.svg'
import dd from '../assets/images/footer-logo.png'
import Iframe from 'react-iframe'
import './Contact.css'
import './Contact-us.css';
import './Contact2.css.css';
import './constactOffical.css';
import tatus from '../assets/images/tatsu.png'
import Header from './Header/Header';
import { Link } from 'react-router-dom'
import Footer from './Footer'


const Contactuss = () => {
  return (
    <div>
      <div className='bg-black  text-white'> Spend $50 for free shipping</div>
      <Header />

      <div className='mmmmiok' >
        <div style={{ backgroundImage: `url(${tatus})` }}>
          <div className='ml-5 p-5' style={{ textAlign: "left" }}>
            <h1 className='fgd font-extrabold	mkjbbfss ' style={{ fontSize: 100 }}>Contact Us</h1> <br />
            {/* <h1 className='fgd mkjbbfss'></h1><br /> */}
            <p className='ml-1 p-5' style={{ fontSize: 50, color: "white", lineHeight: 1 }}>Life shouldn't be so black & white. <br />
              The Brightest flame casts the darkest <br /> shadow.</p>
            <button className='iutrvh'>Shop Now!</button>
            <br />
            <br />
          </div>
        </div>
      </div>



      {/* Card */}

      <div className='contact-container'>
      {/* Card */}

      <div className="cards-contact">
        <div className="tatsu-contact">
          <div className="contact-icon   flex justify-center  my-7	ssqq   ">
            <img src={address} className="img-fluid" alt="" />
          </div>
          <div className="contact-matter">
            <h4 className='mb-7 headingcrad'>ADDRESS</h4>
            <p className='paragraph-style-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo molestiae ullam quaerat. Recusandae, esse!</p>
          </div>
        </div>


        <div className="tatsu-contact ">
          <div className="contact-icon flex  justify-center ssqq">
            <img src={mail} className="img-fluid" alt="" />
          </div>
          <div className="contact-matter">
            <h4 className='my-7 headingcrad'>E-MAIL</h4>
            <p className='paragraph-style-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo molestiae ullam quaerat. Recusandae, esse!</p>
          </div>
        </div>


        <div className="tatsu-contact">
          <div className="contact-icon flex  justify-center ssqq">
            <img src={number} className="img-fluid" alt="" />
          </div>
          <div className="contact-matter">
            <h4 className='my-7 headingcrad'>PHONE NUMBER</h4>
            <p className='paragraph-style-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo molestiae ullam quaerat. Recusandae, esse!</p>
          </div>
        </div>

      </div>

<div className='contact-form'>
<div className='map-contact'>


<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2954.2027269050786!2d-71.59821908423797!3d42.231481751203745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e40b402872e2cb%3A0xdc506f8f5d40df8c!2s!5e0!3m2!1sen!2s!4v1663141720598!5m2!1sen!2s"
 
  width='100%'
  height='100%'
  styles={{ "border-radius": "20px" }}
 />

</div>

<div className='contact-quries-form'>
<h1 className='heading'>
Have Any Queries ?
</h1>
<div className='form-contact-form'>
  <input className='input-form' placeholder='Your Name'/>
  <input className='input-form' placeholder='Email Address'/>
</div>
<div className='form-contact-form'>
  <input className='input-form'  placeholder='Phone Number'/>
  <input className='input-form'  placeholder='Subject'/>
</div>
<textarea className='input-area'  placeholder='Write Message' >

</textarea>

<button className='submit-btn mt-5'>SUBMIT</button>
</div>

</div>




     {/* <div className="container asjvdasyu">
        <div className="row   notyhnjii">
         
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 nmbvcxz  form-col">
            <h4 className='text-6xl   my-16  font-bold'>Have Any Queries?</h4>

            <div className="row  flex flex-col justify-center	items-center	">
              <div className="col">
                <input type="text" className="form-control    inputsetburs  " placeholder="Your Name" />
              </div>
              <div className="col">
                <input type="email" className="form-control  inputsetburs   " id="inputEmail4" placeholder="Email Address" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input type="tel" className="form-control  inputsetburs   " placeholder="Phone Number" />
              </div>
              <div className="col">
                <input type="email" className="form-control  inputsetburs " id="inputEmail4" placeholder="Subjects" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <textarea className="form-control edcrfv inputsetburs " id="exampleFormControlTextarea1" rows="6" placeholder="Write a Message"></textarea> <br />
                <button type="submit" className="submit-btn buttonsadasd  bg-black  text-white">SUBMIT</button>
              </div>

            </div>
          </div>

        </div>
      </div> */}

    
</div>


      <Footer />

    </div>
  )
}

export default Contactuss