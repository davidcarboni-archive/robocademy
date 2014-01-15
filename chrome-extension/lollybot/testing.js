/**
 * Simple tests to see how far we can get with Codecademy.
 */

function getCheckpoint() {
	if (CCDATA) {
		// Looks like we're on a course page:
		for (var project = 0; project < CCDATA.composer.course.projects.length; project++) {
			for (var checkpoint = 0; checkpoint < CCDATA.composer.course.projects[project].checkpoints.length; checkpoint++) {
				var current = CCDATA.composer.course.projects[project].checkpoints[checkpoint];
				console.log(JSON.stringify(current._id) + " : " + JSON.stringify(current.is_current_checkpoint));
				if (current.is_current_checkpoint) {
					return current;
				}
			}
		}
	}
}

function getCode(checkpoint) {
	var result = "";
	
	// Get the checkpoint data from local storage:
	var id = checkpoint._id;
	var value = localStorage.getItem(id);
	var files = JSON.parse(value);
	
	// Now get the code from the files in the current checkpoint:
	if (files) {
		for (var file = 0; file < files.length; file++) {
			console.log(JSON.stringify(files[file]));
			for (var property in files[file]) {
				if (files[file].hasOwnProperty(property)) {
					console.log(property + " = " + files[file][property]);
					if (property == "content") {
						result += files[file][property] + "\n";
					}
				}
			}
		}
	} else {
		alert("You'll need to edit the code first - it's a feature. You'll probably need to refresh this page as well to get things working again.");
	}
	
	return result;
}

function runCode() {
	
	//First: locate the current lesson checkpoint:
	var checkpoint = getCheckpoint();
	
	if (checkpoint) {
		//Second: access local storage and retrieve the content of the file(s):
		var code = getCode(checkpoint);
		
		// Finally, run the code in the browser context:
		if (code) {
			//WOU HOUUUUUUUUUUU!!
			console.log("Evaluating: "+code);
			eval(code);
			console.log("Code evaluation completed.");
		}
	}
}
$(".js-submit-code").click(runCode);

