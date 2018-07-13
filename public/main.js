(function() {
	console.log("hello world")
	const socket = io()


	var audio=document.getElementById('audio');


	const changeTime = (time) => {
		audio.currentTime = time;
		audio.play();
	}

	$('audio').click(function() {
		socket.emit("start", false)
	})

	//$('audio').(function(){
    //  socket.emit('chat message', $('#m').val());
    //  $('#m').val('');
    //  return false;
    //});


	socket.on("time", (msg) => {
		console.log("got it " + msg)
		changeTime(msg)
	})
})()
