[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# alisters-social-network-API

## Description
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of my bootcamp course, I’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that I understand how to build and structure the API first.

This challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, I will also use a JavaScript date library of my choice or the native JavaScript Date object to format timestamps.
Because this application won’t be deployed, I have created a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. 

### User Story
```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```
### Acceptance Criteria
```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Demo Link
https://drive.google.com/file/d/1KjMOqO_d1uvhH1JhWOIV3amYDYTU5xOT/view

## Link to Repo
https://github.com/porteous89/alisters-social-network-API

## Screen Shots

Seeding the Database:

<img src="assets\seeding-database.png" width= 45% >

Using Insomnia to GET all Thoughts:

<img src="assets\get-all-thoughts.png" width= 45% >

## Built Using
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- Console.table

## Usage
To run: npm start
Open Insomnia

For Users and Thoughts try each Route, Get All, Get by ID, Post, Put and Delete.
You can also try Adding/Removing both Friends and Reactions.


## License
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
 
This project is licensed under the MIT license. See the [LICENSE](https://opensource.org/licenses/MIT) file for details.


## Credits
Difference between ODM and ORM
https://medium.com/@julianam.tyler/what-is-the-difference-between-odm-and-orm-267bbb7778b0

MongoDB Crash Course
https://youtu.be/-56x56UppqQ

MongoDB Cheat Sheet
https://gist.github.com/bradtraversy/f407d642bdc3b31681bc7e56d95485b6

## contribution
PLease checkout my github link for contributions -  [https://github.com/porteous89](https://github.com/porteous89).

## Questions
If you have any questions about the repo, open an issue or contact me directly at alisterporteous@hotmail.com. You can find more of my work at [https://github.com/porteous89](https://github.com/porteous89).

