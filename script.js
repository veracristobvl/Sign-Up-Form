const validateForm = () => {
    let nombre = document.forms["myForm"]["fname"].value
    let nombreInput = document.getElementById("add")
    if (nombre==""){
        nombreInput.innerHTML +=`<h3>
        This is the text which has
        been inserted by JS
    </h3>`
    } 
    else{
        nombreInput.innerHTML -=`<h3>
        This is the text which has
        been inserted by JS
    </h3>`
    }
}