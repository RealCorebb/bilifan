
	var canvas = document.querySelector("#scene"),
		ctx = canvas.getContext("2d"),
		particles = [],
		amount = 0,
		mouse = {x:0,y:0},
		radius = 1;

	var colors = ["#068F2D","#50DE4A"];

	var copy = document.querySelector("#copy");

	var ww = canvas.width = window.innerWidth;
	var wh = canvas.height = window.innerHeight;

	function Particle(x,y){
		this.x =  Math.random()*ww;
		this.y =  Math.random()*wh;
		this.dest = {
			x : x,
			y: y
		};
		this.r =  Math.random()*5 + 2;
		this.vx = (Math.random()-0.5)*20;
		this.vy = (Math.random()-0.5)*20;
		this.accX = 0;
		this.accY = 0;
		this.friction = Math.random()*0.05 + 0.94;

		this.color = colors[Math.floor(Math.random()*6)];
	}

	Particle.prototype.render = function() {


		this.accX = (this.dest.x - this.x)/1000;
		this.accY = (this.dest.y - this.y)/1000;
		this.vx += this.accX;
		this.vy += this.accY;
		this.vx *= this.friction;
		this.vy *= this.friction;

		this.x += this.vx;
		this.y +=  this.vy;

		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
		ctx.fill();

		var a = this.x - mouse.x;
		var b = this.y - mouse.y;

		var distance = Math.sqrt( a*a + b*b );
		if(distance<(radius*70)){
			this.accX = (this.x - mouse.x)/100;
			this.accY = (this.y - mouse.y)/100;
			this.vx += this.accX;
			this.vy += this.accY;
		}

	}

	function onMouseMove(e){
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	}

	function onTouchMove(e){
    if(e.touches.length > 0 ){
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
	}

function onTouchEnd(e){
  mouse.x = -9999;
  mouse.y = -9999;
}

	function initScene(){
		ww = canvas.width = window.innerWidth;
		wh = canvas.height = window.innerHeight;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.font = "bold "+(ww/10)+"px sans-serif";
		ctx.textAlign = "center";
		ctx.fillText(copy.value, ww/2, wh/2);

		var data  = ctx.getImageData(0, 0, ww, wh).data;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.globalCompositeOperation = "screen";

		particles = [];
		for(var i=0;i<ww;i+=Math.round(ww/150)){
			for(var j=0;j<wh;j+=Math.round(ww/150)){
				if(data[ ((i + j*ww)*4) + 3] > 150){
					particles.push(new Particle(i,j));
				}
			}
		}
		amount = particles.length;

	}

	function onMouseClick(){
		radius++;
		if(radius ===5){
			radius = 0;
		}
	}

	function render(a) {
		requestAnimationFrame(render);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (var i = 0; i < amount; i++) {
			particles[i].render();
		}
	};

	copy.addEventListener("keyup", initScene);
	window.addEventListener("resize", initScene);
	window.addEventListener("mousemove", onMouseMove);
	window.addEventListener("touchmove", onTouchMove);
	window.addEventListener("click", onMouseClick);
	window.addEventListener("touchend", onTouchEnd);
	initScene();
	requestAnimationFrame(render);


$(document).ready(function() {

	particlesJS('particles-js', {
		"particles": {
			"number": {
				"value": 50,
				"density": {
					"enable": false,
					"value_area": 800
				}
			},
			"color": {
				"value": "#145768"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 1,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 5,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 3,
				"direction": "top",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "window",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "repulse"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true,
		"config_demo": {
			"hide_card": false,
			"background_color": "#b61924",
			"background_image": "",
			"background_position": "50% 50%",
			"background_repeat": "no-repeat",
			"background_size": "cover"
		}
	});
	var h="0";
	var m="0";
	var s="0";
	var subs="0";
function renew(data){
	subs=data.data.card.fans.toString();
    h=subs.substr(0,2);
    m=subs.substr(2,2);
    s=subs.substr(4,2);
}
	setInterval(function() {
		var d = new Date((new Date).getTime());

		var enable24hr = true;

		var time = d.getTime();
		

		var ampm = enable24hr ? "" : (h < 12 ? " AM" : " PM");

		$.ajax({
    cache: false,
    url: "https://api.imjad.cn/bilibili/v2/?get=space&vmid=625268",
    dataType: "json",
    success: function(data) {
		if (data.data.card.fans.toString()!=subs) {
			renew(data);
			document.getElementById("copy").value = h+m+s;
			initScene();
		}
		
	}
});

		var month = d.getMonth();
		var day = d.getDate();
		var year = d.getFullYear();
		var weekday = d.getDay();

		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		var output = ""+days[weekday]+", "+months[month] + " "+day+", "+year+"";
		
		$('#time').html("<small>"+output+"</small>");
	}, 500);

});
