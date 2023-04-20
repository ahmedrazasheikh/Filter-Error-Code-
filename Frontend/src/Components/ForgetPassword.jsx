import axios from "axios"
import React from 'react'
import { useState } from "react"
import './LoginPage2.css'
import image from '../assets/images/account-img.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
	const [ErrorTakeOF, setErrorTakeOF] = useState(false)
	const navigate = useNavigate();
	const[email,setEmail] = useState()
	let  baseUrl = "http://localhost:8000/api/v1"
	
	const logindata =  async ()=>{
		try {

			let response = await axios.post(`${baseUrl}/forgot-password`, {
				email: email,
			})

			console.log(response)
		} catch (error) {
		 console.log(error)
		}

	}


  return (
    <div>

<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src={image} alt="IMG"/>
				</div>

				<div class="login100-form validate-form">
<span  className='askjcbasiucaaa'>Forgot Password </span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et tristique metus, ut auctor nunc. Curabitur tristique nunc vel metus vestibulum luctus. Vestibulum interdum malesuada me</p>
			
				
					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">

						<input class="input100"      onChange={(e) => {
              setEmail(e.target.value)
            }}  type="text" name="email" placeholder="Enter  Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

				
				
					
					<div class="container-login100-form-btn">
						<button   onClick={ ()=>{
						logindata()
						}} class="login100-form-btn">
							Forget 
						</button>
						
					</div>

				
					<Link to={'/Signup'}>
					
					</Link>
					{ ErrorTakeOF &&
  <h3     className={'text-red-600  font-extrabold'}  > { ErrorTakeOF } </h3> }
				</div>
			</div>
		</div>
	</div>





    </div>
  )
}

export default ForgetPassword