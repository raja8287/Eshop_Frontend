import React from 'react'
import style from "./css/footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";





function Footer(){
    return(<>
    <div id='Footer'>
        
        <div id='footer1'>
        <div id='foo1'>
        <span>.ECOM</span>
        <br></br>
        <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, </p>
        </div>

        <div id='foo2'>
            <p>Fill This Form if Any Qurry? </p>
            <br></br>
            <input placeholder='Your Name'/>
            <br></br>
            <input placeholder='Your Contect Number'/>
            <br></br>
            <input placeholder="Your Qurry"/>
            <br></br>
            <button className='button-8'>Submit</button>
        </div>

        <div id='foo3'>
           <div><FaFacebook/> <FaInstagram/> <IoLogoGithub/> <FaLinkedin/></div> 
            <div><p><FaPhone/>:+91 8700826036</p><p><AiOutlineMail/>:rdas828726@gamil.com</p></div>

        </div>

        
        
        </div>
        <hr></hr>

        <div id='footer2'>
            @2024 .ECOM Enterprices,Gurugram,Haryana India, All Rights Reseverd
            <br>
            </br>
            TERMS AND CONDITION 
        </div>
        
        
    </div>
    
    </>)
}
export default Footer;