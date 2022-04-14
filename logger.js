const EventEmitter= require('events');

var url= 'http://mylogger.io/log';

class Logger extends EventEmitter{//create class if want to raise event in application. all funciontality defined with class
    log(message){
        console.log(message);
        this.emit('messageLogged', {id : 1 , url:'http://'});//this references to logger class and extends even emitter
    }
   
}     module.exports=Logger;

