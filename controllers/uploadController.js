exports.upload = async (req, res) => {
  try {
    res.send("ok");
  } catch (error) {
    res.json({ msg: error.message });
  }
};
