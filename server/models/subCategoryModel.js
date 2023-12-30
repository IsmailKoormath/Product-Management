import mongoose from "mongoose";

const Schema = mongoose.Schema;

const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const SubCategory = mongoose.model("subCategory", subCategorySchema);
export default SubCategory;
