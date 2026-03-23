const protect = (req, res, next) => {
  res.status(401).json({ message: "Not authorized yet - middleware placeholder" });
};

module.exports = { protect };