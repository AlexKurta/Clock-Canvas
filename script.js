function awesomeDate(value) {
	let newValue = value.toString();
	while ( newValue.length < 2 )
	newValue ='0' + newValue;
	return newValue;
}
setInterval( () => {
	let canvas = document.getElementById('canvas'),
			context = canvas.getContext('2d'),
			date = new Date,
			hours = date.getHours(),
			minutes = date.getMinutes(),
			seconds = date.getSeconds(),
			degree = [];
			degree[2] = 30*(hours + (1/60)*minutes), //hours
			degree[1] = 6*(minutes + (1/60)*seconds),//minutes
			degree[0] = 6*seconds; //seconds                    

	context.beginPath();
	context.arc(150,150, 150, 0,Math.PI*2, false);
	context.fillStyle='rgb(252, 202, 102)';
	context.fill();

	let coord = canvas.getBoundingClientRect();
	for (let i = 12; i >= 1; i--) {
		let cx = coord.width/2 + (coord.width/2 - 30) * Math.sin(Math.PI * i / 6),
				cy = coord.width/2 - (coord.width/2 - 30) * Math.cos(Math.PI * i / 6);
		context.beginPath();
		context.arc(cx,cy, 20, 0, Math.PI*2, false);
		context.fillStyle ='#48b382';
		context.fill();
		context.fillStyle ='black';
		context.font='normal 20px Arial';
		context.textAlign ='center';
		context.textBaseline='middle';
		context.fillText(i,cx,cy);
	}
	context.fillStyle ='black';
	context.font='normal 27px Arial';
	context.textAlign ='center';
	context.textBaseline='middle';
	context.fillText(`${awesomeDate(hours)}:${awesomeDate(minutes)}:${awesomeDate(seconds)}`,coord.width/2,coord.height/3);

	for (let i = 1; i <= 3; i++) {
		context.strokeStyle = '#0000006b';
		context.lineWidth = 2 * i;
		context.beginPath();
		context.moveTo(150,150);
		let cx = 150 + (coord.width/2 - 25 * i - 20) * Math.sin(degree[i - 1] * Math.PI / 180),
				cy = 150 - (coord.width/2 - 25 * i - 20) * Math.cos(degree[i - 1] * Math.PI / 180);                        
		context.lineTo(cx,cy);
		context.lineCap = 'round';
		context.stroke();	
	}                
},1000);
