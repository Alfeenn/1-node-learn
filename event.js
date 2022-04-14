const EventEmitter= require('events');
const emitter = new EventEmitter();
//Register Listener
//2 argument Listener (name of event and callback function)
emitter.addListener('messageLogged', ()=>{//untuk menampilkan pesan di listener, dibutuhkan event untuk menghandle
    console.log('Listener successfully called');

})
//mengadakan event (emit>> signal sebuah event terjadi)
emitter.emit('messageLogged');