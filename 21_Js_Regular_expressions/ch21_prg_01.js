function is_valid_variable(variableName) {
    const pattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return pattern.test(variableName);
  }
  
  // Test cases
  console.log(is_valid_variable('first_name'));   
  console.log(is_valid_variable('first-name'));   
  console.log(is_valid_variable('1first_name'));  
  console.log(is_valid_variable('firstname'));    
  console.log(is_valid_variable('$valid'));       
  console.log(is_valid_variable('_valid'));       
  console.log(is_valid_variable(''));             
  console.log(is_valid_variable('123'));          
  console.log(is_valid_variable('a1_b2'));        
  console.log(is_valid_variable('valid$'));       
  