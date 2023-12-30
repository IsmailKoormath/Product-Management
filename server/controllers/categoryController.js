import { save, getAll } from "../services/category.service.js";

export async function saveCategory(req, res, next) {
  try {
    const categoryData = req.body;
    const result = await save(categoryData);
    res.status(200).send({ message: "successfully added category" });
  } catch (err) {
    next(err);
  }
}

export async function getAllCategory(req, res, next) {
  try {
    const result = await getAll();
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
}
