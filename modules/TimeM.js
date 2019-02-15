var os = require('os');

function getTimeM() {
	var time = os.uptime();
	var minutes = Math.floor(time % 60);
	var seconds = time % 60;
	var hours = Math.floor(time / 3600);
	time = time - hours * 3600;

	console.log('Time Operation:'+ hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds));
}

exports.print = getTimeM;

