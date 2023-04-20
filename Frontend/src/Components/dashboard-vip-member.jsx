import React, { useState } from 'react'
import './dashboard-vip-member.css';
import logo from '../assets/images/admin.png'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

const DashbordOrderAdmin = () => {



  let baseUrl = "https://jade-lonely-marlin.cyclic.app/api/v1"

  const [name, setName] = useState("Ahmed")
  const [tabs, setTabs] = useState(0)

  const logoutHandler = async () => {

    try {
      let response = await axios.post(`${baseUrl}/logout`,
        {},
        {
          withCredentials: true
        })
      console.log("response: ", response);


    } catch (error) {
      console.log("axios error: ", error);
    }

  }



  useEffect(() => {

    const getProfile = async () => {
      try {
        let response = await axios.get(
          `${baseUrl}/profile`,
          {
            withCredentials: true,
            headers: {
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Expires': '0',
            }
          });

        console.log("response: ", response.data.firstName);
        setName(response.data.firstName)

      } catch (error) {

        console.log("axios error: ", error);


      }



    }
    getProfile();

  }, [])


  // const activeStyle = { color: '#ff3333' };
  const activeStyle = { background: 'black', color: "white", padding: 20, textAlign: "left" };
  const nonActiveStyle = { background: 'white', color: "black", padding: 20, textAlign: "left" };

  return (
    <>

      <div className="main flex flex-col ">



        {/* Secod Part  */}

        <div className="secondpart ml-60  flex  w-90  ">

          {/* <h3>From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</h3> */}
          <div className="navbar " style={{ border: "none" }}>
            <div className="head flex flex-col notOfTGBNHY 	">
              <div className='flex  kjhiasuxva '>
                <img src={logo} alt="" />
                <div className=" flex flex-col">
                  <h3 className='text-2xl'>{name}</h3>
                  <h5 className='ali text-blue-600 ' >ADMIN</h5>
                </div>
              </div>
            </div>

            <ul className='list-none flex flex-col text-xl' style={{ border: "1px solid black", textAlign: "start" }}>
              {/* <Link to={'/DashbordOrderAdmin'}> */}
              <li className='smallNav py-6 px-20 bg-black text-white' style={tabs === 0 ? activeStyle : nonActiveStyle} onClick={() => setTabs(0)}><a href="#" >DASHBOARD</a></li>
              {/* </Link> */}
              {/* <Link to={'/MyreviewAdmin'}> */}
              <li className='smallNav py-6 text-black ' style={tabs === 1 ? activeStyle : nonActiveStyle} onClick={() => setTabs(1)}><a href="#" className='m-4'>MY REVIEW</a></li>
              {/* </Link> */}
              <li className='smallNav py-6 text-black'style={tabs === 2 ? activeStyle : nonActiveStyle} onClick={() => setTabs(2)}><a href="#" className='m-4'>PAYMENT</a></li>
              {/* <Link to={'/MembershipVip'}><li className='py-6 text-black' style={{ border: "1px solid black" }} onClick={() => setTabs(2)}><a href="#" className='m-4'>PAYMENT</a></li></Link> */}
              <Link to={'/'}><li className='py-6 text-black' onClick={() => { logoutHandler() }} style={{ border: "1px solid black" }}><a href="#" className='m-4'>LOGOUT</a></li></Link>

            </ul>
          </div>
          {tabs === 0 ?
            <>
              <div className="inner  flex flex-col pl-6">
                <span className='sssf' style={{ textAlign: "left", fontSize: 80 }}>Hello! {name}</span>
                <div className='sssss' style={{ textAlign: "left" }}>
                  <p className='oolol' >From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                </div>
              </div>
            </> : (tabs === 1) ?
              <>
                <div className="inner  flex flex-col pl-6">
                  <span className='sssf' style={{ textAlign: "left", fontSize: 60 }}>My Reviews</span>
                  <div className='sssss' id="reviewline" style={{ textAlign: "left", fontSize: 50 }}>
                    <p className='oolol' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien, mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat, at ullamcorper neque feugiat id.</p>
                    <p style={{ fontSize: 20 }}>1 month ago</p>
                  </div>
                  <span className='sssf' style={{ textAlign: "left", fontSize: 60 }}>LC Photo Studio</span>
                  <div className='sssss' id="reviewline" style={{ textAlign: "left" }}>
                    <p className='oolol' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien, mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat, at ullamcorper neque feugiat id.</p>
                  </div>
                  <span className='sssf' style={{ textAlign: "left", fontSize: 60 }}>LC Photo Studio</span>
                  <div className='sssss' id="reviewline" style={{ textAlign: "left" }}>
                    <p className='oolol' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien, mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat, at ullamcorper neque feugiat id.</p>
                  </div>
                  <span className='sssf' style={{ textAlign: "left", fontSize: 60 }}> LC Photo Studio</span>
                  <div className='sssss' id="reviewline" style={{ textAlign: "left" }}>
                    <p className='oolol' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tempus augue, id convallis est. Nulla neque sapien, mattis at molestie id, auctor faucibus ligula. Pellentesque laoreet luctus erat, at ullamcorper neque feugiat id.</p>
                  </div>
                </div>
              </> : (tabs === 2) ?
                <>
                  <div className="inner flex flex-col pl-6">
                    <span className='sssf' style={{ textAlign: "left", fontSize: 80 }}>PAYMENT HISTORY</span>
                    <table>
                      <tr>
                        <th>Payment Transaction ID</th>
                        <th>Receipt Date</th>
                        <th>Amount Paid</th>
                        <th>Currency</th>
                        <th>Status</th>
                        <th>Customer Name</th>
                      </tr>
                      <tr>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>Markin Ali</td>
                      </tr>
                      <tr>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>Markin Ali</td>
                      </tr>
                      <tr>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>Markin Ali</td>
                      </tr>
                      <tr>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>Markin Ali</td>
                      </tr>
                      <tr>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>Markin Ali</td>
                      </tr>
                      <tr>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>451526</td>
                        <td>Markin Ali</td>
                      </tr>
                    </table>
                    <div className='sssss' style={{ textAlign: "left" }}>

                    </div>
                  </div>
                </> :
                <>
                </>
          }


        </div>
      </div>
    </>
  )
}

export default DashbordOrderAdmin