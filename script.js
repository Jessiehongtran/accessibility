function sayHi(){
    const hi = document.getElementById("hi")
    console.log(hi)
    if (hi.style.display == "none"){
        hi.style.display = "block"
    } else {
        hi.style.display = "none"
    }
}

function returnHi(e){
        // Toggle the menu when RETURN is pressed
        if(e.keyCode && e.keyCode == 13) {
            sayHi();
        }
}