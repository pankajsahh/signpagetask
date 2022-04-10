function validate(){
  const name =   document.getElementById("Username").value;
   const  password =  document.getElementById("password").value;
   if(name.length<8){
       console.log("less oooooo")
       document.getElementById("username_error").innerText="username should have atleast 8 char";
       setTimeout(()=>{document.getElementById("username_error").innerText = ""},1600)
   }
   if(password.length<5){
    document.getElementById("password_error").innerText = "password too short"

    setTimeout(()=>{document.getElementById("password_error").innerText = ""},1600)
   }
}