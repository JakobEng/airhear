const express = require("express")

let app = express()

app.get("/", (req,res) => {
	console.log("we got it")
	res.send("hello")
})

app.listen(80)
