const BaseUrl="http://localhost:4000"
const token = localStorage.getItem("token") || null
const storedname=localStorage.getItem("userName") || null
const loginBtn=document.getElementById("login")
// const logout=document.getElementById("logout")
const content=document.querySelectorAll(".content")

if(storedname){
    loginBtn.innerHTML=`<i class="fa-solid fa-user"></i>  ${storedname.split(' ')[0]}/Log-out`
}else {
    // loginBtn.innerHTML == ''
    loginBtn.textContent == 'Login/Signup'
}

loginBtn.addEventListener("click",()=>{
   localStorage.clear()
   window.location="index.html";
})

function clickimg(smallImg){
   let fullimg= document.getElementById("imagebox") 
   fullimg.src=smallImg.src
}
function clickimg2(smallImg){
   let fullimg= document.getElementById("imagebox2") 
   fullimg.src=smallImg.src
}
function clickimg3(smallImg){
   let fullimg= document.getElementById("imagebox3") 
   fullimg.src=smallImg.src
}

const bookBtnArr = document.querySelectorAll(".bookBtn")

bookBtnArr.forEach(bookBtn => {
   bookBtn.addEventListener("click" , () => {
      if(!token){
       return alert("You are not Logged In. Please Log In...")
      }else{
       // nextcode
       alert("Next")
      }
    })
});

// content.addEventListener("submit",(e)=>{
//    e.preventDefault();
//    let obj={
//       name: document.querySelectorAll(".name").value,
//       adults:document.querySelectorAll(".Adults").value,
//       childrens:document.querySelectorAll(".childrens").value,
//       checkIn:document.querySelectorAll(".check-in").value,
//       checkOut:document.querySelectorAll(".check-out").value

//    }
//    fetch(`${BaseUrl}/booking/add`,{
//       method:"POST",
//       headers:{
//          "Content-Type":"application/json",
//       }
//       ,body : JSON.stringify(obj),
//    })
//    .then(res=>res.json())
//    .then((res)=>{
//       Swal.fire('Booking Successfully')
//    })
// })