'use strict';
require('dotenv').config();
const mongoose = require('mongoose');

const noteDataBase = require('../lib/model/notes-collection.js');

const MONGODB_URI = process.env.MONGODB_URI|| 'mongodb://localhost:27017/notes';

mongoose.connect(MONGODB_URI,{
  useNewUrlParser:true,
  useUnifiedTopology : true,
});



class Notes {
  constructor(note){
  }
  execute (note) {
    let regExpAdd = /^add$|^a$/gi;
    let regExpList = /^list$/ig;
    let regExpDelete = /^delete$/ig;
    let regExpUpdate = /^update$/ig;



    if(note){
      if (regExpAdd .test(note.action)) {
        return  this.add(note);
      }else if(regExpList.test(note.action)){
        return this.list(note);
      }else if(regExpDelete.test(note.action)){
        return this.delete(note);
      }else if(regExpUpdate.test(note.action)){
        return this.delete(note);
      }

    }
  }
  async add(note) {
    let newNote = {
      text: note.payload,
      category : note.category,
    };

    const theNote = await noteDataBase.create(newNote);
    console.log('Note Saved' , theNote.text);
    mongoose.disconnect();

  }
  async list(note){
    if ( typeof (note.payload) === 'string'){
      const category= await noteDataBase.get({category: note.payload});
      category.forEach(val=>{
        console.log(`${val.text}
        category : ${val.category}     id : ${val.id}
-------------------------------------------------------------------`);
      });
 
    }else{
      const list = await noteDataBase.get({});
      list.forEach(val=>{
        console.log(`${val.text}
        category : ${val.category}     id : ${val.id}
-------------------------------------------------------------------`);
      });
    }
    mongoose.disconnect();
  }
  async update(note){
    let record = {text :note.payload , id:note.id};
    let updatedNote = await noteDataBase.update(record.id , record.text);
    console.log('Note Updated' , updatedNote.text);
  }
  async delete(note){
    try{
      await noteDataBase.delete(note.payload);
    }catch(err){
      console.log('invalid id');
    }
    mongoose.disconnect();
    
  }
}





module.exports = Notes;

// class Notes{
//   constructor(note){

//   }
    
//   execute(note){
//     if(note){
//       console.log('Added Sucessfully ', note);
//     }
//   }
//   add(note){
//     // console.log(note);
//     if(note){
//       if(note.payload){
//         let newNote={
//           id: Math.ceil(Math.random()*10),
//           note: note.payload,
//         };
//         console.log('Message :', newNote);
//       }
//     }
//   }
// }
// module.exports= Notes;