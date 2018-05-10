console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', yargs.argv);


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(!note) {
        console.log('Error: Note title already in use.');
    } else {
        console.log('Note created.');
        console.log(`\n\nTitle: ${note.title} \nBody: ${note.body}`)
    }
} else if(command === 'list'){
    notes.getAll();
} else if(command === 'read'){
    notes.getNote(argv.title);
} else if(command === 'remove') {
   var noteRemoved = notes.removeNote(argv.title);
   var message = noteRemoved ? 'Note was removed' : 'Note not found';
   console.log(message);
}else {
    console.log('Command not recognized');  
}
