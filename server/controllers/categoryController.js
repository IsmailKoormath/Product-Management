
// add new category

export const addCategory = async (req, res) => {
  const { name } = req.body;

  const existingCategory = await User.findOne({ name });
  if(existingCategory)
  return res.status(400).json({message:"category Already exist!"})
};
