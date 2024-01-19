import mongoose, { Document } from "mongoose";

interface ProductCategory extends Document {
  PRODCATEGORYCODE: string;
  DESCRIPTION: string;
  CREATEDBY: mongoose.Schema.Types.ObjectId;
  CREATEDAT: string;
}

const Schema = new mongoose.Schema<ProductCategory>(
  {
    PRODCATEGORYCODE: { type: String },
    DESCRIPTION: { type: String },
    CREATEDBY: { type: mongoose.Schema.Types.ObjectId },
    CREATEDAT: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.ProductCategory ||
  mongoose.model("ProductCategory", Schema);
