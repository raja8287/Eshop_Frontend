import React from 'react'
import style from "./css/login.css"


function Login(){
    const Log=()=>{
        var name=document.getElementById("Name").value;
        var Email=document.getElementById("Email").value;
        var password=document.getElementById("pass").value;
        var conf_pass=document.getElementById("cpass").value;
        if(name&&password&&conf_pass&&Email){
          if(password!==conf_pass){
            alert("not matching")
          }
          else{
         
  fetch("https://eshop-1-f715.onrender.com/uservalidation",{
    method:'POST',
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({u_Name:name,u_Pass:password,u_Email:Email})
      

}).then(response => response.json()).then(newUserData => {
  // Process the newly created user data
  console.log('New User Data:', newUserData.msg);
  alert(newUserData.msg);
  if(newUserData.userdata[1]){
    window.location.href='/profile';
  }
  sessionStorage.setItem("udata",newUserData.userdata[1]);


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
    <div id='login'>
<div>
<h2>Login here!</h2>

            <br></br>
            <input placeholder='Name Id' id='Name'/>
            <br></br>
            <input placeholder='Email' id='Email'/>
            <br></br>
            <input placeholder='Password' id='pass'/>
            <br></br>
            <input placeholder="Conform Password" id='cpass' type="password"/>
            <br></br>
            <button className='button-8' onClick={()=>{Log()}}>LOGIN</button>
            <br></br>
            <p>Don't Have Any Account?</p>
            
            <b onClick={()=>{window.location.href="/singin"}}>SING UP!</b>

</div>
    </div>
    
    </>)
}
export default Login;