import React, { useEffect, useState } from 'react'
import style from "./css/Yourorder.css"


function Yourorder(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        Orders();
    },[])
    function Orders(){
        if(sessionStorage.getItem('udata')){
            fetch(`https://eshop-1-f715.onrender.com/Orders`,{
                method:'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({u_Email:sessionStorage.getItem('udata')})
             }).then((result)=>result.json()).then((Data)=>setdata(Data));
        }
        else{

        }

     
    }
    return(<>
    <div id='Yourorder'>
           
<h2>Yourorder</h2>
<h3>All Order</h3>
<div id='y1'>
    <p>Item Img</p>
    <p>order Id</p>
    <p>Name</p>
    <p>Quentity</p>
    <p>Price</p>
    <p>Order Date</p>
    <p>Esstimate Delevery Date</p>
   
</div>
<hr></hr>
{sessionStorage.getItem('udata')=="" ? <h2>login please</h2>:
<>
    {data==""? <h2>No Data Avalable</h2>:
    <>
{data.map((item,index)=>{
    return(<>
    <div id='YO'>

<div id='yo1'>
    <div>
<img src={data[index].Order_data.pro_data.P_img}/>
    </div>
        <div>
    <p>{data[index]._id}</p>
    <p>{data[index].Order_data.pro_data.P_name}</p>
    <p>{data[0].Order_data.U_qantity}</p>
    <p>{data[index].Order_data.pro_data.U_price} &#8377; x{data[0].Order_data.U_qantity}</p>
    <p>{data[0].Order_orderDate[0]}</p>
    <p>{data[0].Order_orderDate[1]}</p>


</div>
</div>

<div id='yo2'>
    <p>Placed </p>
    <p>Packed</p>
    <p>Shipped </p>
    <p>Deleverd</p>

</div>

    </div>
    </>)
})}</>}</>

    }    </div>
    
    </>)
}
export default Yourorder;