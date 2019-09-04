# Train Scheduler

This game is my Unit 6 homework submission for UNC Charlotte's Coding Bootcamp.  

The objective of this assignment was to build an interactive train schedule application that incorporates Firebase to host arrival and 
departure data. The application will retrieve and manipulate this information with Moment.js. The website will provide up-to-date 
information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

The application is to be built with HTML that is dynamically updated using Javascript and the jQuery library. The webpage also needs to 
pull data from a Firebase database and incorporate Moment.js to manipulate and display data in correct time formats.

Click [here]( https://chrisboyce886.github.io/Train-Scheduler/ ) to play the game. 


## How to Use
* Use the forms at the bottom of the page to enter the name of the train, its destination, the first train time, and the frequency of that train. Press Submit when finished. 
* The top card displays the table of current train times along with that trains information. Each new train entered by the user will be displayed here. 


## Design Notes
* All train information is stored within a Firebase database meaning that the information entered into this website will be displayed and can be viewed by any other user using a different browser or computer. 


## Built With
* [Firebase](https://firebase.google.com/)
* Javascript
* [jQuery](https://jquery.com/)
* [Moment.js](https://momentjs.com/)
* [Bootstrap 4](https://getbootstrap.com/)
* HTML5
* CSS3
