let inputs = document.querySelectorAll(".block div");
inputs.forEach((input) => {
    input.querySelector("input").addEventListener("focusin", ()=>{
        input.removeAttribute("data-error");
    });
    input.querySelector("input").addEventListener("focusout", ()=>{
        checker(input);
    });
});

document.querySelector("button").addEventListener("onclick", ()=>{
    inputs.forEach((input) =>{
        checker(input);
    });
});

function checker(input){
    let box = input.querySelector("input");
    if(box.value == "" && box.hasAttribute("required")) {
        input.setAttribute("data-error", "This field is required");
    }else if(box.value != ""){
        if(box.getAttribute("type") == "password"){
            if(document.querySelector("#pass1").value != document.querySelector("#pass2").value){
                document.querySelector(".password1").setAttribute("data-error", "Password fields must match")
                document.querySelector(".password2").setAttribute("data-error", "Password fields must match")
            }else{
                document.querySelector(".password1").removeAttribute("data-error");
                document.querySelector(".password2").removeAttribute("data-error");
            }
        }
    }
}