Your assignment

Create a ‘reusable component’ called ‘muscle-number’ (this is a term invented by Priva ;-) to state that the `value` is the most important asset in this component and should be immediate recognizable and stand-out for the user)

The `muscle-number` component contains a title, value (temperature), unit label (default is celsius) and a date and time of the measurement. An `assets/measurement.json` file is provided with 2 measure objects (indoor and outdoor temperature)

Your task is to display 2 muscle number components with the data from `measurement.json` in the app’s `main-component`. 

This is the stackblitz template: <URL_TO_STACK_BLITZ>

The `muscle-number` component should have the following features (in order of importance)
- Display title, value, unit and date. (pass the data object to the component)
- Make the value standout (e.g. make it bigger on screen) E.g. create styling for the component roughly matching the style presented in the design image as supplied to you.
- The default font is ‘Roboto’. You can load it like this: `@import url("https://fonts.googleapis.com/css2?family=Roboto");`
- Create a switch to display the value in either `celcius` or `fahrenheit` units (default is celcius)
- Display the date and time (from dateTime provided in javascript notation in the data) in a more user friendly manner (render the day and month in human readable text, e.g. Monday, Februari 15, etc…) (by using an Angular pipe)
- Display the value with 1 decimal only. (by using an Angular pipe)

Optional
- Create an Angular pipe to display the unit in a more user friendly and generic way, for example add a `°` symbol to it.
- Display the value nl-NL locale. (e.g. the value is displayed with a comma as decimal separator)
- Display the date in nl_NL locale (For example `February` becomes `februari`)
- Create a typescript interface for the measurement data and implement it the places the measurement data is used
- Add a enum for the `celcius` / `fahrenheit` switch and implement it in the places where it is used

During this assignment please feel free to ask questions, discuss approaches or challenge the solution. Formulating an approach is as valuable as implementing it. If you feel you get stuck in use syntax or get insecure feel free to ask for help. You can see it as a pair programming session where the goal is to create the solution together.

Good luck!
