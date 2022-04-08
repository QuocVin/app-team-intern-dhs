const validationInfo = (values)=>{
    const errors = {}

    if(!values.username){
        errors.username = 'Username is required'
    }
    
    if(!values.name){
        errors.name = 'Name is required'
    }
    if(!values.date_ob){
        errors.date_ob = 'Date of birth is required'
    }
    if(!values.phone){
        errors.phone = 'Phone is required'
    }
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!values.mail){
        errors.mail = 'Email is required'
    }else if(!regexEmail.test(values.mail)){
        errors.mail = 'Invalid email'
    }
    return errors
}

export default validationInfo