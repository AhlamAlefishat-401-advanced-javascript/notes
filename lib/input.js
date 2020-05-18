'use strict';

const isUrl=require('is-url');

const minimist=require('minimist');

function Input (){
    let checkUserMethod= process.argv[2];
    let argv=minimist(process.argv.slice(2));

    
    let method =Object.keys(argv)[1];
    
    let message=argv[method];
    
    let regExp = /^add$|^a$/gi;

// If the user specifies the flag, but doesn’t provide any text, show them an error
if(regExp.test(method) && (checkUserMethod ==='--add' || checkUserMethod ==='--a' ||checkUserMethod ==='-a')){
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
module.exports = Input;