Created a default react app using npm
Adding Recipes API into the app 
    1. Created a file called key.js - Created 2 constants for App ID and APp KEY in it
    2. Imported key.js into app.js, added a variable called URL to call API and insert 2 constants there
Added axios from terminal - npm add axios, then imported into app
*Await - used for function which take time, the function which contains await should be async

//Styling//

Created app.css 
    1. Used .app class and made it center

Created a form to search from ingredient in app.js
    Form is used to update a constant called query
    query can be updated only by setquery, a function called useState is used in line 11 for that
    Added the search bar. When the value of query changes, it will setquery of the searched value
    Added a button along search bar to submit search item, styled it 
    When search button is clicked, page reloads by default, to prevent that, a constant has created in line 30 (onSubmit)


Created a new file called recipies.js and recipies.css to display recipie tiles.

*es7 code snippet plugin is used to generate barebone code snippets at once. (Creates functional components)

Created a new div in app.css to save searched recipies by hooks

*HOOKS* Hooks are used when we need to update a variable and the frontend at the same time

Created a map to fo through recipes array - Line 61
recipe is set as a prop in recipies.js, then brought back to app.js


Styling images and recipies
//Since recipetiles.js didn't work, I added them in app.js temporarily - It works now!

//To style all recipies to display in a grid, created a <div> around recipies.map in line 

Added a user preference option as a dropdown menu. Created a hook to get user preference from the dropdown list
from line 67


Deploying into firebase

-npm run build
sudo npm install -g firebase-tools
firebase login - to log into firebase
firebase init
firebase deploy

//Missed! Added function to redirect into a new window with recipie on recipetiles,js
Created a function for <div> class recipetiles as an onclick
Provided the url of recipe there
Added animation for cursor when a tile is clicked



*Whenever an edit is done

In terminal - Type
npm run build, then
firebase deploy