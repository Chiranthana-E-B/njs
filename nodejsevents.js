const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () =>{
    console.log("please turn of moter!");
    setTimeout(() => {
        console.log("please turn of moter its a gentle remainder");
    },3000);
});

console.log("the script is running");
myEmitter.emit('WaterFull');
console.log("the script is still running");
myEmitter.emit('WaterFull');