const noteDatabase = require('../model/notes-schema');
class Note {

  create(note) {
    let item = new noteDatabase(note);
    return item.save();
  }

  get(category) {
    return noteDatabase.find(category);
  }

  update(id,note){
    return noteDatabase.findByIdAndUpdate({ _id: id },{text: note });
  }

  delete(id) {
    return noteDatabase.findOneAndDelete({ _id: id });
  }

}

module.exports = new Note();