'use strict';
require('@code-fellows/supergoose');
const Input = require('../lib/input.js');

const Notes = require('../lib/notes.js');
const Note = require('../lib/model/notes-collection.js');

const minimist = require('minimist');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'Note',
    category: 'type',

  };
});

jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it('Nothing is logged to the console if there was no command given', () => {
    let newNote = new Notes();
    newNote.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('logs notes when execute() with an object with note, If the command (add) and data (the note) were both valid', () => {
    let noteObject = new Input();
    let newNote = new Notes(noteObject);
    newNote.execute(noteObject);
    expect(console.log).toHaveBeenCalled();
  });
  it('create() => Should create a new object and save it to the database', () => {
    let newNote = {
      text: 'Do homework',
      category: 'school',
    };
    return Note.create(newNote)
      .then(val => {
        Object.keys(newNote).forEach(key => {
          expect(newNote[key]).toEqual(val[key]);
        });
      });

  });

  it('get() => Should retrieve an object with its own category', () => {
    let newNote = {

      text: 'Do homework',
      category: 'school',

    };
    return Note.create(newNote)
      .then(val => {
        return Note.get({ category: val.category })
          .then(val => {
            Object.keys(newNote).forEach((key, index) => {
              expect(newNote[key]).toEqual(val[index][key]);
            });
          });
      });
  });
});


