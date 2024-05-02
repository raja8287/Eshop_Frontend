import React, { useEffect, useState } from 'react'
import { RiStarSmileLine } from "react-icons/ri";
import style from "./css/Product_di.css"


function Pro_detail(){
    const [data,setDat]=useState([])

    useEffect(()=>{
        gg()
    },[])
    async function gg(){
        fetch(`https://eshop-1-f715.onrender.com/getpro/pro`,{
                method:'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                  },
                body:JSON.stringify({produc:sessionStorage.getItem('Product')})

             }).then((result)=>result.json()).then((Data)=>setDat(Data));

}

    return(<>
        {data==""? <h2>Data is Loading....</h2>:

    <div id='Pro_detail'>

<div id='pro1'>
        <img src={data.P_img}/>
    
    
</div>
<div id='pro2'>
        <p>{data.P_name}</p>
        <p>{data.P_Dis}</p>
        <p>{data.P_Rating+2}+</p>
        <p><RiStarSmileLine/><RiStarSmileLine/><RiStarSmileLine/><RiStarSmileLine/></p>
        <h3>{data.U_price} &#8377;</h3>
        <button id='protbtn1'>BUY</button>
        <button id='protbtn2'>Add To Cart</button>
</div>

    </div>
}
    </>)
}
export default Pro_detail;