'use strict';
const minimist = require('minimist');

const Input = require('../lib/input.js');

jest.mock('minimist');

minimist.mockImplementation(() => {
  return {
    add: 'Note',

  };
});

describe('Input Module', () => {
  it('When both are valid', () => {
    // console.log(minimist());
      
    let noteObject = new Input();
    expect(noteObject.valid()).toBeTruthy();
  });
  it('When both are invalid', () => {
    
    let noteObject = new Input();
    noteObject.action = 'aqaqqa';
  noteObject.payload = 'asasas';
    expect(noteObject.valid()).toBeFalsy();
  });
});