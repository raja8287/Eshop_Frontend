import React, { useEffect, useState } from 'react'
import styyle from "./css/content1.css"
import { RiStarSmileLine } from "react-icons/ri";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";

import Pro_detail from './Product_dis';
import { Loading } from './loading';



function Content1(){
const [Data,setDat]=useState([]);
useEffect(()=>{
       gg();
},[])
async function gg(){
        fetch(`https://eshop-1-f715.onrender.com/getpro`,{
                method:'GET',
             }).then((result)=>result.json()).then((Data)=>setDat(Data));

}
async function Addtocart(data){
    if(sessionStorage.getItem('udata')){
        fetch("https://eshop-1-f715.onrender.com/AddToCart",{
            method:'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify({u_Email:sessionStorage.getItem('udata'),maindata:data})
              
        
        }).then(response => response.json()).then(newUserData => {
            // Process the newly created user data
           // alert(newUserData.msg);       
            document.getElementById('alertmsg').style.display="inline-block";
            document.getElementById('gh').innerHTML=newUserData.msg;
            setTimeout(function() {
                document.getElementById('alertmsg').style.display="none";
            
          
          
              }, 10000);
          })
          .catch(error => {
            console.error('Error:', error);
          })
    }
    else{
        alert("Login Please!");
    }
  

}
      


    return(<>
    <div id='alertmsg'><p id='gh'>item is coool</p><p>&#x2713;</p></div>
    {Data==""? <Loading/>:
    <div id='Content'>
        
    {Data.map((Pro,index)=>{
                return(<>
               
               <div id='con'>
        <div>
        <img src={Data[index].P_img} onClick={()=>{sessionStorage.setItem('Product',Data[index]._id);window.location.href='/product_detail'}}/>
       </div>

       <div>
        <h3>{Data[index].P_name}</h3>
       </div>
       <div><p>{Data[index].P_Dis}</p>
</div>
<div><p>{Data[index].U_price} &#8377;</p>
<span><RiStarSmileLine/><RiStarSmileLine/><RiStarSmileLine/><RiStarSmileLine/><RiStarSmileLine/></span>
<p>{Data[index].P_Rating+9}</p>
</div>
        <div><button onClick={()=>{Addtocart(Data[index])}}>Add to Cart</button></div>

        </div>           

                </>)
        })}
       
      

    </div>
}
    </>)
}
export default Content1;
/*
      <div id='con'>
        <div>
        <img src='https://i.pinimg.com/564x/ad/44/22/ad4422a51d0f4763d09f094f36329243.jpg'/>
       </div>

       <div>
        <h3> Galaxy S24 Ultra {pro[0].P_name}</h3>
       </div>
       <div><p>High Quality Galaxy S24 Ultra Violet PNGUltra Violet PNG .</p>
</div>
<div><p>12000 &#8377;</p>
<span><RiStarSmileLine/><RiStarSmileLine/><RiStarSmileLine/><RiStarSmileLine/><RiStarSmileLine/></span>

</div>
        <div><button>Add to Cart</button></div>

        </div>

     
        <p>Download FREE High Quality Galaxy S24 Ultra Violet PNG from the Freebiehive website. Best place for Free Vectors, PNG Images, Icons, Animations, Background Images</p>
        <b>12000 rs</b>
        </div>
        
       </div>

    <div>
        <button>Add To Cart</button>
    </div>*/