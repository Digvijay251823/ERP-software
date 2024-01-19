import mongoose, { Document } from "mongoose";

interface Product extends Document {
  TYPECODE: string;
  PRODCATEGORYID: string;
  CREATEDBY: { type: mongoose.Schema.Types.ObjectId };
  CHANGEDBY: { type: mongoose.Schema.Types.ObjectId };
  SUPPLIER_PARTNERID: string;
  TAXTARIFFCODE: string;
  QUANTITYUNIT: string;
  WEIGHTMEASURE: string;
  WEIGHTUNIT: string;
  CURRENCY: string;
  PRICE: string;
  WIDTH: string;
  DEPTH: string;
  HEIGHT: string;
  DIMENSIONUNIT: string;
  PRODUCTPICURL: string;
}

const Schema = new mongoose.Schema<Product>(
  {
    TYPECODE: {
      type: String,
    },
    PRODCATEGORYID: { type: String },
    CREATEDBY: { type: mongoose.Schema.Types.ObjectId },
    CHANGEDBY: { type: mongoose.Schema.Types.ObjectId },
    SUPPLIER_PARTNERID: { type: String },
    TAXTARIFFCODE: { type: String },
    QUANTITYUNIT: { type: String },
    WEIGHTMEASURE: { type: String },
    WEIGHTUNIT: { type: String },
    CURRENCY: { type: String },
    PRICE: { type: String },
    WIDTH: { type: String },
    DEPTH: { type: String },
    HEIGHT: { type: String },
    DIMENSIONUNIT: { type: String },
    PRODUCTPICURL: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product || mongoose.model("Product", Schema);
