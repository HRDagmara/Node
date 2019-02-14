var TimeM = require('TimeM');

function getTimeM() {
	var minutes = Math.floor(time / 60);
	var seconds = time - minutes * 60;
	var hours = Math.floor(time / 3600);
	time = time - hours * 3600;

	var timeOperation = TimeM.timeOperation();
	console.log('Time Operation:'+ hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds));
}

exports.print = getTimeM;

var TimeM = require('./TimeM');
TimeM.print();