const createReview = async (req, res) => {
  res.json({ message: `Create review for cafe ${req.params.id} route working` });
};

const updateReview = async (req, res) => {
  res.json({ message: `Update review ${req.params.id} route working` });
};

const deleteReview = async (req, res) => {
  res.json({ message: `Delete review ${req.params.id} route working` });
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
};