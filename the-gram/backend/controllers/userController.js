exports.getUserProfile = async (req, res) => {
    try {
      const userId = req.params.id;
      const userProfile = await User.findById(userId).select('-password');
      res.json(userProfile);
    } catch (error) {
      res.status(500).send(error.message);
    }
 };
 