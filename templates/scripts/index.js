const close_popup = document.getElementById("login-overlay-close");

var display_overlay = true;

close_popup.addEventListener("click", () => {
    console.log("close");
    login_popup_toggle();
}); 

function login_popup_toggle() {
    console.log("toggle: " + display_overlay);
    const overlay = document.getElementById('login-popup-overlay');
    
    if ((display_overlay = !display_overlay)) {
        overlay.style.display = "block";    
        console.log("show");
    } else {
        console.log("hide");
        overlay.style.display = "none";
    }

}