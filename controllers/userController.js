const {User, Thought } = require('../models');

module.exports = {
    // Get all users
    getUsers(req, res) {
      User.find()
      .populate('thoughts')
      .populate('friends')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    // Get a User
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
        .select('-__v')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No User with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a User
    createUser(req, res) {
      User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Delete a User
    deleteUser(req, res) {
      User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No User with that ID' })
            :res.json({ message: 'User deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a User
    updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No User with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },


// Add a friend
addFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $addToSet: { friends: req.params.friendId } },
    { new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No User with this id!' })
        : res.json(user)
    ) 
    .catch((err) => res.status(500).json(err));
},
// Remove a friend
removeFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    { $pull: { friends: req.params.friendId } },
    { new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No User with this id!' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
}
};
