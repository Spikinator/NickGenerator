var first = ["Limited", "Endless", "Orange", "Blue", "Swollen", "Horrible", "Great", "Awesome", "Terrible", "Idiotic", "Massive", "Cheesy"];

var second = ["Peppermints", "Oil", "Dragon", "Cafeteria", "Junkie", "Vegetables", "Twinkies", "Turtle", "Fox", "Calculator", "Bandwidth", "Crust", "Cake", "Derp"];

var colors = ["#DE3404", "#E68210", "#BFBF0A", "#1D9608", "#24BD09", "#10DE81", "#10C2DE", "#07B0AD", "#0C56A6", "#C215BF",ff"#8B1AD6", "gray"];

var nickFirst = " ";
var nickSecond = " ";
var nick = " ";
var colorPicked = " ";

$(document).ready(function() {
	$("#button").click(function() {
    generateNick();
    pickColors();
    $("#nick_result").css("color", colorPicked);
		$("#result").replaceWith("<p id='result'>" + nick + "</p>");
    $("#list").append("<p>" + nick + "</p>");
	});	
});

function generateNick() {
  nickFirst = first[Math.floor(Math.random() * first.length)];
  nickSecond = second[Math.floor(Math.random() * second.length)];
  nick = nickFirst + " " + nickSecond;
}

function pickColors() {
  colorPicked = colors[Math.floor(Math.random() * colors.length)];
}
