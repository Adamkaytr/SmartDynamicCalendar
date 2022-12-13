// Use the icalgen library
import * as ical from 'https://cdnjs.cloudflare.com/ajax/libs/icalgen/1.2.0/icalgen.min';


import { saveAs } from 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.2/FileSaver.min.js';


// Get the current date and time
const now = new Date();

// Get the user's time zone offset from UTC in minutes
const timeZoneOffset = now.getTimezoneOffset();

// Specify the version of the iCalendar format to use
ical.setVersion('2.0');

// Set the start and end times of the event, adjusted for the user's time zone offset
const startTime = new Date(now.getTime() + (timeZoneOffset * 60000));
startTime.setHours(20);
startTime.setMinutes(15);
const endTime = new Date(startTime.getTime() + (19 * 60000));



// Add the event to the iCalendar object
ical.addEvent({
  start: startTime,
  end: endTime,
  summary: 'Sleep Hygiene', // Summary/title of the event
  description: 'Practice good sleep hygiene to improve your sleep', // Description of the event
  location: 'Home', // Location of the event
  recurrence: [
    'FREQ=DAILY', // This specifies that the event should reoccur daily
    'UNTIL=20231231' // This specifies that the event should stop reoccurring on December 31, 2023
  ]
});

// Generate the .ics file
var icsFile = ical.toString();



// Add an event listener for the load event on the window object
window.addEventListener('load', () => {
  // Get the download button
  const downloadBtn = document.getElementById('download-btn');

  // Add an event listener for the click event on the button
  downloadBtn.addEventListener('click', () => {
    // Trigger the download of the ics file using the FileSaver.js library
    saveAs(new Blob([icsFile]), 'event.ics');
  });
});
