let user = {
    id:1,
    name:"Sulaiman Bakare",
    email:"sulaiman.bakare@techbridge.city",
    phone:"09087736645",
    password:"sulaiman123",
    
}

let otps = [
    {
        otp: 123456,
        purpose: "email_verification",
        user_id: 2
    },
    {
        otp: 654321,
        purpose: "phone_verification",
        user_id: 3
    },
    {
        otp: 987654,
        purpose: "password_reset",
        user_id: 1
    }
    
]

    function findOTP(enteredOTP, purpose){
        return otps.find(function(otpInstance){
            return enteredOTP == otpInstance.otp && purpose == otpInstance.purpose && user.id == otpInstance.user_id
        });

        
    }
    function verify_otp(otp, purpose){
        switch (purpose) {
            case "email_verification":
                if(findOTP(otp, purpose)){
                    alert("OTP verified successfully");
                }else{
                    alert('incorrect otp for '+purpose)
                }
                
                break;
            
            case "phone_verification":
                if(findOTP(otp, purpose)){
                    alert("OTP verified successfully");
                }else{
                    alert('incorrect otp for '+purpose)
                }
                
                break;

            case "password_reset":
                if(findOTP(otp, purpose)){
                    alert("OTP verified successfully");
                }else{
                    alert('incorrect otp for '+purpose)
                }
                
                break;
        
            default:
                alert('Invalid Purpose');
                break;
        }
    }

    function enterOTP(){
        const otp = prompt("Enter your OTP Here");
        const purpose = prompt("Enter your purpose");
        return verify_otp(otp, purpose);
    }

    
    
    enterOTP();