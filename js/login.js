function login() {
    
    let user=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if (user=="dennis" && password=="123456") {
          console.log("Credenciales correctas");

        const baseUrl = new URL(window.location.origin + "/LandingPage-Login/");
        const homeUrl = new URL("view/home.html", baseUrl);

        console.log("URL de redirección:", homeUrl.href);

        window.location.href = homeUrl.href;
       
    }else{
        alert("Datos Incorrectos")
    }
}
