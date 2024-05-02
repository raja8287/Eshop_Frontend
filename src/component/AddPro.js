import React, { useState } from 'react'
import style from "./css/AddPro.css"

function AddPro() {
    const [D,setDD]=useState("")

    const impData=()=> {

        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
        // you can use this method to get file and perform respective operations
        let files =   Array.from(input.files);
        //console.log("12334"+input.files);
        var reader=new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=()=>{
        //  console.log("0985"+reader.result);
        setDD(reader.result)
                    
        };
        reader.onerror=error=>{
        console.log("ERROE :",error)
          };
        };
        input.click();
      }

     const create_pro=()=>{
        var name=document.getElementById("Name").value;
        var Dis=document.getElementById("dis").value;
        var price=document.getElementById("price").value;
        var colore=document.getElementById("colore").value;

        if(name&&Dis&&price&&colore&&D){
            fetch("https://eshop-1-f715.onrender.com/CreatePro",{
                method:'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                  },
                  body:JSON.stringify({P_img:D,P_Name:name,P_price:price,P_colore:colore,P_dis:Dis})
                  
            
            }).then(response => response.json()).then(newUserData => {
              // Process the newly created user data
              console.log('New User Data:', newUserData.msg);
              alert(newUserData.msg);
              if(newUserData.msg=="Profile Created"){
                window.location.href='/login';
            
              }
            })
            .catch(error => {
              console.error('Error:', error);
            })
        }
        else{
            alert("Input Filed Cant Be Empty");
        }
     }


  return (
    <div id='AddPro'>
    <div>
    <h2>AddPro</h2>
        {D==""?<button id='singbtn' onClick={()=>{impData()}}>+</button>  :<img src={D}/>}
            <br></br>
            <input placeholder='Product Name' id='Name'/>
            <br></br>
            <input placeholder='Product discreption' id='dis'/>
            <br></br>
            <input placeholder="Price" id='price'/>
            <br></br>
            <input placeholder="Colore" id='colore'/>
            <br></br>
            <button className='button-8' onClick={()=>{create_pro()}}>Create</button>
            

</div>
    </div>
  )
}

export default AddPro
/**
 *       



            
 * 
 */