// const { log } = require("console");
// let os = require("os");
// console.log(os);
// let freeMemory = os.freemem();
// console.log(freeMemory);
// log  6500593664

// os
let os = require("os");
// console.log(os);

// freeMemory
let freeMemory = os.freemem();
console.log(freeMemory); 
// 7019905024

// platform
let platform = os.platform();
console.log(platform);
// win32 the 32-bit application programming interface (API) for 32-bit versions of Windows

// readfile
let fs=require("fs");
fs.readFile("myFirst.js", "utf8", (err, data)=>{
    if (err){
        console.error(err)
        return
    }
    console.log(data)
})

// server http
let http = require("http");
console.log(http);

// htpp.createServer([options],[requestListener])
// 2 arguments IncomingMessage and serverResponse objects.

// function IncomingMessage (requestPath, additional){
//     this.name= nam;
//     this.age= age;
// }
// let req=new IncomingMessage("zedd", 27);
// let res=new ServerResponse();
// console.log(req);


// function person (name, age){
//     this.name= name;
//     this.age= age;
// }
// let abe =newPerson ("zedd", 27)
// console.log();

// create on web server
let htp= require("http");
let server=http.createServer (function requestListener(req,res) {
    // what ever you want to do on the server
    console.log("request received");
    res.end("Hello There");
});
server.listen(7897, function(){
    console.log("listing");
}); 

module.exports.hello = true; // Exported from require of module
exports = { hello: false };  // Not exported, only available in the module
