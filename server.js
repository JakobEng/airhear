const express = require("express")

let app = express()

const http = require('http').Server(app);
const io = require('socket.io')(http);

let time = 0

function repeat() {
	time++
	if(time>1341) {
		time = 0
	}
	setTimeout(() => {
		repeat()
	}, 1000)
}

io.on('connection', function(socket){
	console.log('a user connected')
	socket.emit("time", time);
	socket.on('disconnect', function(){
	    console.log('user disconnected');
  	})

})


app.get("/", (req,res) => {
	res.sendFile(__dirname + "/public/index.html")
})

app.get("/main.js", (req,res) => {
	res.sendFile(__dirname + "/public/main.js")
})
app.get("/socket.js", (req,res) => {
	res.sendFile(__dirname + "/public/socket.js")
})
app.get("/jquery.js", (req,res) => {
	res.sendFile(__dirname + "/public/jquery.js")
})
app.get("/dream", (req,res) => {
	res.sendFile(__dirname + "/public/dream.mp3")
})

http.listen(80, () => {
	repeat()
})
