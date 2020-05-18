const Input =require('./lib/input');

const Notes=require('./lib/notes');

let newInput= new Input();
// console.log(newInput);
let newNote= new Notes(newInput);

newNote.execute(newInput);
newNote.add(newInput);

