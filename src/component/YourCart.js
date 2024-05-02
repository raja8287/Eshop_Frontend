import React, { useEffect, useState } from 'react'
import style from "./css/YourCart.css"
import { FiTrash } from "react-icons/fi";



function YourCart(){
    const [Data,setData]=useState([]);
    useEffect(()=>{
        Cart_item()
    },[])

    async function Cart_item(){
        fetch(`https://eshop-1-f715.onrender.com/cart`,{
                method:'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({mail:sessionStorage.getItem('udata')})
             }).then((result)=>result.json()).then((Data)=>setData(Data));

             

}
async function delete_item(data){

 fetch(`https://eshop-1-f715.onrender.com/deleteProduct`,{
                method:'DELETE',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({Prodict_id:data})
             }).then(response => response.json()).then(newUserData => {
                // Process the newly created user data
                window.location.reload();
              })
              .catch(error => {
                console.error('Error:', error);
              })
}

async function Update_Quanitity(data,mode){
    
    fetch(`https://eshop-1-f715.onrender.com/increaseQuantitty`,{
                method:'PUT',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({Prodict_id:data,mode})
             }).then(response => response.json()).then(newUserData => {
                // Process the newly created user data
                window.location.reload();
              })
              .catch(error => {
                console.error('Error:', error);
              })

}

function Order(data){
    for(let i=0;i<data.length;i++){
        const date = new Date();
    
        fetch(`https://eshop-1-f715.onrender.com/PlaceOrder`,{
                method:'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({U_Id:data[i].U_id,U_Q:data[i].U_qantity,Order_date:date,Order_data:data[i]})
             }).then(response => response.json()).then(newUserData => {
                // Process the newly created user data
                console.log('New User Data:', newUserData.msg);
                if(newUserData.msg=="Done"){
                    Order_completed(data);
                }
                sessionStorage.setItem("udata",newUserData.userdata[1]);
              
              
              })
              .catch(error => {
                console.error('Error:', error);
              })   
    }

}
function Order_completed(data){
    for(let i=0;i<data.length;i++){

        fetch(`https://eshop-1-f715.onrender.com/deleteProduct`,{
            method:'DELETE',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
              },
              body:JSON.stringify({Prodict_id:data})
         }).then(response => response.json()).then(newUserData => {
            // Process the newly created user data
            window.location.reload();
          })
          .catch(error => {
            console.error('Error:', error);
          })
    }

}
const[to,setTO]=useState('');
function total_coutnt(){
    var t=0;
    for(let i=0;i<Data.length;i++){
        var x=Number(Data[i].pro_data.U_price)
        t=t+x; 
    }
    console.log(t);
    setTO(t);
    document.getElementById('os').style.display="inline-block";
    document.getElementById('gg').style.display="none";


}




    return(<>
    <div id='YourCart'>
        
    <h2>YourCart</h2>
    
    {sessionStorage.getItem("udata")==""? <h2>Login please</h2>:
    <>
    {Data==""? <h2>No Item in Cart</h2>:
    <div>
    {Data.map((item,index)=>{
        return(<>
    <div id='cart'>
            <img src={Data[index].pro_data.P_img}/>
             <div id='cart2'>
            <p>{Data[index].pro_data.P_name}</p>
            <p>{Data[index].pro_data.P_Dis}</p>
            <p>{Data[index].pro_data.P_colore}</p>
            <p>{Data[index].pro_data.U_price} &#8377;</p>
            

            </div>
            <div id='cart3'>
            <span onClick={()=>{Update_Quanitity(Data[index]._id,'dec')}}>-</span>
            <span>{Data[index].U_qantity}</span>
            <span onClick={()=>{Update_Quanitity(Data[index]._id,'inc')}}>+</span>
            <span onClick={()=>{delete_item(Data[index]._id)}}>&#128465;</span>

        </div>
        </div>        </>)
    })}


    
</div>}</>}
<hr></hr>

{Data==""? <h2></h2>:<button onClick={()=>{total_coutnt()}} id='gg'>Get Total Order Value</button>}

<div id='os'>
    <h2>order summry</h2>
    <div>
        <p>total sub</p>
        <p>{to}&#8377;</p>
    </div>
    <div>
        <p>discount</p>
        <p>-{to*0.1}&#8377;</p>
    </div>
    <div>
        <p>tax</p>
        <p>+{to*0.001}&#8377;</p>
    </div>
    <div>
        <p>total</p>
        <p>{to-to*0.1+to*0.001}&#8377;</p>
    </div>
    <button onClick={()=>{Order(Data)}}>proceed to checkout</button>
    <p id='pos'>Esstimate deleverd by</p><b id='bos'>30/06/24</b>
</div>

</div>
    
    </>)
}
export default YourCart;
/*
         <div id='cart'>
            <div id='cart1'>
    
            </div>

           
            <div id='cart3'>




</div>

        </div> 
*/