window.onload = function() {
    redirect_to_cube();
}

function redirect_to_cube() {
    console.log("the cube searches");
    if (document.cookie != "") {
        window.location.href="cube.html";
    }
}