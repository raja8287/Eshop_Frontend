import React, { useEffect, useState } from 'react'
import styyle from "./css/Nav.css"
import { IoHome } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdBorderColor } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";





import { Link, Route, Routes } from 'react-router-dom'
import HOME from './Home';
import Login from './login';
import Singin from './SingIn';
import Profile from './Profile';
import YourCart from './YourCart';
import Yourorder from './Yourorder';
import AddPro from './AddPro';
import Pro_detail from './Product_dis';
function Nav() {
    
    const [Data,setData]=useState('')
    useEffect(()=>{
        GetProfile();

    },[])

    const GetProfile=()=>{

        if(sessionStorage.getItem('udata')){

        fetch("https://eshop-1-f715.onrender.com/getUser",{
            method:'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify({u_Email:sessionStorage.getItem('udata')})
              
        
        }).then((result)=>result.json()).then((ata)=>setData(ata.img));   
    }
    else{

    }

    }
const Ham=()=>{
    var t=document.getElementById("Nav");
    var c=document.getElementById("h1m");
    if(t.style.display=="none"){
        t.style.display="inline-block";
        c.style.transform="rotateZ(180deg)";
    }
    else{
        t.style.display="none";
        c.style.transform="rotateZ(0deg)";
    }
}

  return (
    <>
    <div id='Nav'>

        <div>
        <span>.ECOM</span>


        </div>

<div title='HOME' className="button-29">
    <Link to='/' style={{color:"white"}}> <IoHome /></Link>

</div>
<div title='YourCart' className="button-29">
    <Link to='/YourCart' style={{color:"white"}}><FaCartShopping/></Link>
</div>
<div title='YourOrder'className="button-29">
    <Link to="/Yourorder" style={{color:"white"}}><MdBorderColor/></Link>
</div>

<div style={{display:"none"}}>
    Sing in
</div>

<div title='Search Product' className="button-29" ><input/><button><FaSearch/></button></div>
<div title='Your Profile' className="button-29">
    
<Link to='/Profile' style={{color:"white"}}> {sessionStorage.getItem('udata') ?<img src={Data} id='profileimg'/>: <CgProfile/>}</Link></div>

<div title='Login' className="button-85">
    <Link to='/Login'><IoIosLogIn/></Link>



    </div>
    </div>
<div id='ham' ><div><span>.ECOM</span></div>
<div><input/><button><FaSearch/></button></div>
<div onClick={()=>{Ham()}} id='h1m'><HiOutlineBars3CenterLeft/></div>

</div>
<Routes>
    <Route path='/' element={<HOME/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SingIn' element={<Singin/>}/>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path='/YourCart' element={<YourCart/>}/>
    <Route path='/Yourorder' element={<Yourorder/>}/>
    <Route path='/addpro' element={<AddPro/>}/>
    <Route path='/product_detail' element={<Pro_detail/>}/>


    





</Routes>

    </>
  )
}

export default Nav