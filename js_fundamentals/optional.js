// Exercise: GreaseMonkey 

// In these exercises, you'll write GreaseMonkey scripts that will get run on webpage. First, learn more about GreaseMonkey:

// Read this tutorial to learn how to make GreaseMonkey scripts for Firefox, you should have a basic script by the end.
// Read this article to learn how to get them working in Chrome and check yours works.
// Amazon Linker

// In this exercise, you’ll make a GreaseMonkey script that will run on Amazon product pages for movies and TV shows (e.g., The Matrix), and add a link to your favorite review site, like Rotten Tomatoes or MetaCritic. The steps:

// Make sure your script only runs on Amazon URLs.
// Verify that the page is in the "Movies & TV" department.
// Extract the movie's title from the page. Watch out for extra information in () and [] that isn't part of the title (e.g., the entry for "Batman Begins" is actually "Batman Begins [Blu-ray] (2005)").
// Synthesize a URL to your review site by adding the extracted title as the search parameter. To figure this out, do a search for the movie manually on the review site and examine the URL of the search page -- you'll want to copy that and replace just the part that has the movie title.
// Remember that URLs can't include spaces; you can either replace them yourself with '+' or use the built-in encodeURIComponent() function to make the title safe for inclusion in a URL.
// Find a location to insert the link (e.g., right before the star rating).
// Insert a new link element into the page.
// Event Linker

// In this exercise, you’ll make a script to link dates on a website to Google Calendar create-an-event links, so that you can easily add an event from a website to your calendar.

// Go to a page on SF Fun Cheap with a daily listing, like this one.
// Figure out how to identify event blocks on the page. For each event:
// Extract the title, date, location, and description.
// Create a URL to Google Calendar, following these instructions.
// Linkify the date to that URL, adding a small Google Calendar icon.
// Think of another site you use which has events with dates that you frequently add to your calendar, and extend the script to support that site as well. Figure out what code is the same and what code is different, and organize it into appropriate functios.
// CraigsList Price Visualizer

// In this exercise, you’ll write a script to color prices on Craigslist so it’s easier to browse at a glance.

// Go to a craigslist page with multiple item listing, like this one.
// Find every price on the page, and figure out the maximum price and minimum price. (Hint: check the JavaScript Math object reference.)
// For each price, figure out what color it should be, calculating between green (for the minimum) and red (for the maximum). (Hint: use the HSL to specify the colors, and just vary the hue between green and red.)
// Style the price with that color.
// Something Useful for YOU

// The point of GreaseMonkey is to make the web more usable for yourself. Write a script that makes your web experience better in some way - think about how you use social media sites, Gmail, etc, and if there are things that annoy you about them. Have fun!