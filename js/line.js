$(document).ready(function() {

	//get canvas
	var ctx = $("#line-chartcanvas");

	var data = {
		labels : ["match1", "match2", "match3", "match4", "match5"],
		datasets : [
			{
				type: 'line',
				label : "TeamA score",
				data: [50, 50, 50, 50, 50],
				borderDash: [3, 2],
				backgroundColor: "transparent",
				borderColor: "lightblue",
				fill : false
			},
			{
				type: 'bar',
				label : "TeamB score",
				data : [20, 35, 40, 60, 50],
				backgroundColor: "green",
				borderColor: "green",
				fill : false
			}
		]
	};

	var options = {
		title : {
			display : true,
			position : "top",
			text : "Line Graph",
			fontSize : 18,
			fontColor : "#111"
		},
		plugins: {
			legend: {
				labels: {
					boxHeight: 10,
					usePointStyle: true,
					pointStyle: 'dash',
					font: {
						family: 'Segoe UI',
					},
				},
			}
		},
	};

	var chart = new Chart( ctx, {
		data: data,
		options : options
	} );

});