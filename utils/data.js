const users = [
  {
    username: 'homer',
    email: 'homer@email.com'
  },
  {
    username: 'marge',
    email: 'marge@email.com'
  },
];


  // Create empty array to hold the students
  const thoughts = [
    {
      thoughtText: 'I am a thought',
      username: 'homer',
    },
    {
      thoughtText: 'Here is a second thought',
      username: 'Marge',
    }
  ];


// Export the functions for use in seed.js
module.exports = { thoughts, users };
