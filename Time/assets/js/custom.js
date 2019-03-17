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
		renew(data);
	}
});

		var month = d.getMonth();
		var day = d.getDate();
		var year = d.getFullYear();
		var weekday = d.getDay();

		var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		var output = ""+days[weekday]+", "+months[month] + " "+day+", "+year+"";
		document.getElementById("subs").innerHTML = h+m+s;
		$('#time').html("<small>"+output+"</small>");
	}, 500);

});
