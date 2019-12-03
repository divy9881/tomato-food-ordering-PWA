let express = require("express")
let bodyParser = require("body-parser")

let app = express()

app.use(bodyParser.urlencoded({extended:true}))

console.log(__dirname+"static")
app.use(express.static(__dirname+"static"))

app.set("view engine","ejs")

let server = app.listen(3000,"127.0.0.1", function (){
    let socket = server.address()
    console.log("Server is listening at " + socket.address +" on " + socket.port )
})
