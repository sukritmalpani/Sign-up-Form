let password=document.getElementById('password');
let confirm_password=document.getElementById('confirm_password');
password.addEventListener("keyup",()=>{
 if(password.value!=confirm_password.value)
 {
    document.getElementById('message').textContent="Passwords Do not match!";
    console.log(password.value);
    console.log(confirm_password.value);
    document.getElementById('button').disabled=true;
    document.getElementById('button').style.backgroundColor="grey";
 }
 else
 {
    document.getElementById('message').textContent="";
    console.log(password.value);
    console.log(confirm_password.value);
    document.getElementById('button').disabled=false;
    document.getElementById('button').style.backgroundColor="#596D48";
 }
});
confirm_password.addEventListener("keyup",()=>{
    if(password.value!=confirm_password.value)
    {
       document.getElementById('message').textContent="Passwords Do not match!";
       console.log(password.value);
       console.log(confirm_password.value);
       document.getElementById('button').disabled=true;
       document.getElementById('button').style.backgroundColor="grey";
    }
    else
    {
       document.getElementById('message').textContent="";
       console.log(password.value);
       console.log(confirm_password.value);
       document.getElementById('button').disabled=false;
    document.getElementById('button').style.backgroundColor="#596D48";
    }
   });
   