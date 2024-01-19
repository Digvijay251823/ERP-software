import mongoose, { Document } from "mongoose";

interface Employee extends Document {
  NAME_FIRST: string;
  NAME_MIDDLE: string;
  NAME_LAST: string;
  NAME_INITIALS: string;
  SEX: string;
  LANGUAGE: string;
  PHONENUMBER: number;
  EMAILADDRESS: string;
  LOGINNAME: string;
  ADDRESS: mongoose.Schema.Types.ObjectId;
  VALIDITY_STARTDATE: string;
  VALIDITY_ENDDATE: string;
}

const Schema = new mongoose.Schema<string, Employee>({
  NAME_FIRST: {
    type: String,
    required: true,
  },
  NAME_MIDDLE: {
    type: String,
    required: true,
  },
  NAME_LAST: {
    type: String,
    required: true,
  },
  NAME_INITIALS: {
    type: String,
  },
  SEX: {
    type: String,
    enum: ["MALE", "FEMALE"],
    required: true,
  },
  LANGUAGE: {
    type: String,
    required: true,
  },
  PHONENUMBER: {
    type: Number,
    required: true,
  },
  EMAILADDRESS: {
    type: String,
    required: true,
  },
  LOGINNAME: {
    type: String,
  },
  ADDRESS: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  VALIDITY_STARTDATE: {
    type: Date,
    default: new Date(),
  },
  VALIDITY_ENDDATE: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.models.Employee || mongoose.model("Employee", Schema);
