//core module 
/*const fs=require("fs")
console.log(fs)
fs.readdir("./",(err,files)=>{
    err?console.log(err):console.log("result",files)
})
//create server 
const http=require("http")

const server =http.createServer((req,res)=>{
res.write("hellooo asiaaa")
res.end()

})
server.listen(5000,(err)=>{
    err?console.log(err):console.log("server is running on port 5000")
})


//third party module
let generator = require('generate-password');
var password = generator.generate({
	length: 10,
	numbers: true
});
function newperson(name,email){
    return{
        name,
        email,
        password:password
    }
}
console.log(newperson("asia","asia@gmail.com"))
*/
const myFunction=require("./myFunction")
console.log(myFunction.sum(2,7))
