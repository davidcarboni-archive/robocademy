// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//// The background page is asking us to find an address on the page.
//if (window == top) {
//  chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
//    sendResponse(findAddress());
//  });
//}

// From: 
// http://stackoverflow.com/questions/9515704/building-a-chrome-extension-inject-code-in-a-page-using-a-content-script

// Jquery
try {
	//console.log("Injecting jquery script...");
	var jquery = document.createElement('script');
	jquery.src = chrome.extension.getURL("lollybot/jquery-1.9.1.min.js");
	jquery.onload = function() {
	this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(jquery);
	//console.log("Success.");
} catch (error) {
	console.log("Error adding JQuery: "+ error.message);
}

// Socket.io
try {
	//console.log("Injecting socket.io script...");
	var socketio = document.createElement('script');
	socketio.src = chrome.extension.getURL("lollybot/socket.io.js");
	socketio.onload = function() {
	    this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(socketio);
	//console.log("Success.");
} catch (error) {
	console.log("Error adding Socket.io: "+ error.message);
}

//Code to interface with Codecademy:
try {
	//console.log("Injecting testing script...");
	var testing = document.createElement('script');
	testing.src = chrome.extension.getURL("lollybot/codecademy-interface.js");
	testing.onload = function() {
	this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(testing);
	//console.log("Success.");
} catch (error) {
	console.log("Error adding Codecademy interface code: "+ error.message);
}

//Lollybot control code:
try {
	//console.log("Injecting control script...");
	var control = document.createElement('script');
	control.src = chrome.extension.getURL("lollybot/robocademy-control.js");
	control.onload = function() {
	    this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(control);
	//console.log("Success.");
} catch (error) {
	console.log("Error adding Lollybot control code: "+ error.message);
}

// Search the text nodes for a US-style mailing address.
// Return null if none is found.
var findAddress = function() {
	
	//console.log("Hello, findAddress.");
	
  var found;
  var re = /(\d+\s+[':.,\s\w]*,\s*[A-Za-z]+\s*\d{5}(-\d{4})?)/m;
  var robo = /\s*#robot\s*/;
  var node = document.body;
  var done = false;
  while (!done) {
    done = true;
    for (var i = 0; i < node.childNodes.length; ++i) {
      var child = node.childNodes[i];
      
//      console.log(child.textContent);
//      if (child.textContent.indexOf("robot") != -1) {
//    	  console.log("I see robots!");
//      } else {
//    	  console.log(child.textContent);
//      }
//      if (child.textContent.match(robo)) {
//    	  console.log("Matched robo");
//      }
      //console.log(child.nodeName);
      
      if (child.textContent.match(re)) {
        node = child;
        found = node;
        done = false;
        break;
      }
    }
  }
  if (found) {
    var text = "";
    if (found.childNodes.length) {
      for (var i = 0; i < found.childNodes.length; ++i) {
        text += found.childNodes[i].textContent + " ";
      }
    } else {
      text = found.textContent;
    }
    var match = re.exec(text);
    if (match && match.length) {
      console.log("found: " + match[0]);
      var trim = /\s{2,}/g;
      return match[0].replace(trim, " ");
    } else {
      console.log("bad initial match: " + found.textContent);
      console.log("no match in: " + text);
    }
  }
  return null;
}

