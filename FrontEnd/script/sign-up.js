const BaseUrl="https://safarbooking.onrender.com"
let slider_button=document.querySelector(".slider_button")
let Sign_button=document.querySelector(".Sign-up_button")
let log_button=document.querySelector(".log-in_button")
let form_slider=document.querySelector(".form_slider")
let form=document.getElementById("sign-up")

log_button.onclick= function(){
    slider_button.style.left= "50%";
 log_button.style.color= "#fff"
 Sign_button.style.color= "#000"
 form_slider.style.left="-100%"
}
Sign_button.onclick= function(){
    slider_button.style.left= "0%";
    Sign_button.style.color= "#fff"
 log_button.style.color= "#000"
 form_slider.style.left="0%"
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj={
        name: document.getElementById('name').value,
        email :  document.getElementById('email').value,
        password:document.getElementById('pass').value,
        phone:document.getElementById('phone').value
    }
    fetch(`${BaseUrl}/user/signup`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        }
        ,body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res.message)
        alert("signup successfully")
    })
})
