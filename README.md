# Basic Todo App

This is a basic, single page, todo app using VueX. The app supports selecting the total number of Todos desired from the jsonplaceholder API, as well as the creation of a new Todo item, the ability to delete a todo, and the ability mark/toggle a todo as complete or incomplete.

## How to Run

1. Navigate to Terminal

> open directory in your Terminal

2. Start the server:

> type "npm run serve" OR "yarn serve"

> press "enter"

3. View the app:

> open localhost:8080 in your browser (might open automatically)

## Abilities & Features

* A user can create a new Todo item and it will show in the UI and be "pseudo-sent" to the JSON Placeholder API
* A user can filter and decide if they would like to see 200, 100, 50, 20, 10 or 5 Todo items
* A user can toggle a Todo item's completion status in the UI and in the JSON Placeholder API
* A user can delete a Todo item in UI and in JSON Placeholder API


## Notable Technologies/Functions/Methods

| Technology/Function  | Purpose                                                                                                                                                  |
| -------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------:|
| JSON Placeholder     | Source of Todo item data                                                                                                                                 |
| Axios                | Make GET Req (fetch and filter the number of Todos desired), DELETE Req (delete a Todo item), POST Req (create a Todo item), and PUT req (update a todo) |
| VueX                 | Allow the sharing of state between multiple components                                                                                                   |
| font awesome         | Give a visual "button" for a user to click when they wish to delete a todo
| grid (css)           | Display Todos in a grid-like format where each Todo item is on it's own tile

* This is my first time using VueX
* There is a store with a todos.js module; the module holds all the methods that makes various "async await" requests
* By double clicking on a Todo item, it is updated as being completed or not completed 
* Using a "select" button that opens a dropdown a user can select how many Todos they wish to see
* Todo creation and deletion is sent to JSON Placeholer API 
* JSON Placeholder is not a full service backend so creation, update and deletion are all "sort of" occuring


## Future Implementation(s)

* A user should have an account to save their Todo item's
* The UI would benefit from rounder edges on the "Add Todo" input box and "Submit" button
* Implement Testing 

