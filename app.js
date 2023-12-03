const EventEmitter = require('events');

const customEmiiter=new EventEmitter();

customEmiiter.on('response',()=>{
    console.log("data received");
});

customEmiiter.emit('response')