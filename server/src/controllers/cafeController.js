const getAllCafes = async (req, res) => {
  res.json({ message: "Get all cafes route working" });
};

const getCafeById = async (req, res) => {
  res.json({ message: `Get cafe ${req.params.id} route working` });
};

const createCafe = async (req, res) => {
  res.json({ message: "Create cafe route working" });
};

module.exports = {
  getAllCafes,
  getCafeById,
  createCafe,
};