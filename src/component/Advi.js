import React, { useState } from 'react'
import styyle from "./css/Advi.css"

function Advi() {
  const [imgs,setImg]=useState('https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/DM3-web-1.jpg')
  const [color,setC]=useState("ALL NEW COLORS")
  function SETCSS(){
    
    document.getElementById("imgss").style.height="100%";
    document.getElementById("imgss").style.width="30%";

    
    document.getElementById("B").style.fontWeight="bold"
    document.getElementById("B").style.fontFamily="monospace";
   

  }
  return (
    <div className='adv'>
    <div id='advimg'>
    <img src={imgs} id='imgss'/>    
    <div id='A'>
      <p id='B'>{color}</p>
    <span id="F" onClick={()=>{setImg("https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/product_color_phantom_black.png?imwidth=480");SETCSS();setC("PHANTOM BLACK")}}></span>
    <span id='T' onClick={()=>{setImg("https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/product_color_lime.png?imwidth=480");SETCSS();setC("LIME")}}></span>
    <span id='TH' onClick={()=>{setImg('https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/product_color_red.png?imwidth=480');SETCSS();setC("RED")}}></span>
    <span id='FO' onClick={()=>{setImg('https://images.samsung.com/in/smartphones/galaxy-s23-ultra/buy/product_color_graphite.png?imwidth=480');SETCSS();setC("GRAPHITE")}}></span>
    <br></br>
    <button id='adbtno'>1,24,000 &#x20B9;</button>
    </div>
  

    </div>   

    <div id='advdetail'>
        <h3>
            All new
        </h3>
        <h2>SAMSUNG GALAXY S23 ULTAR</h2>
    <b>4300.23 &#x20B9;/month</b>
    <br></br>
    <button id='adbtnt'>GET NOW</button>

        </div> 
    </div>
  )
}

export default Advi