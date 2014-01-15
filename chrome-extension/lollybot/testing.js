/**
 * Simple tests to see how far we can get with Codecademy.
 */

function sayHi() {
	console.log("Helo!");
	alert("Helo!")
}

var robot = {
	left : 124,
	right : 128
};

var driven = false;
function drive() {
	// console.log("E pur si muove.");
	

	// Fairly crude way of detecting that the Submit button has been pressed:
	if ($(".is-loading").length && !driven) {
		driven = true;
		console.log("Found an is-loading");
		console.log(JSON.stringify(CCDATA.composer.course));
	}
	// robot.whoops();
}

setInterval(drive, 1000);

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
}


//First: locate the current checkpoint:
var checkpoint = getCheckpoint();

if (checkpoint) {
	//Second: access local storage and retrieve the content of the file(s):
	var code = getCode(checkpoint)
	
	// Finally, run the code in the browser context:
	if (code) {
		//WOO HOOOOOOOOOOO!!
		eval(code);
	}
}


var
elCourse = {
	"_id" : "5024844597a4040002069e67",
	"name" : "HTML Basics",
	"projects" : [
			{
				"id" : "5024844597a4040002069e68",
				"author" : {
					"_id" : "4ec43e4aa78fe60001000752",
					"handle" : "Leng Lee",
					"profile_image_url" : "http://s3.amazonaws.com/codecademy-production/profile_thumbnail/4fd2c0e23b6fcb0003000209_567678169.jpg",
					"self_url" : "/v1/users/4ec43e4aa78fe60001000752"
				},
				"checkpoints" : [
						{
							"_id" : "50248445c5a725000206935f",
							"index" : 0,
							"code_reset" : true,
							"default_files" : [ {
								"filename" : "test.html",
								"content" : "<!DOCTYPE html>\n\t<strong>Feel free to change this text.</strong>\n    "
							} ],
							"entry" : "Every webpage you look at is written in a language called HTML. You can think of HTML as the skeleton that gives every webpage structure. In this course, we'll use HTML to add paragraphs, headings, images and links to a webpage.\n\nIn the editor to the right, there's a tab called `test.html`. This is the file we'll type our HTML into. See the code with the `<>`s? That's HTML! Like any language, it has its own special **syntax** (rules for communicating).\n\nWhen we press Save & Submit Code, the results tab will act like an Internet **browser** (*e.g.* Chrome, Firefox, Internet Explorer). A browser's job is to transform the code in `test.html` into a recognizable webpage! It knows how to lay out the page by following the HTML syntax.",
							"entry_html" : "<p>Every webpage you look at is written in a language called HTML. You can think of HTML as the skeleton that gives every webpage structure. In this course, we&#39;ll use HTML to add paragraphs, headings, images and links to a webpage.</p>\n\n<p>In the editor to the right, there&#39;s a tab called <code>test.html</code>. This is the file we&#39;ll type our HTML into. See the code with the <code>&lt;&gt;</code>s? That&#39;s HTML! Like any language, it has its own special <strong>syntax</strong> (rules for communicating).</p>\n\n<p>When we press Save &amp; Submit Code, the results tab will act like an Internet <strong>browser</strong> (<em>e.g.</em> Chrome, Firefox, Internet Explorer). A browser&#39;s job is to transform the code in <code>test.html</code> into a recognizable webpage! It knows how to lay out the page by following the HTML syntax.</p>\n",
							"external_resources" : [
									"https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",
									"/assets/jquery.expect.js" ],
							"hint" : "If you're not sure what to change the text on line 2 to, why not change **Feel free to change this text.** to **I'm about to learn HTML?**\n\nDon't change or remove the `<strong>` bit or the `</strong>` bit! We'll explain what those do soon.",
							"hint_html" : "<p>If you&#39;re not sure what to change the text on <a href=\"javascript:void(0)\" class=\"line-no\" data-from=\"2\" data-to=\"\">line 2</a> to, why not change <strong>Feel free to change this text.</strong> to <strong>I&#39;m about to learn HTML?</strong></p>\n\n<p>Don&#39;t change or remove the <code>&lt;strong&gt;</code> bit or the <code>&lt;/strong&gt;</code> bit! We&#39;ll explain what those do soon.</p>\n",
							"instruction" : "1. To the right, we have a `test.html` file. \n2. Change the text on line 2 (the bit between `<strong>` and `</strong>`) to anything you like!\n3. Hit Save & Submit Code, and you'll see how the `test.html` file would look in a browser. Did you see that? The `<strong></strong>` tags made our text bold!",
							"instruction_html" : "<ol>\n<li>To the right, we have a <code>test.html</code> file. </li>\n<li>Change the text on <a href=\"javascript:void(0)\" class=\"line-no\" data-from=\"2\" data-to=\"\">line 2</a> (the bit between <code>&lt;strong&gt;</code> and <code>&lt;/strong&gt;</code>) to anything you like!</li>\n<li>Hit Save &amp; Submit Code, and you&#39;ll see how the <code>test.html</code> file would look in a browser. Did you see that? The <code>&lt;strong&gt;&lt;/strong&gt;</code> tags made our text bold!</li>\n</ol>\n",
							"name" : "Why learn HTML?",
							"test_functions" : "return true;\n",
							"preview_button" : true,
							"is_current_checkpoint" : true
						},
						{
							"_id" : "502487b55da8a0000206b1f6",
							"index" : 1,
							"code_reset" : true,
							"default_files" : [ {
								"filename" : "test.html",
								"content" : ""
							} ],
							"entry" : "HTML stands for **HyperText Markup Language**.  **Hypertext** means \"text with links in it.\" Any time you click on a word that brings you to a new webpage, you've clicked on hypertext!\n\nA **markup language** is a programming language used to make text do more than just sit on a page: it can turn text into images, links, tables, lists, and much more. HTML is the markup language we'll be learning.\n\nWhat makes webpages pretty? That's CSS—**Cascading Style Sheets**. Think of it like skin and makeup that covers the bones of HTML. We'll learn HTML first, then worry about CSS in later courses.\n\nThe first thing we should do is set up the skeleton of the page.\n\na. Always put `<!DOCTYPE html>` on the first line. This tells the browser what language it's reading (in this case, HTML).\nb. Always put `<html>` on the next line. This starts the HTML document.\nc. Always put `</html>` on the last line. This ends the HTML document.",
							"entry_html" : "<p>HTML stands for <strong>HyperText Markup Language</strong>.  <strong>Hypertext</strong> means &quot;text with links in it.&quot; Any time you click on a word that brings you to a new webpage, you&#39;ve clicked on hypertext!</p>\n\n<p>A <strong>markup language</strong> is a programming language used to make text do more than just sit on a page: it can turn text into images, links, tables, lists, and much more. HTML is the markup language we&#39;ll be learning.</p>\n\n<p>What makes webpages pretty? That&#39;s CSS—<strong>Cascading Style Sheets</strong>. Think of it like skin and makeup that covers the bones of HTML. We&#39;ll learn HTML first, then worry about CSS in later courses.</p>\n\n<p>The first thing we should do is set up the skeleton of the page.</p>\n\n<p>a. Always put <code>&lt;!DOCTYPE html&gt;</code> on the first line. This tells the browser what language it&#39;s reading (in this case, HTML).<br>\nb. Always put <code>&lt;html&gt;</code> on the next line. This starts the HTML document.<br>\nc. Always put <code>&lt;/html&gt;</code> on the last line. This ends the HTML document.</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : "In HTML, the order you put things in matters! But formatting (*i.e.* empty space) doesn't matter from a technical point of view.\n\nYou *will* notice there's a pattern in how we indent each line of HTML, though. This is to aid readability and help us catch mistakes. We'll talk more about indentation later!",
							"hint_html" : "<p>In HTML, the order you put things in matters! But formatting (<em>i.e.</em> empty space) doesn&#39;t matter from a technical point of view.</p>\n\n<p>You <em>will</em> notice there&#39;s a pattern in how we indent each line of HTML, though. This is to aid readability and help us catch mistakes. We&#39;ll talk more about indentation later!</p>\n",
							"instruction" : "1. Go ahead and put the three lines mentioned above into `test.html`, which is now blank.\n\n2. In between the second and last line (between the `<html>` and the `</html>`), feel free to write whatever message you like.",
							"instruction_html" : "<ol>\n<li><p>Go ahead and put the three lines mentioned above into <code>test.html</code>, which is now blank.</p></li>\n<li><p>In between the second and last line (between the <code>&lt;html&gt;</code> and the <code>&lt;/html&gt;</code>), feel free to write whatever message you like.</p></li>\n</ol>\n",
							"name" : "HTML and CSS",
							"test_functions" : "if (code['test.html'].match(/\\<\\s*!DOCTYPE html\\s*\\>/i) === null) {\n  return \"Your DOCTYPE tag doesn't look quite right. Did you type it like this: <!DOCTYPE html> ?\";\n}\n\nif (code['test.html'].match(/\\<\\s*html\\s*\\>/i) === null) {\n  return 'Make sure you put in your open <html> tag!';\n}\n\nif (code['test.html'].match(/\\<\\s*\\/html\\s*\\>/i) === null) {\n  return 'Make sure you put in your close </html> tag!';\n}\n\nreturn true;\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						},
						{
							"_id" : "50255f5f0aad73000201b5a0",
							"index" : 2,
							"code_reset" : true,
							"default_files" : [ {
								"filename" : "index.html",
								"content" : ""
							} ],
							"entry" : "To learn more HTML, we should learn how to talk about HTML. Already you have seen we use `<>`s a lot. \n\n1. Things inside `<>`s are called **tags**.\n2. Tags nearly always come in pairs: an opening tag and a closing tag.\n3. Example of opening tag: `<html>`\n4. Example of closing tag: `</html>`\n\nYou can think of tags as being like parentheses: whenever you open one, you should close it. Tags also **nest**, so you should close them in the right order: the most recently opened tag should be the first one closed, like in the example below.\n\n    <first tag><second tag>Some text!</second tag></first tag>\n\nThe last exercise taught us how to set up our HTML file. Everything we do now will go between `<html>` and `</html>`.\n\nPractice makes perfect! One more time:",
							"entry_html" : "<p>To learn more HTML, we should learn how to talk about HTML. Already you have seen we use <code>&lt;&gt;</code>s a lot. </p>\n\n<ol>\n<li>Things inside <code>&lt;&gt;</code>s are called <strong>tags</strong>.</li>\n<li>Tags nearly always come in pairs: an opening tag and a closing tag.</li>\n<li>Example of opening tag: <code>&lt;html&gt;</code></li>\n<li>Example of closing tag: <code>&lt;/html&gt;</code></li>\n</ol>\n\n<p>You can think of tags as being like parentheses: whenever you open one, you should close it. Tags also <strong>nest</strong>, so you should close them in the right order: the most recently opened tag should be the first one closed, like in the example below.</p>\n\n<pre><code>&lt;first tag&gt;&lt;second tag&gt;Some text!&lt;/second tag&gt;&lt;/first tag&gt;\n</code></pre>\n\n<p>The last exercise taught us how to set up our HTML file. Everything we do now will go between <code>&lt;html&gt;</code> and <code>&lt;/html&gt;</code>.</p>\n\n<p>Practice makes perfect! One more time:</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : "Feel free to peek back at earlier exercises if you forget exactly what a tag looks like.",
							"hint_html" : "<p>Feel free to peek back at earlier exercises if you forget exactly what a tag looks like.</p>\n",
							"instruction" : "1. Put in the `<!DOCTYPE HTML>` tag.\n2. Put in the `<html>` opening and closing tags.\n3. Between the `<html>` tags, write whatever you like.\n4. Press Save & Submit Code to see what you've written appear on the page!",
							"instruction_html" : "<ol>\n<li>Put in the <code>&lt;!DOCTYPE HTML&gt;</code> tag.</li>\n<li>Put in the <code>&lt;html&gt;</code> opening and closing tags.</li>\n<li>Between the <code>&lt;html&gt;</code> tags, write whatever you like.</li>\n<li>Press Save &amp; Submit Code to see what you&#39;ve written appear on the page!</li>\n</ol>\n",
							"name" : "Basic terminology",
							"test_functions" : "if (code['index.html'].match(/\\<\\s*!DOCTYPE\\s+html\\s*\\>/i) === null) {\n  return 'Make sure you put in the <!DOCTYPE> tag!';\n}\n\nif (code['index.html'].match(/\\<\\s*html\\s*\\>/i) === null) {\n  return \"Don't forget to include your opening <html> tag!\";\n}\n\nif (code['index.html'].match(/<\\s*\\/html\\s*\\>/i) === null) {\n  return \"Don't forget to include your closing </html> tag!\";\n}\n\nif (code['index.html'].match(/\\<\\s*html\\s*\\>[^\\<]/i) === null) {\n  return \"Don't forget to write something between your <html></html> tags!\";\n}\n\nreturn true;\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						},
						{
							"_id" : "502bcd9afc3d780002057db2",
							"index" : 3,
							"code_reset" : true,
							"default_files" : [ {
								"filename" : "test.html",
								"content" : "<!DOCTYPE html>\n<html>\n\n\n\t\n\t\n\t\n\t\n</html>"
							} ],
							"entry" : "Everything in our HTML file will go between the opening `<html>` and closing `</html>` tags. \n\nThere are always two parts to the file: the head and body. Let's focus on the head.\n\na. It has an opening and a closing tag.\nb. The head includes important information about the webpage, such as its title. \nc. The title is the words we see in the tab (for example, the title of this page is \"Introduction to HTML\").",
							"entry_html" : "<p>Everything in our HTML file will go between the opening <code>&lt;html&gt;</code> and closing <code>&lt;/html&gt;</code> tags. </p>\n\n<p>There are always two parts to the file: the head and body. Let&#39;s focus on the head.</p>\n\n<p>a. It has an opening and a closing tag.<br>\nb. The head includes important information about the webpage, such as its title. <br>\nc. The title is the words we see in the tab (for example, the title of this page is &quot;Introduction to HTML&quot;).</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : "The HTML tags are `<html>` and `</html>`. What do you think the `head` and `title` tags will be?\n\nAlso note: the Codecademy editor automatically gives you the closing tag. It also does the spacing for you. Is this cheating? What happens when you leave Codecademy and want to do this in the real world?\n\nGood news: the editors that are used in web development typically have this functionality. It's built in to help us. Remember, the spacing is NOT technically required for the computer to understand what's going on. It is to help us when we need to make edits.",
							"hint_html" : "<p>The HTML tags are <code>&lt;html&gt;</code> and <code>&lt;/html&gt;</code>. What do you think the <code>head</code> and <code>title</code> tags will be?</p>\n\n<p>Also note: the Codecademy editor automatically gives you the closing tag. It also does the spacing for you. Is this cheating? What happens when you leave Codecademy and want to do this in the real world?</p>\n\n<p>Good news: the editors that are used in web development typically have this functionality. It&#39;s built in to help us. Remember, the spacing is NOT technically required for the computer to understand what&#39;s going on. It is to help us when we need to make edits.</p>\n",
							"instruction" : "1. Add a `<head>` opening and  `</head>` closing tag. See the Hint for more.\n2. Between the `<head>` tags, add in opening `<title>` and closing  `</title>` tags.\n3. In between the `<title>` tags, write the title of your webpage: **Bad to the Bonez Webpage Inc**. You'll be able to see the title at the top of your browser window: [click and open in a new tab to see](http://cl.ly/image/0a1i2K203F2R/title.png)!\n\n5. Press Save & Submit Code!",
							"instruction_html" : "<ol>\n<li>Add a <code>&lt;head&gt;</code> opening and  <code>&lt;/head&gt;</code> closing tag. See the Hint for more.</li>\n<li>Between the <code>&lt;head&gt;</code> tags, add in opening <code>&lt;title&gt;</code> and closing  <code>&lt;/title&gt;</code> tags.</li>\n<li><p>In between the <code>&lt;title&gt;</code> tags, write the title of your webpage: <strong>Bad to the Bonez Webpage Inc</strong>. You&#39;ll be able to see the title at the top of your browser window: <a href=\"http://cl.ly/image/0a1i2K203F2R/title.png\">click and open in a new tab to see</a>!</p></li>\n<li><p>Press Save &amp; Submit Code!</p></li>\n</ol>\n",
							"name" : "Make the head",
							"test_functions" : "if (code['test.html'].match(/\\<\\s*head\\s*\\>/i) === null) {\n  return 'Make sure you put in your open <head> tag!';\n}\n\nif (code['test.html'].match(/\\<\\s*\\/\\s*head\\s*\\>/i) === null) {\n  return 'Make sure you put in your close </head> tag!';\n}\n\n$e('title').to.exist(\"Make sure you add in your <title> and </title> tags!\");\n\n/* Apparently this is failing some students\n   who are putting the title on a new line\n   \n$e('title').to.have.text(\"Bad to the Bonez Webpage Inc\", function() {\n  return \"Make sure your title is exactly as shown in the instructions!\";\n});*/\n\nvar pageTitle = $('title').text();\n\nif (pageTitle.match(/bad\\s+to\\s+the\\s+bonez\\s+\\webpage\\s*,?\\s*inc/i) === null) {\n  return \"Make sure your title is 'Bad to the Bonez Webpage Inc'!\";\n}\n\nreturn true;\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						},
						{
							"_id" : "502bd1b865131c00020591c2",
							"index" : 4,
							"code_reset" : true,
							"default_files" : [ {
								"filename" : "test.html",
								"content" : "<!DOCTYPE html>\n<html>\n\n\t<head>\n\t\t<title>\n\t\t\n\t\t</title>\n\t\t\n\t</head>\n\n\t\n\t\n\t\n\t\n</html>"
							} ],
							"entry" : "We have set up a lot of the basic things for your HTML file for you. This is so you won't get mad at us for too much repetition—please learn it well!\n\nWe have learned about opening and closing tags. When we put content between the tags, the entire bit is called an **element**.\n\n    element = <opening tag> + content + <closing tag>\n\nNotice we have both title tags now, but we need `<body>` tags. The content in the body is what will be visible on the actual page. The body goes inside the html tags, but not inside the head tags, like this:\n\n    <html>\n        <head></head>\n        <body></body>\n    </html>",
							"entry_html" : "<p>We have set up a lot of the basic things for your HTML file for you. This is so you won&#39;t get mad at us for too much repetition—please learn it well!</p>\n\n<p>We have learned about opening and closing tags. When we put content between the tags, the entire bit is called an <strong>element</strong>.</p>\n\n<pre><code>element = &lt;opening tag&gt; + content + &lt;closing tag&gt;\n</code></pre>\n\n<p>Notice we have both title tags now, but we need <code>&lt;body&gt;</code> tags. The content in the body is what will be visible on the actual page. The body goes inside the html tags, but not inside the head tags, like this:</p>\n\n<pre><code>&lt;html&gt;\n    &lt;head&gt;&lt;/head&gt;\n    &lt;body&gt;&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : "Under the closing head tag, the code should look something like:\n\n    <body>\n        <p> The content in the first paragraph </p>\n        <p> Second paragraph's content </p>\n    </body>\n\nAnd of course, the very last line should always be `</html>`.",
							"hint_html" : "<p>Under the closing head tag, the code should look something like:</p>\n\n<pre><code>&lt;body&gt;\n    &lt;p&gt; The content in the first paragraph &lt;/p&gt;\n    &lt;p&gt; Second paragraph&#39;s content &lt;/p&gt;\n&lt;/body&gt;\n</code></pre>\n\n<p>And of course, the very last line should always be <code>&lt;/html&gt;</code>.</p>\n",
							"instruction" : "1. Between the title tags, give your page a name. It can be anything!\n2. Underneath the closing `</head>` tag, put in the opening and closing `<body>` tags.\n3. Inside the body, let's create paragraphs! Each paragraph requires opening and closing tags: `<p>` and `</p>`. We put content in between the tags.\n4. Between the `<body>` tags, create two paragraphs and write content in each paragraph. (This will require 2 pairs of `<p>` tags).",
							"instruction_html" : "<ol>\n<li>Between the title tags, give your page a name. It can be anything!</li>\n<li>Underneath the closing <code>&lt;/head&gt;</code> tag, put in the opening and closing <code>&lt;body&gt;</code> tags.</li>\n<li>Inside the body, let&#39;s create paragraphs! Each paragraph requires opening and closing tags: <code>&lt;p&gt;</code> and <code>&lt;/p&gt;</code>. We put content in between the tags.</li>\n<li>Between the <code>&lt;body&gt;</code> tags, create two paragraphs and write content in each paragraph. (This will require 2 pairs of <code>&lt;p&gt;</code> tags).</li>\n</ol>\n",
							"name" : "Paragraphs in the body",
							"test_functions" : "$e('title').not.to.be.empty(\"Make sure you put a title between your title tags.\");\n\nif (code['test.html'].match(/\\<\\s*body\\s*\\>/i) === null){\n  return 'Make sure you put in your open <body> tag!';\n}\n\nif (code['test.html'].match(/\\<\\/\\s*body\\s*\\>/i) === null){\n  return 'Make sure you put in your close </body> tag!';\n}\n\n$e('p').to.exist(\"It looks like you didn't add any <p></p> tags to the page!\");\n$e('p').to.be.above(1, function(){\n  return \"It looks like you only have one set of <p></p> tags. You should have two!\";\n});\n$e('p').not.to.be.empty(\"Make sure you write something between each set of <p></p> tags!\");\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						} ],
				"description" : "Here you'll learn HTML—the language websites are made from.",
				"name" : "Introduction to HTML",
				"checkpoints_count" : 5,
				"completed_checkpoints_count" : 0,
				"is_current_project" : true,
				"index" : 0,
				"completed" : false,
				"continue_to_section" : {
					"name" : "Body elements",
					"url" : "http://www.codecademy.com/courses/web-beginner-en-HZA3b/1?curriculum_id=50579fb998b470000202dc8b"
				}
			},
			{
				"id" : "502bdc9c1cc8ee0002001bf6",
				"author" : {
					"_id" : "4ec43e4aa78fe60001000752",
					"handle" : "Leng Lee",
					"profile_image_url" : "http://s3.amazonaws.com/codecademy-production/profile_thumbnail/4fd2c0e23b6fcb0003000209_567678169.jpg",
					"self_url" : "/v1/users/4ec43e4aa78fe60001000752"
				},
				"checkpoints" : [
						{
							"_id" : "502bdc9db879bd0002001587",
							"index" : 0,
							"code_reset" : true,
							"default_files" : [ {
								"filename" : "test.html",
								"content" : "<!DOCTYPE html>\n<html>\n\n\t<head>\n\t\t<title>\n\t\t\tHeadings & Paragraphs\n\t\t</title>\n\t\t\n\t</head>\n\t<body>\n\t\t\n\t\t\n\t\t\n\t\t\n\t</body>\n</html>"
							} ],
							"entry" : "We're definitely making good progress! We've learned when and why we use HTML. We've also learned how to:\n\na. Set up an HTML file with tags\nb. Title the webpage (in the `<head>`)\nc. Create paragraphs (in the `<body>` with `<p>` tags)\n\nThe next step is to give our paragraphs headings using **heading tags**. Let's start with the `<h1>` tag, which marks something as the most important. (Everyone knows the most important font is the biggest!)",
							"entry_html" : "<p>We&#39;re definitely making good progress! We&#39;ve learned when and why we use HTML. We&#39;ve also learned how to:</p>\n\n<p>a. Set up an HTML file with tags<br>\nb. Title the webpage (in the <code>&lt;head&gt;</code>)<br>\nc. Create paragraphs (in the <code>&lt;body&gt;</code> with <code>&lt;p&gt;</code> tags)</p>\n\n<p>The next step is to give our paragraphs headings using <strong>heading tags</strong>. Let&#39;s start with the <code>&lt;h1&gt;</code> tag, which marks something as the most important. (Everyone knows the most important font is the biggest!)</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : "Remember: paragraphs require `<p></p>` tags!",
							"hint_html" : "<p>Remember: paragraphs require <code>&lt;p&gt;&lt;/p&gt;</code> tags!</p>\n",
							"instruction" : "1. Ask yourself: what's this page's title?\n2. In the body section, create a heading. To do this, create an `<h1>` tag. \n3. Give your content a heading. It can be anything!\n4. Close the element with a closing tag `</h1>`. (Your heading should now be between `<h1>` and `</h1>`.) \n5. Underneath the heading, create two paragraphs using `<p>` tags with whatever content you like.",
							"instruction_html" : "<ol>\n<li>Ask yourself: what&#39;s this page&#39;s title?</li>\n<li>In the body section, create a heading. To do this, create an <code>&lt;h1&gt;</code> tag. </li>\n<li>Give your content a heading. It can be anything!</li>\n<li>Close the element with a closing tag <code>&lt;/h1&gt;</code>. (Your heading should now be between <code>&lt;h1&gt;</code> and <code>&lt;/h1&gt;</code>.) </li>\n<li>Underneath the heading, create two paragraphs using <code>&lt;p&gt;</code> tags with whatever content you like.</li>\n</ol>\n",
							"name" : "Paragraphs and headings",
							"test_functions" : "$e('h1').to.exist('Make sure to add your h1 tags!');\n$e('h1').not.to.be.empty('Make sure to write a heading between your <h1> and </h1> tags.');\n$e('p').to.exist(\"It looks like you haven't added any <p></p> tags to the page!\");\n$e('p').to.be.above(1, function() {\n  return \"It looks like you only have one set of <p></p> tags. You should have two!\";\n});\n$e('p').not.to.be.empty(\"Make sure you write something between each set of <p></p> tags!\");\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						},
						{
							"_id" : "502bfc7be1eeb20002000b2a",
							"index" : 1,
							"code_reset" : false,
							"default_files" : [ {
								"filename" : "test.html",
								"content" : "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title></title>\n\t</head>\n\t<body></body>\n</html>"
							} ],
							"entry" : "HTML actually lets us have more than one heading size. There are six heading sizes, where `<h1>` is the boss and `<h6>` is puny!\n\n* `<h1>` - The CEO\n* `<h2>` - VP of Fancy Towne\n* `<h3>` - Director of Some Stuff\n* `<h4>` - Middle management\n* `<h5>` - Lowly assistant\n* `<h6>` - Gets coffee for everyone else\n\nBelow we'll ask you to add headings of various sizes. Feel free to write whatever you like for the headings!",
							"entry_html" : "<p>HTML actually lets us have more than one heading size. There are six heading sizes, where <code>&lt;h1&gt;</code> is the boss and <code>&lt;h6&gt;</code> is puny!</p>\n\n<ul>\n<li><code>&lt;h1&gt;</code> - The CEO</li>\n<li><code>&lt;h2&gt;</code> - VP of Fancy Towne</li>\n<li><code>&lt;h3&gt;</code> - Director of Some Stuff</li>\n<li><code>&lt;h4&gt;</code> - Middle management</li>\n<li><code>&lt;h5&gt;</code> - Lowly assistant</li>\n<li><code>&lt;h6&gt;</code> - Gets coffee for everyone else</li>\n</ul>\n\n<p>Below we&#39;ll ask you to add headings of various sizes. Feel free to write whatever you like for the headings!</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : null,
							"hint_html" : null,
							"instruction" : "1. Your code currently has one `<h1>` heading and two paragraphs.\n2. Add an `<h3>` heading before the second paragraph.\n3. Add an `<h5>` heading after the second paragraph, and then add a third paragraph after this heading.",
							"instruction_html" : "<ol>\n<li>Your code currently has one <code>&lt;h1&gt;</code> heading and two paragraphs.</li>\n<li>Add an <code>&lt;h3&gt;</code> heading before the second paragraph.</li>\n<li>Add an <code>&lt;h5&gt;</code> heading after the second paragraph, and then add a third paragraph after this heading.</li>\n</ol>\n",
							"name" : "More about headings!",
							"test_functions" : "$e('h3').to.exist(\"Make sure you include your <h3></h3> tags!\");\n$e('h5').to.exist(\"Make sure you include your <h5></h5> tags!\");\n$e('p').to.be.above(2, function() {\n  return \"Don't forget to add that third set of <p></p> tags!\";\n});\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						},
						{
							"_id" : "502c8acad84343000202f43c",
							"index" : 2,
							"code_reset" : false,
							"default_files" : [ {
								"filename" : "test.html",
								"content" : "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title></title>\n\t</head>\n\t<body></body>\n</html>"
							} ],
							"entry" : "Nice work! So far, we've used headings of three different sizes. Given that there are six heading sizes altogether, we should make use of all six. (Even `<h6>`, our lowly coffee-getting intern of headings, needs to feel wanted.)",
							"entry_html" : "<p>Nice work! So far, we&#39;ve used headings of three different sizes. Given that there are six heading sizes altogether, we should make use of all six. (Even <code>&lt;h6&gt;</code>, our lowly coffee-getting intern of headings, needs to feel wanted.)</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : null,
							"hint_html" : null,
							"instruction" : "1. Add three more headings to the code, making use of `<h2>`, `<h4>` and `<h6>`. Make sure to close all your tags!\n2. Under each heading, add a short paragraph. Dont forget paragraphs need opening and closing `<p></p>` tags!",
							"instruction_html" : "<ol>\n<li>Add three more headings to the code, making use of <code>&lt;h2&gt;</code>, <code>&lt;h4&gt;</code> and <code>&lt;h6&gt;</code>. Make sure to close all your tags!</li>\n<li>Under each heading, add a short paragraph. Dont forget paragraphs need opening and closing <code>&lt;p&gt;&lt;/p&gt;</code> tags!</li>\n</ol>\n",
							"name" : "Using every heading",
							"test_functions" : "$e('h2').to.exist(\"Make sure to include your <h2></h2> tags!\");\n$e('h2').not.to.be.empty(\"It looks like there's no text between your <h2></h2> tags.\");\n$e('h4').to.exist(\"Make sure to include your <h4></h4> tags!\");\n$e('h4').not.to.be.empty(\"It looks like there's no text between your <h4></h4> tags.\");\n$e('h6').to.exist(\"Make sure to include your <h6></h6> tags!\");\n$e('h6').not.to.be.empty(\"It looks like there's no text between your <h6></h6> tags.\");\n$e('p').to.be.above(5, function() {\n  return \"Did you remember to add all three extra sets of <p></p> tags?\";\n});\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						} ],
				"description" : "Now that you know how to set up an HTML document, it's time to learn about all the things you can display in one.",
				"name" : "Body elements",
				"checkpoints_count" : 3,
				"completed_checkpoints_count" : 0,
				"is_current_project" : false,
				"index" : 1,
				"completed" : false,
				"continue_to_section" : {
					"name" : "Adding images to your site!",
					"url" : "http://www.codecademy.com/courses/web-beginner-en-HZA3b/2?curriculum_id=50579fb998b470000202dc8b"
				}
			},
			{
				"id" : "502c8b9ac9079d000202de15",
				"author" : {
					"_id" : "4ec43e4aa78fe60001000752",
					"handle" : "Leng Lee",
					"profile_image_url" : "http://s3.amazonaws.com/codecademy-production/profile_thumbnail/4fd2c0e23b6fcb0003000209_567678169.jpg",
					"self_url" : "/v1/users/4ec43e4aa78fe60001000752"
				},
				"checkpoints" : [
						{
							"_id" : "502c8b9a07533a000202f282",
							"index" : 0,
							"code_reset" : false,
							"default_files" : [ {
								"filename" : "test.html",
								"content" : "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title></title>\n\t</head>\n\t<body>\n\t\t\n\t\t\n\t\t\n\t\t\n\t</body>\n</html>"
							} ],
							"entry" : "You've done an awesome job! Here's a quick summary of things we've learned:\n\n1.  HTML is used to give websites structure.\n2.  We open HTML files using a browser, and the browser **renders** (shows us) the file.\n3.  HTML files have a `<head>` and a `<body>` (just like you!)\n4.  In the head, we have the `<title>` tags, and we use these to specify the webpage's name.\n5.  How to make headings and paragraphs.",
							"entry_html" : "<p>You&#39;ve done an awesome job! Here&#39;s a quick summary of things we&#39;ve learned:</p>\n\n<ol>\n<li> HTML is used to give websites structure.</li>\n<li> We open HTML files using a browser, and the browser <strong>renders</strong> (shows us) the file.</li>\n<li> HTML files have a <code>&lt;head&gt;</code> and a <code>&lt;body&gt;</code> (just like you!)</li>\n<li> In the head, we have the <code>&lt;title&gt;</code> tags, and we use these to specify the webpage&#39;s name.</li>\n<li> How to make headings and paragraphs.</li>\n</ol>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : null,
							"hint_html" : null,
							"instruction" : "1. Add a title between the `<title>` tags.\n2. Create a `<h3>` sized heading in the body. Make your heading say anything you want! (Just don't forget to close it.)\n3. Create three paragraphs using `<p>` tags and fill them with content (*e.g.* about cars, your pet, favorite city to travel—whatever you like!)",
							"instruction_html" : "<ol>\n<li>Add a title between the <code>&lt;title&gt;</code> tags.</li>\n<li>Create a <code>&lt;h3&gt;</code> sized heading in the body. Make your heading say anything you want! (Just don&#39;t forget to close it.)</li>\n<li>Create three paragraphs using <code>&lt;p&gt;</code> tags and fill them with content (<em>e.g.</em> about cars, your pet, favorite city to travel—whatever you like!)</li>\n</ol>\n",
							"name" : "Mid-lesson breather",
							"test_functions" : "$e('title').not.to.be.empty('Make sure to put a title between your <title></title> tags.');\n$e('h3').to.exist('Make sure you include your <h3></h3> tags!');\n$e('p').to.exist('Make sure you include <p></p> tags!');\n$e('p').to.be.above(2, function() {\n  return \"Make sure you have three paragraphs with three separate sets of <p></p> tags!\"\n});\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						},
						{
							"_id" : "502d3e3740b50f000204e2e1",
							"index" : 1,
							"code_reset" : true,
							"default_files" : [ {
								"filename" : "index.html",
								"content" : "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title></title>\n\t</head>\n\t<body>\n\t\t<img src=\"http://s3.amazonaws.com/codecademy-blog/assets/f3a16fb6.jpg\" />\n\t</body>\n</html>"
							} ],
							"entry" : "You can add images to your websites to make them look ultra fancy. You just need an image tag, like so: `<img>`. This tag is a bit different from the others. Instead of putting the content between the tags, you tell the tag where to get the picture using `src`. It's also different because this tag **self-closes**: it doesn't have a separate tag to close it. Note the `/` in the tag to close it: `<img src=\"url\" />`.\n\nCheck out the tag to the right—it adds a picture of a rubber duck to the page! (You can see it by clicking on the Preview button.)\n\nSee the web address (or **URL**, for **U**niform **R**esource **L**ocator) after `src=`? It's `\"http://s3.amazonaws.com/codecademy-blog/assets/f3a16fb6.jpg\"`. That tells the `<img>` tag where to get the picture from!\n\nEvery image on the web has its own image URL. Simply right-click on an image and choose \"Copy image URL.\" Paste that URL in quotes after `src=` to insert with your `<img>` tag.",
							"entry_html" : "<p>You can add images to your websites to make them look ultra fancy. You just need an image tag, like so: <code>&lt;img&gt;</code>. This tag is a bit different from the others. Instead of putting the content between the tags, you tell the tag where to get the picture using <code>src</code>. It&#39;s also different because this tag <strong>self-closes</strong>: it doesn&#39;t have a separate tag to close it. Note the <code>/</code> in the tag to close it: <code>&lt;img src=&quot;url&quot; /&gt;</code>.</p>\n\n<p>Check out the tag to the right—it adds a picture of a rubber duck to the page! (You can see it by clicking on the Preview button.)</p>\n\n<p>See the web address (or <strong>URL</strong>, for <strong>U</strong>niform <strong>R</strong>esource <strong>L</strong>ocator) after <code>src=</code>? It&#39;s <code>&quot;http://s3.amazonaws.com/codecademy-blog/assets/f3a16fb6.jpg&quot;</code>. That tells the <code>&lt;img&gt;</code> tag where to get the picture from!</p>\n\n<p>Every image on the web has its own image URL. Simply right-click on an image and choose &quot;Copy image URL.&quot; Paste that URL in quotes after <code>src=</code> to insert with your <code>&lt;img&gt;</code> tag.</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : null,
							"hint_html" : null,
							"instruction" : "Add a second image below the first one. (Make sure it's before the closing `<body>` tag!) \n\nIf you can't think of a good picture, use this ninja:\n\n~~~\nhttp://s3.amazonaws.com/codecademy-blog/assets/ninja_zpsa5dbe37a.jpg\n~~~",
							"instruction_html" : "<p>Add a second image below the first one. (Make sure it&#39;s before the closing <code>&lt;body&gt;</code> tag!) </p>\n\n<p>If you can&#39;t think of a good picture, use this ninja:</p>\n\n<pre><code>http://s3.amazonaws.com/codecademy-blog/assets/ninja_zpsa5dbe37a.jpg\n</code></pre>\n",
							"name" : "Adding images",
							"test_functions" : "$e('img').to.be.above(1, function() {\n  return \"Make sure to put in a second <img /> tag!\";\n});\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						},
						{
							"_id" : "502d42dc1bf3d7000205208a",
							"index" : 2,
							"code_reset" : false,
							"default_files" : [ {
								"filename" : "index.html",
								"content" : ""
							} ],
							"entry" : "Good work! Now you know how to add images to your website. But what if you want to click on that image to lead you somewhere else?\n\nThe `<a>` tag is the one used to make **hyperlinks** (or just **links**) on webpages. These are the words or images you click to go to a new page!\n\nJust like `<img>`, `<a>` has an **attribute** that tells the link where to go. Instead of `src`, `<a>` uses `href`, like so:\n\n    <a href=\"http://www.codecademy.com\">Learn to code!</a>\n\n`src` stands for \"source.\" It tells the `<img>` link where the picture comes from!\n\n`href` stands for \"hypertext reference.\" Remember when we said that hypertext (that is, links) is text you can click on? Well, `href` tells that link where to go! The text after `href` is the web address, and the text between `<a>` and `</a>` is the text you click on.",
							"entry_html" : "<p>Good work! Now you know how to add images to your website. But what if you want to click on that image to lead you somewhere else?</p>\n\n<p>The <code>&lt;a&gt;</code> tag is the one used to make <strong>hyperlinks</strong> (or just <strong>links</strong>) on webpages. These are the words or images you click to go to a new page!</p>\n\n<p>Just like <code>&lt;img&gt;</code>, <code>&lt;a&gt;</code> has an <strong>attribute</strong> that tells the link where to go. Instead of <code>src</code>, <code>&lt;a&gt;</code> uses <code>href</code>, like so:</p>\n\n<pre><code>&lt;a href=&quot;http://www.codecademy.com&quot;&gt;Learn to code!&lt;/a&gt;\n</code></pre>\n\n<p><code>src</code> stands for &quot;source.&quot; It tells the <code>&lt;img&gt;</code> link where the picture comes from!</p>\n\n<p><code>href</code> stands for &quot;hypertext reference.&quot; Remember when we said that hypertext (that is, links) is text you can click on? Well, <code>href</code> tells that link where to go! The text after <code>href</code> is the web address, and the text between <code>&lt;a&gt;</code> and <code>&lt;/a&gt;</code> is the text you click on.</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : "Make sure you put in a full web address, like `\"http://www.google.com\"`. Oh yeah—make sure to put the address in quotes!\n\nYour code should look something like this:\n```\n<a href=\"LINK url\"><img src=\"IMAGE url\" /></a>\n```\n\nTry making one image link to `\"http://codecademy.com\"` and then click on it to see the link in action. If you use another URL there is a chance that clicking on it won't work because of security settings on the website!",
							"hint_html" : "<p>Make sure you put in a full web address, like <code>&quot;http://www.google.com&quot;</code>. Oh yeah—make sure to put the address in quotes!</p>\n\n<p>Your code should look something like this:</p>\n\n<pre><code>&lt;a href=&quot;LINK url&quot;&gt;&lt;img src=&quot;IMAGE url&quot; /&gt;&lt;/a&gt;\n</code></pre>\n\n<p>Try making one image link to <code>&quot;http://codecademy.com&quot;</code> and then click on it to see the link in action. If you use another URL there is a chance that clicking on it won&#39;t work because of security settings on the website!</p>\n",
							"instruction" : "Here's how to turn an image into a link: put a `<a href=\"URL\">` tag before your `<img>` tag and a `</a>` tag after them. In the quotes after `href=`, put in your favorite website address!",
							"instruction_html" : "<p>Here&#39;s how to turn an image into a link: put a <code>&lt;a href=&quot;URL&quot;&gt;</code> tag before your <code>&lt;img&gt;</code> tag and a <code>&lt;/a&gt;</code> tag after them. In the quotes after <code>href=</code>, put in your favorite website address!</p>\n",
							"name" : "Click that image",
							"test_functions" : "$e('a').to.exist(\"Don't forget to include your <a></a> tags!\");\n$e('a > img').to.exist(\"Make sure your <img /> tag is inside your <a></a> tags.\");\nif (typeof $('a').attr('href') === 'undefined') {\n    return \"Make sure your <a> tag has a href inside it!\"    \n}\nreturn true",
							"preview_button" : true,
							"is_current_checkpoint" : false
						},
						{
							"_id" : "5032da16c496130002012ab9",
							"index" : 3,
							"code_reset" : true,
							"default_files" : [ {
								"filename" : "index.html",
								"content" : "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title></title>\n\t</head>\n\t<body>\n\t\t\n\t\t\n\t\t\n\t\t\n\t</body>\n</html>"
							} ],
							"entry" : "Good work! Let's make sure you really understand images and links before we move on to the review.",
							"entry_html" : "<p>Good work! Let&#39;s make sure you really understand images and links before we move on to the review.</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : "Images work like this:\n\n    <img src=\"picture URL\" />\n\nLinks work like this:\n\n    <a href=\"website URL\"></a>\n\nYou can put a link around an image:\n```\n<a href=\"website URL\"><img src=\"picture URL\" /></a>\n```",
							"hint_html" : "<p>Images work like this:</p>\n\n<pre><code>&lt;img src=&quot;picture URL&quot; /&gt;\n</code></pre>\n\n<p>Links work like this:</p>\n\n<pre><code>&lt;a href=&quot;website URL&quot;&gt;&lt;/a&gt;\n</code></pre>\n\n<p>You can put a link around an image:</p>\n\n<pre><code>&lt;a href=&quot;website URL&quot;&gt;&lt;img src=&quot;picture URL&quot; /&gt;&lt;/a&gt;\n</code></pre>\n",
							"instruction" : "1. Between the `<body>` tags, add two images using the `<img>` tag. One should be a link; the other should not. The link can go anywhere you want.\n2. After your two images, create a link that's just a line of text. It can link anywhere you want.\n\nCheck the Hint if you need help.",
							"instruction_html" : "<ol>\n<li>Between the <code>&lt;body&gt;</code> tags, add two images using the <code>&lt;img&gt;</code> tag. One should be a link; the other should not. The link can go anywhere you want.</li>\n<li>After your two images, create a link that&#39;s just a line of text. It can link anywhere you want.</li>\n</ol>\n\n<p>Check the Hint if you need help.</p>\n",
							"name" : "Images and links",
							"test_functions" : "$e('img').to.be.above(1, function() {\n  return \"Did you remember to include two images?\";\n});\n$e('a > img').to.exist(\"Make sure at least one of your images is also a link!\");\n$e('a').to.be.above(1, function() {\n  return \"Make sure you have 3 elements. One should be a just a link, one should be just a picture and one should be a picture with a link!\";\n});\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						},
						{
							"_id" : "5032da303327c200020133a8",
							"index" : 4,
							"code_reset" : false,
							"default_files" : [ {
								"filename" : "index.html",
								"content" : "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title></title>\n\t</head>\n\t<body></body>\n</html>"
							} ],
							"entry" : "Well done! You now know the basics of creating a web page. If you're feeling lucky, go ahead and tackle the [Build Your Own Webpage](http://www.codecademy.com/courses/web-beginner-en-LceTK/) project.",
							"entry_html" : "<p>Well done! You now know the basics of creating a web page. If you&#39;re feeling lucky, go ahead and tackle the <a href=\"http://www.codecademy.com/courses/web-beginner-en-LceTK/\">Build Your Own Webpage</a> project.</p>\n",
							"external_resources" : [ "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" ],
							"hint" : null,
							"hint_html" : null,
							"instruction" : "Click Save & Submit Code to complete the course.",
							"instruction_html" : "<p>Click Save &amp; Submit Code to complete the course.</p>\n",
							"name" : "Congratulations!",
							"test_functions" : "return true;\n",
							"preview_button" : true,
							"is_current_checkpoint" : false
						} ],
				"description" : "Your website is really coming along! Let's add some pictures to liven it up.",
				"name" : "Adding images to your site!",
				"checkpoints_count" : 5,
				"completed_checkpoints_count" : 0,
				"is_current_project" : false,
				"index" : 2,
				"completed" : false,
				"continue_to_course" : {
					"name" : "Build Your Own Webpage",
					"url" : "http://www.codecademy.com/courses/web-beginner-en-LceTK/?curriculum_id=50579fb998b470000202dc8b"
				}
			} ],
	"mode" : "web",
	"language" : "Web",
	"is_php" : false,
	"return_to" : {
		"name" : "Web Fundamentals",
		"url" : "http://www.codecademy.com/tracks/web?jump_to=5024844597a4040002069e67"
	},
	"project_index" : 0,
	"course_progress_percentage" : 0,
	"course_exercises_index" : 1,
	"course_exercises_total" : 13,
	"continue_to_course" : {
		"name" : "Build Your Own Webpage",
		"url" : "http://www.codecademy.com/courses/web-beginner-en-LceTK/?curriculum_id=50579fb998b470000202dc8b"
	}
};
