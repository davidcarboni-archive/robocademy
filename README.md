Robocademy
----------

### What is it?

This is a set of curriculum materials for Codecademy and an adaptation of the Lollybot control software to integrate the robot with Codecademy. 
It works using a Chrome extension to add the Lollybot control code to Codecademy pages and runs
the code typed in to Codecademy locally to control the robot.

### What's included?

There are three folders:
 - `chrome-extension` contains the extension code that bridges between Codecademy and the local Lollybot.
 - `curriculum-materials` contains the source text for the Codecademy excercises.
 - `lollybot-server` contains a slightly tweaked version of the original Node.js code. You should be able to run with a standard Lollybot server. 

### How do I get started?
 
Head over to the [wiki](wiki) for more information.
 
### Credits

Robocademy was invented by Clare Wilcockson and coding was done by David Carboni. 
Clare designed and created the course materials and David hacked the Codecademy site and Lollybot code to make them work together.

The Robocademy extension is based on the Mappy example Chrome extension developed at Google.

The Lollybot code is based on:

> Lollybot HTML5 + JavaScript Telemetry & Control 
> Version 0.2.0
> May 31, 2013
> 
> This is the software for Lollybot (formerly known as "Suckerbot") my
> entry in the African Robotics Network (AFRON) $10 Robot Design
> Challenge:
> 
> http://www.robotics-africa.org/afron-design-challenges/10-dollar-robot-design-challenge.html
> 
> Suckerbot was a submission in the tethered robot category.  The robot
> is connected to a computer via a USB cable where both the computing
> and the programming take place.  You can find more details online at: 
> 
> http://www.tomtilley.net/projects/suckerbot/ 
> 
> This software is Open Source and the code is released under the GNU
> Public License. You can download the software which includes the source at:
> 
> https://code.google.com/p/lollybot/

