function Notes(note){

}
Notes.prototype.execute=function(note){
    if(note.payload){
        console.log('Added Sucessfully ', note)
    }
}
Notes.prototype.add=function(note){
    // console.log(note);
    if(note.payload){
        let newNote={
            id: Math.ceil(Math.random()*10),
            note: note.payload
        }
        console.log('Message :', newNote);
    }
}
module.exports= Notes;