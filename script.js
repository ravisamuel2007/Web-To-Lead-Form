let capchaChecked = false;
function beforesubmit(event){
    if(capchaChecked){
        let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
    }else{
        alert("Plese check the Capcha box to submit form");
        event.preventDefault();
    }
}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     } 
    } 
    setInterval(timestamp, 500); 

    capchasuccess(){
        capchaChecked=true;
    }  