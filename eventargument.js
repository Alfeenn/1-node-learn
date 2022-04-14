const EventEmitter= require('events');

//Register Listener
//2 argument Listener (name of event and callback function)

//mengadakan event (emit>> signal sebuah event terjadi)
const Logger=require('./logger');
const logger=new Logger();

logger.addListener('messageLogged', function(arg){//add argument parameter to receive message on event (e,eventArgument . etc)
    console.log('Listener successfully called', arg);

})
logger.log('Message : ');