function login() {
    
    let user=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if (user=="dennis" && password=="123456") {
        window.location.href = "/view/home.html"; 
       
    }else{
        alert("Datos Incorrectos")
    }
}
