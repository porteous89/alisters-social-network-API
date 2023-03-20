const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { thoughts, users } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thought.deleteMany({});

    // Add courses to the collection and await the results
   const userData = await User.collection.insertOne({
      userName: 'alister',
      email: 'alister@email.com'
    });
  

  // Add students to the collection and await the results
  const thoughtData = await Thought.collection.insertMany(thoughts);
for (let i = 0; i < thoughtData.length; i++) {
  await User.findByIdAndUpdate(
      userData._id ,
    { $push: { thoughts: thoughtData[i]._id } },
    { new: true }
 )
}

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});