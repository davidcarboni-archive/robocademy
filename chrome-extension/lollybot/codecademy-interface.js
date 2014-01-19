/**
 * Gets the current checkpoint (exercise?) from the Codecademy page.
 * If we're not on an exercise page, CCDATA.composer is null.
 */
function getCheckpoint() {
	
	// Get the current checkpoint from the URL:
	var segments =  location.pathname.split("/");
	var checkpointNumber = segments[segments.length-1];
	var checkpointIndex = checkpointNumber - 1;
	
	// Extract the checkpoint object:
	var checkpoint = CCDATA.composer.current_project.checkpoints[checkpointIndex];
	//console.log(checkpoint.latest_files[0].content);
	return checkpoint;
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
		
		// Is the latest code in localStorage,
		// Or should we use latest_files in CCDATA?
		var files;
		if (value) {
			files = JSON.parse(value);
			console.log("Using files stored in localStorage");
		} else if (checkpoint.latest_files) {
			files = checkpoint.latest_files;
			console.log("Using CCDATA checkpoint latest_files");
		} else {
			files = checkpoint.default_files;
			console.log("Using CCDATA checkpoint default_files");
		}
		
		// Now get the code from the files:
		for (var file = 0; file < files.length; file++) {
			//console.log(JSON.stringify(files[file]));
			for (var property in files[file]) {
				if (files[file].hasOwnProperty(property)) {
					//console.log(property + " = " + files[file][property]);
					if (property == "content") {
						result += files[file][property] + "\n";
					}
				}
			}
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
			try {
				// remove placeholders:
				code = code.replace(/function\s*drive\s*\(\s*\)\s*\{\s*\}/, "");
				code = code.replace(/function\s*stop\s*\(\s*\)\s*\{\s*\}/, "");
				console.log("Evaluating:\n"+code);
				eval(code);
				console.log("Code evaluation completed successfully.");
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

//for(var b in window) { 
//	if(window.hasOwnProperty(b)) {
//		if (typeof b != 'undefined' && b != "CCDATA") {
//			console.log(b); 
//			try { 
//				console.log(JSON.stringify(window[b]));
//			} catch (error) {
//				console.log("Can't stringify "+b);
//			}
//		}
//	} 
//}


