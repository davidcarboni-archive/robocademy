/**
 * Gets the current checkpoint (exercise?) from the Codecademy page.
 * If we're not on an exercise page, CCDATA.composer is null.
 */
function getCheckpoint() {
	if (CCDATA.composer) {
		// Looks like we're on a course page:
		try {
			for (var project = 0; project < CCDATA.composer.course.projects.length; project++) {
				for (var checkpoint = 0; checkpoint < CCDATA.composer.course.projects[project].checkpoints.length; checkpoint++) {
					var current = CCDATA.composer.course.projects[project].checkpoints[checkpoint];
					console.log(JSON.stringify(current._id) + " : " + JSON.stringify(current.is_current_checkpoint));
					if (current.is_current_checkpoint) {
						return current;
					}
				}
			}
		} catch (error) {
			console.log("Error getting current checkpoint: "+error.message);
		}
	}
}

/**
 * Attempts to get the code from the given checkpoint.
 * I'm not sure how to extract the code from the actual editor as it seems to be made up of a bunch of layers,
 * however extracting it from the checkpoint is comparatively easy, providing the user has made any edit.
 * If no edit has been made, it all seems to stop working.
 * @param checkpoint The checkpoint to inspect.
 * @returns {String} the extracted code, if available.
 */
function getCode(checkpoint) {
	var result = "";
	
	try {
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
	} catch (error) {
		console.log("Error getting code for the current checkpoint: " + error.message);
	}
	
	return result;
}

/**
 * Attempts to run the code entered into the current checkpoint.
 * Calls getCheckpoint and getCode.
 */
function runCode() {
	
	//First: locate the current lesson checkpoint:
	var checkpoint = getCheckpoint();
	
	if (checkpoint) {
		//Second: access local storage and retrieve the content of the file(s):
		var code = getCode(checkpoint);
		
		// Finally, run the code in the browser context:
		if (code) {
			clearCommands();
			//WOU HOUUUUUUUUUUU!!
			console.log("Evaluating:\n"+code);
			try {
				eval(code);
				console.log("Code evaluation completed.");
			} catch (error) {
				console.log("Error evaluating code: "+error.message);
				console.log("Sometimes the functions don't load correctly, so if you see and 'undefined' error, try reloading the page.");
			}
			// Add a stop:
			stop();
			runCommands();
		}
	}
}

/** Add an additional onClick handler to the submit button. */
$( document ).ready( function() {
	$(".js-submit-code").click(runCode);
});

