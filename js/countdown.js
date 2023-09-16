setInterval(function time(){
	var d = new Date();
	var hours = 24 - d.getHours();
	var min = 60 - d.getMinutes();
	if((min + '').length == 1){
	  min = '0' + min;
	}
	var sec = 60 - d.getSeconds();
	if((sec + '').length == 1){
		  sec = '0' + sec;
	}
	document.querySelector('#the-24h-countdown p').innerHTML = '<span class="hours">'+hours+'</span><span class="min">'+min+'<br></span><span class="seg">'+sec+'</span>'
  }, 1000);
