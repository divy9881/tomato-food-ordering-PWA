let express = require("express")
let bodyParser = require("body-parser")
let testRouter = require("./routes/home")
let loginRouter = require("./routes/login")
let signupRouter = require("./routes/signup")

let app = express()

app.set("view engine","ejs")

app.use(express.static(__dirname+"/static"))

app.use(bodyParser.urlencoded({extended:true}))

app.use(testRouter)
app.use(loginRouter)
app.use(signupRouter)

let server = app.listen(3000,"127.0.0.1", function (){
    let socket = server.address()
    console.log("Server is listening at " + socket.address +" on " + socket.port )
})