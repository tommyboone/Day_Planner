
// USER STORY:
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// JumboTron w/ title
// Bootstrap container-fluid
// Inputs for user to fill in text
// Each input is in a time block. Every 30 mins? Starting at 9:00am. Ending at 4:30pm.
// Button append to each input. Save input text to localStorage on click.
// Ability to color code
// When event is in the past, changes colors

$(document).ready(function(){

const m = moment();
console.log(m.format("dddd MMMM DDD YYYY"));
$('.jumbotron-fluid').append(m.format("dddd MMMM DDD YYYY"));







});
