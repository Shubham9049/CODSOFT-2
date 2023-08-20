const BaseUrl="https://safarbooking.onrender.com"
const localname=localStorage.getItem("userName") || null
const form=document.getElementById("booknow")


form.addEventListener("submit",(e)=>{
   e.preventDefault()
   let obj={
      name:document.getElementById("Suite").value,
      adults:document.getElementById("adults").value,
      childrens:document.getElementById("childrens").value,
      checkinDate:document.getElementById("check-in").value,
      checkoutdate:document.getElementById("check-out").value
   }
   console.log(obj)
   fetch(`${BaseUrl}/booking/add`,{
      method:"POST",
      headers:{
         "Content-Type":"application/json"
      }
      ,body :JSON.stringify(obj)
   })
   .then(res=>res.json())
   .then((res)=>{
     if(res){
      Swal.fire(res.message)
      setTimeout(() => {
         redirect()
      }, 2000);
     }else{
      alert(res.message)
     }
   })
})

function redirect() {
   // localStorage.clear()
   location.replace("/FrontEnd/AfterLogin/LoginedRoom.html")
 }
 