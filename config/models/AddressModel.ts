import mongoose, { Document, mongo } from "mongoose";

interface Address extends Document {
  STREET: string;
  CITY: string;
  STATE: string;
  ZIPCODE: string;
  COUNTRY: string;
}

const Schema = new mongoose.Schema<string, Address>({
  STREET: String,
  CITY: String,
  STATE: String,
  ZIPCODE: String,
  COUNTRY: String,
});

export default mongoose.models.Address || mongoose.model("Address", Schema);
