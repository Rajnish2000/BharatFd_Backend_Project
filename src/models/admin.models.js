import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const adminSchema = new Schema(
  {
    adminName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

adminSchema.plugin(passportLocalMongoose);

const Admin = mongoose.model("Admin", adminSchema);

export { Admin };
