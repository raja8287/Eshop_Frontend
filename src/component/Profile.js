import React, { useEffect, useState } from 'react'
import style from "./css/profile.css"
import Login from './login';


function Profile(){
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
              
        
        }).then((result)=>result.json()).then((ata)=>setData(ata));   
    }
    else{

    }
      

    
}
    return(<>

    <div id='Profile'>
    {sessionStorage.getItem('udata')? 

<div>
<h2>Your Account</h2>
<div id='proimg'>
<img src={Data.img} />
<p>{Data.name}</p>
<button onClick={()=>{sessionStorage.removeItem('udata');window.location.reload()}}>LogOut!</button>

</div> 

<div id='proad'>
    <div  onClick={()=>{window.location.href="/YourOrder"}}>
        <p>Your Order</p>
    </div>
    
    
    <div>
        <p>Contect Details</p>
        <p>+91 {Data.contact}</p>
        <p>{Data.Email}</p>
    </div>



<div onClick={()=>{window.location.href="/YourCart"}}>
        <p>Your Cart</p>
    </div>

    <div>
        <p>Address</p>
        <p>house no-44 ,Gali no-1 Neb Sarai-110068 ,New Delhi ,India </p>

    </div>
    
    </div> 

</div>
:<Login/>}
    </div>
    
    </>)
}
export default Profile;