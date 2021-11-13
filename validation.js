
function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
}

function validateForm(event) {
    
    var phone = document.getElementById('mobile_num').value;
    

    
    if (!validatePhoneNumber(phone) ) {
        document.getElementById('num_ver1').style.visibility="visible";
        document.getElementById('num_ver2').style.visibility="hidden";
        
    } else {
        document.getElementById('num_ver2').style.visibility="visible";
        document.getElementById('num_ver1').style.visibility="hidden";
        
    }
    
  
  
}
    

/*document.getElementById('mobile_num').addEventListener("update", validateForm()); */





const el = document.getElementById("mobile_num");
el.addEventListener("click", validateForm, false);

 

