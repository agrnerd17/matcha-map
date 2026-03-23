const registerUser = async (req, res) => {
  res.json({ message: "Register user route working" });
};

const loginUser = async (req, res) => {
  res.json({ message: "Login user route working" });
};

module.exports = {
  registerUser,
  loginUser,
};