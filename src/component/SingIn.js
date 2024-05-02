import React, { useState } from 'react'
import style from "./css/Singin.css"


function Singin(){
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



      const CreatProfile=()=>{
        var name=document.getElementById("Name").value;
        var Email=document.getElementById("Email").value;
        var Contact=document.getElementById("con_num").value;
        var password=document.getElementById("pass").value;
        var conf_pass=document.getElementById("cpass").value;
        if(name&&Email&&Contact&&password&&conf_pass&&D){
          if(password!==conf_pass){
            alert("not matching")
          }
          else{
         
  fetch("https://eshop-1-f715.onrender.com/userDb",{
    method:'POST',
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({u_img:D,u_Name:name,u_email:Email,u_Pass:password,
        u_con:Contact})
      

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

        } 
        else{
          alert("File The Input ")
        }

      }

    return(<>
    <div id='Singin'>

    <div>
<h2>SingUp Here!</h2>
        {D==""?         <button onClick={()=>{impData()}} id='singbtn'>+</button>  :<img src={D}/>}
            <br></br>
            <input placeholder='Name' id='Name'/>
            <br></br>
            <input placeholder='Email' id='Email'/>
            <br></br>
            <input placeholder="Contact Number" id='con_num'/>
            <br></br>
            
            <input placeholder='Password' id='pass'/>
            <br></br>
            <input placeholder="Conform Password" type="password" id='cpass'/>
            <br></br>
            <button className='button-8' onClick={()=>{CreatProfile()}}>Create</button>
            <br></br>
            <p>Already Have Account?</p>
            
            <b onClick={()=>{window.location.href="/login"}}>LOGIN!</b>

</div>    </div>
    
    </>)
}
export default Singin;