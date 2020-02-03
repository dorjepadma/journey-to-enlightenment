//get user data set up character (change state/ set dom)
//store user data and character in local storage (change state)
//read user quest line (set dom)
//user sees map and chooses quest (set dom)
//quest presents three options for user to choose (change state)
//user accumulates merit and wisdom data stored in local storage (change state)
//quest result display (change state and dom)
//quest totals tally end of game (change state and dom)

// Danny's live class code
// render a list of questions based on the metadata
// get the ul from the DOM
// get the qustions from teh meta data
// loop thorugh the questions
// get a questionm from the array
//make an li for the question
// create li
// make an a tag for the li
// add text content and other properties to a tag
// add the href  to a tage with query params for the question
//if there are any questions left to answer render a list of remaining questions
//if there are no questions left to answer, render a result page. 
// make an li for every question
// create li
// make an a tag for the ListeningStateChangedEvent//unless the quest is already completed (check local storage). if so make a <span> 
//add text content and other properties to atag
//add the href to the a tag with query params for the question
//append a tag to li
//append the question li to the ul

//if there are 


//get form from DOM
//
//create a label for each choice with span input inside
//gte the data for the correct question using the query parameter and findById
//get the data
//put the question description in a #question
//for each option/choice, render a radio button
//make a label
//make a span
//add the choice.description to the span
//make a input of :
//type:radio
//name: question
//for the form, add an event listener on submit
//in the event listener get the form Data
//use the user selection in the form data to update the DOM and change state
//call the question completee in state, and redirect to map

//algorithm for results page
//different for everybody
// get the user choices from local Storage
//count the number of answers that correspon to each house and get a winner (this is the tricky part)
//based on teh winner, display helpful DIFFERENT information about how to live the rest of your life
//clear local storage for this user
