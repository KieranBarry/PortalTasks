var toggleColor = function(event) {
	var currentColor = document.getElementById('text').style.color;
	if (currentColor === 'blue') {
		document.getElementById('text').style.color = "yellow";
	} else {
		document.getElementById('text').style.color = "blue";
	}
};

document.getElementById('toggle-button').addEventListener('click', toggleColor);
document.getElementById('text').style.color = "blue";
