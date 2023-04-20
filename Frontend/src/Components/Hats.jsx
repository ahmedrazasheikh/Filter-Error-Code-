import React from 'react'
import './AllProduct.css'
import Header from './Header/Header'
import './subcription.css'
import caroImage from '../assets/images/banner-img.png'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import Footer from './Footer'
import Pagination from '@mui/material/Pagination';
import BasicPagination from './Pagination'
import Stack from '@mui/material/Stack';
import tatus from '../assets/images/tatsu.png'
import Hat from '../assets/images/hats.png'

function Hats() {
    
  const [products, setProducts] = useState([]);
  const [loadProduct, setLoadProduct] = useState(false)
  const [page, setPage] = useState(1)
  const [numberOfPages, setnumberOfPages] = useState(9)
  const [StarsArray, setStarsArray] = useState([1, 2, 3])
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/paginatpost?page=${page}`);
      console.log("response: ", response);
      console.log(response.data);
      setnumberOfPages(response.data.pages)
      setLoadProduct(!loadProduct)
      setProducts(response.data.data);
    } catch (error) {
      console.log("Error In Getting All Products ", error);
    }
  };

  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
  }, [page])
  return (
    <div>
    <div className='bg-black  text-white'> Spend $50 for free shipping</div>
    <Header />

    <div className='mmmmiok' >
      <div style={{ backgroundImage: `url(${tatus})` }}>
        <div className='ml-5 p-5' style={{ textAlign: "left" }}>
          <h1 className='fgd font-extrabold	mkjbbfss ' style={{ fontSize: 100 }}>Joggers</h1> 
          {/* <h1 className='fgd mkjbbfss'></h1><br /> */}
          <p className='ml-1 p-5' style={{ fontSize: 50, color: "white", lineHeight: 1 }}>Life shouldn't be so black & white.<br />
            The Brightest flame casts the darkest <br /> shadow.</p>
          <button className='iutrvh'>Shop Now!</button>
          <br />
        
        </div>
      </div>
    </div>


    <div  className='asfddsfdsfdsmkj'>
   
   <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
     <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div> 
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div> 
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div>  
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div> 
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div> 
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div> 
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div>  
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div>  
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div>  
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div> 
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div> 
 <div className='CardHover' >
       <img src={Hat} class="carousal-img img-fluid" style={{  width : "60%" , height : "50%" }} />
   <div class="member-text">
     <h4 className='name' >  Menace Hat Design</h4>
    <p class="price-2">$90.00</p>
     
   </div>

   <div class="member-link">
     <button href="#" className='iutrvh1 '  >Shop now</button>
   </div>
 </div> 







{/* <BasicPagination/> */}
</div>







    <BasicPagination shape="rounded" setPage={setPage} pageNumber={numberOfPages} />
    <Footer/>

  </div>
  )
}

export default Hats