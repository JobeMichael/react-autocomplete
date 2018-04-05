# GitHub User search

Sample Application to search GitHub users.

# Setup

` Clone the solution `

` npm install ` - To install all dependancies

` npm run dev ` - To run in local server

` npm run build ` - To create production script and css.

` npmr run test ` - To run testing.

# Technical Document

## search.jsx

`js/app/search.jsx`  - Main component, contains two child components autocomplete and Searchfield.

`selectedUser = user => { ... }`

selectedUser is a event and it will trigger when select some item from autocomplete. This event is avilable in `search.jsx`.

`searchEvent`

When user type query this event will trigger. **onKeyUp** event is used to trigger the event.

Used timeout logic to avoid unnessary api call when user keep type. If user give 300ms gap, then it calls api and render the data, otherwise it won't and it will clear the timeout and create new one on every **onKeyUp**.


  
