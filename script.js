//your JS code here. If re
const otp = document.querySelectorAll(".code");

otp[0].focus();

otp.forEach((code, idx) => {
    otp.addEventListener("keydown", (e) => {
        console.log(e.key);
        const keyPressed = e.key;

        if(keyPressed >=0 && keyPressed <= 9){
            otp[idx].value = "";
            if(idx < otp.length-1){
                setTimeout(() => otp[idx+1].focus(), 10);
            }
        }else if(keyPressed === "BackSpace"){
            if(idx > 0){
                setTimeout(() => otp[idx-1].focus(), 10);
            }
        }
    });
});