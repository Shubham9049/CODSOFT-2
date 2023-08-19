// const BaseUrl="http://localhost:4000"
const LogInForm=document.getElementById("Log-in")




LogInForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj={
        email :  document.getElementById('useremail').value,
        password:document.getElementById('userpass').value
    }
    console.log(obj)
    fetch(`${BaseUrl}/user/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
        ,body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then((res)=>{
        console.log(res)
        console.log(res)
        localStorage.setItem("userName",res.user.userName)
        localStorage.setItem("token",res.token)
       if(res.status){
        if(res.user.role==="admin"){
            // alert('Login Successfully')
            Swal.fire('welcome admin')
            location.replace("http://127.0.0.1:5500/FrontEnd/admin/admin.html")
        }else{
            Swal.fire('Login Successfully')
            setTimeout(() => {
                redirect()
            }, 1500);
        }
       }else{
        alert(`Invalid Credentials`)
    }



    })
    .catch(err => Swal.fire(`Invalid Credentials`))
})


function redirect() {
    location.replace("http://127.0.0.1:5500/FrontEnd/AfterLogin/LoginedRoom.html")
  }