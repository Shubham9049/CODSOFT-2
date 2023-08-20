const token = localStorage.getItem("token") || null
// const storedname=localStorage.getItem("userName") || null
// const loginBtn=document.getElementById("login")

// if(storedname){
//     loginBtn.textContent=` ${storedname} / Logout`
// }else {
//     // loginBtn.innerHTML == ''
//     loginBtn.textContent == 'Login/Signup'
// }

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
       alert("You are not Logged In. Please Log In...")
       setTimeout(() => {
         redirected()
     }, 1000);
      }else{
       // nextcode
       alert("Next")
      }
    })
});

function redirected() {
   location.replace("/FrontEnd/log-in/signup.html")
 }
