Your assignment

Create a ‘reusable component’ called ‘muscle-number’ (this is a term invented by Priva ;-) to state that the `value` is the most important asset in this component and should be immediate recognizable and stand-out for the user)

The `muscle-number` component contains a title, value (temperature), unit label (default is Celcius) and a date and time of the measurement. An `assets/measurements.json` file is provided with 2 measurement objects (indoor and outdoor temperature)

Your task is to display 2 muscle number components with the data from `measurements.json` in the app’s `main-component`. 

During this assignment please feel free to ask questions, discuss approaches or challenge the solution. Formulating an approach is as valuable as implementing it. If you feel like you are getting stuck in what syntax to use or get insecure feel free to ask for help. You can see it as a pair programming session where the goal is to create the solution together.

This is the stackblitz template: https://stackblitz.com/edit/angular-ivy-uasoqd

The `muscle-number` component should have the following features (in order of importance)
- Display title, value, unit and date. (pass the data object to the component)
- Make the value standout (e.g. make it bigger on screen) E.g. create styling for the component roughly matching the style presented in the design image as supplied to you.
- The default font is ‘Roboto’. You can load it like this: `@import url("https://fonts.googleapis.com/css2?family=Roboto");`
- Create a switch to display the value in either `Celcius` or `Fahrenheit` units (default is Celcius)
- Display the date and time (from dateTime provided in JavaScript notation in the data) in a more user-friendly manner (render the day and month in human readable text, e.g. Monday, Februari 15, etc…) (by using an Angular pipe)
- Display the value with 1 decimal only. (by using an Angular pipe)

Optional
- Create an Angular pipe to display the unit in a more user-friendly and generic way, for example add a `°` symbol to it.
- Display the value nl-NL locale. (e.g. the value is displayed with a comma as decimal separator)
- Display the date in nl_NL locale (For example `February` becomes `februari`)
- Create a typescript interface for the measurement data and implement it the places the measurement data is used
- Add a enum for the `Celcius` / `Fahrenheit` switch and implement it in the places where it is used


Good luck!
