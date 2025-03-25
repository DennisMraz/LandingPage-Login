function login() {
    
    let user=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if (user=="dennis" && password=="123456") {
        const baseUrl = new URL(window.location.origin + "/LandingPage-Login/");
        const homeUrl = new URL("view/home.html", baseUrl);
        window.location.href = homeUrl.href;
       
    }else{
        alert("Datos Incorrectos")
    }
}
