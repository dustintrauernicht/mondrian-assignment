window.addEventListener("load", function() {
	var colorselect = document.getElementsByClassName("color");
	for (var i = 0; i < colorselect.length; i++) {
		colorselect[i].addEventListener("click", function(event) {
			currentcolor = event.target.id
		})
	}
	var boxclick = document.getElementsByClassName("row");
	for (var i = 0; i < boxclick.length; i++) {
		boxclick[i].addEventListener("click", function(event) {
			event.target.style.backgroundColor = currentcolor
		})
	}
	var save = document.getElementById("save_button")
	var get_dom_data = function() {
		var rowresults = ""
		for (var i = 0; i < boxclick.length; i++) {
			if (boxclick[i].style.backgroundColor == "red") {
				rowresults += "r"
			} else if (boxclick[i].style.backgroundColor == "blue") {
				rowresults += "b"
			} else if (boxclick[i].style.backgroundColor == "white") {
				rowresults += "w"
			} else if (boxclick[i].style.backgroundColor == "yellow") {
				rowresults += "y"
			} else {
				rowresults += "w"
			}
		}
		var query = "?saved=" + rowresults;
		var request = new XMLHttpRequest();
		request.open("GET", "/save" + query);
		request.send()
	};
	save.addEventListener("click", function(event) {
		get_dom_data();
		event.preventDefault();
	});
});