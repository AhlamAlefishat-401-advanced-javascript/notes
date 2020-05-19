'use strict';


const minimist=require('minimist');
let regExp = /^add$|^a$/gi;

class Input {
    constructor(){

    const argv=minimist(process.argv.slice(2));
    let method ;
    let message;
    if(Object.keys(argv).length>1){
        
        method=Object.keys(argv)[1];
         message=argv[method];
    
}else{
    method = Object.keys(argv)[0];
    message = argv[method];
  }

    

// If the user specifies the flag, but doesn’t provide any text, show them an error
if (argv){
    if(regExp.test(method)&& !argv.d){
    if(typeof(message)==='string'){
        this.action=method;
        this.payload =message;
    }else{
        console.log('please enter your message');
    }
}else{
    // If the user doesn’t provide a valid argument
    console.log('please enter your message using (--add )or (--a/-a) to enter it correctly ');

}

}
}
valid(){
    let test =  /^add$|^a$/ig;
    if(test.test(this.action) && typeof (this.payload) === 'string'){
      return true;
    }else{
      return false;
    }
  }
}




module.exports = Input;