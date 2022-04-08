export const validationInfo = ({password, newPassword, repassword})=>{
    const errors = {}

    if(!password){
        errors.password = 'Password is required'
    }
    if(!newPassword){
        errors.newPassword = 'New password is required'
    }else if(newPassword.length <6 ){
        errors.newPassword = 'Password need to be 6 charaters or more'
    }
    if(repassword !== newPassword){
        errors.repassword = 'Password do not match'
    }

    return errors
}