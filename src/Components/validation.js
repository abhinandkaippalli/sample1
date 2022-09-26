function validation(values) {
    
    let errors={};
    
    if(!values.first_name){
        errors.first_name="Name is required.";
    }

    if(!values.last_name){
        errors.last_name="Last is required.";
    }

    if(!values.email){
        errors.email="Email is required.";
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid.";
    }

    if(!values.password){
        errors.password="Password is required.";
    } else if(values.password.length < 5){
        errors.password="Password must be more than five characters.";
    }

    return errors
}

export default validation