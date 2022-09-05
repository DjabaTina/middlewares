const getUsers = (req, res) => {
  res.status(200).send("Your message has been saved");
};
const getUser = (req, res) => {
  res.status(200).send("Your message has been saved");
};
const createUser = (req, res) => {
  res.status(201).send("Your message has been created");
};
const updateUser = (req, res) => {
  res.status(200).send("Your message has been updated");
};
const deleteUser = (req, res) => {
  res.status(200).send("Your message has been deleted");
};
module.exports = {
  getUsers,
  getUser,
  createUser,
  deleteUser,
};
