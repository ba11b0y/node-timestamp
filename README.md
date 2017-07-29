A simple API which runs on Node.js with the following user stories.


Timestamp microservice

    User stories:

        1) User can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)

        2) If it does, it returns both the Unix timestamp and the natural language form of that date.

        3) If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:
https://timestamp-ms.herokuapp.com/December%2015,%202015
https://timestamp-ms.herokuapp.com/1450137600
Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" } 


My Project
------------

On the front-end,
- edit `public/client.js`, `public/style.css` and `views/index.html`
- drag in `assets`, like images or music, to add them to the project

On the back-end,
- the app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but the and people I invite)


Made and deployed on Glitch:
Some information about Glitch.

Welcome to the Glitch BETA
=========================

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

**Glitch** is the friendly commmunity where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).
