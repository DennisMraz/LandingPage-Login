function login() {
    
    let user=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if (user=="dennis" && password=="123456") {
          console.log("Credenciales correctas");

        

       window.location.href = "/LandingPage-Login/view/home.html";
       
    }else{
        alert("Datos Incorrectos")
    }
}
