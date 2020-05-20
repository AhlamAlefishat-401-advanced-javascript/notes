class Notes{
  constructor(note){

  }
    



  execute(note){
    if(note){
      console.log('Added Sucessfully ', note);
    }
  }
  add(note){
    // console.log(note);
    if(note){
      if(note.payload){
        let newNote={
          id: Math.ceil(Math.random()*10),
          note: note.payload,
        };
        console.log('Message :', newNote);
      }
    }
  }
}
module.exports= Notes;